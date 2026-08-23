import { CalendarClock, Search, CheckCircle2, ArrowDown } from "lucide-react";
import Badge from "./Badge";
import PhoneFrame, { Bubble, NotificationRow } from "./PhoneFrame";
import Reveal from "./Reveal";

export default function SmartSchedulingSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-2/10 to-brand/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <Badge icon={CalendarClock}>Agenda inteligente</Badge>
          <h2 className="text-balance mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Muito mais que uma agenda automática.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/55">
            O AtendfluxIA entende o serviço que o cliente deseja, verifica a
            disponibilidade dos profissionais e encontra horários de acordo
            com as regras da sua empresa.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 flex max-w-xs flex-col items-center gap-3">
            <PhoneFrame contactName="Sua atendente virtual">
              <Bubble from="client" time="14:02">
                Quero fazer corte e escova amanhã.
              </Bubble>
              <Bubble from="assistant" time="14:02" delay={200}>
                Vou verificar os horários disponíveis para você. 😊
              </Bubble>
              <NotificationRow
                icon={Search}
                title="Verificando disponibilidade..."
                subtitle="Serviço, duração, profissionais e regras"
                delay={500}
              />
              <Bubble from="assistant" time="14:02" delay={900}>
                Tenho a Ana disponível amanhã às 14h30. Posso reservar esse
                horário para você?
              </Bubble>
              <Bubble from="client" time="14:03" delay={1200}>
                Pode!
              </Bubble>
            </PhoneFrame>

            <ArrowDown className="size-4 text-ink/25" />

            <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-4 py-2 text-xs font-bold text-canvas shadow-[0_8px_24px_-6px_rgba(139,108,255,0.5)]">
              <CheckCircle2 className="size-4" />
              AGENDAMENTO CONFIRMADO
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
