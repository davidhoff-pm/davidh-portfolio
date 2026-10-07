import { Link } from "react-router-dom";
import { experiences } from "@/data/experiences";
import { BentoCard } from "./BentoCard";

const ExperienceCard = ({ className }: { className?: string }) => (
  <BentoCard title="Expérience" className={className} bodyClassName="bento:overflow-y-auto">
    <ol className="-mx-2 flex flex-col gap-0.5">
      {experiences.map((exp) => (
        <li key={exp.slug}>
          <Link
            to={`/parcours/${exp.slug}`}
            state={{ fromHome: true }}
            className="grid min-h-11 grid-cols-[76px_minmax(0,1fr)] gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="pt-0.5 text-xs leading-snug tabular-nums text-muted-foreground">{exp.period}</span>
            <span className="min-w-0">
              <span className="block text-sm font-medium leading-5 bento:truncate">
                {exp.title} <span className="font-normal text-muted-foreground">· {exp.company}</span>
              </span>
              <span className="block text-[13px] leading-5 text-muted-foreground bento:truncate" title={exp.summary}>
                {exp.summary}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  </BentoCard>
);

export default ExperienceCard;
