# Round 3: câu hỏi đáp (10 phút)

Câu trả lời viết bằng tiếng Anh để nói, kèm một dòng ý chính tiếng Việt. Trả lời ngắn (2–4 câu), rồi dừng. Ai phụ trách phần nào thì trả lời câu thuộc phần đó; người còn lại chỉ bổ sung khi cần.

Nguyên tắc: không biết thì nói thẳng "That is an assumption we would confirm in week 1", rồi nêu cách kiểm chứng. Không bịa số.

---

## A. Chiến lược và ưu tiên (Kiệt)

**1. Why not drop Nordic Flow and do only the CRM?**
"The brief asks us to meet the original business objective as well. The replay pilot costs about 40 thousand euro and gives a real saving figure in eight weeks. Dropping it would save little and leave the original problem unsolved."
*Ý chính: đề yêu cầu cả hai; replay rẻ mà có số thật.*

**2. Why does the CRM come first?**
"It has a hard deadline and an unsupported system is a security risk. Losing customer data or sales continuity costs more than a few weeks' delay in logistics savings."
*Ý chính: hạn chót cứng, rủi ro bảo mật.*

**3. Why Salesforce and not Dynamics 365 in the cloud?**
"That is the executive board's decision in the brief, and we respect it. We do point out that Salesforce licences cost more per user, so the licence budget needs an owner."
*Ý chính: quyết định của ban điều hành; nhắc chi phí bản quyền.*

**4. Is this not making systems more fragmented, which was Company A's original problem?**
"It could, which is why we design the Salesforce org for several countries from day one. It costs almost nothing now and lets Denmark and Norway join later."
*Ý chính: thiết kế sẵn đa quốc gia.*

**5. What if the CRM country is not Sweden?**
"Then the two tracks run fully apart and only share governance. The plan, budget and timeline still hold; we just lose the shared discovery week."

## B. Ngân sách và thời gian (Kiệt)

**6. Where do your cost figures come from?**
"Person-days per task times a blended rate of about 60 euro an hour, based on published rate ranges for Western Europe and Vietnam. They are estimates, not quotes; we show ranges for that reason."

**7. Who pays the Salesforce licences?**
"We assume the business, as an operating cost replacing the old CRM. At list price, 100 users would cost more than the whole project budget, so this has to be confirmed. It is one of the three decisions we ask for."

**8. Is eight weeks realistic for a CRM migration?**
"Only for a like-for-like migration with few customisations and at most two integrations, and without moving all history. If it is bigger, core data goes live in week 8 and the rest in weeks 9 to 12 from contingency."

**9. Why a blended team with Vietnam?**
"At Western European rates the CRM track alone would use the whole budget. A Nordic lead keeps the business close; the delivery team in Vietnam does configuration, data migration and testing."

**10. What if the budget is cut again?**
"Contingency goes first, then Nordic Flow scope: fewer replayed weeks. The CRM core is protected."

## C. Nordic Flow và replay (Bách)

**11. What exactly is replay?**
"We take past weeks, with the plan that was really shipped, and calculate what a verified lowest-cost plan would have cost on the same orders and prices. Nothing in operations changes. It gives a real cost gap before anyone spends money on a live pilot."

**12. Your 3.16% is synthetic. Why should we believe it?**
"You should not treat it as a forecast, and we do not. It shows the measurement works end to end. The real number comes from Company A's weeks in discovery."

**13. What if the actual plan in the data is wrong or incomplete?**
"It goes through the same independent verifier as every plan. If it does not serve every order within supply, capacity and lane limits, the system shows no saving. We never compare against a plan we cannot verify."

**14. Why is the gate 2% and not 5%?**
"Our costs fell, so break-even fell below 1%. Two percent leaves a margin and is measurable in eight weeks. Five percent stays our ambition."

**15. What can replay not measure?**
"Planner time and on-time delivery. Those need a live pilot, which comes after a go decision."

**16. How long did the replay feature take, and is it tested?**
"It reuses the existing engine; the new parts are the file, its checks and the comparison. It has 15 automated tests, and the whole suite of 290 tests passes."

**17. Does Nordic Flow connect to Salesforce?**
"No. Nordic Flow uses files in and files out. Shared customer and delivery-zone data is a future option we would only consider after the pilot."

## D. AI và dữ liệu (Bách hoặc Nhật Anh)

**18. Where is AI in the revised plan?**
"Two places, both with a person deciding. Explaining a plan in plain words, which stays a draft until a planner approves. And suggesting matches: product codes for Nordic Flow, and field mapping or duplicate records for the CRM migration."

**19. How do you handle GDPR in the CRM migration?**
"EU data residency, a data processing agreement with the vendor, and we archive old records instead of copying everything. Consent history moves with the customer record. The legal decision stays with Company A's legal team."

**20. What is the biggest risk overall?**
"CRM data quality and user adoption. That is why we cleanse before loading, keep screens like-for-like and train users before cut-over."

## E. Câu hỏi khó

**21. What would you do differently if you started again?**
"Ask for real past plans earlier. Measuring against a rule we invented was our weakest point; replay fixes that."

**22. Your team is three students. Can you deliver this?**
"We are proposing a plan and an MVP, not staffing the project ourselves. The estimates assume an experienced delivery team, which is why we show the person-days."

**23. What did you remove that you are sorry about?**
"Denmark and Norway in this phase. But they come back as soon as the saving is proven and can fund them."
