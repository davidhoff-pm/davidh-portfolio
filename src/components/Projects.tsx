import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderGit2, Briefcase, User, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Projects = () => {
  const projects = [
    {
      id: "plateforme-telesurveillance",
      title: "Plateforme de télésurveillance & coordination des soins",
      description: "Solution digitale complète pour le suivi des patients en pathologie chronique avec alertes en temps réel",
      tags: ["Product Management", "Healthcare", "MDR"],
      link: "/projets/plateforme-telesurveillance",
      type: "professional"
    },
    {
      id: "dispositif-medical-parkinson",
      title: "Dispositif médical - Parkinson",
      description: "Développement d'un dispositif médical innovant de classe I pour l'amélioration de la qualité de vie des patients",
      tags: ["R&D", "ISO 13485", "Clinical Research"],
      link: "/projets/dispositif-medical-parkinson",
      type: "professional"
    },
    {
      id: "application-suivi-rch",
      title: "Application de suivi RCH",
      description: "Plateforme mobile dédiée au suivi personnalisé des patients atteints de Rectocolite Hémorragique, permettant une meilleure adhésion thérapeutique et un monitoring proactif des poussées inflammatoires",
      tags: ["Product Management", "Mobile Health", "Chronic Disease"],
      link: "/projets/application-suivi-rch",
      type: "personal"
    },
    {
      id: "plateforme-panel-anticorps",
      title: "Plateforme de création de panel d'anticorps",
      description: "Application permettant aux chercheurs et techniciens de créer, gérer et exporter des panels d'anticorps pour des expériences d'imagerie par cytométrie de masse. Interface intuitive pour filtrer et sélectionner des anticorps selon différents critères, avec visualisation des métaux disponibles et export PDF/CSV.",
      tags: ["Product Management", "B2B Healthcare", "Research Tools"],
      link: null,
      type: "personal",
      wip: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30 relative overflow-hidden">
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
            {projects.map((project, index) => {
              const isProfessional = project.type === "professional";
              const TypeIcon = isProfessional ? Briefcase : User;

              return (
                <AnimatedSection
                  key={index}
                  direction="up"
                  delay={index * 0.1}
                >
                  <motion.div
                    whileHover={{
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="h-full"
                  >
                    <Card
                      className={`
                        flex flex-col h-full relative overflow-hidden group shadow-sm hover:shadow-md
                        transition-all duration-300
                        ${isProfessional
                          ? 'border-2 border-primary/40 bg-card hover:border-primary'
                          : 'border border-border bg-card hover:border-primary/60'
                        }
                      `}
                    >
                      {/* Type Badge en haut à droite */}
                      <div className="absolute top-4 right-4 z-20">
                        <Badge
                          variant={isProfessional ? "default" : "outline"}
                          className={`
                            flex items-center gap-1.5 px-3 py-1
                            ${isProfessional
                              ? 'bg-primary text-primary-foreground shadow-sm'
                              : 'border-primary/40 text-primary bg-background/80 backdrop-blur-sm'
                            }
                          `}
                        >
                          <TypeIcon className="h-3 w-3" />
                          {isProfessional ? 'Professionnel' : 'Personnel'}
                        </Badge>
                      </div>

                      <CardHeader className="relative z-10">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors pr-24">
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
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <Badge
                                variant="secondary"
                                className="text-xs hover:bg-primary/10 hover:text-primary hover:border-primary transition-all border border-transparent"
                              >
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          {project.wip ? (
                            <motion.div
                              whileHover={{ scale: 1.03 }}
                              className="flex-1"
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full cursor-not-allowed opacity-60"
                                disabled
                              >
                                <Settings className="h-4 w-4 mr-2 animate-spin" />
                                Work in progress
                              </Button>
                            </motion.div>
                          ) : project.link ? (
                            <motion.div
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              className="flex-1"
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary"
                                asChild
                              >
                                <Link to={project.link}>
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Voir plus
                                </Link>
                              </Button>
                            </motion.div>
                          ) : null}
                          {project.github && (
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
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

export default Projects;
