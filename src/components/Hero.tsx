import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                David Hoffnung
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              Product Manager - Santé Numérique
            </p>
            <p className="text-xl text-muted-foreground font-medium">
              Docteur en Pharmacie
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert en Product Management spécialisé dans la santé digitale, je combine une expertise pharmaceutique 
            et une maîtrise du cycle de vie produit pour créer des solutions innovantes qui transforment les parcours de soin.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
            <a 
              href="mailto:david.hoffnung@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>david.hoffnung@gmail.com</span>
            </a>
            <a 
              href="tel:+33628521778" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+33 6 28 52 17 78</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Juvignac (34990)</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="hero"
              className="text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Me Contacter
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Voir mon Parcours
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
