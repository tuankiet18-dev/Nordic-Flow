# Script thuyết trình Round 3 (15 phút, tiếng Việt)

**Ba người nói theo ba đoạn liền.** Đề chỉ bắt buộc cả ba có mặt; mỗi người nói đúng phần mình hiểu nhất.

| Người | Slide | Phần | Thời gian |
|---|---|---|---|
| **Kiệt** | 1–8 | Mở đầu, hai thay đổi, assumption, option, đề xuất, ngân sách, cổng go/no-go | 0:00–7:10 |
| **Bách** | 9–12 | Demo MVP, Pilot evidence, User Journey và System Context, roadmap 8 tuần | 7:10–11:50 |
| **Nhật Anh** | 13–14 | Rủi ro, trade-off, ba quyết định, lời cảm ơn | 11:50–13:40 |

Chỉ đổi người hai lần: Kiệt → Bách sau slide 8, Bách → Nhật Anh sau slide 12.

- **Chuyển slide:** người đang nói tự bấm (dùng chung một clicker, đưa cho người nói tiếp). Ở slide 9–10, Bách vừa nói vừa thao tác máy demo.
- **Backup video:** nếu demo lỗi quá 15 giây, Nhật Anh mở video; Bách nói tiếp như bình thường.
- **Chuyển người:** người nói trước giới thiệu người nói sau bằng một câu (đã viết sẵn ở cuối phần). Người nói sau bước lên trước khi câu đó kết thúc.
- **Hỏi đáp:** cả ba trả lời theo phân công trong `QA.md`.

Cách dùng file này:
- Chữ trong ngoặc kép là lời nói, viết thành câu đầy đủ để dễ hiểu. Đọc to vài lần, sau đó **nói bằng lời của mình**. Không cầm giấy đọc.
- **[Trong ngoặc vuông]** là hành động: chuyển slide, chỉ vào màn hình, dừng lại.
- **Câu in đậm** là câu chốt của slide. Quên hết thì nói ít nhất câu này.
- Muốn hiểu sâu hơn lý do đằng sau từng ý, đọc `SCRIPT-HIEU-BAI.md`.
- Lời nói khoảng 2.000 âm tiết, tức khoảng 12 phút nói chậm và rõ. Phần còn lại là thời gian thao tác demo, chuyển slide và dừng sau các con số. Bài kết thúc khoảng **13:40**, còn dư hơn một phút. Nếu tập thử thấy vượt 14:30, dùng bảng "Khi có sự cố" ở cuối file để cắt bớt.

| Slide | Nội dung | Người nói | Kết thúc lúc |
|---|---|---|---|
| 1 | Mở đầu | Kiệt | 0:30 |
| 2 | Hai thay đổi | Kiệt | 1:20 |
| 3 | Assumption | Kiệt | 2:40 |
| 4 | Ba option | Kiệt | 3:30 |
| 5 | Recommendation: hai track | Kiệt | 4:40 |
| 6 | Giữ, đổi, hoãn | Kiệt | 5:20 |
| 7 | Ngân sách | Kiệt | 6:30 |
| 8 | Cổng go/no-go | Kiệt | 7:10 |
| 9 | Demo | Bách | 9:20 |
| 10 | Kết quả bốn tuần, Pilot evidence | Bách | 10:05 |
| 11 | User Journey và System Context | Bách | 10:50 |
| 12 | Roadmap 8 tuần | Bách | 11:50 |
| 13 | Rủi ro và trade-off | Nhật Anh | 12:55 |
| 14 | Đề nghị và kết thúc | Nhật Anh | 13:40 |

---

## Slide 1. Mở đầu (0:00–0:30)

**Người nói: Kiệt**

[Đứng giữa, nhìn giám khảo, chờ một nhịp rồi mới nói.]

"Chúng em chào các anh chị giám khảo. Chúng em là nhóm NEW AURA: em là Kiệt, cùng với Bách và Nhật Anh.

Ở vòng trước, chúng em giới thiệu Nordic Flow, một công cụ giúp planner của Company A quyết định hàng đi từ nhà cung cấp nào, qua kho nào, đến vùng giao nào, sao cho tổng chi phí thấp nhất. Mọi plan đều được kiểm tra độc lập, và planner duyệt rồi mới dùng.

Sau vòng trước, Company A đưa ra hai yêu cầu mới. **Hôm nay chúng em trình bày proposal đã thay đổi thế nào, và vì sao.**"

[Chuyển slide.]

## Slide 2. Hai thay đổi (0:30–1:20)

**Người nói: Kiệt**

"Thay đổi thứ nhất là ngân sách. Ở Round 1, chúng em ước tính năm đầu khoảng 0,3 triệu euro. Cắt 30% thì còn **khoảng 0,21 triệu euro**.

Thay đổi thứ hai là một yêu cầu bắt buộc: một nước đang dùng Microsoft Dynamics 365 để quản lý khách hàng, hệ thống này sắp ngừng, nên phải chuyển sang Salesforce. Executive board quyết định việc chuyển CRM này là **một phần của dự án hiện tại**, tức là dùng chung ngân sách và chung thời gian với Nordic Flow.

CRM migration không liên quan gì đến bài toán phân bổ hàng. Nhưng nó có hạn chót cứng, và nó lấy bớt tiền và người của chúng em. Trong khi đó, mục tiêu ban đầu là giảm chi phí logistics vẫn còn nguyên.

**Vì vậy câu hỏi đặt ra là: giữ gì, đổi gì, và hoãn gì?**"

[Chuyển slide.]

## Slide 3. Assumption (1:20–2:40)

**Người nói: Kiệt**

"Đề bài để trống một số điểm, nên trước khi đưa ra phương án, chúng em nói rõ các assumption của mình.

[Chỉ dòng 1 và 2.] Thứ nhất, nước làm CRM migration là Thụy Điển, trùng với nước chúng em chọn pilot Nordic Flow, nên tuần khảo sát đầu tiên có thể làm chung. Nếu là Đan Mạch hay Na Uy thì kế hoạch vẫn đúng, hai track chỉ chạy tách nhau. Thứ hai, Dynamics đang chạy là bản On-Premises đã hết hỗ trợ, nên việc thay thế còn là vấn đề bảo mật.

[Chỉ dòng 3, nói chậm.] Assumption quan trọng nhất là: **license Salesforce nằm ngoài ngân sách dự án.** Theo giá niêm yết, một trăm user đã tốn khoảng 210 nghìn đô mỗi năm, nhiều hơn cả ngân sách dự án. Nếu khoản này phải lấy từ ngân sách dự án thì không phương án nào khả thi. Vì vậy chúng em coi đây là chi phí vận hành thay cho CRM cũ, và sẽ đề nghị Company A xác nhận ở cuối bài.

[Chỉ dòng 5.] Assumption quan trọng thứ hai là **blended team**: trưởng nhóm ở Bắc Âu để làm việc với doanh nghiệp, delivery team ở Việt Nam để cấu hình, chuyển dữ liệu và test. Nếu cả đội tính theo rate Tây Âu, riêng CRM migration đã khoảng 200 nghìn euro, tức là hết toàn bộ ngân sách. Có blended team thì cả hai track mới vừa."

[Chuyển slide.]

## Slide 4. Ba option (2:40–3:30)

**Người nói: Kiệt**

"Với những assumption đó, chúng em so sánh ba option.

[Chỉ cột A.] Option A là làm tất cả như kế hoạch cũ và thêm CRM. Cách này giữ được cả hai mục tiêu, nhưng vượt ngân sách và đội bị quá tải.

[Chỉ cột B.] Option B là làm CRM trước, để Nordic Flow sau. Cách này vừa ngân sách và ít rủi ro. Nhưng đến tuần tám, Company A vẫn chưa có bằng chứng nào cho thấy Nordic Flow tiết kiệm được tiền. Mà một dự án chưa có bằng chứng thường là thứ bị cắt đầu tiên ở lần cắt ngân sách tiếp theo.

[Chỉ cột C.] Option C là chạy hai track song song. Nordic Flow được kiểm chứng bằng history replay, chỉ tốn khoảng 40 nghìn euro và không lấy người của CRM. **Đây là option duy nhất mà đến tuần tám, Company A có cả CRM mới lẫn một con số tiết kiệm thật.** Vì vậy chúng em chọn option C."

[Chuyển slide.]

## Slide 5. Recommendation: hai track (3:30–4:40)

**Người nói: Kiệt**

"[Chỉ thẻ Track 1.] Track một là chuyển CRM nguyên trạng, like-for-like: khách hàng, người liên hệ, cơ hội bán hàng đang mở và hoạt động gần đây. Lịch sử cũ hơn được lưu ở chế độ read-only. Giai đoạn này không thiết kế lại quy trình bán hàng, để kịp hạn.

[Chỉ thẻ Track 2.] Track hai giữ Nordic Flow nhưng đổi cách pilot. Thay vì chạy thử thật trong vận hành, cần nhiều tích hợp và tốn kém, chúng em **chạy lại bốn đến tám tuần đã qua**: cùng đơn hàng, cùng giá, rồi so plan tối ưu với kế hoạch planner đã thực sự chạy. Cách này rẻ, và không đụng gì đến vận hành.

[Chỉ thẻ Link.] Hai track liên quan với nhau qua dữ liệu: mã khách hàng và mã vùng giao hàng hôm nay nằm trong Dynamics, sau này sẽ nằm trong Salesforce. Nordic Flow đọc dữ liệu qua file, nên khi chuyển CRM chỉ cần đổi nơi xuất file, còn bộ tối ưu giữ nguyên. Ở tuần hai, chúng em mapping mã cũ sang mã mới để số liệu trước và sau khi chuyển vẫn so sánh được.

[Chỉ nhãn Conflict rule, nói chậm.] Và một quy tắc: **khi hai track tranh người hoặc tranh tiền, CRM thắng**, vì CRM có hạn chót cứng."

[Chuyển slide.]

## Slide 6. Giữ, đổi, hoãn (4:40–5:20)

**Người nói: Kiệt**

"Cụ thể với MVP: chúng em **giữ** những gì đã xây xong, gồm optimiser, independent verifier, bước planner duyệt và audit trail, vì giữ lại gần như không tốn thêm tiền. Chúng em **đổi** live pilot thành history replay bằng file CSV. Chúng em **hoãn** Đan Mạch, Na Uy và các tính năng mở rộng. Và **đóng băng** chuyển hàng giữa các kho và tuyến giao thẳng: đã có trong MVP nhưng không phát triển thêm.

**Những gì bị hoãn sẽ quay lại khi khoản tiết kiệm đã được chứng minh và đủ để trả chi phí.**"

[Chuyển slide.]

## Slide 7. Ngân sách (5:20–6:30)

**Người nói: Kiệt**

"[Chỉ bảng.] Đây là ước tính, không phải báo giá. Chúng em tính bằng số person-days nhân với blended rate khoảng 60 euro một giờ. CRM migration khoảng 90 đến 100 nghìn euro, Nordic Flow 35 đến 40 nghìn, quản lý chương trình 20 nghìn, và contingency 30 đến 40 nghìn, dành cho CRM trước. **Tổng khoảng 175 đến 200 nghìn euro, nằm trong 210 nghìn.**

[Chỉ thẻ màu xanh, nói chậm.] Điểm quan trọng ở đây là: 40 nghìn euro cho Nordic Flow không mua cả giải pháp. Số tiền đó mua **một quyết định dựa trên dữ liệu thật**: có nên đầu tư tiếp hay không. Chỉ cần chênh lệch dưới 1% chi phí logistics liên quan là đã bù được khoản này. Nếu đạt ngưỡng 2%, Company A tiết kiệm khoảng 100 đến 200 nghìn euro mỗi năm, và năm nào cũng vậy. Còn nếu không đạt, **Company A dừng lại sau 40 nghìn euro, thay vì 0,3 triệu.**"

[Chuyển slide.]

## Slide 8. Cổng go/no-go (6:30–7:10)

**Người nói: Kiệt**

"Vì vậy chúng em đặt một điểm quyết định ở tuần tám. **Chỉ chuyển sang live pilot nếu verified plan rẻ hơn actual plan ít nhất 2%** trên các tuần đã replay, và không vi phạm ràng buộc nào. 2% cao gấp vài lần mức hòa vốn, nên có biên an toàn. Mục tiêu 5% ở vòng trước vẫn là kỳ vọng, nhưng không còn là điều kiện.

Chúng em cũng nói rõ giới hạn: replay không đo được thời gian làm việc của planner hay tỷ lệ giao hàng đúng hạn. Hai chỉ số đó sẽ được đo trong live pilot.

Bây giờ Bách sẽ cho các anh chị xem MVP đã thay đổi thế nào."

[Chuyển slide. Đưa clicker cho Bách.]

## Slide 9. Demo history replay (7:10–9:20)

**Người nói: Bách**

[Bách vừa nói vừa thao tác. Nếu ứng dụng lỗi quá 15 giây, Nhật Anh mở `deliverables/round3/demo/replay-demo.mp4`, Bách nói tiếp như bình thường.]

"Ở vòng trước, khoản tiết kiệm của chúng em được tính **so với một quy tắc do chúng em tự đặt ra**: mỗi vùng lấy hàng từ kho ưu tiên. Planner thật không nhất thiết làm như vậy, nên đó là điểm yếu nhất của bài. Bây giờ chúng em sửa đúng điểm đó.

[Trang Data, bấm History replay.] Planner tải lên dữ liệu của một tuần đã qua: tám file như cũ, cộng thêm một file mới là `actual_plan.csv`, tức là kế hoạch đã thực sự chạy trong tuần đó. [Chỉ dòng Actual plan.] Hệ thống kiểm tra từng file: kế hoạch thực tế có 606 pallet trên 87 tuyến, khớp với đơn hàng của tuần.

[Bấm Calculate plan, chỉ lần lượt từng ô.] Tuần đó, thực tế đã tốn 32.698 đơn vị chi phí. Plan tối ưu, đã qua kiểm tra, tốn 31.316. **Chênh 1.382, tức là 4,2%.** [Dừng nửa giây.] Đây là dữ liệu giả lập: con số này chứng minh cách đo hoạt động, **không phải dự báo** cho Company A.

[Chỉ ô Plan checks.] Cả hai plan đều đi qua cùng một bộ kiểm tra độc lập. Nếu kế hoạch thực tế không khớp đơn hàng hay vượt giới hạn, hệ thống **không hiện con số tiết kiệm nào**, vì chúng em không bao giờ so với một mốc không kiểm chứng được. Và không có gì được gửi vào hệ thống của Company A: đây chỉ là bằng chứng để ra quyết định."

[Chuyển slide.]

## Slide 10. Kết quả bốn tuần, Pilot evidence (9:20–10:05)

**Người nói: Bách**

[Nếu demo đang chạy tốt: mở menu Pilot evidence, bấm Use the 4 sample weeks, màn hình hiện GO. Nếu không, dùng slide.]

"Nhưng một tuần chưa đủ để quyết định, vì một tuần có thể là tuần bất thường. Vì vậy MVP có thêm trang **Pilot evidence**, chạy lại nhiều tuần một lúc rồi cộng lại. Với bốn tuần dữ liệu giả lập, plan tối ưu rẻ hơn từ **2,2 đến 4,2%, tổng cộng 3,16%**. Con số này trên ngưỡng 2%, nên hệ thống ghi **GO**.

Trang này cũng kiểm tra việc mapping mã từ Dynamics sang Salesforce, đúng việc của tuần hai trong roadmap. Hệ thống chỉ cộng số; người quyết định vẫn là Company A, dựa trên dữ liệu thật của họ."

[Chuyển slide.]

## Slide 11. User Journey và System Context (10:05–10:50)

**Người nói: Bách**

"[Chỉ hình bên trái.] Về User Journey: công việc hằng ngày của planner không đổi. Chúng em thêm một hành trình mới, diễn ra **trước** live pilot, gồm bốn bước: xuất dữ liệu các tuần cũ, tải lên và kiểm tra, so với kế hoạch đã chạy, rồi quyết định go hoặc no-go trên trang Pilot evidence.

[Chỉ hình bên phải.] Về System Context: ranh giới của Nordic Flow giữ nguyên. Chỉ thêm hai file đầu vào tùy chọn là `actual_plan.csv` và file mapping mã của CRM. CRM được vẽ là một hệ thống của Company A mà Nordic Flow **không kết nối trực tiếp**."

[Chuyển slide.]

## Slide 12. Roadmap 8 tuần (10:50–11:50)

**Người nói: Bách**

"Hai track chạy song song trong tám tuần.

[Chỉ dòng tuần 1–2.] Tuần một và hai: track CRM kiểm kê dữ liệu, xác nhận ngày tắt hệ thống cũ và làm field mapping; track Nordic Flow nạp file thật và mapping mã sản phẩm, mã khách hàng. [Chỉ dòng 3–7.] Tuần ba đến bảy: CRM cấu hình, làm sạch dữ liệu, nạp thử hai lần và đào tạo user; Nordic Flow replay các tuần cũ và xem kết quả cùng planner.

[Chỉ dòng 8.] Tuần tám là điểm quyết định chung: **CRM chính thức hoạt động, hệ thống cũ chuyển sang read-only; còn Nordic Flow có quyết định go hoặc no-go.** Nếu CRM phức tạp hơn dự kiến, các tích hợp phụ được dời sang tuần chín đến mười hai và dùng contingency. Nói cách khác, **Nordic Flow có thể chậm lại, còn CRM thì không.**

Nhật Anh sẽ nói về rủi ro và những quyết định chúng em đề xuất."

[Chuyển slide. Đưa clicker cho Nhật Anh.]

## Slide 13. Rủi ro và trade-off (11:50–12:55)

**Người nói: Nhật Anh**

"Chúng em nói thẳng về những gì phải đánh đổi. **Trade-off lớn nhất là giá trị của Nordic Flow đến muộn hơn.** Chúng em chấp nhận điều đó, vì giữ được quan hệ khách hàng là ưu tiên số một. Bù lại, replay cho một con số thật từ sớm và với chi phí thấp.

[Chỉ bảng.] Về rủi ro, có ba rủi ro chính. Thứ nhất là chất lượng dữ liệu CRM: chúng em làm sạch dữ liệu trước khi nạp, AI gợi ý các bản ghi trùng nhưng con người quyết định. Thứ hai là ngày tắt hệ thống cũ đến sớm hơn dự kiến: chúng em xác nhận ngay tuần một, và contingency được dành cho CRM. Thứ ba là user không quen Salesforce: chúng em giữ màn hình gần giống hệ thống cũ và đào tạo trước ngày chuyển."

[Chuyển slide.]

## Slide 14. Đề nghị và kết thúc (12:55–13:40)

**Người nói: Nhật Anh**

"Để bắt đầu, chúng em đề nghị Company A đưa ra ba quyết định. **Một**, xác nhận license Salesforce nằm ngoài ngân sách dự án. **Hai**, xác nhận nước làm CRM migration và ngày tắt hệ thống cũ. **Ba**, phê duyệt hai track và hai điểm quyết định ở tuần tám.

[Dừng một nhịp.] Tóm lại, đề xuất của chúng em là: **bảo vệ hoạt động kinh doanh trước, và chứng minh khoản tiết kiệm với chi phí thấp nhất.** Chúng em xin cảm ơn, và rất mong nhận được câu hỏi từ các anh chị."

[Đứng yên, nhìn giám khảo. Cả ba cùng đứng lên phía trước cho phần hỏi đáp: xem `QA.md`.]

---

## Những câu không được nói

- Không nói 4,2% hay 3,16% là dự báo cho Company A.
- Không nói Nordic Flow kết nối với Salesforce hay ERP.
- Không nói chi phí là báo giá. Luôn nói "ước tính".
- Không nói giảm thời gian làm việc của planner hay cải thiện giao hàng đúng hạn (chưa đo).
- Audit trail: nói "phát hiện được nếu bị sửa", không nói "không thể sửa".

## Khi có sự cố

| Sự cố | Xử lý |
|---|---|
| Demo lỗi hoặc treo quá 15 giây | Nhật Anh mở backup video; Bách nói tiếp, không xin lỗi dài dòng: "Chúng em chuyển sang bản ghi sẵn." |
| Chậm hơn lịch 30 giây | Slide 10 dùng slide, không mở app; slide 12 chỉ nói tuần 8 |
| Chậm hơn 1 phút | Slide 3 chỉ nói assumption license và blended team; slide 13 chỉ nói trade-off lớn nhất |
| Quên lời | Nói câu in đậm của slide đó, rồi chuyển slide |
| Giám khảo hỏi chen giữa bài | Trả lời một câu ngắn, nói "phần này chúng em sẽ nói rõ ở slide sau" nếu có, rồi tiếp tục |
