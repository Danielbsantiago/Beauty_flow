import { MessageCircle, Camera, Mail } from "lucide-react";
import Logo from "./Logo";
import { SITE, buildWhatsappLink } from "../lib/config";

const NAV_COLUMN = [
  { label: "Início", href: "#topo" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "FAQ", href: "#faq" },
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
    <footer className="bg-brand-dark pb-8 pt-16 max-lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Automação inteligente para salões de beleza.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={buildWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex size-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-brand hover:text-white"
              >
                <MessageCircle className="size-4.5" />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-brand hover:text-white"
              >
                <Camera className="size-4.5" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="E-mail"
                className="flex size-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-brand hover:text-white"
              >
                <Mail className="size-4.5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-white/35">
              Navegação
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_COLUMN.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-white/35">
              Legal
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {LEGAL_COLUMN.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/60 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/35">
            © {year} {SITE.brand}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/35">Feito para o setor de beleza.</p>
        </div>
      </div>
    </footer>
  );
}
