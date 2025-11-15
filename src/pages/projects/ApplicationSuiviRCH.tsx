import { useEffect } from "react";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

const ApplicationSuiviRCH = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectLayout>
      <ProjectCaseStudy
        title="Application de Suivi pour la Rectocolite Hémorragique"
        tagline="Développement d'un outil personnel de tracking médical en 3 semaines, transformant un besoin personnel en solution fonctionnelle grâce à l'IA générative"
        image="/application-suivi-rch.PNG"
        context="Suivi gastro-entérologique nécessitant des données précises sur l'évolution des symptômes (nombre de selles, présence de sang). Réalité terrain : réponses approximatives en consultation faute d'outil de tracking adapté. Paradoxe du marché : zéro application dédiée RCH sur Google Play France, uniquement des compteurs généralistes ou des plateformes institutionnelles complexes."
        problem="Impossibilité de fournir des données fiables pour l'adaptation thérapeutique. Impact : décisions médicales basées sur du déclaratif flou plutôt que sur un suivi objectif."
        role="Product Manager et développeur sur projet personnel. Utilisateur principal de la solution. Responsable des choix produit et de l'implémentation (avec assistance IA : Claude/Cursor)."
        discovery={{
          research: [
            "Revue rapide des solutions existantes via Google Play (preview uniquement).",
            "Identification du besoin minimal : tracking médical + score clinique validé.",
            "Décision architecture immédiate : local storage (contrainte HDS non viable pour projet personnel)."
          ],
          artifacts: ["Revue Google Play", "Identification besoins minimaux", "Décision architecture"]
        }}
        strategy={{
          roadmap: [
            "V1 (semaine 1) : Core features - Score de Lichtiger adapté, tracking quotidien, export PDF.",
            "V2-V7 (semaines 2-3) : Ajouts basés sur l'usage - IBD-Disk, graphiques, suivi traitement/observance, notes libres.",
            "Approche pragmatique : chaque ajout répond à un besoin identifié pendant l'usage."
          ],
          prioritization: "Priorisation guidée par l'usage réel et les besoins identifiés au fur et à mesure. Approche itérative où chaque version répond à un besoin concret identifié pendant l'utilisation."
        }}
        delivery={{
          design: [
            "3 semaines de développement avec 7-8 itérations.",
            "Stack : Technologies web modernes, IA pour accélération du développement.",
            "Principe : fonctionnel > parfait."
          ],
          execution: [
            "Développement itératif basé sur l'usage réel comme utilisateur principal.",
            "Utilisation de l'IA générative (Claude/Cursor) pour accélérer le développement.",
            "Architecture simple avec local storage pour éviter les contraintes HDS."
          ],
          artifacts: ["Application fonctionnelle", "7-8 versions itératives", "Export PDF structuré"]
        }}
        results={{
          user: [
            "Passage de 0 à 100% de données trackées (3 semaines d'usage).",
            "Visualisation de patterns invisibles avant (corrélations symptômes/jours).",
            "Document PDF structuré prêt pour consultation vs notes éparses."
          ],
          business: [
            "Limites assumées : Mono-utilisateur (pas de validation externe), portabilité limitée (export/import manuel), pas de chiffrement implémenté (prévu).",
            "Projet actuellement personnel avec potentiel d'évolution. Prochaines étapes envisagées : sécurisation (chiffrement), test avec 2-3 utilisateurs de confiance, évaluation des options de distribution (association patient ou partenariat)."
          ],
          learning: `L'IA générative transforme la capacité de prototypage individuel. Un besoin personnel bien compris > étude de marché théorique. Les contraintes réglementaires santé créent une barrière d'entrée même pour des solutions simples. Le passage de "outil personnel" à "produit public" nécessite un saut qualitatif important (RGPD, chiffrement, support).`
        }}
        tags={["Product Management", "Mobile Health", "Chronic Disease", "IA Générative", "Prototypage Rapide"]}
      />
    </ProjectLayout>
  );
};

export default ApplicationSuiviRCH;

