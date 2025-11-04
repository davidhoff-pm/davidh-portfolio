const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} David Hoffnung - Product Manager Santé Numérique
          </p>
          <p className="text-sm text-muted-foreground">
            Disponible pour de nouvelles opportunités
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
