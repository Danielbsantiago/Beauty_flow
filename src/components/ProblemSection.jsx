import { Clock, ListChecks, MoonStar, Users2 } from "lucide-react";
import Reveal from "./Reveal";

const CARDS = [
  {
    number: "01",
    icon: Clock,
    title: "Clientes esperando resposta",
    text: "Uma pessoa interessada pode desistir se precisar esperar muito.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Agendamentos feitos manualmente",
    text: "Você perde tempo verificando horários e respondendo as mesmas perguntas.",
  },
  {
    number: "03",
    icon: MoonStar,
    title: "Mensagens fora do horário",
    text: "Seu salão fecha, mas seus clientes continuam enviando mensagens.",
  },
  {
    number: "04",
    icon: Users2,
    title: "Equipe sobrecarregada",
    text: "Funcionários precisam dividir o tempo entre atender clientes e responder o WhatsApp.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Quantos clientes seu salão perde enquanto você está trabalhando?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/60">
            Você está atendendo uma cliente, fazendo um procedimento ou
            simplesmente tentando organizar o salão. Enquanto isso, novas
            mensagens continuam chegando.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.number} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-ink/8 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-xl hover:shadow-brand-dark/5">
                <span className="font-display text-3xl font-bold text-ink/10 transition-colors group-hover:text-brand/25">
                  {card.number}
                </span>
                <div className="mt-4 flex size-11 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
                  <card.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-16 max-w-xl text-balance text-center font-display text-xl font-semibold text-ink">
            Seu WhatsApp não deveria depender de alguém estar disponível o
            tempo todo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
