import { Mail, MessageCircle } from "lucide-react";
import { footerLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm font-extrabold text-white">
              A
            </span>
            <span className="text-lg font-bold tracking-tight text-text">
              Atlas Devs
            </span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            Diseñamos y desarrollamos software, apps e inteligencia artificial
            para empresas que buscan escalar con tecnología.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Contacto
            </p>
            <a
              href={`mailto:${footerLinks.email}`}
              className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              {footerLinks.email}
            </a>
            <a
              href={footerLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
              WhatsApp
            </a>
          </div>


        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="section-container text-center text-xs text-text-muted">
          © {year} Atlas Devs. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
