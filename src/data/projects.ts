// Projets et études de cas. Le contenu provient des anciennes pages src/pages/projects/*.tsx,
// remis en forme en puces courtes pour le panneau de détail.

export interface KeyFigure {
  value: string;
  label: string;
}

export interface CaseStudy {
  tagline: string;
  keyFigures: KeyFigure[];
  context: string[];
  problem: string[];
  role: string[];
  discovery: string[];
  strategy: string[];
  prioritization?: string;
  delivery: string[];
  artifacts: string[];
  results: {
    user: string[];
    business: string[];
    businessLabel?: string;
  };
  learnings: string[];
}

export interface ImageFocus {
  // Valeur CSS object-position : zone de la capture à montrer dans la vignette (ex. "30% 40%").
  position: string;
  // Agrandissement autour de cette zone (1 = capture entière).
  zoom: number;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  // Une ou deux lignes problème / résultat, affichées sur la carte.
  pitch: string;
  // Ligne de métriques de la carte (chiffres tirés de l'étude de cas).
  metrics: string;
  // Rôle pour un projet personnel (sinon : rôle, entreprise et période de l'expérience liée).
  personalRole?: string;
  // Texte plus complet, affiché à la place du pitch sur les grands écrans.
  description: string;
  image: string;
  imageFocus: ImageFocus;
  kind: "professionnel" | "personnel";
  tags: string[];
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    slug: "plateforme-telesurveillance",
    title: "Plateforme de télésurveillance pour pathologies chroniques",
    shortTitle: "Plateforme de télésurveillance",
    pitch: "Migration vers un nouvel outil de coordination des soins",
    metrics: "5 000+ patients · 20+ clients dans la migration préparée, 3 migrés",
    description:
      "Solution digitale complète pour le suivi des patients en pathologie chronique avec alertes en temps réel.",
    image: "plateforme-telesurveillance.png",
    imageFocus: { position: "55% 40%", zoom: 1.3 },
    kind: "professionnel",
    tags: ["Migration produit", "User research"],
    caseStudy: {
      tagline:
        "Comment j'ai préparé la migration d'une plateforme de 5 000+ patients vers une nouvelle génération d'outils de coordination des soins.",
      keyFigures: [
        { value: "5 000+", label: "patients sur la plateforme historique" },
        { value: "20", label: "entretiens approfondis en 4 mois" },
        { value: "4", label: "releases en 1 an" },
        { value: "−30 %", label: "de temps de déploiement" },
      ],
      context: [
        "Scale-up HealthTech spécialisée dans la télésurveillance et la coordination des parcours de soins.",
        "Deux plateformes en parallèle : une version historique (5 000+ patients, 400+ professionnels de santé) et une nouvelle plateforme lancée depuis un an (environ 500 à 1 000 patients actifs).",
        "Un carrefour stratégique : maintenir le socle de clients historiques (Instituts de Santé spécialisés en oncologie) tout en se développant sur de nouveaux marchés (Centres de Réadaptation Thérapeutique en gériatrie, télésurveillance en santé mentale).",
      ],
      problem: [
        "Utilisateurs : attachés à leurs habitudes, les professionnels de santé craignaient de perdre des fonctionnalités essentielles. « Nous payons pour un produit avec X fonctionnalités, nous voulons retrouver exactement les mêmes. »",
        "Business : réduire les coûts de maintenance de deux plateformes parallèles et migrer les clients historiques sans perte de revenus.",
        "Croissance : développer de nouveaux marchés (CRT, parcours coordonnés).",
        "Commercial : des équipes ancrées dans l'ancien produit, qui peinaient à vendre la nouvelle solution.",
      ],
      role: [
        "Product Manager pendant 12 mois, avec un background de Docteur en Pharmacie.",
        "Orchestrer la migration : analyser les véritables besoins métiers derrière les fonctionnalités existantes et accompagner la transition des clients historiques.",
        "Piloter le développement : 4 releases trimestrielles, interviews utilisateurs, rédaction des spécifications fonctionnelles.",
        "Développer de nouveaux parcours : modules de télésurveillance pour l'oncologie et la santé mentale.",
        "Créer les processus : workflow de paramétrage pour l'équipe Delivery.",
      ],
      discovery: [
        "20 entretiens approfondis avec les coordinatrices de parcours sur 4 mois, pour aller au-delà de la demande « je veux garder cette fonctionnalité » et identifier le besoin métier réel.",
        "Cartographie sur Notion de l'ensemble des fonctionnalités utilisées, avec des bases de données interconnectées pour tracer chaque fonctionnalité jusqu'à son usage réel et distinguer l'essentiel du « nice to have ».",
        "Découverte majeure : les utilisateurs ne voulaient pas forcément des fonctionnalités identiques, mais la capacité de réaliser leurs tâches efficacement.",
      ],
      strategy: [
        "Décision n°1 : prioriser les CRT (orientation future de l'entreprise) tout en sécurisant la migration des IS (revenus actuels).",
        "Décision n°2 : traiter les projets de télésurveillance (oncologie, santé mentale) comme des POCs générateurs de données, sans les mettre en priorité de développement.",
        "Quick win : la recherche de patient par numéro de téléphone, demandée par un seul client mais adoptée par tous, a créé un momentum positif pour la migration.",
        "Roadmap équilibrée entre besoins immédiats de migration, fonctionnalités pour conquérir les CRT et contraintes réglementaires (classification dispositif médical).",
      ],
      delivery: [
        "Architecture produit modulaire et paramétrable, pour servir différentes pathologies sans développements spécifiques.",
        "Validation continue : 3 à 5 entretiens utilisateurs avant chaque release et validation systématique des maquettes avec 1 à 2 utilisateurs clés et parties prenantes.",
        "Fonctionnalités : gestion d'activités et d'ateliers, moteur de tâches générées automatiquement selon les rendez-vous, gestion documentaire du dossier patient, formulaires dynamiques personnalisables selon la pathologie, gestion granulaire des droits selon l'équipe de soins.",
        "Backlog géré sur 4 releases trimestrielles en Agile : sprints de 2 semaines, reviews utilisateurs à chaque release.",
        "Workflow de paramétrage standardisé pour configurer la plateforme pour chaque nouvel établissement.",
      ],
      artifacts: [
        "Cartographie des fonctionnalités sur Notion",
        "Architecture produit modulaire",
        "Workflow de paramétrage standardisé",
        "Maquettes validées utilisateurs",
      ],
      results: {
        user: [
          "Ergonomie améliorée : interface plus claire et structurée, réduisant la charge cognitive des coordinatrices.",
          "Efficacité accrue : la recherche par téléphone et l'automatisation des tâches ont simplifié le quotidien.",
          "Flexibilité : les formulaires personnalisables adaptent l'outil à chaque parcours sans développement.",
          "Retour terrain : les professionnels de santé ont particulièrement apprécié les tâches automatiques et les formulaires personnalisables.",
        ],
        business: [
          "Migration préparée avec 20+ clients, 3 migrés pendant ma mission.",
          "30 % de réduction du temps de déploiement grâce au workflow de paramétrage.",
          "Amorce de la réduction des coûts de maintenance via la consolidation sur une seule plateforme.",
          "Ouverture confirmée vers le marché des CRT avec une solution adaptée.",
          "Les quick wins ont commencé à convaincre les équipes commerciales de la valeur de la nouvelle plateforme.",
        ],
      },
      learnings: [
        "Creuser au-delà de la demande : « Je veux cette fonctionnalité » cache souvent « J'ai besoin d'accomplir cette tâche ». C'est la différence entre une migration forcée et une transition réussie.",
        "La valeur d'un background métier : ma formation de Docteur en Pharmacie m'a permis d'établir immédiatement la crédibilité avec les professionnels de santé et de comprendre les enjeux médicaux sous-jacents.",
        "L'art du compromis stratégique : naviguer entre clients historiques, nouveaux marchés et contraintes techniques, prioriser sans perdre de vue la vision long terme, tout en livrant des quick wins.",
        "La réussite d'une migration repose moins sur la technologie que sur la compréhension profonde des utilisateurs et l'accompagnement du changement humain.",
      ],
    },
  },
  {
    slug: "application-suivi-rch",
    title: "Application de suivi pour la rectocolite hémorragique",
    shortTitle: "Application de suivi RCH",
    pitch: "Suivi des poussées de RCH, prototypé avec l'IA générative",
    metrics: "3 semaines de développement · 7-8 itérations",
    personalRole: "Projet personnel · Product Manager et développeur",
    description:
      "Application dédiée au suivi personnalisé des patients atteints de rectocolite hémorragique, pour une meilleure adhésion thérapeutique et un suivi proactif des poussées.",
    image: "application-suivi-rch.PNG",
    // Peu de zoom : titre « Répartition des scores », histogramme et cartes de pourcentages visibles.
    imageFocus: { position: "50% 10%", zoom: 1 },
    kind: "personnel",
    tags: ["Prototypage IA", "Maladie chronique"],
    caseStudy: {
      tagline:
        "Un outil personnel de suivi médical développé en 3 semaines, d'un besoin personnel à une solution fonctionnelle grâce à l'IA générative.",
      keyFigures: [
        { value: "3 sem.", label: "de développement" },
        { value: "7-8", label: "itérations" },
        { value: "0 → 100 %", label: "de données suivies" },
      ],
      context: [
        "Le suivi gastro-entérologique nécessite des données précises sur l'évolution des symptômes (nombre de selles, présence de sang).",
        "Réalité terrain : des réponses approximatives en consultation, faute d'outil de suivi adapté.",
        "Paradoxe du marché : aucune application dédiée à la RCH sur Google Play France, uniquement des compteurs généralistes ou des plateformes institutionnelles complexes.",
      ],
      problem: [
        "Impossible de fournir des données fiables pour l'adaptation thérapeutique.",
        "Impact : des décisions médicales fondées sur du déclaratif flou plutôt que sur un suivi objectif.",
      ],
      role: [
        "Product Manager et développeur sur un projet personnel, et utilisateur principal de la solution.",
        "Responsable des choix produit et de l'implémentation, avec l'assistance de l'IA (Claude, Cursor).",
      ],
      discovery: [
        "Revue rapide des solutions existantes sur Google Play.",
        "Besoin minimal identifié : suivi médical + score clinique validé.",
        "Décision d'architecture immédiate : stockage local (contrainte HDS non viable pour un projet personnel).",
      ],
      strategy: [
        "V1 (semaine 1) : score de Lichtiger adapté, suivi quotidien, export PDF.",
        "V2 à V7 (semaines 2-3) : ajouts issus de l'usage : IBD-Disk, graphiques, suivi du traitement et de l'observance, notes libres.",
        "Approche pragmatique : chaque ajout répond à un besoin identifié pendant l'usage.",
      ],
      prioritization:
        "Priorisation guidée par l'usage réel : chaque version répond à un besoin concret identifié pendant l'utilisation.",
      delivery: [
        "3 semaines de développement, 7 à 8 itérations.",
        "Technologies web modernes, IA générative (Claude, Cursor) pour accélérer le développement.",
        "Principe : fonctionnel plutôt que parfait.",
        "Architecture simple en stockage local pour éviter les contraintes HDS.",
      ],
      artifacts: ["Application fonctionnelle", "7-8 versions itératives", "Export PDF structuré"],
      results: {
        user: [
          "Passage de 0 à 100 % de données suivies (3 semaines d'usage).",
          "Visualisation de tendances invisibles auparavant (corrélations symptômes / jours).",
          "Un document PDF structuré prêt pour la consultation, au lieu de notes éparses.",
        ],
        businessLabel: "Limites et prochaines étapes",
        business: [
          "Limites assumées : mono-utilisateur (pas de validation externe), portabilité limitée (export/import manuel), pas encore de chiffrement.",
          "Prochaines étapes envisagées : chiffrement, test avec 2 à 3 utilisateurs de confiance, évaluation des options de distribution (association de patients ou partenariat).",
        ],
      },
      learnings: [
        "L'IA générative transforme la capacité de prototypage individuel.",
        "Un besoin personnel bien compris vaut mieux qu'une étude de marché théorique.",
        "Les contraintes réglementaires en santé créent une barrière d'entrée, même pour des solutions simples.",
        "Passer d'un outil personnel à un produit public demande un saut qualitatif important (RGPD, chiffrement, support).",
      ],
    },
  },
  {
    slug: "dispositif-medical-parkinson",
    title: "Dispositif médical innovant pour la maladie de Parkinson",
    shortTitle: "Dispositif médical Parkinson",
    pitch: "Aide à la marche par métronome auditif, v1 puis prototype v2.0",
    metrics: "Classe I, 200 patients équipés",
    description:
      "Développement d'un dispositif médical innovant de classe I pour l'amélioration de la qualité de vie des patients.",
    image: "dispositif-medical-parkinson.png",
    imageFocus: { position: "30% 45%", zoom: 1.3 },
    kind: "professionnel",
    tags: ["Recherche clinique", "Deep tech"],
    caseStudy: {
      tagline:
        "5 ans à transformer une idée scientifique en solution concrète pour 200 patients atteints de troubles de la marche.",
      keyFigures: [
        { value: "200", label: "patients équipés avec la v1" },
        { value: "5", label: "KOL neurologues et MPR engagés" },
        { value: "5 ans", label: "de développement produit" },
        { value: "i-LAB", label: "financement obtenu" },
      ],
      context: [
        "Startup de 3 personnes développant un dispositif médical innovant pour les patients atteints de la maladie de Parkinson.",
        "Une v1 100 % hardware, fondée sur le métronome auditif, technique validée en rééducation, pour aider les patients à retrouver une marche plus fluide.",
        "Un marché significatif : 150 000 patients en France souffrant de troubles de la marche liés à Parkinson, 25 000 nouveaux cas par an.",
        "Seuls acteurs avec un produit commercialisé, les concurrents ayant privilégié la validation clinique avant la mise sur le marché.",
      ],
      problem: [
        "Patients : un dispositif basique, sans retour sur leur progression.",
        "Professionnels de santé : pas de données objectives en vie réelle pour adapter les traitements.",
        "Business : pas de remboursement faute d'études cliniques (vente directe uniquement), concurrence mieux positionnée scientifiquement.",
        "Réglementaire et financement : transition complexe vers le règlement européen (UE) 2017/745, ressources limitées sans investisseur.",
      ],
      role: [
        "Rôle hybride pendant 5 ans, couvrant l'ensemble de la chaîne de valeur produit.",
        "R&D et coordination : gestion de projet, coordination des partenaires externes hardware, software et IA, veille scientifique.",
        "Stratégie clinique : rédaction de protocoles, recherche de financements, relations avec 5 KOL neurologues et MPR.",
        "Qualité et réglementaire : mise en place du système qualité ISO 13485, conformité au règlement DM européen.",
        "Marketing et impact : automatisation CRM, étude d'impact patient, communications scientifiques.",
      ],
      discovery: [
        "Déploiement de la v1 auprès de 200 patients, avec une collecte systématique des retours via le CRM.",
        "Collaborations avec 5 Key Opinion Leaders (neurologues et médecins MPR) pour comprendre les besoins cliniques profonds.",
        "Expérimentations terrain avec les médecins MPR, générant les premières données d'usage en vie réelle, une première dans notre domaine.",
        "Insight majeur : les professionnels avaient besoin de données objectives pour personnaliser les traitements, pas seulement d'un outil de rééducation.",
      ],
      strategy: [
        "Vision v2.0 : analyse en temps réel de la marche avec adaptation automatique du rythme, interface patient pour visualiser statistiques et progression, IA (réseaux de neurones) pour exploiter les données en recherche.",
        "Innovation technique : un capteur unique à la taille (accéléromètre + gyroscope), là où les concurrents utilisaient deux capteurs aux pieds. Un choix dicté par l'usage terrain et la praticité pour des patients âgés.",
        "Financement : rédaction et obtention du financement i-LAB, compensant partiellement l'absence d'investisseurs.",
      ],
      prioritization:
        "Priorisation guidée par les contraintes de ressources et les besoins terrain : le capteur unique, techniquement plus complexe, a été retenu pour sa praticité réelle.",
      delivery: [
        "Prototype v2.0 fonctionnel avec analyse temps réel, testé avec des patients sélectionnés qui ont validé l'approche.",
        "Protocole clinique multicentrique pour 200 patients sur 24 mois, prêt à lancer mais bloqué faute de financement.",
        "Mise en conformité : implémentation progressive du système qualité ISO 13485 (audits internes réalisés), préparation à la transition vers le règlement 2017/745.",
        "Coordination des partenaires externes (hardware, software) sans développeurs internes, en traduisant les besoins médicaux en spécifications techniques.",
      ],
      artifacts: [
        "Prototype v2.0 fonctionnel",
        "Protocole clinique multicentrique",
        "Documentation ISO 13485",
        "Spécifications techniques",
      ],
      results: {
        user: [
          "200 patients équipés avec la v1, retrouvant une autonomie de marche.",
          "Prototype v2.0 validé par les premiers testeurs avec des retours positifs.",
          "Usage simplifié : capteur unique contre double capteur chez la concurrence.",
          "Données objectives générées pour les professionnels de santé lors des expérimentations.",
        ],
        business: [
          "Position de pionnier : seul dispositif commercialisé sur le marché français.",
          "Financement i-LAB obtenu, validant le potentiel d'innovation.",
          "5 KOL engagés, créant une légitimité scientifique.",
          "Base solide pour une future levée de fonds (protocole clinique prêt, système qualité en cours).",
          "Blocages : base de recharge non finalisée faute de 100 k€ supplémentaires, étude clinique non lancée (coût prohibitif), certification ISO 13485 non obtenue (processus interrompu).",
        ],
      },
      learnings: [
        "La vision produit ne suffit pas sans les ressources : avoir identifié le bon problème et conçu la bonne solution (IA + capteurs) n'a pas suffi. Sécuriser les financements et phaser le développement est crucial.",
        "L'approche terrain : le capteur unique à la taille, dicté par l'observation des usages réels plutôt que par la facilité technique, montre la valeur d'une approche centrée utilisateur, même en deep tech.",
        "La polyvalence comme atout : naviguer entre réglementation, clinique, technique et business donne une vision à 360° et la capacité de traduire des besoins complexes entre parties prenantes.",
        "Maintenir le développement pendant 5 ans avec des ressources minimales a forgé ma capacité à gérer l'ambiguïté, prioriser sous contrainte et garder une vision produit cohérente.",
      ],
    },
  },
];

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug);
