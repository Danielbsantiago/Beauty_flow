import { Sparkles, Users, SlidersHorizontal, ShieldCheck } from "lucide-react";
import Badge from "./Badge";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: Users,
    title: "Conversamos com você",
    text: "Entendemos quem faz o quê, como organiza horários e o que pode ou não ser feito no seu negócio.",
  },
  {
    icon: SlidersHorizontal,
    title: "Configuramos a IA",
    text: "Transformamos isso nas regras que guiam cada conversa — nada de respostas genéricas.",
  },
  {
    icon: ShieldCheck,
    title: "Atendimento do seu jeito",
    text: "Seus clientes são atendidos como você atenderia, não como um bot padrão atenderia.",
  },
];

export default function CustomSetupSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <Badge icon={Sparkles}>Não é um bot genérico</Badge>
          <h2 className="text-balance mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            A AutomatcIA se adapta ao seu negócio.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/55">
            Antes de começar, conversamos com você para entender como seu
            negócio realmente funciona — e transformamos isso nas regras
            que a IA segue.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-line bg-panel p-6 text-left">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-2">
                  <step.icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-10 max-w-lg text-balance text-sm font-medium text-ink/45">
            É por isso que personalização completa faz parte dos planos{" "}
            <span className="text-ink/70">Avançado</span> e{" "}
            <span className="text-ink/70">Pro</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
