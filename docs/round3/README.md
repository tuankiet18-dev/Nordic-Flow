# Round 3: bắt đầu từ đây

Trình bày **thứ Bảy 21/11/2026, 13:30**, Opal Tower. 15 phút + 10 phút hỏi đáp. Cả 3 người phải có mặt.

## Đọc theo thứ tự

1. **`KE-HOACH-ROUND3.md`**: 13 quyết định đã chốt, ai làm gì, lịch 3 ngày, bố cục 15 phút, những câu không được nói. Đọc file này trước.
2. **`PHAN-TICH-ROUND3.md`**: lý do đằng sau các quyết định: ngân sách, rủi ro CRM, ba option, câu hỏi giám khảo có thể hỏi, nguồn tham khảo.
3. **`SLIDES.md`**: nội dung 14 slide (chữ trên slide bằng tiếng Anh), lời nói tiếng Việt lấy từ script, người nói và thời lượng.
4. **`SCRIPT-HIEU-BAI.md`**: đọc trước để hiểu bài: từng slide để làm gì, giải thích ý chính và lý do, con số cần nhớ, gợi ý cách nói, câu dễ bị hỏi.
   **`SCRIPT-THUYET-TRINH.md`**: lời nói tiếng Việt cho cả 15 phút, theo từng slide, có mốc thời gian, hành động và cách xử lý sự cố. Kiệt nói chính, Bách điều khiển demo, Nhật Anh chuyển slide và mở backup video.
5. **`QA.md`**: 26 câu hỏi giám khảo có thể hỏi, câu trả lời tiếng Việt (văn nói), ai trả lời.
6. **`../REPLAY-MODE.md`** (cho người làm code): tính năng mới của MVP, file `actual_plan.csv`, diagram code, cách mở rộng.

**Bộ slide đã dựng (14 slide, có lời nói trong phần ghi chú):** https://claude.ai/artifact/VtB9k6AYhTiTJxWHsVm5GT (Kiệt chia sẻ link cho cả nhóm; xuất PowerPoint hoặc PDF để trình bày không cần mạng).

## Thuật ngữ

Tài liệu Round 3 dùng thuật ngữ tiếng Anh, giống cách nói trong công ty IT. Khi nói cũng dùng đúng các từ này.

| Thuật ngữ | Nghĩa |
|---|---|
| proposal | đề xuất của nhóm |
| assumption | giả định |
| option | hướng giải quyết (A, B, C) |
| track | luồng công việc (track CRM, track Nordic Flow) |
| CRM migration, like-for-like | chuyển CRM, giữ nguyên chức năng như hệ thống cũ |
| On-Premises, end of support | bản cài trên máy chủ của công ty; hết hạn hỗ trợ từ hãng |
| executive board | ban điều hành |
| license, operating cost (OPEX) | tiền bản quyền; chi phí vận hành hằng năm |
| person-days, blended rate | số ngày công; đơn giá bình quân của đội Bắc Âu + Việt Nam |
| contingency, fallback | tiền dự phòng; phương án lùi nếu trễ |
| break-even, safety margin | mức hòa vốn; biên an toàn |
| history replay, actual plan | chạy lại các tuần đã qua; kế hoạch đã thực sự chạy |
| live pilot | chạy thử thật trong vận hành |
| optimiser, independent verifier | bộ tối ưu; bộ kiểm tra độc lập |
| planner, audit trail | người lập kế hoạch; nhật ký audit |
| decision gate, go/no-go | điểm ra quyết định đi tiếp hay dừng |
| discovery | giai đoạn khảo sát đầu dự án |
| field mapping, data cleansing, duplicate | ghép trường dữ liệu; làm sạch dữ liệu; bản ghi trùng |
| trial load, cut-over, read-only, archive | nạp thử; ngày chuyển chính thức; chỉ đọc; lưu trữ |
| delivery team, blended team | đội triển khai; đội kết hợp |
| synthetic data | dữ liệu giả lập |
| delivery zone, capacity | vùng giao; sức chứa |
| on-time delivery | tỷ lệ giao đúng hạn |

Tài liệu hình cho Round 3 (đã dùng trong slide):
- `deliverables/round3/System Context Diagram (Round 3).pdf`: trang 1 Nordic Flow sau Round 3, trang 2 hai track CRM và Nordic Flow.
- `deliverables/round3/User Journey (Round 3).pdf`: journey mới, history replay trước pilot.
- Nguồn để sửa: `deliverables/src/context-r3.html`, `journey-r3.html`; build lại bằng `build_pdfs.js` (xem `deliverables/README.md`).

Đề Round 3 (PDF của ban tổ chức) không đưa lên repo vì là tài liệu mật. Mỗi người dùng bản đã nhận qua email.

## Bắt đầu trên máy của bạn

```powershell
git checkout main
git pull
cd mvp
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m pytest -q                 # phải ra 302 passed
.\.venv\Scripts\python.exe -m uvicorn api.main:app --port 8000
```

Mở http://localhost:8000 → trang Data → **History replay** → **Calculate plan**. Kết quả phải là: Saving **1,382**, Optimised **31,316**, Actual plan (history) **32,698**, Plan checks **Passed**.

Bảng replay 4 tuần (dùng trong slide):

```powershell
.\.venv\Scripts\python.exe -m nordic_flow replay data\history
```

Phải ra tổng 3,16%, trung vị 3,12%. Đây là synthetic data, không phải dự báo.

## Việc của từng người (tóm tắt, chi tiết trong kế hoạch)

| Người | Việc chính | Phần nói |
|---|---|---|
| Bách | Kiểm tra tính năng history replay trên máy mình, chuẩn bị máy demo chạy không cần mạng, xem lỗi `e2e_focused_workflow.js` | MVP đã đổi, demo, lộ trình 8 tuần |
| Nhật Anh | Dựng slide, quay backup video 2 phút cho demo | Mở đầu, User Journey, System Context |
| Kiệt | Duyệt nội dung, assumption, ngân sách; điều phối tập | Yêu cầu mới, ba option, ngân sách, rủi ro, kết luận |

## Quy tắc khi sửa repo

- Chỉ dùng nhánh `main`. Trước khi sửa: `git pull`. Sau khi sửa: chạy `pytest -q`, rồi commit nhỏ, ghi rõ đã đổi gì.
- Báo trong nhóm trước khi push thay đổi lớn, nhất là trong `mvp/`.
- Sửa giao diện xong thì build lại: `cd mvp\frontend; npm run build` (FastAPI phục vụ thư mục `mvp/web`).
- Không đưa key, mật khẩu hay tài liệu mật của ban tổ chức lên repo.
- Mọi con số từ dữ liệu mẫu phải ghi là synthetic.
