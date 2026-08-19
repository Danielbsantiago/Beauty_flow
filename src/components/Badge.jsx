export default function Badge({ icon: Icon, children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink ${className}`}
    >
      {Icon && <Icon className="size-3.5 text-brand-2" />}
      {children}
    </span>
  );
}
