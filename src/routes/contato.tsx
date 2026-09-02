import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { site } from "@/config/site";
import { supabase } from "@/integrations/supabase/client";
import { WhatsAppButton, WhatsAppFloating } from "@/components/WhatsAppButton";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const TITLE = "Contato | Jaqueline Laurindo Advocacia — Previdenciário em SSP/MG";
const DESC =
  "Fale com a advogada Jaqueline Laurindo: envie sua mensagem pelo formulário, WhatsApp, Instagram ou e-mail. Atendimento presencial em São Sebastião do Paraíso/MG e online em todo o Brasil.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

const assuntos = [
  "Aposentadoria",
  "BPC/LOAS",
  "Benefício por incapacidade",
  "Pensão por morte",
  "Salário-maternidade",
  "Negativa ou revisão do INSS",
  "Outro assunto",
];

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-[0.95rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-bordo/50";

function Contato() {
  const [status, setStatus] = useState<"idle" | "enviando" | "ok" | "erro">("idle");
  const [erro, setErro] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      nome: String(data.get("nome") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      telefone: String(data.get("telefone") ?? "").trim() || null,
      assunto: String(data.get("assunto") ?? "").trim() || null,
      mensagem: String(data.get("mensagem") ?? "").trim(),
    };

    if (!payload.nome || !payload.email || !payload.mensagem) {
      setStatus("erro");
      setErro("Preencha nome, e-mail e mensagem.");
      return;
    }

    setStatus("enviando");
    setErro("");
    const { error } = await supabase.from("mensagens_contato").insert(payload);

    if (error) {
      setStatus("erro");
      setErro("Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.");
      return;
    }

    form.reset();
    setStatus("ok");
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border/60 bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <span className="eyebrow">Contato</span>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-bordo-deep sm:text-5xl">
            Conte o que aconteceu com o seu benefício
          </h1>
          <span className="rule-line mt-5" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Escreva sua mensagem pelo formulário abaixo ou escolha o canal que preferir. O
            atendimento é presencial em {site.cidade} e online para todo o Brasil.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-border bg-card p-7 shadow-elegant md:p-9">
            <h2 className="font-serif text-2xl text-bordo-deep">Enviar mensagem</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Os dados enviados são tratados com sigilo profissional.
            </p>

            <form onSubmit={onSubmit} className="mt-7 space-y-5">
              <div>
                <label htmlFor="nome" className="eyebrow text-[0.6rem]">
                  Nome completo *
                </label>
                <input id="nome" name="nome" required className={inputClass} placeholder="Seu nome" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="eyebrow text-[0.6rem]">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="voce@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="eyebrow text-[0.6rem]">
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    inputMode="tel"
                    className={inputClass}
                    placeholder="(35) 90000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="assunto" className="eyebrow text-[0.6rem]">
                  Assunto
                </label>
                <select id="assunto" name="assunto" className={inputClass} defaultValue="">
                  <option value="">Selecione</option>
                  {assuntos.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="eyebrow text-[0.6rem]">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={6}
                  className={inputClass}
                  placeholder="Conte brevemente o que aconteceu e qual é a sua dúvida."
                />
              </div>

              <button
                type="submit"
                disabled={status === "enviando"}
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-bordo px-7 py-4 text-[0.95rem] font-semibold text-primary-foreground shadow-elegant transition-all duration-300 hover:bg-bordo-deep disabled:opacity-60"
              >
                {status === "enviando" ? "Enviando..." : "Enviar mensagem"}
              </button>

              {status === "ok" ? (
                <p role="status" className="rounded-xl border border-bordo/25 bg-sand px-4 py-3 text-sm text-bordo-deep">
                  Mensagem enviada. Em breve você receberá um retorno pelo e-mail ou
                  telefone informado.
                </p>
              ) : null}
              {status === "erro" ? (
                <p role="alert" className="rounded-xl border border-destructive/40 px-4 py-3 text-sm text-destructive">
                  {erro}
                </p>
              ) : null}
            </form>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-7">
              <h2 className="font-serif text-xl text-bordo-deep">{site.nome}</h2>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="eyebrow text-[0.6rem]">Atendimento presencial</dt>
                  <dd className="mt-1 text-foreground">{site.cidade}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[0.6rem]">Atendimento online</dt>
                  <dd className="mt-1 text-foreground">Todo o Brasil</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[0.6rem]">E-mail</dt>
                  <dd className="mt-1 break-all text-foreground">{site.email}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[0.6rem]">Instagram</dt>
                  <dd className="mt-1 text-foreground">{site.instagramHandle}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[0.6rem]">Inscrição</dt>
                  <dd className="mt-1 text-foreground">{site.oab}</dd>
                </div>
              </dl>
            </div>

            <WhatsAppButton className="w-full" origem="contato-lateral">
              WhatsApp
            </WhatsAppButton>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-bordo/35 px-7 py-4 text-[0.95rem] font-semibold text-bordo transition-colors hover:bg-bordo hover:text-primary-foreground"
            >
              {site.instagramHandle}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-[52px] w-full items-center justify-center break-all rounded-full border border-border px-7 py-4 text-center text-[0.9rem] font-semibold text-foreground transition-colors hover:border-bordo/35 hover:text-bordo"
            >
              {site.email}
            </a>
          </aside>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloating />
    </div>
  );
}
