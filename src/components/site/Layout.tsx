import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg.asset.json";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/methodology", label: "Methodology" },
  { to: "/pilot-benchmark", label: "Pilot Benchmark" },
  { to: "/red-teaming", label: "Red Teaming" },
  { to: "/why-uae", label: "Why the UAE" },
  { to: "/about", label: "About" },
] as const;

export const EMAIL = "ai@ArabicAiQuality.com";
export const WHATSAPP_URL = "https://wa.me/971557465252";

export function Logo({ className = "h-10" }: { className?: string }) {
  return <img src={logo.url} alt="Arabic AI Quality — Arabic LLMs measured with care" className={className} />;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl topline">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <Link to="/" aria-label="Arabic AI Quality home">
          <Logo className="h-11 w-auto" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary ml-3">
            Contact
          </Link>
        </nav>
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col border-t border-border px-6 py-4 lg:hidden">
          {[...NAV, { to: "/contact", label: "Contact" } as const].map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="py-2 text-muted-foreground data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo className="h-12 w-auto" />
          <p className="max-w-sm text-sm text-muted-foreground">
            Independent Arabic AI and Arabic LLM evaluation consultancy, based in the UAE.
          </p>
          <p className="font-display text-xs tracking-widest text-primary">
            #ArabicGenAI · #ArabicLLMQA · #ArabicLLMEvaluation
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground md:grid-cols-1">
            {NAV.slice(1).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <a href={`mailto:${EMAIL}`} className="text-sm text-foreground hover:text-primary">
            {EMAIL}
          </a>
          <p className="mt-2 text-sm text-muted-foreground">United Arab Emirates</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Arabic AI Quality · Arabic LLMs measured with care</span>
          <span className="max-w-xl md:text-right">
            Our pilot benchmark is an independent, descriptive comparison. It is not a certification, an
            industry-wide ranking or a guarantee.
          </span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 tech-grid" />
      <div className="absolute inset-0 glow-bg" />
      <CircuitLines />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
        {intro && <div className="mt-6 max-w-3xl text-lg text-muted-foreground">{intro}</div>}
        {children}
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, intro, children, className = "" }: { eyebrow?: string; title?: ReactNode; intro?: ReactNode; children?: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-16 md:py-20 ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      {title && <h2 className="max-w-3xl text-3xl font-semibold md:text-4xl">{title}</h2>}
      {intro && <div className="mt-4 max-w-3xl text-muted-foreground">{intro}</div>}
      {children && <div className="mt-10">{children}</div>}
    </section>
  );
}

export function CTA({ title = "Is your AI getting Arabic right?", text = "Tell us what you are deploying and where it will be used. We will propose a test plan." }: { title?: string; text?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="panel relative overflow-hidden p-10 md:p-14 topline">
        <div className="absolute inset-0 glow-bg" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">{text}</p>
          </div>
          <Link to="/contact" className="btn-primary">
            Request an evaluation
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Decorative circuit traces */
export function CircuitLines() {
  return (
    <svg className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-40" viewBox="0 0 600 400" fill="none" preserveAspectRatio="xMaxYMid slice" aria-hidden>
      <g stroke="var(--color-primary)" strokeOpacity=".35" strokeWidth="1">
        <path d="M600 60H420l-30 30H250" />
        <path d="M600 140H480l-40 40H330l-20 20H200" />
        <path d="M600 260H460l-30-30H300" />
        <path d="M600 340H380l-40 40H260" />
      </g>
      <g fill="var(--color-primary)" className="animate-pulse-dot">
        <circle cx="250" cy="90" r="3" />
        <circle cx="200" cy="200" r="3" />
        <circle cx="300" cy="230" r="3" />
        <circle cx="260" cy="380" r="3" />
      </g>
    </svg>
  );
}
