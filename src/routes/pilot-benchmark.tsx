import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHero, Section } from "@/components/site/Layout";
import { ScoreBars } from "@/components/site/ScoreBars";
import { CRITERION_SCORES, ERROR_CASES, MODELS } from "@/content/data";
import s1 from "@/assets/report/slide-1.jpg.asset.json";
import s2 from "@/assets/report/slide-2.jpg.asset.json";
import s3 from "@/assets/report/slide-3.jpg.asset.json";
import s4 from "@/assets/report/slide-4.jpg.asset.json";
import s5 from "@/assets/report/slide-5.jpg.asset.json";
import s6 from "@/assets/report/slide-6.jpg.asset.json";

export const Route = createFileRoute("/pilot-benchmark")({
  head: () => ({
    meta: [
      { title: "Arabic LLM Evaluation Pilot Benchmark | Arabic AI Quality" },
      { name: "description", content: "Results of an independent October 2026 pilot comparing three LLMs on 15 Arabic and bilingual prompts across six weighted criteria." },
      { property: "og:title", content: "Arabic LLM Evaluation Pilot Benchmark | Arabic AI Quality" },
      { property: "og:description", content: "Three models, 15 Arabic prompts, six weighted criteria — results and logged errors." },
    ],
  }),
  component: Pilot,
});

const SETUP = [
  ["Prompt set", "15 prompts, Q01–Q15"],
  ["Models", "3"],
  ["Testing window", "1–31 October 2026"],
  ["Platform", "PocketPal · offline"],
  ["Web search / tools", "Off"],
  ["Criteria", "6 weighted criteria"],
  ["Test dates", "Gemma 1 Oct · Qwen 20 Oct · Llama 31 Oct"],
];

const SLIDES = [
  [s1, "Report cover"],
  [s2, "Test setup"],
  [s3, "Weighted criteria"],
  [s4, "Benchmark results"],
  [s5, "Error log"],
  [s6, "Guardrails & limitations"],
] as const;

const SEV: Record<string, string> = { Critical: "text-destructive border-destructive/50", Major: "text-amber border-amber/50" };

function Pilot() {
  return (
    <>
      <PageHero
        eyebrow="Arabic LLM Evaluation Benchmark · Pilot"
        title={<>Pilot benchmark: three models, <span className="text-gradient">15 Arabic prompts</span></>}
        intro="Three models were tested on the same 15 prompts covering Arabic language quality, translation, factual reliability, UAE communications, instruction-following and responsible AI."
      />

      <Section eyebrow="Test setup">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SETUP.map(([k, v]) => (
            <div key={k} className="bg-card p-6">
              <p className="font-display text-xs tracking-widest text-primary">{k.toUpperCase()}</p>
              <p className="mt-2">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Results" title="Gemma 3 4B leads the pilot">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="panel p-8"><ScoreBars items={MODELS.map((m) => ({ label: m.name, value: m.score, color: m.color }))} /></div>
          <div className="panel overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface font-display text-xs tracking-widest">
                <tr><th className="p-4 text-primary">CRITERION (AVG %)</th><th className="p-4 text-primary">GEMMA</th><th className="p-4 text-violet">QWEN</th><th className="p-4 text-amber">LLAMA</th></tr>
              </thead>
              <tbody>
                {CRITERION_SCORES.map(([c, g, q, l]) => (
                  <tr key={c} className="border-t border-border"><td className="p-4">{c}</td><td className="p-4 text-primary">{g}</td><td className="p-4 text-violet">{q}</td><td className="p-4 text-amber">{l}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section eyebrow="What we found">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="panel p-6 topline"><p className="font-display text-primary">#1 · Gemma 3 4B · 87.78%</p><p className="mt-3 text-muted-foreground">Highest on all six criteria. Still had weak spots — UAE marketing communication (50% on that prompt) and terminology control — so human review remains necessary.</p></div>
          <div className="panel p-6"><p className="font-display text-violet">#2 · Qwen3.5-2B · 44.01%</p><p className="mt-3 text-muted-foreground">About half of Gemma's overall result; would need considerable fine-tuning for Arabic applications.</p></div>
          <div className="panel p-6"><p className="font-display text-amber">#3 · Llama-3.2-3B · 18.15%</p><p className="mt-3 text-muted-foreground">Matched the top score on admitting it lacked a reliable figure, but failed most Arabic writing and translation prompts, including stray non-Arabic characters.</p></div>
        </div>
      </Section>

      <Section eyebrow="Examples from the error log" title="Three logged errors, one model">
        <div className="space-y-6">
          {ERROR_CASES.map((e) => (
            <div key={e.id} className="panel grid gap-6 p-6 md:grid-cols-[200px_1fr_1fr] md:p-8">
              <div>
                <p className="font-display text-3xl font-bold">{e.id}</p>
                <span className={`mt-2 inline-block rounded-full border px-3 py-1 font-display text-xs ${SEV[e.severity]}`}>{e.severity.toUpperCase()}</span>
                <p className="mt-2 text-xs text-muted-foreground">{e.category} · {e.context}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Exact output</p>
                <p className="mt-2 font-arabic text-lg text-destructive/90" dir="rtl">{e.output}</p>
                <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">Reference</p>
                <p className="mt-2 font-arabic text-lg text-primary" dir="rtl">{e.reference}</p>
              </div>
              <p className="text-muted-foreground">{e.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="From the report" title="Inside the evaluation report">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SLIDES.map(([s, cap], i) => (
            <a key={cap} href={s.url} target="_blank" rel="noreferrer" className="panel panel-hover group overflow-hidden">
              <img src={s.url} alt={`Report page ${i + 1}: ${cap}`} className="w-full" loading="lazy" />
              <p className="p-4 font-display text-xs tracking-widest text-muted-foreground group-hover:text-primary">0{i + 1} · {cap.toUpperCase()}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section eyebrow="What this pilot does not show">
        <div className="panel p-8">
          <p className="max-w-4xl text-muted-foreground">
            This is an independent, descriptive pilot for these model versions and settings. It is not a certification, an industry-wide ranking or a guarantee of performance elsewhere. Model settings were not all independently verified, models were tested on different dates, and results may change with model updates. The pilot tested 15 prompts; it does not validate behaviour beyond them. Keep human review for high-impact Arabic outputs.
          </p>
        </div>
      </Section>

      <CTA title="Want this rigour applied to your system?" />
    </>
  );
}
