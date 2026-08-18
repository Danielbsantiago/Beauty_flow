import { MessageCircle, CalendarClock, RotateCcw, Sparkles, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Button from "./Button";
import { buildWhatsappLink } from "../lib/config";

const SUPPORT_PILLARS = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Não deixe o cliente esperando.",
    text: "Respostas rápidas, agendamentos, cancelamentos e remarcações pelo WhatsApp, enquanto sua equipe se concentra no atendimento presencial.",
  },
  {
    number: "02",
    icon: CalendarClock,
    title: "Não deixe cancelamentos virarem horários vazios.",
    text: "Organize os agendamentos e ajude sua equipe a aproveitar melhor os horários disponíveis.",
  },
];

export default function PillarsSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            O BeautyFlow ajuda seu salão a recuperar oportunidades em três
            momentos.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SUPPORT_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-ink/8 bg-surface p-8">
                <span className="font-display text-3xl font-bold text-ink/10">
                  {pillar.number}
                </span>
                <div className="mt-4 flex size-12 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
                  <pillar.icon className="size-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-5">
          <div className="relative overflow-hidden rounded-2xl bg-brand-dark p-8 sm:p-12">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/25 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-light">
                  <Sparkles className="size-3.5" />
                  Diferencial BeautyFlow
                </span>
                <div className="mt-5 flex items-center gap-4">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-brand-light">
                    <RotateCcw className="size-7" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-3xl font-bold text-white/15">03</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white sm:text-3xl">
                  Traga de volta quem já foi seu cliente.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/65">
                  Identifique automaticamente clientes que estão há muito
                  tempo sem voltar e envie mensagens personalizadas pelo
                  WhatsApp para estimular um novo agendamento.
                </p>
              </div>
              <Button
                href={buildWhatsappLink("Olá! Quero recuperar os clientes que já conquistei com a BeautyFlow.")}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                icon={ArrowRight}
                className="shrink-0"
              >
                Quero recuperar meus clientes
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
