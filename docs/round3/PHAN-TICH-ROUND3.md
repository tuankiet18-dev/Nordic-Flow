# Round 3: phân tích chi tiết và proposal

Cập nhật 19/11/2026. Trình bày thứ Bảy 21/11, 13:30, 15 phút + 10 phút hỏi đáp, cả đội phải có mặt.

Quy ước: **[đề]** là thông tin trong đề, **[R1]** là proposal Round 1 của đội, **[research]** là số liệu tra cứu (nguồn cuối file), **[assumption]** là đội tự đặt và phải nói rõ khi trình bày.

---

## 1. Đề bài nói gì, và điều gì *không* nói

| Nội dung | Có trong đề | Đề không nói, phải đặt assumption |
|---|---|---|
| Ngân sách | Giảm 30% **[đề]** | Ngân sách gốc là bao nhiêu → dùng con số của đội: €0,3M năm đầu (xây 0,2 + vận hành 0,1) **[R1]** → còn **€0,21M** |
| CRM | Một nước dùng Dynamics 365, hệ thống sắp bị ngừng, phải chuyển sang Salesforce, là **must-have** trong dự án hiện tại **[đề]** | Nước nào; ngày tắt cụ thể; bao nhiêu user, bao nhiêu bản ghi; nối với hệ thống nào; ai trả license Salesforce |
| Thời gian | "Trong thời hạn đã thống nhất" **[đề]** | Thời hạn của đội là 8 tuần tới quyết định go/no-go **[R1]** |
| Mục tiêu gốc | Vẫn phải đáp ứng mục tiêu kinh doanh ban đầu **[đề]** | Mức độ: pilot đầy đủ hay thu gọn |

Điều quan trọng nhất: đề **cố ý mơ hồ**. Ban giám khảo chấm cách đội đặt assumption, lý giải và ưu tiên, không chấm con số đúng hay sai.

---

## 2. Tình trạng dự án hiện tại (điểm mạnh, điểm yếu khi gặp yêu cầu mới)

**Điểm mạnh dùng được ngay**
- MVP đã chạy được: solver tối ưu, kiểm chứng độc lập, cổng duyệt, khóa kế hoạch, audit trail, what-if, 274 test. Phần "xây" €0,2M của Round 1 phần lớn đã có dạng MVP.
- Kiến trúc tách rời: nạp CSV, xuất ZIP, không nối trực tiếp ERP. Thêm Salesforce **không** bắt buộc phải sửa Nordic Flow.
- Đã có sẵn chức năng AI gợi ý mapping mã sản phẩm có người duyệt. Chính kiểu việc này (field mapping, dedup) là việc lớn trong CRM migration.

**Điểm yếu sẽ bị hỏi**
- Chỉ có synthetic data, con số 4,2% không phải dự báo. Baseline là quy tắc synthetic, không phải kế hoạch thật.
- Nordic Flow không liên quan trực tiếp tới CRM. Phải giải thích vì sao vẫn giữ nó khi ngân sách bị cắt.

---

## 3. Đào sâu yêu cầu CRM: những vấn đề ẩn

### 3.1 Vì sao hệ thống "sắp bị ngừng" (assumption có căn cứ)
- Dynamics CRM 2016 (bản 8.2, cài tại chỗ) đã **end of support mở rộng ngày 13/01/2026** **[research]**. Nghĩa là không còn bản vá bảo mật. Đây là lý do rất hợp lý cho việc "sắp ngừng".
- Bản tại chỗ mới hơn (9.x) end of support chính 12/01/2027, end of support mở rộng 09/01/2029 **[research]**.
- **[assumption]** Nước đó chạy Dynamics CRM bản On-Premises đã end of support, nên rủi ro bảo mật tăng mỗi tháng. Đây là lý do CRM được ưu tiên số 1.

### 3.2 License: cái bẫy lớn nhất về ngân sách
- Giá niêm yết Salesforce Sales Cloud Enterprise khoảng **$175/người/tháng** (trước đây $165) **[research]**.
- Dynamics 365 Sales Enterprise khoảng **$105/người/tháng** **[research]**.
- Ví dụ 100 user: Salesforce khoảng $210.000/năm, tức **lớn hơn cả ngân sách dự án €0,21M**. So với Dynamics 365 bản đám mây thì đắt hơn khoảng 67% theo giá niêm yết. Giá đàm phán thường thấp hơn.
- **Hệ quả:** nếu license phải trả từ ngân sách dự án thì bài toán **không có lời giải**. Phải đặt **[assumption]**: license là operating cost (OPEX) của bộ phận kinh doanh hoặc IT nước đó (thay cho chi phí duy trì CRM cũ). Ngân sách dự án chỉ trả công migration. Đây cũng là **câu hỏi cần làm rõ với khách hàng**, nên nói thẳng trong bài.

### 3.3 Chi phí công migration phụ thuộc mạnh vào nơi làm
- Rate tư vấn Salesforce: Tây Âu khoảng $120–280/giờ, Đông Âu $40–85/giờ, Việt Nam $35–100/giờ **[research]**. Đây là số từ các nhà cung cấp, chỉ mang tính tham khảo.
- Dịch vụ chuyên môn chiếm 45–60% chi phí một dự án CRM migration **[research]**.
- Netcompany có văn phòng TP.HCM và đang tuyển vị trí Salesforce Specialist ở đó **[research]**.
- **[assumption]** Blended delivery model: trưởng nhóm và đào tạo ở Bắc Âu, phần cấu hình, chuyển dữ liệu và test ở Việt Nam. Blended rate khoảng €60/giờ.

### 3.4 Thời gian: 8 tuần là sát
- Nhà cung cấp nói: môi trường nhỏ 6–12 tuần, doanh nghiệp vừa 16–24 tuần **[research]**.
- 8 tuần **chỉ khả thi** nếu chuyển like-for-like, ít tùy biến, ít integration, và **không** chuyển toàn bộ lịch sử.
- Cách làm phổ biến: chuyển dữ liệu đang dùng (khách hàng, liên hệ, cơ hội đang mở, hoạt động gần đây), còn lịch sử cũ lưu **read-only** ở một kho riêng để tra cứu và lưu trữ theo luật **[research]**.

### 3.5 Các rủi ro khác của CRM
| Rủi ro | Vì sao quan trọng | Cách giảm |
|---|---|---|
| Dữ liệu bẩn (trùng, thiếu, định dạng cũ) | Nguyên nhân hàng đầu khiến dự án CRM thất bại cùng với user không dùng (số liệu từ nhà cung cấp, chỉ tham khảo) **[research]** | Cleansing trước khi chuyển; AI gợi ý duplicate, người duyệt |
| User không quen Salesforce | Không dùng thì hệ thống mới vô nghĩa | Giữ quy trình như cũ (like-for-like), đào tạo trước khi chuyển, key user test |
| Integration bị bỏ sót (ERP, email, web) | Gãy một integration là gián đoạn bán hàng | Kiểm kê integration ở tuần 1; chỉ giữ integration thiết yếu |
| Ngày tắt sớm hơn kế hoạch | Mất hệ thống trước khi chuyển xong | Hỏi ngày chính xác ngay; contingency ưu tiên cho CRM |
| GDPR (personal data khách hàng) | Chuyển personal data sang nhà cung cấp mới | Ký Data Processing Agreement (DPA); chọn EU data residency (Hyperforce EU Operating Zone là gói trả phí); giữ nguyên căn cứ pháp lý và lịch sử đồng ý; xóa dữ liệu hết hạn thay vì chuyển **[research]** |
| Chủ quyền dữ liệu | Salesforce là công ty Mỹ, luật Mỹ (CLOUD Act) vẫn có thể áp dụng dù dữ liệu ở EU **[research]** | Nêu như rủi ro còn lại; quyết định cuối thuộc pháp chế của khách hàng |
| Làm hệ thống phân mảnh hơn | Đề Round 1 nói vấn đề gốc là "hệ thống phân mảnh"; thêm một CRM riêng cho một nước có thể làm tệ hơn | Thiết kế Salesforce sẵn cho nhiều nước (một org, chia theo nước), chi phí gần như bằng 0 lúc này |

---

## 4. Ba option và vì sao chọn option C

| | A. Làm đủ cả hai | B. CRM trước, Nordic Flow sau (tuần tự) | **C. Hai track song song, CRM ưu tiên, Nordic Flow thu gọn** |
|---|---|---|---|
| Đúng ngân sách | Không | Có | Có |
| Mục tiêu gốc ở tuần 8 | Có | **Chưa**: trễ ít nhất 8 tuần, chưa có bằng chứng | Có, ở mức chứng minh (replay) |
| Rủi ro gián đoạn kinh doanh | Cao (đội quá tải) | Thấp | Thấp (CRM được ưu tiên khi tranh chấp nguồn lực) |
| Rủi ro cho mục tiêu gốc | Thấp | Cao: không có số liệu, dễ bị cắt ở lần cắt ngân sách sau | Thấp |
| Điều ban giám khảo thấy | Không biết ưu tiên | An toàn nhưng bị động | Biết ưu tiên, biết thích nghi |

Option "bỏ hẳn Nordic Flow" không đưa vào vì đề yêu cầu vẫn phải đạt mục tiêu gốc (giảm tổng chi phí logistics, theo proposal Round 1). Nếu bị hỏi, xem câu 1b trong `QA.md`.

**Lý do chọn C:**
1. **Business continuity trước, tối ưu sau.** CRM có hạn chót cứng và rủi ro bảo mật. Nordic Flow là cơ hội tiết kiệm, chậm vài tuần không làm hỏng gì.
2. **Nordic Flow không cần nhiều tiền để trả lời câu hỏi quan trọng nhất.** Câu hỏi đó là "khoản tiết kiệm thật là bao nhiêu?". Replay trên dữ liệu lịch sử (replay) trả lời được mà không đụng vận hành.
3. **Cắt ngân sách làm ngưỡng break-even thấp xuống.** Xem mục 5.
4. **Giữ cửa mở rộng.** Pilot thật, Đan Mạch và Na Uy được trả bằng khoản tiết kiệm đã đo, không bằng lời hứa.

---

## 5. Ngân sách đề xuất (tất cả là ước tính, phải nói rõ)

Công lao động tính theo người-ngày (pd), blended rate khoảng €480/ngày (khoảng €60/giờ, mô hình Bắc Âu + Việt Nam) **[assumption]**.

### Track 1: like-for-like CRM migration (khoảng 165 pd)
| Việc | pd |
|---|---|
| Quản lý, phân tích nghiệp vụ, kiểm kê integration | 30 |
| Cấu hình Salesforce (đối tượng chuẩn, quyền, giao diện giống quy trình cũ) | 30 |
| Chuyển dữ liệu: field mapping, cleansing, trial load 2–3 lần, chạy chính thức | 40 |
| Integration thiết yếu (ví dụ ERP khách hàng và công nợ) | 30 |
| User acceptance test (UAT) | 20 |
| Đào tạo, chuyển giao, hỗ trợ sau chuyển | 15 |
| **Tổng** | **165 pd ≈ €80k** |

Thêm công cụ và read-only archive cho lịch sử khoảng €10–20k (Data Loader của Salesforce miễn phí **[research]**). **Track 1 ≈ €90–100k.**

Để so sánh: nếu làm toàn bộ bằng rate Tây Âu (khoảng €1.200/ngày) thì riêng CRM đã tốn khoảng €200k, tức **hết toàn bộ ngân sách**. Vì vậy mô hình giao hàng là một phần của lời giải, không chỉ là chi tiết.

### Track 2: Nordic Flow pilot thu gọn (khoảng 55 pd)
| Việc | pd |
|---|---|
| Tuần 1: discovery dữ liệu Thụy Điển, xác nhận ai trả phí vận chuyển vào | 10 |
| Nạp CSV thật, mapping mã sản phẩm (dùng chức năng AI đã có, người duyệt) | 15 |
| Replay 4–8 tuần lịch sử, so với kế hoạch planner đã làm thật | 15 |
| Bảo mật, EU data residency, vận hành tối thiểu | 10 |
| Đánh giá kinh tế, báo cáo go/no-go | 5 |
| **Tổng** | **55 pd ≈ €26k**, cộng hạ tầng và vận hành khoảng €10k → **≈ €35–40k** |

### Tổng
| Hạng mục | Ước tính |
|---|---|
| Track 1 CRM | €90–100k |
| Track 2 Nordic Flow | €35–40k |
| Quản lý chung, change management | €20k |
| Contingency (ưu tiên cho CRM) | €30–40k |
| **Tổng** | **≈ €175–200k ≤ €210k** |

### Break-even mới cho Nordic Flow
- Round 1: chi phí €0,3M → cần tiết kiệm 3–6% (với €5–10M chi phí logistics liên quan).
- Bây giờ: khoảng €40k → cần khoảng **0,4–0,8%**.
- **Lưu ý khi nói:** hai con số không cùng loại. €0,3M ở Round 1 là cả giải pháp; €40k chỉ là bước history replay, chưa tạo ra tiết kiệm. Cách nói đúng: €40k là giá của một quyết định có căn cứ; nếu đạt 2% thì khoảng €100–200k/năm (2% × €5–10M) trả cho bước tiếp theo; nếu không đạt thì dừng ở €40k.
- **[đề xuất]** Cổng go/no-go mới: chênh lệch đo được ≥ 2% trên baseline thật đã kiểm chứng, tức gấp vài lần ngưỡng break-even. Mục tiêu 5% giữ làm kỳ vọng, không làm điều kiện.

---

## 6. Lộ trình 8 tuần (hai track)

| Tuần | CRM | Nordic Flow |
|---|---|---|
| 1 | Kiểm kê dữ liệu, integration, user; xác nhận ngày tắt | Discovery dữ liệu Thụy Điển |
| 2 | Field mapping, thiết kế org multi-country | Nạp dữ liệu thật, mapping mã |
| 3–4 | Cấu hình, cleansing, trial load lần 1 | History replay, kiểm chứng baseline |
| 5–6 | Trial load lần 2, integration, UAT | Phân tích kết quả, mời planner đánh giá |
| 7 | Cut-over rehearsal, đào tạo | Đánh giá kinh tế |
| 8 | **Chuyển chính thức**, hệ thống cũ read-only | **Quyết định go/no-go** cho live pilot |

Quy tắc khi tranh chấp nguồn lực: **CRM thắng**. Nếu CRM lớn hơn dự kiến, Nordic Flow lùi, không phải ngược lại.

Fallback nếu CRM phức tạp hơn: chuyển phần cốt lõi (khách hàng, liên hệ, cơ hội đang mở) ở tuần 8, các integration phụ ở tuần 9–12, chi từ contingency.

---

## 7. Giữ, sửa, hoãn, bỏ

| Hạng mục | Quyết định | Lý do |
|---|---|---|
| Like-for-like CRM migration | **Thêm, ưu tiên 1** | Bắt buộc, có hạn chót |
| Lõi Nordic Flow (tối ưu, kiểm chứng, cổng duyệt, audit) | **Giữ** | Đã xây, chi phí thêm thấp |
| Pilot chạy trực tiếp với planner + nối API ERP | **Sửa** → replay dữ liệu lịch sử, nạp CSV | Đo được tiết kiệm với chi phí thấp |
| AI giải thích bằng lời | **Giữ, tùy chọn** | Gần như không tốn tiền |
| AI mapping mã / field mapping | **Giữ, dùng cho cả hai track** | Đúng vai trò AI ở Round 1, có người duyệt |
| Mở rộng Đan Mạch, Na Uy | **Hoãn** | Trả bằng tiết kiệm đã đo |
| Học từ quyết định của planner, theo dõi giao hàng | **Hoãn** | Vốn đã là giai đoạn 2 |
| Chuyển kho giữa kho, tuyến thẳng | **Đóng băng** | Ngoài pilot Round 1 |
| Cải tiến quy trình bán hàng trên Salesforce | **Hoãn** | Giữ like-for-like để kịp hạn |
| Chuyển toàn bộ lịch sử CRM | **Bỏ** → lưu read-only | Giảm thời gian và rủi ro |

Chỉ tiêu bị ảnh hưởng: "giảm 30% thời gian planner" và "không làm giảm tỷ lệ on-time delivery, đủ hàng" **không đo được** bằng history replay. Hai chỉ tiêu này chuyển sang pilot thật. Phải nói thẳng.

---

## 8. Câu hỏi về nước nào làm CRM migration

| Nếu là | Hệ quả |
|---|---|
| **Thụy Điển** (trùng nước pilot) | Tuần 1 discovery chung; dữ liệu khách hàng và địa chỉ giao hàng dùng chung cho vùng khách hàng của Nordic Flow. Rủi ro: cùng đội IT địa phương bị quá tải |
| Đan Mạch hoặc Na Uy | Hai track gần như độc lập, chỉ chung quản lý. Nordic Flow pilot vẫn ở Thụy Điển |

**Đề xuất:** trình bày phương án chạy được cho **cả hai trường hợp**, rồi nói rõ assumption chính. Không nên đặt cược vào một nước.

---

## 9. MVP, User Journey, System Context phải đổi gì

**MVP**
- Bắt buộc: không xây thêm nhiều. Nói rõ phần nào đóng băng.
- Nên có, nếu Bách kịp (cần đánh giá trong ngày): **chế độ history replay**, nạp thêm file "actual plan đã chạy" làm baseline thay cho quy tắc synthetic, rồi so sánh. Việc này vá đúng điểm yếu lớn nhất (baseline synthetic) và cho thấy khả năng thích nghi.
- **Đã làm thêm (21/11):** trang **Pilot evidence**: replay nhiều tuần một lúc, kết luận GO/NO-GO theo ngưỡng 2% trên ít nhất 4 tuần, business case (break-even, tiết kiệm mỗi năm), và kiểm tra code map Dynamics → Salesforce cho mã delivery zone. Vẫn chỉ là file vào, file ra; không nối Salesforce.
- Không nên: dựng Salesforce giả hay nối API thật. Không đủ thời gian và dễ bị hỏi vặn.

**User Journey**
- Thêm journey "đánh giá trước pilot": nạp dữ liệu lịch sử → chạy → so với kế hoạch thật → planner xem → quyết định go/no-go.
- Có thể thêm một trang ngắn cho user CRM: trước chuyển, cut-over, sau chuyển.

**System Context Diagram**
- Thêm Dynamics 365 (nguồn, sắp tắt, sau chuyển còn read-only), Salesforce (đích), archive lịch sử.
- Vẽ track CRM migration là một hệ thống riêng, **không** nối vào Nordic Flow.
- Đường nét đứt "dữ liệu khách hàng và delivery zone dùng chung" chỉ là future option.

---

## 10. Câu hỏi ban giám khảo có thể hỏi

1. Sao không bỏ Nordic Flow cho chắc? → Đề yêu cầu đáp ứng cả mục tiêu gốc; replay chỉ tốn khoảng €40k và cho con số thật.
2. License Salesforce ai trả? → Assumption operating cost (OPEX) thay cho CRM cũ; đây là điểm cần khách hàng xác nhận.
3. 8 tuần có thật không? → Chỉ khi like-for-like và không chuyển lịch sử; có fallback tuần 9–12.
4. Ước tính chi phí lấy từ đâu? → Người-ngày nhân rate tham khảo; nêu khoảng, không nêu một con số.
5. Vì sao chọn Salesforce mà không giữ Dynamics bản đám mây? → Đây là quyết định của executive board **[đề]**; đội chỉ nêu chênh lệch giá license như một rủi ro.
6. AI còn vai trò gì? → Field mapping và gợi ý duplicate cho CRM migration, mapping mã cho Nordic Flow, giải thích tùy chọn. Luôn có người duyệt.
7. Làm sao không làm hệ thống phân mảnh hơn? → Thiết kế Salesforce sẵn cho nhiều nước.

---

## 11. Bố cục 15 phút gợi ý

| Phút | Nội dung |
|---|---|
| 0–1 | Nhắc lại vấn đề và Nordic Flow trong 1 câu |
| 1–3 | Yêu cầu mới và điều nó thay đổi; các assumption chính |
| 3–6 | Ba option, vì sao chọn hai track |
| 6–9 | Giữ, sửa, hoãn; ngân sách mới; break-even mới |
| 9–11 | MVP, User Journey, System Context đã điều chỉnh (có thể demo ngắn) |
| 11–13 | Lộ trình 8 tuần, quy tắc ưu tiên |
| 13–15 | Rủi ro, trade-off, đề nghị khách hàng quyết định |

---

## 12. Những gì cần cả đội chốt hôm nay
1. Assumption nước làm CRM migration (đề xuất: trình bày cả hai trường hợp, chọn Thụy Điển làm assumption chính).
2. Assumption license Salesforce nằm ngoài ngân sách dự án.
3. Có làm chế độ history replay trong MVP không (Bách đánh giá).
4. Ai trình bày phần nào (cả 3 người đều phải nói).

---

## Nguồn tham khảo

- Giá Salesforce: [Redress Compliance](https://redresscompliance.com/salesforce-sales-cloud-pricing.html), [Vendr](https://www.vendr.com/marketplace/salesforce), [Tech.co](https://tech.co/crm-software/salesforce-crm-review)
- Giá Dynamics 365 Sales: [Rand Group](https://www.randgroup.com/insights/microsoft/complete-guide-to-dynamics-365-sales-pricing/), [SaaS CRM Review](https://saascrmreview.com/microsoft-dynamics-365-sales-review/)
- Vòng đời Dynamics: [Microsoft: End of support 2026](https://learn.microsoft.com/en-gb/lifecycle/end-of-support/end-of-support-2026), [Microsoft: Dynamics 365 CE 9.x on-premises](https://learn.microsoft.com/en-us/lifecycle/products/dynamics-365-for-customer-engagement-apps-version-9x-onpremises-update)
- Thời gian và chi phí CRM migration: [Folio3](https://crm.folio3.com/blog/dynamics-to-salesforce-migration/), [Ascendix](https://ascendix.com/blog/dynamics-to-salesforce-migration/), [Ksolves](https://www.ksolves.com/migration/ms-dynamics-365-to-salesforce)
- Lưu trữ lịch sử, scope chuyển: [Rework: legacy data archiving](https://resources.rework.com/guides/data-migration/legacy-data-archiving), [HubSpot: CRM migration guide](https://blog.hubspot.com/sales/crm-migration-guide)
- Data Loader, Bulk API: [Salesforce Data Loader](https://developer.salesforce.com/tools/data-loader), [Bulk API limits](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-bulkapi.html)
- GDPR, EU data residency: [Salesforce: Hyperforce EU Operating Zone](https://www.salesforce.com/news/press-releases/2023/03/02/hyperforce-eu-operating-zone-news/), [Flosum](https://www.flosum.com/blog/eu-data-residency-gdpr-compliance-salesforce)
- Nguyên nhân thất bại CRM (số liệu nhà cung cấp, chỉ tham khảo): [LowCode Agency](https://www.lowcode.agency/blog/crm-implementation-failure-rate), [V-Soft](https://blog.vsoftconsulting.com/blog/why-70-of-salesforce-migrations-fail-and-how-to-fix-them)
- Rate tư vấn: [Branch8](https://branch8.com/posts/salesforce-crm-implementation-cost-breakdown-guide-apac), [Magicfuse](https://magicfuse.co/blog/salesforce-consulting-rates-around-the-globe), [Savvycom](https://savvycomsoftware.com/?p=56168)
- Netcompany và Salesforce: [Netcompany: Salesforce Specialist HCMC](https://netcompany.com/job/REF4807P-Ho-Chi-Minh-City), [Netcompany-Intrasoft](https://netcompany-intrasoft.com/technologies/customer-experience)
