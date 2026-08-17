import { ArrowRight, Quote } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import { buildWhatsappLink } from "../lib/config";

export default function WaitlistSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-light text-brand-dark">
            <Quote className="size-6" />
          </div>
          <h2 className="text-balance mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Seu próximo resultado pode começar aqui.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-ink/60">
            Estamos selecionando salões para participar da primeira fase da
            plataforma.
          </p>
          <div className="mt-9">
            <Button
              href={buildWhatsappLink("Olá! Quero participar da primeira fase da BeautyFlow.")}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              icon={ArrowRight}
            >
              Quero participar
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-ink/12 bg-surface text-xs font-medium text-ink/35"
              >
                Depoimento real em breve
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
