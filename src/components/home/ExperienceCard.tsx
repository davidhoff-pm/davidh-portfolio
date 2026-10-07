import { Link } from "react-router-dom";
import { experiences } from "@/data/experiences";
import { BentoCard } from "./BentoCard";

// Mobile : date au-dessus du poste. À partir de 640px : date en colonne à gauche.
// Sur bureau, les lignes se partagent la hauteur disponible, contenu centré verticalement.
const ExperienceCard = ({ className }: { className?: string }) => (
  <BentoCard title="Expérience" className={className}>
    <ol className="flex flex-col divide-y bento:h-full">
      {experiences.map((exp) => (
        <li key={exp.slug} className="bento:flex-1">
          <Link
            to={`/parcours/${exp.slug}`}
            state={{ fromHome: true }}
            className="group -mx-2 grid min-h-11 content-center gap-0.5 rounded-lg px-2 py-2 transition-colors bento:py-1.5 hover:bg-primary/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:grid-cols-[84px_minmax(0,1fr)] sm:gap-3 bento:h-full"
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
