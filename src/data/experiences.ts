// Parcours professionnel : une entrée par poste.
// `summary` est la phrase courte affichée dans la grille, `description` ouvre le panneau de détail.

export interface Experience {
  slug: string;
  period: string;
  periodDetail: string;
  title: string;
  company: string;
  companyNote?: string;
  summary: string;
  description: string;
  highlights: string[];
  tags: string[];
  projectSlug?: string;
}

export const experiences: Experience[] = [
  {
    slug: "klanik-product-manager",
    period: "2026 – aujourd'hui",
    periodDetail: "2026 – aujourd'hui",
    title: "Product Manager",
    company: "Klanik",
    companyNote: "En mission chez un éditeur de logiciel de santé",
    summary: "Nouveau logiciel métier pour soignants libéraux",
    description:
      "Product Manager d'un nouveau logiciel métier pour les professionnels de santé libéraux.",
    highlights: [],
    tags: [],
  },
  {
    slug: "move-in-med-product-manager",
    period: "2024 – 2025",
    periodDetail: "Avril 2024 – Juillet 2025",
    title: "Product Manager",
    company: "Move In Med",
    summary: "Télésurveillance : roadmap, discovery, delivery",
    description:
      "Pilotage produit d'une plateforme de télésurveillance et de coordination des soins : roadmap, discovery, delivery et conformité MDR.",
    highlights: [
      "Élaboration de la roadmap produit avec +150 retours utilisateurs",
      "Product Discovery : entretiens utilisateurs, maquettes Figma, définition des workflows",
      "Product Delivery : gestion de 4 releases de 3 mois en méthodologie Agile (Scrum)",
      "Transition réussie de +20 clients vers nouvelle plateforme",
      "Conformité MDR en collaboration avec la responsable QARA",
    ],
    tags: ["Product Strategy", "Agile", "User Research", "Figma", "MDR"],
    projectSlug: "plateforme-telesurveillance",
  },
  {
    slug: "move-in-med-chef-de-projet-innovation",
    period: "2023 – 2024",
    periodDetail: "Mai 2023 – Avril 2024",
    title: "Chef de projet Innovation",
    company: "Move In Med",
    summary: "Digitalisation de 3 parcours de soins",
    description:
      "Digitalisation de parcours de soins et accompagnement au changement pour la télésurveillance.",
    highlights: [
      "Digitalisation de 3 parcours de soins (santé mentale, oncologie, cardiologie)",
      "Accompagnement au changement organisationnel pour la télésurveillance",
      "Veilles scientifiques et benchmarks concurrentiels",
      "Paramétrage personnalisé des solutions clients",
    ],
    tags: ["Innovation", "Télésurveillance", "Change Management"],
  },
  {
    slug: "resilient-innovation-responsable-rd",
    period: "2017 – 2023",
    periodDetail: "Septembre 2017 – Avril 2023",
    title: "Responsable R&D",
    company: "Resilient Innovation",
    summary: "DM classe I Parkinson · ISO 13485 · MDR",
    description:
      "Développement d'un dispositif médical de classe I pour les patients atteints de la maladie de Parkinson.",
    highlights: [
      "Développement intégral d'un dispositif médical innovant (Classe I) pour Parkinson",
      "Mise en place SMQ conforme ISO 13485",
      "Gestion de la conformité MDR (UE 2017/745)",
      "Coordination partenaires techniques et animation réunions KOLs",
      "Rédaction protocoles cliniques et recherche de financements",
    ],
    tags: ["R&D", "ISO 13485", "MDR", "Dispositifs Médicaux"],
    projectSlug: "dispositif-medical-parkinson",
  },
];

export const getExperience = (slug?: string) => experiences.find((e) => e.slug === slug);
