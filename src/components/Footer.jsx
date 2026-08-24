import { MessageCircle, Mail } from "lucide-react";
import Logo from "./Logo";
import { SITE, buildWhatsappLink } from "../lib/config";

const NAV_COLUMN = [
  { label: "Início", href: "#topo" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
];

// TODO: crie e vincule as páginas reais de Política de Privacidade e Termos de Uso.
const LEGAL_COLUMN = [
  { label: "Contato", href: buildWhatsappLink() },
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-panel pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
              Atendimento, vendas e reativação de clientes em uma única
              plataforma.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={buildWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex size-10 items-center justify-center rounded-full bg-white/5 text-ink/60 transition-colors hover:bg-brand hover:text-canvas"
              >
                <MessageCircle className="size-4.5" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="E-mail"
                className="flex size-10 items-center justify-center rounded-full bg-white/5 text-ink/60 transition-colors hover:bg-brand hover:text-canvas"
              >
                <Mail className="size-4.5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-ink/55">
              Navegação
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_COLUMN.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-ink/55 hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-ink/55">
              Legal
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {LEGAL_COLUMN.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-ink/55 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-ink/55">
            © {year} {SITE.brand}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-ink/55">Feito para negócios que vendem, atendem e agendam.</p>
        </div>
      </div>
    </footer>
  );
}
