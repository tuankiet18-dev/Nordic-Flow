# Round 3: quyết định đã chốt và kế hoạch hoàn thành

Trình bày **thứ Bảy 21/11/2026, 13:30**, Opal Tower (92 Nguyễn Hữu Cảnh). 15 phút trình bày + 10 phút hỏi đáp. **Cả 3 người phải có mặt và đều nên nói.**
Phân tích chi tiết và nguồn số liệu: `PHAN-TICH-ROUND3.md`.

---

## A. Các quyết định đã chốt

| # | Quyết định | Lý do ngắn |
|---|---|---|
| D1 | **Hai track song song dưới một quản lý chung:** (1) like-for-like CRM migration, (2) Nordic Flow thu gọn thành history replay | Đáp ứng cả must-have requirement lẫn mục tiêu gốc trong €0,21M |
| D2 | **Assumption chính: nước làm CRM migration là Thụy Điển.** Có trình bày phương án nếu là Đan Mạch hoặc Na Uy (hai track độc lập, chỉ chung quản lý) | Trùng nước pilot nên discovery tuần 1 dùng chung được; phương án vẫn đứng khi assumption sai |
| D3 | **License Salesforce nằm ngoài ngân sách dự án**, là operating cost (OPEX) thay cho CRM cũ. Đưa thành câu hỏi khách hàng phải xác nhận | 100 user theo giá niêm yết đã lớn hơn cả ngân sách dự án |
| D4 | **Blended delivery model:** trưởng nhóm và đào tạo ở Bắc Âu, cấu hình, chuyển dữ liệu, test ở Việt Nam (blended rate khoảng €60/giờ, ước tính) | Làm toàn bộ bằng rate Tây Âu thì riêng CRM đã hết ngân sách |
| D5 | **Scope CRM like-for-like:** khách hàng, liên hệ, cơ hội đang mở, hoạt động 24 tháng gần nhất; lịch sử cũ lưu read-only; tối đa 2 integration thiết yếu; thiết kế Salesforce sẵn cho nhiều nước | Vừa 8 tuần, không làm hệ thống phân mảnh thêm |
| D6 | **Nordic Flow:** replay 4–8 tuần lịch sử của một vùng Thụy Điển, nạp CSV, so với kế hoạch planner đã thực sự chạy | Đo được tiết kiệm thật với chi phí thấp, không đụng vận hành |
| D7 | **Cổng go/no-go mới:** chênh lệch ≥ 2% so với actual plan, trên các tuần replay, không vi phạm constraint nào. Mục tiêu 5% giữ làm kỳ vọng. Thời gian planner và tỷ lệ on-time delivery chuyển sang pilot thật | Ngưỡng break-even mới dưới 1%; 2% cho safety margin |
| D8 | **Ngân sách (ước tính):** CRM €90–100k, Nordic Flow €35–40k, quản lý €20k, contingency €30–40k (ưu tiên CRM). Tổng €175–200k | Còn dư so với €210k |
| D9 | **Quy tắc ưu tiên:** khi tranh nguồn lực, **CRM thắng**. Fallback: CRM core ở tuần 8, integration phụ ở tuần 9–12 | Business continuity trước |
| D10 | **AI:** giữ giải thích (tùy chọn) và mapping mã có người duyệt; đề xuất dùng cùng cách đó cho field mapping và gợi ý duplicate trong CRM migration. **Không xây phần CRM trong MVP** | Đúng vai trò AI từ Round 1, chi phí gần 0 |
| D11 | **MVP:** thêm **chế độ history replay** (file `actual_plan.csv` làm baseline) và lệnh tổng hợp nhiều tuần; trang **Pilot evidence** (nhiều tuần → GO/NO-GO theo ngưỡng 2%, business case, kiểm tra code map Dynamics → Salesforce, báo cáo CSV). Đóng băng chuyển kho giữa kho và tuyến thẳng | Vá điểm yếu "baseline synthetic", cho thấy thích nghi |
| D12 | **Tài liệu:** sửa System Context (thêm Dynamics 365, Salesforce, archive, file actual plan), User Journey (thêm journey history replay). Không làm lại từ đầu | Đề hỏi rõ "MVP, user journey và diagram đã điều chỉnh thế nào" |
| D13 | **Demo trực tiếp tối đa 2 phút**, có backup video quay sẵn; chạy không cần mạng (tắt Groq) | Tránh rủi ro mạng và thời gian |

---

## B. Việc cần làm và người phụ trách

### Claude (làm ngay hôm nay)
- [x] Chế độ history replay trong MVP: đọc `actual_plan.csv`, dùng làm baseline, kiểm chứng độc lập, nhãn trên giao diện, giải thích theo đúng loại baseline.
- [x] Trang Pilot evidence trong app: replay nhiều tuần, kết luận GO/NO-GO theo ngưỡng 2% trên ít nhất 4 tuần, business case, kiểm tra code map Dynamics → Salesforce, tải báo cáo CSV (thêm ngày 21/11; 302 unit test và 8 test trình duyệt đều pass).
- [x] Bộ dữ liệu mẫu 4 tuần lịch sử (synthetic, ghi rõ) và lệnh `python -m nordic_flow replay <thư mục>` tổng hợp kết quả từng tuần.
- [x] Test tự động cho phần mới; chạy lại toàn bộ test.
- [x] Sửa System Context Diagram và User Journey (bản PDF mới): `deliverables/round3/`.
- [x] Bản nháp nội dung slide (tiếng Anh) và bộ câu hỏi đáp: `SLIDES.md`, `QA.md`.

### Bách (code)
- [ ] Pull bản mới, chạy test trên máy mình, xem lại phần history replay.
- [ ] Chuẩn bị máy demo: chạy được không cần mạng, dữ liệu mẫu tải sẵn.
- [ ] Phần nói: kỹ thuật (MVP đã đổi gì, kiểm chứng, demo).

### Nhật Anh (video, hình)
- [ ] Dựng slide theo bản nháp nội dung (khoảng 12–14 slide).
- [ ] Quay backup video 2 phút cho demo history replay.
- [ ] Phần nói: mở đầu và User Journey.

### Kiệt (tài liệu, điều phối)
- [ ] Duyệt nội dung slide, assumption, ngân sách.
- [ ] Học thuộc bộ câu hỏi đáp; phân ai trả lời câu nào.
- [ ] Phần nói: tình huống mới, ba option, ngân sách, lộ trình, rủi ro, kết luận.

---

## C. Lịch 3 ngày

| Khi nào | Việc | Ai |
|---|---|---|
| **Thứ Năm 19/11** | Chốt quyết định (xong). Làm chế độ history replay, test, dữ liệu mẫu | Claude |
| | Bản nháp nội dung slide | Claude → Kiệt duyệt |
| | Pull, chạy thử | Bách |
| **Thứ Sáu 20/11 sáng** | Sửa 2 diagram, bộ câu hỏi đáp | Claude |
| | Dựng slide | Nhật Anh |
| **Thứ Sáu 20/11 chiều** | Quay backup video demo | Nhật Anh + Bách |
| **Thứ Sáu 20/11 tối** | **Tập lần 1**, bấm giờ đủ 15 phút; sửa slide theo góp ý | Cả đội |
| **Thứ Bảy 21/11 sáng** | **Tập lần 2**, tập hỏi đáp; kiểm tra máy, sạc, file PDF backup trên USB | Cả đội |
| **Thứ Bảy 21/11 13:00** | Có mặt tại Opal Tower | Cả đội |

---

## D. Bố cục 15 phút

| Phút | Slide | Người nói |
|---|---|---|
| 0:00–1:20 | 1–2: mở đầu, hai thay đổi | Nhật Anh |
| 1:20–7:00 | 3–8: assumption, ba option, hai track, giữ/đổi/hoãn, ngân sách, cổng go/no-go | Kiệt |
| 7:00–10:00 | 9–10: demo history replay, Pilot evidence | Bách |
| 10:00–10:45 | 11: User Journey và System Context | Nhật Anh |
| 10:45–11:45 | 12: roadmap 8 tuần | Bách |
| 11:45–13:30 | 13–14: rủi ro, trade-off, ba quyết định | Kiệt |

Chi tiết lời nói: `SCRIPT-THUYET-TRINH.md`. Bài kết thúc khoảng 13:30–14:00, dư một phút.

---

## E. Những câu không được nói
- Không nói 4,2% hay kết quả replay synthetic data là dự báo cho Company A.
- Không nói Nordic Flow nối với Salesforce hay ERP (chỉ là future option).
- Không nói chi phí là quote: luôn nói "ước tính, dựa trên assumption".
- Không nói giảm thời gian planner hay cải thiện on-time delivery (chưa đo).
- Audit trail: "tamper-evident", không nói "tamper-proof".
