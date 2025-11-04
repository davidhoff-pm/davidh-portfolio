import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

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
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Prêt à Collaborer ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Je suis disponible immédiatement pour de nouvelles opportunités en Product Management 
              dans le secteur de la santé numérique.
            </p>
          </div>

          <Card className="shadow-elegant border-primary/20">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.icon === MapPin ? "_blank" : undefined}
                    rel={method.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="flex flex-col items-center text-center gap-3 p-6 rounded-lg hover:bg-secondary/50 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <method.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">
                        {method.label}
                      </p>
                      <p className={`font-semibold ${method.primary ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex justify-center gap-4 mt-8 pt-8 border-t border-border">
                <Button 
                  size="lg" 
                  variant="hero"
                  className="text-lg"
                  onClick={() => window.location.href = "mailto:david.hoffnung@gmail.com"}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Envoyer un Email
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg"
                  onClick={() => window.location.href = "tel:+33628521778"}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Appeler
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités ou simplement échanger.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Disponible immédiatement • Télétravail ou présentiel • Déplacements possibles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
