import { education, expertise } from "@/data/expertise";
import { BentoCard, Chip } from "./BentoCard";

const ExpertiseEducationCard = ({ className }: { className?: string }) => (
  <BentoCard
    title="Expertise & formation"
    className={className}
    bodyClassName="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,21rem)] sm:gap-0"
  >
    {/* Les chips restent dans leur colonne : elles reviennent à la ligne avant le filet. */}
    <ul aria-label="Expertise" className="flex min-w-0 flex-wrap content-start gap-1.5 sm:pr-5">
      {expertise.map((skill) => (
        <li key={skill} className="max-w-full">
          <Chip className="max-w-full">{skill}</Chip>
        </li>
      ))}
    </ul>
    <ul aria-label="Formation" className="min-w-0 space-y-2 border-t pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
      {education.map((item) => (
        <li key={item.degree} className="text-[14px] leading-5">
          <span className="block font-medium">{item.degree}</span>
          <span className="block text-muted-foreground">
            {item.institution} · <span className="whitespace-nowrap tabular-nums">{item.period}</span>
          </span>
          {item.note && <span className="block text-muted-foreground">{item.note}</span>}
        </li>
      ))}
    </ul>
  </BentoCard>
);

export default ExpertiseEducationCard;
