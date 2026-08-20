import { Sparkles, Clock, Radar, RotateCcw, ArrowDown, Info } from "lucide-react";
import Badge from "./Badge";
import PhoneFrame, { Bubble } from "./PhoneFrame";
import Reveal from "./Reveal";

export default function ReactivationSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand/15 to-brand-2/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <Badge icon={Sparkles}>Recurso em destaque</Badge>
          <h2 className="text-balance mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Não deixe bons clientes serem esquecidos.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/55">
            Mantenha o relacionamento e crie novas oportunidades com pessoas
            que já conhecem seu negócio. A AutomatcIA acompanha os clientes
            que passam pelo sistema e, quando identifica que alguém ficou
            algum tempo sem voltar, pode iniciar uma nova conversa.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 flex max-w-xs flex-col items-center gap-3 rounded-[2rem] border border-brand/20 bg-panel/60 px-6 py-10">
            <div className="flex items-center gap-3 rounded-full border border-line bg-panel-2 py-2 pl-2 pr-4">
              <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 font-display text-sm font-bold text-canvas">
                M
              </span>
              <span className="text-left">
                <span className="block text-sm font-semibold text-ink">Maria</span>
                <span className="flex items-center gap-1 text-[11px] text-ink/45">
                  <Clock className="size-3" />
                  Última compra: 74 dias atrás
                </span>
              </span>
            </div>

            <ArrowDown className="size-4 text-ink/25" />

            <div className="flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-xs font-semibold text-brand-2">
              <Radar className="size-4" />
              AutomatcIA identifica
            </div>

            <ArrowDown className="size-4 text-ink/25" />

            <PhoneFrame className="w-[240px]">
              <Bubble from="assistant" time="09:15">
                Oi, Maria! 😊 Faz um tempinho que não falamos. Temos
                novidades que talvez você goste. Quer dar uma olhada?
              </Bubble>
            </PhoneFrame>

            <ArrowDown className="size-4 text-ink/25" />

            <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-4 py-2 text-xs font-bold text-canvas shadow-[0_8px_24px_-6px_rgba(139,108,255,0.5)]">
              <RotateCcw className="size-4" />
              NOVA OPORTUNIDADE
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mx-auto mt-10 flex max-w-lg items-start gap-2.5 rounded-xl border border-line bg-panel/60 px-5 py-4 text-left">
            <Info className="mt-0.5 size-4 shrink-0 text-ink/35" />
            <p className="text-xs leading-relaxed text-ink/45">
              A reativação é baseada nos clientes e interações acompanhados
              pelo sistema após sua implementação — não importa nem recupera
              automaticamente toda a base antiga do negócio.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
