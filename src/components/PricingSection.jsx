import { Check, X, Star, ArrowRight, MessageCircle, ShoppingCart, CalendarCheck, RotateCcw } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import { buildWhatsappLink } from "../lib/config";

const PLANS = [
  {
    name: "Essencial",
    price: "R$149",
    description: "Para começar a automatizar e não perder oportunidades.",
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
    description: "Para negócios em crescimento que querem automatizar vendas e relacionamento.",
    badge: "MAIS ESCOLHIDO",
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
    description: "Para negócios que querem uma operação mais completa e orientada por dados.",
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
      { label: "Dashboard de resultados", included: true },
      { label: "Automação e fluxos personalizados", included: true },
      { label: "Suporte prioritário", included: true },
    ],
  },
];

const STATS = [
  { icon: MessageCircle, value: "327", label: "Conversas" },
  { icon: ShoppingCart, value: "84", label: "Pedidos" },
  { icon: CalendarCheck, value: "61", label: "Agendamentos" },
  { icon: RotateCcw, value: "28", label: "Reativações" },
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
        <span className="text-sm text-ink/40">/mês</span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink/50">{plan.description}</p>

      <ul className="mt-6 flex flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f.label} className="flex items-center gap-2.5 text-sm">
            {f.included ? (
              <Check className="size-4 shrink-0 text-brand-2" />
            ) : (
              <X className="size-4 shrink-0 text-ink/25" />
            )}
            <span className={f.included ? "text-ink/75" : "text-ink/35"}>{f.label}</span>
          </li>
        ))}
      </ul>

      {plan.note && <p className="mt-4 text-xs italic text-ink/35">{plan.note}</p>}

      <div className="mt-8 pt-2 lg:mt-auto">
        <Button
          href={buildWhatsappLink(`Olá! Quero começar o teste grátis da Ondia no plano ${plan.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          variant={plan.highlighted ? "primary" : "secondary"}
          className="w-full"
          icon={ArrowRight}
        >
          Começar teste grátis
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
          <p className="mt-4 text-base font-medium text-ink/50">
            Comece com 7 dias grátis.
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
          <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-line bg-panel/60 p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-bold uppercase tracking-wide text-ink/40">Resultados</p>
              <span className="rounded-full bg-panel-2 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ink/40">
                Demonstração ilustrativa
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-panel-2 p-4">
                  <stat.icon className="size-4 text-brand-2" />
                  <p className="mt-2 font-display text-2xl font-bold text-ink">{stat.value}</p>
                  <p className="text-xs text-ink/45">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-ink/35">
              Números ilustrativos para fins de demonstração — não
              representam resultados reais ou garantidos.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
