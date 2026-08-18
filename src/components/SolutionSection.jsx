import { UserCheck, CalendarDays, Radar, MessageCircle, CalendarCheck, ArrowDown, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  { icon: UserCheck, label: "Cliente atendido" },
  { icon: CalendarDays, label: "30 dias" },
  { icon: CalendarDays, label: "60 dias" },
  { icon: CalendarDays, label: "90 dias" },
  { icon: Radar, label: "BeautyFlow identifica" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: CalendarCheck, label: "Novo agendamento" },
];

export default function SolutionSection() {
  return (
    <section id="como-funciona" className="bg-brand-dark py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Seu salão não precisa apenas de mais clientes. Precisa aproveitar
            melhor os clientes que já conquistou.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">
            Cada cliente que já passou pelo seu salão representa uma
            oportunidade de relacionamento. O problema é que, com o tempo,
            alguns clientes deixam de voltar e acabam esquecidos na base de
            contatos. O BeautyFlow ajuda a identificar essas pessoas e criar
            oportunidades de retorno automaticamente.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col items-center gap-2 lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
          {STEPS.map((step, i) => (
            <div key={`${step.label}-${i}`} className="flex flex-col items-center lg:flex-1">
              <Reveal delay={i * 0.1} className="flex flex-col items-center text-center">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-white/5 text-brand-light ring-1 ring-white/10 lg:size-18">
                  <step.icon className="size-6 lg:size-7" strokeWidth={1.75} />
                </div>
                <p className="mt-3 max-w-[7rem] text-xs font-semibold text-white sm:text-sm">
                  {step.label}
                </p>
              </Reveal>

              {i < STEPS.length - 1 && (
                <Reveal delay={i * 0.1 + 0.05} className="my-2 text-brand/50 lg:my-0 lg:flex lg:flex-1 lg:items-center lg:justify-center">
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
