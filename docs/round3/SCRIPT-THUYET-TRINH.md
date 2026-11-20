# Script thuyết trình Round 3 (15 phút, tiếng Việt)

**Người nói chính: Kiệt.** Bách điều khiển máy demo ở slide 9. Nhật Anh chuyển slide và mở video dự phòng nếu demo lỗi. Cả ba người cùng trả lời câu hỏi theo phân công trong `QA.md`.

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
| 3 | Giả định | 2:50 |
| 4 | Ba hướng | 3:40 |
| 5 | Đề xuất hai luồng | 5:00 |
| 6 | Giữ, đổi, hoãn | 5:50 |
| 7 | Ngân sách | 7:10 |
| 8 | Cổng go/no-go | 8:00 |
| 9 | Demo | 10:20 |
| 10 | Kết quả bốn tuần | 11:00 |
| 11 | User Journey và System Context | 11:50 |
| 12 | Lộ trình 8 tuần | 13:00 |
| 13 | Rủi ro | 14:10 |
| 14 | Đề nghị và kết thúc | 15:00 |

---

## Slide 1. Mở đầu (0:00–0:40)

[Đứng giữa, nhìn giám khảo, chờ một nhịp rồi mới nói.]

"Chúng em chào các anh chị giám khảo. Chúng em là nhóm NEW AURA: em là Kiệt, đây là Bách và Nhật Anh.

Ở vòng trước, chúng em đã giới thiệu Nordic Flow: một công cụ giúp người lập kế hoạch của Company A phân bổ hàng từ nhà cung cấp, qua kho, đến vùng giao với tổng chi phí thấp nhất. Mọi phương án đều được kiểm tra độc lập và được người lập kế hoạch duyệt trước khi dùng.

Từ đó đến nay, Company A đã thay đổi hai điều. **Hôm nay chúng em trình bày đề xuất đã thay đổi thế nào, và vì sao.**"

[Chuyển slide.]

## Slide 2. Hai thay đổi (0:40–1:40)

"Thay đổi thứ nhất là ngân sách. Ở Round 1, chúng em ước tính năm đầu khoảng 0,3 triệu euro. Cắt 30% thì còn khoảng **0,21 triệu euro**.

Thay đổi thứ hai là một yêu cầu bắt buộc: một nước đang dùng Microsoft Dynamics 365 để quản lý khách hàng, và hệ thống này sắp ngừng hoạt động. Nước đó phải chuyển sang Salesforce. Ban điều hành quyết định việc chuyển đổi này là **một phần của dự án hiện tại**: cùng ngân sách, cùng thời gian.

Việc chuyển CRM không liên quan gì đến bài toán phân bổ hàng, nhưng có hạn chót cứng và dùng chung tiền với chúng em. Trong khi đó, mục tiêu ban đầu là giảm chi phí logistics vẫn còn nguyên.

**Vì vậy câu hỏi của chúng em là: giữ gì, đổi gì, và hoãn gì?**"

[Chuyển slide.]

## Slide 3. Giả định (1:40–2:50)

"Đề bài để trống một số điểm, nên chúng em nói rõ mình đã giả định gì.

[Chỉ vào dòng 1.] Một: nước chuyển CRM là Thụy Điển, trùng với nước chúng em chọn chạy thử Nordic Flow, nên tuần khảo sát đầu tiên dùng chung được. Nếu là Đan Mạch hay Na Uy thì kế hoạch vẫn đúng; hai luồng chỉ chạy tách nhau.

Hai: Dynamics đang chạy là bản cài tại chỗ đã hết hỗ trợ. Bản Dynamics CRM 2016 đã hết hỗ trợ từ ngày 13 tháng 1 năm 2026, nên việc thay thế còn là vấn đề bảo mật.

[Chỉ vào dòng 3, nói chậm.] Ba, và đây là giả định quan trọng nhất: **tiền bản quyền Salesforce nằm ngoài ngân sách dự án.** Theo giá niêm yết, một trăm người dùng tốn khoảng 210 nghìn đô mỗi năm, nhiều hơn cả ngân sách dự án. Nếu khoản này phải lấy từ ngân sách dự án thì không phương án nào khả thi. Chúng em coi đây là chi phí vận hành thay cho CRM cũ, và sẽ đề nghị Company A xác nhận ở cuối bài.

Bốn: chuyển nguyên trạng, lịch sử cũ hơn 24 tháng thì lưu trữ. Năm: đội triển khai kết hợp, trưởng nhóm ở Bắc Âu và đội thực hiện ở Việt Nam."

[Chuyển slide.]

## Slide 4. Ba hướng (2:50–3:40)

"Với những giả định đó, chúng em so sánh ba hướng.

[Chỉ cột A.] Hướng A, làm tất cả như kế hoạch cũ và thêm CRM: vượt ngân sách.

[Chỉ cột B.] Hướng B, chỉ làm CRM và bỏ Nordic Flow: vừa ngân sách, nhưng bỏ mất lý do dự án này được bắt đầu, và đề bài cũng yêu cầu vẫn phải đạt mục tiêu ban đầu.

[Chỉ cột C.] Hướng C, hai luồng trong một chương trình: **đây là hướng duy nhất vừa ngân sách mà vẫn giữ được cả hai mục tiêu.** Chúng em chọn hướng C."

[Chuyển slide.]

## Slide 5. Đề xuất hai luồng (3:40–5:00)

"[Chỉ vào thẻ Track 1.] Luồng một là chuyển CRM nguyên trạng: khách hàng, người liên hệ, cơ hội bán hàng đang mở và hoạt động gần đây. Lịch sử cũ được lưu ở chế độ chỉ đọc. Không thiết kế lại quy trình bán hàng trong giai đoạn này.

[Chỉ vào thẻ Track 2.] Luồng hai giữ Nordic Flow, nhưng đổi cách chạy thử. Thay vì chạy thật trong vận hành với nhiều tích hợp, chúng em **chạy lại bốn đến tám tuần đã qua**: cùng đơn hàng, cùng giá, rồi so phương án tối ưu với kế hoạch đã thực sự được chạy. Cách này rẻ và không ảnh hưởng gì đến vận hành.

[Chỉ vào thẻ Link.] Hai luồng liên quan với nhau qua dữ liệu: thông tin khách hàng và vùng giao hôm nay nằm trong Dynamics, sau này sẽ nằm trong Salesforce. Nordic Flow đọc dữ liệu qua file, nên việc chuyển CRM chỉ đổi nơi xuất file, không đổi bộ tối ưu. Tuần thứ hai chúng em kiểm tra việc ghép mã cũ với mã mới.

[Chỉ vào nhãn Conflict rule, nói chậm.] Và một quy tắc: **khi hai luồng tranh người hoặc tranh tiền, CRM thắng**, vì CRM có hạn chót cứng."

[Chuyển slide.]

## Slide 6. Giữ, đổi, hoãn (5:00–5:50)

"Cụ thể, trong MVP:

**Giữ** bộ tối ưu, bộ kiểm tra độc lập, bước người lập kế hoạch duyệt, nhật ký audit và phần giải thích bằng AI, phần này không bắt buộc dùng. Những phần này đã xây xong nên gần như không tốn thêm.

**Đổi** từ chạy thử thật sang chạy lại lịch sử, chỉ dùng file CSV.

**Hoãn** Đan Mạch và Na Uy, phần học từ các chỉnh sửa của người lập kế hoạch, theo dõi giao hàng, và cải tiến quy trình trên Salesforce.

**Đóng băng** chuyển hàng giữa các kho và tuyến giao thẳng.

**Những gì bị hoãn sẽ quay lại khi khoản tiết kiệm đã được chứng minh và đủ để trả chi phí.**"

[Chuyển slide.]

## Slide 7. Ngân sách (5:50–7:10)

"[Chỉ vào bảng.] Đây là ước tính, không phải báo giá. Chúng em tính bằng số ngày công nhân với đơn giá bình quân khoảng 60 euro một giờ.

Chuyển CRM khoảng 165 ngày công, 90 đến 100 nghìn euro. Nordic Flow khoảng 55 ngày công, 35 đến 40 nghìn. Quản lý chương trình 20 nghìn. Dự phòng 30 đến 40 nghìn, và dùng cho CRM trước. **Tổng khoảng 175 đến 200 nghìn euro, nằm trong 210 nghìn.**

[Chỉ vào thẻ màu xanh, nói chậm.] Điều quan trọng ở đây: 40 nghìn euro cho Nordic Flow không mua cả giải pháp. Số tiền đó mua **một quyết định dựa trên dữ liệu thật**. Chỉ cần chênh lệch dưới 1% chi phí logistics liên quan là đã bù được khoản này.

Nếu chênh lệch đạt ngưỡng 2% mà chúng em đặt ra, Company A tiết kiệm khoảng 100 đến 200 nghìn euro mỗi năm, và năm nào cũng vậy, đủ để trả cho bước chạy thử thật. Còn nếu không đạt, **Company A dừng lại sau 40 nghìn euro, thay vì 0,3 triệu.**"

[Chuyển slide.]

## Slide 8. Cổng go/no-go (7:10–8:00)

"Vì vậy chúng em đặt một cổng quyết định ở tuần thứ tám.

**Chỉ chuyển sang chạy thử thật nếu phương án đã kiểm tra rẻ hơn kế hoạch thực tế ít nhất 2%**, tính trên các tuần chạy lại, và không vi phạm ràng buộc nào. Mục tiêu 5% ở vòng trước vẫn là kỳ vọng, nhưng không còn là điều kiện.

Chúng em cũng nói rõ giới hạn: chạy lại lịch sử **không đo được** thời gian làm việc của người lập kế hoạch hay tỷ lệ giao hàng đúng hạn. Hai chỉ số đó sẽ được đo trong lần chạy thử thật.

Bây giờ Bách sẽ cho các anh chị xem MVP đã thay đổi thế nào."

[Chuyển slide. Bách mở ứng dụng.]

## Slide 9. Demo chạy lại lịch sử (8:00–10:20)

[Bách thao tác, Kiệt nói. Nếu ứng dụng lỗi quá 15 giây, Nhật Anh mở `deliverables/round3/demo/replay-demo.mp4`, Kiệt nói tiếp theo đúng lời dưới đây.]

"Ở vòng trước, khoản tiết kiệm của chúng em được tính **so với một quy tắc do chúng em tự đặt ra**. Đó là điểm yếu nhất của bài. Giờ chúng em sửa đúng điểm đó.

[Bách: trang Data, bấm History replay.] Người lập kế hoạch tải lên dữ liệu của một tuần đã qua: tám file như cũ, cộng thêm một file mới là `actual_plan.csv`, tức kế hoạch đã thực sự chạy tuần đó.

[Bách chỉ vào dòng Actual plan.] Hệ thống kiểm tra từng file. Kế hoạch thực tế có 606 pallet trên 87 tuyến, khớp với đơn hàng của tuần.

[Bách: bấm Calculate plan.] Bây giờ tính phương án, với cùng đơn hàng, cùng giá và cùng sức chứa.

[Bách chỉ lần lượt từng ô.] Tuần đó thực tế đã tốn 32.698 đơn vị chi phí. Phương án đã kiểm tra tốn 31.316. **Chênh 1.382, tức 4,2%.**

[Dừng nửa giây.] Đây là dữ liệu giả lập. Con số này chứng minh cách đo hoạt động, **không phải dự báo** cho Company A.

[Bách chỉ vào ô Plan checks.] Cả hai phương án đều đi qua bộ kiểm tra độc lập. Nếu kế hoạch thực tế không khớp đơn hàng hay vượt giới hạn, hệ thống **không hiện con số tiết kiệm nào**, vì chúng em không so với một mốc không kiểm chứng được.

Và không có gì được gửi vào hệ thống nào của Company A. Đây chỉ là bằng chứng để ra quyết định.

(Có thể bỏ) [Bách: Review & approve, Generate explanation.] Người lập kế hoạch vẫn duyệt và có bản giải thích; bản giải thích ghi rõ đang so với kế hoạch thực tế từ lịch sử."

[Chuyển slide.]

## Slide 10. Kết quả bốn tuần (10:20–11:00)

"Chúng em chạy cùng cách đó cho bốn tuần dữ liệu giả lập. **Phương án đã kiểm tra rẻ hơn từ 2,2 đến 4,2%, tổng cộng 3,16%.**

Một lần nữa, đây không phải dự báo. Nó cho thấy cách đo hoạt động từ đầu đến cuối và lặp lại được. Con số thật sẽ đến từ các tuần dữ liệu thật của Company A trong giai đoạn khảo sát."

[Chuyển slide.]

## Slide 11. User Journey và System Context (11:00–11:50)

"[Chỉ hình bên trái.] Hành trình làm việc hằng ngày của người lập kế hoạch không đổi. Chúng em thêm một hành trình mới, diễn ra **trước** khi chạy thử thật: xuất dữ liệu các tuần cũ, tải lên, so với kế hoạch đã chạy, rồi ra quyết định có đi tiếp hay không.

[Chỉ hình bên phải.] Trong sơ đồ hệ thống, ranh giới của Nordic Flow giữ nguyên, chỉ thêm một file đầu vào. CRM xuất hiện như một hệ thống của Company A mà Nordic Flow **không kết nối trực tiếp**. Sau khi chuyển, file khách hàng sẽ được xuất từ Salesforce thay vì từ Dynamics."

[Chuyển slide.]

## Slide 12. Lộ trình 8 tuần (11:50–13:00)

"Hai luồng chạy song song trong tám tuần.

[Chỉ dòng tuần 1–2.] Tuần một: luồng CRM kiểm kê dữ liệu, tích hợp, người dùng, và xác nhận ngày tắt hệ thống cũ; luồng Nordic Flow khảo sát dữ liệu Thụy Điển. Tuần hai: ghép trường dữ liệu CRM, còn Nordic Flow nạp file thật, ghép mã sản phẩm và mã khách hàng.

[Chỉ dòng 3–6.] Tuần ba đến sáu: CRM cấu hình, làm sạch dữ liệu, nạp thử hai lần, kiểm thử với người dùng; Nordic Flow chạy lại các tuần cũ và xem kết quả cùng người lập kế hoạch.

[Chỉ dòng 8.] Tuần bảy tập chuyển đổi và đào tạo. Tuần tám: **CRM chính thức hoạt động, hệ thống cũ chuyển sang chỉ đọc; Nordic Flow có quyết định go hoặc no-go.**

Nếu CRM lớn hơn dự kiến, các tích hợp phụ chuyển sang tuần chín đến mười hai và dùng tiền dự phòng. **Nordic Flow chậm lại, CRM thì không.**"

[Chuyển slide.]

## Slide 13. Rủi ro và đánh đổi (13:00–14:10)

"Chúng em nói thẳng về những gì phải đánh đổi.

**Đánh đổi lớn nhất là giá trị của Nordic Flow đến muộn hơn.** Chúng em chấp nhận điều đó, vì giữ được quan hệ khách hàng là ưu tiên số một. Bù lại, chạy lại lịch sử cho một con số thật từ sớm và với chi phí thấp.

Về rủi ro, chúng em chọn bốn rủi ro lớn nhất:
- Chất lượng dữ liệu CRM: làm sạch trước khi nạp; AI gợi ý các bản ghi trùng, nhưng con người quyết định.
- Ngày tắt hệ thống cũ đến sớm hơn: xác nhận ngay tuần một, và dự phòng dành cho CRM.
- Người dùng không chịu dùng Salesforce: giữ màn hình gần giống hệ thống cũ, đào tạo trước ngày chuyển.
- Mã khách hàng thay đổi khi chuyển: ghép mã cũ với mã mới ở tuần hai.

(Có thể bỏ) Ngoài ra, để tránh tạo thêm một hệ thống rời rạc, Salesforce được thiết kế sẵn cho nhiều nước. Còn dữ liệu cá nhân thì được lưu trong EU, có thỏa thuận xử lý dữ liệu, và dữ liệu cũ được lưu trữ chứ không chép hết sang."

[Chuyển slide.]

## Slide 14. Đề nghị và kết thúc (14:10–15:00)

"Để bắt đầu, chúng em cần Company A đưa ra ba quyết định:

**Một**, xác nhận tiền bản quyền Salesforce nằm ngoài ngân sách dự án.
**Hai**, xác nhận nước chuyển CRM và ngày tắt hệ thống cũ.
**Ba**, phê duyệt hai luồng và hai cổng quyết định ở tuần tám.

[Dừng một nhịp.] Tóm lại: **bảo vệ hoạt động kinh doanh trước, và chứng minh khoản tiết kiệm với chi phí thấp nhất.**

Chúng em xin cảm ơn, và rất mong nhận được câu hỏi từ các anh chị."

[Đứng yên, nhìn giám khảo. Chuyển sang phần hỏi đáp: xem `QA.md`.]

---

## Những câu không được nói

- Không nói 4,2% hay 3,16% là dự báo cho Company A.
- Không nói Nordic Flow kết nối với Salesforce hay ERP.
- Không nói chi phí là báo giá. Luôn nói "ước tính".
- Không nói giảm thời gian làm việc của người lập kế hoạch hay cải thiện giao hàng đúng hạn (chưa đo).
- Nhật ký audit: nói "phát hiện được nếu bị sửa", không nói "không thể sửa".

## Khi có sự cố

| Sự cố | Xử lý |
|---|---|
| Demo lỗi hoặc treo quá 15 giây | Nhật Anh mở video dự phòng; Kiệt nói tiếp, không xin lỗi dài dòng: "Chúng em chuyển sang bản ghi sẵn." |
| Bị chậm hơn lịch 30 giây | Bỏ các đoạn "(Có thể bỏ)" ở slide 9 và 13 |
| Bị chậm hơn 1 phút | Slide 6 chỉ đọc bốn câu in đậm; slide 12 chỉ nói tuần 1 và tuần 8 |
| Quên lời | Nói câu in đậm của slide đó, rồi chuyển slide |
