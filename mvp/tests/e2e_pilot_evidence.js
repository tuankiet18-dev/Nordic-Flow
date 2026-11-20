// Pilot evidence page: several replayed weeks -> go / no-go, business case, CRM code map check and report download.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { chromium } = require('playwright');

async function main() {
  const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL });
  try {
    const page = await browser.newPage({ viewport: { width: 1360, height: 1000 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    const base = process.env.BASE_URL || 'http://localhost:8000';
    await page.goto(base);

    // Reachable before any data is loaded.
    await page.getByRole('button', { name: 'Pilot evidence', exact: true }).first().click();
    await page.getByText('Replay some weeks first').waitFor();
    await page.getByRole('button', { name: 'Use the 4 sample weeks' }).click();
    await page.getByText('Go: a live pilot is worth testing').waitFor({ timeout: 90000 });
    await page.getByText('Synthetic sample weeks: this shows').waitFor();
    const table = page.getByRole('table', { name: 'Replayed weeks' });
    for (const pct of ['4.23%', '2.21%', '3.12%']) assert.ok(await table.getByText(pct).first().isVisible());
    assert.ok(await page.getByText('3.16%', { exact: true }).isVisible());
    assert.ok(await page.getByText('4 of 4', { exact: true }).isVisible());

    // Business case: €5M and €10M at the measured 3.16% and at the 2% gate.
    const bc = page.getByRole('table', { name: 'Business case' });
    for (const v of ['0.80% of cost', '0.40% of cost', '€158,000', '€316,000', '€100,000', '€200,000']) {
      assert.ok(await bc.getByText(v).isVisible(), v);
    }
    await page.getByLabel('Replay pilot cost (€)').fill('50000');
    assert.ok(await bc.getByText('1.00% of cost').isVisible());

    // CRM code map: sample is complete; a map missing a zone is flagged.
    await page.getByRole('button', { name: 'Use sample code map' }).click();
    await page.getByText('Code map complete: all 6 zone codes').waitFor();
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'nf-map-'));
    const bad = path.join(tmp, 'map.csv');
    fs.writeFileSync(bad, 'dynamics_id,salesforce_id\nZ1,SE-1\nZ1,SE-9\nZ2,SE-2\nZ3,SE-3\nZ4,SE-4\nZ5,SE-5\n');
    await page.setInputFiles('#code-map-file', bad);
    await page.getByRole('button', { name: 'Check code map' }).click();
    await page.getByText('Code map not ready: 5 of 6 zone codes mapped.').waitFor();
    assert.match(await page.locator('li', { hasText: 'Unmapped' }).innerText(), /Z6/);
    assert.match(await page.locator('li', { hasText: 'Two new codes' }).innerText(), /Z1 → SE-1 \/ SE-9/);

    // Report download.
    const [dl] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: 'Download report' }).click()]);
    const report = fs.readFileSync(await dl.path(), 'utf8');
    assert.match(report, /Decision,GO/);
    assert.match(report, /week-2,33812,33066,746,2\.21/);
    assert.match(report, /CRM code map,not ready/);
    assert.match(report, /not Company A data, not a forecast/);

    // Uploading one week only: not decided.
    const zip = path.resolve(__dirname, '../frontend/public/examples/history-week-1.zip');
    await page.setInputFiles('#evidence-files', zip);
    await page.getByRole('button', { name: /Replay 1 week/ }).click();
    await page.getByText('Not decided yet: not enough comparable weeks').waitFor();
    assert.ok(await page.getByText('1 comparable week(s); the gate needs at least 4.').isVisible());

    // Results page links to the gate for a single replay week.
    await page.getByRole('button', { name: /Data/ }).first().click();
    await page.getByRole('button', { name: 'History replay' }).click();
    await page.getByRole('button', { name: 'Calculate plan' }).click();
    await page.getByText('This week alone: 4.2% lower.').waitFor();
    await page.getByRole('button', { name: 'Pilot evidence', exact: true }).last().click();
    await page.getByRole('heading', { name: 'Pilot evidence' }).waitFor();

    // Audit trail records the evidence and the code map checks.
    const events = await (await page.request.get(base + '/api/audit')).json();
    assert.ok(events.some(e => e.type === 'EVIDENCE_COMPUTED'));
    assert.ok(events.some(e => e.type === 'CODE_MAP_CHECKED'));
    assert.equal((await (await page.request.get(base + '/api/audit/verify')).json()).ok, true);

    // Mobile layout: no horizontal page scroll.
    await page.setViewportSize({ width: 390, height: 900 });
    await page.getByRole('heading', { name: 'Pilot evidence' }).waitFor();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    assert.ok(overflow <= 1, 'horizontal overflow ' + overflow);

    assert.deepEqual(errors, []);
    console.log('PASS: pilot evidence GO over 4 sample weeks, business case, code map complete and incomplete, report, single-week not decided, results link, audit and mobile layout');
  } finally {
    await browser.close();
  }
}

main().catch(e => { console.error(e); process.exit(1); });
