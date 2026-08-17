import { Scissors, Brush, Hand, Flower2, Eye, HeartHandshake } from "lucide-react";
import Reveal from "./Reveal";

const AUDIENCE = [
  { icon: Scissors, label: "Salões de beleza" },
  { icon: Brush, label: "Barbearias" },
  { icon: Hand, label: "Studios de manicure" },
  { icon: Flower2, label: "Espaços de estética" },
  { icon: Eye, label: "Studios de sobrancelhas e cílios" },
  { icon: HeartHandshake, label: "Espaços de beleza e bem-estar" },
];

export default function AudienceSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Feito para quem vive de agenda.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {AUDIENCE.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-ink/8 bg-surface px-4 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-lg hover:shadow-brand-dark/5">
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
                  <item.icon className="size-6" strokeWidth={1.75} />
                </div>
                <p className="text-sm font-semibold leading-snug text-ink">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-xl text-balance text-lg text-ink/60">
            Se seus clientes usam WhatsApp para marcar horário, essa
            plataforma foi feita para você.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
