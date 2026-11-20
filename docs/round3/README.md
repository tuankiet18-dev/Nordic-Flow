# Round 3: bắt đầu từ đây

Trình bày **thứ Bảy 21/11/2026, 13:30**, Opal Tower. 15 phút + 10 phút hỏi đáp. Cả 3 người phải có mặt.

## Đọc theo thứ tự

1. **`KE-HOACH-ROUND3.md`**: 13 quyết định đã chốt, ai làm gì, lịch 3 ngày, bố cục 15 phút, những câu không được nói. Đọc file này trước.
2. **`PHAN-TICH-ROUND3.md`**: lý do đằng sau các quyết định: ngân sách, rủi ro CRM, ba hướng, câu hỏi giám khảo có thể hỏi, nguồn tham khảo.
3. **`SLIDES.md`**: nội dung 14 slide, lời nói tiếng Anh, người nói và thời lượng. Nhật Anh dựng slide từ file này.
4. **`QA.md`**: 26 câu hỏi giám khảo có thể hỏi, câu trả lời tiếng Việt (văn nói), ai trả lời.
5. **`../REPLAY-MODE.md`** (cho người làm code): tính năng mới của MVP, file `actual_plan.csv`, sơ đồ code, cách mở rộng.

**Bộ slide đã dựng (14 slide, có lời nói trong phần ghi chú):** https://claude.ai/artifact/VtB9k6AYhTiTJxWHsVm5GT (Kiệt chia sẻ link cho cả nhóm; xuất PowerPoint hoặc PDF để trình bày không cần mạng).

Tài liệu hình cho Round 3 (đã dùng trong slide):
- `deliverables/round3/System Context Diagram (Round 3).pdf`: trang 1 Nordic Flow sau Round 3, trang 2 hai luồng CRM và Nordic Flow.
- `deliverables/round3/User Journey (Round 3).pdf`: hành trình mới, chạy lại lịch sử trước pilot.
- Nguồn để sửa: `deliverables/src/context-r3.html`, `journey-r3.html`; build lại bằng `build_pdfs.js` (xem `deliverables/README.md`).

Đề Round 3 (PDF của ban tổ chức) không đưa lên repo vì là tài liệu mật. Mỗi người dùng bản đã nhận qua email.

## Bắt đầu trên máy của bạn

```powershell
git checkout main
git pull
cd mvp
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m pytest -q                 # phải ra 290 passed
.\.venv\Scripts\python.exe -m uvicorn api.main:app --port 8000
```

Mở http://localhost:8000 → trang Data → **History replay** → **Calculate plan**. Kết quả phải là: Saving **1,382**, Optimised **31,316**, Actual plan (history) **32,698**, Plan checks **Passed**.

Bảng chạy lại 4 tuần (dùng trong slide):

```powershell
.\.venv\Scripts\python.exe -m nordic_flow replay data\history
```

Phải ra tổng 3,16%, trung vị 3,12%. Đây là dữ liệu giả lập, không phải dự báo.

## Việc của từng người (tóm tắt, chi tiết trong kế hoạch)

| Người | Việc chính | Phần nói |
|---|---|---|
| Bách | Kiểm tra tính năng chạy lại lịch sử trên máy mình, chuẩn bị máy demo chạy không cần mạng, xem lỗi `e2e_focused_workflow.js` | MVP đã đổi, demo, lộ trình 8 tuần |
| Nhật Anh | Dựng slide, quay video dự phòng 2 phút cho demo | Mở đầu, User Journey, System Context |
| Kiệt | Duyệt nội dung, giả định, ngân sách; điều phối tập | Yêu cầu mới, ba hướng, ngân sách, rủi ro, kết luận |

## Quy tắc khi sửa repo

- Chỉ dùng nhánh `main`. Trước khi sửa: `git pull`. Sau khi sửa: chạy `pytest -q`, rồi commit nhỏ, ghi rõ đã đổi gì.
- Báo trong nhóm trước khi push thay đổi lớn, nhất là trong `mvp/`.
- Sửa giao diện xong thì build lại: `cd mvp\frontend; npm run build` (FastAPI phục vụ thư mục `mvp/web`).
- Không đưa key, mật khẩu hay tài liệu mật của ban tổ chức lên repo.
- Mọi con số từ dữ liệu mẫu phải ghi là giả lập.
