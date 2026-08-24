import { Quote, Image as ImageIcon, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

const SCREENSHOTS = [1, 2];
const METRICS = [
  { example: "agendamentos/mês" },
  { example: "clientes reativados/mês" },
];

export default function ProofSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Prova real, não só promessa.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/60">
            Espaço reservado para depoimentos, conversas reais e números do
            seu próprio negócio.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-xl flex-col items-start gap-4 rounded-2xl border border-line bg-panel p-8 text-left sm:flex-row">
            <img
              src="/testimonial-lourdes.jpg"
              alt="Lourdes Dornelas"
              className="size-14 shrink-0 rounded-full object-cover ring-1 ring-line"
            />
            <div>
              <Quote className="size-5 text-brand-2/60" />
              <p className="mt-2 text-sm leading-relaxed text-ink/75">
                Achei muito prático e facilitou muito a minha vida. Não
                preciso ficar olhando o celular o tempo todo para responder
                os clientes. E, para falar a verdade, às vezes a AtendfluxIA
                responde até melhor do que eu! Quando estou ocupada, eu
                acabava respondendo rápido, com alguns erros e sem conseguir
                dar a atenção que gostaria. A IA responde rápido, de forma
                muito mais gentil e sem deixar o cliente esperando.
              </p>
              <p className="mt-3 text-sm font-semibold text-ink">
                Lourdes Dornelas — Salão Lourdes Estilo e Beleza
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SCREENSHOTS.map((n) => (
              <div
                key={n}
                className="flex h-48 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-line bg-panel/40 text-ink/55"
              >
                <ImageIcon className="size-6" />
                <span className="text-xs font-medium">Print real de conversa {n}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {METRICS.map((metric, i) => (
              <div
                key={metric.example}
                className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-line bg-panel/40 py-8 text-center text-ink/55"
              >
                <TrendingUp className="size-5" />
                <span className="font-display text-2xl font-bold">[Número]</span>
                <span className="text-xs font-medium">
                  Métrica real {i + 1} — ex: {metric.example}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
