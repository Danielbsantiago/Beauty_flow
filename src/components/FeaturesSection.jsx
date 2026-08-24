import {
  MessageSquareText,
  CalendarClock,
  RefreshCcw,
  BellRing,
  CheckCircle2,
  Star,
  RotateCcw,
  Check,
} from "lucide-react";
import Reveal from "./Reveal";

// Arquivado por enquanto — reative se fizer sentido voltar com essa lista.
const SHOW_BENEFITS_STRIP = false;

const FEATURES = [
  {
    icon: MessageSquareText,
    title: "Atendimento inteligente",
    text: "Atende seus clientes automaticamente, 24 horas por dia, seguindo as orientações da sua empresa.",
  },
  {
    icon: CalendarClock,
    title: "Agendamento inteligente",
    text: "Consulta disponibilidade e encontra horários de acordo com seus serviços e profissionais.",
  },
  {
    icon: RefreshCcw,
    title: "Cancelamento e reagendamento",
    text: "Seu cliente pode alterar ou cancelar o horário diretamente pelo WhatsApp.",
  },
  {
    icon: BellRing,
    title: "Lembretes automáticos",
    text: "Envia lembretes antes do atendimento e reduz os esquecimentos.",
  },
  {
    icon: CheckCircle2,
    title: "Confirmação",
    text: "Confirma automaticamente a presença do cliente antes do horário.",
  },
  {
    icon: Star,
    title: "Feedback",
    text: "Descubra como foi a experiência do cliente depois do atendimento.",
  },
  {
    icon: RotateCcw,
    title: "Reativação",
    text: "Entra em contato automaticamente com clientes que estão há algum tempo sem voltar.",
  },
];

const BENEFITS = [
  "Atenda mesmo quando estiver ocupado",
  "Responda clientes mais rapidamente",
  "Reduza tarefas repetitivas",
  "Facilite os agendamentos",
  "Reduza esquecimentos",
  "Organize melhor sua agenda",
  "Mantenha contato com seus clientes",
  "Crie oportunidades para clientes voltarem",
];

export default function FeaturesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Um assistente completo para o seu atendimento.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/55">
            Tudo dentro do WhatsApp, sem precisar de outro aplicativo.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-panel p-6 text-left">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-2">
                  <feature.icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {SHOW_BENEFITS_STRIP && (
          <Reveal delay={0.2}>
            <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-line bg-panel/40 p-7 sm:p-8">
              <p className="text-center text-xs font-bold uppercase tracking-wide text-ink/55">
                O que isso significa para o seu dia a dia
              </p>
              <ul className="mx-auto mt-5 grid max-w-xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
