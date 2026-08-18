import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import { buildWhatsappLink } from "../lib/config";

export default function PositioningSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-balance font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
            Você já gastou dinheiro para conquistar esses clientes.
          </p>
          <p className="text-balance mt-2 font-display text-2xl font-semibold leading-tight text-brand sm:text-3xl">
            O BeautyFlow ajuda você a trazê-los de volta.
          </p>
          <p className="mx-auto mt-6 max-w-md text-base font-medium text-ink/55">
            Atendimento, agendamento e reativação em uma única plataforma.
          </p>
          <div className="mt-9">
            <Button
              href={buildWhatsappLink("Olá! Quero recuperar os clientes que já conquistei com a BeautyFlow.")}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              icon={ArrowRight}
            >
              Quero recuperar meus clientes
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
