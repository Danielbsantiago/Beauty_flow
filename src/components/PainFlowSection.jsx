import { Briefcase, MessageSquare, Hourglass, XCircle, ArrowRight, ArrowDown } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  { icon: Briefcase, label: "Você trabalhando" },
  { icon: MessageSquare, label: "Novas mensagens" },
  { icon: Hourglass, label: "Cliente esperando" },
  { icon: XCircle, label: "Oportunidade perdida" },
];

export default function PainFlowSection() {
  return (
    <section className="bg-panel/40 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Você está ocupado. Seus clientes estão esperando — e podem
            desistir.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col items-center gap-2 sm:flex-row sm:items-stretch sm:justify-between sm:gap-0">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center sm:flex-1">
              <Reveal delay={i * 0.1} className="flex flex-col items-center text-center">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-line bg-panel text-ink/60">
                  <step.icon className="size-6" strokeWidth={1.75} />
                </div>
                <p className="mt-3 max-w-[7rem] text-xs font-semibold text-ink/70 sm:text-sm">
                  {step.label}
                </p>
              </Reveal>

              {i < STEPS.length - 1 && (
                <Reveal delay={i * 0.1 + 0.05} className="my-2 text-ink/25 sm:my-0 sm:flex sm:flex-1 sm:items-center sm:justify-center">
                  <ArrowDown className="size-5 sm:hidden" />
                  <ArrowRight className="hidden size-5 sm:block" />
                </Reveal>
              )}
            </div>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-12 max-w-md text-balance text-base font-medium text-ink/55">
            Você não consegue estar em todos os lugares ao mesmo tempo.
          </p>
          <p className="mx-auto mt-2 max-w-md text-balance font-display text-lg font-semibold text-gradient">
            É aí que o FluxoAI entra.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
