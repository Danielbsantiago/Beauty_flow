import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import { buildWhatsappLink } from "../lib/config";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand/25 to-brand-2/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Você cuida do seu negócio.
          </h2>
          <p className="text-balance mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            A Automatc<span className="text-gradient">IA</span> cuida dos
            seus agendamentos.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/55">
            Menos tarefas repetitivas, mais tempo para o que importa — e
            mais clientes atendidos e convertidos.
          </p>
          <div className="mt-10">
            <Button
              href={buildWhatsappLink("Olá! Quero começar grátis por 7 dias na AutomatcIA.")}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              icon={ArrowRight}
              className="px-9 py-5 text-lg"
            >
              Começar grátis por 7 dias
            </Button>
          </div>
          <p className="mt-5 text-sm text-ink/40">
            Comece agora pelo WhatsApp.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
