import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { experiences } from "@/data/experiences";
import { projects, type Project } from "@/data/projects";
import { asset } from "@/lib/utils";
import { BentoCard, Chip } from "./BentoCard";

// Rôle · entreprise · période (expérience liée) ou rôle sur un projet personnel.
const roleLine = (project: Project) => {
  const exp = experiences.find((e) => e.projectSlug === project.slug);
  return exp ? `${exp.title} · ${exp.company} · ${exp.period}` : (project.personalRole ?? "");
};

// Bureau : 3 cartes sur une rangée. Sous-grille à 5 rangées partagées par les 3 cartes :
// vignette (au plus 38 % de la hauteur, elle rétrécit en premier), titre + pitch (absorbe
// l'espace restant), métriques, rôle, tags → métriques, rôles et tags alignés d'une carte à l'autre.
const ProjectsCard = ({ className }: { className?: string }) => (
  <BentoCard title="Projets" className={className} bodyClassName="flex flex-col">
    <ul className="grid gap-3 sm:grid-cols-3 bento:min-h-0 bento:flex-1 bento:grid-rows-[minmax(0,38%)_1fr_auto_auto_auto] bento:gap-y-0 tall:gap-x-4">
      {projects.map((project) => (
        <li
          key={project.slug}
          className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-colors duration-150 hover:border-primary has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring bento:row-span-5 bento:grid bento:grid-rows-subgrid"
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

          <div className="min-w-0 px-4 pt-3">
            <h3 className="flex items-start justify-between gap-3 text-[15px] font-semibold leading-5">
              {/* Lien étiré : toute la carte est cliquable. */}
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
            <p className="mt-1.5 text-[14px] leading-5 text-foreground roomy:hidden">{project.pitch}</p>
            <p className="mt-1.5 hidden text-[14px] leading-5 text-foreground roomy:block">{project.description}</p>
          </div>

          <p className="px-4 pt-2.5 text-[13px] font-medium leading-[18px] text-primary">{project.metrics}</p>

          <p className="px-4 pt-1.5 text-[13px] leading-[18px] text-muted-foreground">{roleLine(project)}</p>

          {/* mt-auto : tags en bas de carte hors bureau (sur bureau, la sous-grille les aligne). */}
          <div className="mt-auto flex flex-wrap content-start gap-1.5 px-4 pb-3 pt-3">
            {project.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </BentoCard>
);

export default ProjectsCard;
