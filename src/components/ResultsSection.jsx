import { Clock, CalendarCheck, ListChecks, Zap, CalendarDays, Database } from "lucide-react";
import Reveal from "./Reveal";

const RESULTS = [
  { icon: Clock, label: "Atendimento 24 horas" },
  { icon: CalendarCheck, label: "Agendamento automático" },
  { icon: ListChecks, label: "Menos tarefas repetitivas" },
  { icon: Zap, label: "Experiência mais rápida para o cliente" },
  { icon: CalendarDays, label: "Agenda organizada" },
  { icon: Database, label: "Base de clientes estruturada" },
];

export default function ResultsSection() {
  return (
    <section className="bg-brand-light/40 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Mais organização. Menos trabalho manual.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div className="flex items-center gap-4 rounded-2xl bg-white p-6 text-left ring-1 ring-ink/5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                  <item.icon className="size-5" strokeWidth={1.75} />
                </div>
                <p className="font-semibold text-ink">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
