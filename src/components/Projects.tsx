import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Plateforme de Télésurveillance",
      description: "Solution digitale complète pour le suivi des patients en pathologie chronique avec alertes en temps réel",
      tags: ["Product Management", "Healthcare", "MDR"],
      link: "#", // Remplacer par votre lien
      github: null
    },
    {
      title: "Dispositif Médical - Parkinson",
      description: "Développement d'un dispositif médical innovant de classe I pour l'amélioration de la qualité de vie des patients",
      tags: ["R&D", "ISO 13485", "Clinical Research"],
      link: "#", // Remplacer par votre lien
      github: null
    },
    {
      title: "Transformation Digitale",
      description: "Migration réussie de +20 clients vers une nouvelle plateforme SaaS avec zéro interruption de service",
      tags: ["Product Strategy", "Change Management", "B2B"],
      link: "#", // Remplacer par votre lien
      github: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-sm px-4 py-1 border-primary text-primary">Projets</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Réalisations Clés</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez quelques-uns des projets sur lesquels j'ai travaillé dans le domaine de la santé numérique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border-border bg-background hover:border-primary transition-all duration-300 flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.link && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Voir plus
                      </Button>
                    )}
                    {project.github && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              💡 Les liens vers les projets sont des placeholders. Modifiez le fichier <code className="text-primary">src/components/Projects.tsx</code> pour ajouter vos liens réels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
