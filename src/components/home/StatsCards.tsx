import { stats } from "@/data/stats";
import { cn } from "@/lib/utils";
import { cardSurface } from "./BentoCard";

const StatsCards = ({ className }: { className?: string }) => (
  <section
    aria-label="Chiffres clés"
    className={cn("grid auto-rows-fr grid-cols-2 gap-3 md:grid-cols-4 tall:gap-4", className)}
  >
    {stats.map((stat) => (
      <div key={stat.label} className={cn(cardSurface, "flex flex-col gap-2")}>
        <span className="t-display whitespace-nowrap text-primary max-[400px]:text-[32px]">{stat.value}</span>
        <span className="text-[14px] leading-5 text-muted-foreground">{stat.label}</span>
      </div>
    ))}
  </section>
);

export default StatsCards;
