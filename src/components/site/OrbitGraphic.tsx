import { MessagesSquare, ShieldCheck, Target, UserCheck } from "lucide-react";
import { ArabicTyping } from "@/components/site/AnimatedData";

/** Futuristic orbit visual inspired by the methodology report cover */
export function OrbitGraphic() {
  const nodes = [
    { Icon: MessagesSquare, cls: "left-1/2 top-[6%] -translate-x-1/2" },
    { Icon: ShieldCheck, cls: "right-[6%] top-1/2 -translate-y-1/2" },
    { Icon: Target, cls: "left-1/2 bottom-[6%] -translate-x-1/2" },
    { Icon: UserCheck, cls: "left-[6%] top-1/2 -translate-y-1/2" },
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden>
      <div className="absolute inset-0 rounded-full border-2 border-primary/70 animate-spin-slow" style={{ borderStyle: "dashed" }} />
      <div className="absolute inset-[10%] rounded-full border border-violet/40" />
      <div className="absolute inset-[30%] rounded-full border-2 border-primary/70 bg-card shadow-[var(--shadow-glow)]" />
      <div className="absolute inset-[34%] rounded-full border border-dashed border-primary/70 animate-spin-slower" />
      <div className="absolute inset-[30%] flex flex-col items-center justify-center">
        <svg viewBox="0 0 64 64" className="h-1/2 w-1/2" fill="none" stroke="var(--color-primary)" strokeWidth="2">
          <path d="M32 8v48M20 16l12 10 12-10M18 32h28M20 48l12-10 12 10" strokeLinecap="round" />
          <circle cx="32" cy="8" r="3" fill="var(--color-primary)" />
          <circle cx="18" cy="32" r="3" fill="var(--color-violet)" stroke="none" />
          <circle cx="46" cy="32" r="3" fill="var(--color-violet)" stroke="none" />
          <circle cx="32" cy="56" r="3" fill="var(--color-primary)" />
        </svg>
        <span className="font-display text-lg font-bold tracking-widest text-primary">LLM</span>
      </div>
      {nodes.map(({ Icon, cls }, i) => (
        <div key={i} className={`absolute ${cls} flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-surface text-primary`}>
          <Icon className="h-6 w-6" />
        </div>
      ))}
      <ArabicTyping />
    </div>
  );
}
