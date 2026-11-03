import { Section } from "@/components/site/Layout";

const STATS = [
  ["100+", "AI use cases deployed across 40+ Abu Dhabi Government entities", "DGE – Abu Dhabi"],
  ["200+", "AI use cases in DGE's pipeline, with 100+ already in use", "DGE & Inception, May 2026"],
  ["90+", "Languages TAMM serves residents in", "DGE 2025 highlights, Jan 2026"],
  ["50%", "Of government sectors, services and operations to move to agentic AI within two years", "UAE Government, 23 April 2026"],
] as const;

export function UAEContext() {
  return (
    <>
      <Section
        eyebrow="Arabic AI in the UAE"
        title={<>Arabic AI is already running <span className="text-gradient">at scale</span> in the UAE</>}
        intro="Abu Dhabi's public sector is expanding its use of AI across government services and operations — and language quality and contextual accuracy now matter at scale."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map(([n, t, s]) => (
            <div key={n} className="panel p-7 topline">
              <p className="font-display text-5xl font-bold text-gradient">{n}</p>
              <p className="mt-4">{t}</p>
              <p className="mt-4 font-display text-[11px] tracking-widest text-muted-foreground">{s.toUpperCase()}</p>
            </div>
          ))}
        </div>
        <figure className="mt-10 border-l-2 border-primary pl-6 md:pl-8">
          <blockquote className="text-xl md:text-2xl">
            50% of government services in the UAE will be through AI agents, with continuous monitoring and audit — and AI must earn trust before it is given wider authority.
          </blockquote>
          <p className="mt-6 font-arabic text-lg text-primary" dir="rtl">50% من الخدمات الحكومية عبر وكلاء الذكاء الاصطناعي خلال عامين</p>
          <figcaption className="mt-2 text-sm text-muted-foreground">Al Bayan</figcaption>
        </figure>
      </Section>
      <Section eyebrow="What this means for testing" title="One wrong answer now reaches more people.">
        <div className="grid gap-8 text-muted-foreground md:grid-cols-2">
          <p>As more Arabic and bilingual services are handled by AI, one wrong, invented or culturally off answer reaches more people. Arabic AI systems need to understand official terminology, preserve the meaning of government communications and handle Arabic and English consistently.</p>
          <p>Independent evaluation gives organisations evidence about where a system is reliable and where it needs human review. These figures are contextual indicators, not evidence of an endorsement or a specific procurement requirement.</p>
        </div>
      </Section>
    </>
  );
}