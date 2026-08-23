import { User } from "lucide-react";
import Reveal from "./Reveal";

export default function AboutFounderSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <span className="flex size-24 shrink-0 items-center justify-center rounded-full border border-dashed border-line text-ink/30">
            <User className="size-9" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-ink/55">
              Quem está por trás
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink/65">
              Antes de criar a AtendfluxIA, eu tocava um negócio sozinho —
              atendendo cliente, entregando o serviço e tentando organizar a
              agenda ao mesmo tempo. Sei o que é perder uma venda só por
              demorar pra responder. Criei essa ferramenta pra que nenhum
              negócio precise escolher entre atender bem e continuar
              trabalhando.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
