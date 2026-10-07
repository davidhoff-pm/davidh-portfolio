import { Check, Download, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";
import { approach } from "@/data/expertise";
import { CV_FILE, LINKEDIN_URL, profile } from "@/data/profile";
import { asset, cn } from "@/lib/utils";

const buttonBase =
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-card bento:h-9 tall:h-10 [&_svg]:size-4";
const primaryButton = cn(buttonBase, "bg-primary text-primary-foreground hover:bg-primary/90");
const secondaryButton = cn(buttonBase, "border bg-card text-foreground hover:border-foreground/25 hover:bg-muted");

const IdentityCard = ({ className }: { className?: string }) => (
  <section
    aria-label="Présentation"
    className={cn(
      "flex flex-col rounded-2xl border bg-card p-5 bento:min-h-0 bento:overflow-y-auto bento:p-5 tall:p-6",
      className,
    )}
  >
    <div className="flex items-center gap-4">
      <img
        src={asset(profile.photo)}
        alt={`Portrait de ${profile.name}`}
        width={80}
        height={80}
        className="size-16 shrink-0 rounded-xl border object-cover tall:size-20"
      />
      <div className="min-w-0">
        <h1 className="text-[30px] font-semibold leading-[1.1] tracking-tight tall:text-[36px]">{profile.name}</h1>
        <p className="mt-1.5 text-[15px] font-medium leading-snug">{profile.role}</p>
      </div>
    </div>

    <p className="mt-4 text-[15px] leading-relaxed text-foreground/80 tall:mt-5">{profile.pitch}</p>

    <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground tall:mt-5 tall:space-y-2">
      <li className="flex items-center gap-2.5">
        <GraduationCap aria-hidden className="size-4 shrink-0" />
        {profile.credential}
      </li>
      <li className="flex items-center gap-2.5">
        <MapPin aria-hidden className="size-4 shrink-0" />
        {profile.location}
      </li>
      <li className="flex items-center gap-2.5">
        <Mail aria-hidden className="size-4 shrink-0" />
        <a href={`mailto:${profile.email}`} className="underline-offset-4 hover:text-foreground hover:underline">
          {profile.email}
        </a>
      </li>
    </ul>

    {/* Approche : masquée sur les écrans de bureau trop bas pour tenir sans défilement. */}
    <div className="mt-5 border-t pt-4 short:hidden">
      <h2 className="text-[13px] font-medium uppercase leading-4 tracking-[0.08em] text-muted-foreground">
        Mon approche
      </h2>
      <ul className="mt-2.5 space-y-1.5 text-sm">
        {approach.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-6 flex flex-wrap gap-2 bento:mt-auto bento:pt-5">
      <a href={`mailto:${profile.email}`} className={primaryButton}>
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
        <a href={asset(CV_FILE)} download className={secondaryButton}>
          <Download aria-hidden />
          Télécharger le CV
        </a>
      )}
    </div>
  </section>
);

export default IdentityCard;
