import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { asset } from "@/lib/utils";
import { BentoCard, Chip } from "./BentoCard";

const ProjectsCard = ({ className }: { className?: string }) => (
  <BentoCard
    title="Projets"
    className={className}
    action={<span className="hidden text-xs text-muted-foreground sm:inline">Cliquer pour l'étude de cas</span>}
    bodyClassName="flex flex-col"
  >
    <ul className="grid gap-3 sm:grid-cols-2 bento:min-h-0 bento:flex-1 bento:grid-rows-2">
      {projects.map((project) => (
        <li key={project.slug} className="bento:min-h-0">
          <Link
            to={`/projets/${project.slug}`}
            state={{ fromHome: true }}
            className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-foreground/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:min-h-[112px] sm:flex-row"
          >
            <div className="aspect-[16/9] shrink-0 overflow-hidden border-b bg-muted sm:aspect-auto sm:w-[34%] sm:border-b-0 sm:border-r">
              <img
                src={asset(project.image)}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 p-3.5 tall:p-4">
              <h3 className="flex items-start justify-between gap-2 text-sm font-semibold leading-snug tall:text-[15px]">
                <span>{project.shortTitle}</span>
                <ArrowUpRight
                  aria-hidden
                  className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                />
              </h3>
              <p className="text-[13px] leading-snug text-muted-foreground bento:truncate" title={project.summary}>
                {project.summary}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {project.wip && <Chip className="border-primary/30 text-primary">En cours</Chip>}
                {project.tags.slice(0, project.wip ? 1 : 2).map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </BentoCard>
);

export default ProjectsCard;
