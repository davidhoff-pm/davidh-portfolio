import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { asset } from "@/lib/utils";
import { BentoCard, Chip } from "./BentoCard";

// Bureau : 3 vignettes sur une rangée ; sous-grille = images de même hauteur sur une ligne,
// textes alignés sur la suivante. La zone image prend la place restante : c'est elle qui
// rétrécit, jamais le texte.
const ProjectsCard = ({ className }: { className?: string }) => (
  <BentoCard title="Projets" className={className} bodyClassName="flex flex-col">
    <ul className="grid gap-3 sm:grid-cols-3 bento:min-h-0 bento:flex-1 bento:grid-rows-[minmax(0,1fr)_auto] bento:gap-y-0 tall:gap-x-4">
      {projects.map((project) => (
        <li
          key={project.slug}
          className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-colors duration-150 hover:border-primary has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring bento:row-span-2 bento:grid bento:grid-rows-subgrid"
        >
          {/* Capture posée sur un fond accent très pâle, cadrée sur la zone parlante. */}
          <div className="vignette-media aspect-[16/9] shrink-0 bg-primary/[0.07] p-2 bento:aspect-auto bento:min-h-0">
            <div className="relative h-full overflow-hidden rounded-lg border border-primary/15 bg-card">
              <img
                src={asset(project.image)}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  objectPosition: project.imageFocus.position,
                  transform: `scale(${project.imageFocus.zoom})`,
                  transformOrigin: project.imageFocus.position,
                }}
              />
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-1 px-3 pb-3 pt-2.5 tall:px-4">
            <h3 className="flex items-start justify-between gap-3 text-[15px] font-semibold leading-5">
              {/* Lien étiré : toute la vignette est cliquable. */}
              <Link
                to={`/projets/${project.slug}`}
                state={{ fromHome: true }}
                className="min-w-0 after:absolute after:inset-0 focus-visible:outline-none"
              >
                {project.shortTitle}
              </Link>
              <ArrowUpRight
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-primary transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </h3>
            <p className="text-[14px] leading-5 text-muted-foreground">{project.summary}</p>
            <div className="mt-1 flex">
              <Chip>{project.tags[0]}</Chip>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </BentoCard>
);

export default ProjectsCard;
