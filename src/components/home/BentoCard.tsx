import { useId, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Surface commune à toutes les cartes : même rayon, même bordure, même padding.
export const cardSurface = "rounded-2xl border bg-card p-4 tall:p-5";

interface BentoCardProps {
  title: string;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}

export const BentoCard = ({ title, className, bodyClassName, children }: BentoCardProps) => {
  const titleId = useId();

  return (
    <section aria-labelledby={titleId} className={cn(cardSurface, "flex flex-col bento:min-h-0", className)}>
      <h2 id={titleId} className="t-eyebrow mb-2.5 tall:mb-3">
        {title}
      </h2>
      <div className={cn("flex-1 bento:min-h-0", bodyClassName)}>{children}</div>
    </section>
  );
};

export const Chip = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span
    className={cn(
      "inline-flex items-center whitespace-nowrap rounded-md border bg-background px-2 py-0.5 text-[13px] leading-[18px] text-foreground",
      className,
    )}
  >
    {children}
  </span>
);

// Badge de statut (distinct des tags) : fond accent plein.
export const StatusBadge = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 whitespace-nowrap rounded-md border border-primary bg-primary px-2 py-0.5 text-[13px] font-medium leading-[18px] text-primary-foreground",
      className,
    )}
  >
    <span aria-hidden className="size-1.5 rounded-full bg-primary-foreground/80" />
    {children}
  </span>
);
