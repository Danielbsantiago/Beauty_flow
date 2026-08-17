import { CalendarRange, MessageCircle } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import { buildWhatsappLink } from "../lib/config";

export default function ScheduleDemoSection() {
  return (
    <section id="demonstracao" className="bg-brand-light/50 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Quer ver funcionando no seu salão?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/60">
            Agende uma demonstração e veja como seu atendimento pode
            funcionar automaticamente pelo WhatsApp.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              href={buildWhatsappLink("Olá! Quero agendar uma demonstração gratuita da BeautyFlow.")}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              icon={CalendarRange}
              iconPosition="left"
            >
              Agendar demonstração gratuita
            </Button>
            <Button
              href={buildWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={MessageCircle}
              iconPosition="left"
            >
              Falar pelo WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
