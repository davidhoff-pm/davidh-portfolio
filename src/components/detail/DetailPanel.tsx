import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useRef, type ReactNode } from "react";

interface DetailPanelProps {
  open: boolean;
  onClose: () => void;
  eyebrow: string;
  shortTitle: string;
  title: string;
  meta?: string;
  contentKey?: string;
  children: ReactNode;
}

// Panneau latéral (plein écran sur mobile). Radix gère Échap, le piège de focus et l'accessibilité.
const DetailPanel = ({ open, onClose, eyebrow, shortTitle, title, meta, contentKey, children }: DetailPanelProps) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          // Le focus va au contenu (défilable au clavier) plutôt qu'au bouton Fermer.
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            bodyRef.current?.focus();
          }}
          className="fixed inset-y-0 right-0 z-50 flex w-full flex-col bg-card shadow-[-16px_0_48px_-16px_rgba(0,0,0,0.35)] duration-200 focus:outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-right-6 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-right-6 sm:max-w-[560px] sm:border-l"
        >
          {/* En-tête collant : rappel du sujet pendant la lecture. */}
          <header className="flex items-center justify-between gap-4 border-b py-2 pl-4 pr-2 sm:pl-7 sm:pr-4">
            <div className="min-w-0">
              <p className="t-eyebrow">{eyebrow}</p>
              <p className="truncate text-[14px] font-semibold leading-5">{shortTitle}</p>
            </div>
            <Dialog.Close
              aria-label="Fermer le panneau"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X aria-hidden className="size-5" />
            </Dialog.Close>
          </header>
          {/* La clé remet le défilement en haut quand on passe d'un détail à un autre. */}
          <div
            key={contentKey}
            ref={bodyRef}
            tabIndex={-1}
            className="scrollbar-thin flex-1 overflow-y-auto px-4 pb-10 pt-6 outline-none sm:px-7"
          >
            <Dialog.Title className="text-[20px] font-semibold leading-7 tracking-[-0.01em] [text-wrap:balance]">
              {title}
            </Dialog.Title>
            {meta && <p className="mt-1.5 text-[13px] leading-[18px] text-muted-foreground">{meta}</p>}
            <div className="mt-5">{children}</div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DetailPanel;
