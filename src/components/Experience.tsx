import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

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
    <section id="experience" className="py-20 bg-card/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <AnimatedSection direction="up">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2"
              >
                <Briefcase className="h-6 w-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Parcours Professionnel
                </h2>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ transformOrigin: "top" }}
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;

                return (
                  <AnimatedSection
                    key={index}
                    direction={isEven ? "left" : "right"}
                    delay={index * 0.2}
                  >
                    <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>
                      {/* Timeline dot */}
                      <motion.div
                        className="absolute left-4 md:left-1/2 -ml-3 md:-ml-4 z-20"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="w-3 h-3 rounded-full bg-background" />
                        </motion.div>
                      </motion.div>

                      {/* Content card */}
                      <div className="w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0">
                        <motion.div
                          whileHover={{
                            scale: 1.02,
                            y: -5,
                            transition: { type: "spring", stiffness: 300 }
                          }}
                        >
                          <Card
                            className="border-2 border-border bg-background hover:border-primary transition-all duration-500 relative overflow-hidden group shadow-lg"
                          >
                            {/* Animated gradient background */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              initial={false}
                            />

                            {/* Glow effect */}
                            <motion.div
                              className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10"
                              initial={false}
                            />

                            <CardHeader className="relative z-10">
                              <div className="flex flex-col gap-3">
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex-1">
                                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                                      {exp.title}
                                    </CardTitle>
                                    <CardDescription className="text-lg font-semibold text-foreground/80 mt-1">
                                      {exp.company}
                                    </CardDescription>
                                  </div>
                                  <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="flex-shrink-0"
                                  >
                                    <Badge variant="outline" className="border-primary text-primary whitespace-nowrap">
                                      <Calendar className="h-3 w-3 mr-1" />
                                      {exp.period}
                                    </Badge>
                                  </motion.div>
                                </div>
                              </div>
                            </CardHeader>

                            <CardContent className="space-y-4 relative z-10">
                              <ul className="space-y-2">
                                {exp.highlights.map((highlight, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-3 group/item"
                                  >
                                    <motion.span
                                      className="text-primary font-bold text-lg"
                                      whileHover={{ scale: 1.5, rotate: 360 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      •
                                    </motion.span>
                                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                                      {highlight}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>

                              <div className="flex flex-wrap gap-2 pt-2">
                                {exp.tags.map((tag, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                  >
                                    <Badge variant="secondary" className="hover:bg-primary/20 transition-colors">
                                      {tag}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </div>
                            </CardContent>

                            {/* Shine effect */}
                            <motion.div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                              initial={false}
                              animate={{
                                background: [
                                  "linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%, transparent 100%)",
                                ],
                                backgroundPosition: ["-200% 0", "200% 0"],
                              }}
                              transition={{
                                duration: 2,
                                ease: "linear",
                                repeat: Infinity,
                              }}
                              style={{ backgroundSize: "200% 100%" }}
                            />
                          </Card>
                        </motion.div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
