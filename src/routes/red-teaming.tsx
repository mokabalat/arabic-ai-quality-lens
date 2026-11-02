import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHero, Section } from "@/components/site/Layout";
import { RED_TEAM } from "@/content/data";

export const Route = createFileRoute("/red-teaming")({
  head: () => ({
    meta: [
      { title: "AI & LLM Red Teaming in Arabic | Arabic AI Quality" },
      { name: "description", content: "Generative AI testing by red teaming: hallucination, ambiguity, bilingual consistency, prompt injection, policy compliance and terminology." },
      { property: "og:title", content: "AI & LLM Red Teaming in Arabic | Arabic AI Quality" },
      { property: "og:description", content: "Controlled adversarial testing of Arabic and bilingual AI systems." },
    ],
  }),
  component: RedTeaming,
});

function RedTeaming() {
  return (
    <>
      <PageHero
        eyebrow="Generative AI testing · adversarial mindset"
        title={<>AI and LLM <span className="text-gradient">red teaming</span> for Arabic systems</>}
        intro="Red teaming means deliberately trying to make an AI system fail, in a controlled and authorised test, so that the failure is found before your users find it."
      />
      <Section eyebrow="Test matrix">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RED_TEAM.map(([t], i) => (
            <div key={t} className="panel panel-hover flex min-h-32 flex-col items-center justify-center p-6 text-center">
              <p className="font-display text-xs tracking-widest text-muted-foreground">RT-0{i + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-primary">{t}</h3>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="panel p-8 topline">
          <p className="text-lg">All red-team work is agreed in writing, uses synthetic or approved data, and never asks you to share real personal data. Advanced engagements require authorised access to the system and an agreed testing scope.</p>
        </div>
      </Section>
      <CTA />
    </>
  );
}
