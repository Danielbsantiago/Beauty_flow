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
      <path d="M11.7,28.3 L8.55,35.02 L16.95,28.3 Z" fill={`url(#${gradientId})`} />
      <circle cx="18" cy="15.7" r="14.7" fill={`url(#${gradientId})`} />
      <rect x="9.39" y="13.18" width="2.1" height="5.04" rx="1.05" fill="var(--color-canvas)" />
      <rect x="13.17" y="11.5" width="2.1" height="8.4" rx="1.05" fill="var(--color-canvas)" />
      <rect x="16.95" y="9.82" width="2.1" height="11.76" rx="1.05" fill="var(--color-canvas)" />
      <rect x="20.73" y="11.5" width="2.1" height="8.4" rx="1.05" fill="var(--color-canvas)" />
      <rect x="24.51" y="13.18" width="2.1" height="5.04" rx="1.05" fill="var(--color-canvas)" />
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
