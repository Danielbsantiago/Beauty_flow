import { CalendarX, Clock3, Radar, MessageCircle, CalendarCheck, ArrowDown, ArrowRight, XCircle, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  { icon: CalendarX, label: "Cancelamento" },
  { icon: Clock3, label: "Horário disponível" },
  { icon: Radar, label: "Identificar oportunidade" },
  { icon: MessageCircle, label: "Entrar em contato" },
  { icon: CalendarCheck, label: "Novo agendamento" },
];

export default function EmptySlotsSection() {
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Um cancelamento não precisa significar um horário perdido.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/60">
            Quando uma cliente cancela, o horário fica livre — e pode virar
            só um espaço vazio na agenda. O BeautyFlow ajuda sua equipe a
            identificar esses espaços e aproveitar melhor os horários
            disponíveis.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col items-center gap-2 lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center lg:flex-1">
              <Reveal delay={i * 0.1} className="flex flex-col items-center text-center">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
                  <step.icon className="size-6" strokeWidth={1.75} />
                </div>
                <p className="mt-3 max-w-[8rem] text-sm font-semibold text-ink">
                  {step.label}
                </p>
              </Reveal>

              {i < STEPS.length - 1 && (
                <Reveal delay={i * 0.1 + 0.05} className="my-2 text-brand/40 lg:my-0 lg:flex lg:flex-1 lg:items-center lg:justify-center">
                  <ArrowDown className="size-5 lg:hidden" />
                  <ArrowRight className="hidden size-5 lg:block" />
                </Reveal>
              )}
            </div>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-16 flex max-w-xl flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <div className="flex w-full items-center justify-between gap-4 rounded-2xl border border-ink/8 bg-white px-6 py-4 sm:w-56">
            <span className="font-display text-lg font-bold text-ink/70">14:00</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink/40">
              <XCircle className="size-4" />
              Cancelado
            </span>
          </div>
          <ArrowRight className="hidden size-5 shrink-0 text-brand/50 sm:block" />
          <ArrowDown className="size-5 shrink-0 text-brand/50 sm:hidden" />
          <div className="flex w-full items-center justify-between gap-4 rounded-2xl border border-brand/25 bg-white px-6 py-4 shadow-md shadow-brand-dark/5 sm:w-56">
            <span className="font-display text-lg font-bold text-ink">14:00</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
              <CheckCircle2 className="size-4" />
              Novo agendamento
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-14 max-w-lg text-balance text-center font-display text-xl font-semibold text-ink">
            Menos espaços vazios. Mais oportunidades de faturamento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
