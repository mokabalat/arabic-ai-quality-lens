import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function boundedValue(value: number, target: number) {
  return Math.min(Math.max(value, Math.min(0, target)), Math.max(0, target));
}

const transition = { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const };

export function CountUp({ value, decimals = 0, suffix = "", className = "" }: {
  value: number; decimals?: number; suffix?: string; className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (reduceMotion) { setCurrent(value); return; }
    const controls = animate(0, value, {
      ...transition,
      onUpdate: (next) => setCurrent(boundedValue(next, value)),
      onComplete: () => setCurrent(value),
    });
    return () => controls.stop();
  }, [seen, value, reduceMotion]);
  const final = `${value.toFixed(decimals)}${suffix}`;
  return (
    <span ref={ref} className={`inline-grid tabular-nums ${className}`} data-count-target={value}>
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">{final}</span>
      <span className="col-start-1 row-start-1" aria-hidden="true" data-count-value>{(reduceMotion ? value : current).toFixed(decimals)}{suffix}</span>
      <span className="sr-only">{final}</span>
    </span>
  );
}

export function AnimatedBar({ value, className = "bg-primary" }: { value: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const target = boundedValue(value, 100);
  return (
    <div ref={ref} className="h-full w-full" role="meter" aria-label="Percentage" aria-valuemin={0} aria-valuemax={100} aria-valuenow={target}>
      <motion.div
        className={`h-full rounded-full ${className}`}
        data-bar-target={target}
        initial={{ width: "0%" }}
        animate={{ width: seen || reduceMotion ? `${target}%` : "0%" }}
        transition={reduceMotion ? { duration: 0 } : transition}
      />
    </div>
  );
}

const ARABIC_WORDS = "المعنى · الدقة · الثقة";
export function ArabicTyping() {
  const ref = useRef<HTMLParagraphElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [length, setLength] = useState(0);
  useEffect(() => {
    if (!seen || reduceMotion) return;
    const controls = animate(0, ARABIC_WORDS.length, {
      duration: 1.5, ease: "linear",
      onUpdate: (next) => setLength(Math.floor(boundedValue(next, ARABIC_WORDS.length))),
      onComplete: () => setLength(ARABIC_WORDS.length),
    });
    return () => controls.stop();
  }, [seen, reduceMotion]);
  return (
    <p ref={ref} className="absolute -bottom-10 left-0 right-0 text-center font-arabic text-xl" dir="rtl" data-arabic-typing>
      <span className="relative inline-block">
        <span className="invisible" aria-hidden="true">{ARABIC_WORDS}</span>
        <span className="absolute inset-0 text-gradient" aria-hidden="true">{ARABIC_WORDS.slice(0, reduceMotion ? ARABIC_WORDS.length : length)}</span>
        <span className="sr-only">{ARABIC_WORDS}</span>
      </span>
    </p>
  );
}