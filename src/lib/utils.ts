import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Chemin d'un fichier de /public, compatible avec le sous-dossier de déploiement (VITE_BASE_PATH).
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
