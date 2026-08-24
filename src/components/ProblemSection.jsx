import { Briefcase, MessageSquare, Hourglass, XCircle, ArrowRight, ArrowDown, Clock3, Repeat, Eye, Heart } from "lucide-react";
import Reveal from "./Reveal";

const FLOW = [
  { icon: Briefcase, label: "Você trabalhando" },
  { icon: MessageSquare, label: "Novas mensagens" },
  { icon: Hourglass, label: "Cliente esperando" },
  { icon: XCircle, label: "Cliente perdido" },
];

const PROBLEMS = [
  {
    icon: Clock3,
    title: "Clientes esperando resposta",
    text: "Quando sua equipe está ocupada, alguém pode ficar sem atendimento.",
    solution: "responde rápido e já transforma a conversa em agendamento ou venda.",
  },
  {
    icon: Repeat,
    title: "Tarefas repetitivas",
    text: "Tempo demais é gasto fazendo as mesmas coisas todos os dias.",
    solution: "automatiza as tarefas repetitivas do dia a dia, como confirmações, lembretes e mensagens pós-atendimento.",
  },
  {
    icon: Eye,
    title: "Vendas esquecidas",
    text: "Clientes interessados podem desaparecer quando ninguém entra em contato novamente.",
    solution: "não deixa aquele orçamento esquecido. Envia uma mensagem automaticamente e retoma a conversa.",
  },
  {
    icon: Heart,
    title: "Clientes que não voltam",
    text: "Sua empresa já tem contatos e clientes, mas nem sempre consegue manter o relacionamento.",
    solution: "identifica clientes que sumiram e envia mensagens para gerar novos agendamentos.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Você está ocupado. Suas vendas e agendamentos não precisam
            esperar.
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-2 sm:flex-row sm:items-stretch sm:justify-between sm:gap-0">
          {FLOW.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center sm:flex-1">
              <Reveal delay={i * 0.08} className="flex flex-col items-center text-center">
                <div className="flex size-12 items-center justify-center rounded-xl border border-line bg-panel text-ink/55">
                  <step.icon className="size-5" strokeWidth={1.75} />
                </div>
                <p className="mt-2 max-w-[6rem] text-[11px] font-semibold text-ink/65">
                  {step.label}
                </p>
              </Reveal>

              {i < FLOW.length - 1 && (
                <Reveal delay={i * 0.08 + 0.04} className="my-1 text-ink/20 sm:my-0 sm:flex sm:flex-1 sm:items-center sm:justify-center">
                  <ArrowDown className="size-4 sm:hidden" />
                  <ArrowRight className="hidden size-4 sm:block" />
                </Reveal>
              )}
            </div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-md text-balance font-display text-lg font-semibold text-gradient">
            É aí que a AtendfluxIA entra.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PROBLEMS.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-panel p-7 text-left">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand-2">
                  <problem.icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{problem.text}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  <span className="font-semibold text-ink">AtendfluxIA:</span>{" "}
                  {problem.solution}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
