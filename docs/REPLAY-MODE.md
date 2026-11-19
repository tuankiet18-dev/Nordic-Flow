# History replay mode (Round 3)

Developer guide for the feature that compares the optimiser with **the plan that was actually shipped** in a past week. Read this before changing anything in replay.

## 1. Why it exists

Until Round 2 every saving was measured against a *synthetic* rule (each zone from its preferred warehouse). That is the weakest point of the proposal: nobody knows whether the rule looks like what planners really do.

Replay closes that gap without touching operations. A planner, or a consultant in the discovery week, exports 4 to 8 past weeks. For each week the system:

1. loads the usual 8 input files plus `actual_plan.csv` (what was really shipped);
2. checks the actual plan with the same independent verifier as every other plan;
3. calculates the optimised plan on the **same orders, supply and limits**;
4. reports the difference, or **no saving** if the actual plan cannot be compared.

Nothing is executed or sent anywhere. The output is evidence for a go/no-go decision.

## 2. Input contract: `actual_plan.csv`

Optional file, next to the 8 required files (or inside the same ZIP).

| Column | Type | Meaning |
|---|---|---|
| `supplier_id` | code from `suppliers.csv` | where the pallets came from |
| `warehouse_id` | code from `warehouses.csv` | warehouse that received and shipped them |
| `zone_id` | code from `zones.csv` | customer zone that received them |
| `sku_id` | code from `skus.csv` | product |
| `pallets` | number ≥ 0 | pallets shipped on this path in the period |

One row per supplier, warehouse, zone and product. Example:

```csv
supplier_id,warehouse_id,zone_id,sku_id,pallets
SUP1,WA,Z1,SKU-01,8
SUP2,WB,Z4,SKU-01,6
```

**Blocking errors** (the run cannot start):
- unknown supplier, warehouse, zone or SKU;
- a path whose inbound or outbound lane has no rate (it cannot be priced);
- non-numeric or negative pallets, an empty code, or a duplicate row;
- `actual_plan.csv` together with `transfer_rates.csv` or `direct_rates.csv` (not supported yet, see section 6).

**Warnings** (the run goes ahead):
- the actual plan does not match demand for some zone and product;
- fractional pallets in whole-pallet mode.

**When no saving is shown:** if the actual plan does not deliver every order exactly, or breaks a supply, capacity or lane limit, the comparison says the baseline is unusable and the saving is `null`. This is the same rule as for the preferred-warehouse baseline: **never report a saving against an unusable baseline.**

## 3. How it works in the code

| File | What it does |
|---|---|
| `mvp/nordic_flow/schema.py` | `Dataset.actual`: `(supplier, warehouse, zone, sku) -> pallets`. `Dataset.baseline_kind` returns `"actual"` or `"rule"` |
| `mvp/nordic_flow/io.py` | `OPTIONAL["actual_plan.csv"]` and the row parser (row-level errors, no silent fixes) |
| `mvp/nordic_flow/validation.py` | reference, lane and network checks; demand mismatch warning |
| `mvp/nordic_flow/baseline.py` | `actual_baseline(ds)` builds a `Plan` (mode `"actual"`) from the rows. `baseline(ds)` uses it whenever `ds.actual` is not empty |
| `mvp/nordic_flow/verify.py` | unchanged: the actual plan is checked like any other plan |
| `mvp/nordic_flow/explain.py` | facts carry `baseline_kind`; the standard summary says "actual plan from history" |
| `mvp/nordic_flow/replay.py` | multi-week replay (`replay`, `replay_period`), synthetic history (`generate_history`), plan to path split (`plan_paths`) |
| `mvp/nordic_flow/cli.py` | commands `history` and `replay` |
| `mvp/api/service.py` | `comparison.baseline_kind`, scenario summary fields `baseline_kind`, `actual_plan_rows`, `actual_plan_pallets`; sample `replay` |
| `mvp/frontend/src/views/DataView.jsx` | "History replay" sample, summary line, "Compared with the actual plan from history" |
| `mvp/frontend/src/views/ResultsView.jsx` | KPI "Actual plan (history)" and the replay note |
| `mvp/frontend/src/views/GuideView.jsx` | input format entry for `actual_plan.csv` |

Because `baseline()` decides the kind, the API, what-if, overrides, approval, export and audit all work unchanged. A what-if that changes demand or capacity makes the old actual plan no longer comparable, so it shows no saving. That is correct: the historical plan was made for the original week.

## 4. Running it

**In the web app:** Data page → **History replay** sample, or upload one of `mvp/frontend/public/examples/history-week-1.zip` … `history-week-4.zip` → Calculate plan.

**Command line, from `mvp/`:**

```powershell
# compare every week folder that contains actual_plan.csv
.\.venv\Scripts\python.exe -m nordic_flow replay data\history
# same, and save the table
.\.venv\Scripts\python.exe -m nordic_flow replay data\history --out replay.csv
# rebuild the synthetic history (4 weeks by default)
.\.venv\Scripts\python.exe -m nordic_flow history data\history --weeks 4
```

Output on the synthetic history (invented data, not a forecast):

| Week | Actual | Optimised | Saving |
|---|---|---|---|
| week-1 | 32,698 | 31,316 | 4.23% |
| week-2 | 33,812 | 33,066 | 2.21% |
| week-3 | 29,072 | 28,166 | 3.12% |
| week-4 | 38,180 | 36,988 | 3.12% |
| All | 133,762 | | 3.16% (median 3.12%) |

`replay` exits with code 5 when no week is comparable.

**Where the data comes from:** `data/history/week-N` are generated by `generate_history`. The "actual" plan imitates a planner who follows habit (preferred warehouse, cheapest inbound first). Week 1 uses seed 7, so it equals the demo data. `data/replay/` is a copy of week 1 used by the in-app sample. Rebuild the ZIPs after regenerating the history (see section 7).

## 5. Tests

`mvp/tests/test_replay.py` (15 tests) covers: the worked example 700 → 500 with an actual plan; an actual plan that misses demand or exceeds capacity gives no saving; every blocking error; the transfer-network rejection; the synthetic history; the path split; the API sample (1,382 saving, explanation wording); what-if on replay; and the `rule` label for normal samples.

```powershell
cd mvp
.\.venv\Scripts\python.exe -m pytest -q tests\test_replay.py
.\.venv\Scripts\python.exe -m pytest -q          # whole suite, 290 tests
```

Browser walk-throughs: `tests/e2e_*.js` (see `mvp/README.md`). `e2e_guide_shipping.js` counts 12 input files in the guide. `e2e_focused_workflow.js` already failed before this feature (an empty explanation text box after reload); it is a known, separate issue.

## 6. Limits, and how to extend

| Limit today | How to extend | Where |
|---|---|---|
| Only supplier → warehouse → zone paths | Add a `path` column (e.g. `WA>WB`) or separate `actual_transfers.csv` / `actual_direct.csv`; fill `Plan.transfers` / `Plan.direct` in `actual_baseline`; drop the validation block | `io.py`, `baseline.py`, `validation.py` |
| One week per upload in the web app | Accept a ZIP with `week-*/` folders and show the replay table on a new page; reuse `replay_period` | `api/service.py` (`read_zip` refuses folders today), new view |
| Same rates for the actual and the optimised plan | That is intended: the question is "same week, same prices". If real invoices differ, add an `actual_cost` column and report both | `report.py` |
| Synthetic history only | Real exports in discovery week. Keep `actual_plan.csv` as the contract and write a small adapter from the ERP or WMS export | new adapter script |
| Planner time and on-time delivery are not measured | Needs the live pilot, not replay | pilot plan |

Rules for any change:
- Never show a saving when `baseline_valid` is false.
- Every new file or column goes into `REQUIRED`/`OPTIONAL` in `io.py` **and** the guide in `GuideView.jsx`; `test_guide_contract.py` checks they match.
- Label every result from generated data as synthetic.
- Add a test in `test_replay.py` for each new rule.

## 7. Regenerate the sample files

From `mvp/` in Git Bash:

```bash
rm -rf data/history data/replay
.venv/Scripts/python.exe -m nordic_flow history data/history
mkdir -p data/replay && cp data/history/week-1/*.csv data/replay/
cd data/history && for w in week-*; do (cd $w && ../../../.venv/Scripts/python.exe -c "import zipfile,glob,sys;z=zipfile.ZipFile(sys.argv[1],'w',zipfile.ZIP_DEFLATED);[z.write(f) for f in sorted(glob.glob('*.csv'))]" ../../../frontend/public/examples/history-$w.zip); done
```

Restore `data/history/README.md` afterwards, then rebuild the web app (`cd frontend && npm run build`) and run the tests.
