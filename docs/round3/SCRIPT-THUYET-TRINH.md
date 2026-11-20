# Script thuyết trình Round 3 (15 phút, tiếng Việt)

**Người nói chính: Kiệt.** Bách điều khiển máy demo ở slide 9. Nhật Anh chuyển slide và mở backup video nếu demo lỗi. Cả ba người cùng trả lời câu hỏi theo phân công trong `QA.md`.

Cách dùng file này:
- Chữ thường trong ngoặc kép là lời nói. Đọc to vài lần cho quen, sau đó **nói bằng lời của mình**. Không cầm giấy đọc.
- **[Ở trong ngoặc vuông]** là hành động: chuyển slide, chỉ vào màn hình, dừng lại.
- **Câu in đậm** là câu chốt của slide. Nếu quên hết thì nói ít nhất câu này.
- Tốc độ: khoảng 150 từ mỗi phút, chậm hơn lúc nói chuyện bình thường. Sau mỗi con số quan trọng thì dừng nửa giây.
- Cột thời gian là mốc **kết thúc** của mỗi slide. Tập với đồng hồ bấm giờ. Nếu bị chậm quá 30 giây, bỏ những câu có đánh dấu (có thể bỏ).

| Slide | Nội dung | Kết thúc lúc |
|---|---|---|
| 1 | Mở đầu | 0:40 |
| 2 | Hai thay đổi | 1:40 |
| 3 | Assumption | 2:50 |
| 4 | Ba option | 3:40 |
| 5 | Recommendation: hai track | 5:00 |
| 6 | Giữ, đổi, hoãn | 5:50 |
| 7 | Ngân sách | 7:10 |
| 8 | Cổng go/no-go | 8:00 |
| 9 | Demo | 10:20 |
| 10 | Kết quả bốn tuần | 11:00 |
| 11 | User Journey và System Context | 11:50 |
| 12 | Roadmap 8 tuần | 13:00 |
| 13 | Rủi ro | 14:10 |
| 14 | Đề nghị và kết thúc | 15:00 |

---

## Slide 1. Mở đầu (0:00–0:40)

[Đứng giữa, nhìn giám khảo, chờ một nhịp rồi mới nói.]

"Chúng em chào các anh chị giám khảo. Chúng em là nhóm NEW AURA: em là Kiệt, đây là Bách và Nhật Anh.

Ở vòng trước, chúng em đã giới thiệu Nordic Flow: một công cụ giúp planner của Company A phân bổ hàng từ nhà cung cấp, qua kho, đến delivery zone với tổng chi phí thấp nhất. Mọi phương án đều được kiểm tra độc lập và được planner duyệt trước khi dùng.

Từ đó đến nay, Company A đã thay đổi hai điều. **Hôm nay chúng em trình bày proposal đã thay đổi thế nào, và vì sao.**"

[Chuyển slide.]

## Slide 2. Hai thay đổi (0:40–1:40)

"Thay đổi thứ nhất là ngân sách. Ở Round 1, chúng em ước tính năm đầu khoảng 0,3 triệu euro. Cắt 30% thì còn khoảng **0,21 triệu euro**.

Thay đổi thứ hai là một must-have requirement: một nước đang dùng Microsoft Dynamics 365 để quản lý khách hàng, và hệ thống này sắp ngừng hoạt động. Nước đó phải chuyển sang Salesforce. Executive board quyết định việc migration này là **một phần của dự án hiện tại**: cùng ngân sách, cùng thời gian.

CRM migration không liên quan gì đến bài toán phân bổ hàng, nhưng có hạn chót cứng và dùng chung tiền với chúng em. Trong khi đó, mục tiêu ban đầu là giảm chi phí logistics vẫn còn nguyên.

**Vì vậy câu hỏi của chúng em là: giữ gì, đổi gì, và hoãn gì?**"

[Chuyển slide.]

## Slide 3. Assumption (1:40–2:50)

"Đề bài để trống một số điểm, nên chúng em nói rõ các assumption của mình.

[Chỉ vào dòng 1.] Một: nước làm CRM migration là Thụy Điển, trùng với nước chúng em chọn pilot Nordic Flow, nên tuần discovery đầu tiên dùng chung được. Nếu là Đan Mạch hay Na Uy thì kế hoạch vẫn đúng; hai track chỉ chạy tách nhau.

Hai: Dynamics đang chạy là bản On-Premises đã end of support. Bản Dynamics CRM 2016 đã end of support từ ngày 13 tháng 1 năm 2026, nên việc thay thế còn là vấn đề bảo mật.

[Chỉ vào dòng 3, nói chậm.] Ba, và đây là assumption quan trọng nhất: **license Salesforce nằm ngoài ngân sách dự án.** Theo giá niêm yết, một trăm user tốn khoảng 210 nghìn đô mỗi năm, nhiều hơn cả ngân sách dự án. Nếu khoản này phải lấy từ ngân sách dự án thì không phương án nào khả thi. Chúng em coi đây là operating cost (OPEX) thay cho CRM cũ, và sẽ đề nghị Company A xác nhận ở cuối bài.

Bốn: like-for-like migration, lịch sử cũ hơn 24 tháng thì archive. Năm, và đây là assumption quan trọng thứ hai: **blended team**, trưởng nhóm ở Bắc Âu và delivery team ở Việt Nam. Assumption này quyết định ngân sách: nếu cả đội làm với rate Tây Âu, khoảng 1.200 euro một ngày, riêng CRM migration đã khoảng 200 nghìn euro, tức hết toàn bộ ngân sách. Có blended team thì cả hai track mới vừa."

[Chuyển slide.]

## Slide 4. Ba option (2:50–3:40)

"Với những assumption đó, chúng em so sánh ba option.

[Chỉ cột A.] Option A, làm tất cả như kế hoạch cũ và thêm CRM: vượt ngân sách.

[Chỉ cột B.] Option B, làm CRM trước, để Nordic Flow sau: vừa ngân sách và ít rủi ro. Nhưng mục tiêu ban đầu, là giảm tổng chi phí logistics, phải chờ ít nhất tám tuần mà không có bằng chứng nào. Và một dự án chưa có bằng chứng thường là thứ bị cắt đầu tiên ở lần cắt ngân sách tiếp theo.

[Chỉ cột C.] Option C, hai track song song trong một chương trình. History replay chỉ tốn khoảng 40 nghìn euro và không lấy người của CRM. **Đây là option duy nhất mà đến tuần tám có cả CRM mới lẫn một con số tiết kiệm thật.** Chúng em chọn option C."

[Chuyển slide.]

## Slide 5. Recommendation: hai track (3:40–5:00)

"[Chỉ vào thẻ Track 1.] Track một là like-for-like CRM migration: khách hàng, contact, open opportunity và hoạt động gần đây. Lịch sử cũ được lưu ở chế độ read-only. Không thiết kế lại quy trình bán hàng trong giai đoạn này.

[Chỉ vào thẻ Track 2.] Track hai giữ Nordic Flow, nhưng đổi cách pilot. Thay vì chạy live trong vận hành với nhiều integration, chúng em **replay bốn đến tám tuần đã qua**: cùng đơn hàng, cùng giá, rồi so optimised plan với actual plan. Cách này rẻ và không ảnh hưởng gì đến vận hành.

[Chỉ vào thẻ Link.] Hai track liên quan với nhau qua dữ liệu: thông tin khách hàng và delivery zone hôm nay nằm trong Dynamics, sau này sẽ nằm trong Salesforce. Nordic Flow đọc dữ liệu qua file, nên CRM migration chỉ đổi nơi xuất file, không đổi optimiser. Tuần thứ hai chúng em kiểm tra việc mapping mã cũ sang mã mới.

[Chỉ vào nhãn Conflict rule, nói chậm.] Và một quy tắc: **khi hai track tranh người hoặc tranh tiền, CRM thắng**, vì CRM có hạn chót cứng."

[Chuyển slide.]

## Slide 6. Giữ, đổi, hoãn (5:00–5:50)

"Cụ thể, trong MVP:

**Giữ** optimiser, independent verifier, bước planner duyệt, audit trail và phần giải thích bằng AI, phần này không bắt buộc dùng. Những phần này đã xây xong nên gần như không tốn thêm.

**Đổi** từ live pilot sang history replay, chỉ dùng file CSV.

**Hoãn** Đan Mạch và Na Uy, phần học từ các chỉnh sửa của planner, theo dõi giao hàng, và cải tiến quy trình trên Salesforce.

**Đóng băng** chuyển hàng giữa các kho và tuyến giao thẳng.

**Những gì bị hoãn sẽ quay lại khi khoản tiết kiệm đã được chứng minh và đủ để trả chi phí.**"

[Chuyển slide.]

## Slide 7. Ngân sách (5:50–7:10)

"[Chỉ vào bảng.] Đây là ước tính, không phải quote. Chúng em tính bằng số person-days nhân với blended rate khoảng 60 euro một giờ.

CRM migration khoảng 165 person-days, 90 đến 100 nghìn euro. Nordic Flow khoảng 55 person-days, 35 đến 40 nghìn. Programme management 20 nghìn. Contingency 30 đến 40 nghìn, và dùng cho CRM trước. **Tổng khoảng 175 đến 200 nghìn euro, nằm trong 210 nghìn.**

[Chỉ vào thẻ màu xanh, nói chậm.] Điều quan trọng ở đây: 40 nghìn euro cho Nordic Flow không mua cả giải pháp. Số tiền đó mua **một quyết định dựa trên dữ liệu thật**. Chỉ cần chênh lệch dưới 1% chi phí logistics liên quan là đã bù được khoản này.

Nếu chênh lệch đạt ngưỡng 2% mà chúng em đặt ra, Company A tiết kiệm khoảng 100 đến 200 nghìn euro mỗi năm, và năm nào cũng vậy, đủ để trả cho bước live pilot. Còn nếu không đạt, **Company A dừng lại sau 40 nghìn euro, thay vì 0,3 triệu.**"

[Chuyển slide.]

## Slide 8. Cổng go/no-go (7:10–8:00)

"Vì vậy chúng em đặt một decision gate ở tuần thứ tám.

**Chỉ chuyển sang live pilot nếu verified plan rẻ hơn actual plan ít nhất 2%**, tính trên các tuần replay, và không vi phạm constraint nào. Mục tiêu 5% ở vòng trước vẫn là kỳ vọng, nhưng không còn là điều kiện.

Chúng em cũng nói rõ giới hạn: history replay **không đo được** thời gian làm việc của planner hay tỷ lệ on-time delivery. Hai chỉ số đó sẽ được đo trong live pilot.

Bây giờ Bách sẽ cho các anh chị xem MVP đã thay đổi thế nào."

[Chuyển slide. Bách mở ứng dụng.]

## Slide 9. Demo history replay (8:00–10:20)

[Bách thao tác, Kiệt nói. Nếu ứng dụng lỗi quá 15 giây, Nhật Anh mở `deliverables/round3/demo/replay-demo.mp4`, Kiệt nói tiếp theo đúng lời dưới đây.]

"Ở vòng trước, khoản tiết kiệm của chúng em được tính **so với một quy tắc do chúng em tự đặt ra**. Đó là điểm yếu nhất của bài. Giờ chúng em sửa đúng điểm đó.

[Bách: trang Data, bấm History replay.] Planner tải lên dữ liệu của một tuần đã qua: tám file như cũ, cộng thêm một file mới là `actual_plan.csv`, tức kế hoạch đã thực sự chạy tuần đó.

[Bách chỉ vào dòng Actual plan.] Hệ thống kiểm tra từng file. Actual plan có 606 pallet trên 87 tuyến, khớp với đơn hàng của tuần.

[Bách: bấm Calculate plan.] Bây giờ tính plan, với cùng đơn hàng, cùng giá và cùng capacity.

[Bách chỉ lần lượt từng ô.] Tuần đó thực tế đã tốn 32.698 đơn vị chi phí. Verified plan tốn 31.316. **Chênh 1.382, tức 4,2%.**

[Dừng nửa giây.] Đây là synthetic data. Con số này chứng minh cách đo hoạt động, **không phải dự báo** cho Company A.

[Bách chỉ vào ô Plan checks.] Cả hai plan đều đi qua independent verifier. Nếu actual plan không khớp đơn hàng hay vượt giới hạn, hệ thống **không hiện con số tiết kiệm nào**, vì chúng em không so với một mốc không kiểm chứng được.

Và không có gì được gửi vào hệ thống nào của Company A. Đây chỉ là bằng chứng để ra quyết định.

(Có thể bỏ) [Bách: Review & approve, Generate explanation.] Planner vẫn duyệt và có bản giải thích; bản giải thích ghi rõ đang so với actual plan từ lịch sử."

[Chuyển slide.]

## Slide 10. Kết quả bốn tuần (10:20–11:00)

(Có thể làm thay cho slide, nếu demo đang chạy tốt và còn thời gian) [Bách: menu Pilot evidence, bấm Use the 4 sample weeks. Màn hình hiện GO, 3,16%, bảng 4 tuần.] "Trang Pilot evidence cộng các tuần lại và so với ngưỡng 2%: ở đây là GO. Hệ thống chỉ cộng số; người quyết định vẫn là Company A."

"Chúng em chạy cùng cách đó cho bốn tuần synthetic data. **Verified plan rẻ hơn từ 2,2 đến 4,2%, tổng cộng 3,16%.**

Một lần nữa, đây không phải dự báo. Nó cho thấy cách đo hoạt động từ đầu đến cuối và lặp lại được. Con số thật sẽ đến từ các tuần dữ liệu thật của Company A trong giai đoạn discovery.

[Chỉ vào thẻ màu xanh.] Trong MVP, trang **Pilot evidence** cộng các tuần lại và áp ngưỡng 2%: ở đây kết quả là **GO**. Trang này cũng kiểm tra code map từ Dynamics sang Salesforce cho mã delivery zone. Hệ thống chỉ cộng số; người quyết định vẫn là Company A."

[Chuyển slide.]

## Slide 11. User Journey và System Context (11:00–11:50)

"[Chỉ hình bên trái.] Journey làm việc hằng ngày của planner không đổi. Chúng em thêm một journey mới, diễn ra **trước** khi live pilot: xuất dữ liệu các tuần cũ, tải lên, so với kế hoạch đã chạy, rồi ra quyết định có đi tiếp hay không.

[Chỉ hình bên phải.] Trong System Context diagram, boundary của Nordic Flow giữ nguyên, chỉ thêm một input file. CRM xuất hiện như một hệ thống của Company A mà Nordic Flow **không kết nối trực tiếp**. Sau khi chuyển, file khách hàng sẽ được xuất từ Salesforce thay vì từ Dynamics."

[Chuyển slide.]

## Slide 12. Roadmap 8 tuần (11:50–13:00)

"Hai track chạy song song trong tám tuần.

[Chỉ dòng tuần 1–2.] Tuần một: track CRM kiểm kê dữ liệu, integration, user, và xác nhận ngày tắt hệ thống cũ; track Nordic Flow discovery dữ liệu Thụy Điển. Tuần hai: field mapping dữ liệu CRM, còn Nordic Flow nạp file thật, mapping mã sản phẩm và mã khách hàng.

[Chỉ dòng 3–6.] Tuần ba đến sáu: CRM configuration, data cleansing, trial load hai lần, test với user; Nordic Flow replay các tuần cũ và xem kết quả cùng planner.

[Chỉ dòng 8.] Tuần bảy cut-over rehearsal và đào tạo. Tuần tám: **CRM chính thức hoạt động, hệ thống cũ chuyển sang read-only; Nordic Flow có quyết định go hoặc no-go.**

Nếu CRM lớn hơn dự kiến, các integration phụ chuyển sang tuần chín đến mười hai và dùng contingency. **Nordic Flow chậm lại, CRM thì không.**"

[Chuyển slide.]

## Slide 13. Rủi ro và trade-off (13:00–14:10)

"Chúng em nói thẳng về những gì phải trade-off.

**Trade-off lớn nhất là giá trị của Nordic Flow đến muộn hơn.** Chúng em chấp nhận điều đó, vì giữ được quan hệ khách hàng là ưu tiên số một. Bù lại, history replay cho một con số thật từ sớm và với chi phí thấp.

Về rủi ro, chúng em chọn bốn rủi ro lớn nhất:
- Chất lượng dữ liệu CRM: data cleansing trước khi load; AI gợi ý các bản ghi duplicate, nhưng con người quyết định.
- Ngày tắt hệ thống cũ đến sớm hơn: xác nhận ngay tuần một, và contingency dành cho CRM.
- User không chịu dùng Salesforce: giữ màn hình gần giống hệ thống cũ, đào tạo trước cut-over.
- Mã khách hàng thay đổi khi chuyển: mapping mã cũ sang mã mới ở tuần hai.

(Có thể bỏ) Ngoài ra, để tránh tạo thêm một hệ thống rời rạc, Salesforce được thiết kế sẵn cho nhiều nước. Còn personal data thì được lưu trong EU, có Data Processing Agreement (DPA), và dữ liệu cũ được archive chứ không chép hết sang."

[Chuyển slide.]

## Slide 14. Đề nghị và kết thúc (14:10–15:00)

"Để bắt đầu, chúng em cần Company A đưa ra ba quyết định:

**Một**, xác nhận license Salesforce nằm ngoài ngân sách dự án.
**Hai**, xác nhận nước làm CRM migration và ngày tắt hệ thống cũ.
**Ba**, phê duyệt hai track và hai decision gate ở tuần tám.

[Dừng một nhịp.] Tóm lại: **bảo vệ hoạt động kinh doanh trước, và chứng minh khoản tiết kiệm với chi phí thấp nhất.**

Chúng em xin cảm ơn, và rất mong nhận được câu hỏi từ các anh chị."

[Đứng yên, nhìn giám khảo. Chuyển sang phần hỏi đáp: xem `QA.md`.]

---

## Những câu không được nói

- Không nói 4,2% hay 3,16% là dự báo cho Company A.
- Không nói Nordic Flow kết nối với Salesforce hay ERP.
- Không nói chi phí là quote. Luôn nói "ước tính".
- Không nói giảm thời gian làm việc của planner hay cải thiện on-time delivery (chưa đo).
- Audit trail: nói "phát hiện được nếu bị sửa", không nói "không thể sửa".

## Khi có sự cố

| Sự cố | Xử lý |
|---|---|
| Demo lỗi hoặc treo quá 15 giây | Nhật Anh mở backup video; Kiệt nói tiếp, không xin lỗi dài dòng: "Chúng em chuyển sang bản ghi sẵn." |
| Bị chậm hơn lịch 30 giây | Bỏ các đoạn "(Có thể bỏ)" ở slide 9 và 13 |
| Bị chậm hơn 1 phút | Slide 6 chỉ đọc bốn câu in đậm; slide 12 chỉ nói tuần 1 và tuần 8 |
| Quên lời | Nói câu in đậm của slide đó, rồi chuyển slide |
