import { AudioLines } from "lucide-react";
import { SITE } from "../lib/config";

export default function Logo({ className = "" }) {
  return (
    <a
      href="#topo"
      className={`inline-flex items-center gap-2 font-display font-bold text-xl text-ink ${className}`}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-canvas">
        <AudioLines className="size-5" strokeWidth={2.25} />
      </span>
      {SITE.brand.slice(0, -2)}
      <span className="text-gradient">{SITE.brand.slice(-2)}</span>
    </a>
  );
}
