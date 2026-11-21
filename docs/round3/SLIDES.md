# Round 3 slides: content and speaker notes (15 minutes)

Nhật Anh dựng slide từ file này. Mỗi slide gồm: **tiêu đề** (một câu kết luận), **nội dung trên slide** (ít chữ), **lời nói** (tiếng Việt, lấy từ `SCRIPT-THUYET-TRINH.md`), **người nói** và **thời lượng**. Kiệt nói chính; Bách thao tác demo. Bài kết thúc ở khoảng 13:30–14:00. Chữ trên slide vẫn bằng tiếng Anh. Khi sửa lời nói, sửa trong script trước rồi chép sang đây và phần ghi chú của bộ slide.

Hình có sẵn để chèn:
- `deliverables/round3/System Context Diagram (Round 3).pdf` (trang 1: Nordic Flow, trang 2: hai track)
- `deliverables/round3/User Journey (Round 3).pdf`
- `deliverables/src/img/replay-results.png`, `replay-data.png` (ảnh màn hình)
- Ảnh Round 2: `deliverables/src/img/*.png`

Quy tắc chung: mọi số tiền ghi "estimate"; mọi kết quả từ dữ liệu mẫu ghi "synthetic"; không nói Nordic Flow nối với Salesforce hay ERP.

---

## 1. Title (0:00–0:30) · Kiệt
**Title:** Nordic Flow, Round 3: protect the business, prove the saving
**On slide:** NEW AURA · Bách · Nhật Anh · Kiệt · 21 November 2026
**Say (tiếng Việt):** "Chúng em chào các anh chị giám khảo. Chúng em là nhóm NEW AURA: em là Kiệt, đây là Bách và Nhật Anh. Nordic Flow giúp planner của Company A phân bổ hàng qua các kho với tổng chi phí thấp nhất; mọi plan đều được kiểm tra độc lập và được planner duyệt. Hôm nay chúng em trình bày proposal đã thay đổi thế nào sau hai yêu cầu mới, và vì sao."

## 2. What changed (0:30–1:20) · Kiệt
**Title:** Two new facts change the plan
**On slide:**
- Budget: −30% → about **€0.21M** (from our €0.3M year-one estimate)
- Must-have: one country moves its CRM from **Dynamics 365 to Salesforce**, inside this project, same timeframe
- Our original goal still stands: lower total logistics cost
**Say (tiếng Việt):** "Thứ nhất, ngân sách bị cắt 30%: từ khoảng 0,3 triệu euro còn khoảng 0,21 triệu. Thứ hai, một nước phải chuyển CRM từ Dynamics 365 sang Salesforce vì hệ thống cũ sắp ngừng. Executive board quyết định việc này là một phần của dự án hiện tại: cùng ngân sách, cùng thời gian. CRM migration không liên quan đến bài toán phân bổ hàng, nhưng có hạn chót cứng và dùng chung tiền. Còn mục tiêu ban đầu, giảm chi phí logistics, vẫn giữ nguyên. Vậy giữ gì, đổi gì, và hoãn gì?"

## 3. Assumptions (1:20–2:30) · Kiệt
**Title:** What we assumed, and why
**On slide (table):**
| Assumption | Why it is reasonable |
|---|---|
| The CRM country is Sweden (plan also works for DK or NO) | Same country as our pilot, shared discovery week |
| Dynamics 365 is an on-premises version out of support | CRM 2016 support ended 13 Jan 2026: a real security reason for "decommissioned" |
| Salesforce licences are an operating cost, outside the project budget | 100 users at list price is about $210k a year, more than the whole project |
| Like-for-like migration, history older than 24 months archived | The only way to fit 8 weeks |
| Blended delivery: Nordic lead, Vietnam delivery team | Makes the budget work: at Western European rates (~€1,200/day) the CRM alone costs ~€200k, the whole budget |
**Say (tiếng Việt):** "Đề bài để trống một số điểm, nên chúng em nói rõ assumption. Nước làm CRM migration là Thụy Điển, trùng nước pilot; nếu là nước khác thì hai track chỉ chạy tách nhau. Dynamics là bản On-Premises đã end of support, nên thay thế còn là vấn đề bảo mật. Assumption quan trọng nhất: license Salesforce nằm ngoài ngân sách dự án. Một trăm user theo giá niêm yết đã khoảng 210 nghìn đô mỗi năm, hơn cả dự án. Chúng em coi đây là operating cost thay cho CRM cũ, và sẽ đề nghị Company A xác nhận. Quan trọng thứ hai là blended team: trưởng nhóm ở Bắc Âu, delivery team ở Việt Nam. Nếu cả đội tính theo rate Tây Âu, riêng CRM đã khoảng 200 nghìn euro, tức hết ngân sách. Có blended team thì cả hai track mới vừa."

## 4. Options (2:30–3:20) · Kiệt
**Title:** Three options; only one delivers both goals on time
**On slide:**
| | A. Do everything | B. CRM first, Nordic Flow later | **C. Two tracks in parallel** |
|---|---|---|---|
| Fits budget | ✗ | ✓ | ✓ |
| Original goal by week 8 | ✓ | ✗ (delayed, no evidence) | ✓ (proven by replay) |
| Business continuity | risky | ✓ | ✓ |
**Say (tiếng Việt):** "Option A, làm tất cả: vượt ngân sách. Option B, làm CRM trước, Nordic Flow để sau: vừa ngân sách, nhưng đến tuần tám vẫn chưa có bằng chứng nào về khoản tiết kiệm. Một dự án chưa có bằng chứng thường bị cắt đầu tiên ở lần cắt ngân sách sau. Option C, hai track song song. History replay chỉ tốn khoảng 40 nghìn euro và không lấy người của CRM. Đến tuần tám có cả CRM mới lẫn một con số tiết kiệm thật. Chúng em chọn option C."

## 5. Recommendation (3:20–4:30) · Kiệt
**Title:** CRM first for continuity; Nordic Flow proven cheaply by replay
**On slide:** page 2 of the Round 3 System Context Diagram (two tracks); cards for track 1 and track 2; a card "Link between the tracks: customer data moves to Salesforce; Nordic Flow reads files, so only the export changes"; the rule "CRM wins any conflict".
**Say (tiếng Việt):** "Track một là like-for-like CRM migration: khách hàng, contact, cơ hội đang mở và hoạt động gần đây; lịch sử cũ để read-only. Track hai giữ Nordic Flow nhưng đổi cách pilot: thay vì chạy live, chúng em replay bốn đến tám tuần đã qua, cùng đơn hàng, cùng giá, rồi so với actual plan. Rẻ, và không đụng vận hành. Hai track nối với nhau qua dữ liệu: mã khách hàng và delivery zone sẽ chuyển từ Dynamics sang Salesforce. Nordic Flow đọc file, nên chỉ nguồn xuất file thay đổi; tuần hai chúng em mapping mã cũ sang mã mới. Khi hai track tranh người hoặc tiền, CRM thắng."

## 6. Keep, change, postpone (4:30–5:10) · Kiệt
**Title:** What stays in the MVP, and what waits
**On slide:**
- **Keep:** optimiser, independent verifier, approval gate, audit trail, optional AI explanation
- **Change:** live pilot → replay of past weeks, CSV files only
- **Postpone:** Denmark and Norway, learning from overrides, delivery visibility, Salesforce process improvements
- **Freeze:** warehouse-to-warehouse transfers, direct supplier-to-customer lanes
**Say (tiếng Việt):** "Giữ những gì đã xây: optimiser, independent verifier, bước duyệt, audit trail. Đổi live pilot thành history replay bằng file CSV. Hoãn Đan Mạch, Na Uy và các tính năng mở rộng. Đóng băng chuyển hàng giữa kho và tuyến giao thẳng. Những gì bị hoãn sẽ quay lại khi khoản tiết kiệm đã được chứng minh."

## 7. Budget (5:10–6:20) · Kiệt
**Title:** About €0.18–0.20M, inside the €0.21M (estimates)
**On slide:**
| Item | Estimate |
|---|---|
| CRM migration, about 165 person-days | €90–100k |
| Nordic Flow replay pilot, about 55 person-days | €35–40k |
| Programme management | €20k |
| Contingency, CRM first | €30–40k |
| **Total** | **€175–200k** |
**Say (tiếng Việt):** "Đây là ước tính từ person-days nhân blended rate khoảng 60 euro một giờ. CRM khoảng 90 đến 100 nghìn, Nordic Flow 35 đến 40, quản lý 20, contingency 30 đến 40, dành cho CRM trước. Tổng khoảng 175 đến 200 nghìn, nằm trong 210. 40 nghìn euro cho Nordic Flow không mua cả giải pháp, mà mua một quyết định dựa trên dữ liệu thật. Chênh lệch dưới 1% chi phí logistics là đã bù được. Đạt ngưỡng 2% thì Company A tiết kiệm khoảng 100 đến 200 nghìn euro mỗi năm. Không đạt thì dừng ở 40 nghìn, thay vì 0,3 triệu."
**Card next to the table:** "Nordic Flow: the price of a decision. < 1% of relevant logistics cost pays back the €40k replay. At the 2% gate: about €100–200k a year, which funds the next step."
*Lưu ý:* €40k không phải giá của cả giải pháp, chỉ là giá của bước kiểm chứng. Không so thẳng "dưới 1%" với "3–6% ở Round 1" như hai thứ giống nhau. €100–200k/năm = 2% × €5–10M chi phí logistics liên quan (assumption từ Round 1).

## 8. The go/no-go gate (6:20–7:00) · Kiệt
**Title:** A cheaper gate we can measure in eight weeks
**On slide:**
- Go to a live pilot if the verified plan is **≥ 2% lower than the actual plan** over the replayed weeks, with zero constraint violations
- 5% stays the ambition, not the gate
- Planner time and on-time delivery: measured in the live pilot (replay cannot)
**Say (tiếng Việt):** "Vì vậy, ở tuần tám: chỉ chuyển sang live pilot nếu verified plan rẻ hơn actual plan ít nhất 2% trên các tuần replay, không vi phạm constraint nào. 5% vẫn là kỳ vọng, không phải điều kiện. Replay không đo được thời gian của planner hay on-time delivery; hai chỉ số đó để cho live pilot. Bây giờ Bách sẽ cho các anh chị xem MVP."

## 9. MVP change: history replay (7:00–9:20) · Kiệt nói, Bách demo
**Title:** The MVP now compares with what was really shipped
**On slide:** screenshot `replay-results.png` (or the live app)
**Demo steps (offline, AI off):**
1. Data page → History replay → point at "Actual plan 606 pallets on 87 routes".
2. Calculate plan → point at Actual plan (history) 32,698, optimised 31,316, saving 1,382, Plan checks Passed.
3. Say the replay table of four weeks (next slide) came from the same engine.
**Say (tiếng Việt):** "Ở vòng trước, tiết kiệm được tính so với một quy tắc chúng em tự đặt ra. Đó là điểm yếu nhất, và giờ chúng em sửa đúng điểm đó. Planner tải lên một tuần đã qua: tám file như cũ, cộng file mới actual_plan.csv, tức kế hoạch đã thực sự chạy. Hệ thống kiểm tra từng file: 606 pallet trên 87 tuyến, khớp đơn hàng. Tuần đó thực tế tốn 32.698. Verified plan tốn 31.316. Chênh 1.382, tức 4,2%. Đây là synthetic data, không phải dự báo. Cả hai plan đi qua independent verifier. Nếu actual plan không khớp đơn hàng, hệ thống không hiện tiết kiệm. Và không có gì được gửi vào hệ thống nào của Company A."
**Backup:** if the demo fails, play the recorded video.

## 10. Replay result (9:20–10:00) · Kiệt nói, Bách demo
**Title:** Four synthetic weeks: 2.2% to 4.2%, 3.16% overall
**On slide:** the week table from the Round 3 User Journey; a card "Pilot evidence page: GO, 3.16% over 4 comparable weeks, above the 2% gate. The app adds the weeks up; Company A decides."; "synthetic data, not a forecast" in large text.
**Say (tiếng Việt):** "Một tuần chưa đủ để quyết định. Trang Pilot evidence chạy lại nhiều tuần một lúc: bốn tuần synthetic cho 2,2 đến 4,2%, tổng 3,16%, trên ngưỡng 2%, nên kết quả là GO. Trang này cũng kiểm tra code map từ Dynamics sang Salesforce. Hệ thống chỉ cộng số; người quyết định vẫn là Company A, trên dữ liệu thật của họ."
**Optional live:** if the demo runs well, open Pilot evidence → Use the 4 sample weeks instead of the slide.

## 11. Journey and diagrams (10:00–10:45) · Kiệt
**Title:** What changed in the user journey and the system context
**On slide:** small images of the Round 3 User Journey and page 1 of the System Context; caption "One new input file; customer files later come from Salesforce."
**Say (tiếng Việt):** "Journey hằng ngày của planner không đổi. Chúng em thêm một journey trước live pilot: xuất các tuần cũ, tải lên, so với kế hoạch đã chạy, rồi quyết định trên trang Pilot evidence. Boundary của Nordic Flow giữ nguyên. Chỉ thêm hai file đầu vào tùy chọn: actual_plan.csv và CRM code map. CRM là hệ thống của Company A mà Nordic Flow không kết nối trực tiếp."

## 12. Eight-week roadmap (10:45–11:45) · Kiệt
**Title:** Eight weeks, two tracks, one decision point
**On slide:**
| Week | CRM | Nordic Flow |
|---|---|---|
| 1 | Inventory data, integrations, users; confirm decommission date | Discovery of Swedish data |
| 2 | Field mapping, multi-country org design | Load real files, map products and customer codes |
| 3–4 | Configure, cleanse, trial load 1 | Replay past weeks, validate the actual plan |
| 5–6 | Trial load 2, integrations, user tests | Analyse with planners |
| 7 | Cut-over rehearsal, training | Economics review |
| 8 | **Go live**, old CRM read-only | **Go / no-go** |
Fallback: secondary integrations in weeks 9–12, paid from contingency.
**Say (tiếng Việt):** "Hai track chạy song song tám tuần. Tuần một và hai: CRM kiểm kê dữ liệu, xác nhận ngày tắt hệ thống cũ, field mapping; Nordic Flow nạp file thật và mapping mã. Tuần ba đến bảy: CRM configure, cleansing, trial load, đào tạo; Nordic Flow replay các tuần cũ cùng planner. Tuần tám: CRM go live, hệ thống cũ read-only; Nordic Flow có quyết định go hoặc no-go. Nếu CRM lớn hơn dự kiến, integration phụ dời sang tuần chín đến mười hai: Nordic Flow chậm lại, CRM thì không."

## 13. Risks and trade-offs (11:45–12:50) · Kiệt
**Title:** What we give up, and what could go wrong
**On slide:**
| Risk or trade-off | Mitigation |
|---|---|
| Nordic Flow value arrives later | Replay gives a real number early and cheaply |
| CRM data quality | Cleanse before load; AI suggests duplicates, a person decides |
| Decommission date earlier than planned | Confirm in week 1; contingency goes to CRM |
| Users reject Salesforce | Like-for-like screens, training before cut-over |
| Another system silo | Salesforce designed multi-country from day one |
| Migration changes customer or zone codes | Nordic Flow reads files; map old and new codes in week 2 |
| Personal data (GDPR) | EU hosting, data processing agreement, archive instead of copying old data |
**Say (tiếng Việt):** "Trade-off lớn nhất là giá trị của Nordic Flow đến muộn hơn. Chúng em chấp nhận, vì giữ quan hệ khách hàng là ưu tiên số một; bù lại, replay cho con số thật từ sớm và rẻ. Ba rủi ro chính: chất lượng dữ liệu CRM, nên data cleansing trước khi load; ngày tắt hệ thống cũ đến sớm, nên xác nhận ngay tuần một và contingency dành cho CRM; user không quen Salesforce, nên giữ màn hình như cũ và đào tạo trước cut-over."

## 14. Decisions we ask for (12:50–13:30) · Kiệt
**Title:** Three decisions for Company A
**On slide:**
1. Confirm Salesforce licences sit outside the project budget
2. Confirm the CRM country and the decommission date
3. Approve both tracks and the week-8 gates
**Say (tiếng Việt):** "Chúng em đề nghị Company A ba quyết định: một, xác nhận license Salesforce nằm ngoài ngân sách dự án; hai, xác nhận nước làm CRM migration và ngày tắt hệ thống cũ; ba, phê duyệt hai track và hai decision gate ở tuần tám. Tóm lại: bảo vệ hoạt động kinh doanh trước, chứng minh khoản tiết kiệm với chi phí thấp nhất. Chúng em xin cảm ơn và mong nhận câu hỏi từ các anh chị."
