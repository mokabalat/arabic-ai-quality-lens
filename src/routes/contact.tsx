import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin } from "lucide-react";
import { EMAIL, PageHero, Section, WHATSAPP_URL } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request an Arabic AI Evaluation | Arabic AI Quality" },
      { name: "description", content: "Contact Arabic AI Quality to scope an Arabic LLM evaluation, benchmark or red-team test. Email ai@ArabicAiQuality.com." },
      { property: "og:title", content: "Request an Arabic AI Evaluation | Arabic AI Quality" },
      { property: "og:description", content: "Let's measure your Arabic AI quality." },
    ],
  }),
  component: Contact,
});

const FIELDS = [
  ["name", "Name", "text"],
  ["organisation", "Organisation", "text"],
  ["role", "Role", "text"],
  ["email", "Work email", "email"],
  ["deploying", "What you are deploying", "text"],
  ["languages", "Languages and dialects", "text"],
  ["timeline", "Timeline", "text"],
] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.04 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.9 9.88m8.42-18.3A11.82 11.82 0 0 0 12.04 0C5.48 0 .13 5.34.13 11.9c0 2.1.55 4.14 1.59 5.95L.03 24l6.3-1.65a11.88 11.88 0 0 0 5.7 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.48-8.41" />
    </svg>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [...FIELDS.map(([k, l]) => `${l}: ${data.get(k) ?? ""}`), "", `Message: ${data.get("message") ?? ""}`].join("\n");
    const subject = `Evaluation enquiry — ${data.get("organisation") || data.get("name")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's measure your <span className="text-gradient">Arabic AI quality</span></>}
        intro="Whether you are developing an Arabic chatbot, deploying a bilingual AI assistant or evaluating a generative AI solution, we can help define a structured testing and evaluation approach."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={onSubmit} className="panel grid gap-5 p-8 sm:grid-cols-2">
            <h2 className="text-2xl font-semibold sm:col-span-2">Request an evaluation</h2>
            {FIELDS.map(([k, l, t]) => (
              <label key={k} className="block text-sm">
                <span className="text-muted-foreground">{l}</span>
                <input name={k} type={t} required={k === "name" || k === "email"} className="mt-2 w-full rounded-md border border-input bg-surface px-3 py-2.5 text-foreground outline-none focus:border-primary" />
              </label>
            ))}
            <label className="block text-sm sm:col-span-2">
              <span className="text-muted-foreground">Message (optional)</span>
              <textarea name="message" rows={4} className="mt-2 w-full rounded-md border border-input bg-surface px-3 py-2.5 text-foreground outline-none focus:border-primary" />
            </label>
            <p className="text-xs text-muted-foreground sm:col-span-2">Please do not send real personal or sensitive data.</p>
            <div className="sm:col-span-2">
              <button type="submit" className="btn-primary">Send enquiry</button>
              {sent && <p className="mt-3 text-sm text-primary">Your email app should open with your enquiry ready to send.</p>}
            </div>
          </form>

          <div className="space-y-6">
            <div className="panel p-8 topline">
              <p className="eyebrow mb-4">Reach us directly</p>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-lg hover:text-primary">
                <Mail className="h-5 w-5 text-primary" /> {EMAIL}
              </a>
              <p className="mt-4 flex items-center gap-3 text-muted-foreground"><MapPin className="h-5 w-5 text-primary" /> United Arab Emirates</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp" className="mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground transition-transform hover:scale-110">
                <WhatsAppIcon className="h-7 w-7" />
              </a>
            </div>
            <div className="panel p-8">
              <p className="eyebrow mb-3">What happens next</p>
              <p className="text-muted-foreground">We reply with a short scoping call, then a proposed test plan and quotation.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
