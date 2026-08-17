export default function PhoneFrame({ children, className = "" }) {
  return (
    <div className={`relative mx-auto w-[290px] sm:w-[320px] ${className}`}>
      <div className="rounded-[2.75rem] bg-ink p-2.5 shadow-2xl ring-1 ring-black/10">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-[#e9e3da]">
          <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-ink" />
          <div className="flex items-center gap-3 bg-brand-dark px-4 pb-3 pt-8">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-light font-display text-sm font-bold text-brand-dark">
              B
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">BeautyFlow</p>
              <p className="text-xs text-brand-light/70">online</p>
            </div>
          </div>
          <div className="flex min-h-[420px] flex-col justify-end gap-2 px-3 py-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Bubble({ from = "client", children, time, delay = 0 }) {
  const isClient = from === "client";
  return (
    <div
      className={`animate-fade-in max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug shadow-sm ${
        isClient
          ? "self-start rounded-tl-sm bg-white text-ink"
          : "self-end rounded-tr-sm bg-brand-light text-brand-dark"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
      {time && (
        <span className="mt-1 block text-right text-[10px] text-ink/35">{time}</span>
      )}
    </div>
  );
}

export function TypingBubble({ delay = 0 }) {
  return (
    <div
      className="animate-fade-in flex w-fit items-center gap-1 self-start rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm"
      style={{ animationDelay: `${delay}ms` }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="animate-blink size-1.5 rounded-full bg-ink/40"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </div>
  );
}
