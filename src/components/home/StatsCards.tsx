import { stats } from "@/data/stats";
import { cn } from "@/lib/utils";

const StatsCards = ({ className }: { className?: string }) => (
  <section aria-label="Chiffres clés" className={cn("grid grid-cols-2 gap-3 md:grid-cols-4", className)}>
    {stats.map((stat) => (
      <div key={stat.label} className="flex flex-col gap-1 rounded-2xl border bg-card px-4 py-3.5 bento:py-3 tall:px-5 tall:py-4">
        <span className="text-2xl font-semibold leading-none tracking-tight tabular-nums">{stat.value}</span>
        <span className="text-[13px] leading-snug text-muted-foreground">{stat.label}</span>
      </div>
    ))}
  </section>
);

export default StatsCards;
