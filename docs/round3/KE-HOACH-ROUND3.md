# Round 3: quyết định đã chốt và kế hoạch hoàn thành

Trình bày **thứ Bảy 21/11/2026, 13:30**, Opal Tower (92 Nguyễn Hữu Cảnh). 15 phút trình bày + 10 phút hỏi đáp. **Cả 3 người phải có mặt và đều nên nói.**
Phân tích chi tiết và nguồn số liệu: `PHAN-TICH-ROUND3.md`.

---

## A. Các quyết định đã chốt

| # | Quyết định | Lý do ngắn |
|---|---|---|
| D1 | **Hai luồng song song dưới một quản lý chung:** (1) chuyển CRM nguyên trạng, (2) Nordic Flow thu gọn thành chạy lại lịch sử | Đáp ứng cả yêu cầu bắt buộc lẫn mục tiêu gốc trong €0,21M |
| D2 | **Giả định chính: nước chuyển CRM là Thụy Điển.** Có trình bày phương án nếu là Đan Mạch hoặc Na Uy (hai luồng độc lập, chỉ chung quản lý) | Trùng nước pilot nên khảo sát tuần 1 dùng chung được; phương án vẫn đứng khi giả định sai |
| D3 | **Bản quyền Salesforce nằm ngoài ngân sách dự án**, là chi phí vận hành thay cho CRM cũ. Đưa thành câu hỏi khách hàng phải xác nhận | 100 người dùng theo giá niêm yết đã lớn hơn cả ngân sách dự án |
| D4 | **Mô hình giao hàng kết hợp:** trưởng nhóm và đào tạo ở Bắc Âu, cấu hình, chuyển dữ liệu, kiểm thử ở Việt Nam (đơn giá bình quân khoảng €60/giờ, ước tính) | Làm toàn bộ bằng đơn giá Tây Âu thì riêng CRM đã hết ngân sách |
| D5 | **Phạm vi CRM nguyên trạng:** khách hàng, liên hệ, cơ hội đang mở, hoạt động 24 tháng gần nhất; lịch sử cũ lưu chỉ đọc; tối đa 2 tích hợp thiết yếu; thiết kế Salesforce sẵn cho nhiều nước | Vừa 8 tuần, không làm hệ thống phân mảnh thêm |
| D6 | **Nordic Flow:** chạy lại 4–8 tuần lịch sử của một vùng Thụy Điển, nạp CSV, so với kế hoạch planner đã thực sự chạy | Đo được tiết kiệm thật với chi phí thấp, không đụng vận hành |
| D7 | **Cổng go/no-go mới:** chênh lệch ≥ 2% so với kế hoạch thực tế, trên các tuần chạy lại, không vi phạm ràng buộc nào. Mục tiêu 5% giữ làm kỳ vọng. Thời gian planner và tỷ lệ giao đúng hạn chuyển sang pilot thật | Ngưỡng hòa vốn mới dưới 1%; 2% cho biên an toàn |
| D8 | **Ngân sách (ước tính):** CRM €90–100k, Nordic Flow €35–40k, quản lý €20k, dự phòng €30–40k (ưu tiên CRM). Tổng €175–200k | Còn dư so với €210k |
| D9 | **Quy tắc ưu tiên:** khi tranh nguồn lực, **CRM thắng**. Dự phòng: CRM lõi ở tuần 8, tích hợp phụ ở tuần 9–12 | Liên tục kinh doanh trước |
| D10 | **AI:** giữ giải thích (tùy chọn) và ghép mã có người duyệt; đề xuất dùng cùng cách đó cho ghép trường và gợi ý gộp trùng khi chuyển CRM. **Không xây phần CRM trong MVP** | Đúng vai trò AI từ Round 1, chi phí gần 0 |
| D11 | **MVP:** thêm **chế độ chạy lại lịch sử** (file `actual_plan.csv` làm baseline) và lệnh tổng hợp nhiều tuần. Đóng băng chuyển kho giữa kho và tuyến thẳng | Vá điểm yếu "baseline giả lập", cho thấy thích nghi |
| D12 | **Tài liệu:** sửa System Context (thêm Dynamics 365, Salesforce, kho lưu trữ, file kế hoạch thực tế), User Journey (thêm hành trình chạy lại lịch sử). Không làm lại từ đầu | Đề hỏi rõ "MVP, user journey và diagram đã điều chỉnh thế nào" |
| D13 | **Demo trực tiếp tối đa 2 phút**, có video quay sẵn dự phòng; chạy không cần mạng (tắt Groq) | Tránh rủi ro mạng và thời gian |

---

## B. Việc cần làm và người phụ trách

### Claude (làm ngay hôm nay)
- [x] Chế độ chạy lại lịch sử trong MVP: đọc `actual_plan.csv`, dùng làm baseline, kiểm chứng độc lập, nhãn trên giao diện, giải thích theo đúng loại baseline.
- [x] Bộ dữ liệu mẫu 4 tuần lịch sử (giả lập, ghi rõ) và lệnh `python -m nordic_flow replay <thư mục>` tổng hợp kết quả từng tuần.
- [x] Test tự động cho phần mới; chạy lại toàn bộ test.
- [x] Sửa System Context Diagram và User Journey (bản PDF mới): `deliverables/round3/`.
- [x] Bản nháp nội dung slide (tiếng Anh) và bộ câu hỏi đáp: `SLIDES.md`, `QA.md`.

### Bách (code)
- [ ] Pull bản mới, chạy test trên máy mình, xem lại phần chạy lại lịch sử.
- [ ] Chuẩn bị máy demo: chạy được không cần mạng, dữ liệu mẫu tải sẵn.
- [ ] Phần nói: kỹ thuật (MVP đã đổi gì, kiểm chứng, demo).

### Nhật Anh (video, hình)
- [ ] Dựng slide theo bản nháp nội dung (khoảng 12–14 slide).
- [ ] Quay video dự phòng 2 phút cho demo chạy lại lịch sử.
- [ ] Phần nói: mở đầu và User Journey.

### Kiệt (tài liệu, điều phối)
- [ ] Duyệt nội dung slide, giả định, ngân sách.
- [ ] Học thuộc bộ câu hỏi đáp; phân ai trả lời câu nào.
- [ ] Phần nói: tình huống mới, ba hướng, ngân sách, lộ trình, rủi ro, kết luận.

---

## C. Lịch 3 ngày

| Khi nào | Việc | Ai |
|---|---|---|
| **Thứ Năm 19/11** | Chốt quyết định (xong). Làm chế độ chạy lại lịch sử, test, dữ liệu mẫu | Claude |
| | Bản nháp nội dung slide | Claude → Kiệt duyệt |
| | Pull, chạy thử | Bách |
| **Thứ Sáu 20/11 sáng** | Sửa 2 sơ đồ, bộ câu hỏi đáp | Claude |
| | Dựng slide | Nhật Anh |
| **Thứ Sáu 20/11 chiều** | Quay video dự phòng demo | Nhật Anh + Bách |
| **Thứ Sáu 20/11 tối** | **Tập lần 1**, bấm giờ đủ 15 phút; sửa slide theo góp ý | Cả đội |
| **Thứ Bảy 21/11 sáng** | **Tập lần 2**, tập hỏi đáp; kiểm tra máy, sạc, file PDF dự phòng trên USB | Cả đội |
| **Thứ Bảy 21/11 13:00** | Có mặt tại Opal Tower | Cả đội |

---

## D. Bố cục 15 phút

| Phút | Slide | Người nói |
|---|---|---|
| 0:00–1:00 | Nordic Flow trong 1 câu; điều Round 3 thay đổi | Nhật Anh |
| 1:00–3:00 | Hai yêu cầu mới, các giả định chính (nói rõ) | Kiệt |
| 3:00–5:00 | Ba hướng, vì sao chọn hai luồng | Kiệt |
| 5:00–7:00 | Giữ, sửa, hoãn, bỏ; CRM nguyên trạng | Kiệt |
| 7:00–9:00 | Ngân sách mới, hòa vốn mới, cổng go/no-go | Kiệt |
| 9:00–11:30 | MVP đã đổi: chạy lại lịch sử (demo 2 phút) | Bách |
| 11:30–12:30 | User Journey và System Context đã đổi | Nhật Anh |
| 12:30–14:00 | Lộ trình 8 tuần hai luồng, quy tắc ưu tiên | Bách |
| 14:00–15:00 | Rủi ro, đánh đổi, điều khách hàng cần quyết định | Kiệt |

---

## E. Những câu không được nói
- Không nói 4,2% hay kết quả chạy lại dữ liệu giả lập là dự báo cho Company A.
- Không nói Nordic Flow nối với Salesforce hay ERP (chỉ là hướng tương lai).
- Không nói chi phí là báo giá: luôn nói "ước tính, dựa trên giả định".
- Không nói giảm thời gian planner hay cải thiện giao đúng hạn (chưa đo).
- Nhật ký audit: "tamper-evident", không nói "tamper-proof".
