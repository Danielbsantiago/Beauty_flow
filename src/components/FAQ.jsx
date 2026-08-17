import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const FAQ_ITEMS = [
  {
    question: "Preciso trocar meu número do WhatsApp?",
    answer:
      "Não. A plataforma se conecta ao seu WhatsApp através da API oficial da Meta, então você continua usando o mesmo número do seu salão.",
  },
  {
    question: "O sistema funciona pelo WhatsApp?",
    answer:
      "Sim. Todo o atendimento acontece dentro do próprio WhatsApp, usando a API oficial da Meta. Seu cliente conversa normalmente, do jeito que já está acostumado.",
  },
  {
    question: "Posso continuar atendendo manualmente?",
    answer:
      "Sim. A automação ajuda nos momentos em que você ou sua equipe não podem responder, mas vocês podem continuar atendendo manualmente sempre que quiserem.",
  },
  {
    question: "A IA pode cometer erros?",
    answer:
      "Como qualquer sistema de inteligência artificial, ela pode eventualmente cometer erros. Por isso a plataforma é construída para ser supervisionada e está em constante aprimoramento.",
  },
  {
    question: "Posso cadastrar meus próprios serviços e horários?",
    answer:
      "Sim. Os serviços oferecidos e os horários disponíveis são configurados de acordo com a rotina real do seu salão.",
  },
  {
    question: "Posso cancelar ou alterar agendamentos?",
    answer:
      "Sim. O cliente pode cancelar ou reagendar diretamente pelo WhatsApp, sem precisar que alguém da equipe faça isso manualmente.",
  },
  {
    question: "Funciona para salões pequenos?",
    answer:
      "Sim. A plataforma foi pensada para pequenos negócios do setor de beleza — salões, barbearias, studios e espaços de estética.",
  },
  {
    question: "Quanto custa?",
    answer: "Entre em contato para conhecer os planos disponíveis para seu salão.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-base font-semibold text-ink sm:text-lg">
          {item.question}
        </span>
        <ChevronDown
          className={`size-5 shrink-0 text-brand transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-8 text-sm leading-relaxed text-ink/60 sm:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 rounded-2xl border border-ink/8 bg-white px-6 sm:px-8">
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
