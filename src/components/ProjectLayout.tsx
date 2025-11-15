import { ReactNode } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectLayoutProps {
  children: ReactNode;
  image?: string;
}

const ProjectLayout = ({ children, image }: ProjectLayoutProps) => {
  return (
    <main className="min-h-screen">
      {/* Banner Image */}
      {image && (
        <div className="w-full h-80 md:h-96 bg-secondary/30 overflow-hidden border-b border-border">
          <img
            src={image}
            alt="Project banner"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <Button 
              variant="ghost" 
              className="mb-6"
              asChild
            >
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour au portfolio
              </Link>
            </Button>
          </div>
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProjectLayout;

