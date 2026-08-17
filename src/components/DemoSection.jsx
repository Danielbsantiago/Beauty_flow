import { ArrowRight, CalendarCheck, UserCheck, Clock3 } from "lucide-react";
import Button from "./Button";
import PhoneFrame, { Bubble } from "./PhoneFrame";
import Reveal from "./Reveal";
import { buildWhatsappLink } from "../lib/config";

const TIME_SLOTS = ["09:00", "11:00", "14:00", "16:00"];

const RESULT_CHIPS = [
  { icon: CalendarCheck, label: "Agendamento registrado" },
  { icon: UserCheck, label: "Cliente cadastrado" },
  { icon: Clock3, label: "Horário reservado" },
];

export default function DemoSection() {
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Seu cliente agenda sozinho. Veja como.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <PhoneFrame className="w-[300px] sm:w-[340px]">
            <Bubble from="client" time="18:02">
              Oi, queria marcar corte para amanhã.
            </Bubble>
            <Bubble from="assistant" time="18:02" delay={200}>
              Claro! 😊 Qual horário seria melhor para você?
            </Bubble>

            <div className="animate-fade-in flex flex-wrap gap-2 self-end" style={{ animationDelay: "400ms" }}>
              {TIME_SLOTS.map((slot) => (
                <span
                  key={slot}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                    slot === "14:00"
                      ? "bg-brand text-white"
                      : "bg-white text-ink/60 ring-1 ring-ink/10"
                  }`}
                >
                  {slot}
                </span>
              ))}
            </div>

            <Bubble from="client" time="18:03" delay={600}>
              14h.
            </Bubble>
            <Bubble from="assistant" time="18:03" delay={800}>
              Perfeito! Seu corte está agendado para amanhã às 14h. 💇‍♀️✨
            </Bubble>
          </PhoneFrame>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-3">
          {RESULT_CHIPS.map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-light/60 px-4 py-2 text-sm font-semibold text-brand-dark"
            >
              <chip.icon className="size-4" />
              {chip.label}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <Button
            href={buildWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            icon={ArrowRight}
          >
            Quero isso no meu salão
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
