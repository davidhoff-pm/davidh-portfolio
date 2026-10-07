import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";

interface DetailPanelProps {
  open: boolean;
  onClose: () => void;
  eyebrow: string;
  title: string;
  contentKey?: string;
  children: ReactNode;
}

// Panneau latéral (plein écran sur mobile). Radix gère Échap, le piège de focus et l'accessibilité.
const DetailPanel = ({ open, onClose, eyebrow, title, contentKey, children }: DetailPanelProps) => (
  <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-40 bg-zinc-950/25 duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
      <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full flex-col bg-card shadow-2xl duration-200 focus:outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-right-6 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-right-6 sm:max-w-[560px] sm:border-l">
        <header className="flex items-start justify-between gap-4 border-b px-5 py-4 sm:px-7">
          <div className="min-w-0 pt-1">
            <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted-foreground">{eyebrow}</p>
            <Dialog.Title className="mt-1 text-xl font-semibold leading-snug tracking-tight">{title}</Dialog.Title>
          </div>
          <Dialog.Close
            aria-label="Fermer le panneau"
            className="-mr-2 inline-flex size-11 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X aria-hidden className="size-5" />
          </Dialog.Close>
        </header>
        {/* La clé remet le défilement en haut quand on passe d'un détail à un autre. */}
        <div key={contentKey} className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          {children}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DetailPanel;
