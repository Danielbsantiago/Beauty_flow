import { CalendarDays, UserPlus, XCircle, Percent, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const STATS = [
  { icon: CalendarDays, value: "18", label: "Agendamentos hoje" },
  { icon: UserPlus, value: "6", label: "Clientes novos" },
  { icon: XCircle, value: "2", label: "Cancelamentos" },
  { icon: Percent, value: "83%", label: "Horários ocupados" },
];

const BENEFITS = [
  "Atenda mesmo quando estiver ocupado",
  "Reduza tarefas repetitivas",
  "Facilite os agendamentos",
  "Dê uma experiência melhor aos seus clientes",
  "Tenha mais organização",
  "Prepare seu salão para crescer",
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Menos tempo respondendo mensagens. Mais tempo atendendo clientes.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="rounded-2xl border border-ink/8 bg-surface p-5 shadow-xl shadow-ink/5 sm:p-7">
              <div className="mb-6 flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-ink/15" />
                <span className="size-2.5 rounded-full bg-ink/15" />
                <span className="size-2.5 rounded-full bg-ink/15" />
                <span className="ml-3 text-xs font-semibold text-ink/40">
                  Painel BeautyFlow
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white p-5 ring-1 ring-ink/5">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-brand-light text-brand-dark">
                      <stat.icon className="size-4.5" />
                    </div>
                    <p className="mt-3 font-display text-2xl font-bold text-ink">
                      {stat.value}
                    </p>
                    <p className="text-xs font-medium text-ink/50">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-white p-5 ring-1 ring-ink/5">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold text-ink/50">
                  <span>Ocupação da agenda</span>
                  <span>83%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-ink/8">
                  <div className="h-full w-[83%] rounded-full bg-brand" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="flex flex-col gap-4">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span className="text-base font-medium text-ink/75">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
