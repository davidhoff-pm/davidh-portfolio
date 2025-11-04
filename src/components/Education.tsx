import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Product Manager",
      institution: "Thiga",
      year: "2025",
      description: "Maîtrise du cycle de vie produit : définition des problèmes, recherche utilisateur, conception de solutions, priorisation, tests et mesure d'impact"
    },
    {
      degree: "Docteur en Pharmacie",
      institution: "Faculté de Pharmacie de Montpellier",
      year: "2012 - 2018",
      description: "Thèse : Prise en charge de la maladie de Parkinson - développement de dispositifs médicaux innovants et perspectives en biotechnologie",
      specialization: "Spécialisation Industrie : Outils de Gestion de Projet, R&D, Enregistrement & Économie de la Santé"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-sm px-4 py-1 border-primary text-primary">Formation</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Parcours Académique</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="border-border bg-card hover:border-primary transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium mt-1">
                        {edu.institution}
                      </CardDescription>
                      <Badge variant="outline" className="mt-2">
                        {edu.year}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground">{edu.description}</p>
                  {edu.specialization && (
                    <p className="text-sm text-muted-foreground pt-2 border-t border-border">
                      <span className="font-semibold">Spécialisation :</span> {edu.specialization}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
