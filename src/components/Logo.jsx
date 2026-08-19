import { Zap } from "lucide-react";

export default function Logo({ className = "" }) {
  return (
    <a
      href="#topo"
      className={`inline-flex items-center gap-2 font-display font-bold text-xl text-ink ${className}`}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-canvas">
        <Zap className="size-5" strokeWidth={2.5} fill="currentColor" />
      </span>
      Fluxo<span className="text-gradient">AI</span>
    </a>
  );
}
