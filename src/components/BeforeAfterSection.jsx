import { MessageCircle, Hourglass, User, CalendarSearch, CheckSquare, ClipboardEdit, Bot, MousePointerClick, PartyPopper } from "lucide-react";
import Reveal from "./Reveal";

const BEFORE = [
  { icon: MessageCircle, label: "Cliente manda mensagem" },
  { icon: Hourglass, label: "Espera" },
  { icon: User, label: "Funcionário responde" },
  { icon: CalendarSearch, label: "Verifica agenda" },
  { icon: CheckSquare, label: "Confirma horário" },
  { icon: ClipboardEdit, label: "Registra manualmente" },
];

const AFTER = [
  { icon: MessageCircle, label: "Cliente manda mensagem" },
  { icon: Bot, label: "IA responde" },
  { icon: CalendarSearch, label: "Consulta agenda" },
  { icon: MousePointerClick, label: "Cliente escolhe horário" },
  { icon: PartyPopper, label: "Agendamento confirmado" },
];

function Timeline({ steps, tone }) {
  const isBrand = tone === "brand";
  return (
    <ol className="flex flex-col gap-0">
      {steps.map((step, i) => (
        <li key={step.label} className="relative flex items-center gap-4 pb-6 last:pb-0">
          {i < steps.length - 1 && (
            <span
              className={`absolute left-[19px] top-10 h-[calc(100%-1.5rem)] w-px ${
                isBrand ? "bg-brand/25" : "bg-ink/12"
              }`}
              aria-hidden="true"
            />
          )}
          <span
            className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
              isBrand ? "bg-brand text-white" : "bg-ink/8 text-ink/50"
            }`}
          >
            <step.icon className="size-4.5" strokeWidth={2} />
          </span>
          <span
            className={`text-sm font-semibold ${isBrand ? "text-ink" : "text-ink/55"}`}
          >
            {step.label}
          </span>
        </li>
      ))}
    </ol>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            De várias mensagens para um processo automático.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-ink/8 bg-white p-8">
              <span className="mb-8 inline-block rounded-full bg-ink/6 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink/50">
                Antes
              </span>
              <Timeline steps={BEFORE} tone="muted" />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl border border-brand/20 bg-white p-8 shadow-lg shadow-brand-dark/5">
              <span className="mb-8 inline-block rounded-full bg-brand-light px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-dark">
                Depois
              </span>
              <Timeline steps={AFTER} tone="brand" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
