/**
 * Dados do escritório — edite tudo por aqui.
 * Deixe em string vazia ("") o que ainda não estiver definido:
 * os itens vazios simplesmente não aparecem na página.
 */
export const site = {
  nome: "Jaqueline Laurindo Advocacia",
  advogada: "Jaqueline Laurindo",
  cidade: "São Sebastião do Paraíso/MG",

  /** Número do WhatsApp com DDI + DDD, apenas dígitos. Ex.: "5535999999999" */
  whatsapp: "5535997145067",

  /** Ex.: "https://instagram.com/seuperfil" */
  instagram: "https://instagram.com/jaquelinelaurindoadvogada",
  instagramHandle: "@jaquelinelaurindoadvogada",

  /** Ex.: "contato@exemplo.com.br" */
  email: "jaquelinelaurindoadvocacia@gmail.com",

  /** Ex.: "OAB/MG 000.000" */
  oab: "OAB/MG 167.232",

} as const;

export const mensagens = {
  previdenciario:
    "Olá, Jaqueline. Gostaria de falar sobre uma questão relacionada ao INSS.",
  geral:
    "Olá, Jaqueline. Gostaria de informações sobre atendimento jurídico.",
} as const;

export function whatsappLink(mensagem: string = mensagens.previdenciario) {
  if (!site.whatsapp) return "#contato";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
