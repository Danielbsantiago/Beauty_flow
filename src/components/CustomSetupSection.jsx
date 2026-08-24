import { Sparkles, MessagesSquare, SlidersHorizontal, Bot, ArrowRight, ArrowDown } from "lucide-react";
import Badge from "./Badge";
import Reveal from "./Reveal";

const FLOW = [
  {
    icon: MessagesSquare,
    label: "Você nos explica",
    sub: "Serviços, horários, regras e forma de atender",
  },
  {
    icon: SlidersHorizontal,
    label: "Nós configuramos",
    sub: "Seu assistente virtual personalizado",
  },
  {
    icon: Bot,
    label: "Ele atende",
    sub: "Seguindo as regras da sua empresa",
  },
];

export default function CustomSetupSection() {
  return (
    <section id="como-funciona" className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <Badge icon={Sparkles}>Não é um bot genérico</Badge>
          <h2 className="text-balance mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Não é uma IA genérica. É a IA da sua empresa.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/55">
            Cada empresa tem seus próprios serviços, horários, regras e
            maneira de atender. Por isso, antes de começar, entendemos como
            sua empresa funciona e configuramos o assistente de acordo com
            suas necessidades.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-2 sm:flex-row sm:items-stretch sm:justify-between sm:gap-0">
          {FLOW.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center sm:flex-1">
              <Reveal delay={i * 0.1} className="flex flex-col items-center text-center">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-panel-2 text-brand-2 ring-1 ring-line">
                  <step.icon className="size-6" strokeWidth={1.75} />
                </div>
                <p className="mt-3 max-w-[9rem] text-sm font-semibold text-ink">
                  {step.label}
                </p>
                <p className="mt-1 max-w-[9.5rem] text-xs leading-tight text-ink/55">
                  {step.sub}
                </p>
              </Reveal>

              {i < FLOW.length - 1 && (
                <Reveal delay={i * 0.1 + 0.05} className="my-2 text-ink/20 sm:my-0 sm:flex sm:flex-1 sm:items-center sm:justify-center">
                  <ArrowDown className="size-4 sm:hidden" />
                  <ArrowRight className="hidden size-4 sm:block" />
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
