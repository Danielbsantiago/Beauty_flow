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
          <p className="text-balance mt-2 font-display text-3xl font-bold tracking-tight text-gradient sm:text-4xl lg:text-5xl">
            A Ondia cuida das oportunidades.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/55">
            Venda, receba pedidos, agende clientes e mantenha
            relacionamentos ativos mesmo quando você está ocupado.
          </p>
          <div className="mt-10">
            <Button
              href={buildWhatsappLink("Olá! Quero começar o teste grátis da Ondia.")}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              icon={ArrowRight}
              className="px-9 py-5 text-lg"
            >
              Começar teste grátis
            </Button>
          </div>
          <p className="mt-5 text-sm text-ink/40">
            7 dias grátis para experimentar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
