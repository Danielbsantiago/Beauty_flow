const VARIANTS = {
  primary:
    "bg-gradient-to-r from-brand to-brand-2 text-canvas shadow-[0_8px_28px_-6px_rgba(139,108,255,0.55)] hover:shadow-[0_10px_32px_-6px_rgba(139,108,255,0.7)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-panel text-ink border border-line hover:border-brand/40 hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink/70 hover:text-ink",
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
