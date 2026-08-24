import { Users2, MessageCircle, SlidersHorizontal, FlaskConical, Rocket } from "lucide-react";
import Badge from "./Badge";
import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Fazemos uma reunião",
    text: "Entendemos como sua empresa funciona, seus serviços e como você atende seus clientes.",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Configuramos",
    text: "Ensinamos à IA seus serviços, horários, regras e a forma como sua empresa atende.",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "Testamos",
    text: "Testamos situações reais até você aprovar o atendimento e sentir que a IA está pronta para atender seus clientes.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Ativamos",
    text: "Seu WhatsApp começa a atender e trabalhar automaticamente para você.",
  },
];

export default function ImplantacaoSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <Badge icon={Users2}>Implantação personalizada</Badge>
          <h2 className="text-balance mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Você não precisa aprender a configurar uma IA. Nós fazemos tudo
            para você.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-line bg-panel p-6 text-left">
                <span className="font-display text-3xl font-bold text-ink/15">
                  {step.number}
                </span>
                <div className="mt-2 flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-2">
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

        <Reveal delay={0.5}>
          <p className="mx-auto mt-12 max-w-lg text-balance font-display text-lg font-semibold text-gradient">
            Você explica como sua empresa funciona. Nós transformamos isso em
            um atendimento automatizado.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="mx-auto mt-8 max-w-lg text-balance text-sm font-medium text-ink/60">
            O plano <span className="text-ink/80">Essencial</span> já
            inclui as regras do seu negócio, serviços, horários e equipe.
            Personalização avançada — como campanhas de reativação e
            fluxos sob medida — fica nos planos{" "}
            <span className="text-ink/80">Avançado</span> e{" "}
            <span className="text-ink/80">Pro</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
