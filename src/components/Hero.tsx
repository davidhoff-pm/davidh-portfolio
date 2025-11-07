import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      text: "david.hoffnung@gmail.com",
      href: "mailto:david.hoffnung@gmail.com"
    },
    {
      icon: Phone,
      text: "+33 6 28 52 17 78",
      href: "tel:+33628521778"
    },
    {
      icon: MapPin,
      text: "Juvignac (34990)",
      href: null
    }
  ];

  return (
    <section id="hero" className="relative pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center gap-12"
          >
            {/* Photo Profile avec animation sobre */}
            <motion.div
              variants={itemVariants}
              className="flex-shrink-0"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-secondary border-4 border-primary overflow-hidden shadow-lg">
                <img
                  src="/photo-david.jpeg"
                  alt="David Hoffnung"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content avec animations sobres */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <motion.div variants={itemVariants} className="space-y-3">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary">
                  David Hoffnung
                </h1>

                <p className="text-xl md:text-2xl font-semibold text-foreground">
                  Product Manager - Santé Numérique
                </p>

                <p className="text-lg text-muted-foreground font-medium">
                  Docteur en Pharmacie
                </p>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                Expert en Product Management spécialisé dans la santé digitale, je combine une expertise pharmaceutique
                et une maîtrise du cycle de vie produit pour créer des solutions innovantes qui transforment les parcours de soin.
              </motion.p>

              {/* Contact Info avec animations sobres */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-3 text-sm md:text-base"
              >
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;
                  const Component = link.href ? motion.a : motion.div;
                  const props = link.href ? { href: link.href } : {};

                  return (
                    <Component
                      key={index}
                      {...props}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors justify-center md:justify-start group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{link.text}</span>
                    </Component>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
