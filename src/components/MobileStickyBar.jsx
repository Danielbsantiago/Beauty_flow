import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";
import { buildWhatsappLink } from "../lib/config";

function isAnyVisible(targets) {
  return targets.some((el) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  });
}

export default function MobileStickyBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = ["planos", "cta-final"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (targets.length === 0) return;

    const recompute = () => setHidden(isAnyVisible(targets));
    recompute();

    const observer = new IntersectionObserver(recompute, { threshold: 0 });
    targets.forEach((t) => observer.observe(t));
    window.addEventListener("scroll", recompute, { passive: true });
    window.addEventListener("resize", recompute);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", recompute);
      window.removeEventListener("resize", recompute);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/95 p-3 backdrop-blur-md transition-transform duration-300 lg:hidden [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))] ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <a
        href={buildWhatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 py-3.5 text-sm font-bold text-canvas shadow-[0_8px_24px_-6px_rgba(139,108,255,0.55)] transition-transform active:scale-[0.98]"
      >
        <Rocket className="size-4.5" />
        Quero conhecer o AtendfluxIA
      </a>
    </div>
  );
}
