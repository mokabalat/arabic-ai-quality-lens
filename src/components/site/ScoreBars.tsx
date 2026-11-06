import { AnimatedBar, CountUp } from "@/components/site/AnimatedData";

const COLOR: Record<string, string> = {
  primary: "bg-primary text-primary",
  violet: "bg-violet text-violet",
  amber: "bg-amber text-amber",
};

export function ScoreBars({ items }: { items: { label: string; value: number; color: string }[] }) {
  return (
    <div className="space-y-6">
      {items.map((it) => {
        const [bg, text] = (COLOR[it.color] ?? "bg-primary text-primary").split(" ");
        return (
          <div key={it.label}>
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <span className="text-sm">{it.label}</span>
              <CountUp value={it.value} decimals={2} suffix="%" className={`font-display text-xl font-bold ${text}`} />
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-muted">
              <AnimatedBar value={it.value} className={bg} />
            </div>
          </div>
        );
      })}
      <div className="flex justify-between font-display text-[10px] tracking-widest text-muted-foreground">
        <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
      </div>
    </div>
  );
}
