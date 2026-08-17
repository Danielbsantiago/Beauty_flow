import { MessageCircle } from "lucide-react";

export default function Logo({ dark = false, className = "" }) {
  return (
    <a
      href="#topo"
      className={`inline-flex items-center gap-2 font-display font-bold text-xl ${
        dark ? "text-white" : "text-ink"
      } ${className}`}
    >
      <span className="relative flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
        <MessageCircle className="size-5" strokeWidth={2.5} fill="currentColor" />
        <span className="absolute -right-1 -top-1 flex size-3.5 items-center justify-center rounded-full bg-brand-light text-[8px] text-brand-dark">
          ✦
        </span>
      </span>
      Beauty<span className="text-brand">Flow</span>
    </a>
  );
}
