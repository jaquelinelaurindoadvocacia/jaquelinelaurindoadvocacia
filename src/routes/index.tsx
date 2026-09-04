import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/jaqueline-hero.jpg";
import atendimentoImage from "@/assets/atendimento-escritorio.jpg";
import fachadaImage from "@/assets/jaqueline-fachada.jpg";
import { site, mensagens } from "@/config/site";
import { WhatsAppButton, WhatsAppFloating } from "@/components/WhatsAppButton";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";


const SEO_TITLE =
  "Jaqueline Laurindo Advocacia | Direito Previdenciário em São Sebastião do Paraíso";
const SEO_DESC =
  "Advocacia Previdenciária em São Sebastião do Paraíso/MG, com atendimento presencial e online em todo o Brasil. Atuação em aposentadorias, BPC, pensão por morte, benefícios por incapacidade e outras demandas relacionadas ao INSS.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO_TITLE },
      { name: "description", content: SEO_DESC },
      { property: "og:title", content: SEO_TITLE },
      { property: "og:description", content: SEO_DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const previdenciario = [
  {
    titulo: "Aposentadorias",
    texto:
      "Orientação e atuação em pedidos de aposentadoria, incluindo aposentadoria por idade, aposentadoria rural e outras modalidades, conforme o caso concreto.",
  },
  {
    titulo: "BPC/LOAS",
    texto:
      "Orientação e atuação em situações envolvendo o Benefício de Prestação Continuada, inclusive diante de negativas ou dificuldades no reconhecimento do direito.",
  },
  {
    titulo: "Benefícios por incapacidade",
    texto:
      "Atuação em casos envolvendo auxílio por incapacidade temporária, aposentadoria por incapacidade permanente e outras situações relacionadas à incapacidade para o trabalho.",
  },
  {
    titulo: "Pensão por morte",
    texto:
      "Orientação e atuação para dependentes que buscam o reconhecimento do direito à pensão por morte.",
  },
  {
    titulo: "Salário-maternidade",
    texto:
      "Orientação sobre o benefício e atuação em situações de negativa ou dificuldade na concessão.",
  },
  {
    titulo: "Recursos e negativas do INSS",
    texto:
      "Análise e atuação diante de benefícios indeferidos, cessados ou suspensos, avaliando as medidas administrativas e judiciais cabíveis.",
  },
];

const outrasAreas = [
  { titulo: "Direito Civil", texto: "Atuação em questões e demandas da área cível." },
  {
    titulo: "Direito Trabalhista",
    texto: "Orientação e atuação em questões relacionadas às relações de trabalho.",
  },
  {
    titulo: "Direito Imobiliário",
    texto:
      "Atuação em questões relacionadas a imóveis, contratos e regularização imobiliária.",
  },
];

const etapas = [
  {
    n: "01",
    titulo: "Você entra em contato",
    texto: "Conte brevemente o que aconteceu e qual é a sua dúvida.",
  },
  {
    n: "02",
    titulo: "Seu caso é analisado",
    texto:
      "A situação é avaliada individualmente, considerando documentos e informações relevantes.",
  },
  {
    n: "03",
    titulo: "Você recebe orientação",
    texto: "São apresentadas as possibilidades jurídicas adequadas ao seu caso.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />


      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="eyebrow">Advocacia Previdenciária</span>
            <span className="rule-line mt-4" />
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] text-bordo-deep sm:text-6xl lg:text-[4.1rem]">
              O INSS negou?
              <br />
              <em className="not-italic text-bordo">Eu luto pelo seu sustento!</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Advocacia Previdenciária com atuação principal na defesa dos seus direitos
              perante o INSS.
            </p>
            <p className="mt-5 max-w-xl rounded-xl border border-border bg-card/70 px-5 py-4 text-[0.95rem] leading-relaxed text-foreground">
              Atendimento presencial em <strong>São Sebastião do Paraíso/MG</strong> e
              atendimento online para clientes de <strong>todo o Brasil</strong>.
            </p>
            <div className="mt-8">
              <WhatsAppButton origem="home-hero">Falar com a advogada pelo WhatsApp</WhatsAppButton>
              <p className="mt-4 text-xs tracking-wide text-muted-foreground">
                São Sebastião do Paraíso/MG&nbsp; | &nbsp;Atendimento online em todo o Brasil
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-4 -left-4 hidden h-full w-full rounded-[2rem] border border-bordo/25 sm:block" />
            <img
              src={heroImage}
              width={1024}
              height={1280}
              alt="Jaqueline Laurindo, advogada previdenciária em São Sebastião do Paraíso/MG"
              className="relative w-full rounded-[2rem] object-cover shadow-lift"
            />

          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="bg-secondary/60 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-serif text-3xl leading-snug text-bordo-deep sm:text-4xl">
            O INSS negou seu benefício? Você não precisa enfrentar isso sozinho.
          </h2>
          <span className="rule-line mx-auto mt-6" />
          <div className="mt-8 space-y-5 text-left text-[1.05rem] leading-relaxed text-muted-foreground sm:text-center">
            <p>
              Uma negativa do INSS não significa necessariamente que você não tenha direito
              ao benefício.
            </p>
            <p>
              Cada caso precisa ser analisado individualmente, considerando sua história de
              trabalho, seus documentos, suas contribuições e as circunstâncias que levaram
              ao pedido.
            </p>
            <p>
              A atuação jurídica pode ser necessária tanto para buscar a concessão de um
              benefício quanto para contestar uma negativa, suspensão ou cessação indevida.
            </p>
          </div>
          <div className="mt-9">
            <WhatsAppButton origem="home-dor">Quero analisar meu caso</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* PREVIDENCIÁRIO */}
      <section id="previdenciario" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <span className="eyebrow">Atuação principal</span>
            <h2 className="mt-4 font-serif text-4xl text-bordo-deep sm:text-5xl">
              Direito Previdenciário
            </h2>
            <span className="rule-line mt-5" />
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Defesa dos seus direitos perante o INSS, do requerimento à Justiça.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {previdenciario.map((item) => (
              <article
                key={item.titulo}
                className="group rounded-2xl border border-border bg-card p-7 shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:border-bordo/30 hover:shadow-lift"
              >
                <span className="rule-line w-8 transition-all duration-300 group-hover:w-14" />
                <h3 className="mt-5 font-serif text-2xl text-bordo-deep">{item.titulo}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <WhatsAppButton origem="home-previdenciario">Quero falar sobre meu benefício</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-sand py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative">
            <img
              src={atendimentoImage}
              loading="lazy"
              width={1024}
              height={1280}
              alt="Atendimento jurídico presencial no escritório Jaqueline Laurindo Advocacia"
              className="w-full rounded-[2rem] object-cover shadow-elegant"
            />
          </div>

          <div>
            <span className="eyebrow">Quem atende você</span>
            <h2 className="mt-4 font-serif text-4xl text-bordo-deep sm:text-5xl">
              Prazer, sou Jaqueline Laurindo.
            </h2>
            <span className="rule-line mt-5" />
            <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Sou advogada e atuo na defesa dos direitos dos meus clientes, com atuação
                principal na área previdenciária.
              </p>
              <p>
                Meu trabalho é transformar uma situação muitas vezes confusa e desgastante em
                um caminho mais claro, explicando ao cliente quais são seus direitos, quais
                documentos são necessários e quais medidas podem ser tomadas em cada etapa.
              </p>
              <p>
                Cada pessoa tem uma história diferente. Por isso, antes de buscar uma
                solução, é fundamental compreender o caso de forma individual e responsável.
              </p>
            </div>

            <dl className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Atuação principal", "Direito Previdenciário"],
                ["Atendimento presencial", "São Sebastião do Paraíso/MG"],
                ["Atendimento online", "Todo o Brasil"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-bordo/15 bg-card px-5 py-4"
                >
                  <dt className="eyebrow text-[0.6rem]">{label}</dt>
                  <dd className="mt-1.5 font-serif text-lg text-bordo-deep">{value}</dd>
                </div>
              ))}
            </dl>
            {site.oab ? (
              <p className="mt-5 text-sm text-muted-foreground">{site.oab}</p>
            ) : null}
          </div>
        </div>
      </section>

      {/* OUTRAS ÁREAS */}
      <section id="areas" className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="font-serif text-2xl text-bordo-deep sm:text-3xl">
            Outras áreas de atuação
          </h2>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
            Além da atuação principal em Direito Previdenciário, o escritório também oferece
            atendimento jurídico em outras áreas.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {outrasAreas.map((a) => (
              <article
                key={a.titulo}
                className="rounded-xl border border-border bg-card/60 p-5"
              >
                <h3 className="font-serif text-lg text-foreground">{a.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.texto}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <WhatsAppButton variant="outline" origem="home-outras-areas" message={mensagens.geral}>
              Falar sobre outra área
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <span className="eyebrow">Passo a passo</span>
            <h2 className="mt-4 font-serif text-3xl text-bordo-deep sm:text-4xl">
              Como funciona o atendimento?
            </h2>
            <span className="rule-line mx-auto mt-5" />
          </div>
          <ol className="mt-12 grid gap-6 sm:grid-cols-3">
            {etapas.map((e) => (
              <li key={e.n} className="rounded-2xl bg-card p-7 shadow-elegant">
                <span className="font-serif text-4xl text-bordo/40">{e.n}</span>
                <h3 className="mt-3 font-serif text-xl text-bordo-deep">{e.titulo}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {e.texto}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRESENCIAL E ONLINE */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-10 rounded-[2rem] border border-border bg-card p-8 shadow-elegant md:grid-cols-2 md:p-12">
            <div>
              <h2 className="font-serif text-3xl text-bordo-deep sm:text-4xl">
                Atendimento presencial e online
              </h2>
              <span className="rule-line mt-5" />
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Está em São Sebastião do Paraíso ou em qualquer outra região do Brasil?
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                O escritório realiza atendimento presencial em São Sebastião do Paraíso/MG e
                atendimento online para clientes de todo o Brasil.
              </p>
              <div className="mt-8">
                <WhatsAppButton origem="home-presencial">Falar com a advogada</WhatsAppButton>
              </div>
            </div>
            <div className="self-center">
              <img
                src={fachadaImage}
                loading="lazy"
                width={1024}
                height={1280}
                alt="Fachada do escritório Jaqueline Laurindo Advocacia"
                className="w-full rounded-2xl object-cover shadow-elegant"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="bg-bordo px-5 py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl leading-snug text-primary-foreground sm:text-[2.75rem]">
            O INSS negou? Não desista sem saber se você realmente não tem direito.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80">
            Seu caso merece uma análise individual.
          </p>
          <div className="mt-9">
            <WhatsAppButton variant="light" origem="home-chamada-final">Falar com a advogada</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <span className="eyebrow">Contato</span>
            <h2 className="mt-4 font-serif text-3xl text-bordo-deep sm:text-4xl">
              Entre em contato
            </h2>
            <span className="rule-line mx-auto mt-5" />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-serif text-2xl text-bordo-deep">{site.nome}</h3>
              <dl className="mt-6 space-y-4 text-sm">
                {site.endereco ? (
                  <div>
                    <dt className="eyebrow text-[0.6rem]">Endereço</dt>
                    <dd className="mt-1 text-foreground">
                      {site.mapsLink ? (
                        <a
                          href={site.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-bordo/30 underline-offset-4 hover:text-bordo"
                        >
                          {site.endereco}
                        </a>
                      ) : (
                        site.endereco
                      )}
                    </dd>
                  </div>
                ) : null}
                {site.telefone ? (
                  <div>
                    <dt className="eyebrow text-[0.6rem]">Telefone</dt>
                    <dd className="mt-1 text-foreground">
                      <a
                        href={`tel:${site.telefone.replace(/\D/g, "")}`}
                        className="hover:text-bordo"
                      >
                        {site.telefone}
                      </a>
                    </dd>
                  </div>
                ) : null}
                <div>
                  <dt className="eyebrow text-[0.6rem]">Atendimento presencial</dt>
                  <dd className="mt-1 text-foreground">{site.cidade}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[0.6rem]">Atendimento online</dt>
                  <dd className="mt-1 text-foreground">Todo o Brasil</dd>
                </div>
                {site.oab ? (
                  <div>
                    <dt className="eyebrow text-[0.6rem]">Inscrição</dt>
                    <dd className="mt-1 text-foreground">{site.oab}</dd>
                  </div>
                ) : null}
              </dl>
            </div>

            <div className="flex flex-col gap-3">
              <WhatsAppButton className="w-full" origem="home-contato">
                WhatsApp
              </WhatsAppButton>
              <Link
                to="/contato"
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-bordo/35 px-7 py-4 text-[0.95rem] font-semibold text-bordo transition-colors hover:bg-bordo hover:text-primary-foreground"
              >
                Enviar mensagem pelo formulário
              </Link>
              {site.instagram ? (
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-border px-7 py-4 text-[0.95rem] font-semibold text-foreground transition-colors hover:border-bordo/35 hover:text-bordo"
                >
                  {site.instagramHandle}
                </a>
              ) : null}
              {site.email ? (
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-[52px] w-full items-center justify-center break-all rounded-full border border-border px-7 py-4 text-center text-[0.9rem] font-semibold text-foreground transition-colors hover:border-bordo/35 hover:text-bordo"
                >
                  {site.email}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />


      <WhatsAppFloating />
    </div>
  );
}
