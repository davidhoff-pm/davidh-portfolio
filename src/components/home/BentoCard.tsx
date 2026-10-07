import { useId, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  action?: ReactNode;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}

// Carte de la grille : fond blanc, bordure fine, titre court en petites capitales grises.
export const BentoCard = ({ title, action, className, bodyClassName, children }: BentoCardProps) => {
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      className={cn(
        "flex flex-col rounded-2xl border bg-card p-5 bento:min-h-0 bento:px-4 bento:py-3.5 tall:p-5",
        className,
      )}
    >
      <div className="mb-3 flex items-baseline justify-between gap-3 bento:mb-2 tall:mb-3">
        <h2 id={titleId} className="text-[13px] font-medium uppercase leading-4 tracking-[0.08em] text-muted-foreground">
          {title}
        </h2>
        {action}
      </div>
      <div className={cn("flex-1 bento:min-h-0", bodyClassName)}>{children}</div>
    </section>
  );
};

export const Chip = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span
    className={cn(
      "inline-flex items-center whitespace-nowrap rounded-md border bg-background px-2 py-px text-[12.5px] leading-5 text-foreground/80",
      className,
    )}
  >
    {children}
  </span>
);
