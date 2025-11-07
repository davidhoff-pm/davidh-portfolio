import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Product Manager - Santé Numérique";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

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
    <section id="hero" className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-center gap-12"
          >
            {/* Photo Profile avec animation */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="flex-shrink-0 relative"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(79, 209, 197, 0.3)",
                    "0 0 40px rgba(79, 209, 197, 0.5)",
                    "0 0 20px rgba(79, 209, 197, 0.3)",
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-secondary border-4 border-primary overflow-hidden relative"
              >
                <img
                  src="/photo-david.jpeg"
                  alt="David Hoffnung"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.div>

            {/* Content avec animations */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <motion.div variants={itemVariants} className="space-y-3">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold tracking-tight"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ backgroundSize: "200% auto" }}
                  >
                    David Hoffnung
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl font-semibold text-foreground h-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {typedText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
                  />
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-muted-foreground font-medium"
                >
                  Docteur en Pharmacie
                </motion.p>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                Expert en Product Management spécialisé dans la santé digitale, je combine une expertise pharmaceutique
                et une maîtrise du cycle de vie produit pour créer des solutions innovantes qui transforment les parcours de soin.
              </motion.p>

              {/* Contact Info avec animations */}
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
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors justify-center md:justify-start group cursor-pointer"
                    >
                      <motion.div
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.div>
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
