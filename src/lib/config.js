// Configurações gerais do site — edite os valores abaixo conforme necessário.
// Nenhum dado de contato real foi inventado: troque os placeholders pelos seus.

export const SITE = {
  brand: "BeautyFlow",

  // Número de WhatsApp para onde os CTAs vão apontar (formato internacional, só números).
  // TODO: troque pelo número real do WhatsApp comercial.
  whatsappNumber: "5500000000000",

  // Mensagem pré-preenchida enviada ao clicar nos CTAs principais.
  whatsappMessage:
    "Olá! Quero recuperar os clientes que já conquistei com a BeautyFlow.",

  // TODO: troque pelo e-mail real de contato.
  email: "contato@beautyflow.com.br",

  // TODO: troque pelo @ real do Instagram.
  instagram: "https://instagram.com/beautyflow",
};

export function buildWhatsappLink(customMessage) {
  const message = encodeURIComponent(customMessage || SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsappNumber}?text=${message}`;
}

export const NAV_LINKS = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Demonstração", href: "#demonstracao" },
  { label: "FAQ", href: "#faq" },
];
