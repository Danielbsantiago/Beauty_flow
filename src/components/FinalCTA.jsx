import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import { buildWhatsappLink } from "../lib/config";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-24 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Quantos clientes da sua base poderiam voltar?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Descubra como o BeautyFlow pode ajudar seu salão a automatizar o
            atendimento, aproveitar melhor sua agenda e criar novas
            oportunidades com clientes que estão há muito tempo sem voltar.
          </p>
          <div className="mt-10">
            <Button
              href={buildWhatsappLink("Olá! Quero conhecer o BeautyFlow.")}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              icon={ArrowRight}
              className="px-9 py-5 text-lg"
            >
              Quero conhecer o BeautyFlow
            </Button>
          </div>
          <p className="mt-5 text-sm text-white/45">
            Solicite uma demonstração gratuita.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
