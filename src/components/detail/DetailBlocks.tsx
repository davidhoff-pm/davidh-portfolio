import type { ReactNode } from "react";

export const DetailSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-3">
    <h3 className="t-eyebrow">{title}</h3>
    {children}
  </section>
);

export const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-[14px] leading-[22px] text-foreground">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span aria-hidden className="mt-[9px] size-1 shrink-0 rounded-full bg-primary" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
