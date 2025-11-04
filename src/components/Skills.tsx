import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Product Management",
      skills: [
        "Product Strategy & Roadmap",
        "Product Discovery & Delivery",
        "User Research & Interviews",
        "Priorisation & Backlog",
        "Métriques & Impact",
        "Stakeholder Management"
      ]
    },
    {
      category: "Méthodologies & Outils",
      skills: [
        "Agile / Scrum",
        "Figma / UX Design",
        "Notion / Jira",
        "SQL / Data Analysis",
        "A/B Testing",
        "KPI & Analytics"
      ]
    },
    {
      category: "Santé Numérique",
      skills: [
        "Dispositifs Médicaux",
        "Parcours de Soins Digitaux",
        "Télésurveillance",
        "Pathologies Chroniques",
        "Oncologie & Gériatrie",
        "Solutions B2B Healthcare"
      ]
    },
    {
      category: "Réglementaire & Qualité",
      skills: [
        "MDR UE 2017/745",
        "ISO 13485",
        "RGPD & HDS",
        "Cybersécurité ANS",
        "Protocoles Cliniques",
        "Conformité Produits"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-sm px-4 py-1">Compétences</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Stack Technique & Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary"
                        className="font-normal hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
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

export default Skills;
