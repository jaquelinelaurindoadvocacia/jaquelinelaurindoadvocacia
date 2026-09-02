import type { ReactNode } from "react";
import { mensagens, whatsappLink } from "@/config/site";

type Props = {
  children: ReactNode;
  message?: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.32l-.34-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.19 4.23-9.41 9.42-9.41 2.51 0 4.88.98 6.65 2.76a9.35 9.35 0 0 1 2.76 6.66c0 5.19-4.23 9.42-9.42 9.42M20.11 3.9A11.32 11.32 0 0 0 12.05.57C5.8.57.72 5.65.72 11.9c0 1.99.52 3.94 1.51 5.65L.63 23.43l6.02-1.58a11.3 11.3 0 0 0 5.4 1.38h.01c6.24 0 11.32-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.01" />
    </svg>
  );
}

export function WhatsAppButton({
  children,
  message = mensagens.previdenciario,
  variant = "solid",
  className = "",
}: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

export function WhatsAppFloating() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lift transition-transform duration-300 hover:scale-105 md:hidden"
    >
      <WhatsAppIcon />
    </a>
  );
}
