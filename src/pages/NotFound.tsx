import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="flex min-h-dvh items-center justify-center p-6">
    <div className="rounded-2xl border bg-card px-8 py-10 text-center">
      <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted-foreground">Erreur 404</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight">Page introuvable</h1>
      <Link
        to="/"
        className="mt-6 inline-flex h-11 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Retour au portfolio
      </Link>
    </div>
  </main>
);

export default NotFound;
