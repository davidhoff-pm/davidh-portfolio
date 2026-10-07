import { education, expertise } from "@/data/expertise";
import { BentoCard, Chip } from "./BentoCard";

const ExpertiseEducationCard = ({ className }: { className?: string }) => (
  <BentoCard
    title="Expertise & formation"
    className={className}
    bodyClassName="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,20.5rem)] sm:gap-5"
  >
    <ul aria-label="Expertise" className="flex flex-wrap content-start gap-1.5">
      {expertise.map((skill) => (
        <li key={skill}>
          <Chip>{skill}</Chip>
        </li>
      ))}
    </ul>
    <ul aria-label="Formation" className="space-y-2 border-t pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
      {education.map((item) => (
        <li key={item.degree} className="text-[14px] leading-5">
          <span className="font-medium">{item.degree}</span>
          <span className="text-muted-foreground">
            {" "}
            · {item.institution} · <span className="tabular-nums">{item.period}</span>
          </span>
          {item.note && <span className="block text-muted-foreground">{item.note}</span>}
        </li>
      ))}
    </ul>
  </BentoCard>
);

export default ExpertiseEducationCard;
