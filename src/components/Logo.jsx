import { useId } from "react";
import { SITE } from "../lib/config";

function LogoMark({ className = "" }) {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 36 36"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-brand)" />
          <stop offset="100%" stopColor="var(--color-brand-2)" />
        </linearGradient>
      </defs>
      <path d="M10,27 L7,33 L14,28 Z" fill={`url(#${gradientId})`} />
      <circle cx="18" cy="16" r="13" fill={`url(#${gradientId})`} />
      <rect x="9.1" y="13.5" width="1.8" height="5" rx="0.9" fill="var(--color-canvas)" />
      <rect x="13.1" y="11.5" width="1.8" height="9" rx="0.9" fill="var(--color-canvas)" />
      <rect x="17.1" y="9.5" width="1.8" height="13" rx="0.9" fill="var(--color-canvas)" />
      <rect x="21.1" y="11.5" width="1.8" height="9" rx="0.9" fill="var(--color-canvas)" />
      <rect x="25.1" y="13.5" width="1.8" height="5" rx="0.9" fill="var(--color-canvas)" />
    </svg>
  );
}

export default function Logo({ className = "" }) {
  return (
    <a
      href="#topo"
      className={`inline-flex items-center gap-2 font-display font-bold text-xl text-ink ${className}`}
    >
      <LogoMark className="size-9 shrink-0" />
      {SITE.brand.slice(0, -2)}
      <span className="text-gradient">{SITE.brand.slice(-2)}</span>
    </a>
  );
}
