CREATE TABLE public.cliques_whatsapp (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  origem text NOT NULL DEFAULT 'desconhecida',
  pagina text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.cliques_whatsapp TO anon, authenticated;
GRANT ALL ON public.cliques_whatsapp TO service_role;
ALTER TABLE public.cliques_whatsapp ENABLE ROW LEVEL SECURITY;
CREATE POLICY "qualquer_um_registra_clique" ON public.cliques_whatsapp FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.mensagens_contato (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome text NOT NULL,
  email text NOT NULL,
  telefone text,
  assunto text,
  mensagem text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.mensagens_contato TO anon, authenticated;
GRANT ALL ON public.mensagens_contato TO service_role;
ALTER TABLE public.mensagens_contato ENABLE ROW LEVEL SECURITY;
CREATE POLICY "qualquer_um_envia_mensagem" ON public.mensagens_contato FOR INSERT TO anon, authenticated WITH CHECK (true);