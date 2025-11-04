import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Product Owner",
      company: "Move In Med",
      period: "Avril 2024 - Juillet 2025",
      highlights: [
        "Élaboration de la roadmap produit avec +150 retours utilisateurs",
        "Product Discovery : entretiens utilisateurs, maquettes Figma, définition des workflows",
        "Product Delivery : gestion de 4 releases de 3 mois en méthodologie Agile (Scrum)",
        "Transition réussie de +20 clients vers nouvelle plateforme",
        "Conformité MDR en collaboration avec la responsable QARA"
      ],
      tags: ["Product Strategy", "Agile", "User Research", "Figma", "MDR"]
    },
    {
      title: "Chef de projet Innovation",
      company: "Move In Med",
      period: "Mai 2023 - Avril 2024",
      highlights: [
        "Digitalisation de 3 parcours de soins (santé mentale, oncologie, cardiologie)",
        "Accompagnement au changement organisationnel pour la télésurveillance",
        "Veilles scientifiques et benchmarks concurrentiels",
        "Paramétrage personnalisé des solutions clients"
      ],
      tags: ["Innovation", "Télésurveillance", "Change Management"]
    },
    {
      title: "Responsable R&D",
      company: "Resilient Innovation",
      period: "Septembre 2017 - Avril 2023",
      highlights: [
        "Développement intégral d'un dispositif médical innovant (Classe I) pour Parkinson",
        "Mise en place SMQ conforme ISO 13485",
        "Gestion de la conformité MDR (UE 2017/745)",
        "Coordination partenaires techniques et animation réunions KOLs",
        "Rédaction protocoles cliniques et recherche de financements"
      ],
      tags: ["R&D", "ISO 13485", "MDR", "Dispositifs Médicaux"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-sm px-4 py-1">Parcours</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Expérience Professionnelle</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="border-l-4 border-l-primary hover:shadow-elegant transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-2xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground/80 mt-1">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
