import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad | AgentFlow",
  description:
    "Política de privacidad de AgentFlow. Conocé cómo protegemos tus datos personales.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="mx-auto max-w-3xl px-6 md:px-8 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>

        {/* Header */}
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
          Política de Privacidad
        </h1>
        <p className="mt-4 text-text-secondary text-sm">
          Última actualización: 13 de marzo de 2026
        </p>

        <div className="mt-12 space-y-10">
          {/* Intro */}
          <section>
            <p className="text-text-secondary leading-relaxed">
              En AgentFlow nos tomamos en serio la protección de tus datos
              personales. Esta política explica de forma clara qué información
              recopilamos, cómo la usamos y cuáles son tus derechos, en
              cumplimiento con la Ley 25.326 de Protección de Datos Personales
              de la República Argentina.
            </p>
            <p className="text-text-secondary leading-relaxed mt-3">
              AgentFlow es propiedad de y operada por MS Group Ventures LLC,
              sociedad constituida en los Estados Unidos, con domicilio en 30 N
              Gould St, Sheridan, WY 82801, Estados Unidos.
            </p>
          </section>

          <hr className="border-border" />

          {/* Qué datos recopilamos */}
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Qué datos recopilamos
            </h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Actualmente, AgentFlow se encuentra en etapa de lista de espera.
              Los únicos datos personales que recopilamos son:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed">
              <li>
                <strong className="text-text-primary">
                  Dirección de correo electrónico
                </strong>{" "}
                — proporcionada voluntariamente al registrarte en nuestra lista
                de espera.
              </li>
              <li>
                <strong className="text-text-primary">Nombre</strong> — si
                decidís proporcionarlo al registrarte.
              </li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-3">
              No recopilamos datos sensibles, información financiera ni datos de
              navegación más allá de las cookies esenciales para el
              funcionamiento del sitio.
            </p>
          </section>

          <hr className="border-border" />

          {/* Cómo usamos tus datos */}
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Cómo usamos tus datos
            </h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Usamos tu información exclusivamente para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed">
              <li>
                Notificarte cuando AgentFlow esté disponible o haya novedades
                relevantes.
              </li>
              <li>
                Comunicarnos con vos en relación a tu registro en la lista de
                espera.
              </li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-3">
              No vendemos, alquilamos ni compartimos tus datos personales con
              terceros con fines comerciales.
            </p>
          </section>

          <hr className="border-border" />

          {/* Cómo almacenamos tus datos */}
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Cómo almacenamos tus datos
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Tus datos se almacenan en una base de datos encriptada con acceso
              restringido. Implementamos medidas de seguridad técnicas y
              organizativas para proteger tu información contra acceso no
              autorizado, pérdida o alteración.
            </p>
          </section>

          <hr className="border-border" />

          {/* Retención de datos */}
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Retención de datos
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Conservamos tus datos mientras mantengas tu registro en la lista de
              espera o mientras exista una relación activa con AgentFlow. Si
              decidís darte de baja, eliminaremos tus datos personales de
              nuestros sistemas en un plazo máximo de 30 días.
            </p>
          </section>

          <hr className="border-border" />

          {/* Tus derechos */}
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Tus derechos
            </h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              De acuerdo con la Ley 25.326, tenés derecho a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed">
              <li>
                <strong className="text-text-primary">Acceso:</strong> Solicitar
                qué datos personales tenemos sobre vos.
              </li>
              <li>
                <strong className="text-text-primary">Rectificación:</strong>{" "}
                Corregir datos inexactos o incompletos.
              </li>
              <li>
                <strong className="text-text-primary">Supresión:</strong> Pedir
                la eliminación de tus datos personales.
              </li>
              <li>
                <strong className="text-text-primary">Oposición:</strong>{" "}
                Oponerte al tratamiento de tus datos en cualquier momento.
              </li>
            </ul>
          </section>

          <hr className="border-border" />

          {/* Contacto */}
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Contacto
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Para ejercer cualquiera de estos derechos o si tenés preguntas
              sobre esta política, escribinos a{" "}
              <a
                href="mailto:hola@agentflow.casa"
                className="text-accent hover:underline"
              >
                hola@agentflow.casa
              </a>
              . Responderemos tu solicitud dentro de los 10 días hábiles.
            </p>
          </section>

          <hr className="border-border" />

          {/* Cambios */}
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Cambios a esta política
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Podemos actualizar esta política periódicamente. Cualquier cambio
              será publicado en esta página con la fecha de actualización
              correspondiente. Te recomendamos revisarla cada tanto.
            </p>
          </section>
        </div>

        {/* Bottom back link */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
