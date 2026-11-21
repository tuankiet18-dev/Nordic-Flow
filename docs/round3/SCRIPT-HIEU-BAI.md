# Hiểu bài trước khi nói: giải thích từng slide

File này để **đọc cho hiểu**, không phải để học thuộc. Mỗi slide gồm:
- **Slide này để làm gì:** vai trò của slide trong câu chuyện.
- **Giải thích:** ý chính, viết dễ hiểu, có lý do đằng sau.
- **Con số cần nhớ:** chỉ những số sẽ nói ra miệng.
- **Gợi ý cách nói:** một cách nói mẫu. Bạn nói theo lời của mình là được.
- **Nếu bị hỏi:** câu hỏi dễ gặp ở slide đó, trả lời ngắn.

Bản lời nói ngắn để cầm khi tập là `SCRIPT-THUYET-TRINH.md`. Câu hỏi đáp đầy đủ ở `QA.md`.

---

## Trước hết: cả bài kể một câu chuyện gì?

Hãy nhớ câu chuyện theo bốn bước. Mọi slide đều nằm trong một bước:

1. **Chuyện gì đã xảy ra** (slide 1–3): Company A cắt 30% ngân sách và bắt buộc thêm việc chuyển CRM. Đề để trống nhiều chỗ, nên nhóm nói rõ assumption.
2. **Nhóm chọn làm gì** (slide 4–8): so ba option, chọn chạy **hai track song song**. CRM được ưu tiên vì có hạn chót. Nordic Flow không bị bỏ mà được **chứng minh bằng cách rẻ nhất**: chạy lại các tuần đã qua. Kèm theo là ngân sách và một **cổng quyết định** ở tuần 8.
3. **MVP và sơ đồ đã đổi ra sao** (slide 9–11): demo history replay, trang Pilot evidence, và User Journey, System Context mới.
4. **Triển khai và rủi ro** (slide 12–14): roadmap 8 tuần, những gì phải đánh đổi, và ba quyết định Company A cần đưa ra.

Một câu tóm cả bài: **"Bảo vệ hoạt động kinh doanh trước (CRM), và chứng minh khoản tiết kiệm của Nordic Flow với chi phí thấp nhất (replay), rồi mới đầu tư tiếp dựa trên bằng chứng."**

---

## Slide 1. Mở đầu (0:00–0:30)

**Slide này để làm gì:** chào, giới thiệu nhóm, nhắc giám khảo Nordic Flow là gì, rồi báo trước bài sẽ nói gì.

**Giải thích:** Giám khảo đã xem rất nhiều nhóm, có thể không nhớ bài của mình. Vì vậy cần một câu nhắc lại Nordic Flow:
- Company A có nhiều nhà cung cấp, nhiều kho, nhiều vùng giao hàng (delivery zone). Mỗi tuần, planner phải quyết định hàng đi từ nhà cung cấp nào, qua kho nào, đến vùng nào.
- Nordic Flow tính ra phương án có **tổng chi phí thấp nhất** (bằng bộ tối ưu, gọi là optimiser).
- Mọi phương án đều được một đoạn code riêng **kiểm tra lại** (independent verifier), và planner phải **duyệt** thì mới dùng. Máy chỉ đề xuất, người quyết định.

**Gợi ý cách nói:** "Chúng em là NEW AURA. Nordic Flow giúp planner chọn cách phân bổ hàng qua các kho với tổng chi phí thấp nhất, mọi plan đều được kiểm tra và planner duyệt. Hôm nay chúng em trình bày proposal đã thay đổi thế nào sau hai yêu cầu mới, và vì sao."

---

## Slide 2. Hai thay đổi (0:30–1:20)

**Slide này để làm gì:** nói rõ đề bài mới, để giám khảo thấy nhóm hiểu đúng vấn đề.

**Giải thích:**
- **Thay đổi 1, ngân sách:** ở Round 1 nhóm ước tính năm đầu khoảng €0,3 triệu. Cắt 30% thì còn khoảng €0,21 triệu.
- **Thay đổi 2, CRM migration:** CRM là hệ thống quản lý khách hàng (thông tin khách hàng, người liên hệ, cơ hội bán hàng). Một nước đang dùng Microsoft Dynamics 365, hệ thống này sắp ngừng, nên phải chuyển sang Salesforce. Ban điều hành (executive board) quyết định việc này nằm **trong dự án của nhóm**: dùng chung ngân sách, chung thời gian.
- **Điểm mấu chốt:** CRM migration **không liên quan** tới bài toán phân bổ hàng của Nordic Flow, nhưng nó **giành tiền và người** với Nordic Flow, và nó có **hạn chót cứng**. Trong khi đó mục tiêu ban đầu (giảm chi phí logistics) vẫn còn nguyên.
- Vì vậy bài toán của nhóm giờ là bài toán ưu tiên: **giữ gì, đổi gì, hoãn gì?**

**Con số cần nhớ:** €0,3M → khoảng €0,21M.

**Gợi ý cách nói:** "Ngân sách giảm 30%, còn khoảng 0,21 triệu euro. Đồng thời một nước phải chuyển CRM từ Dynamics 365 sang Salesforce, và việc này nằm trong dự án của chúng em. CRM không liên quan tới phân bổ hàng, nhưng dùng chung tiền và có hạn chót. Vậy câu hỏi là: giữ gì, đổi gì, hoãn gì?"

**Nếu bị hỏi** *"CRM migration là việc của nhóm hay của nước đó?"*: đề ghi rõ *"part of the current project"* và phải nằm trong ngân sách đã cắt. Nhóm lập kế hoạch và chia tiền cho nó; người làm là delivery team. Xem câu 3 trong `QA.md`.

---

## Slide 3. Assumption (1:20–2:30)

**Slide này để làm gì:** đề bài không cho đủ thông tin, nên nhóm phải tự đặt giả định. Đề yêu cầu mọi assumption phải được **nói rõ và có lý do**. Đây là chỗ giám khảo chấm "consulting mindset".

**Giải thích từng assumption:**
1. **Nước làm CRM migration là Thụy Điển.** Lý do: trùng với nước nhóm chọn pilot Nordic Flow, nên tuần khảo sát đầu tiên (discovery) làm chung được. Nếu là Đan Mạch hay Na Uy thì kế hoạch vẫn đúng, chỉ là hai track chạy tách nhau.
2. **Dynamics đang chạy là bản cài trên máy chủ của công ty (On-Premises) và đã hết hỗ trợ (end of support).** Lý do: bản Dynamics CRM 2016 đã hết hỗ trợ từ 13/01/2026. Đề nói hệ thống "sắp bị ngừng" nên giả định này hợp lý. Hệ thống hết hỗ trợ nghĩa là không còn bản vá bảo mật, nên càng phải ưu tiên.
3. **Tiền bản quyền Salesforce (license) nằm ngoài ngân sách dự án.** Đây là assumption **quan trọng nhất**:
   - 100 người dùng Salesforce theo giá niêm yết tốn khoảng $210.000 mỗi năm, nhiều hơn cả ngân sách dự án.
   - Nếu phải trả khoản này từ ngân sách dự án thì không có phương án nào khả thi.
   - Hợp lý nhất là coi nó là **chi phí vận hành** (operating cost) của doanh nghiệp, thay cho chi phí của CRM cũ. Ngân sách dự án chỉ trả công chuyển đổi.
   - Đây cũng là quyết định đầu tiên nhóm đề nghị Company A xác nhận ở slide 14.
4. **Chuyển nguyên trạng (like-for-like), lịch sử cũ hơn 24 tháng thì lưu trữ (archive).** Lý do: chỉ có 8 tuần. Chuyển nguyên trạng nghĩa là Salesforce làm đúng những gì Dynamics đang làm, không thiết kế lại quy trình. Dữ liệu quá cũ không chuyển sang mà để ở kho lưu trữ chỉ đọc.
5. **Đội kết hợp (blended team): trưởng nhóm ở Bắc Âu, delivery team ở Việt Nam.** Đây là assumption **quan trọng thứ hai**:
   - Nếu cả đội tính theo rate Tây Âu (khoảng €1.200/ngày), riêng CRM khoảng 165 ngày công đã tốn khoảng €200k, tức hết toàn bộ ngân sách.
   - Đội kết hợp có đơn giá bình quân khoảng €60/giờ, nên cả hai track mới vừa ngân sách.
   - Đây là mô hình Netcompany đang dùng (công ty Đan Mạch có trung tâm phát triển ở Việt Nam), nên giám khảo sẽ thấy rất thực tế.

**Con số cần nhớ:** license khoảng $210k/năm cho 100 user; rate Tây Âu khoảng €1.200/ngày, nên CRM tốn khoảng €200k.

**Gợi ý cách nói:** "Đề để trống nhiều chỗ, nên chúng em nói rõ assumption. Quan trọng nhất là license Salesforce: 100 user đã khoảng 210 nghìn đô mỗi năm, hơn cả dự án, nên chúng em coi đây là chi phí vận hành thay cho CRM cũ và đề nghị Company A xác nhận. Quan trọng thứ hai là blended team: nếu cả đội tính rate Tây Âu thì riêng CRM đã hết ngân sách."

**Nếu bị hỏi** *"Nếu license phải trả từ ngân sách dự án thì sao?"*: thì không phương án nào khả thi trong €0,21M. Khi đó phải tăng ngân sách hoặc giảm số user. Vì vậy nhóm đưa điểm này thành quyết định đầu tiên Company A phải xác nhận.

---

## Slide 4. Ba option (2:30–3:20)

**Slide này để làm gì:** cho thấy nhóm đã cân nhắc các cách khác, rồi mới chọn. Đây là cách làm chuẩn của tư vấn.

**Giải thích:**
- **Option A, làm tất cả:** chạy pilot thật như kế hoạch cũ và làm thêm CRM. Giữ được cả hai mục tiêu nhưng **vượt ngân sách** và đội bị quá tải.
- **Option B, làm CRM trước, Nordic Flow để sau:** vừa ngân sách, ít rủi ro, nên ban điều hành rất có thể sẽ nghĩ đến cách này. Nhưng:
  - Đến tuần 8, Company A **chưa có bằng chứng nào** rằng Nordic Flow tiết kiệm được tiền.
  - Một dự án chưa có bằng chứng thường là **thứ bị cắt đầu tiên** ở lần cắt ngân sách sau.
  - Mục tiêu gốc của dự án (giảm tổng chi phí logistics, theo proposal Round 1) bị bỏ lửng.
- **Option C, hai track song song (nhóm chọn):** CRM được ưu tiên, còn Nordic Flow được kiểm chứng bằng cách chạy lại các tuần đã qua (replay). Replay chỉ tốn khoảng €40k và **không lấy người của CRM**, vì nó chỉ là chạy phần mềm trên file dữ liệu cũ, không đụng tới vận hành. Đến tuần 8, Company A có **cả CRM mới lẫn một con số tiết kiệm thật**.

**Gợi ý cách nói:** "Option A vượt ngân sách. Option B, làm CRM trước rồi mới tới Nordic Flow, thì vừa tiền, nhưng đến tuần 8 vẫn chưa có bằng chứng gì, và dự án không có bằng chứng thường bị cắt đầu tiên. Option C chạy song song: replay chỉ tốn khoảng 40 nghìn euro và không lấy người của CRM, nên đến tuần 8 có cả CRM mới lẫn một con số tiết kiệm thật."

**Nếu bị hỏi** *"Sao không bỏ hẳn Nordic Flow?"*: đề yêu cầu vẫn phải đạt mục tiêu gốc. Bỏ đi chỉ tiết kiệm khoảng €40k mà bài toán chi phí logistics vẫn còn nguyên. Xem câu 1 và 1b trong `QA.md`.

---

## Slide 5. Recommendation: hai track (3:20–4:30)

**Slide này để làm gì:** giải thích cụ thể option C gồm những gì.

**Giải thích:**
- **Track 1, CRM migration nguyên trạng:** chuyển những gì đang dùng: khách hàng, người liên hệ (contact), cơ hội bán hàng đang mở, hoạt động trong 24 tháng gần nhất. Lịch sử cũ để chỉ đọc (read-only).

  Về mặt kỹ thuật, chuyển CRM thường đi theo các bước sau (nên hiểu để trả lời câu hỏi):
  1. Xuất dữ liệu từ Dynamics.
  2. Làm sạch và gộp bản ghi trùng (data cleansing, dedup).
  3. Ghép trường giữa hai hệ thống (field mapping).
  4. Nạp thử (trial load) hai lần.
  5. Đối chiếu số lượng bản ghi.
  6. Chuyển chính thức (cut-over).

  Công cụ nạp dữ liệu của Salesforce (Data Loader) miễn phí. Dữ liệu lưu trong EU vì GDPR.
- **Track 2, Nordic Flow bằng replay:** thay vì chạy thử thật trong vận hành (live pilot, cần tích hợp nhiều hệ thống, tốn tiền và rủi ro), nhóm **chạy lại 4–8 tuần đã qua**:
  - Lấy đơn hàng, giá và sức chứa của tuần đó.
  - Lấy thêm **kế hoạch thực tế** planner đã chạy (actual plan).
  - Cho Nordic Flow tính phương án tối ưu trên **đúng dữ liệu đó**, rồi so sánh.

  Kết quả là một khoảng chênh chi phí thật, mà không đụng gì tới vận hành.
- **Liên kết giữa hai track:** mã khách hàng và mã vùng giao hàng hiện nằm trong Dynamics, sau này sẽ nằm trong Salesforce. Nordic Flow đọc dữ liệu **qua file**, nên khi chuyển CRM chỉ cần đổi nơi xuất file. Bộ tối ưu không phải sửa gì. Tuần 2, nhóm ghép mã cũ sang mã mới (mapping) để các tuần trước và sau khi chuyển vẫn so sánh được.
- **Quy tắc ưu tiên:** khi hai track tranh người hoặc tranh tiền, **CRM thắng**, vì CRM có hạn chót cứng, còn Nordic Flow chậm vài tuần thì không hỏng gì.

**Gợi ý cách nói:** "Track một chuyển CRM nguyên trạng, lịch sử cũ để read-only. Track hai không chạy thử thật mà chạy lại các tuần đã qua, so với kế hoạch planner đã thực sự chạy, nên rẻ và không đụng vận hành. Hai track chỉ nối với nhau qua dữ liệu: Nordic Flow đọc file, nên khi chuyển CRM chỉ đổi nơi xuất file. Và khi tranh nguồn lực, CRM thắng."

**Nếu bị hỏi** *"Sao Nordic Flow không kết nối API thẳng với Salesforce?"*: đây là lựa chọn có chủ ý. Dùng file giúp hai hệ thống **không phụ thuộc nhau**: nếu CRM migration trục trặc thì Nordic Flow vẫn chạy, và ngược lại. Kết nối trực tiếp là hướng tương lai, chỉ làm sau pilot.

---

## Slide 6. Giữ, đổi, hoãn (4:30–5:10)

**Slide này để làm gì:** trả lời thẳng câu hỏi ở slide 2 cho phần MVP.

**Giải thích:**
- **Giữ:** optimiser, independent verifier, bước planner duyệt, audit trail (nhật ký thao tác, mỗi bản ghi nối với bản trước nên sửa là phát hiện được), phần giải thích bằng AI (không bắt buộc). Các phần này **đã xây xong**, nên giữ gần như không tốn tiền.
- **Đổi:** live pilot có tích hợp → replay bằng file CSV.
- **Hoãn:** Đan Mạch, Na Uy, học từ các chỉnh sửa của planner, theo dõi giao hàng, cải tiến quy trình trên Salesforce. Lý do: chưa có tiền, và nên làm khi khoản tiết kiệm đã được chứng minh.
- **Đóng băng:** chuyển hàng giữa các kho và giao thẳng từ nhà cung cấp tới khách hàng. Hai tính năng này đã có trong MVP nhưng không phát triển thêm.

**Gợi ý cách nói:** "Giữ những gì đã xây, vì gần như không tốn tiền. Đổi live pilot thành replay. Hoãn Đan Mạch, Na Uy và các phần mở rộng. Những gì bị hoãn sẽ quay lại khi khoản tiết kiệm đã được chứng minh và đủ trả chi phí."

---

## Slide 7. Ngân sách (5:10–6:20)

**Slide này để làm gì:** chứng minh phương án nằm trong €0,21M, và giải thích vì sao bỏ €40k cho Nordic Flow là đáng.

**Giải thích:**
- **Cách tính:** số ngày công (person-days) × đơn giá bình quân của đội kết hợp (blended rate, khoảng €60/giờ). Đây là **ước tính**, không phải báo giá, nên luôn đưa ra khoảng.

  | Hạng mục | Ước tính |
  |---|---|
  | CRM migration (khoảng 165 ngày công) | €90–100k |
  | Nordic Flow replay (khoảng 55 ngày công) | €35–40k |
  | Quản lý chương trình | €20k |
  | Contingency (dự phòng, ưu tiên cho CRM) | €30–40k |
  | **Tổng** | **€175–200k**, nằm trong €210k |

- **Ý quan trọng nhất của slide: "price of a decision" (giá của một quyết định).**
  - €40k **không mua cả giải pháp**. Nó mua một **quyết định có căn cứ**: có nên đầu tư tiếp vào Nordic Flow hay không.
  - **Hòa vốn (break-even)** = chi phí ÷ chi phí logistics liên quan mỗi năm. Chi phí logistics liên quan là **€5–10 triệu/năm**, đây là assumption của nhóm từ Round 1.
  - €40k ÷ €10M = 0,4%; €40k ÷ €5M = 0,8%. Nghĩa là chỉ cần chênh dưới 1% là đã bù được khoản €40k.
  - Nếu đạt ngưỡng 2%: 2% × €5–10M = **€100–200k mỗi năm**, và năm nào cũng lặp lại. Số tiền này đủ để trả cho bước tiếp theo (live pilot).
  - Nếu không đạt: Company A **dừng lại sau €40k**, thay vì đã chi €0,3M như kế hoạch Round 1. Rủi ro tài chính nhỏ đi rất nhiều.
- **Cẩn thận:** không nói "Round 1 cần 3–6%, giờ chỉ cần 0,4–0,8%" như thể hai con số giống nhau. €0,3M ở Round 1 là tiền cho cả giải pháp; €40k chỉ là tiền cho bước kiểm chứng.

**Con số cần nhớ:** tổng €175–200k; Nordic Flow €40k; break-even dưới 1%; ở ngưỡng 2% thì khoảng €100–200k/năm.

**Gợi ý cách nói:** "Tổng khoảng 175 đến 200 nghìn, nằm trong 210. 40 nghìn cho Nordic Flow không mua cả giải pháp, mà mua một quyết định dựa trên dữ liệu thật. Chênh dưới 1% là đã bù được. Đạt 2% thì tiết kiệm khoảng 100 đến 200 nghìn euro mỗi năm. Không đạt thì dừng ở 40 nghìn."

**Nếu bị hỏi** *"€5–10 triệu ở đâu ra?"*: đó là assumption từ Round 1. Nhóm sẽ thay bằng số thật của Company A ở tuần 1.

---

## Slide 8. Cổng go/no-go (6:20–7:00)

**Slide này để làm gì:** nói rõ quy tắc quyết định ở tuần 8, để Company A biết khi nào đầu tư tiếp.

**Giải thích:**
- **Quy tắc:** chỉ chuyển sang live pilot nếu **verified plan rẻ hơn actual plan ít nhất 2%**, tính trên các tuần replay, và không vi phạm ràng buộc nào (đủ hàng, không vượt sức chứa).
  - *Verified plan* là phương án Nordic Flow tính ra và đã qua bộ kiểm tra.
  - *Actual plan* là kế hoạch planner đã thực sự chạy.
- **Vì sao 2%:** mức hòa vốn chỉ dưới 1%, nên 2% cao gấp vài lần. Đó là **biên an toàn**, vì replay hơi lạc quan: nó biết trước cả tuần đơn hàng, còn planner lúc đó thì không.
- **5% ở Round 1** vẫn là kỳ vọng, nhưng không còn là điều kiện.
- **Giới hạn phải nói thẳng:** replay **không đo được** thời gian làm việc của planner hay tỷ lệ giao hàng đúng hạn (on-time delivery). Hai chỉ số này chỉ đo được khi chạy thật, nên để cho live pilot.

**Gợi ý cách nói:** "Ở tuần 8, chỉ chuyển sang live pilot nếu verified plan rẻ hơn actual plan ít nhất 2%. 2% cao gấp mấy lần mức hòa vốn, nên có biên an toàn. Replay không đo được thời gian planner hay giao hàng đúng hạn; hai thứ đó để cho live pilot."

**Nếu bị hỏi** *"Replay biết trước cả tuần, so vậy có thiên vị không?"*: có, hơi lạc quan. Vì vậy ngưỡng đặt ở 2% chứ không phải dưới 1%, và sau GO vẫn phải có live pilot. Câu 16 trong `QA.md`.

---

## Slide 9. Demo history replay (7:00–9:20)

**Slide này để làm gì:** cho giám khảo **thấy tận mắt** MVP đã đổi. Đây là phần trả lời trực tiếp câu hỏi *"MVP đã điều chỉnh thế nào"*.

**Giải thích:**
- **Điểm yếu của Round 2:** khoản tiết kiệm 4,2% được tính so với một **quy tắc do nhóm tự đặt ra** (mỗi vùng lấy hàng từ kho ưu tiên). Giám khảo có thể hỏi: "planner thật đâu có làm theo quy tắc đó?".
- **Cách sửa:** thêm một file đầu vào là `actual_plan.csv`, chứa kế hoạch planner đã thực sự chạy. Hệ thống dùng nó làm **mốc so sánh** (baseline) thay cho quy tắc tự đặt.
- **Bảo vệ khỏi số sai:** actual plan cũng phải qua bộ kiểm tra độc lập. Nếu nó không đáp ứng đủ đơn hàng hoặc vượt giới hạn, hệ thống **không hiện con số tiết kiệm nào**. Nhóm không bao giờ so với một mốc không kiểm chứng được.
- **Không gửi gì vào hệ thống thật:** chỉ là tính toán để có bằng chứng.

**Các bước demo (Bách bấm, bạn nói):**
1. Trang Data, bấm History replay: dữ liệu một tuần, actual plan có 606 pallet trên 87 tuyến, khớp với đơn hàng.
2. Bấm Calculate plan: thực tế tốn **32.698**, verified plan **31.316**, chênh **1.382 (4,2%)**, Plan checks **Passed**.
3. Nhấn mạnh: đây là dữ liệu giả lập (synthetic), **không phải dự báo**.

**Con số cần nhớ:** 32.698 → 31.316, chênh 1.382 (4,2%).

**Gợi ý cách nói:** "Ở vòng trước, tiết kiệm được tính so với một quy tắc chúng em tự đặt ra, đó là điểm yếu nhất. Giờ planner tải thêm file kế hoạch đã thực sự chạy. Tuần này thực tế tốn 32.698, verified plan tốn 31.316, thấp hơn 4,2%. Đây là dữ liệu giả lập, không phải dự báo. Nếu actual plan không khớp đơn hàng thì hệ thống không hiện tiết kiệm."

**Nếu demo lỗi:** Nhật Anh mở `deliverables/round3/demo/replay-demo.mp4`. Bạn nói "Chúng em chuyển sang bản ghi sẵn" rồi nói tiếp như bình thường.

---

## Slide 10. Kết quả bốn tuần, Pilot evidence (9:20–10:00)

**Slide này để làm gì:** cho thấy một tuần chưa đủ để quyết định, và MVP đã có công cụ cho quyết định ở tuần 8.

**Giải thích:**
- Một tuần có thể là tuần bất thường. Cổng go/no-go cần **ít nhất 4 tuần** so sánh được.
- Trang **Pilot evidence** trong app chạy lại nhiều tuần một lúc rồi cộng lại:
  - 4 tuần giả lập cho kết quả từ **2,2% đến 4,2%**, tổng **3,16%**, trên ngưỡng 2%, nên app ghi **GO**.
  - Tuần nào có actual plan không kiểm chứng được thì bị loại ra và ghi rõ, không bao giờ được tính vào tiết kiệm.
  - Trang có thêm phần **business case** (tính break-even và tiết kiệm mỗi năm) và phần **kiểm tra code map Dynamics → Salesforce**: mỗi mã vùng giao hàng phải có đúng một mã mới. Đây là đúng việc mapping ở tuần 2.
- **Máy chỉ cộng số, người quyết định vẫn là Company A**, và quyết định thật dựa trên dữ liệu thật của họ.

**Con số cần nhớ:** 2,2–4,2%, tổng 3,16%, kết quả GO.

**Gợi ý cách nói:** "Một tuần chưa đủ để quyết định. Trang Pilot evidence chạy lại nhiều tuần: bốn tuần giả lập cho tổng 3,16%, trên ngưỡng 2%, nên kết quả là GO. Trang này cũng kiểm tra mapping mã từ Dynamics sang Salesforce. Máy chỉ cộng số, Company A quyết định."

---

## Slide 11. User Journey và System Context (10:00–10:45)

**Slide này để làm gì:** trả lời phần còn lại của đề: *"user journey và system diagram đã điều chỉnh thế nào"*.

**Giải thích:**
- **User Journey (hình trái):** công việc hằng ngày của planner **không đổi**. Nhóm thêm một hành trình mới diễn ra **trước** live pilot, gồm 4 bước: xuất các tuần cũ, tải lên và kiểm tra, so với kế hoạch đã chạy, rồi quyết định go/no-go trên trang Pilot evidence.
- **System Context (hình phải):**
  - Ranh giới (boundary) của Nordic Flow giữ nguyên.
  - Chỉ thêm hai file đầu vào **tùy chọn**: `actual_plan.csv` và file code map của CRM.
  - CRM được vẽ là hệ thống của Company A mà Nordic Flow **không kết nối trực tiếp**.
  - Trang 2 của sơ đồ (đã dùng ở slide 5) vẽ hai track là hai hệ thống riêng.

**Gợi ý cách nói:** "Hành trình hằng ngày của planner không đổi; chúng em thêm một hành trình trước live pilot: xuất các tuần cũ, tải lên, so sánh, rồi quyết định trên trang Pilot evidence. Trong sơ đồ hệ thống, ranh giới giữ nguyên, chỉ thêm hai file tùy chọn, và Nordic Flow không kết nối trực tiếp với CRM."

---

## Slide 12. Roadmap 8 tuần (10:45–11:45)

**Slide này để làm gì:** cho thấy kế hoạch làm được trong 8 tuần, và cả hai track cùng kết thúc bằng một quyết định ở tuần 8.

**Giải thích:**

| Tuần | Track CRM | Track Nordic Flow |
|---|---|---|
| 1 | Kiểm kê dữ liệu, tích hợp, user; xác nhận ngày tắt hệ thống cũ | Khảo sát dữ liệu Thụy Điển |
| 2 | Field mapping, thiết kế Salesforce cho nhiều nước | Nạp file thật, mapping mã sản phẩm và mã khách hàng |
| 3–4 | Cấu hình, làm sạch dữ liệu, nạp thử lần 1 | Replay các tuần cũ, kiểm tra actual plan |
| 5–6 | Nạp thử lần 2, tích hợp, user test | Xem kết quả cùng planner |
| 7 | Tập chuyển chính thức (cut-over rehearsal), đào tạo | Đánh giá kinh tế |
| 8 | **Go live**, hệ thống cũ chỉ đọc | **Quyết định go/no-go** |

- **Phương án lùi (fallback):** nếu CRM phức tạp hơn dự kiến, phần lõi vẫn lên ở tuần 8, còn tích hợp phụ dời sang tuần 9–12, trả bằng contingency.
- Câu chốt: **"Nordic Flow chậm lại, CRM thì không."**

**Gợi ý cách nói:** "Hai track chạy song song tám tuần. Tuần 1–2 khảo sát và mapping dữ liệu, tuần 3–7 cấu hình, nạp thử và replay, tuần 8 CRM go live còn Nordic Flow có quyết định go/no-go. Nếu CRM lớn hơn dự kiến thì Nordic Flow chậm lại, CRM thì không."

---

## Slide 13. Rủi ro và trade-off (11:45–12:50)

**Slide này để làm gì:** đề yêu cầu nói rõ trade-off, giới hạn và rủi ro. Nói thẳng những gì phải hy sinh cho thấy nhóm trung thực và có suy nghĩ.

**Giải thích:**
- **Trade-off lớn nhất:** giá trị của Nordic Flow đến **muộn hơn**. Nhóm chấp nhận vì giữ quan hệ khách hàng (CRM) quan trọng hơn. Bù lại, replay cho một con số thật từ sớm và rẻ.
- **Ba rủi ro chính và cách xử lý:**
  - **Dữ liệu CRM kém chất lượng** (trùng, thiếu): làm sạch trước khi nạp. AI gợi ý bản ghi trùng, nhưng con người quyết định.
  - **Ngày tắt hệ thống cũ đến sớm hơn dự kiến:** xác nhận ngay tuần 1, và contingency dành cho CRM.
  - **Người dùng không quen Salesforce:** giữ màn hình gần giống hệ thống cũ, đào tạo trước ngày chuyển.
- **Các rủi ro khác trên slide** (nói nếu còn thời gian):
  - Tạo thêm hệ thống rời rạc: thiết kế Salesforce cho nhiều nước ngay từ đầu.
  - Mã khách hàng thay đổi: mapping ở tuần 2.
  - Dữ liệu cá nhân (GDPR): lưu trong EU, ký thỏa thuận xử lý dữ liệu (DPA), lưu trữ dữ liệu cũ thay vì chép hết.

**Gợi ý cách nói:** "Đánh đổi lớn nhất là Nordic Flow mang lại giá trị muộn hơn; chúng em chấp nhận vì khách hàng quan trọng hơn. Ba rủi ro chính là chất lượng dữ liệu CRM, ngày tắt hệ thống đến sớm, và người dùng không quen Salesforce; mỗi rủi ro đều có cách xử lý trên slide."

---

## Slide 14. Đề nghị và kết thúc (12:50–13:30)

**Slide này để làm gì:** tư vấn luôn kết thúc bằng việc khách hàng cần làm gì tiếp theo. Ba quyết định này đều gắn với các assumption ở slide 3.

**Giải thích:**
1. **Xác nhận license Salesforce nằm ngoài ngân sách dự án**, gắn với assumption 3. Nếu không, kế hoạch phải tính lại.
2. **Xác nhận nước làm CRM migration và ngày tắt hệ thống cũ**, gắn với assumption 1 và 2. Ngày tắt quyết định CRM có kịp 8 tuần không.
3. **Phê duyệt hai track và hai quyết định ở tuần 8**: CRM go live và Nordic Flow go/no-go.

Câu kết: **"Bảo vệ hoạt động kinh doanh trước, chứng minh khoản tiết kiệm với chi phí thấp nhất."**

**Gợi ý cách nói:** "Chúng em đề nghị Company A ba quyết định: xác nhận license nằm ngoài ngân sách, xác nhận nước và ngày tắt hệ thống cũ, và phê duyệt hai track cùng hai quyết định ở tuần 8. Tóm lại: bảo vệ hoạt động kinh doanh trước, chứng minh khoản tiết kiệm với chi phí thấp nhất. Chúng em xin cảm ơn."

---

## Những câu không được nói

- Không nói 4,2% hay 3,16% là **dự báo** cho Company A: đây là dữ liệu giả lập.
- Không nói Nordic Flow **kết nối** với Salesforce hay ERP.
- Không nói chi phí là **báo giá**: luôn nói "ước tính".
- Không nói giảm thời gian làm việc của planner hay cải thiện giao hàng đúng hạn: chưa đo.
- Audit trail: nói "phát hiện được nếu bị sửa", không nói "không thể sửa".
