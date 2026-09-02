import { createFileRoute, Link } from "@tanstack/react-router";
import { site, mensagens } from "@/config/site";
import { WhatsAppButton, WhatsAppFloating } from "@/components/WhatsAppButton";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const TITLE = "Áreas de Atuação | Direito Previdenciário — Jaqueline Laurindo Advocacia";
const DESC =
  "Áreas de atuação em Direito Previdenciário: aposentadorias, BPC/LOAS, benefícios por incapacidade, pensão por morte, salário-maternidade e revisão de negativas do INSS.";

export const Route = createFileRoute("/atuacao")({
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
  component: Atuacao,
});

const especialidades = [
  {
    titulo: "Aposentadorias",
    texto:
      "Análise do tempo de contribuição e das regras aplicáveis para aposentadoria por idade, por tempo de contribuição, rural, especial e regras de transição.",
    itens: [
      "Aposentadoria por idade (urbana e rural)",
      "Aposentadoria por tempo de contribuição e regras de transição",
      "Aposentadoria especial (atividade com exposição a agentes nocivos)",
      "Contagem e averbação de tempo de contribuição",
    ],
  },
  {
    titulo: "BPC/LOAS",
    texto:
      "Benefício de Prestação Continuada para pessoas idosas e pessoas com deficiência em situação de vulnerabilidade social.",
    itens: [
      "Análise dos requisitos de renda e do grupo familiar",
      "Avaliação médica e social do INSS",
      "Atuação diante de indeferimento ou cessação",
    ],
  },
  {
    titulo: "Benefícios por incapacidade",
    texto:
      "Situações em que a doença ou a lesão impede o trabalho, de forma temporária ou permanente.",
    itens: [
      "Auxílio por incapacidade temporária (antigo auxílio-doença)",
      "Aposentadoria por incapacidade permanente",
      "Auxílio-acidente e adicional de 25%",
      "Pedidos de prorrogação e recursos após alta médica",
    ],
  },
  {
    titulo: "Pensão por morte",
    texto:
      "Reconhecimento do direito dos dependentes após o falecimento do segurado.",
    itens: [
      "Comprovação de união estável e de dependência econômica",
      "Duração do benefício conforme idade e tempo de união",
      "Rateio entre dependentes",
    ],
  },
  {
    titulo: "Salário-maternidade",
    texto:
      "Benefício devido em razão de nascimento, adoção ou guarda judicial, inclusive para seguradas rurais e desempregadas dentro do período de graça.",
    itens: [
      "Seguradas empregadas, autônomas e facultativas",
      "Trabalhadoras rurais e seguradas especiais",
      "Pedidos negados por falta de qualidade de segurada",
    ],
  },
  {
    titulo: "Revisões, recursos e negativas do INSS",
    texto:
      "Reanálise de benefícios indeferidos, cessados, suspensos ou pagos em valor abaixo do devido.",
    itens: [
      "Recurso administrativo e ação judicial",
      "Revisão do valor do benefício",
      "Restabelecimento de benefício cessado",
      "Planejamento previdenciário antes de requerer",
    ],
  },
];

const casos = [
  {
    tag: "Aposentadoria rural",
    situacao:
      "Trabalhadora rural teve o pedido negado porque o INSS considerou insuficientes os documentos apresentados sobre o trabalho no campo.",
    atuacao:
      "Reunião da documentação de toda a vida rural (notas de produtor, registros escolares, documentos do cônjuge) e produção de prova testemunhal para demonstrar o período de atividade.",
  },
  {
    tag: "Benefício por incapacidade",
    situacao:
      "Segurado em tratamento médico recebeu alta na perícia do INSS mesmo apresentando laudos que indicavam a permanência da incapacidade para o trabalho.",
    atuacao:
      "Organização do histórico clínico, pedido de prorrogação e, quando necessário, medida judicial com pedido de perícia técnica.",
  },
  {
    tag: "BPC/LOAS",
    situacao:
      "Família teve o BPC indeferido por avaliação de renda per capita que não considerava gastos permanentes com saúde e medicamentos.",
    atuacao:
      "Demonstração da real situação de vulnerabilidade do grupo familiar, com comprovação das despesas e do impacto na renda.",
  },
  {
    tag: "Pensão por morte",
    situacao:
      "Companheira de segurado falecido teve o pedido negado por ausência de prova formal da união estável.",
    atuacao:
      "Reunião de provas documentais e testemunhais da convivência e da dependência econômica para o reconhecimento da condição de dependente.",
  },
  {
    tag: "Salário-maternidade",
    situacao:
      "Segurada desempregada teve o benefício negado sob o entendimento de que havia perdido a qualidade de segurada.",
    atuacao:
      "Demonstração do período de graça e do vínculo previdenciário ainda vigente na data do parto.",
  },
  {
    tag: "Revisão de benefício",
    situacao:
      "Aposentado recebia valor abaixo do esperado porque parte do tempo de contribuição não constava no cadastro do INSS.",
    atuacao:
      "Levantamento do CNIS, averbação dos períodos faltantes e pedido de revisão do cálculo do benefício.",
  },
];

function Atuacao() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border/60 bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <span className="eyebrow">Áreas de atuação</span>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-bordo-deep sm:text-5xl">
            Direito Previdenciário, do requerimento à Justiça
          </h1>
          <span className="rule-line mt-5" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Cada benefício tem regras próprias e exige documentos específicos. Abaixo você
            encontra as principais frentes de atuação do escritório e exemplos de situações
            comuns entre quem enfrenta o INSS.
          </p>
          <div className="mt-8">
            <WhatsAppButton origem="atuacao-topo">
              Falar sobre o meu caso
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-serif text-3xl text-bordo-deep sm:text-4xl">
            Especialidades previdenciárias
          </h2>
          <span className="rule-line mt-5" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {especialidades.map((e) => (
              <article
                key={e.titulo}
                className="rounded-2xl border border-border bg-card p-7 shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:border-bordo/30 hover:shadow-lift"
              >
                <h3 className="font-serif text-2xl text-bordo-deep">{e.titulo}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {e.texto}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {e.itens.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 h-1 w-3 shrink-0 bg-bordo/50" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <span className="eyebrow">Situações reais</span>
          <h2 className="mt-4 font-serif text-3xl text-bordo-deep sm:text-4xl">
            Casos que chegam ao escritório
          </h2>
          <span className="rule-line mt-5" />
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Exemplos de situações frequentes, apresentados sem qualquer identificação das
            pessoas envolvidas e sem promessa de resultado. Cada caso é analisado
            individualmente.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {casos.map((c) => (
              <article key={c.tag} className="rounded-2xl bg-card p-7 shadow-elegant">
                <span className="eyebrow text-[0.6rem] text-bordo">{c.tag}</span>
                <h3 className="mt-4 font-serif text-lg text-bordo-deep">A situação</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {c.situacao}
                </p>
                <h3 className="mt-5 font-serif text-lg text-bordo-deep">Como se atua</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {c.atuacao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="font-serif text-3xl leading-snug text-bordo-deep sm:text-4xl">
            A sua história é diferente de todas as outras.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Antes de desistir de um benefício, vale entender exatamente o que o INSS
            analisou e quais caminhos ainda existem.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <WhatsAppButton origem="atuacao-final" message={mensagens.previdenciario}>
              Falar pelo WhatsApp
            </WhatsAppButton>
            <Link
              to="/contato"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-bordo/35 px-7 py-4 text-[0.95rem] font-semibold text-bordo transition-colors hover:bg-bordo hover:text-primary-foreground"
            >
              Enviar mensagem
            </Link>
          </div>
          {site.oab ? (
            <p className="mt-6 text-sm text-muted-foreground">{site.oab}</p>
          ) : null}
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloating />
    </div>
  );
}
