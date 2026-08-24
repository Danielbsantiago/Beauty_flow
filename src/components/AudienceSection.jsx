import { Scissors, UtensilsCrossed, ShoppingBag, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const NICHES = [
  { icon: Scissors, label: "Salões e barbearias" },
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

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {NICHES.map((niche, i) => (
            <Reveal key={niche.label} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-brand/25 bg-gradient-to-br from-brand-soft to-transparent p-5 text-center">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-canvas">
                  <niche.icon className="size-7" strokeWidth={1.75} />
                </span>
                <p className="font-display text-sm font-semibold leading-snug text-ink">
                  {niche.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
