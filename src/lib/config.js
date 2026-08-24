// Configurações gerais do site — edite os valores abaixo conforme necessário.
// Nenhum dado de contato real foi inventado: troque os placeholders pelos seus.

export const SITE = {
  brand: "AtendfluxIA",

  // Número de WhatsApp para onde os CTAs vão apontar (formato internacional, só números).
  whatsappNumber: "5561981787169",

  // Mensagem pré-preenchida enviada ao clicar nos CTAs principais.
  whatsappMessage: "Olá! Quero começar grátis por 10 dias na AtendfluxIA.",

  email: "atendfluxia@gmail.com",

  // TODO: troque pelo @ real do Instagram.
  instagram: "https://instagram.com/atendfluxia",

  // Domínio oficial do site.
  domain: "www.atendfluxia.com.br",
};

export function buildWhatsappLink(customMessage) {
  const message = encodeURIComponent(customMessage || SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsappNumber}?text=${message}`;
}

export const NAV_LINKS = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
];
