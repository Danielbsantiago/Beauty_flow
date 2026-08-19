export default function PhoneFrame({ children, className = "" }) {
  return (
    <div className={`relative mx-auto w-[290px] sm:w-[320px] ${className}`}>
      <div className="rounded-[2.75rem] bg-[#111116] p-2.5 shadow-2xl ring-1 ring-white/10">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-[#0b141a]">
          <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-[#0d0d12]" />
          <div className="flex items-center gap-3 bg-[#1f2c34] px-4 pb-3 pt-8">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 font-display text-sm font-bold text-canvas">
              F
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">FluxoAI</p>
              <p className="text-xs text-white/40">online</p>
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
          ? "self-start rounded-tl-sm bg-[#202c33] text-white/90"
          : "self-end rounded-tr-sm bg-[#005c4b] text-white"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
      {time && (
        <span className="mt-1 block text-right text-[10px] text-white/35">{time}</span>
      )}
    </div>
  );
}

export function TypingBubble({ delay = 0 }) {
  return (
    <div
      className="animate-fade-in flex w-fit items-center gap-1 self-start rounded-2xl rounded-tl-sm bg-[#202c33] px-4 py-3 shadow-sm"
      style={{ animationDelay: `${delay}ms` }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="animate-blink size-1.5 rounded-full bg-white/50"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </div>
  );
}

export function NotificationRow({ icon: Icon, title, subtitle, delay = 0 }) {
  return (
    <div
      className="animate-fade-in flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 px-3 py-2.5 backdrop-blur-sm"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-2 text-canvas">
        <Icon className="size-4" strokeWidth={2} />
      </span>
      <div className="min-w-0">
        <p className="truncate text-xs font-semibold text-white">{title}</p>
        <p className="truncate text-[11px] text-white/40">{subtitle}</p>
      </div>
    </div>
  );
}
