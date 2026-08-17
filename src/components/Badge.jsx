export default function Badge({ icon: Icon, children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-brand-light px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-dark ${className}`}
    >
      {Icon && <Icon className="size-3.5" />}
      {children}
    </span>
  );
}
