import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Home, User, Briefcase, FolderGit2, Award, GraduationCap, Mail } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { id: "hero", label: "Accueil", icon: Home },
    { id: "about", label: "À propos", icon: User },
    { id: "experience", label: "Parcours", icon: Briefcase },
    { id: "projects", label: "Projets", icon: FolderGit2 },
    { id: "skills", label: "Compétences", icon: Award },
    { id: "education", label: "Formation", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-background/80 border-b border-border shadow-lg"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Name */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-bold text-lg text-primary cursor-pointer"
                onClick={() => scrollToSection("hero")}
              >
                DH
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-4 py-2 rounded-lg transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>

                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Mobile Navigation */}
              <div className="flex md:hidden items-center gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
