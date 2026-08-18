import { Users2, UserX, Target, Wallet, TrendingUp, Info, ArrowDown, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const FUNNEL = [
  { icon: Users2, value: "2.000", label: "clientes cadastrados" },
  { icon: UserX, value: "5%", label: "de clientes inativos" },
  { icon: Target, value: "100", label: "clientes" },
  { icon: Wallet, value: "R$120", label: "ticket médio" },
];

const OUTCOMES = [
  { clients: "10", total: "R$1.200" },
  { clients: "20", total: "R$2.400" },
];

export default function FinancialSimulationSection() {
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Quanto vale trazer de volta apenas uma pequena parte dos seus
            clientes?
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col items-center gap-2 sm:flex-row sm:items-stretch sm:justify-between sm:gap-0">
          {FUNNEL.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center sm:flex-1">
              <Reveal delay={i * 0.08} className="flex flex-col items-center text-center">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
                  <step.icon className="size-6" strokeWidth={1.75} />
                </div>
                <p className="mt-3 font-display text-2xl font-bold text-ink">{step.value}</p>
                <p className="max-w-[8rem] text-xs font-medium text-ink/50">{step.label}</p>
              </Reveal>

              {i < FUNNEL.length - 1 && (
                <Reveal delay={i * 0.08 + 0.04} className="my-2 text-brand/40 sm:my-0 sm:flex sm:flex-1 sm:items-center sm:justify-center">
                  <ArrowDown className="size-5 sm:hidden" />
                  <ArrowRight className="hidden size-5 sm:block" />
                </Reveal>
              )}
            </div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-14 max-w-md text-balance text-center text-base font-semibold text-ink/70">
            Se apenas alguns desses clientes retornarem:
          </p>
        </Reveal>

        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
          {OUTCOMES.map((outcome, i) => (
            <Reveal key={outcome.clients} delay={0.25 + i * 0.1}>
              <div className="h-full rounded-2xl border border-brand/20 bg-brand-light/40 p-7 text-center">
                <TrendingUp className="mx-auto size-6 text-brand-dark" />
                <p className="mt-3 text-sm font-semibold text-ink/60">
                  Se {outcome.clients} clientes retornarem
                </p>
                <p className="mt-1 text-sm text-ink/45">
                  {outcome.clients} × R$120
                </p>
                <p className="mt-2 font-display text-3xl font-bold text-brand-dark">
                  = {outcome.total}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-14 max-w-xl text-balance text-center font-display text-xl font-semibold text-ink">
            O objetivo do BeautyFlow não é simplesmente enviar mensagens. É
            transformar clientes esquecidos em novas oportunidades de
            faturamento.
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mx-auto mt-8 flex max-w-xl items-start gap-2.5 rounded-xl border border-ink/8 bg-white px-5 py-4">
            <Info className="mt-0.5 size-4 shrink-0 text-ink/35" />
            <p className="text-xs leading-relaxed text-ink/45">
              Exemplo ilustrativo. Os resultados variam de acordo com a base
              de clientes, frequência de retorno, ticket médio e taxa de
              conversão de cada salão.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
