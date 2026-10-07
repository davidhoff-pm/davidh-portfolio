// Expertise, formation et approche.

// Compétences différenciantes, affichées en chips dans la carte « Expertise & formation ».
export const expertise: string[] = [
  "MDR 2017/745",
  "ISO 13485",
  "RGPD / HDS",
  "Dispositifs médicaux",
  "Discovery terrain avec soignants",
  "Delivery Agile",
  "IA générative appliquée au produit",
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  note?: string;
}

export const education: Education[] = [
  {
    degree: "Docteur en Pharmacie",
    institution: "Université de Montpellier",
    period: "2012 – 2018",
    note: "Thèse : Parkinson et dispositifs médicaux",
  },
  {
    degree: "Formation Product Management",
    institution: "Thiga",
    period: "2025",
  },
];

// Affichée seulement sur les écrans assez hauts.
export const approach: string[] = [
  "Je parle le langage des soignants",
  "Conformité pensée dès la conception",
  "Discovery avant delivery",
];
