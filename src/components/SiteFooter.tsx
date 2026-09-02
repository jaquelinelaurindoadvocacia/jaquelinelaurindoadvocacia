import { Link } from "@tanstack/react-router";
import { site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-5 text-center text-xs leading-relaxed text-muted-foreground">
        <nav className="mb-5 flex flex-wrap justify-center gap-5 text-[0.8rem]">
          <Link to="/" className="hover:text-bordo">
            Início
          </Link>
          <Link to="/atuacao" className="hover:text-bordo">
            Atuação
          </Link>
          <Link to="/contato" className="hover:text-bordo">
            Contato
          </Link>
          {site.instagram ? (
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bordo"
            >
              Instagram
            </a>
          ) : null}
          {site.email ? (
            <a href={`mailto:${site.email}`} className="hover:text-bordo">
              E-mail
            </a>
          ) : null}
        </nav>
        <p>
          {site.nome} — Direito Previdenciário, Civil, Trabalhista e Imobiliário.{" "}
          {site.cidade}. {site.oab}
        </p>
        <p className="mt-2">
          Este site tem caráter meramente informativo, em conformidade com o Código de
          Ética e Disciplina da OAB. Não há captação de clientela nem promessa de
          resultado.
        </p>
      </div>
    </footer>
  );
}
