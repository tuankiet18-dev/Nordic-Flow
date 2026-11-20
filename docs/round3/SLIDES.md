# Round 3 slides: content and speaker notes (15 minutes)

Nhật Anh dựng slide từ file này. Mỗi slide gồm: **tiêu đề** (một câu kết luận), **nội dung trên slide** (ít chữ), **lời nói** (tiếng Anh, đọc tự nhiên, không đọc nguyên văn slide), **người nói** và **thời lượng**. Tổng 15:00.

Hình có sẵn để chèn:
- `deliverables/round3/System Context Diagram (Round 3).pdf` (trang 1: Nordic Flow, trang 2: hai luồng)
- `deliverables/round3/User Journey (Round 3).pdf`
- `deliverables/src/img/replay-results.png`, `replay-data.png` (ảnh màn hình)
- Ảnh Round 2: `deliverables/src/img/*.png`

Quy tắc chung: mọi số tiền ghi "estimate"; mọi kết quả từ dữ liệu mẫu ghi "synthetic"; không nói Nordic Flow nối với Salesforce hay ERP.

---

## 1. Title (0:00–0:30) · Nhật Anh
**Title:** Nordic Flow, Round 3: protect the business, prove the saving
**On slide:** NEW AURA · Bách · Nhật Anh · Kiệt · 21 November 2026
**Say:** "Good afternoon. We are NEW AURA. Two weeks ago we showed Nordic Flow, a planner-approved service that allocates goods at the lowest total cost. Since then, Company A changed two things. Here is how we adapted."

## 2. What changed (0:30–1:30) · Kiệt
**Title:** Two new facts change the plan
**On slide:**
- Budget: −30% → about **€0.21M** (from our €0.3M year-one estimate)
- Must-have: one country moves its CRM from **Dynamics 365 to Salesforce**, inside this project, same timeframe
- Our original goal still stands: lower total logistics cost
**Say:** "Our Round 1 budget was 0.3 million euro for year one, so a 30% cut leaves about 0.21 million. At the same time a CRM migration became a must-have. It has nothing to do with goods allocation, and it has a deadline. So the question is: what do we keep, what do we change, and what do we postpone?"

## 3. Assumptions (1:30–2:30) · Kiệt
**Title:** What we assumed, and why
**On slide (table):**
| Assumption | Why it is reasonable |
|---|---|
| The CRM country is Sweden (plan also works for DK or NO) | Same country as our pilot, shared discovery week |
| Dynamics 365 is an on-premises version out of support | CRM 2016 support ended 13 Jan 2026: a real security reason for "decommissioned" |
| Salesforce licences are an operating cost, outside the project budget | 100 users at list price is about $210k a year, more than the whole project |
| Like-for-like migration, history older than 24 months archived | The only way to fit 8 weeks |
| Blended delivery: Nordic lead, Vietnam delivery team | Western Europe rates alone would use the whole budget |
**Say:** "The brief leaves gaps, so we state our assumptions. The most important one is licences: if Salesforce licences had to come from the project budget, no plan could work. We treat them as an operating cost that replaces the old CRM, and we ask you to confirm that."

## 4. Options (2:30–3:30) · Kiệt
**Title:** Three options; only one keeps both goals inside the budget
**On slide:**
| | A. Do everything | B. CRM only | **C. Two tracks** |
|---|---|---|---|
| Fits budget | ✗ | ✓ | ✓ |
| Keeps original goal | ✓ | ✗ | ✓ |
| Business continuity | risky | ✓ | ✓ |
**Say:** "Doing everything breaks the budget. Doing only the CRM abandons the reason this project started. We recommend two tracks under one programme."

## 5. Recommendation (3:30–5:00) · Kiệt
**Title:** CRM first for continuity; Nordic Flow proven cheaply by replay
**On slide:** page 2 of the Round 3 System Context Diagram (two tracks), plus the rule "CRM wins any conflict".
**Say:** "Track one migrates the CRM like-for-like: accounts, contacts, open opportunities and recent activity; old history stays read-only. Track two keeps Nordic Flow but changes the pilot: instead of a live trial with integrations, we replay four to eight past weeks. Same orders, same prices, and we compare the optimised plan with what was really shipped. If the two tracks compete for people or money, the CRM wins, because it has a hard deadline."

## 6. Keep, change, postpone (5:00–6:00) · Kiệt
**Title:** What stays in the MVP, and what waits
**On slide:**
- **Keep:** optimiser, independent verifier, approval gate, audit trail, optional AI explanation
- **Change:** live pilot → replay of past weeks, CSV files only
- **Postpone:** Denmark and Norway, learning from overrides, delivery visibility, Salesforce process improvements
- **Freeze:** warehouse-to-warehouse transfers, direct supplier-to-customer lanes
**Say:** "Most of what we keep is already built, so it costs little. What we postpone comes back once the saving is proven and can pay for it."

## 7. Budget (6:00–7:30) · Kiệt
**Title:** About €0.18–0.20M, inside the €0.21M (estimates)
**On slide:**
| Item | Estimate |
|---|---|
| CRM migration, about 165 person-days | €90–100k |
| Nordic Flow replay pilot, about 55 person-days | €35–40k |
| Programme management | €20k |
| Contingency, CRM first | €30–40k |
| **Total** | **€175–200k** |
**Say:** "These are estimates from person-days and a blended rate of about 60 euro an hour. The interesting part is Nordic Flow: at about 40 thousand euro, break-even needs a saving below one percent of logistics cost, not the three to six percent we needed in Round 1. The budget cut actually makes Nordic Flow safer."

## 8. The go/no-go gate (7:30–8:30) · Kiệt
**Title:** A cheaper gate we can measure in eight weeks
**On slide:**
- Go to a live pilot if the verified plan is **≥ 2% lower than the actual plan** over the replayed weeks, with zero constraint violations
- 5% stays the ambition, not the gate
- Planner time and on-time delivery: measured in the live pilot (replay cannot)
**Say:** "Two percent gives a safety margin over break-even. We are honest that replay cannot measure planner time or delivery performance; those wait for the live pilot."

## 9. MVP change: history replay (8:30–11:00) · Bách · **demo 2 minutes**
**Title:** The MVP now compares with what was really shipped
**On slide:** screenshot `replay-results.png` (or the live app)
**Demo steps (offline, AI off):**
1. Data page → History replay → point at "Actual plan 606 pallets on 87 routes".
2. Calculate plan → point at Actual plan (history) 32,698, optimised 31,316, saving 1,382, Plan checks Passed.
3. Say the replay table of four weeks (next slide) came from the same engine.
**Say:** "In Round 2 our saving was measured against a rule we invented. Now the planner uploads one more file, actual_plan.csv, the plan that was really shipped. The system checks it with the same independent verifier. If the actual plan does not match the orders or the limits, it shows no saving at all. Nothing is sent to any system."
**Backup:** if the demo fails, play the recorded video.

## 10. Replay result (11:00–11:45) · Bách
**Title:** Four synthetic weeks: 2.2% to 4.2%, 3.16% overall
**On slide:** the week table from the Round 3 User Journey, with "synthetic data, not a forecast" in large text.
**Say:** "On four synthetic weeks the verified plan is 2.2 to 4.2 percent cheaper. That number proves the measurement works. It is not a forecast for Company A; the real number comes from real weeks in discovery."

## 11. Journey and diagrams (11:45–12:30) · Nhật Anh
**Title:** What changed in the user journey and the system context
**On slide:** small images of the Round 3 User Journey and page 1 of the System Context.
**Say:** "The daily planning journey is unchanged. We added a new journey before the pilot: export past weeks, upload, compare with what was shipped, decide. In the system context the boundary is the same; one new input file, and the CRM appears as a Company A system that Nordic Flow does not connect to."

## 12. Eight-week roadmap (12:30–13:45) · Bách
**Title:** Eight weeks, two tracks, one decision point
**On slide:**
| Week | CRM | Nordic Flow |
|---|---|---|
| 1 | Inventory data, integrations, users; confirm decommission date | Discovery of Swedish data |
| 2 | Field mapping, multi-country org design | Load real files, map products |
| 3–4 | Configure, cleanse, trial load 1 | Replay past weeks, validate the actual plan |
| 5–6 | Trial load 2, integrations, user tests | Analyse with planners |
| 7 | Cut-over rehearsal, training | Economics review |
| 8 | **Go live**, old CRM read-only | **Go / no-go** |
Fallback: secondary integrations in weeks 9–12, paid from contingency.
**Say:** "Both tracks end in week eight with a decision. If the CRM turns out bigger than expected, Nordic Flow slows down, not the other way round."

## 13. Risks and trade-offs (13:45–14:45) · Kiệt
**Title:** What we give up, and what could go wrong
**On slide:**
| Risk or trade-off | Mitigation |
|---|---|
| Nordic Flow value arrives later | Replay gives a real number early and cheaply |
| CRM data quality | Cleanse before load; AI suggests duplicates, a person decides |
| Decommission date earlier than planned | Confirm in week 1; contingency goes to CRM |
| Users reject Salesforce | Like-for-like screens, training before cut-over |
| Another system silo | Salesforce designed multi-country from day one |
| Personal data (GDPR) | EU hosting, data processing agreement, archive instead of copying old data |
**Say:** "The biggest trade-off is time to value for Nordic Flow. We accept it, because protecting customer relationships comes first."

## 14. Decisions we ask for (14:45–15:00) · Kiệt
**Title:** Three decisions for Company A
**On slide:**
1. Confirm Salesforce licences sit outside the project budget
2. Confirm the CRM country and the decommission date
3. Approve both tracks and the week-8 gates
**Say:** "Thank you. We are happy to take your questions."
