import { Mail, Eye, ShoppingCart, Heart, ShoppingBag, Package, CalendarCheck, FileText } from "lucide-react";
import Reveal from "./Reveal";

const NEXT_STEPS = [
  { icon: ShoppingBag, label: "Comprar" },
  { icon: Package, label: "Pedir" },
  { icon: CalendarCheck, label: "Agendar" },
  { icon: FileText, label: "Orçar" },
];

export default function PainCardsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Não deixe oportunidades se perderem no caminho.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Reveal delay={0}>
            <div className="h-full rounded-2xl border border-line bg-panel p-7">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-2">
                <Mail className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                Clientes sem resposta
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">
                Você está ocupado e demora para responder.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                <span className="font-semibold text-ink">FluxoAI:</span>{" "}
                responde rapidamente e mantém o cliente avançando.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-line bg-panel p-7">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-2">
                <Eye className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                Oportunidades esquecidas
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">
                O cliente demonstrou interesse, mas a conversa parou.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                <span className="font-semibold text-ink">FluxoAI:</span>{" "}
                ajuda a acompanhar oportunidades e retomar conversas.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="h-full rounded-2xl border border-line bg-panel p-7">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-2">
                <ShoppingCart className="size-5" strokeWidth={1.75} />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {NEXT_STEPS.map((step) => (
                  <span
                    key={step.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel-2 px-3 py-1 text-xs font-medium text-ink/60"
                  >
                    <step.icon className="size-3.5" />
                    {step.label}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                Conduza cada cliente até o próximo passo.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">
                O próximo passo depende do seu negócio. O FluxoAI ajuda o
                cliente a chegar até ele.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="h-full rounded-2xl border border-line bg-panel p-7">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-2">
                <Heart className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                Clientes que não voltam
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">
                Depois da compra, pedido ou atendimento, muitos clientes
                simplesmente desaparecem.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                <span className="font-semibold text-ink">FluxoAI:</span>{" "}
                identifica clientes acompanhados pelo sistema que ficaram
                algum tempo sem voltar e cria uma nova oportunidade de
                contato.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
