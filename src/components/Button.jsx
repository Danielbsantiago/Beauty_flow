const VARIANTS = {
  primary:
    "bg-brand text-white shadow-[0_8px_24px_-6px_rgba(22,163,74,0.55)] hover:bg-brand-hover hover:shadow-[0_10px_28px_-6px_rgba(22,163,74,0.65)] hover:-translate-y-0.5 active:translate-y-0",
  "primary-on-dark":
    "bg-brand text-white shadow-[0_8px_24px_-6px_rgba(22,163,74,0.5)] hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-white text-ink border border-ink/12 hover:border-brand/40 hover:text-brand-dark hover:-translate-y-0.5 active:translate-y-0",
  "secondary-on-dark":
    "bg-white/5 text-white border border-white/25 hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink hover:text-brand-dark",
};

const SIZES = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export default function Button({
  as,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  children,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="size-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="size-4 shrink-0" />}
    </>
  );

  const Tag = as || (href ? "a" : "button");

  if (Tag === "a") {
    return (
      <a href={href} onClick={onClick} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
