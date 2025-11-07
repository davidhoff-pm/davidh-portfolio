import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Projects = () => {
  const projects = [
    {
      id: "plateforme-telesurveillance",
      title: "Plateforme de télésurveillance & coordination des soins",
      description: "Solution digitale complète pour le suivi des patients en pathologie chronique avec alertes en temps réel",
      tags: ["Professionnel","Product Management", "Healthcare", "MDR"],
      link: "/projets/plateforme-telesurveillance",
      color: "from-primary/20 to-primary/5"
    },
    {
      id: "dispositif-medical-parkinson",
      title: "Dispositif médical - Parkinson",
      description: "Développement d'un dispositif médical innovant de classe I pour l'amélioration de la qualité de vie des patients",
      tags: ["Professionnel","R&D", "ISO 13485", "Clinical Research"],
      link: "/projets/dispositif-medical-parkinson",
      color: "from-primary/15 to-primary/5"
    },
    {
      id: "application-suivi-rch",
      title: "Application de suivi RCH",
      description: "Plateforme mobile dédiée au suivi personnalisé des patients atteints de Rectocolite Hémorragique, permettant une meilleure adhésion thérapeutique et un monitoring proactif des poussées inflammatoires",
      tags: ["Personnel","Product Management", "Mobile Health", "Chronic Disease"],
      link: "/projets/application-suivi-rch",
      color: "from-primary/12 to-primary/5"
    },
    {
      id: "plateforme-panel-anticorps",
      title: "Plateforme de création de panel d'anticorps",
      description: "Solution B2B innovante pour la recherche pharmaceutique permettant aux laboratoires de concevoir et valider des panels d'anticorps personnalisés avec une réduction significative des délais de développement",
      tags: ["Personnel","Product Management", "B2B Healthcare", "Research Tools"],
      link: "/projets/plateforme-panel-anticorps",
      color: "from-primary/10 to-primary/5"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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
                <FolderGit2 className="h-6 w-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Projets
                </h2>
              </motion.div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Découvrez quelques-uns des projets sur lesquels j'ai travaillé dans le domaine de la santé numérique
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <AnimatedSection
                key={index}
                direction="up"
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="h-full"
                >
                  <Card
                    className="border-border bg-background hover:border-primary transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
                  >
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      initial={false}
                    />

                    {/* Glow effect */}
                    <motion.div
                      className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10"
                      initial={false}
                    />

                    <CardHeader className="relative z-10">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col justify-between space-y-4 relative z-10">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            <Badge variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        {project.link && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1"
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full hover:bg-primary/10 hover:text-primary hover:border-primary"
                              asChild
                            >
                              <Link to={project.link}>
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Voir plus
                              </Link>
                            </Button>
                          </motion.div>
                        )}
                        {project.github && (
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(project.github, '_blank')}
                            >
                              <Github className="h-4 w-4" />
                            </Button>
                          </motion.div>
                        )}
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
