import { Link } from "@tanstack/react-router";
import { whatsappLink } from "@/config/site";
import { registrarClique } from "@/lib/tracking";
import { CalendarButton } from "@/components/CalendarButton";
import logoAsset from "@/assets/logo-cabecalho.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center">
          <img
            src={logoAsset}
            alt="Jaqueline Laurindo Advocacia"
            width={260}
            height={48}
            className="h-10 w-auto object-contain md:h-11"
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/" className="transition-colors hover:text-bordo">
            Início
          </Link>
          <Link
            to="/atuacao"
            className="transition-colors hover:text-bordo"
            activeProps={{ className: "text-bordo font-semibold" }}
          >
            Atuação
          </Link>
          <Link
            to="/contato"
            className="transition-colors hover:text-bordo"
            activeProps={{ className: "text-bordo font-semibold" }}
          >
            Contato
          </Link>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <CalendarButton
            variant="outline"
            origem="header-agendamento"
            className="px-5 py-2.5 text-sm"
          >
            Agendar
          </CalendarButton>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => registrarClique("header-whatsapp")}
            className="rounded-full bg-bordo px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-bordo-deep"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
