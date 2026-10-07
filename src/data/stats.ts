// Chiffres clés affichés sous forme de petites cartes.
// Uniquement des chiffres présents dans le contenu du site (expériences, études de cas).

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  // Depuis septembre 2017 (Resilient Innovation) : à mettre à jour chaque année.
  { value: "9 ans", label: "dans la santé, R&D puis produit" },
  { value: "5 000+", label: "patients sur la plateforme migrée" },
  { value: "20+", label: "clients migrés vers la nouvelle plateforme" },
  { value: "150+", label: "retours utilisateurs dans la roadmap" },
];
