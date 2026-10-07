// Compétences, formation et approche.

export interface ExpertiseGroup {
  label: string;
  skills: string[];
}

export const expertise: ExpertiseGroup[] = [
  {
    label: "Produit",
    skills: ["Discovery", "Roadmap", "Priorisation", "Delivery Agile", "User research", "Figma"],
  },
  {
    label: "Santé & réglementaire",
    skills: ["MDR 2017/745", "ISO 13485", "RGPD", "HDS", "Dispositifs médicaux", "Télésurveillance"],
  },
  {
    label: "IA & data",
    skills: ["IA générative appliquée au produit", "Prototypage IA", "SQL", "KPI"],
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  note?: string;
}

export const education: Education[] = [
  {
    degree: "Product Manager",
    institution: "Thiga",
    period: "2025",
  },
  {
    degree: "Docteur en Pharmacie",
    institution: "Université de Montpellier",
    period: "2012 – 2018",
    note: "Thèse : maladie de Parkinson et dispositifs médicaux",
  },
];

export const approach: string[] = [
  "Je parle le langage des soignants",
  "Conformité pensée dès la conception",
  "Discovery avant delivery",
];
