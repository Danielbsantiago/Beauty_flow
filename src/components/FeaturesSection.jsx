import { Bot, CalendarCheck, XCircle, RefreshCw, UserPlus, Bell, CheckCheck, Star, RotateCcw } from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: Bot,
    title: "Atendimento inteligente",
    text: "Responda seus clientes automaticamente pelo WhatsApp, mesmo quando você está ocupado.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento automático",
    text: "Seu cliente escolhe o serviço, consulta horários disponíveis e agenda diretamente pelo WhatsApp.",
  },
  {
    icon: XCircle,
    title: "Cancelamento",
    text: "Permita que o cliente cancele seu horário sem precisar que alguém da equipe faça isso manualmente.",
  },
  {
    icon: RefreshCw,
    title: "Reagendamento",
    text: "O cliente pode alterar o horário diretamente pelo WhatsApp.",
  },
  {
    icon: UserPlus,
    title: "Cadastro automático",
    text: "Cada cliente atendido pode ser registrado no sistema para facilitar o relacionamento futuro.",
  },
  {
    icon: Bell,
    title: "Lembretes automáticos",
    text: "Envie lembretes automáticos antes do horário agendado e reduza faltas.",
    soon: true,
  },
  {
    icon: CheckCheck,
    title: "Confirmação automática",
    text: "Permita que o cliente confirme sua presença antes do atendimento.",
    soon: true,
  },
  {
    icon: Star,
    title: "Feedback",
    text: "Envie uma mensagem depois do atendimento para descobrir a satisfação do cliente.",
    soon: true,
  },
  {
    icon: RotateCcw,
    title: "Reativação",
    text: "Identifique automaticamente clientes que estão há muito tempo sem voltar e entre em contato pelo WhatsApp para estimular um novo agendamento.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="funcionalidades" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Tudo que seu salão precisa para atender, agendar e reativar
            clientes.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.08}>
              <div className="relative h-full rounded-2xl border border-ink/8 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-xl hover:shadow-brand-dark/5">
                {feature.soon && (
                  <span className="absolute right-5 top-5 rounded-full bg-brand-light px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-dark">
                    Em breve
                  </span>
                )}
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
                  <feature.icon className="size-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
