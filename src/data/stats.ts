// Chiffres clés affichés sous forme de petites cartes.

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "2017", label: "en santé depuis, R&D puis produit" },
  { value: "150+", label: "retours utilisateurs dans la roadmap" },
  { value: "20+", label: "clients migrés" },
  { value: "4", label: "releases trimestrielles" },
];
