"""Replay: run the optimiser on past planning periods and compare it with the plan that was actually executed.

Each period is a folder with the usual input CSV files plus actual_plan.csv. Nothing is executed and no
operation changes: the output only says how much cheaper a verified plan would have been on the same orders.
The synthetic history generated here is invented for demonstration and is not evidence about Company A.
"""
from __future__ import annotations
import csv
import statistics
from collections import defaultdict
from pathlib import Path
from .baseline import baseline
from .io import load_dataset
from .optimiser import solve
from .report import compare
from .schema import Dataset, Plan
from .synth import generate
from .validation import has_errors, validate
from .verify import verify_plan


def plan_paths(plan: Plan) -> dict[tuple[str, str, str, str], float]:
    """Split a single-warehouse plan into supplier -> warehouse -> zone paths (first in, first out per warehouse and SKU)."""
    supply = defaultdict(list)
    for (s, w, p), q in sorted(plan.inbound.items()):
        supply[w, p].append([s, q])
    paths = {}
    for (w, z, p), need in sorted(plan.outbound.items()):
        for lot in supply[w, p]:
            if need <= 1e-9:
                break
            take = min(need, lot[1])
            if take > 1e-9:
                key = (lot[0], w, z, p)
                paths[key] = paths.get(key, 0) + take
                lot[1] -= take
                need -= take
        if need > 1e-9:
            raise ValueError(f"inbound does not cover outbound at {w} for {p}")
    return paths


def write_actual_plan(folder: Path, paths: dict[tuple[str, str, str, str], float]) -> None:
    with (folder / "actual_plan.csv").open("w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["supplier_id", "warehouse_id", "zone_id", "sku_id", "pallets"])
        for (s, w, z, p), q in sorted(paths.items()):
            writer.writerow([s, w, z, p, int(q) if q == int(q) else q])


def generate_history(folder: str | Path, weeks: int = 4, seed: int = 7) -> list[Path]:
    """Synthetic past weeks for the demo region. The 'actual' plan imitates a planner who follows habit:
    each zone from its preferred warehouse, cheapest inbound first (the same rule as the baseline)."""
    folder = Path(folder)
    out, s = [], seed
    while len(out) < weeks:
        week = folder / f"week-{len(out) + 1}"
        generate(week, s)
        ds, _ = load_dataset(week)
        habit = baseline(ds)
        s += 1
        if habit.status != "BASELINE" or verify_plan(ds, habit):
            for f in week.glob("*.csv"):
                f.unlink()
            continue                     # habit could not serve this week: skip, it gives no comparable baseline
        write_actual_plan(week, plan_paths(habit))
        out.append(week)
    return out


def replay_period(folder: Path, mode: str = "milp", time_limit: float = 30) -> dict:
    ds, issues = load_dataset(folder)
    issues += validate(ds, mode)
    row = {"period": folder.name, "actual": None, "optimised": None, "saving": None, "saving_pct": None, "note": ""}
    if not ds.actual:
        row["note"] = "no actual_plan.csv"
        return row
    if has_errors(issues):
        row["note"] = "blocked: " + "; ".join(str(i) for i in issues if i.severity == "error")[:200]
        return row
    base, opt = baseline(ds), solve(ds, mode, time_limit)
    if not opt.usable or verify_plan(ds, opt):
        row["note"] = f"no verified plan ({opt.status})"
        return row
    c = compare(ds, base, opt)
    row["optimised"] = round(c["optimised"]["total"], 2)
    problems = verify_plan(ds, base)
    if base.status != "BASELINE" or problems:
        row["note"] = "actual plan not comparable: " + (problems[0] if problems else "demand not fully served")
        return row
    row.update(actual=round(c["baseline"]["total"], 2), saving=round(c["saving"], 2), saving_pct=round(c["saving_pct"], 2))
    return row


def replay(folder: str | Path, mode: str = "milp", time_limit: float = 30, out: str | Path | None = None) -> list[dict]:
    folder = Path(folder)
    periods = sorted((p for p in folder.iterdir() if p.is_dir() and (p / "actual_plan.csv").exists()),
                     key=lambda p: p.name)
    if not periods and (folder / "actual_plan.csv").exists():
        periods = [folder]
    rows = [replay_period(p, mode, time_limit) for p in periods]
    good = [r for r in rows if r["saving_pct"] is not None]
    print(f"{'period':<10} {'actual':>10} {'optimised':>10} {'saving':>9} {'%':>6}  note")
    for r in rows:
        fmt = lambda v, w: f"{v:>{w},.0f}" if isinstance(v, (int, float)) else f"{'-':>{w}}"
        pct = f"{r['saving_pct']:>6.2f}" if r["saving_pct"] is not None else f"{'-':>6}"
        print(f"{r['period']:<10} {fmt(r['actual'], 10)} {fmt(r['optimised'], 10)} {fmt(r['saving'], 9)} {pct}  {r['note']}")
    if good:
        actual, saving = sum(r["actual"] for r in good), sum(r["saving"] for r in good)
        pcts = [r["saving_pct"] for r in good]
        print(f"\n{len(good)} of {len(rows)} period(s) comparable. Total saving {saving:,.0f} of {actual:,.0f} "
              f"({saving / actual * 100:.2f}%); per period min {min(pcts):.2f}%, median {statistics.median(pcts):.2f}%, "
              f"max {max(pcts):.2f}%.")
    else:
        print("\nNo comparable period: no saving can be reported.")
    if out:
        with Path(out).open("w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=list(rows[0]) if rows else ["period"])
            writer.writeheader(); writer.writerows(rows)
    return rows
