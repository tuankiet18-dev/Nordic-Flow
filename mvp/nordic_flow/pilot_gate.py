"""Pilot evidence: replay several past weeks and turn the results into a go / no-go recommendation.

The gate follows the Round 3 plan: go to a live pilot only if the verified plans are at least GATE_PCT lower
than the actual plans over at least MIN_WEEKS comparable weeks. Weeks whose actual plan cannot be verified are
left out of the total and reported, never counted as savings. A person makes the decision; this only adds it up.

The CRM code-map check supports the Dynamics 365 -> Salesforce migration: delivery-zone codes in the weekly files
come from the CRM, so every code used in the replayed weeks needs exactly one new code before Salesforce exports
can replace Dynamics exports.
"""
from __future__ import annotations
import csv
import io
import statistics
from pathlib import Path
from .io import load_dataset
from .replay import replay_period

GATE_PCT = 2.0
MIN_WEEKS = 4


def replay_weeks(folders: list[tuple[str, Path]], mode: str = "milp", time_limit: float = 30) -> dict:
    """folders: (label, folder) pairs, one per past week. Returns per-week rows, zone codes used and the summary."""
    rows, zones = [], set()
    for label, folder in folders:
        row = replay_period(folder, mode, time_limit)
        row["period"] = label
        rows.append(row)
        ds, _ = load_dataset(folder)
        zones.update(ds.zones)
    return {"rows": rows, "zones": sorted(zones), "summary": summarise(rows)}


def summarise(rows: list[dict], gate_pct: float = GATE_PCT, min_weeks: int = MIN_WEEKS) -> dict:
    good = [r for r in rows if r.get("saving_pct") is not None]
    excluded = [r["period"] for r in rows if r.get("saving_pct") is None]
    out = {"weeks": len(rows), "comparable": len(good), "excluded": excluded, "gate_pct": gate_pct,
           "min_weeks": min_weeks, "total_actual": None, "total_optimised": None, "total_saving": None,
           "total_pct": None, "min_pct": None, "median_pct": None, "max_pct": None}
    if good:
        actual = sum(r["actual"] for r in good)
        saving = sum(r["saving"] for r in good)
        pcts = [r["saving_pct"] for r in good]
        out.update(total_actual=round(actual, 2), total_optimised=round(actual - saving, 2),
                   total_saving=round(saving, 2), total_pct=round(saving / actual * 100, 2) if actual else None,
                   min_pct=min(pcts), median_pct=round(statistics.median(pcts), 2), max_pct=max(pcts))
    reasons = []
    if len(good) < min_weeks:
        decision = "NOT_DECIDED"
        reasons.append(f"{len(good)} comparable week(s); the gate needs at least {min_weeks}.")
    elif out["total_pct"] is not None and out["total_pct"] >= gate_pct:
        decision = "GO"
        reasons.append(f"Verified plans are {out['total_pct']:.2f}% lower than the actual plans over {len(good)} "
                       f"weeks, at or above the {gate_pct:g}% gate.")
    else:
        decision = "NO_GO"
        reasons.append(f"Verified plans are {out['total_pct']:.2f}% lower than the actual plans over {len(good)} "
                       f"weeks, below the {gate_pct:g}% gate.")
    if excluded:
        reasons.append("Left out because the actual plan could not be compared: " + ", ".join(excluded) + ".")
    out["decision"], out["reasons"] = decision, reasons
    return out


CODE_MAP_COLUMNS = ("dynamics_id", "salesforce_id")


def check_code_map(text: str, used_codes: list[str]) -> dict:
    """Check a Dynamics -> Salesforce code map against the zone codes used in the replayed weeks."""
    reader = csv.DictReader(io.StringIO(text.lstrip("﻿")))
    header = [h.strip() for h in (reader.fieldnames or [])]
    missing = [c for c in CODE_MAP_COLUMNS if c not in header]
    if missing:
        return {"ok": False, "error": "code map needs the columns " + ", ".join(CODE_MAP_COLUMNS)
                + "; missing: " + ", ".join(missing), "rows": 0}
    targets: dict[str, set[str]] = {}
    empty, rows = [], 0
    for n, raw in enumerate(reader, start=2):
        rec = {(k or "").strip(): (v or "").strip() for k, v in raw.items()}
        old, new = rec.get("dynamics_id", ""), rec.get("salesforce_id", "")
        if not old and not new:
            continue
        rows += 1
        if not old or not new:
            empty.append(n)
            continue
        targets.setdefault(old, set()).add(new)
    used = sorted(set(used_codes))
    unmapped = [c for c in used if c not in targets]
    conflicts = {old: sorted(new) for old, new in targets.items() if len(new) > 1}
    by_new: dict[str, list[str]] = {}
    for old, news in targets.items():
        for new in news:
            by_new.setdefault(new, []).append(old)
    merged = {new: sorted(olds) for new, olds in by_new.items() if len(olds) > 1}
    unused = sorted(c for c in targets if c not in set(used))
    return {"ok": not unmapped and not conflicts and not empty, "error": None, "rows": rows,
            "used": len(used), "mapped": len(used) - len(unmapped), "unmapped": unmapped,
            "conflicts": conflicts, "merged": merged, "empty_rows": empty, "unused": unused}
