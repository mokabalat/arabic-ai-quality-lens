import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Cpu, Languages, MessageSquareText, ShieldCheck, ScanSearch, FileCheck2, Scale, ListChecks, BookA, Layers } from "lucide-react";
import { CTA, CircuitLines, Section } from "@/components/site/Layout";
import { OrbitGraphic } from "@/components/site/OrbitGraphic";
import { CRITERIA, MODELS } from "@/content/data";
import { ScoreBars } from "@/components/site/ScoreBars";
import { UAEContext } from "@/components/site/UAEContext";
import { CountUp } from "@/components/site/AnimatedData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Arabic LLM Evaluation & QA | Arabic AI Quality" },
      { name: "description", content: "Independent Arabic LLM evaluation and AI quality assurance for UAE organisations: accuracy, terminology, hallucination and responsible AI testing." },
      { property: "og:title", content: "Arabic LLM Evaluation & QA | Arabic AI Quality" },
      { property: "og:description", content: "Arabic LLMs measured with care. Independent Arabic AI testing, linguistic evaluation and quality assessment in the UAE." },
      { property: "og:url", content: "https://arabicaiquality.com" },
      { property: "og:image", content: "https://arabicaiquality.com/og-image.png" },
      { name: "twitter:image", content: "https://arabicaiquality.com/og-image.png" },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { Icon: ScanSearch, title: "Arabic LLM Quality Audit", text: "We evaluate Arabic AI responses for accuracy, fluency, cultural relevance, terminology and hallucinations." },
  { Icon: Scale, title: "Arabic–English AI Benchmarking", text: "We compare AI models using a structured set of Arabic and bilingual test cases." },
  { Icon: FileCheck2, title: "Arabic AI QA Methodology", text: "We develop evaluation frameworks, scoring rubrics, test datasets and quality reports for AI projects." },
];

const CRITERIA_ICONS = [BookA, Languages, ListChecks, Layers, FileCheck2, ShieldCheck];

const AUDIENCE = [
  "Government and semi-government entities",
  "AI solution providers and technology companies",
  "Organisations deploying Arabic chatbots and virtual assistants",
  "Developers of Arabic and bilingual AI applications",
  "Translation, localisation and language technology providers",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 tech-grid" />
        <div className="absolute inset-0 glow-bg" />
        <CircuitLines />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-28 pt-20 lg:grid-cols-[1.2fr_1fr] lg:pt-28">
          <div>
            <p className="eyebrow mb-6">Arabic LLMs · measured with care</p>
            <h1 className="text-5xl font-bold leading-[1.05] md:text-7xl">
              Arabic LLM <span className="text-gradient">Evaluation</span> & Quality Assurance
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Independent Arabic AI testing, linguistic evaluation and quality assessment — for assistants, chatbots and translation workflows across the UAE.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact/" className="btn-primary">Request an evaluation <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 font-display text-xs tracking-[0.25em] text-muted-foreground">
               <span>· EVALUATING LLM MODELS</span><span>· VARIOUS PROMPTS</span><span>· WEIGHTED CRITERIA</span>
            </div>
          </div>
          <OrbitGraphic />
        </div>
      </section>

      {/* Intro */}
      <Section eyebrow="Can people rely on what it says in Arabic?" title="Arabic generative AI is moving into government and business services. We test whether it deserves that trust.">
        <div className="grid gap-8 text-muted-foreground md:grid-cols-2">
          <p>
              Arabic AI Quality carries out Arabic AI evaluation for assistants, chatbots, Arabic conversational AI and translation workflows. We check Arabic and Arabic–English outputs for accuracy, fluency, terminology, cultural fit and hallucination, score them against a fixed rubric, and report what we found with the evidence behind it.
          </p>
          <p>
            Whatever the system — from an ArabicGenAI assistant to an internal drafting tool — the question is the same. AI can produce fluent Arabic while still misunderstanding a question, changing the meaning of an official communication or inventing a government procedure.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section eyebrow="What we do" title="Three core services, one goal: Arabic you can trust.">
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map(({ Icon, title, text }) => (
            <div key={title} className="panel panel-hover p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/40 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
        <Link to="/services/" className="mt-8 inline-flex items-center gap-2 font-display text-sm text-primary">All services <ArrowRight className="h-4 w-4" /></Link>
      </Section>

      {/* Why Arabic */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Why Arabic needs its own testing</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Arabic is not an afterthought.</h2>
            <p className="mt-6 text-muted-foreground">
              A model that performs well in English can still fail in Arabic: in dialect, in formal register, in official terminology, or when a sentence mixes both languages. Only a test built for Arabic, with a reviewer who masters Arabic, catches it.
            </p>
          </div>
          <div className="panel p-8 topline">
            <p className="font-display text-xs tracking-widest text-destructive">Q04 · CRITICAL · FROM OUR PILOT</p>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Source meaning</p>
                <p className="mt-1 text-lg">Service available to <span className="text-primary">eligible UAE residents</span></p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Model translation said</p>
                <p className="mt-1 font-arabic text-lg" dir="rtl">يُقدم الخدمة ل <span className="text-destructive">اللاجئين</span> المقيمين في الإمارات…</p>
                <p className="mt-1 text-sm text-muted-foreground">“…for accepted refugees residing in the UAE”</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Nothing in English-language scores would have shown that.</p>
          </div>
        </div>
      </section>

      {/* Six criteria */}
      <Section eyebrow="What we test" title="Six weighted criteria, set before any output is scored.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CRITERIA.map((c, i) => {
            const Icon = CRITERIA_ICONS[i] ?? BookA;
            return (
              <div key={c.name} className="panel panel-hover flex items-center gap-5 p-6">
                <Icon className="h-7 w-7 shrink-0 text-primary" />
                <div className="flex-1">
                  <p className="font-display font-semibold">{c.name}</p>
                </div>
                <CountUp value={c.weight} suffix="%" className="font-display text-2xl font-bold text-violet" />
              </div>
            );
          })}
        </div>
      </Section>

      {/* Pilot */}
      <Section eyebrow="Pilot at a glance · October 2026" title={<><CountUp value={15} /> prompts. <CountUp value={3} /> models. <CountUp value={6} /> weighted criteria.</>}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <p className="text-muted-foreground">
            Our completed Arabic LLM Evaluation Benchmark pilot scored three models on the same 15 Arabic and bilingual prompts, using a 0–4 scale. These are results from the specific pilot test set and configurations — not universal model rankings or certification.
          </p>
          <div className="panel p-8">
            <ScoreBars items={MODELS.map((m) => ({ label: m.name, value: m.score, color: m.color }))} />
          </div>
        </div>
      </Section>

      {/* Audience */}
      <Section eyebrow="Who we support" title="Built for organisations putting Arabic AI in front of people.">
        <div className="grid gap-4 md:grid-cols-5">
          {AUDIENCE.map((a, i) => {
            const Icon = [Building2, Cpu, MessageSquareText, Layers, Languages][i] ?? Cpu;
            return (
              <div key={a} className="panel p-6">
                <Icon className="mb-4 h-6 w-6 text-primary" />
                <p className="text-sm">{a}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Naming note */}
      <Section>
        <div className="panel p-8 md:p-10">
          <p className="eyebrow mb-3">A note on names: AI, LLM and Super Intelligence (SI)</p>
          <p className="max-w-4xl text-muted-foreground">
            In late September 2026 a US executive order directed federal agencies to use the terms Super Intelligence and SI in place of artificial intelligence and AI in official documents, defining them as the same technologies. We use whichever term our clients use. Arabic AI evaluation and Arabic Super Intelligence evaluation describe the same work: testing how reliably these systems perform in Arabic.
          </p>
        </div>
      </Section>

      <UAEContext />
      <CTA />
    </>
  );
}
