import { Download, Linkedin, Mail, MapPin } from "lucide-react";
import { approach } from "@/data/expertise";
import { CV_FILE, LINKEDIN_URL, profile } from "@/data/profile";
import { asset, cn } from "@/lib/utils";
import { cardSurface } from "./BentoCard";

const buttonBase =
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-card bento:h-10 [&_svg]:size-4";
const primaryButton = cn(buttonBase, "bg-primary text-primary-foreground hover:bg-primary/90");
const secondaryButton = cn(buttonBase, "border bg-card text-foreground hover:border-primary/60 hover:text-primary");

const IdentityCard = ({ className }: { className?: string }) => (
  <section aria-label="Présentation" className={cn(cardSurface, "flex flex-col", className)}>
    <div className="flex items-center gap-4">
      <img
        src={asset(profile.photo)}
        alt={`Portrait de ${profile.name}`}
        width={72}
        height={72}
        className="size-[72px] shrink-0 rounded-2xl bg-primary/10 object-cover object-[50%_35%] ring-1 ring-primary/30 ring-offset-2 ring-offset-card"
      />
      <div className="min-w-0">
        <h1 className="font-serif text-[clamp(1.6rem,7vw,2rem)] font-normal leading-none tracking-[-0.01em] bento:text-[38px]">
          {profile.name}
        </h1>
        <p className="mt-2 text-[14px] font-medium leading-5 text-primary [text-wrap:balance]">{profile.role}</p>
      </div>
    </div>

    <p className="mt-4 text-[14px] leading-[22px] text-foreground">{profile.pitch}</p>

    <p className="mt-3 flex items-center gap-2 text-[13px] leading-[18px] text-muted-foreground">
      <MapPin aria-hidden className="size-4 shrink-0" />
      {profile.location}
    </p>

    {/* Approche : seulement si la hauteur d'écran le permet, en discret. */}
    <ul aria-label="Mon approche" className="mt-4 hidden space-y-1 border-t pt-4 tall:block">
      {approach.map((item) => (
        <li key={item} className="flex items-baseline gap-2 text-[13px] leading-[18px] text-muted-foreground">
          <span aria-hidden className="size-1 shrink-0 translate-y-[-2px] rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>

    <div className="mt-4 grid grid-cols-2 gap-2 tall:mt-5 bento:flex bento:flex-wrap">
      <a href={`mailto:${profile.email}`} title={profile.email} className={primaryButton}>
        <Mail aria-hidden />
        Me contacter
      </a>
      {LINKEDIN_URL && (
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={secondaryButton}>
          <Linkedin aria-hidden />
          LinkedIn
        </a>
      )}
      {CV_FILE && (
        <a href={asset(CV_FILE)} download className={cn(secondaryButton, "col-span-2")}>
          <Download aria-hidden />
          Télécharger le CV
        </a>
      )}
    </div>
  </section>
);

export default IdentityCard;
