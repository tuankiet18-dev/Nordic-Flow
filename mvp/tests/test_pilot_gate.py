"""Pilot evidence page: several replayed weeks -> go / no-go, plus the Dynamics -> Salesforce code-map check."""
import io
import zipfile
from pathlib import Path
import pytest
from fastapi.testclient import TestClient
from api.main import create_app
from nordic_flow.pilot_gate import check_code_map, summarise

HISTORY = Path(__file__).parent.parent / "data" / "history"
EXAMPLES = Path(__file__).parent.parent / "frontend" / "public" / "examples"


class NoLLM:
    enabled, model = False, None


@pytest.fixture
def client(tmp_path):
    return TestClient(create_app(tmp_path / "t.db", llm_factory=NoLLM))


def week_zip(folder: Path, drop: str | None = None, edit=None) -> bytes:
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w") as z:
        for f in sorted(folder.glob("*.csv")):
            if f.name == drop:
                continue
            text = f.read_text(encoding="utf-8")
            if edit and f.name in edit:
                text = edit[f.name](text)
            z.writestr(f.name, text)
    return buf.getvalue()


def row(period, pct, actual=1000.0):
    if pct is None:
        return {"period": period, "actual": None, "saving": None, "saving_pct": None}
    return {"period": period, "actual": actual, "saving": actual * pct / 100, "saving_pct": pct}


def test_gate_needs_four_comparable_weeks():
    s = summarise([row("w1", 5), row("w2", 5), row("w3", 5)])
    assert s["decision"] == "NOT_DECIDED" and "at least 4" in s["reasons"][0]


def test_gate_go_and_no_go_use_the_total_over_comparable_weeks():
    assert summarise([row(f"w{i}", 2.5) for i in range(4)])["decision"] == "GO"
    s = summarise([row("w1", 4), row("w2", 1), row("w3", 1), row("w4", 1)])
    assert s["decision"] == "NO_GO" and s["total_pct"] == pytest.approx(1.75)
    assert summarise([row(f"w{i}", 2.0) for i in range(4)])["decision"] == "GO"      # gate is "at least 2%"


def test_uncomparable_weeks_are_left_out_and_reported_never_counted():
    s = summarise([row(f"w{i}", 3) for i in range(4)] + [row("bad", None)])
    assert s["decision"] == "GO" and s["comparable"] == 4 and s["excluded"] == ["bad"]
    assert any("bad" in r for r in s["reasons"])
    s = summarise([row(f"w{i}", 3) for i in range(3)] + [row("bad", None)])
    assert s["decision"] == "NOT_DECIDED"


def test_sample_history_matches_the_cli_replay_and_says_go(client):
    r = client.post("/api/evidence/sample")
    assert r.status_code == 200
    out = r.json()
    assert [x["period"] for x in out["rows"]] == ["week-1", "week-2", "week-3", "week-4"]
    assert [x["saving_pct"] for x in out["rows"]] == [4.23, 2.21, 3.12, 3.12]
    s = out["summary"]
    assert s["total_pct"] == 3.16 and s["median_pct"] == 3.12 and s["decision"] == "GO"
    assert out["zones"] == ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6"]
    events = client.get("/api/audit").json()
    assert events[-1]["type"] == "EVIDENCE_COMPUTED" and events[-1]["payload"]["decision"] == "GO"
    assert client.get("/api/audit/verify").json()["ok"]


def test_uploaded_weeks_one_zip_each(client):
    files = [("files", (f"history-week-{i}.zip", (EXAMPLES / f"history-week-{i}.zip").read_bytes(), "application/zip"))
             for i in range(1, 5)]
    out = client.post("/api/evidence", files=files).json()
    assert [x["period"] for x in out["rows"]] == [f"history-week-{i}" for i in range(1, 5)]
    assert out["summary"]["total_pct"] == 3.16 and out["summary"]["decision"] == "GO"


def test_week_without_actual_plan_is_excluded(client):
    files = [("files", (f"w{i}.zip", week_zip(HISTORY / f"week-{i}"), "application/zip")) for i in range(1, 5)]
    files.append(("files", ("no-actual.zip", week_zip(HISTORY / "week-1", drop="actual_plan.csv"), "application/zip")))
    out = client.post("/api/evidence", files=files).json()
    bad = [x for x in out["rows"] if x["period"] == "no-actual"][0]
    assert bad["saving"] is None and "actual_plan" in bad["note"]
    assert out["summary"]["excluded"] == ["no-actual"] and out["summary"]["decision"] == "GO"


def test_actual_plan_that_does_not_serve_demand_shows_no_saving(client):
    cut = lambda t: "\n".join(t.strip().splitlines()[:-3]) + "\n"           # drop shipped rows: demand unserved
    files = [("files", ("short.zip", week_zip(HISTORY / "week-1", edit={"actual_plan.csv": cut}), "application/zip"))]
    out = client.post("/api/evidence", files=files).json()
    assert out["rows"][0]["saving"] is None and out["summary"]["decision"] == "NOT_DECIDED"


def test_evidence_upload_rejects_bad_input(client):
    assert client.post("/api/evidence", files=[("files", ("w.csv", b"x", "text/csv"))]).status_code == 422
    z = (EXAMPLES / "history-week-1.zip").read_bytes()
    dup = [("files", ("a.zip", z, "application/zip")), ("files", ("a.zip", z, "application/zip"))]
    assert client.post("/api/evidence", files=dup).json()["code"] == "duplicate_week"
    many = [("files", (f"w{i}.zip", z, "application/zip")) for i in range(13)]
    assert client.post("/api/evidence", files=many).json()["code"] == "too_many_weeks"


def test_code_map_sample_covers_every_zone():
    text = (EXAMPLES / "crm-code-map-sample.csv").read_text(encoding="utf-8")
    out = check_code_map(text, ["Z1", "Z2", "Z3", "Z4", "Z5", "Z6"])
    assert out["ok"] and out["mapped"] == 6 and out["unmapped"] == []


def test_code_map_finds_unmapped_conflicts_merges_and_empty_rows():
    text = ("dynamics_id,salesforce_id\nZ1,SE-1\nZ1,SE-9\nZ2,SE-2\nZ3,SE-2\nZ4,\nOLD,SE-7\n")
    out = check_code_map(text, ["Z1", "Z2", "Z3", "Z4", "Z5"])
    assert not out["ok"]
    assert out["unmapped"] == ["Z4", "Z5"]                 # Z4 row has no new code, Z5 has no row
    assert out["conflicts"] == {"Z1": ["SE-1", "SE-9"]}
    assert out["merged"] == {"SE-2": ["Z2", "Z3"]}
    assert out["empty_rows"] == [6] and out["unused"] == ["OLD"]


def test_code_map_needs_the_two_columns():
    out = check_code_map("old,new\nZ1,SE-1\n", ["Z1"])
    assert not out["ok"] and "dynamics_id" in out["error"]


def test_code_map_endpoint_is_audited(client):
    text = (EXAMPLES / "crm-code-map-sample.csv").read_bytes()
    r = client.post("/api/evidence/code-map", files={"file": ("map.csv", text, "text/csv")},
                    data={"zones": '["Z1","Z2","Z7"]'})
    out = r.json()
    assert r.status_code == 200 and out["unmapped"] == ["Z7"] and not out["ok"]
    assert client.get("/api/audit").json()[-1]["type"] == "CODE_MAP_CHECKED"
    bad = client.post("/api/evidence/code-map", files={"file": ("map.csv", text, "text/csv")}, data={"zones": "nope"})
    assert bad.status_code == 422
