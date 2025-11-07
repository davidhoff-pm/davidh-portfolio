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
      color: "from-primary/20 via-primary/10 to-transparent",
      skills: [
        { name: "Product Strategy & Roadmap", level: 95 },
        { name: "Product Discovery & Delivery", level: 90 },
        { name: "User Research & Interviews", level: 88 },
        { name: "Priorisation & Backlog", level: 92 },
        { name: "Métriques & Impact", level: 85 },
        { name: "Stakeholder Management", level: 90 }
      ]
    },
    {
      category: "Méthodologies & Outils",
      icon: Wrench,
      color: "from-primary/15 via-primary/8 to-transparent",
      skills: [
        { name: "Agile / Scrum", level: 93 },
        { name: "Figma / UX Design", level: 87 },
        { name: "Notion / Jira", level: 90 },
        { name: "SQL / Data Analysis", level: 82 },
        { name: "A/B Testing", level: 85 },
        { name: "KPI & Analytics", level: 88 }
      ]
    },
    {
      category: "Santé Numérique",
      icon: HeartPulse,
      color: "from-primary/12 via-primary/6 to-transparent",
      skills: [
        { name: "Dispositifs Médicaux", level: 95 },
        { name: "Parcours de Soins Digitaux", level: 92 },
        { name: "Télésurveillance", level: 90 },
        { name: "Pathologies Chroniques", level: 88 },
        { name: "Oncologie & Gériatrie", level: 85 },
        { name: "Solutions B2B Healthcare", level: 87 }
      ]
    },
    {
      category: "Réglementaire & Qualité",
      icon: Shield,
      color: "from-primary/10 via-primary/5 to-transparent",
      skills: [
        { name: "MDR UE 2017/745", level: 93 },
        { name: "ISO 13485", level: 90 },
        { name: "RGPD & HDS", level: 88 },
        { name: "Cybersécurité ANS", level: 85 },
        { name: "Protocoles Cliniques", level: 87 },
        { name: "Conformité Produits", level: 91 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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
                      y: -8,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="h-full"
                  >
                    <Card
                      className="border-border bg-card hover:border-primary transition-all duration-300 h-full relative overflow-hidden group"
                    >
                      {/* Animated gradient background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        initial={false}
                      />

                      <CardHeader className="relative z-10">
                        <CardTitle className="text-xl flex items-center gap-3">
                          <motion.div
                            className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="h-5 w-5 text-primary" />
                          </motion.div>
                          <span className="group-hover:text-primary transition-colors">
                            {category.category}
                          </span>
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="relative z-10 space-y-4">
                        {category.skills.map((skill, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-foreground">
                                {skill.name}
                              </span>
                              <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: idx * 0.05 + 0.2 }}
                                viewport={{ once: true }}
                                className="text-xs text-primary font-semibold"
                              >
                                {skill.level}%
                              </motion.span>
                            </div>

                            {/* Progress bar */}
                            <div className="relative h-2 bg-secondary/50 rounded-full overflow-hidden">
                              <motion.div
                                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/70 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 1,
                                  delay: idx * 0.05,
                                  ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                              >
                                {/* Shimmer effect */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                  animate={{
                                    x: ["-100%", "200%"]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: idx * 0.1
                                  }}
                                />
                              </motion.div>
                            </div>
                          </motion.div>
                        ))}
                      </CardContent>

                      {/* Glow effect on hover */}
                      <motion.div
                        className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10"
                        initial={false}
                      />
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
