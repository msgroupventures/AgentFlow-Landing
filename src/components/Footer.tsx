import { Mail } from "lucide-react";

const productLinks = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

const companyLinks = [
  { label: "Sobre Nosotros", href: "#", coming: true },
  { label: "Blog", href: "#", coming: true },
  { label: "Contacto", href: "mailto:hola@agentflow.casa" },
];

const legalLinks = [
  { label: "Política de Privacidad", href: "#" },
  { label: "Términos de Uso", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#"
              className="font-display text-xl font-bold text-text-primary tracking-tight"
            >
              agent<span className="text-accent">Flow</span>
            </a>
            <p className="mt-3 text-sm text-text-tertiary leading-relaxed max-w-xs">
              IA que automatiza tus operaciones inmobiliarias.
            </p>
            <a
              href="mailto:hola@agentflow.casa"
              className="inline-flex items-center gap-2 mt-4 text-sm text-text-tertiary hover:text-accent transition-colors"
            >
              <Mail size={14} />
              hola@agentflow.casa
            </a>
          </div>

          {/* Producto */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Producto
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-tertiary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm text-text-tertiary hover:text-accent transition-colors ${
                      link.coming ? "pointer-events-none opacity-50" : ""
                    }`}
                  >
                    {link.label}
                    {link.coming && (
                      <span className="ml-1.5 text-[10px] text-text-tertiary/60">
                        próximamente
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-tertiary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-text-tertiary">
            © 2026 AgentFlow. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
