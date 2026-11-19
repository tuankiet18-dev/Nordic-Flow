"""History replay: the plan that was actually shipped becomes the baseline."""
import shutil
from pathlib import Path
import pytest
from fastapi.testclient import TestClient
from api.main import create_app
from nordic_flow.baseline import baseline
from nordic_flow.io import load_dataset
from nordic_flow.replay import generate_history, plan_paths, replay
from nordic_flow.validation import validate
from nordic_flow.verify import verify_plan

DATA = Path(__file__).parent.parent / "data"
GOLDEN = DATA / "golden"


def copy_golden(tmp_path, actual_rows):
    folder = tmp_path / "week"
    shutil.copytree(GOLDEN, folder)
    lines = ["supplier_id,warehouse_id,zone_id,sku_id,pallets", *actual_rows]
    (folder / "actual_plan.csv").write_text("\n".join(lines) + "\n", encoding="utf-8")
    return folder


def errors(folder):
    ds, issues = load_dataset(folder)
    return ds, [i.message for i in issues + validate(ds) if i.severity == "error"]


def test_actual_plan_is_the_baseline_and_is_verified(tmp_path):
    # Golden: the habit plan sends everything through A (cost 700); the optimum is 500.
    folder = copy_golden(tmp_path, ["S1,A,N,SKU-01,60", "S2,A,S,SKU-01,40"])
    ds, errs = errors(folder)
    assert not errs and ds.baseline_kind == "actual"
    base = baseline(ds)
    assert base.mode == "actual" and base.status == "BASELINE" and not verify_plan(ds, base)
    rows = replay(folder)
    assert rows[0]["actual"] == 700 and rows[0]["optimised"] == 500 and rows[0]["saving"] == 200


def test_actual_plan_that_misses_demand_gives_no_saving(tmp_path):
    folder = copy_golden(tmp_path, ["S1,A,N,SKU-01,60", "S2,A,S,SKU-01,30"])
    ds, errs = errors(folder)
    assert not errs
    assert baseline(ds).status == "BASELINE_INFEASIBLE"
    row = replay(folder)[0]
    assert row["saving"] is None and row["optimised"] == 500 and "not comparable" in row["note"]


def test_actual_plan_over_capacity_is_not_comparable(tmp_path):
    folder = copy_golden(tmp_path, ["S1,B,N,SKU-01,60", "S2,B,S,SKU-01,40"])   # B holds only 60
    row = replay(folder)[0]
    assert row["saving"] is None and "capacity exceeded" in row["note"]


@pytest.mark.parametrize("rows, message", [
    (["S1,X,N,SKU-01,60"], "unknown warehouse"),
    (["S9,A,N,SKU-01,60"], "unknown supplier"),
    (["S1,A,N,SKU-99,60"], "unknown SKU"),
    (["S1,A,N,SKU-01,abc"], "must be a number"),
    (["S1,A,N,SKU-01,60", "S1,A,N,SKU-01,10"], "duplicate key"),
    (["S1,A,,SKU-01,60"], "are required"),
])
def test_bad_actual_plan_rows_block_the_run(tmp_path, rows, message):
    _, errs = errors(copy_golden(tmp_path, rows))
    assert any(message in e for e in errs), errs


def test_replay_rejects_transfer_networks(tmp_path):
    folder = tmp_path / "t"
    shutil.copytree(DATA / "transshipment", folder)
    (folder / "actual_plan.csv").write_text("supplier_id,warehouse_id,zone_id,sku_id,pallets\n", encoding="utf-8")
    ds, _ = load_dataset(folder)
    ds.actual[("x", "y", "z", "p")] = 1
    assert any("supplier -> warehouse -> zone" in i.message for i in validate(ds))


def test_synthetic_history_week_one_matches_the_demo(tmp_path):
    weeks = generate_history(tmp_path, weeks=2)
    assert [w.name for w in weeks] == ["week-1", "week-2"]
    rows = replay(tmp_path)
    assert rows[0]["actual"] == 32698 and rows[0]["optimised"] == 31316
    assert all(r["saving_pct"] is not None for r in rows)


def test_plan_paths_round_trip_the_habit_plan():
    ds, _ = load_dataset(DATA / "demo")
    habit = baseline(ds)
    paths = plan_paths(habit)
    assert sum(paths.values()) == sum(habit.outbound.values()) == sum(ds.demand.values())


@pytest.fixture
def client(tmp_path):
    return TestClient(create_app(tmp_path / "t.db"))


def test_api_replay_sample_reports_saving_against_the_actual_plan(client):
    s = client.post("/api/scenarios/sample", json={"name": "replay"}).json()
    assert s["valid"] and s["summary"]["baseline_kind"] == "actual" and s["summary"]["actual_plan_pallets"] == 606
    r = client.post(f"/api/scenarios/{s['id']}/runs", json={"mode": "milp"}).json()
    c = r["comparison"]
    assert c["baseline_kind"] == "actual" and c["baseline_valid"]
    assert c["baseline"]["total"] == 32698 and c["optimised"]["total"] == 31316 and c["saving"] == 1382
    e = client.post(f"/api/runs/{r['id']}/explanation").json()
    assert "actual plan from history" in e["text"]


def test_api_whatif_on_replay_cannot_reuse_the_actual_plan(client):
    s = client.post("/api/scenarios/sample", json={"name": "replay"}).json()
    r = client.post(f"/api/scenarios/{s['id']}/runs", json={}).json()
    w = client.post(f"/api/scenarios/{s['id']}/whatif",
                    json={"changes": [{"type": "scale_demand", "zone": "Z1", "factor": 1.1}], "reference_run_id": r["id"]})
    assert w.status_code == 200, w.text
    c = w.json()["comparison"]
    assert not c["baseline_valid"] and c["saving"] is None


def test_api_rule_baseline_is_labelled_rule(client):
    s = client.post("/api/scenarios/sample", json={"name": "golden"}).json()
    assert s["summary"]["baseline_kind"] == "rule"
    r = client.post(f"/api/scenarios/{s['id']}/runs", json={}).json()
    assert r["comparison"]["baseline_kind"] == "rule"
