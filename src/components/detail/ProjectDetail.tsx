import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Chip } from "@/components/home/BentoCard";
import { experiences } from "@/data/experiences";
import type { Project } from "@/data/projects";
import { asset } from "@/lib/utils";
import { BulletList, DetailSection } from "./DetailBlocks";

const ProjectDetail = ({ project }: { project: Project }) => {
  const location = useLocation();
  const cs = project.caseStudy;
  const relatedExperience = experiences.find((exp) => exp.projectSlug === project.slug);

  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <Dialog.Description className="text-[15px] leading-relaxed text-foreground/85">
          {cs ? cs.tagline : project.description}
        </Dialog.Description>
        <div className="flex flex-wrap gap-1.5">
          <Chip>{project.kind === "professionnel" ? "Projet professionnel" : "Projet personnel"}</Chip>
          {project.wip && <Chip className="border-primary/30 text-primary">En cours</Chip>}
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      </div>

      {cs && (
        <dl className="grid grid-cols-2 gap-2.5">
          {cs.keyFigures.map((figure) => (
            <div key={figure.label} className="rounded-xl border bg-background px-4 py-3">
              <dt className="sr-only">{figure.label}</dt>
              <dd>
                <span className="block text-2xl font-semibold tracking-tight text-primary tabular-nums">
                  {figure.value}
                </span>
                <span className="mt-0.5 block text-[13px] leading-snug text-muted-foreground">{figure.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      )}

      <figure className="overflow-hidden rounded-xl border bg-muted">
        <img src={asset(project.image)} alt={`Capture du projet ${project.shortTitle}`} className="aspect-[16/10] w-full object-cover object-top" />
      </figure>

      {cs ? (
        <>
          <DetailSection title="Contexte">
            <BulletList items={cs.context} />
          </DetailSection>
          <DetailSection title="Problème">
            <BulletList items={cs.problem} />
          </DetailSection>
          <DetailSection title="Mon rôle">
            <BulletList items={cs.role} />
          </DetailSection>
          <DetailSection title="Discovery">
            <BulletList items={cs.discovery} />
          </DetailSection>
          <DetailSection title="Stratégie & priorisation">
            <BulletList items={cs.strategy} />
            {cs.prioritization && (
              <p className="border-l-2 border-primary/40 pl-4 text-[15px] leading-relaxed text-muted-foreground">
                {cs.prioritization}
              </p>
            )}
          </DetailSection>
          <DetailSection title="Conception & delivery">
            <BulletList items={cs.delivery} />
            <div className="flex flex-wrap gap-1.5 pt-1">
              {cs.artifacts.map((artifact) => (
                <Chip key={artifact}>{artifact}</Chip>
              ))}
            </div>
          </DetailSection>
          <DetailSection title="Résultats">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Pour les utilisateurs</h4>
                <BulletList items={cs.results.user} />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">{cs.results.businessLabel ?? "Pour le business"}</h4>
                <BulletList items={cs.results.business} />
              </div>
            </div>
          </DetailSection>
          <DetailSection title="Apprentissages">
            <BulletList items={cs.learnings} />
          </DetailSection>
        </>
      ) : (
        <p className="rounded-xl border border-dashed px-4 py-3 text-sm text-muted-foreground">
          Projet personnel en cours de développement.
        </p>
      )}

      {relatedExperience && (
        <Link
          to={`/parcours/${relatedExperience.slug}`}
          state={location.state}
          replace
          className="flex min-h-11 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm transition-colors hover:border-foreground/25 hover:bg-muted"
        >
          <span>
            Expérience associée :{" "}
            <span className="font-medium">
              {relatedExperience.title} · {relatedExperience.company}
            </span>
          </span>
          <ArrowRight aria-hidden className="size-4 shrink-0 text-muted-foreground" />
        </Link>
      )}
    </article>
  );
};

export default ProjectDetail;
