import { MessageSquareText, Bot, CalendarSearch, MousePointerClick, CalendarCheck, ArrowDown, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  { icon: MessageSquareText, label: "Cliente envia mensagem" },
  { icon: Bot, label: "IA responde" },
  { icon: CalendarSearch, label: "Consulta horários" },
  { icon: MousePointerClick, label: "Cliente escolhe" },
  { icon: CalendarCheck, label: "Agendamento confirmado" },
];

export default function SolutionSection() {
  return (
    <section id="como-funciona" className="bg-brand-dark py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transforme seu WhatsApp em um assistente para o seu salão.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">
            Enquanto sua equipe cuida dos clientes que estão no salão, nossa
            plataforma cuida das conversas que chegam pelo WhatsApp.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col items-center gap-2 lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center lg:flex-1">
              <Reveal delay={i * 0.12} className="flex flex-col items-center text-center">
                <div className="flex size-20 items-center justify-center rounded-2xl bg-white/5 text-brand-light ring-1 ring-white/10">
                  <step.icon className="size-8" strokeWidth={1.75} />
                </div>
                <p className="mt-4 max-w-[9rem] text-sm font-semibold text-white">
                  {step.label}
                </p>
              </Reveal>

              {i < STEPS.length - 1 && (
                <Reveal delay={i * 0.12 + 0.06} className="my-3 text-brand/50 lg:my-0 lg:flex lg:flex-1 lg:items-center lg:justify-center">
                  <ArrowDown className="size-5 lg:hidden" />
                  <ArrowRight className="hidden size-5 lg:block" />
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
