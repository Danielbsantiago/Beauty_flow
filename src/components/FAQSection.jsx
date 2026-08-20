import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const FAQ_ITEMS = [
  {
    question: "Preciso trocar meu número de WhatsApp?",
    answer: "Não. Você continua usando o mesmo número do seu negócio.",
  },
  {
    question: "Funciona pelo WhatsApp?",
    answer: "Sim. Toda a automação acontece dentro do WhatsApp, do jeito que seus clientes já usam.",
  },
  {
    question: "Posso continuar atendendo manualmente?",
    answer: "Sim. A automação ajuda nos momentos em que você não pode responder, mas você pode assumir a conversa quando quiser.",
  },
  {
    question: "Funciona para o meu tipo de negócio?",
    answer: "A AutomatcIA se adapta a diferentes tipos de negócio — comércio, serviços, alimentação e mais.",
  },
  {
    question: "Quanto custa?",
    answer: "Os planos começam em R$149/mês, com 7 dias grátis para testar.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-line last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-base font-semibold text-ink">
          {item.question}
        </span>
        <ChevronDown
          className={`size-5 shrink-0 text-brand-2 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <p className="pb-5 pr-8 text-sm leading-relaxed text-ink/55">{item.answer}</p>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Perguntas rápidas
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 rounded-2xl border border-line bg-panel px-6 sm:px-7">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
