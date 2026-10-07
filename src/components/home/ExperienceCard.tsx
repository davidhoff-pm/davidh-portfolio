import { Link } from "react-router-dom";
import { experiences } from "@/data/experiences";
import { BentoCard } from "./BentoCard";

const ExperienceCard = ({ className }: { className?: string }) => (
  <BentoCard title="Expérience" className={className}>
    <ol className="flex flex-col gap-1 tall:gap-2">
      {experiences.map((exp) => (
        <li key={exp.slug}>
          <Link
            to={`/parcours/${exp.slug}`}
            state={{ fromHome: true }}
            className="group grid min-h-11 grid-cols-[84px_minmax(0,1fr)] gap-3 -mx-2 rounded-lg px-2 py-1 transition-colors hover:bg-primary/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="whitespace-nowrap pt-px text-[13px] leading-[18px] tabular-nums text-muted-foreground">
              {exp.period}
            </span>
            <span className="min-w-0">
              <span className="block text-[14px] font-medium leading-5 transition-colors group-hover:text-primary">
                {exp.title} <span className="font-normal text-muted-foreground">· {exp.company}</span>
              </span>
              <span className="block text-[14px] leading-5 text-muted-foreground">{exp.summary}</span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  </BentoCard>
);

export default ExperienceCard;
