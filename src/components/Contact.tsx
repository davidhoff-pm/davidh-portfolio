import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "david.hoffnung@gmail.com",
      href: "mailto:david.hoffnung@gmail.com",
      primary: true
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+33 6 28 52 17 78",
      href: "tel:+33628521778",
      primary: true
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Juvignac (34990)",
      href: "https://www.google.com/maps?q=Juvignac,France",
      primary: false
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/50 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <AnimatedSection direction="up">
            <div className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Prêt à collaborer ?
                </h2>
              </motion.div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Je suis disponible immédiatement pour de nouvelles opportunités en Product Management
                dans le secteur de la santé numérique.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <Card className="border-border bg-background relative overflow-hidden group hover:border-primary transition-all duration-300">
              {/* Gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              <CardContent className="pt-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <motion.a
                        key={index}
                        href={method.href}
                        target={method.icon === MapPin ? "_blank" : undefined}
                        rel={method.icon === MapPin ? "noopener noreferrer" : undefined}
                        className="flex flex-col items-center text-center gap-3 p-6 rounded-lg hover:bg-secondary/50 transition-all group/item"
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-muted-foreground">
                            {method.label}
                          </p>
                          <p className={`font-semibold ${method.primary ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {method.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row justify-center gap-4 mt-8 pt-8 border-t border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="default"
                      onClick={() => window.location.href = "mailto:david.hoffnung@gmail.com"}
                      className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Envoyer un e-mail
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.location.href = "tel:+33628521778"}
                      className="hover:bg-primary/10 hover:text-primary hover:border-primary"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Appeler
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>

              {/* Glow effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10"
                initial={false}
              />
            </Card>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="text-center space-y-4">
              <motion.p
                className="text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités ou simplement échanger.
              </motion.p>
              <motion.p
                className="text-sm text-muted-foreground italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                Disponible immédiatement • Full remote (France) ou Hybride (Montpellier et périphérie) • Déplacements possibles
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
