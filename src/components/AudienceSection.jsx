import { Scissors, UtensilsCrossed, ShoppingBag, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const SECONDARY = [
  { icon: UtensilsCrossed, label: "Alimentação" },
  { icon: ShoppingBag, label: "Produtos" },
  { icon: Wrench, label: "Prestadores de serviço" },
];

export default function AudienceSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Feito para negócios que vivem de atendimento e agenda.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-sm items-center gap-4 rounded-2xl border border-brand/25 bg-gradient-to-br from-brand-soft to-transparent p-6 text-left">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-canvas">
              <Scissors className="size-7" strokeWidth={1.75} />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-ink">
                Salões e barbearias
              </p>
              <p className="text-sm text-ink/60">Onde a AtendfluxIA nasceu.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-ink/55">
              Também funciona para
            </span>
            {SECONDARY.map((item) => (
              <span key={item.label} className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/60">
                <item.icon className="size-4 text-ink/40" />
                {item.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
