import { MessageCircle, Brain, CalendarDays, CheckCircle2, Bell, Star, RotateCcw, Heart, ArrowDown, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  { icon: MessageCircle, label: "Atender" },
  { icon: Brain, label: "Entender" },
  { icon: CalendarDays, label: "Agendar" },
  { icon: CheckCircle2, label: "Confirmar" },
  { icon: Bell, label: "Lembrar" },
  { icon: Star, label: "Feedback" },
  { icon: RotateCcw, label: "Reativar" },
  { icon: Heart, label: "Fidelizar" },
];

function StepRow({ steps, offset }) {
  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-stretch sm:justify-between sm:gap-0">
      {steps.map((step, i) => (
        <div key={step.label} className="flex flex-col items-center sm:flex-1">
          <Reveal delay={(offset + i) * 0.08} className="flex flex-col items-center text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-panel-2 text-brand-2 ring-1 ring-line">
              <step.icon className="size-6" strokeWidth={1.75} />
            </div>
            <p className="mt-3 text-xs font-semibold text-ink sm:text-sm">{step.label}</p>
          </Reveal>

          {i < steps.length - 1 && (
            <Reveal delay={(offset + i) * 0.08 + 0.04} className="my-1 text-ink/20 sm:my-0 sm:flex sm:flex-1 sm:items-center sm:justify-center">
              <ArrowDown className="size-4 sm:hidden" />
              <ArrowRight className="hidden size-4 sm:block" />
            </Reveal>
          )}
        </div>
      ))}
    </div>
  );
}

export default function SolutionSection() {
  const firstHalf = STEPS.slice(0, 4);
  const secondHalf = STEPS.slice(4, 8);

  return (
    <section id="como-funciona" className="border-y border-line bg-panel/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Do primeiro "Oi" ao próximo agendamento.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          <StepRow steps={firstHalf} offset={0} />

          <Reveal delay={0.3} className="flex justify-center text-ink/20">
            <ArrowDown className="size-5" />
          </Reveal>

          <StepRow steps={secondHalf} offset={4} />
        </div>

        <Reveal delay={0.7}>
          <p className="mx-auto mt-12 max-w-md text-balance text-center font-display text-lg font-semibold text-gradient">
            O relacionamento com o cliente não termina quando ele agenda.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
