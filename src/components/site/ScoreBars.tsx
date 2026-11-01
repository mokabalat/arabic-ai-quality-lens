const COLOR: Record<string, string> = {
  primary: "bg-primary text-primary",
  violet: "bg-violet text-violet",
  amber: "bg-amber text-amber",
};

export function ScoreBars({ items }: { items: { label: string; value: number; color: string }[] }) {
  return (
    <div className="space-y-6">
      {items.map((it) => {
        const [bg, text] = COLOR[it.color].split(" ");
        return (
          <div key={it.label}>
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <span className="text-sm">{it.label}</span>
              <span className={`font-display text-xl font-bold ${text}`}>{it.value.toFixed(2)}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-muted">
              <div className={`h-full rounded-full ${bg}`} style={{ width: `${it.value}%` }} />
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
