import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Arabic AI Quality | Arabic LLM Evaluation Specialist" },
      { name: "description", content: "Arabic AI Quality is an independent Arabic LLM evaluation and quality assurance practice in the UAE, specialising in Arabic–English AI quality." },
      { property: "og:title", content: "About Arabic AI Quality | Arabic LLM Evaluation Specialist" },
      { property: "og:description", content: "An independent Arabic AI evaluation specialist focused on language, meaning and context." },
    ],
  }),
  component: About,
});

const BELIEFS = [
  ["Evidence beats impressions.", "Every finding is logged with the exact output and a reference."],
  ["Fluent Arabic is not the same as correct Arabic.", "We read for meaning, terminology and context — not just flow."],
  ["Humans stay in the loop where the stakes are high.", "We tell you where human review is still needed."],
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Arabic AI quality and <span className="text-gradient">LLM evaluation specialist</span></>}
        intro="Arabic AI Quality is a specialist Arabic LLM evaluation and quality assurance practice focused on the language, meaning and context of AI-generated content."
      />
      <Section eyebrow="Profile" title="Language expertise meets structured evaluation">
        <div className="grid gap-8 text-muted-foreground md:grid-cols-2">
          <p>The practice is led by an AI/LLM evaluation consultant with professional training in generative AI, LLM evaluation and AI model performance assessment, specialising in Arabic–English AI quality assurance.</p>
          <p>That expertise rests on a professional background in Arabic–English translation, editing, copywriting, subtitling, public relations and communications — applied to how AI models understand, translate and communicate in Arabic.</p>
        </div>
      </Section>
      <Section eyebrow="What we believe">
        <div className="grid gap-4 md:grid-cols-3">
          {BELIEFS.map(([t, d]) => (
            <div key={t} className="panel p-7 topline">
              <h3 className="text-xl font-semibold">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="How we work">
        <div className="panel p-8">
          <p className="text-lg">Fixed rubric, same prompts for every model, every error logged with evidence, limits stated with the results.</p>
        </div>
      </Section>
      <CTA />
    </>
  );
}
