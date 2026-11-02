import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHero, Section } from "@/components/site/Layout";
import { CRITERIA, SCALE } from "@/content/data";
import slide3 from "@/assets/report/slide-3.jpg.asset.json";

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      { title: "AI Model Evaluation Methodology | Arabic AI Quality" },
      { name: "description", content: "How we run AI model evaluation: fixed prompts, six weighted criteria, a 0–4 scale, severity caps and an error log for every finding." },
      { property: "og:title", content: "AI Model Evaluation Methodology | Arabic AI Quality" },
      { property: "og:description", content: "A method you can inspect: fixed prompts, six weighted criteria, a 0–4 scale and severity caps." },
    ],
  }),
  component: Methodology,
});

const RULES = [
  "The same prompts go to every model.",
  "Which criteria apply to which prompt is fixed in advance and identical across models.",
  "Scores are whole numbers from 0 to 4.",
  "Every distinct error is logged with the exact output, a reference and a severity.",
  "Only prompts completed by all models are compared.",
  "Limits are stated with the results.",
];

const PROCESS = [
  ["Define the scope", "Identify the AI models, intended use, language requirements and testing objectives."],
  ["Design the test prompts", "Prepare structured Arabic and bilingual test cases relevant to the intended application."],
  ["Fix the criteria", "Set the scoring rubric, weights, applicable criteria and severity rules before reviewing outputs."],
  ["Run the tests", "Run the same approved prompts under documented conditions and record model responses."],
  ["Score & log errors", "Score responses, record evidence and classify every error by severity."],
  ["Report", "Present results, comparisons, limitations and practical recommendations."],
];

function Methodology() {
  return (
    <>
      <PageHero
        eyebrow="AI model evaluation methodology"
        title={<>A method you can <span className="text-gradient">inspect</span></>}
        intro="Our approach to AI model evaluation is deliberately simple to audit. Every rule below is set before any model output is scored."
      />

      <Section eyebrow="Rules">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RULES.map((r, i) => (
            <div key={r} className="panel p-6">
              <span className="font-display text-sm text-primary">0{i + 1}</span>
              <p className="mt-2">{r}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Our evaluation process" title="Six steps, from scope to report">
        <ol className="relative grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {PROCESS.map(([t, d], i) => (
            <li key={t} className="relative">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary bg-surface font-display font-bold text-primary">{i + 1}</div>
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Weighted evaluation · weights total 100%" title="Six weighted criteria">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            {CRITERIA.map((c) => (
              <div key={c.name}>
                <div className="mb-2 flex justify-between"><span>{c.name}</span><span className="font-display font-bold text-primary">{c.weight}%</span></div>
                <div className="h-2 rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${c.weight * 4}%` }} /></div>
              </div>
            ))}
          </div>
          <figure className="panel overflow-hidden">
            <img src={slide3.url} alt="Six weighted criteria slide from the Arabic LLM evaluation methodology report" className="w-full" loading="lazy" />
            <figcaption className="p-4 text-xs text-muted-foreground">From the Arabic LLM Evaluation Methodology report</figcaption>
          </figure>
        </div>
      </Section>

      <Section eyebrow="The 0–4 scale" title="Whole numbers, clear anchors">
        <div className="grid gap-4 md:grid-cols-5">
          {SCALE.map((s) => (
            <div key={s.score} className="panel p-6">
              <span className="font-display text-5xl font-bold text-gradient">{s.score}</span>
              <p className="mt-3 font-display font-semibold">{s.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.meaning}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Severity and caps" title="Errors that matter, counted once">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="panel p-6 topline"><p className="font-display text-destructive">CRITICAL · caps criterion at 1</p><p className="mt-3 text-muted-foreground">Makes an output unsafe, materially false, legally risky or unusable.</p></div>
          <div className="panel p-6"><p className="font-display text-amber">MAJOR · caps criterion at 2</p><p className="mt-3 text-muted-foreground">Material meaning distortions, omissions, fabricated claims, serious terminology errors or ignored core instructions.</p></div>
          <div className="panel p-6"><p className="font-display text-violet">MINOR</p><p className="mt-3 text-muted-foreground">Objective spelling, grammar or formatting defects. A style preference alone is never an error.</p></div>
        </div>
      </Section>

      <Section eyebrow="How scores are calculated">
        <div className="panel p-8 md:p-10">
          <p className="max-w-4xl text-lg">
            Each prompt's percentage is the weighted sum of its applicable criteria, divided by the total weight of those criteria and by 4. A model's overall score is the mean of its prompt percentages. Rankings are only published when all models completed the same prompts.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
