# Handoff: where the project stands (18 Nov 2026)

Project: NEW AURA, Nordic Flow, IT Consultant Challenge 2026. Round 2 was submitted on 9 Nov and passed. **Round 3** is a live pitch on **Saturday 21 Nov 2026, 13:30**, Netcompany, Opal Tower, HCMC (15 min pitch + 10 min Q&A, all three members present). Nothing is submitted online.

Branch: **`main` only.** All other branches were merged and deleted. New teammates: start with `docs/round3/README.md`.

| Area | State |
|---|---|
| MVP (FastAPI, SQLite, OR-Tools, React + Tailwind) | Done. **290** Python tests pass. Browser walk-throughs: 6 of 7 pass; `e2e_focused_workflow.js` has a known failure that predates Round 3 |
| History replay (new in Round 3) | Done: `actual_plan.csv` as baseline, `replay` / `history` commands, in-app sample. Guide: `docs/REPLAY-MODE.md` |
| Round 3 decisions and plan | `docs/round3/KE-HOACH-ROUND3.md` (13 decisions, owners, 3-day schedule, 15-minute outline) |
| Round 3 analysis and sources | `docs/round3/PHAN-TICH-ROUND3.md` (budget, CRM risks, options, Q&A) |
| Slides, updated System Context and User Journey | **To do** (see the plan) |
| Round 2 deliverables | `deliverables/` (submitted versions, do not edit for Round 3; make new files) |

## Round 3 in one paragraph

The client cut the budget by 30% (our €0.3M becomes about €0.21M) and made a CRM migration from Microsoft Dynamics 365 to Salesforce in one country a must-have. Our answer: two tracks under one programme. Track 1 migrates the CRM like-for-like (it has a hard deadline, so it wins any conflict). Track 2 shrinks the Nordic Flow pilot to a **history replay** on 4–8 past weeks, which measures the real saving cheaply without touching operations. Everything else is postponed until savings are proven.

## Run it

```powershell
cd mvp
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m pytest -q                                   # 290 passed
.\.venv\Scripts\python.exe -m uvicorn api.main:app --port 8000            # http://localhost:8000
.\.venv\Scripts\python.exe -m nordic_flow replay data\history             # replay table, 4 synthetic weeks
```
Optional AI: set `GROQ_API_KEY` in the environment. For the pitch demo, run **without** it (no network dependency).

## Things nobody may get wrong

- **Never report a saving against an unusable baseline**, rule or actual plan. The code returns `null`.
- All data is synthetic. The 4.2% demo and the 3.16% replay result are **not forecasts** for Company A.
- Cost figures in the Round 3 plan are **estimates based on stated assumptions**, never quotes.
- The LLM never calculates; it rewrites code-computed facts, is optional, and stays a draft until a planner approves.
- No planner-time or on-time delivery result is claimed (not measured; replay cannot measure them).
- Nordic Flow is **not** connected to Salesforce, ERP, WMS or TMS. A shared customer data contract is a future option only.
- The audit log is **tamper-evident**, not tamper-proof.
- No secrets in the repo. Keep organiser material out of new commits: the Round 3 brief PDF stays local.

## Repo map

```
README.md                  overview and quick start
mvp/                       the app: nordic_flow/ (core), api/, frontend/ (source), web/ (build), tests/, data/
docs/REPLAY-MODE.md        history replay: contract, code map, how to extend
docs/round3/               Round 3 decisions, plan, analysis (Vietnamese)
docs/HIEU-DU-AN.md         full project guide (Vietnamese, written for Round 2)
docs/round2/               Round 2 plan, cases, video script, Round 1 alignment, evidence
docs/round1/               submitted Round 1 proposal
docs/reference/            organiser material (confidential)
deliverables/              Round 2 submission files, sources and tools
```
