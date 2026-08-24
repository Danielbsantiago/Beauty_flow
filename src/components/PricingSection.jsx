import { Check, X, Star, ArrowRight, Timer, ShieldCheck } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import { buildWhatsappLink } from "../lib/config";

const PLANS = [
  {
    name: "Essencial",
    price: "R$149",
    description: "Para começar a automatizar.",
    features: [
      { label: "Atendimento automatizado", included: true },
      { label: "Respostas a dúvidas", included: true },
      { label: "Follow-up", included: true },
      { label: "Pedidos e agendamentos", included: true },
      { label: "Lembretes", included: true },
      { label: "Reativação", included: false },
      { label: "Feedback pós-venda", included: false },
      { label: "Dashboard", included: false },
    ],
    note: "Personalização básica",
  },
  {
    name: "Avançado",
    price: "R$249",
    description: "Para quem quer vender e agendar mais.",
    badge: "RECOMENDADO",
    highlighted: true,
    features: [
      { label: "Atendimento automatizado", included: true },
      { label: "Respostas a dúvidas", included: true },
      { label: "Follow-up", included: true },
      { label: "Pedidos e agendamentos", included: true },
      { label: "Lembretes", included: true },
      { label: "Reativação de clientes", included: true },
      { label: "Campanhas de reativação", included: true },
      { label: "Feedback pós-venda", included: true },
      { label: "Personalização completa", included: true },
    ],
  },
  {
    name: "Pro",
    price: "R$399",
    description: "Para uma operação mais completa e personalizada.",
    features: [
      { label: "Atendimento automatizado", included: true },
      { label: "Respostas a dúvidas", included: true },
      { label: "Follow-up", included: true },
      { label: "Pedidos e agendamentos", included: true },
      { label: "Lembretes", included: true },
      { label: "Reativação de clientes", included: true },
      { label: "Campanhas de reativação", included: true },
      { label: "Feedback pós-venda", included: true },
      { label: "Personalização completa", included: true },
      { label: "Múltiplos profissionais ou unidades", included: true },
      { label: "Dashboard de resultados", included: true },
      { label: "Relatórios mensais", included: true },
      { label: "Automação e fluxos personalizados", included: true },
      { label: "Onboarding assistido", included: true },
      { label: "Suporte prioritário", included: true },
    ],
  },
];

function PlanCard({ plan }) {
  const body = (
    <div className={`flex h-full flex-col rounded-[1.4rem] p-7 ${plan.highlighted ? "bg-panel" : "border border-line bg-panel"}`}>
      {plan.badge && (
        <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-brand-2 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-canvas">
          <Star className="size-3" fill="currentColor" />
          {plan.badge}
        </span>
      )}
      <h3 className="font-display text-lg font-semibold text-ink">{plan.name}</h3>
      <p className="mt-3 flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold text-ink">{plan.price}</span>
        <span className="text-sm text-ink/55">/mês</span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink/60">{plan.description}</p>

      <ul className="mt-6 flex flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f.label} className="flex items-center gap-2.5 text-sm">
            {f.included ? (
              <Check className="size-4 shrink-0 text-brand-2" />
            ) : (
              <X className="size-4 shrink-0 text-ink/25" />
            )}
            <span className={f.included ? "text-ink/75" : "text-ink/50"}>{f.label}</span>
          </li>
        ))}
      </ul>

      {plan.note && <p className="mt-4 text-xs italic text-ink/55">{plan.note}</p>}

      <div className="mt-8 pt-2 lg:mt-auto">
        <Button
          href={buildWhatsappLink(`Olá! Quero começar grátis por 10 dias na AtendfluxIA, no plano ${plan.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          variant={plan.highlighted ? "primary" : "secondary"}
          className="w-full"
          icon={ArrowRight}
        >
          Começar grátis por 10 dias
        </Button>
      </div>
    </div>
  );

  if (plan.highlighted) {
    return (
      <div className="h-full rounded-[1.4rem] bg-gradient-to-br from-brand to-brand-2 p-px shadow-[0_20px_60px_-20px_rgba(139,108,255,0.5)] lg:-translate-y-3">
        {body}
      </div>
    );
  }

  return body;
}

export default function PricingSection() {
  return (
    <section id="planos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Escolha o plano ideal para o seu negócio.
          </h2>
          <p className="mt-4 text-base font-medium text-ink/60">
            Comece com 10 dias grátis.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-8">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-ink/60">
              <Timer className="size-4 text-brand-2" />
              Rodando em até 7 dias
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-ink/60">
              <ShieldCheck className="size-4 text-brand-2" />
              Cancele quando quiser, sem multa
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
