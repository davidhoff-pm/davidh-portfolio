import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DetailPanel from "@/components/detail/DetailPanel";
import ExperienceDetail from "@/components/detail/ExperienceDetail";
import ProjectDetail from "@/components/detail/ProjectDetail";
import EducationCard from "@/components/home/EducationCard";
import ExperienceCard from "@/components/home/ExperienceCard";
import ExpertiseCard from "@/components/home/ExpertiseCard";
import IdentityCard from "@/components/home/IdentityCard";
import ProjectsCard from "@/components/home/ProjectsCard";
import StatsCards from "@/components/home/StatsCards";
import { getExperience, type Experience } from "@/data/experiences";
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

  const closePanel = () => {
    // Retour arrière si le panneau a été ouvert depuis la grille, sinon (lien direct) retour à l'accueil.
    if ((location.state as { fromHome?: boolean } | null)?.fromHome) navigate(-1);
    else navigate("/", { replace: true });
  };

  return (
    <>
      <main className="mx-auto grid max-w-[1600px] grid-cols-1 gap-3 p-4 sm:p-6 md:grid-cols-2 bento:h-dvh bento:grid-cols-12 bento:grid-rows-[auto_minmax(0,1fr)_auto] bento:p-5 tall:gap-4 tall:p-6">
        <IdentityCard className="md:col-span-2 bento:col-span-4 bento:col-start-1 bento:row-span-2 bento:row-start-1" />
        <StatsCards className="md:col-span-2 bento:col-span-8 bento:col-start-5 bento:row-start-1 tall:gap-4" />
        <ProjectsCard className="md:col-span-2 bento:col-span-8 bento:col-start-5 bento:row-start-2" />
        <ExperienceCard className="bento:col-span-4 bento:col-start-1 bento:row-start-3" />
        <ExpertiseCard className="bento:col-span-5 bento:col-start-5 bento:row-start-3" />
        <EducationCard className="md:col-span-2 bento:col-span-3 bento:col-start-10 bento:row-start-3" />
      </main>

      <DetailPanel
        open={Boolean(detail)}
        onClose={closePanel}
        eyebrow={shown?.kind === "projet" ? "Étude de cas" : "Expérience"}
        title={shown?.item.title ?? ""}
        contentKey={shown?.item.slug}
      >
        {shown?.kind === "projet" && <ProjectDetail project={shown.item} />}
        {shown?.kind === "parcours" && <ExperienceDetail experience={shown.item} />}
      </DetailPanel>
    </>
  );
};

export default Index;
