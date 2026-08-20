import { Sparkles, ArrowRight, Compass, Scissors, UtensilsCrossed, Bike, ShoppingBag, Wrench } from "lucide-react";
import Badge from "./Badge";
import Button from "./Button";
import PhoneFrame, { Bubble, TypingBubble } from "./PhoneFrame";
import Reveal from "./Reveal";
import { buildWhatsappLink } from "../lib/config";

const NICHES = [
  { icon: Scissors, label: "Salões" },
  { icon: UtensilsCrossed, label: "Alimentação" },
  { icon: Bike, label: "Delivery" },
  { icon: ShoppingBag, label: "Produtos" },
  { icon: Wrench, label: "Prestadores de serviço" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[-10%] top-40 h-[420px] w-[420px] rounded-full bg-brand-2/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <Reveal>
            <Badge icon={Sparkles}>7 dias grátis para experimentar</Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-balance mt-6 font-display text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.3rem]">
              Você cuida do seu negócio. A Automatc
              <span className="text-gradient">IA</span> cuida dos seus
              agendamentos.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-balance mt-6 max-w-xl text-lg leading-relaxed text-ink/60">
              Automatize seus atendimentos, aumente suas vendas e realize
              agendamentos — sem precisar enviar uma mensagem sequer.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                href={buildWhatsappLink("Olá! Quero começar grátis por 7 dias na AutomatcIA.")}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                icon={ArrowRight}
              >
                Começar grátis por 7 dias
              </Button>
              <Button href="#como-funciona" variant="secondary" size="lg" icon={Compass} iconPosition="left">
                Ver como funciona
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-ink/35">
                Feito para
              </span>
              {NICHES.map((niche) => (
                <span key={niche.label} className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/50">
                  <niche.icon className="size-3.5 text-ink/35" />
                  {niche.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-sm">
          <div
            className="pointer-events-none absolute inset-x-8 -bottom-6 top-10 -z-10 rounded-[3rem] bg-gradient-to-br from-brand/20 to-brand-2/10 blur-2xl"
            aria-hidden="true"
          />
          <PhoneFrame>
            <Bubble from="client" time="09:41">
              Oi! Gostaria de agendar um horário, vocês têm disponibilidade
              essa semana?
            </Bubble>
            <Bubble from="assistant" time="09:41" delay={200}>
              Olá! 😊 Claro, temos sim! Qual dia fica melhor pra você?
            </Bubble>
            <Bubble from="client" time="09:42" delay={400}>
              Quinta-feira, se possível.
            </Bubble>
            <Bubble from="assistant" time="09:42" delay={600}>
              Perfeito! Temos horários às 10h, 14h e 16h na quinta. Qual
              prefere?
            </Bubble>
            <Bubble from="client" time="09:42" delay={800}>
              14h está ótimo.
            </Bubble>
            <TypingBubble delay={950} />
            <Bubble from="assistant" time="09:43" delay={1400}>
              Combinado! ✅ Seu horário está confirmado para quinta-feira às
              14h. Qualquer coisa, é só chamar!
            </Bubble>
          </PhoneFrame>
        </Reveal>
      </div>
    </section>
  );
}
