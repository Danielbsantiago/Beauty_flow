import { Mail, MessageCircle, Target, ShoppingCart, Heart, RotateCcw, ArrowDown, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  { icon: Mail, label: "Cliente chega" },
  { icon: MessageCircle, label: "Responde" },
  { icon: Target, label: "Acompanha" },
  { icon: ShoppingCart, label: "Conduz", sub: "Comprar · Pedir · Agendar · Orçar" },
  { icon: Heart, label: "Mantém o relacionamento" },
  { icon: RotateCcw, label: "Cria novas oportunidades" },
];

export default function SolutionSection() {
  return (
    <section id="como-funciona" className="border-y border-line bg-panel/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Do primeiro contato à próxima compra.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col items-center gap-2 lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center lg:flex-1">
              <Reveal delay={i * 0.1} className="flex flex-col items-center text-center">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-panel-2 text-brand-2 ring-1 ring-line">
                  <step.icon className="size-6" strokeWidth={1.75} />
                </div>
                <p className="mt-3 max-w-[7rem] text-xs font-semibold text-ink sm:text-sm">
                  {step.label}
                </p>
                {step.sub && (
                  <p className="mt-1 max-w-[7.5rem] text-[10px] leading-tight text-ink/40">
                    {step.sub}
                  </p>
                )}
              </Reveal>

              {i < STEPS.length - 1 && (
                <Reveal delay={i * 0.1 + 0.05} className="my-2 text-ink/20 lg:my-0 lg:flex lg:flex-1 lg:items-center lg:justify-center">
                  <ArrowDown className="size-5 lg:hidden" />
                  <ArrowRight className="hidden size-4 lg:block" />
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
