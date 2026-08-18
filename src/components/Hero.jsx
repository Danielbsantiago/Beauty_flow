import { Sparkles, ArrowRight, Compass, CalendarCheck, Bot, UserCheck } from "lucide-react";
import Badge from "./Badge";
import Button from "./Button";
import PhoneFrame, { Bubble, TypingBubble } from "./PhoneFrame";
import Reveal from "./Reveal";
import { buildWhatsappLink } from "../lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-light/60 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <Reveal>
            <Badge icon={Sparkles}>Atendimento + Agenda + Reativação</Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-balance mt-6 font-display text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Seu salão pode estar{" "}
              <span className="text-brand">perdendo dinheiro</span> de
              clientes que já conquistou.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-balance mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
              O BeautyFlow identifica clientes que estão há 30, 60 ou 90+ dias
              sem voltar e entra em contato automaticamente pelo WhatsApp
              para trazer essas pessoas de volta.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-balance mt-4 max-w-xl text-base leading-relaxed text-ink/55">
              Além disso, sua equipe ganha um assistente para atender
              clientes, agendar horários, confirmar atendimentos e reduzir o
              impacto de cancelamentos e horários vazios.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                href={buildWhatsappLink("Olá! Quero recuperar os clientes que já conquistei com a BeautyFlow.")}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                icon={ArrowRight}
              >
                Quero recuperar meus clientes
              </Button>
              <Button href="#como-funciona" variant="secondary" size="lg" icon={Compass} iconPosition="left">
                Conhecer o BeautyFlow
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-7 text-sm font-semibold text-ink/50">
              Atendimento + Agendamento + Reativação em uma única plataforma.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-sm">
          <div
            className="pointer-events-none absolute inset-x-8 -bottom-6 top-10 -z-10 rounded-[3rem] bg-brand/15 blur-2xl"
            aria-hidden="true"
          />
          <PhoneFrame>
            <Bubble from="client" time="09:41">
              Oi! Gostaria de marcar um horário para corte.
            </Bubble>
            <Bubble from="assistant" time="09:41" delay={200}>
              Olá! 😊 Claro! Será um prazer ajudar. Qual dia você gostaria?
            </Bubble>
            <Bubble from="client" time="09:42" delay={400}>
              Quarta-feira.
            </Bubble>
            <Bubble from="assistant" time="09:42" delay={600}>
              Perfeito! Temos horários às 10h, 14h e 16h. Qual horário
              prefere?
            </Bubble>
            <Bubble from="client" time="09:42" delay={800}>
              14h.
            </Bubble>
            <TypingBubble delay={950} />
            <Bubble from="assistant" time="09:43" delay={1400}>
              Ótimo! ✨ Seu horário está confirmado para quarta-feira às 14h.
            </Bubble>
          </PhoneFrame>

          <div className="animate-float absolute -left-8 top-16 hidden items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-lg ring-1 ring-ink/5 sm:flex">
            <CalendarCheck className="size-4 text-brand" />
            <span className="text-xs font-semibold text-ink">Agendamento confirmado</span>
          </div>
          <div className="animate-float-delayed absolute -right-6 top-[38%] hidden items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-lg ring-1 ring-ink/5 sm:flex">
            <Bot className="size-4 text-brand" />
            <span className="text-xs font-semibold text-ink">IA atendendo</span>
          </div>
          <div className="animate-float absolute -left-4 bottom-8 hidden items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-lg ring-1 ring-ink/5 sm:flex">
            <UserCheck className="size-4 text-brand" />
            <span className="text-xs font-semibold text-ink">Cliente cadastrado</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
