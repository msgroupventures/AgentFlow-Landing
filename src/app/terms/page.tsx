import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Términos de Uso | AgentFlow",
  description:
    "Términos de uso de AgentFlow. Conocé las condiciones para utilizar nuestra plataforma.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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
          Términos de Uso
        </h1>
        <p className="mt-4 text-text-secondary text-sm">
          Última actualización: 13 de marzo de 2026
        </p>

        <div className="mt-12 space-y-10">
          {/* Intro */}
          <section>
            <p className="text-text-secondary leading-relaxed">
              Estos Términos de Uso regulan el acceso y la utilización del sitio
              web de AgentFlow (agentflow.casa) y los servicios ofrecidos a
              través de él. Al acceder o utilizar nuestro sitio, aceptás estos
              términos en su totalidad. Si no estás de acuerdo con alguna parte,
              te pedimos que no utilices el sitio.
            </p>
          </section>

          <hr className="border-border" />

          {/* Descripción del servicio */}
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Descripción del servicio
            </h2>
            <p className="text-text-secondary leading-relaxed">
              AgentFlow es una plataforma de inteligencia artificial diseñada
              para automatizar operaciones inmobiliarias de agentes RE/MAX en
              Argentina. Actualmente, el servicio se encuentra en etapa de
              desarrollo y ofrecemos únicamente una lista de espera para acceso
              anticipado. Al registrarte en la lista de espera, proporcionás tu
              información de contacto para recibir novedades sobre la
              disponibilidad de la plataforma.
            </p>
          </section>

          <hr className="border-border" />

          {/* Uso aceptable */}
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Uso aceptable
            </h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Al utilizar nuestro sitio, te comprometés a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary leading-relaxed">
              <li>
                Proporcionar información veraz y actualizada al registrarte.
              </li>
              <li>
                No utilizar el sitio para fines ilegales o no autorizados.
              </li>
              <li>
                No intentar acceder de manera no autorizada a nuestros sistemas,
                servidores o bases de datos.
              </li>
              <li>
                No reproducir, duplicar ni explotar ninguna parte del sitio con
                fines comerciales sin nuestro consentimiento previo por escrito.
              </li>
              <li>
                No transmitir virus, malware ni ningún código de naturaleza
                destructiva.
              </li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-3">
              Nos reservamos el derecho de restringir el acceso a cualquier
              usuario que incumpla estas condiciones.
            </p>
          </section>

          <hr className="border-border" />

          {/* Propiedad intelectual */}
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Propiedad intelectual
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Todo el contenido del sitio web de AgentFlow — incluyendo textos,
              diseños, logotipos, gráficos, íconos y software — es propiedad de
              AgentFlow o de sus licenciantes y está protegido por las leyes de
              propiedad intelectual de la República Argentina y tratados
              internacionales aplicables. No se otorga ninguna licencia ni
              derecho sobre dicho contenido salvo el uso personal y no comercial
              de navegación del sitio.
            </p>
          </section>

          <hr className="border-border" />

          {/* Limitación de responsabilidad */}
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Limitación de responsabilidad
            </h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              El sitio y sus contenidos se proporcionan &quot;tal cual&quot; y
              &quot;según disponibilidad&quot;, sin garantías de ningún tipo,
              expresas o implícitas.
            </p>
            <p className="text-text-secondary leading-relaxed">
              AgentFlow no será responsable por daños directos, indirectos,
              incidentales, consecuentes o especiales que surjan del uso o la
              imposibilidad de uso del sitio o sus servicios. Esto incluye, sin
              limitación, la pérdida de datos, interrupciones del servicio o
              errores en el contenido.
            </p>
          </section>

          <hr className="border-border" />

          {/* Cambios a los términos */}
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Cambios a estos términos
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Podemos modificar estos Términos de Uso en cualquier momento. Los
              cambios serán efectivos desde su publicación en esta página con la
              fecha de actualización correspondiente. El uso continuado del sitio
              después de cualquier modificación implica la aceptación de los
              nuevos términos. Te recomendamos revisar esta página
              periódicamente.
            </p>
          </section>

          <hr className="border-border" />

          {/* Contacto */}
          <section>
            <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
              Contacto
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Si tenés preguntas o inquietudes sobre estos Términos de Uso,
              escribinos a{" "}
              <a
                href="mailto:hola@agentflow.casa"
                className="text-accent hover:underline"
              >
                hola@agentflow.casa
              </a>
              .
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
