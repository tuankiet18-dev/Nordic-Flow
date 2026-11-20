// Records the 2-minute history replay demo as a backup video for the Round 3 pitch.
// Needs a fresh app instance with the AI assistant off, for example:
//   NORDIC_DB=<temp>/demo.db GROQ_API_KEY= python -m uvicorn api.main:app --port 8014   (from mvp/)
// Run:  BASE_URL=http://127.0.0.1:8014 node record-demo.js <output folder>
// It saves screencast frames plus frames.txt; build the MP4 with ffmpeg (see README.md next to this file).
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE = process.env.BASE_URL || 'http://127.0.0.1:8014';
const OUT = process.argv[2] || '.';
const ZIP = path.resolve(__dirname, '../../../mvp/frontend/public/examples/history-week-2.zip');
const W = 1600, H = 900;

const OVERLAY = `
(() => {
  if (document.getElementById('nf-cursor')) return;
  const c = document.createElement('div');
  c.id = 'nf-cursor';
  c.style.cssText = 'position:fixed;left:800px;top:450px;width:22px;height:22px;border-radius:50%;background:rgba(37,87,214,.35);border:3px solid #2457d6;z-index:99999;pointer-events:none;transform:translate(-50%,-50%);transition:left .7s ease,top .7s ease';
  document.body.appendChild(c);
  const b = document.createElement('div');
  b.id = 'nf-caption';
  b.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%);max-width:1180px;background:rgba(15,27,45,.92);color:#f4f7fb;font:600 22px/1.4 Inter,system-ui,sans-serif;padding:14px 26px;border-radius:12px;z-index:99998;pointer-events:none;text-align:center;opacity:0;transition:opacity .3s';
  document.body.appendChild(b);
})();`;

async function caption(page, text, ms) {
  await page.evaluate(OVERLAY);
  await page.evaluate(t => { const b = document.getElementById('nf-caption'); b.textContent = t; b.style.opacity = t ? 1 : 0; }, text);
  if (ms) await page.waitForTimeout(ms);
}

async function point(page, locator, pause = 900) {
  await page.evaluate(OVERLAY);
  await locator.scrollIntoViewIfNeeded();
  const box = await locator.boundingBox();
  await page.evaluate(([x, y]) => { const c = document.getElementById('nf-cursor'); c.style.left = x + 'px'; c.style.top = y + 'px'; },
    [box.x + box.width / 2, box.y + box.height / 2]);
  await page.waitForTimeout(pause);
}

async function click(page, locator) {
  await point(page, locator, 800);
  await locator.click();
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: W, height: H } });
  const page = await context.newPage();
  const frames = [];
  fs.mkdirSync(path.join(OUT, 'frames'), { recursive: true });
  const cdp = await context.newCDPSession(page);
  cdp.on('Page.screencastFrame', async f => {
    const file = path.join(OUT, 'frames', String(frames.length).padStart(5, '0') + '.jpg');
    fs.writeFileSync(file, Buffer.from(f.data, 'base64'));
    frames.push({ file, t: f.metadata.timestamp });
    try { await cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }); } catch (e) {}
  });
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 85, maxWidth: W, maxHeight: H, everyNthFrame: 1 });
  await page.goto(BASE);
  await page.waitForLoadState('networkidle');

  await caption(page, 'Nordic Flow, Round 3: history replay. The optimiser is compared with the plan that was really shipped.', 4500);

  // 1. Load the replay week
  await caption(page, 'The planner loads a past week: the usual 8 files plus actual_plan.csv.', 0);
  await click(page, page.getByRole('button', { name: 'History replay' }));
  await page.getByText('Actual plan', { exact: false }).first().waitFor();
  await page.waitForTimeout(800);
  await point(page, page.getByText(/Actual plan\s*606/).first(), 600);
  await caption(page, 'Every file is checked. The actual plan: 606 pallets on 87 routes, the same orders as this week.', 5000);
  await point(page, page.getByText('History replay: the plan that was really shipped', { exact: false }).first(), 600);
  await caption(page, 'The baseline is now what was really shipped, not a rule we invented.', 4000);

  // 2. Calculate
  await caption(page, 'Calculate the plan: same orders, same prices, same capacity.', 0);
  await click(page, page.getByRole('button', { name: 'Calculate plan' }));
  await page.getByText('Actual plan (history)').waitFor();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1200);
  await point(page, page.getByText('Actual plan (history)'), 600);
  await caption(page, 'Actually spent that week: 32,698 cost units.', 3500);
  await point(page, page.getByText('Optimised plan', { exact: true }), 600);
  await caption(page, 'A verified plan for the same week: 31,316.', 3000);
  await point(page, page.getByText('Saving', { exact: true }), 600);
  await caption(page, '1,382 lower, 4.2%. Synthetic data: this shows the measurement works, it is not a forecast.', 5000);
  await point(page, page.getByText('Plan checks', { exact: true }), 600);
  await caption(page, 'Both plans pass the independent verifier. If the actual plan did not match the orders, no saving would be shown.', 5500);
  await point(page, page.getByText('History replay: the baseline is the plan', { exact: false }), 600);
  await caption(page, 'Nothing is sent to any system. This is evidence for a go / no-go decision.', 4000);

  // 3. Explanation
  await caption(page, 'The planner can still review and explain the result.', 0);
  await click(page, page.getByRole('button', { name: /Review & approve/ }).first());
  await page.waitForTimeout(1000);
  await click(page, page.getByRole('button', { name: 'Generate explanation' }));
  const text = page.getByRole('textbox', { name: 'Explanation text' });
  await text.waitFor();
  await page.waitForTimeout(800);
  await point(page, text, 600);
  await caption(page, 'The standard summary, written by code: “against 32,698 for the actual plan from history”.', 5500);

  // 4. A second week, uploaded like a planner would
  await caption(page, 'A second past week, uploaded as one ZIP, the way a planner would.', 0);
  await click(page, page.locator('aside button, nav button').filter({ hasText: /^\s*1?\s*Data\s*$/ }).first());
  await page.waitForTimeout(800);
  const change = page.locator('summary').filter({ hasText: 'Change data' }).first();
  await point(page, change, 800);
  await page.evaluate(() => { const d = [...document.querySelectorAll('details')].find(x => x.querySelector('summary')?.textContent.includes('Change data')); if (d) d.open = true; });
  await page.waitForTimeout(800);
  await page.setInputFiles('#data-files', ZIP);
  await page.waitForTimeout(600);
  await click(page, page.getByRole('button', { name: 'Upload and check' }));
  await page.getByText(/Actual plan\s*624/).first().waitFor();
  await page.waitForTimeout(800);
  await point(page, page.getByText(/Actual plan\s*624/).first(), 600);
  await caption(page, 'Week 2: valid, actual plan of 624 pallets.', 3500);
  await click(page, page.getByRole('button', { name: 'Calculate plan' }));
  await page.getByText('Actual plan (history)').waitFor();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1200);
  await point(page, page.getByText('Saving', { exact: true }), 600);
  await caption(page, 'Week 2: 33,812 actual, 33,066 verified, 746 lower (2.2%).', 4500);
  await caption(page, 'Four synthetic weeks together: 2.2% to 4.2%, 3.16% overall. Gate for a live pilot: at least 2% on real weeks.', 6000);
  await caption(page, '', 800);
  await cdp.send('Page.stopScreencast');
  const end = Date.now() / 1000;
  const lines = frames.map((f, i) => {
    const next = i + 1 < frames.length ? frames[i + 1].t : Math.max(end, f.t + 1);
    return "file '" + f.file.split(path.sep).join('/') + "'\nduration " + Math.max(0.01, next - f.t).toFixed(3);
  });
  lines.push("file '" + frames[frames.length - 1].file.split(path.sep).join('/') + "'");
  fs.writeFileSync(path.join(OUT, 'frames.txt'), lines.join('\n') + '\n');
  console.log(frames.length, 'frames');

  await context.close();
  await browser.close();
  console.log('video saved in', OUT);
})().catch(e => { console.error(e); process.exit(1); });
