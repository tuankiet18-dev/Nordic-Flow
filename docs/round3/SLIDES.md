# Round 3 slides: content and speaker notes (15 minutes)

Nhật Anh dựng slide từ file này. Bộ slide có **12 slide** (đã gộp "giữ, đổi, hoãn" vào slide 5 và cổng go/no-go vào slide 6). Mỗi slide gồm: **tiêu đề** (một câu kết luận), **nội dung trên slide** (ít chữ), **lời nói** (tiếng Việt, lấy từ `SCRIPT-THUYET-TRINH.md`), **người nói** và **thời lượng**. Ba người nói theo ba đoạn liền, mỗi người trả lời một câu hỏi của giám khảo: Kiệt slide 1–6 (proposal đã đổi thế nào), Bách slide 7–9 (MVP, journey, sơ đồ), Nhật Anh slide 10–12 (roadmap, trade-off, giới hạn, rủi ro, kết luận). Bách vừa nói vừa thao tác demo. Bài kết thúc khoảng 13:40. Chữ trên slide vẫn bằng tiếng Anh. Khi sửa lời nói, sửa trong script trước rồi chép sang đây và phần ghi chú của bộ slide.

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
**Say (tiếng Việt):** "Chúng em chào các anh chị giám khảo. Chúng em là nhóm NEW AURA: em là Kiệt, cùng với Bách và Nhật Anh. Ở vòng trước, chúng em giới thiệu Nordic Flow, một công cụ giúp planner của Company A quyết định hàng đi từ nhà cung cấp nào, qua kho nào, đến vùng giao nào, sao cho tổng chi phí thấp nhất. Mọi plan đều được kiểm tra độc lập, và planner duyệt rồi mới dùng. Sau vòng trước, Company A đưa ra hai yêu cầu mới. Hôm nay chúng em trình bày proposal đã thay đổi thế nào, MVP và sơ đồ đã điều chỉnh ra sao, và những gì chúng em phải đánh đổi."

## 2. What changed (0:30–1:20) · Kiệt
**Title:** Two new facts change the plan
**On slide:**
- Budget: −30% → about **€0.21M** (from our €0.3M year-one estimate)
- Must-have: one country moves its CRM from **Dynamics 365 to Salesforce**, inside this project, same timeframe
- Our original goal still stands: lower total logistics cost
**Say (tiếng Việt):** "Thay đổi thứ nhất là ngân sách. Ở Round 1, chúng em ước tính năm đầu khoảng 0,3 triệu euro. Cắt 30% thì còn khoảng 0,21 triệu euro. Thay đổi thứ hai là một yêu cầu bắt buộc: một nước đang dùng Microsoft Dynamics 365 để quản lý khách hàng, hệ thống này sắp ngừng, nên phải chuyển sang Salesforce. Executive board quyết định việc chuyển CRM này là một phần của dự án hiện tại, tức là dùng chung ngân sách và chung thời gian với Nordic Flow. CRM migration không liên quan gì đến bài toán phân bổ hàng. Nhưng nó có hạn chót cứng, và nó lấy bớt tiền và người của chúng em. Trong khi đó, mục tiêu ban đầu là giảm chi phí logistics vẫn còn nguyên. Vì vậy câu hỏi đặt ra là: giữ gì, đổi gì, và hoãn gì?"

## 3. Assumptions (1:20–2:40) · Kiệt
**Title:** What we assumed, and why
**On slide (table):**
| Assumption | Why it is reasonable |
|---|---|
| The CRM country is Sweden (plan also works for DK or NO) | Same country as our pilot, shared discovery week |
| Dynamics 365 is an on-premises version out of support | CRM 2016 support ended 13 Jan 2026: a real security reason for "decommissioned" |
| Salesforce licences are an operating cost, outside the project budget | 100 users at list price is about $210k a year, more than the whole project |
| Like-for-like migration, history older than 24 months archived | The only way to fit 8 weeks |
| Blended delivery: Nordic lead, Vietnam delivery team | Makes the budget work: at Western European rates (~€1,200/day) the CRM alone costs ~€200k, the whole budget |
**Say (tiếng Việt):** "Đề bài để trống một số điểm, nên trước khi đưa ra phương án, chúng em nói rõ các assumption của mình. Thứ nhất, nước làm CRM migration là Thụy Điển, trùng với nước chúng em chọn pilot Nordic Flow, nên tuần khảo sát đầu tiên có thể làm chung. Nếu là Đan Mạch hay Na Uy thì kế hoạch vẫn đúng, hai track chỉ chạy tách nhau. Thứ hai, Dynamics đang chạy là bản On-Premises đã hết hỗ trợ, nên việc thay thế còn là vấn đề bảo mật. Assumption quan trọng nhất là: license Salesforce nằm ngoài ngân sách dự án. Theo giá niêm yết, một trăm user đã tốn khoảng 210 nghìn đô mỗi năm, nhiều hơn cả ngân sách dự án. Nếu khoản này phải lấy từ ngân sách dự án thì không phương án nào khả thi. Vì vậy chúng em coi đây là chi phí vận hành thay cho CRM cũ, và sẽ đề nghị Company A xác nhận ở cuối bài. Assumption quan trọng thứ hai là blended team: trưởng nhóm ở Bắc Âu để làm việc với doanh nghiệp, delivery team ở Việt Nam để cấu hình, chuyển dữ liệu và test. Nếu cả đội tính theo rate Tây Âu, riêng CRM migration đã khoảng 200 nghìn euro, tức là hết toàn bộ ngân sách. Có blended team thì cả hai track mới vừa."

## 4. Options (2:40–3:30) · Kiệt
**Title:** Three options; only one delivers both goals on time
**On slide:**
| | A. Do everything | B. CRM first, Nordic Flow later | **C. Two tracks in parallel** |
|---|---|---|---|
| Fits budget | ✗ | ✓ | ✓ |
| Original goal by week 8 | ✓ | ✗ (delayed, no evidence) | ✓ (proven by replay) |
| Business continuity | risky | ✓ | ✓ |
**Say (tiếng Việt):** "Với những assumption đó, chúng em so sánh ba option. Option A là làm tất cả như kế hoạch cũ và thêm CRM. Cách này giữ được cả hai mục tiêu, nhưng vượt ngân sách và đội bị quá tải. Option B là làm CRM trước, để Nordic Flow sau. Cách này vừa ngân sách và ít rủi ro. Nhưng đến tuần tám, Company A vẫn chưa có bằng chứng nào cho thấy Nordic Flow tiết kiệm được tiền. Mà một dự án chưa có bằng chứng thường là thứ bị cắt đầu tiên ở lần cắt ngân sách tiếp theo. Option C là chạy hai track song song. Nordic Flow được kiểm chứng bằng history replay, chỉ tốn khoảng 40 nghìn euro và không lấy người của CRM. Đây là option duy nhất mà đến tuần tám, Company A có cả CRM mới lẫn một con số tiết kiệm thật. Vì vậy chúng em chọn option C."

## 5. Recommendation (3:30–4:50) · Kiệt
**Title:** CRM first for continuity; Nordic Flow proven cheaply by replay
**On slide:** page 2 of the Round 3 System Context Diagram (two tracks), with an MVP line under it: "keep what is built · live pilot → replay · postpone Denmark, Norway · freeze transfers, direct lanes"; cards for track 1 and track 2; a card "Link between the tracks: customer data moves to Salesforce; Nordic Flow reads files, so only the export changes"; the rule "CRM wins any conflict".
**Say (tiếng Việt):** "Track một là chuyển CRM nguyên trạng, like-for-like: khách hàng, người liên hệ, cơ hội bán hàng đang mở và hoạt động gần đây. Lịch sử cũ hơn được lưu ở chế độ read-only. Giai đoạn này không thiết kế lại quy trình bán hàng, để kịp hạn. Track hai giữ Nordic Flow nhưng đổi cách pilot. Thay vì chạy thử thật trong vận hành, cần nhiều tích hợp và tốn kém, chúng em chạy lại bốn đến tám tuần đã qua: cùng đơn hàng, cùng giá, rồi so plan tối ưu với kế hoạch planner đã thực sự chạy. Cách này rẻ, và không đụng gì đến vận hành. Hai track liên quan với nhau qua dữ liệu: mã khách hàng và mã vùng giao hàng hôm nay nằm trong Dynamics, sau này sẽ nằm trong Salesforce. Nordic Flow đọc dữ liệu qua file, nên khi chuyển CRM chỉ cần đổi nơi xuất file, còn bộ tối ưu giữ nguyên. Ở tuần hai, chúng em mapping mã cũ sang mã mới để số liệu trước và sau khi chuyển vẫn so sánh được. Với MVP, chúng em giữ những gì đã xây xong vì gần như không tốn thêm tiền, đổi live pilot thành replay, hoãn Đan Mạch và Na Uy, và đóng băng các tính năng mở rộng. Và một quy tắc: khi hai track tranh người hoặc tranh tiền, CRM thắng, vì CRM có hạn chót cứng."

## 6. Budget and the go/no-go gate (4:50–6:30) · Kiệt
**Title:** About €0.18–0.20M, and a cheap go/no-go gate (estimates)
**On slide:**
| Item | Estimate |
|---|---|
| CRM migration, about 165 person-days | €90–100k |
| Nordic Flow replay pilot, about 55 person-days | €35–40k |
| Programme management | €20k |
| Contingency, CRM first | €30–40k |
| **Total** | **€175–200k** |
**Say (tiếng Việt):** "Đây là ước tính, không phải báo giá. Chúng em tính bằng số person-days nhân với blended rate khoảng 60 euro một giờ. CRM migration khoảng 90 đến 100 nghìn euro, Nordic Flow 35 đến 40 nghìn, quản lý chương trình 20 nghìn, và contingency 30 đến 40 nghìn, dành cho CRM trước. Tổng khoảng 175 đến 200 nghìn euro, nằm trong 210 nghìn. Điểm quan trọng ở đây là: 40 nghìn euro cho Nordic Flow không mua cả giải pháp. Số tiền đó mua một quyết định dựa trên dữ liệu thật: có nên đầu tư tiếp hay không. Chỉ cần chênh lệch dưới 1% chi phí logistics liên quan là đã bù được khoản này. Nếu đạt ngưỡng 2%, Company A tiết kiệm khoảng 100 đến 200 nghìn euro mỗi năm, và năm nào cũng vậy. Còn nếu không đạt, Company A dừng lại sau 40 nghìn euro, thay vì 0,3 triệu. Vì vậy chúng em đặt một điểm quyết định ở tuần tám: chỉ chuyển sang live pilot nếu verified plan rẻ hơn actual plan ít nhất 2% trên các tuần đã replay, và không vi phạm ràng buộc nào. 2% cao gấp vài lần mức hòa vốn, nên có biên an toàn. Mục tiêu 5% ở vòng trước vẫn là kỳ vọng, nhưng không còn là điều kiện. Bây giờ Bách sẽ cho các anh chị xem MVP đã thay đổi thế nào."
**Card next to the table:** "Nordic Flow: the price of a decision. < 1% of relevant logistics cost pays back the €40k replay. At the 2% gate: about €100–200k a year, which funds the next step."
**Gate card under the table:** "Go / no-go in week 8: go to a live pilot only if the verified plan is at least 2% cheaper than the actual plan over 4–8 replayed weeks, with zero violations. 5% stays the ambition. Planner time and on-time delivery are measured later, in the live pilot."
*Lưu ý:* €40k không phải giá của cả giải pháp, chỉ là giá của bước kiểm chứng. Không so thẳng "dưới 1%" với "3–6% ở Round 1" như hai thứ giống nhau. €100–200k/năm = 2% × €5–10M chi phí logistics liên quan (assumption từ Round 1).

## 7. MVP change: history replay (6:30–8:40) · Bách
**Title:** The MVP now compares with what was really shipped
**On slide:** screenshot `replay-results.png` (or the live app)
**Demo steps (offline, AI off):**
1. Data page → History replay → point at "Actual plan 606 pallets on 87 routes".
2. Calculate plan → point at Actual plan (history) 32,698, optimised 31,316, saving 1,382, Plan checks Passed.
3. Say the replay table of four weeks (next slide) came from the same engine.
**Say (tiếng Việt):** "Ở vòng trước, khoản tiết kiệm của chúng em được tính so với một quy tắc do chúng em tự đặt ra: mỗi vùng lấy hàng từ kho ưu tiên. Planner thật không nhất thiết làm như vậy, nên đó là điểm yếu nhất của bài. Bây giờ chúng em sửa đúng điểm đó. Planner tải lên dữ liệu của một tuần đã qua: tám file như cũ, cộng thêm một file mới là actual_plan.csv, tức là kế hoạch đã thực sự chạy trong tuần đó. Hệ thống kiểm tra từng file: kế hoạch thực tế có 606 pallet trên 87 tuyến, khớp với đơn hàng của tuần. Tuần đó, thực tế đã tốn 32.698 đơn vị chi phí. Plan tối ưu, đã qua kiểm tra, tốn 31.316. Chênh 1.382, tức là 4,2%. Đây là dữ liệu giả lập: con số này chứng minh cách đo hoạt động, không phải dự báo cho Company A. Cả hai plan đều đi qua cùng một bộ kiểm tra độc lập. Nếu kế hoạch thực tế không khớp đơn hàng hay vượt giới hạn, hệ thống không hiện con số tiết kiệm nào, vì chúng em không bao giờ so với một mốc không kiểm chứng được. Và không có gì được gửi vào hệ thống của Company A: đây chỉ là bằng chứng để ra quyết định."
**Backup:** if the demo fails, play the recorded video.

## 8. Replay result (8:40–9:25) · Bách
**Title:** Four synthetic weeks: 2.2% to 4.2%, 3.16% overall
**On slide:** the week table from the Round 3 User Journey; a card "Pilot evidence page: GO, 3.16% over 4 comparable weeks, above the 2% gate. The app adds the weeks up; Company A decides."; "synthetic data, not a forecast" in large text.
**Say (tiếng Việt):** "Nhưng một tuần chưa đủ để quyết định, vì một tuần có thể là tuần bất thường. Vì vậy MVP có thêm trang Pilot evidence, chạy lại nhiều tuần một lúc rồi cộng lại. Với bốn tuần dữ liệu giả lập, plan tối ưu rẻ hơn từ 2,2 đến 4,2%, tổng cộng 3,16%. Con số này trên ngưỡng 2%, nên hệ thống ghi GO. Trang này cũng kiểm tra việc mapping mã từ Dynamics sang Salesforce, đúng việc của tuần hai trong roadmap. Hệ thống chỉ cộng số; người quyết định vẫn là Company A, dựa trên dữ liệu thật của họ."
**Optional live:** if the demo runs well, open Pilot evidence → Use the 4 sample weeks instead of the slide.

## 9. Journey and diagrams (9:25–10:10) · Bách
**Title:** What changed in the user journey and the system context
**On slide:** small images of the Round 3 User Journey and page 1 of the System Context; caption "One new input file; customer files later come from Salesforce."
**Say (tiếng Việt):** "Về User Journey: công việc hằng ngày của planner không đổi. Chúng em thêm một hành trình mới, diễn ra trước live pilot, gồm bốn bước: xuất dữ liệu các tuần cũ, tải lên và kiểm tra, so với kế hoạch đã chạy, rồi quyết định go hoặc no-go trên trang Pilot evidence. Về System Context: ranh giới của Nordic Flow giữ nguyên. Chỉ thêm hai file đầu vào tùy chọn là actual_plan.csv và file mapping mã của CRM. CRM được vẽ là một hệ thống của Company A mà Nordic Flow không kết nối trực tiếp. Nhật Anh sẽ trình bày kế hoạch triển khai, những gì chúng em phải đánh đổi, và đề xuất của nhóm."

## 10. Eight-week roadmap (10:10–11:10) · Nhật Anh
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
**Say (tiếng Việt):** "Hai track chạy song song trong tám tuần. Tuần một và hai: track CRM kiểm kê dữ liệu, xác nhận ngày tắt hệ thống cũ và làm field mapping; track Nordic Flow nạp file thật và mapping mã sản phẩm, mã khách hàng. Tuần ba đến bảy: CRM cấu hình, làm sạch dữ liệu, nạp thử hai lần và đào tạo user; Nordic Flow replay các tuần cũ và xem kết quả cùng planner. Tuần tám là điểm quyết định chung: CRM chính thức hoạt động, hệ thống cũ chuyển sang read-only; còn Nordic Flow có quyết định go hoặc no-go. Nếu CRM phức tạp hơn dự kiến, các tích hợp phụ được dời sang tuần chín đến mười hai và dùng contingency. Nói cách khác, Nordic Flow có thể chậm lại, còn CRM thì không."

## 11. Trade-offs, limitations and risks (11:10–12:55) · Nhật Anh
**Title:** Trade-offs, limitations and risks
**On slide (three cards):**
- **Trade-offs:** Nordic Flow value arrives later (CRM first); one country, one region, Denmark and Norway wait; transfers and direct lanes frozen.
- **Limitations:** replay knows the whole week in advance, so it is a little optimistic (hence the 2% gate); today's figures are synthetic, not a forecast; planner time and on-time delivery wait for the live pilot.
- **Risks → mitigation:** CRM data quality → cleanse before load, a person confirms duplicates; earlier decommission → confirm in week 1, contingency to CRM; users reject Salesforce → like-for-like screens, training.
**Say (tiếng Việt):** "Kế hoạch nào cũng có cái giá của nó. Chúng em nói thẳng về ba điều: những gì phải đánh đổi, giới hạn của giải pháp, và rủi ro. Về đánh đổi: giá trị của Nordic Flow đến muộn hơn, vì CRM được ưu tiên. Giai đoạn này chỉ làm một nước, một vùng; Đan Mạch và Na Uy phải chờ. Các tính năng chuyển hàng giữa kho và giao thẳng bị đóng băng. Chúng em chấp nhận, vì giữ được quan hệ khách hàng là ưu tiên số một. Về giới hạn: replay biết trước cả tuần đơn hàng, còn planner lúc đó thì không, nên kết quả hơi lạc quan. Đó là lý do ngưỡng đặt ở 2%, cao hơn nhiều so với mức hòa vốn. Con số hôm nay là dữ liệu giả lập, không phải dự báo. Và replay không đo được thời gian của planner hay tỷ lệ giao hàng đúng hạn; hai chỉ số này chờ live pilot. Về rủi ro, có ba rủi ro chính. Dữ liệu CRM kém chất lượng: chúng em làm sạch trước khi nạp, và người xác nhận các bản ghi trùng. Ngày tắt hệ thống cũ đến sớm: xác nhận ngay tuần một, contingency dành cho CRM. User không quen Salesforce: giữ màn hình gần giống hệ thống cũ và đào tạo trước ngày chuyển."

## 12. Decisions we ask for (12:55–13:40) · Nhật Anh
**Title:** Three decisions for Company A
**On slide:**
1. Confirm Salesforce licences sit outside the project budget
2. Confirm the CRM country and the decommission date
3. Approve both tracks and the week-8 gates
**Say (tiếng Việt):** "Để bắt đầu, chúng em đề nghị Company A đưa ra ba quyết định. Một, xác nhận license Salesforce nằm ngoài ngân sách dự án. Hai, xác nhận nước làm CRM migration và ngày tắt hệ thống cũ. Ba, phê duyệt hai track và hai điểm quyết định ở tuần tám. Tóm lại, đề xuất của chúng em là: bảo vệ hoạt động kinh doanh trước, và chứng minh khoản tiết kiệm với chi phí thấp nhất. Chúng em xin cảm ơn, và rất mong nhận được câu hỏi từ các anh chị."
