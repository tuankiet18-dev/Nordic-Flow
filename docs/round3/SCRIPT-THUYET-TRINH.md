# Script thuyết trình Round 3 (15 phút, tiếng Việt)

**Người nói chính: Kiệt.** Bách điều khiển máy demo ở slide 9. Nhật Anh chuyển slide và mở backup video nếu demo lỗi. Cả ba người cùng trả lời câu hỏi theo phân công trong `QA.md`.

Cách dùng file này:
- Chữ trong ngoặc kép là lời nói. Đọc to vài lần cho quen, sau đó **nói bằng lời của mình**. Không cầm giấy đọc.
- **[Trong ngoặc vuông]** là hành động: chuyển slide, chỉ vào màn hình, dừng lại.
- **Câu in đậm** là câu chốt của slide. Quên hết thì nói ít nhất câu này.
- Lời nói khoảng 1.250 từ, tức khoảng 9 phút nói chậm. Phần còn lại là thời gian thao tác demo, chuyển slide và dừng sau các con số. Bản này cố ý kết thúc ở **14:00** để còn một phút dự phòng.
- Cột thời gian là mốc **kết thúc** của mỗi slide. Tập với đồng hồ bấm giờ.

| Slide | Nội dung | Kết thúc lúc |
|---|---|---|
| 1 | Mở đầu | 0:30 |
| 2 | Hai thay đổi | 1:20 |
| 3 | Assumption | 2:30 |
| 4 | Ba option | 3:20 |
| 5 | Recommendation: hai track | 4:30 |
| 6 | Giữ, đổi, hoãn | 5:10 |
| 7 | Ngân sách | 6:20 |
| 8 | Cổng go/no-go | 7:00 |
| 9 | Demo | 9:20 |
| 10 | Kết quả bốn tuần, Pilot evidence | 10:00 |
| 11 | User Journey và System Context | 10:45 |
| 12 | Roadmap 8 tuần | 11:45 |
| 13 | Rủi ro và trade-off | 12:50 |
| 14 | Đề nghị và kết thúc | 13:30–14:00 |

---

## Slide 1. Mở đầu (0:00–0:30)

[Đứng giữa, nhìn giám khảo, chờ một nhịp rồi mới nói.]

"Chúng em chào các anh chị giám khảo. Chúng em là nhóm NEW AURA: em là Kiệt, đây là Bách và Nhật Anh.

Nordic Flow giúp planner của Company A phân bổ hàng qua các kho với tổng chi phí thấp nhất; mọi plan đều được kiểm tra độc lập và được planner duyệt. **Hôm nay chúng em trình bày proposal đã thay đổi thế nào sau hai yêu cầu mới, và vì sao.**"

[Chuyển slide.]

## Slide 2. Hai thay đổi (0:30–1:20)

"Thứ nhất, ngân sách bị cắt 30%: từ khoảng 0,3 triệu euro còn **khoảng 0,21 triệu**.

Thứ hai, một nước phải chuyển CRM từ Dynamics 365 sang Salesforce vì hệ thống cũ sắp ngừng. Executive board quyết định việc này là **một phần của dự án hiện tại**: cùng ngân sách, cùng thời gian.

CRM migration không liên quan đến bài toán phân bổ hàng, nhưng có hạn chót cứng và dùng chung tiền. Còn mục tiêu ban đầu, giảm chi phí logistics, vẫn giữ nguyên. **Vậy giữ gì, đổi gì, và hoãn gì?**"

[Chuyển slide.]

## Slide 3. Assumption (1:20–2:30)

"Đề bài để trống một số điểm, nên chúng em nói rõ assumption.

[Chỉ dòng 1 và 2.] Nước làm CRM migration là Thụy Điển, trùng nước pilot; nếu là nước khác thì hai track chỉ chạy tách nhau. Dynamics là bản On-Premises đã end of support, nên thay thế còn là vấn đề bảo mật.

[Chỉ dòng 3, nói chậm.] Assumption quan trọng nhất: **license Salesforce nằm ngoài ngân sách dự án.** Một trăm user theo giá niêm yết đã khoảng 210 nghìn đô mỗi năm, hơn cả dự án. Chúng em coi đây là operating cost thay cho CRM cũ, và sẽ đề nghị Company A xác nhận.

[Chỉ dòng 5.] Quan trọng thứ hai là **blended team**: trưởng nhóm ở Bắc Âu, delivery team ở Việt Nam. Nếu cả đội tính theo rate Tây Âu, riêng CRM đã khoảng 200 nghìn euro, tức hết ngân sách. Có blended team thì cả hai track mới vừa."

[Chuyển slide.]

## Slide 4. Ba option (2:30–3:20)

"[Chỉ cột A.] Option A, làm tất cả: vượt ngân sách.

[Chỉ cột B.] Option B, làm CRM trước, Nordic Flow để sau: vừa ngân sách, nhưng đến tuần tám vẫn chưa có bằng chứng nào về khoản tiết kiệm. Một dự án chưa có bằng chứng thường bị cắt đầu tiên ở lần cắt ngân sách sau.

[Chỉ cột C.] Option C, hai track song song. History replay chỉ tốn khoảng 40 nghìn euro và không lấy người của CRM. **Đến tuần tám có cả CRM mới lẫn một con số tiết kiệm thật.** Chúng em chọn option C."

[Chuyển slide.]

## Slide 5. Recommendation: hai track (3:20–4:30)

"[Chỉ thẻ Track 1.] Track một là like-for-like CRM migration: khách hàng, contact, cơ hội đang mở và hoạt động gần đây; lịch sử cũ để read-only.

[Chỉ thẻ Track 2.] Track hai giữ Nordic Flow nhưng đổi cách pilot: thay vì chạy live, chúng em **replay bốn đến tám tuần đã qua**, cùng đơn hàng, cùng giá, rồi so với actual plan. Rẻ, và không đụng vận hành.

[Chỉ thẻ Link.] Hai track nối với nhau qua dữ liệu: mã khách hàng và delivery zone sẽ chuyển từ Dynamics sang Salesforce. Nordic Flow đọc file, nên chỉ nguồn xuất file thay đổi; tuần hai chúng em mapping mã cũ sang mã mới.

[Chỉ nhãn Conflict rule, nói chậm.] **Khi hai track tranh người hoặc tiền, CRM thắng.**"

[Chuyển slide.]

## Slide 6. Giữ, đổi, hoãn (4:30–5:10)

"**Giữ** những gì đã xây: optimiser, independent verifier, bước duyệt, audit trail. **Đổi** live pilot thành history replay bằng file CSV. **Hoãn** Đan Mạch, Na Uy và các tính năng mở rộng. **Đóng băng** chuyển hàng giữa kho và tuyến giao thẳng.

**Những gì bị hoãn sẽ quay lại khi khoản tiết kiệm đã được chứng minh.**"

[Chuyển slide.]

## Slide 7. Ngân sách (5:10–6:20)

"[Chỉ bảng.] Đây là ước tính từ person-days nhân blended rate khoảng 60 euro một giờ. CRM khoảng 90 đến 100 nghìn, Nordic Flow 35 đến 40, quản lý 20, contingency 30 đến 40, dành cho CRM trước. **Tổng khoảng 175 đến 200 nghìn, nằm trong 210.**

[Chỉ thẻ màu xanh, nói chậm.] 40 nghìn euro cho Nordic Flow không mua cả giải pháp, mà mua **một quyết định dựa trên dữ liệu thật**. Chênh lệch dưới 1% chi phí logistics là đã bù được. Đạt ngưỡng 2% thì Company A tiết kiệm khoảng 100 đến 200 nghìn euro mỗi năm. Không đạt thì **dừng ở 40 nghìn, thay vì 0,3 triệu.**"

[Chuyển slide.]

## Slide 8. Cổng go/no-go (6:20–7:00)

"Vì vậy, ở tuần tám: **chỉ chuyển sang live pilot nếu verified plan rẻ hơn actual plan ít nhất 2%** trên các tuần replay, không vi phạm constraint nào. 5% vẫn là kỳ vọng, không phải điều kiện.

Replay không đo được thời gian của planner hay on-time delivery; hai chỉ số đó để cho live pilot. Bây giờ Bách sẽ cho các anh chị xem MVP."

[Chuyển slide. Bách mở ứng dụng.]

## Slide 9. Demo history replay (7:00–9:20)

[Bách thao tác, Kiệt nói. Nếu ứng dụng lỗi quá 15 giây, Nhật Anh mở `deliverables/round3/demo/replay-demo.mp4`, Kiệt nói tiếp đúng lời dưới đây.]

"Ở vòng trước, tiết kiệm được tính **so với một quy tắc chúng em tự đặt ra**. Đó là điểm yếu nhất, và giờ chúng em sửa đúng điểm đó.

[Bách: trang Data, bấm History replay.] Planner tải lên một tuần đã qua: tám file như cũ, cộng file mới `actual_plan.csv`, tức kế hoạch đã thực sự chạy. [Bách chỉ dòng Actual plan.] Hệ thống kiểm tra từng file: 606 pallet trên 87 tuyến, khớp đơn hàng.

[Bách: bấm Calculate plan, chỉ lần lượt từng ô.] Tuần đó thực tế tốn 32.698. Verified plan tốn 31.316. **Chênh 1.382, tức 4,2%.** [Dừng nửa giây.] Đây là synthetic data, **không phải dự báo**.

[Bách chỉ ô Plan checks.] Cả hai plan đi qua independent verifier. Nếu actual plan không khớp đơn hàng, hệ thống **không hiện tiết kiệm**. Và không có gì được gửi vào hệ thống nào của Company A."

[Chuyển slide.]

## Slide 10. Kết quả bốn tuần, Pilot evidence (9:20–10:00)

[Nếu demo đang chạy tốt: Bách mở menu Pilot evidence, bấm Use the 4 sample weeks, màn hình hiện GO. Nếu không, dùng slide.]

"Một tuần chưa đủ để quyết định. Trang **Pilot evidence** chạy lại nhiều tuần một lúc: bốn tuần synthetic cho **2,2 đến 4,2%, tổng 3,16%**, trên ngưỡng 2%, nên kết quả là **GO**. Trang này cũng kiểm tra code map từ Dynamics sang Salesforce. Hệ thống chỉ cộng số; người quyết định vẫn là Company A, trên dữ liệu thật của họ."

[Chuyển slide.]

## Slide 11. User Journey và System Context (10:00–10:45)

"[Chỉ hình bên trái.] Journey hằng ngày của planner không đổi. Chúng em thêm một journey **trước** live pilot: xuất các tuần cũ, tải lên, so với kế hoạch đã chạy, rồi quyết định trên trang Pilot evidence.

[Chỉ hình bên phải.] Boundary của Nordic Flow giữ nguyên. Chỉ thêm hai file đầu vào tùy chọn: `actual_plan.csv` và CRM code map. CRM là hệ thống của Company A mà Nordic Flow **không kết nối trực tiếp**."

[Chuyển slide.]

## Slide 12. Roadmap 8 tuần (10:45–11:45)

"Hai track chạy song song tám tuần.

[Chỉ dòng tuần 1–2.] Tuần một và hai: CRM kiểm kê dữ liệu, xác nhận ngày tắt hệ thống cũ, field mapping; Nordic Flow nạp file thật và mapping mã. [Chỉ dòng 3–7.] Tuần ba đến bảy: CRM configure, cleansing, trial load, đào tạo; Nordic Flow replay các tuần cũ cùng planner.

[Chỉ dòng 8.] Tuần tám: **CRM go live, hệ thống cũ read-only; Nordic Flow có quyết định go hoặc no-go.** Nếu CRM lớn hơn dự kiến, integration phụ dời sang tuần chín đến mười hai: **Nordic Flow chậm lại, CRM thì không.**"

[Chuyển slide.]

## Slide 13. Rủi ro và trade-off (11:45–12:50)

"**Trade-off lớn nhất là giá trị của Nordic Flow đến muộn hơn.** Chúng em chấp nhận, vì giữ quan hệ khách hàng là ưu tiên số một; bù lại, replay cho con số thật từ sớm và rẻ.

[Chỉ bảng.] Ba rủi ro chính: chất lượng dữ liệu CRM, nên data cleansing trước khi load; ngày tắt hệ thống cũ đến sớm, nên xác nhận ngay tuần một và contingency dành cho CRM; user không quen Salesforce, nên giữ màn hình như cũ và đào tạo trước cut-over."

[Chuyển slide.]

## Slide 14. Đề nghị và kết thúc (12:50–13:30)

"Chúng em đề nghị Company A ba quyết định: **một**, xác nhận license Salesforce nằm ngoài ngân sách dự án; **hai**, xác nhận nước làm CRM migration và ngày tắt hệ thống cũ; **ba**, phê duyệt hai track và hai decision gate ở tuần tám.

[Dừng một nhịp.] Tóm lại: **bảo vệ hoạt động kinh doanh trước, chứng minh khoản tiết kiệm với chi phí thấp nhất.** Chúng em xin cảm ơn và mong nhận câu hỏi từ các anh chị."

[Đứng yên, nhìn giám khảo. Chuyển sang hỏi đáp: xem `QA.md`.]

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
| Chậm hơn lịch 30 giây | Slide 10 dùng slide, không mở app; slide 12 chỉ nói tuần 8 |
| Chậm hơn 1 phút | Slide 3 chỉ nói assumption license và blended team; slide 13 chỉ nói trade-off lớn nhất |
| Quên lời | Nói câu in đậm của slide đó, rồi chuyển slide |
| Giám khảo hỏi chen giữa bài | Trả lời một câu ngắn, nói "phần này chúng em sẽ nói rõ ở slide sau" nếu có, rồi tiếp tục |
