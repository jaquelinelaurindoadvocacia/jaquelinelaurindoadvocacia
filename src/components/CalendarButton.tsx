import type { ReactNode } from "react";
import { site } from "@/config/site";
import { registrarClique } from "@/lib/tracking";

type Props = {
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
  /** Identificação do botão para o relatório de cliques */
  origem?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[0.95rem] font-semibold tracking-wide transition-all duration-300 min-h-[52px]";

const variants = {
  solid:
    "bg-bordo text-primary-foreground shadow-elegant hover:bg-bordo-deep hover:shadow-lift hover:-translate-y-0.5",
  outline:
    "border border-bordo/35 text-bordo hover:bg-bordo hover:text-primary-foreground",
  light:
    "bg-background text-bordo shadow-elegant hover:-translate-y-0.5 hover:shadow-lift",
};

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-none stroke-current stroke-[1.75]"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export function CalendarButton({
  children,
  variant = "outline",
  className = "",
  origem = "agendamento-botao",
}: Props) {
  return (
    <a
      href={site.calendarLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => registrarClique(origem)}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <CalendarIcon />
      {children}
    </a>
  );
}
