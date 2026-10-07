import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { asset } from "@/lib/utils";
import { BentoCard, Chip, StatusBadge } from "./BentoCard";

const ProjectsCard = ({ className }: { className?: string }) => (
  <BentoCard title="Projets" className={className} bodyClassName="flex flex-col">
    <ul className="grid gap-3 sm:grid-cols-2 bento:flex-1 bento:grid-rows-[repeat(2,1fr)] tall:gap-4">
      {projects.map((project) => (
        <li key={project.slug}>
          <Link
            to={`/projets/${project.slug}`}
            state={{ fromHome: true }}
            className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border bg-card transition-colors duration-150 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:min-h-[112px] sm:flex-row tall:flex-col"
          >
            {/* Capture posée sur un fond accent très pâle, cadrée sur la zone parlante. */}
            <div className="relative aspect-[16/9] shrink-0 bg-primary/[0.07] p-2 sm:aspect-auto sm:w-[40%] tall:min-h-[96px] tall:w-auto tall:flex-1">
              <div className="h-full overflow-hidden rounded-lg border border-primary/15 bg-card">
                <img
                  src={asset(project.image)}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{
                    objectPosition: project.imageFocus.position,
                    transform: `scale(${project.imageFocus.zoom})`,
                    transformOrigin: project.imageFocus.position,
                  }}
                />
              </div>
              {project.wip && <StatusBadge className="absolute left-4 top-4">En cours</StatusBadge>}
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 px-4 py-3 tall:flex-none">
              <h3 className="t-title flex items-start justify-between gap-2">
                <span>{project.shortTitle}</span>
                <ArrowUpRight
                  aria-hidden
                  className="mt-0.5 size-4 shrink-0 text-primary transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </h3>
              <p className="text-[14px] leading-5 text-muted-foreground">{project.summary}</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5 short:hidden">
                <Chip>{project.tags[0]}</Chip>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </BentoCard>
);

export default ProjectsCard;
