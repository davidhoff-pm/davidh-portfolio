import { education } from "@/data/expertise";
import { BentoCard } from "./BentoCard";

const EducationCard = ({ className }: { className?: string }) => (
  <BentoCard title="Formation" className={className} bodyClassName="bento:overflow-y-auto">
    <ul className="space-y-3">
      {education.map((item) => (
        <li key={item.degree}>
          <p className="text-sm font-medium leading-5">{item.degree}</p>
          <p className="text-[13px] leading-5 text-muted-foreground">
            {item.institution} · <span className="tabular-nums">{item.period}</span>
          </p>
          {item.note && <p className="text-[13px] leading-5 text-muted-foreground">{item.note}</p>}
        </li>
      ))}
    </ul>
  </BentoCard>
);

export default EducationCard;
