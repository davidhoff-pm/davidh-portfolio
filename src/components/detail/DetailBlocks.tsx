import type { ReactNode } from "react";

export const DetailSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-3">
    <h3 className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted-foreground">{title}</h3>
    {children}
  </section>
);

export const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-[15px] leading-relaxed text-foreground/85">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span aria-hidden className="mt-[0.7em] size-1 shrink-0 rounded-full bg-primary" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
