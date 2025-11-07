import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Education = () => {
  const education = [
    {
      degree: "Product Manager",
      institution: "Thiga",
      year: "2025",
      description: "Maîtrise du cycle de vie produit : définition des problèmes, recherche utilisateur, conception de solutions, priorisation, tests et mesure d'impact",
      color: "from-primary/20 to-primary/5"
    },
    {
      degree: "Docteur en Pharmacie",
      institution: "Faculté de Pharmacie de Montpellier",
      year: "2012 - 2018",
      description: "Thèse : Prise en charge de la maladie de Parkinson - développement de dispositifs médicaux innovants et perspectives en biotechnologie",
      specialization: "Spécialisation Industrie : Outils de Gestion de Projet, R&D, Enregistrement & Économie de la Santé",
      color: "from-primary/15 to-primary/5"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
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
                <GraduationCap className="h-6 w-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Formation
                </h2>
              </motion.div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <AnimatedSection
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
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
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      initial={false}
                    />

                    {/* Glow effect */}
                    <motion.div
                      className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10"
                      initial={false}
                    />

                    <CardHeader className="relative z-10">
                      <div className="flex items-start gap-3">
                        <motion.div
                          className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="text-base font-medium mt-1">
                            {edu.institution}
                          </CardDescription>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-block"
                          >
                            <Badge variant="outline" className="mt-2 border-primary/50">
                              {edu.year}
                            </Badge>
                          </motion.div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3 relative z-10">
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                      {edu.specialization && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          viewport={{ once: true }}
                          className="text-sm text-muted-foreground pt-3 border-t border-border"
                        >
                          <span className="font-semibold text-primary">Spécialisation :</span>{" "}
                          {edu.specialization}
                        </motion.p>
                      )}
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
