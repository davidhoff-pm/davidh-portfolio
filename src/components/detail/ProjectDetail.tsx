import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Chip, StatusBadge } from "@/components/home/BentoCard";
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
        <Dialog.Description className="text-[14px] leading-[22px] text-foreground">
          {cs ? cs.tagline : project.description}
        </Dialog.Description>
        <div className="flex flex-wrap items-center gap-1.5">
          {project.wip && <StatusBadge>En cours</StatusBadge>}
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      </div>

      {cs && (
        <dl className="grid grid-cols-2 gap-3">
          {cs.keyFigures.map((figure) => (
            <div key={figure.label} className="flex flex-col-reverse gap-2 rounded-xl border bg-background p-4">
              <dt className="text-[14px] leading-5 text-muted-foreground">{figure.label}</dt>
              <dd className="font-serif text-[clamp(1.6rem,6vw,2.375rem)] leading-none text-primary">{figure.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <figure className="rounded-xl bg-primary/[0.07] p-3">
        <img
          src={asset(project.image)}
          alt={`Capture du projet ${project.shortTitle}`}
          className="w-full rounded-lg border border-primary/15"
        />
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
              <p className="border-l-2 border-primary/40 pl-4 text-[14px] leading-[22px] text-muted-foreground">
                {cs.prioritization}
              </p>
            )}
          </DetailSection>
          <DetailSection title="Conception & delivery">
            <BulletList items={cs.delivery} />
            <p className="text-[14px] leading-[22px] text-muted-foreground">
              <span className="font-medium text-foreground">Livrables : </span>
              {cs.artifacts.join(" · ")}
            </p>
          </DetailSection>
          <DetailSection title="Résultats">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-[14px] font-semibold leading-5">Pour les utilisateurs</h4>
                <BulletList items={cs.results.user} />
              </div>
              <div className="space-y-2">
                <h4 className="text-[14px] font-semibold leading-5">{cs.results.businessLabel ?? "Pour le business"}</h4>
                <BulletList items={cs.results.business} />
              </div>
            </div>
          </DetailSection>
          <DetailSection title="Apprentissages">
            <BulletList items={cs.learnings} />
          </DetailSection>
        </>
      ) : (
        <p className="rounded-xl border border-dashed px-4 py-3 text-[14px] leading-5 text-muted-foreground">
          Projet personnel en cours de développement.
        </p>
      )}

      {relatedExperience && (
        <Link
          to={`/parcours/${relatedExperience.slug}`}
          state={location.state}
          replace
          className="group flex min-h-11 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-[14px] leading-5 transition-colors hover:border-primary"
        >
          <span>
            Expérience associée :{" "}
            <span className="font-medium text-primary">
              {relatedExperience.title} · {relatedExperience.company}
            </span>
          </span>
          <ArrowRight aria-hidden className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </article>
  );
};

export default ProjectDetail;
