import { Clock, Scissors, Receipt, UserSearch, Brain, SlidersHorizontal, MessageCircle } from "lucide-react";
import Badge from "./Badge";
import PhoneFrame, { Bubble } from "./PhoneFrame";
import Reveal from "./Reveal";

const MARIA_DETAILS = [
  { icon: Clock, label: "Último atendimento", value: "74 dias atrás" },
  { icon: Scissors, label: "Serviço", value: "Corte + Escova" },
  { icon: Receipt, label: "Último ticket", value: "R$120" },
];

const EXPLAINERS = [
  { icon: UserSearch, text: "Sua equipe não precisa procurar manualmente os contatos." },
  { icon: Brain, text: "Ninguém precisa lembrar quem está há muito tempo sem voltar." },
  { icon: SlidersHorizontal, text: "O sistema identifica clientes inativos de acordo com as regras configuradas." },
  { icon: MessageCircle, text: "A comunicação acontece pelo WhatsApp." },
];

export default function ForgottenClientsSection() {
  return (
    <section className="bg-brand-light/30 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge>O grande diferencial do BeautyFlow</Badge>
          <h2 className="text-balance mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Quantos clientes do seu salão estão esquecidos na sua própria
            base?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/60">
            Imagine que seu salão tenha 2.000 clientes cadastrados. Quantos
            deles fizeram um serviço há 30, 60 ou 90 dias e nunca mais
            voltaram? São pessoas que já conhecem seu salão, já confiaram no
            seu trabalho e já pagaram pelos seus serviços — mas simplesmente
            pararam de voltar.
          </p>
          <p className="mt-3 text-sm italic text-ink/40">
            Os 2.000 clientes são apenas um exemplo ilustrativo — o número
            real varia de acordo com o seu salão.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="rounded-2xl bg-white p-6 shadow-lg shadow-brand-dark/5 ring-1 ring-ink/5 sm:p-7">
              <div className="flex items-center gap-3 border-b border-ink/8 pb-5">
                <div className="flex size-12 items-center justify-center rounded-full bg-brand-light font-display text-lg font-bold text-brand-dark">
                  M
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-ink">Maria</p>
                  <p className="text-xs text-ink/45">Cliente cadastrada</p>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-4">
                {MARIA_DETAILS.map((detail) => (
                  <div key={detail.label} className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface text-ink/50">
                      <detail.icon className="size-4" />
                    </span>
                    <div className="flex w-full items-center justify-between gap-2">
                      <span className="text-sm text-ink/50">{detail.label}</span>
                      <span className="text-sm font-semibold text-ink">{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              {EXPLAINERS.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <item.icon className="mt-0.5 size-4.5 shrink-0 text-brand" />
                  <span className="text-sm font-medium text-ink/65">{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <PhoneFrame className="w-[300px] sm:w-[320px]">
              <Bubble from="assistant" time="19:02">
                Oi, Maria! 💜 Já faz um tempinho desde seu último atendimento.
                Temos alguns horários disponíveis esta semana. Gostaria de
                agendar seu próximo horário?
              </Bubble>
              <span
                className="animate-fade-in w-fit self-end rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white shadow-sm"
                style={{ animationDelay: "300ms" }}
              >
                Ver horários disponíveis
              </span>
            </PhoneFrame>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-16 max-w-xl text-balance text-center font-display text-xl font-semibold text-brand-dark">
            O BeautyFlow encontra esses clientes e inicia a reativação
            automaticamente.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
