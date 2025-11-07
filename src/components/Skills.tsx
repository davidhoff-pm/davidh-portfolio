import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Wrench, HeartPulse, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Skills = () => {
  const skillCategories = [
    {
      category: "Product Management",
      icon: Target,
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
      icon: Wrench,
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
      icon: HeartPulse,
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
      icon: Shield,
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
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <AnimatedSection direction="up">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Compétences
                </h2>
              </motion.div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un ensemble de compétences techniques et métiers pour créer des produits digitaux de santé performants
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <AnimatedSection
                  key={index}
                  direction="up"
                  delay={index * 0.15}
                >
                  <motion.div
                    whileHover={{
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="h-full"
                  >
                    <Card
                      className="border-border bg-card hover:border-primary transition-all duration-300 h-full relative overflow-hidden group shadow-sm hover:shadow-md"
                    >
                      <CardHeader className="relative z-10">
                        <CardTitle className="text-xl flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="group-hover:text-primary transition-colors">
                            {category.category}
                          </span>
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="relative z-10">
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <Badge
                                variant="secondary"
                                className="text-sm py-1.5 px-3 bg-secondary hover:bg-primary/10 hover:text-primary hover:border-primary transition-all cursor-default border border-transparent"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
