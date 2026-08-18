import { Hourglass, UserMinus, Users2, Inbox, Frown, MessageCircle, CalendarCheck, RefreshCw, Bell, Heart, RotateCcw } from "lucide-react";
import Reveal from "./Reveal";

const DAILY_LINES = [
  "Uma cliente está na cadeira.",
  "Outra pergunta o preço.",
  "Outra quer saber se existe horário amanhã.",
  "Outra quer remarcar.",
  "Outra quer cancelar.",
];

const PAIN_POINTS = [
  { icon: Hourglass, label: "Mensagens demorando para serem respondidas" },
  { icon: UserMinus, label: "Clientes desistindo do agendamento" },
  { icon: Users2, label: "Funcionários interrompendo o atendimento" },
  { icon: Inbox, label: "Conversas esquecidas" },
  { icon: Frown, label: "Experiência ruim para o cliente" },
];

const CAPABILITIES = [
  {
    icon: MessageCircle,
    title: "Atendimento",
    text: "Responda perguntas frequentes automaticamente pelo WhatsApp.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento",
    text: "Apresente horários disponíveis e facilite o agendamento.",
  },
  {
    icon: RefreshCw,
    title: "Cancelamento e remarcação",
    text: "Organize alterações nos horários sem depender de atendimento manual a todo momento.",
  },
  {
    icon: Bell,
    title: "Lembretes",
    text: "Ajude a reduzir esquecimentos enviando lembretes aos clientes.",
    soon: true,
  },
  {
    icon: Heart,
    title: "Pós-atendimento",
    text: "Mantenha o relacionamento depois do serviço.",
    soon: true,
  },
  {
    icon: RotateCcw,
    title: "Reativação",
    text: "Identifique clientes que estão há muito tempo sem voltar e entre em contato.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Enquanto sua equipe atende uma cliente, outras estão esperando no
            WhatsApp.
          </h2>
          <div className="mx-auto mt-6 flex max-w-xs flex-col gap-1">
            {DAILY_LINES.map((line) => (
              <p key={line} className="text-base font-medium text-ink/55">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-4 text-lg leading-relaxed text-ink/60">
            E sua equipe precisa fazer tudo ao mesmo tempo.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {PAIN_POINTS.map((point) => (
            <span
              key={point.label}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface px-4 py-2.5 text-sm font-medium text-ink/65"
            >
              <point.icon className="size-4 text-ink/40" />
              {point.label}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-16 max-w-xl text-balance text-center font-display text-xl font-semibold text-ink">
            O BeautyFlow assume parte desse trabalho.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="relative h-full rounded-2xl border border-ink/8 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-lg hover:shadow-brand-dark/5">
                {item.soon && (
                  <span className="absolute right-5 top-5 rounded-full bg-brand-light px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-dark">
                    Em breve
                  </span>
                )}
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
                  <item.icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
