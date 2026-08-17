import { Rocket } from "lucide-react";
import { buildWhatsappLink } from "../lib/config";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/8 bg-white/95 p-3 backdrop-blur-md lg:hidden [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
      <a
        href={buildWhatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(22,163,74,0.55)] transition-transform active:scale-[0.98]"
      >
        <Rocket className="size-4.5" />
        Quero automatizar meu salão
      </a>
    </div>
  );
}
