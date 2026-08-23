import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import { buildWhatsappLink } from "../lib/config";

export default function FinalCTA() {
  return (
    <section id="cta-final" className="relative overflow-hidden border-t border-line py-24 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand/25 to-brand-2/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Seu WhatsApp pode{" "}
            <span className="text-gradient">trabalhar por você.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/55">
            Descubra como um assistente virtual personalizado pode atender
            seus clientes e cuidar dos seus agendamentos.
          </p>
          <div className="mt-10">
            <Button
              href={buildWhatsappLink("Olá! Quero agendar uma demonstração da AtendfluxIA.")}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              icon={ArrowRight}
              className="px-9 py-5 text-lg"
            >
              Agendar demonstração gratuita
            </Button>
          </div>
          <p className="mt-5 text-sm text-ink/55">
            Comece agora pelo WhatsApp.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
