import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Arabic AI Quality | Arabic LLM Evaluation Specialist" },
      { name: "description", content: "Arabic AI Quality is an independent consultancy based in the UAE, specialising in Arabic AI and Arabic large language model evaluation for organisations, AI teams and researchers." },
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
        intro={<>
          <p>Arabic AI Quality is an independent consultancy based in the UAE. We specialise in Arabic AI and Arabic large language model evaluation for organisations, AI teams and researchers who need a careful, credible assessment.</p>
          <p className="mt-4">The practice is led by an evaluation consultant with professional training in generative AI, LLM evaluation and model performance assessment, focused on Arabic–English quality assurance.</p>
        </>}
      />
      <Section eyebrow="Profile" title="Language expertise meets structured evaluation">
        <div className="grid gap-8 text-muted-foreground md:grid-cols-2">
          <p>We apply structured Arabic–English quality assurance to AI systems used by organisations in the UAE, with careful attention to linguistic accuracy, meaning and local context.</p>
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
