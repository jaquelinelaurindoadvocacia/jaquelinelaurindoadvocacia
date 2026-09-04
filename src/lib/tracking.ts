import { supabase } from "@/integrations/supabase/client";

/**
 * Registra um clique em botão ou link.
 * Nunca bloqueia a navegação: falhas são silenciosas.
 */
export function registrarClique(origem: string) {
  try {
    const pagina =
      typeof window !== "undefined" ? window.location.pathname : null;
    void supabase
      .from("cliques_whatsapp")
      .insert({ origem, pagina })
      .then(() => undefined);
  } catch {
    /* ignora */
  }
}

/**
 * Registra um clique em botão de WhatsApp.
 * @deprecated Use registrarClique com uma origem descritiva.
 */
export function registrarCliqueWhatsapp(origem: string) {
  return registrarClique(origem);
}
