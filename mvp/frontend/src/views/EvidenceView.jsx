import { useRef, useState } from "react";
import { Download, FileCheck2, History, Upload } from "lucide-react";
import { useApp } from "../store.jsx";
import { Field, Kpi, Note, PageHead, Section, Tag } from "../components/ui.jsx";
import { fmt } from "../utils";

const DECISION = {
  GO: { tone: "ok", tag: "good", title: "Go: a live pilot is worth testing" },
  NO_GO: { tone: "err", tag: "bad", title: "No-go: the measured gap is below the gate" },
  NOT_DECIDED: { tone: "warn", tag: "warn", title: "Not decided yet: not enough comparable weeks" },
};

function GateBar({ pct, gate, max }) {
  if (pct == null) return <span className="text-slate-400">n/a</span>;
  const scale = Math.max(max, gate * 1.5, 0.1);
  const w = Math.max(0, Math.min(100, (pct / scale) * 100));
  const g = (gate / scale) * 100;
  return (
    <div className="relative h-3 w-40 rounded bg-slate-100" aria-hidden="true">
      <div className={"h-3 rounded " + (pct >= gate ? "bg-emerald-500" : "bg-amber-500")} style={{ width: w + "%" }} />
      <div className="absolute -top-1 h-5 w-0.5 bg-slate-700" style={{ left: g + "%" }} title={`gate ${gate}%`} />
    </div>
  );
}

function Weeks({ ev }) {
  const s = ev.summary;
  const max = Math.max(...ev.rows.map((r) => r.saving_pct || 0));
  return (
    <div className="card mt-4 overflow-x-auto">
      <table className="tbl" aria-label="Replayed weeks">
        <thead><tr><th>Week</th><th>Actual plan</th><th>Verified plan</th><th>Saving</th><th>%</th><th>Against the {s.gate_pct}% gate</th><th>Note</th></tr></thead>
        <tbody>
          {ev.rows.map((r) => (
            <tr key={r.period}>
              <td className="font-medium text-slate-900">{r.period}</td>
              <td>{fmt(r.actual)}</td><td>{fmt(r.optimised)}</td><td>{fmt(r.saving)}</td>
              <td>{r.saving_pct == null ? "n/a" : fmt(r.saving_pct, 2) + "%"}</td>
              <td><GateBar pct={r.saving_pct} gate={s.gate_pct} max={max} /></td>
              <td className="text-slate-500">{r.note || (r.saving_pct == null ? "" : "comparable")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const money = (v) => (v == null || !isFinite(v) ? "n/a" : "€" + fmt(Math.round(v)));

function BusinessCase({ measured }) {
  const [low, setLow] = useState(5000000);
  const [high, setHigh] = useState(10000000);
  const [cost, setCost] = useState(40000);
  const [pctIn, setPctIn] = useState(null);
  const pct = pctIn ?? measured ?? 2;
  const rows = [["Low estimate", low], ["High estimate", high]].map(([label, base]) => ({
    label, base,
    breakEven: base > 0 ? (cost / base) * 100 : null,
    atMeasured: base * pct / 100,
    atGate: base * 0.02,
  }));
  return (
    <div className="card card-pad">
      <div className="grid gap-4 sm:grid-cols-4">
        <Field label="Relevant logistics cost per year, low (€)"><input className="input" type="number" min={0} step={500000} value={low} onChange={(e) => setLow(+e.target.value)} /></Field>
        <Field label="Relevant logistics cost per year, high (€)"><input className="input" type="number" min={0} step={500000} value={high} onChange={(e) => setHigh(+e.target.value)} /></Field>
        <Field label="Replay pilot cost (€)"><input className="input" type="number" min={0} step={5000} value={cost} onChange={(e) => setCost(+e.target.value)} /></Field>
        <Field label={measured != null ? "Saving rate (%) · measured" : "Saving rate (%)"}><input className="input" type="number" min={0} step={0.1} value={pct} onChange={(e) => setPctIn(+e.target.value)} /></Field>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="tbl" aria-label="Business case">
          <thead><tr><th /><th>Logistics cost per year</th><th>Break-even</th><th>Saving per year at {fmt(pct, 2)}%</th><th>Saving per year at the 2% gate</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <td className="font-medium text-slate-900">{r.label}</td>
                <td>{money(r.base)}</td>
                <td>{r.breakEven == null ? "n/a" : fmt(r.breakEven, 2) + "% of cost"}</td>
                <td>{money(r.atMeasured)}</td>
                <td>{money(r.atGate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="hint mt-3">The replay cost buys a decision, not the whole solution. Break-even is the saving rate that pays it back once; a saving repeats every year. All figures are estimates from stated assumptions, not a quote. The €5–10M range is the team's Round 1 assumption, to be replaced with Company A data in week 1.</p>
    </div>
  );
}

function CodeMap({ ev }) {
  const { codeMap, checkCodeMap, busy } = useApp();
  const ref = useRef(null);
  const [file, setFile] = useState(null);
  const useSample = async () => {
    const r = await fetch("/examples/crm-code-map-sample.csv");
    checkCodeMap(new File([await r.blob()], "crm-code-map-sample.csv", { type: "text/csv" }), ev.zones);
  };
  const m = codeMap;
  return (
    <div className="card card-pad">
      <p className="text-sm text-slate-600">Delivery-zone codes in the weekly files come from the CRM. Before Salesforce exports replace Dynamics exports, every code used in these weeks needs exactly one new code. Upload a CSV with the columns <code>dynamics_id</code> and <code>salesforce_id</code>.</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <input ref={ref} id="code-map-file" type="file" accept=".csv" aria-label="Choose a code map CSV" className="sr-only" onChange={(e) => setFile(e.target.files[0] || null)} />
        <label htmlFor="code-map-file" className="btn btn-secondary cursor-pointer">Choose code map</label>
        <button type="button" className="btn btn-primary" disabled={!file || busy} onClick={() => checkCodeMap(file, ev.zones)}><FileCheck2 size={16} aria-hidden="true" /> Check code map</button>
        <button type="button" className="btn btn-ghost" disabled={busy} onClick={useSample}>Use sample code map</button>
        {file && <span className="text-sm text-slate-500">{file.name}</span>}
        <a className="btn btn-ghost" href="/examples/crm-code-map-sample.csv" download>Download sample</a>
      </div>
      {m && m.error && <Note tone="err">{m.error}</Note>}
      {m && !m.error && (
        <div>
          <Note tone={m.ok ? "ok" : "warn"}>
            {m.ok ? `Code map complete: all ${m.used} zone codes used in these weeks have exactly one Salesforce code.`
              : `Code map not ready: ${m.mapped} of ${m.used} zone codes mapped.`}
          </Note>
          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            {m.unmapped.length > 0 && <li><Tag tone="bad">Unmapped</Tag> {m.unmapped.join(", ")}</li>}
            {Object.keys(m.conflicts).length > 0 && <li><Tag tone="bad">Two new codes</Tag> {Object.entries(m.conflicts).map(([k, v]) => `${k} → ${v.join(" / ")}`).join("; ")}</li>}
            {m.empty_rows.length > 0 && <li><Tag tone="bad">Incomplete rows</Tag> line {m.empty_rows.join(", ")}</li>}
            {Object.keys(m.merged).length > 0 && <li><Tag tone="warn">Merged</Tag> {Object.entries(m.merged).map(([k, v]) => `${v.join(" + ")} → ${k}`).join("; ")} (check that the zones really are the same)</li>}
            {m.unused.length > 0 && <li><Tag tone="neutral">Not used in these weeks</Tag> {m.unused.join(", ")}</li>}
          </ul>
        </div>
      )}
    </div>
  );
}

function csvCell(v) {
  const s = v == null ? "" : String(v);
  return /[",\n]/.test(s) ? '"' + s.replaceAll('"', '""') + '"' : s;
}

function downloadReport(ev, codeMap) {
  const s = ev.summary;
  const lines = [
    ["Nordic Flow pilot evidence report"],
    ["Data", ev.source === "sample:history" ? "Synthetic sample weeks (not Company A data, not a forecast)" : "Uploaded weeks"],
    ["Decision", s.decision], ["Reasons", s.reasons.join(" ")],
    ["Gate", `at least ${s.gate_pct}% lower than the actual plan over at least ${s.min_weeks} comparable weeks`],
    ["Comparable weeks", `${s.comparable} of ${s.weeks}`],
    ["Total actual", s.total_actual], ["Total verified", s.total_optimised], ["Total saving", s.total_saving], ["Total %", s.total_pct],
    ["Min %", s.min_pct], ["Median %", s.median_pct], ["Max %", s.max_pct],
    [],
    ["week", "actual", "verified", "saving", "saving_pct", "note"],
    ...ev.rows.map((r) => [r.period, r.actual, r.optimised, r.saving, r.saving_pct, r.note]),
  ];
  if (codeMap && !codeMap.error) {
    lines.push([], ["CRM code map", codeMap.ok ? "complete" : "not ready"], ["Unmapped", codeMap.unmapped.join(" ")],
      ["Conflicts", Object.keys(codeMap.conflicts).join(" ")]);
  }
  lines.push([], ["Costs are in cost units. Planner time and on-time delivery are not measured by replay; they are measured in a live pilot."]);
  const blob = new Blob([lines.map((l) => l.map(csvCell).join(",")).join("\n") + "\n"], { type: "text/csv" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "nordic-flow-pilot-evidence.csv";
  document.body.append(a); a.click(); a.remove();
}

export default function EvidenceView() {
  const { evidence: ev, codeMap, loadEvidenceSample, uploadEvidence, busy } = useApp();
  const ref = useRef(null);
  const [files, setFiles] = useState([]);
  const s = ev && ev.summary;
  const d = s && DECISION[s.decision];
  return (
    <div>
      <PageHead title="Pilot evidence" lead="Replay several past weeks against the plans that were really shipped, then decide whether a live pilot is worth it.">
        {ev && <button type="button" className="btn btn-secondary" onClick={() => downloadReport(ev, codeMap)}><Download size={16} aria-hidden="true" /> Download report</button>}
      </PageHead>
      <Note tone="info">One ZIP per past week: the usual input files plus <code>actual_plan.csv</code>. Every week is checked with the same independent verifier; a week whose actual plan cannot be verified is left out, never counted. Nothing is sent to any system.</Note>

      <Section title="Past weeks" hint="Use the four synthetic sample weeks or upload your own.">
        <div className="card card-pad flex flex-wrap items-center gap-2">
          <button type="button" className="btn btn-primary" disabled={busy} onClick={loadEvidenceSample}><History size={16} aria-hidden="true" /> Use the 4 sample weeks</button>
          <input ref={ref} id="evidence-files" type="file" multiple accept=".zip" aria-label="Choose week ZIP files" className="sr-only" onChange={(e) => setFiles([...e.target.files])} />
          <label htmlFor="evidence-files" className="btn btn-secondary cursor-pointer">Choose week ZIPs</label>
          <button type="button" className="btn btn-secondary" disabled={!files.length || busy} onClick={() => uploadEvidence(files)}><Upload size={16} aria-hidden="true" /> Replay {files.length || ""} week{files.length === 1 ? "" : "s"}</button>
          {files.length > 0 && <span className="text-sm text-slate-500">{files.map((f) => f.name).join(", ")}</span>}
        </div>
      </Section>

      {ev && (
        <>
          {ev.source === "sample:history" && <Note tone="warn">Synthetic sample weeks: this shows that the measurement works. It is not Company A data and not a forecast.</Note>}
          <Note tone={d.tone}>
            <div className="font-semibold">{d.title}</div>
            {s.reasons.map((r) => <div key={r}>{r}</div>)}
            <div className="mt-1 text-xs opacity-80">Gate: at least {s.gate_pct}% lower than the actual plan over at least {s.min_weeks} comparable weeks. A person makes the decision; replay does not measure planner time or on-time delivery.</div>
          </Note>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Kpi label="Decision" big tone={s.decision === "GO" ? "good" : s.decision === "NO_GO" ? "bad" : "default"} value={s.decision.replace("_", "-")} sub={`gate ≥ ${s.gate_pct}%`} />
            <Kpi label="Saving over all weeks" tone="brand" value={s.total_pct == null ? "n/a" : fmt(s.total_pct, 2) + "%"} sub={s.total_saving == null ? "no comparable week" : `${fmt(s.total_saving)} of ${fmt(s.total_actual)} cost units`} />
            <Kpi label="Range per week" value={s.min_pct == null ? "n/a" : `${fmt(s.min_pct, 1)}–${fmt(s.max_pct, 1)}%`} sub={s.median_pct == null ? "" : `median ${fmt(s.median_pct, 2)}%`} />
            <Kpi label="Comparable weeks" value={`${s.comparable} of ${s.weeks}`} sub={`at least ${s.min_weeks} needed`} />
          </div>
          <Weeks ev={ev} />
        </>
      )}

      <Section title="Business case" hint="What the measured gap is worth per year, and the saving rate that pays back the replay.">
        <BusinessCase measured={s ? s.total_pct : null} />
      </Section>

      <Section title="CRM code map check (Dynamics 365 → Salesforce)" hint="Keeps past weeks from Dynamics and later weeks from Salesforce comparable.">
        {ev ? <CodeMap ev={ev} /> : <div className="card card-pad text-sm text-slate-500">Replay some weeks first; the check uses the zone codes in those weeks.</div>}
      </Section>
    </div>
  );
}
