# Round 3: câu hỏi đáp (10 phút)

Giám khảo có thể hỏi bằng tiếng Việt hoặc tiếng Anh; nhóm trả lời bằng tiếng Việt. Câu trả lời dưới đây viết theo văn nói, đọc lên khoảng 20–30 giây. Không học thuộc từng chữ: nhớ ý, nói bằng lời của mình, nói xong thì dừng.

Ai phụ trách phần nào thì trả lời câu thuộc phần đó; người còn lại chỉ bổ sung khi cần.

Nguyên tắc:
- Không biết thì nói thẳng: "Đó là assumption, nhóm sẽ xác nhận ở tuần 1", rồi nói cách kiểm chứng. Không bịa số.
- Mọi chi phí là **ước tính**. Mọi kết quả từ dữ liệu mẫu là **synthetic**.
- Không nói Nordic Flow nối với Salesforce hay ERP; không nói "chống sửa tuyệt đối" (chỉ nói "phát hiện được nếu bị sửa").

---

## A. Chiến lược và ưu tiên (Kiệt)

**1. Sao không làm CRM trước cho chắc, xong rồi mới làm Nordic Flow?**
"Đề bài yêu cầu giải quyết cả mục tiêu ban đầu lẫn CRM trong cùng ngân sách và thời gian. Nếu làm tuần tự, đến tuần 8 Company A chưa có bằng chứng nào về khoản tiết kiệm, và một dự án chưa có bằng chứng thường bị cắt đầu tiên ở lần cắt ngân sách tiếp theo. History replay chỉ tốn khoảng 40 nghìn euro, không đụng vận hành và không lấy người của CRM, nên chạy song song gần như không thêm rủi ro cho CRM."

**1b. Vậy sao không bỏ hẳn Nordic Flow?**
"Vì mục tiêu gốc của dự án là giảm tổng chi phí logistics, và đề yêu cầu vẫn phải đạt mục tiêu đó. Bỏ đi thì chỉ tiết kiệm được khoảng 40 nghìn euro, mà bài toán chi phí logistics vẫn nằm nguyên."

**2. Vì sao CRM được ưu tiên trước?**
"Vì CRM có hạn chót cứng: hệ thống cũ sắp ngừng, và chạy tiếp một hệ thống end of support là rủi ro bảo mật. Mất dữ liệu khách hàng hay gián đoạn bán hàng thiệt hại hơn nhiều so với việc khoản tiết kiệm logistics đến chậm vài tuần."

**3. CRM migration là việc của nhóm hay của nước đó tự làm? Nó ảnh hưởng gì tới Nordic Flow?**
"Đề ghi rõ migration là một phần của dự án hiện tại và nằm trong ngân sách đã cắt, nên nhóm lập kế hoạch và chia ngân sách cho nó thành track thứ nhất; phần thực hiện do delivery team có kinh nghiệm làm. Với Nordic Flow, ảnh hưởng nằm ở dữ liệu: thông tin khách hàng và delivery zone hôm nay ở Dynamics, sau khi chuyển sẽ ở Salesforce. Nordic Flow đọc file, nên chỉ nguồn xuất file thay đổi, optimiser giữ nguyên. Tuần 2 nhóm mapping mã cũ sang mã mới để các tuần trước và sau khi chuyển vẫn so sánh được."

**4. Sao không chuyển Dynamics 365 lên cloud cho rẻ, mà phải sang Salesforce?**
"Đó là quyết định của executive board trong đề bài, và nhóm tôn trọng quyết định đó. Điều nhóm lưu ý là license Salesforce đắt hơn mỗi user, nên khoản này cần có người chịu trách nhiệm ngân sách rõ ràng."

**5. Thêm một hệ thống mới thì Company A càng phân mảnh, đúng vấn đề ban đầu của họ?**
"Đúng là có rủi ro đó. Vì vậy nhóm thiết kế Salesforce sẵn cho nhiều nước ngay từ đầu. Việc này gần như không tốn thêm bây giờ, và sau này Đan Mạch, Na Uy có thể tham gia mà không phải dựng lại."

**6. Nếu nước làm CRM migration không phải Thụy Điển thì sao?**
"Thì hai track chạy hoàn toàn tách nhau, chỉ dùng chung ban quản lý. Kế hoạch, ngân sách và thời gian vẫn giữ nguyên; nhóm chỉ mất lợi thế dùng chung tuần discovery đầu tiên."

## B. Ngân sách và thời gian (Kiệt)

**7. Các con số chi phí lấy từ đâu?**
"Nhóm tính số person-days cho từng việc, nhân với blended rate khoảng 60 euro một giờ, dựa trên mức giá công khai ở Tây Âu và Việt Nam. Đây là ước tính, không phải quote; vì vậy nhóm luôn đưa ra khoảng, không đưa một con số."

**8. Ai trả license Salesforce?**
"Assumption của nhóm là doanh nghiệp trả, như operating cost (OPEX) thay cho CRM cũ. Theo giá niêm yết, 100 user mỗi năm đã tốn hơn cả ngân sách dự án, nên điểm này bắt buộc phải xác nhận. Đây là một trong ba quyết định nhóm đề nghị Company A đưa ra."

**9. Tám tuần cho một CRM migration có thực tế không?**
"Chỉ thực tế khi chuyển like-for-like: ít tùy biến, tối đa hai integration, không chuyển toàn bộ lịch sử. Nếu khối lượng lớn hơn, phần dữ liệu lõi vẫn lên ở tuần 8, phần integration phụ làm ở tuần 9 đến 12 bằng contingency."

**10. Vì sao dùng blended team với Việt Nam?**
"Nếu làm toàn bộ với rate Tây Âu thì riêng track CRM đã hết ngân sách. Trưởng nhóm ở Bắc Âu giữ liên lạc với doanh nghiệp và đào tạo user; đội ở Việt Nam làm cấu hình, chuyển dữ liệu và test."

**11. Nếu ngân sách bị cắt thêm lần nữa?**
"Cắt contingency trước, sau đó thu nhỏ scope Nordic Flow, ví dụ replay ít tuần hơn. Phần lõi của CRM được bảo vệ."

**12. 40 nghìn euro thì Nordic Flow lấy đâu ra tiết kiệm mà nói break-even dưới 1%?**
"40 nghìn euro không phải giá của cả giải pháp, mà là giá để biết chắc giải pháp có đáng làm không. Chỉ cần chênh lệch dưới 1% chi phí logistics liên quan là đã bù được khoản này. Nếu đạt ngưỡng 2%, Company A tiết kiệm khoảng 100 đến 200 nghìn euro mỗi năm, đủ để trả cho bước live pilot. Còn nếu không đạt, họ dừng lại sau 40 nghìn euro thay vì 0,3 triệu euro như kế hoạch Round 1."
*Cách tính (nếu bị hỏi):* chi phí logistics liên quan theo assumption là €5–10 triệu/năm (từ Round 1). €40k ÷ €10M = 0,4%; €40k ÷ €5M = 0,8%. 2% × €5–10M = €100–200k/năm. Tất cả là ước tính.

## C. Nordic Flow và history replay (Bách)

**13. History replay chính xác là gì?**
"Nhóm lấy các tuần đã qua, kèm kế hoạch đã thực sự chạy trong tuần đó, rồi tính xem một phương án chi phí thấp nhất, đã được kiểm tra, sẽ tốn bao nhiêu với cùng đơn hàng và cùng giá. Không thay đổi gì trong vận hành. Kết quả là một khoảng chênh chi phí thật, có trước khi ai phải bỏ tiền cho live pilot."

**14. Con số 3,16% là synthetic, vậy tin được không?**
"Không nên coi nó là dự báo, và nhóm cũng không coi như vậy. Con số đó chỉ chứng minh cách đo hoạt động từ đầu đến cuối. Con số thật sẽ đến từ các tuần dữ liệu của Company A trong giai đoạn discovery."

**15. Nếu actual plan trong dữ liệu bị sai hoặc thiếu thì sao?**
"Nó đi qua cùng independent verifier như mọi plan khác. Nếu nó không đáp ứng đủ đơn hàng trong giới hạn hàng, capacity và tuyến, hệ thống không hiện con số tiết kiệm. Nhóm không bao giờ so với một mốc không kiểm chứng được."

**16. History replay biết trước cả tuần đơn hàng, còn planner lúc đó thì không. So vậy có thiên vị không?**
"Có, history replay hơi lạc quan, vì planner lúc đó có ít thông tin hơn. Đó chính là lý do ngưỡng go/no-go đặt ở 2%, cao gấp vài lần mức break-even, và lý do vẫn cần live pilot sau khi có quyết định go để đo khoảng chênh thật."

**17. Vì sao ngưỡng là 2% mà không phải 5%?**
"Bước history replay chỉ tốn khoảng 40 nghìn euro, nên chênh dưới 1% đã bù được. 2% chừa safety margin và đo được trong 8 tuần. 5% vẫn là kỳ vọng của nhóm, không phải điều kiện."

**18. History replay không đo được gì?**
"Thời gian làm việc của planner và tỷ lệ on-time delivery. Hai thứ đó cần live pilot, sau khi có quyết định go."

**19. Tính năng này làm bao lâu, có được test không?**
"Tính năng dùng lại toàn bộ optimiser và verifier sẵn có; phần mới chỉ là file actual plan, các bước kiểm tra file và phần so sánh. Có 15 bài test tự động cho replay và 12 bài cho trang Pilot evidence; toàn bộ 302 bài test cùng 8 kịch bản chạy trên trình duyệt đều đạt."

**19b. Ai quyết định go/no-go, và quyết định đó nằm ở đâu trong MVP?**
"Trang Pilot evidence chạy lại nhiều tuần một lúc và cộng lại: nếu verified plan rẻ hơn actual plan ít nhất 2% trên ít nhất 4 tuần so sánh được thì hệ thống ghi GO, dưới 2% là NO-GO, chưa đủ 4 tuần thì chưa quyết định. Tuần nào actual plan không kiểm chứng được thì bị loại ra và được ghi rõ, không bao giờ được tính vào tiết kiệm. Hệ thống chỉ cộng số; người quyết định vẫn là Company A. Kết quả được ghi vào audit trail và tải ra được thành báo cáo."

**19c. Trang đó có gì liên quan đến CRM migration?**
"Có phần kiểm tra code map từ Dynamics sang Salesforce. Mã delivery zone trong file hằng tuần đến từ CRM, nên mỗi mã đang dùng phải có đúng một mã mới. Hệ thống báo mã chưa map, mã bị map hai nơi và các dòng thiếu. Đây là đúng việc mapping ở tuần 2 trong roadmap, và Nordic Flow vẫn không kết nối trực tiếp với Salesforce."

**20. Nordic Flow có kết nối với Salesforce không?**
"Không. Nordic Flow nhận file vào và trả file ra. Dùng chung dữ liệu khách hàng và delivery zone là future option, chỉ cân nhắc sau pilot."

## D. AI và dữ liệu (Bách hoặc Nhật Anh)

**21. AI nằm ở đâu trong kế hoạch mới?**
"Ở hai chỗ, và đều có người quyết định. Một là giải thích plan bằng lời dễ hiểu, chỉ là bản nháp cho tới khi planner duyệt. Hai là gợi ý mapping: mã sản phẩm cho Nordic Flow, và field mapping hoặc bản ghi duplicate trong CRM migration."

**22. Xử lý personal data (GDPR) trong CRM migration thế nào?**
"Lưu dữ liệu trong EU, ký Data Processing Agreement (DPA) với nhà cung cấp, và archive dữ liệu cũ thay vì chép hết sang. Lịch sử đồng ý của khách hàng đi kèm bản ghi khách hàng. Quyết định pháp lý cuối cùng thuộc bộ phận pháp chế của Company A."

**23. Rủi ro lớn nhất của cả kế hoạch là gì?**
"Chất lượng dữ liệu CRM và việc user có chịu dùng hệ thống mới hay không. Vì vậy nhóm làm data cleansing trước khi load, giữ màn hình gần giống hệ thống cũ, và đào tạo user trước cut-over."

## E. Câu hỏi khó

**24. Nếu làm lại từ đầu, nhóm sẽ làm khác điều gì?**
"Xin actual plan của các tuần cũ sớm hơn. So với một quy tắc do nhóm tự đặt là điểm yếu nhất của nhóm ở vòng trước; history replay sửa đúng điểm đó."

**25. Nhóm chỉ có ba sinh viên, làm nổi dự án này không?**
"Nhóm đề xuất kế hoạch và MVP, không tự mình làm toàn bộ dự án. Các estimate dựa trên assumption là có một delivery team giàu kinh nghiệm; vì vậy nhóm trình bày rõ số person-days."

**26. Nhóm tiếc nhất điều gì đã phải bỏ?**
"Đan Mạch và Na Uy trong giai đoạn này. Nhưng hai nước đó sẽ quay lại ngay khi khoản tiết kiệm được chứng minh và đủ để trả chi phí."
