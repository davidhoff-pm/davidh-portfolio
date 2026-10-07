import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DetailPanel from "@/components/detail/DetailPanel";
import ExperienceDetail from "@/components/detail/ExperienceDetail";
import ProjectDetail from "@/components/detail/ProjectDetail";
import ExperienceCard from "@/components/home/ExperienceCard";
import ExpertiseEducationCard from "@/components/home/ExpertiseEducationCard";
import IdentityCard from "@/components/home/IdentityCard";
import ProjectsCard from "@/components/home/ProjectsCard";
import StatsCards from "@/components/home/StatsCards";
import { experiences, getExperience, type Experience } from "@/data/experiences";
import { profile, SITE_TITLE } from "@/data/profile";
import { getProject, type Project } from "@/data/projects";
import NotFound from "./NotFound";

type Detail = { kind: "projet"; item: Project } | { kind: "parcours"; item: Experience };

interface IndexProps {
  panel?: Detail["kind"];
}

const findDetail = (panel: IndexProps["panel"], slug?: string): Detail | null => {
  if (panel === "projet") {
    const item = getProject(slug);
    return item ? { kind: "projet", item } : null;
  }
  if (panel === "parcours") {
    const item = getExperience(slug);
    return item ? { kind: "parcours", item } : null;
  }
  return null;
};

const Index = ({ panel }: IndexProps) => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const detail = findDetail(panel, slug);

  // Conserve le dernier détail affiché pendant l'animation de fermeture du panneau.
  const [shown, setShown] = useState<Detail | null>(detail);
  if (detail && detail.item !== shown?.item) setShown(detail);

  const pageTitle = !detail
    ? SITE_TITLE
    : detail.kind === "projet"
      ? `${detail.item.shortTitle} — ${profile.name}`
      : `${detail.item.title} · ${detail.item.company} — ${profile.name}`;

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  if (panel && !detail) return <NotFound />;

  // En-tête du panneau : titre court collant + ligne rôle · entreprise · période si connue.
  const panelHeader = (() => {
    if (!shown) return { shortTitle: "", meta: undefined };
    if (shown.kind === "parcours") {
      const exp = shown.item;
      return { shortTitle: `${exp.title} · ${exp.company}`, meta: `${exp.company} · ${exp.periodDetail}` };
    }
    const exp = experiences.find((e) => e.projectSlug === shown.item.slug);
    return {
      shortTitle: shown.item.shortTitle,
      meta: exp ? `${exp.title} · ${exp.company} · ${exp.periodDetail}` : "Projet personnel",
    };
  })();

  const closePanel = () => {
    // Retour arrière si le panneau a été ouvert depuis la grille, sinon (lien direct) retour à l'accueil.
    if ((location.state as { fromHome?: boolean } | null)?.fromHome) navigate(-1);
    else navigate("/", { replace: true });
  };

  return (
    <>
      {/* Bureau : grille 12 colonnes à hauteur d'écran fixe (100dvh), colonne profil (4) +
          colonne travaux (8). Les gouttières étant identiques, les 4 chiffres clés tombent
          exactement sur 2 colonnes chacun. Les rangées flexibles (Expérience, Projets) absorbent
          la hauteur restante ; les images ne participent jamais au calcul des hauteurs.
          Budget à 1280x650 (hauteur utile 626px, marges 12px) :
          - gauche : identité ~272 + 12 + expérience ~304 = ~588
          - droite : stats ~116 + 12 + projets (reste ~318) + 12 + expertise & formation ~168
            → 3 vignettes : texte ~136 + image ~122 (l'image absorbe les écarts). */}
      <main className="mx-auto grid max-w-[1600px] grid-cols-1 gap-3 p-3 md:grid-cols-2 md:p-6 bento:h-dvh bento:grid-cols-12 bento:grid-rows-[minmax(0,1fr)] bento:p-4 snug:p-3 tall:gap-4 tall:p-5">
        <div className="contents bento:col-span-4 bento:flex bento:min-h-0 bento:flex-col bento:gap-3 tall:gap-4">
          <IdentityCard className="order-1 md:col-span-2 bento:order-none bento:shrink-0" />
          <ExperienceCard className="order-4 bento:order-none bento:flex-1" />
        </div>
        <div className="contents bento:col-span-8 bento:grid bento:min-h-0 bento:grid-cols-[minmax(0,1fr)] bento:grid-rows-[auto_minmax(0,1fr)_auto] bento:gap-3 tall:gap-4">
          <StatsCards className="order-2 md:col-span-2 bento:order-none bento:col-span-1" />
          <ProjectsCard className="order-3 md:col-span-2 bento:order-none bento:col-span-1" />
          <ExpertiseEducationCard className="order-5 bento:order-none" />
        </div>
      </main>

      <DetailPanel
        open={Boolean(detail)}
        onClose={closePanel}
        eyebrow={shown?.kind === "projet" ? "Étude de cas" : "Expérience"}
        title={shown?.item.title ?? ""}
        shortTitle={panelHeader.shortTitle}
        meta={panelHeader.meta}
        contentKey={shown?.item.slug}
      >
        {shown?.kind === "projet" && <ProjectDetail project={shown.item} />}
        {shown?.kind === "parcours" && <ExperienceDetail experience={shown.item} />}
      </DetailPanel>
    </>
  );
};

export default Index;
