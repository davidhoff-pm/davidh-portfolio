import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Chip } from "@/components/home/BentoCard";
import type { Experience } from "@/data/experiences";
import { getProject } from "@/data/projects";
import { BulletList, DetailSection } from "./DetailBlocks";

const ExperienceDetail = ({ experience }: { experience: Experience }) => {
  const location = useLocation();
  const project = getProject(experience.projectSlug);

  return (
    <article className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{experience.company}</span>
          {experience.companyNote && ` · ${experience.companyNote}`}
          <span className="block tabular-nums">{experience.periodDetail}</span>
        </p>
        <Dialog.Description className="text-[15px] leading-relaxed text-foreground/85">
          {experience.description}
        </Dialog.Description>
      </div>

      {experience.highlights.length > 0 && (
        <DetailSection title="Réalisations">
          <BulletList items={experience.highlights} />
        </DetailSection>
      )}

      {experience.tags.length > 0 && (
        <DetailSection title="Compétences mobilisées">
          <div className="flex flex-wrap gap-1.5">
            {experience.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </DetailSection>
      )}

      {project && (
        <Link
          to={`/projets/${project.slug}`}
          state={location.state}
          replace
          className="flex min-h-11 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm transition-colors hover:border-foreground/25 hover:bg-muted"
        >
          <span>
            Étude de cas : <span className="font-medium">{project.shortTitle}</span>
          </span>
          <ArrowRight aria-hidden className="size-4 shrink-0 text-muted-foreground" />
        </Link>
      )}
    </article>
  );
};

export default ExperienceDetail;
