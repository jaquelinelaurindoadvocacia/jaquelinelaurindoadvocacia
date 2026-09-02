import { supabase } from "@/integrations/supabase/client";

/**
 * Registra um clique em botão de WhatsApp.
 * Nunca bloqueia a navegação: falhas são silenciosas.
 */
export function registrarCliqueWhatsapp(origem: string) {
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
