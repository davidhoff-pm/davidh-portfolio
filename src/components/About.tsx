import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Pill, Target, Users, Shield } from "lucide-react";

const About = () => {
  const strengths = [
    {
      icon: Pill,
      title: "Double Expertise",
      description: "Docteur en Pharmacie + Product Manager certifié, une combinaison unique pour la santé digitale"
    },
    {
      icon: Target,
      title: "Focus Utilisateur",
      description: "Conception centrée sur l'amélioration des parcours de soin (pathologies chroniques, oncologie, addictologie)"
    },
    {
      icon: Users,
      title: "Approche Collaborative",
      description: "Expérience en méthodologie Agile avec équipes pluridisciplinaires et stakeholders"
    },
    {
      icon: Shield,
      title: "Conformité Réglementaire",
      description: "Maîtrise approfondie MDR UE 2017/745, ISO 13485, RGPD, HDS, Cybersécurité ANS"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-sm px-4 py-1">À Propos</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Une Expertise Unique</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Product Manager spécialisé en Santé Numérique, je transforme les défis du secteur médical 
              en solutions digitales innovantes et conformes aux exigences réglementaires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <strength.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{strength.title}</h3>
                      <p className="text-muted-foreground">{strength.description}</p>
                    </div>
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

export default About;
