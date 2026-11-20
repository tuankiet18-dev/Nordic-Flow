# Round 3: câu hỏi đáp (10 phút)

Giám khảo có thể hỏi bằng tiếng Việt hoặc tiếng Anh; nhóm trả lời bằng tiếng Việt. Câu trả lời dưới đây viết theo văn nói, đọc lên khoảng 20–30 giây. Không học thuộc từng chữ: nhớ ý, nói bằng lời của mình, nói xong thì dừng.

Ai phụ trách phần nào thì trả lời câu thuộc phần đó; người còn lại chỉ bổ sung khi cần.

Nguyên tắc:
- Không biết thì nói thẳng: "Đó là giả định, nhóm sẽ xác nhận ở tuần 1", rồi nói cách kiểm chứng. Không bịa số.
- Mọi chi phí là **ước tính**. Mọi kết quả từ dữ liệu mẫu là **giả lập**.
- Không nói Nordic Flow nối với Salesforce hay ERP; không nói "chống sửa tuyệt đối" (chỉ nói "phát hiện được nếu bị sửa").

---

## A. Chiến lược và ưu tiên (Kiệt)

**1. Sao không bỏ Nordic Flow, chỉ làm CRM cho chắc?**
"Đề bài yêu cầu vẫn phải đạt mục tiêu kinh doanh ban đầu, không chỉ làm CRM. Luồng Nordic Flow chỉ tốn khoảng 40 nghìn euro và sau 8 tuần cho ra một con số tiết kiệm đo trên dữ liệu thật. Bỏ nó đi thì tiết kiệm được rất ít tiền, mà bài toán chi phí logistics vẫn nằm nguyên đó."

**2. Vì sao CRM được ưu tiên trước?**
"Vì CRM có hạn chót cứng: hệ thống cũ sắp ngừng, và chạy tiếp một hệ thống hết hỗ trợ là rủi ro bảo mật. Mất dữ liệu khách hàng hay gián đoạn bán hàng thiệt hại hơn nhiều so với việc khoản tiết kiệm logistics đến chậm vài tuần."

**3. CRM migration là việc của nhóm hay của nước đó tự làm? Nó ảnh hưởng gì tới Nordic Flow?**
"Đề ghi rõ migration là một phần của dự án hiện tại và nằm trong ngân sách đã cắt, nên nhóm lập kế hoạch và chia ngân sách cho nó thành luồng thứ nhất; phần thực hiện do đội triển khai có kinh nghiệm làm. Với Nordic Flow, ảnh hưởng nằm ở dữ liệu: thông tin khách hàng và vùng giao hôm nay ở Dynamics, sau khi chuyển sẽ ở Salesforce. Nordic Flow đọc file, nên chỉ nguồn xuất file thay đổi, bộ tối ưu giữ nguyên. Tuần 2 nhóm ghép mã cũ với mã mới để các tuần trước và sau khi chuyển vẫn so sánh được."

**4. Sao không chuyển Dynamics 365 lên cloud cho rẻ, mà phải sang Salesforce?**
"Đó là quyết định của ban điều hành trong đề bài, và nhóm tôn trọng quyết định đó. Điều nhóm lưu ý là bản quyền Salesforce đắt hơn mỗi người dùng, nên khoản này cần có người chịu trách nhiệm ngân sách rõ ràng."

**5. Thêm một hệ thống mới thì Company A càng phân mảnh, đúng vấn đề ban đầu của họ?**
"Đúng là có rủi ro đó. Vì vậy nhóm thiết kế Salesforce sẵn cho nhiều nước ngay từ đầu. Việc này gần như không tốn thêm bây giờ, và sau này Đan Mạch, Na Uy có thể tham gia mà không phải dựng lại."

**6. Nếu nước chuyển CRM không phải Thụy Điển thì sao?**
"Thì hai luồng chạy hoàn toàn tách nhau, chỉ dùng chung ban quản lý. Kế hoạch, ngân sách và thời gian vẫn giữ nguyên; nhóm chỉ mất lợi thế dùng chung tuần khảo sát đầu tiên."

## B. Ngân sách và thời gian (Kiệt)

**7. Các con số chi phí lấy từ đâu?**
"Nhóm tính số ngày công cho từng việc, nhân với đơn giá bình quân khoảng 60 euro một giờ, dựa trên mức giá công khai ở Tây Âu và Việt Nam. Đây là ước tính, không phải báo giá; vì vậy nhóm luôn đưa ra khoảng, không đưa một con số."

**8. Ai trả tiền bản quyền Salesforce?**
"Nhóm giả định là doanh nghiệp trả, như chi phí vận hành thay cho CRM cũ. Theo giá niêm yết, 100 người dùng mỗi năm đã tốn hơn cả ngân sách dự án, nên điểm này bắt buộc phải xác nhận. Đây là một trong ba quyết định nhóm đề nghị Company A đưa ra."

**9. Tám tuần cho một lần chuyển CRM có thực tế không?**
"Chỉ thực tế khi chuyển nguyên trạng: ít tùy biến, tối đa hai tích hợp, không chuyển toàn bộ lịch sử. Nếu khối lượng lớn hơn, phần dữ liệu lõi vẫn lên ở tuần 8, phần tích hợp phụ làm ở tuần 9 đến 12 bằng tiền dự phòng."

**10. Vì sao dùng đội kết hợp với Việt Nam?**
"Nếu làm toàn bộ với đơn giá Tây Âu thì riêng luồng CRM đã hết ngân sách. Trưởng nhóm ở Bắc Âu giữ liên lạc với doanh nghiệp và đào tạo người dùng; đội ở Việt Nam làm cấu hình, chuyển dữ liệu và kiểm thử."

**11. Nếu ngân sách bị cắt thêm lần nữa?**
"Cắt tiền dự phòng trước, sau đó thu nhỏ phạm vi Nordic Flow, ví dụ chạy lại ít tuần hơn. Phần lõi của CRM được bảo vệ."

**12. Vì sao nói cắt ngân sách lại làm Nordic Flow an toàn hơn?**
"Ở Round 1, chi phí khoảng 0,3 triệu euro nên cần tiết kiệm 3 đến 6% chi phí logistics mới hòa vốn. Bây giờ luồng Nordic Flow chỉ khoảng 40 nghìn euro, nên chỉ cần dưới 1% là hòa vốn. Rủi ro tài chính nhỏ đi rất nhiều."

## C. Nordic Flow và chạy lại lịch sử (Bách)

**13. Chạy lại lịch sử chính xác là gì?**
"Nhóm lấy các tuần đã qua, kèm kế hoạch đã thực sự chạy trong tuần đó, rồi tính xem một phương án chi phí thấp nhất, đã được kiểm tra, sẽ tốn bao nhiêu với cùng đơn hàng và cùng giá. Không thay đổi gì trong vận hành. Kết quả là một khoảng chênh chi phí thật, có trước khi ai phải bỏ tiền cho pilot chạy thật."

**14. Con số 3,16% là giả lập, vậy tin được không?**
"Không nên coi nó là dự báo, và nhóm cũng không coi như vậy. Con số đó chỉ chứng minh cách đo hoạt động từ đầu đến cuối. Con số thật sẽ đến từ các tuần dữ liệu của Company A trong giai đoạn khảo sát."

**15. Nếu kế hoạch thực tế trong dữ liệu bị sai hoặc thiếu thì sao?**
"Nó đi qua cùng bộ kiểm tra độc lập như mọi phương án khác. Nếu nó không đáp ứng đủ đơn hàng trong giới hạn hàng, sức chứa và tuyến, hệ thống không hiện con số tiết kiệm. Nhóm không bao giờ so với một mốc không kiểm chứng được."

**16. Chạy lại lịch sử biết trước cả tuần đơn hàng, còn planner lúc đó thì không. So vậy có thiên vị không?**
"Có, chạy lại lịch sử hơi lạc quan, vì planner lúc đó có ít thông tin hơn. Đó chính là lý do ngưỡng go/no-go đặt ở 2%, cao gấp vài lần mức hòa vốn, và lý do vẫn cần pilot chạy thật sau khi có quyết định go để đo khoảng chênh thật."

**17. Vì sao ngưỡng là 2% mà không phải 5%?**
"Chi phí giảm nên mức hòa vốn xuống dưới 1%. 2% chừa biên an toàn và đo được trong 8 tuần. 5% vẫn là kỳ vọng của nhóm, không phải điều kiện."

**18. Chạy lại lịch sử không đo được gì?**
"Thời gian làm việc của planner và tỷ lệ giao hàng đúng hạn. Hai thứ đó cần pilot chạy thật, sau khi có quyết định go."

**19. Tính năng này làm bao lâu, có được kiểm thử không?**
"Tính năng dùng lại toàn bộ bộ tối ưu và bộ kiểm tra sẵn có; phần mới chỉ là file kế hoạch thực tế, các bước kiểm tra file và phần so sánh. Có 15 bài kiểm thử tự động cho phần mới, và toàn bộ 290 bài kiểm thử đều chạy đạt."

**20. Nordic Flow có kết nối với Salesforce không?**
"Không. Nordic Flow nhận file vào và trả file ra. Dùng chung dữ liệu khách hàng và vùng giao là hướng tương lai, chỉ cân nhắc sau pilot."

## D. AI và dữ liệu (Bách hoặc Nhật Anh)

**21. AI nằm ở đâu trong kế hoạch mới?**
"Ở hai chỗ, và đều có người quyết định. Một là giải thích phương án bằng lời dễ hiểu, chỉ là bản nháp cho tới khi planner duyệt. Hai là gợi ý ghép dữ liệu: ghép mã sản phẩm cho Nordic Flow, và ghép trường hoặc gợi ý bản ghi trùng khi chuyển CRM."

**22. Xử lý dữ liệu cá nhân (GDPR) khi chuyển CRM thế nào?**
"Lưu dữ liệu trong EU, ký thỏa thuận xử lý dữ liệu với nhà cung cấp, và lưu trữ dữ liệu cũ thay vì chép hết sang. Lịch sử đồng ý của khách hàng đi kèm bản ghi khách hàng. Quyết định pháp lý cuối cùng thuộc bộ phận pháp chế của Company A."

**23. Rủi ro lớn nhất của cả kế hoạch là gì?**
"Chất lượng dữ liệu CRM và việc người dùng có chịu dùng hệ thống mới hay không. Vì vậy nhóm làm sạch dữ liệu trước khi nạp, giữ màn hình gần giống hệ thống cũ, và đào tạo người dùng trước ngày chuyển."

## E. Câu hỏi khó

**24. Nếu làm lại từ đầu, nhóm sẽ làm khác điều gì?**
"Xin kế hoạch thực tế của các tuần cũ sớm hơn. So với một quy tắc do nhóm tự đặt là điểm yếu nhất của nhóm ở vòng trước; chạy lại lịch sử sửa đúng điểm đó."

**25. Nhóm chỉ có ba sinh viên, làm nổi dự án này không?**
"Nhóm đề xuất kế hoạch và MVP, không tự mình làm toàn bộ dự án. Các ước tính giả định một đội triển khai có kinh nghiệm; vì vậy nhóm trình bày rõ số ngày công."

**26. Nhóm tiếc nhất điều gì đã phải bỏ?**
"Đan Mạch và Na Uy trong giai đoạn này. Nhưng hai nước đó sẽ quay lại ngay khi khoản tiết kiệm được chứng minh và đủ để trả chi phí."
