import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Pill, Target, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  const strengths = [
    {
      icon: Pill,
      title: "Double expertise",
      description: "Docteur en Pharmacie + Product Manager certifié, une combinaison unique pour la santé digitale",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Target,
      title: "Focus utilisateur",
      description: "Conception centrée sur l'amélioration des parcours de soin (pathologies chroniques, oncologie, addictologie)",
      color: "from-primary/15 to-primary/5"
    },
    {
      icon: Users,
      title: "Approche collaborative",
      description: "Expérience en méthodologie Agile avec équipes pluridisciplinaires et stakeholders",
      color: "from-primary/10 to-primary/5"
    },
    {
      icon: Shield,
      title: "Conformité réglementaire",
      description: "Maîtrise approfondie MDR UE 2017/745, ISO 13485, RGPD, HDS, Cybersécurité ANS",
      color: "from-primary/5 to-transparent"
    }
  ];

  return (
    <section id="about" className="pt-12 pb-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <AnimatedSection direction="fade">
            <Separator className="mb-8" />
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <div className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  À propos
                </h2>
              </motion.div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Product Manager spécialisé en Santé Numérique, je transforme les défis du secteur médical
                en solutions digitales innovantes et conformes aux exigences réglementaires.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;

              return (
                <AnimatedSection
                  key={index}
                  direction="up"
                  delay={0.2 + index * 0.1}
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
                        className={`absolute inset-0 bg-gradient-to-br ${strength.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        initial={false}
                      />

                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: "radial-gradient(circle at 50% 50%, rgba(79, 209, 197, 0.1) 0%, transparent 70%)"
                        }}
                      />

                      <CardContent className="pt-6 relative z-10">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shadow-lg">
                              <Icon className="h-7 w-7 text-primary" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                              {strength.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {strength.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>

                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        initial={false}
                        whileHover={{
                          background: [
                            "linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%, transparent 100%)",
                          ],
                          backgroundPosition: ["-200%", "200%"],
                          transition: { duration: 1.5, ease: "easeInOut" }
                        }}
                        style={{ backgroundSize: "200% 100%" }}
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

export default About;
