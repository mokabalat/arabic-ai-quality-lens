import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CTA, PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "LLM Evaluation Services for Arabic AI | Arabic AI Quality" },
      { name: "description", content: "LLM evaluation services in Arabic and English: benchmarking, hallucination and terminology testing, translation evaluation, chatbot testing and AI model validation." },
      { property: "og:title", content: "LLM Evaluation Services for Arabic AI | Arabic AI Quality" },
      { property: "og:description", content: "Arabic LLM testing & evaluation services: audits, benchmarking, QA methodology, translation and chatbot testing." },
    ],
  }),
  component: Services,
});

const MAIN = [
  {
    code: "A",
    title: "Arabic LLM Quality Audit",
    text: "Arabic AI responses evaluated for accuracy, fluency, cultural relevance, terminology and hallucinations.",
    points: ["Grammar, spelling and fluency", "Meaning and factual accuracy", "Formal and informal Arabic", "Emirati and other selected dialects", "Cultural and contextual relevance", "Government and institutional terminology", "Hallucinations and unsupported claims", "Instruction-following and response consistency"],
    deliver: "Evaluation report, scoring framework, documented errors and improvement recommendations.",
  },
  {
    code: "B",
    title: "Arabic–English AI Benchmarking",
    text: "AI models compared on identical Arabic and bilingual test cases, so results are comparable.",
    points: ["Arabic ↔ English translation", "Meaning preservation", "Bilingual answer consistency", "Terminology accuracy", "Arabic question comprehension", "Mixed Arabic–English input", "Instruction-following in both languages"],
    deliver: "Comparative scoring matrix, prompt-level findings and benchmark report.",
  },
  {
    code: "C",
    title: "Arabic AI QA Methodology",
    text: "Evaluation frameworks, scoring rubrics, test datasets and quality reports for your AI project.",
    points: ["Evaluation methodology", "Prompt and test-case development", "Scoring criteria and weighted rubrics", "Criterion applicability maps", "Error classification and severity levels", "Evaluation workbooks", "Quality assurance reports"],
    deliver: "A repeatable framework your team can run before launch and after every change.",
  },
];

const DETAIL = [
  ["Arabic LLM evaluation", "We score the quality of Arabic outputs against a published rubric: linguistic quality, meaning and factual accuracy, instruction-following, terminology, completeness and consistency, and safety. Reviewers read the Arabic; they do not rely on automated metrics alone."],
  ["Arabic LLM testing", "We design the test cases: proofreading, editing, register and dialect, translation, terminology control, ambiguity, formatting limits and embedded instructions. The same prompts go to every model."],
  ["LLM quality assurance (Arabic LLM QA)", "Arabic LLM QA is our shorthand for Arabic LLM quality assurance: repeatable checks you can run before launch and after every model or prompt change. AI quality assurance applied specifically to Arabic output."],
  ["AI model validation & evaluation", "Before a model goes into a service, we test it against your use case, your terminology and your communication style, and tell you where human review is still needed. We also compare candidate models side by side."],
  ["Arabic AI translation evaluation", "We test whether translation preserves meaning, terminology, tone and purpose — especially in official decisions, eligibility conditions, service descriptions and marketing — and flag omissions, additions and misleading wording."],
  ["Generative AI testing", "We test generative systems for invented facts, invented procedures, unsupported claims, biased or culturally inappropriate answers, and inconsistent answers to the same question in Arabic and English."],
  ["Arabic chatbot testing", "We test Arabic and bilingual chatbots with realistic questions, mixed-language input, dialect, ambiguous wording, UAE-related queries and attempts to override instructions, and report failures with the exact output."],
  ["Arabic AI & Super Intelligence evaluation", "If your organisation or vendor uses the term Super Intelligence (SI), the work is the same: we evaluate the system's Arabic performance, whatever it is called."],
];

const CAPS = ["Arabic/English LLM benchmarking", "AI human evaluation", "AI hallucination testing", "AI translation evaluation", "AI terminology accuracy", "AI bilingual consistency", "Response-quality scoring", "Evaluation reports and recommendations", "Citation accuracy and source grounding", "RAG evaluation (on request)", "AI-agent evaluation (on request)"];

const WHAT = [
  ["Arabic translation", "Does the AI translate Arabic correctly, including official decisions?"],
  ["Arabic understanding", "Does it understand Arabic questions and mixed Arabic–English input?"],
  ["Consistency", "Does it give the same answer in Arabic and English?"],
  ["Citations", "Does it cite sources correctly?"],
  ["UAE terminology", "Does it understand Emirati and UAE usage?"],
  ["Register and dialect", "Does it separate formal from informal Arabic and handle dialects?"],
  ["Government terminology", "Does it use approved terms correctly?"],
  ["Cultural fit", "Does it avoid culturally inappropriate answers?"],
  ["Hallucination", "Does it invent a government procedure?"],
  ["Style and instructions", "Does it follow instructions and the approved communication style?"],
  ["Responsible AI", "Does it resist inappropriate requests?"],
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Arabic LLM Testing & Evaluation Services"
        title={<>LLM evaluation services for <span className="text-gradient">Arabic and bilingual AI</span></>}
        intro="Each engagement ends with a written report, a scored workbook and a log of every error with its evidence."
      />

      <Section eyebrow="Core services">
        <div className="grid gap-6 lg:grid-cols-3">
          {MAIN.map((s) => (
            <div key={s.title} className="panel panel-hover flex flex-col p-8 topline">
              <span className="font-display text-5xl font-bold text-primary/30">{s.code}</span>
              <h3 className="mt-2 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{p}</li>
                ))}
              </ul>
              <p className="mt-auto pt-6 text-sm text-muted-foreground"><span className="font-display text-xs tracking-widest text-violet">DELIVERABLES · </span>{s.deliver}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="In detail" title="How each service works">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {DETAIL.map(([t, d]) => (
            <div key={t} className="bg-card p-8">
              <h3 className="text-lg font-semibold text-primary">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="What we test" title="Questions we answer about your AI">
        <div className="panel overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-surface font-display text-xs tracking-widest text-primary">
              <tr><th className="p-4">AREA</th><th className="p-4">THE QUESTION WE ANSWER</th></tr>
            </thead>
            <tbody>
              {WHAT.map(([a, q]) => (
                <tr key={a} className="border-t border-border"><td className="p-4 font-semibold">{a}</td><td className="p-4 text-muted-foreground">{q}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="Capabilities" title="Everything we can evaluate">
        <div className="flex flex-wrap gap-3">
          {CAPS.map((c) => (
            <span key={c} className="rounded-full border border-primary/30 bg-surface px-4 py-2 text-sm">{c}</span>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">RAG and AI-agent evaluations require suitable system access and technical arrangements. Our pilot demonstrates prompt-based model evaluation.</p>
      </Section>

      <CTA />
    </>
  );
}
