import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalPage,
  LegalSection,
  LegalList,
  Mail,
} from "@/components/legal/LegalPage";
import { LEGAL_UPDATED_ES, PRIVACY_EMAIL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Términos de Uso | AgentFlow",
  description:
    "Términos de uso de AgentFlow. Conocé las condiciones para utilizar nuestro sitio y nuestro servicio.",
  alternates: {
    canonical: "/terms",
    languages: {
      "es-AR": "/terms",
      en: "/en/terms",
    },
  },
  openGraph: {
    url: "https://agentflow.casa/terms",
    title: "Términos de Uso | AgentFlow",
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      lang="es"
      title="Términos de Uso"
      updated={LEGAL_UPDATED_ES}
      esHref="/terms"
      enHref="/en/terms"
    >
      <LegalSection>
        <p>
          Estos Términos de Uso regulan el acceso y la utilización del sitio web
          agentflow.casa y del servicio AgentFlow, ofrecidos por MS Group
          Ventures LLC (AgentFlow). Al acceder o utilizar el sitio o el
          servicio, aceptás estos términos en su totalidad. Si no estás de
          acuerdo con alguna parte, te pedimos que no los utilices.
        </p>
      </LegalSection>

      <LegalSection id="servicio" title="Descripción del servicio">
        <p>
          AgentFlow es un asistente de inteligencia artificial para agentes
          inmobiliarios que opera principalmente por WhatsApp. Coordina visitas,
          genera documentos, hace seguimiento de operaciones y se integra con
          Google Calendar. El servicio se ofrece actualmente en etapa beta a
          agentes RE/MAX en Argentina.
        </p>
      </LegalSection>

      <LegalSection id="responsabilidad-usuario" title="Responsabilidad del Usuario">
        <LegalList
          items={[
            "Sos responsable de la veracidad de los datos que cargás y de contar con base legítima para tratar los datos de tus clientes y contactos.",
            "Los documentos y respuestas generados por IA pueden contener errores. Revisá todo documento antes de enviarlo o firmarlo.",
            "AgentFlow no presta asesoramiento legal, contable ni fiscal.",
          ]}
        />
      </LegalSection>

      <LegalSection id="beta" title="Beta">
        <p>
          Durante la beta el servicio puede cambiar, interrumpirse o tener
          errores. Podemos modificar o discontinuar funciones con aviso
          razonable.
        </p>
      </LegalSection>

      <LegalSection id="uso-aceptable" title="Uso aceptable">
        <p>Al utilizar el sitio o el servicio, te comprometés a:</p>
        <LegalList
          items={[
            "Proporcionar información veraz y actualizada.",
            "No utilizar el sitio ni el servicio para fines ilegales o no autorizados.",
            "No intentar acceder de manera no autorizada a nuestros sistemas, servidores o bases de datos.",
            "No reproducir, duplicar ni explotar ninguna parte del sitio con fines comerciales sin nuestro consentimiento previo por escrito.",
            "No transmitir virus, malware ni ningún código de naturaleza destructiva.",
          ]}
        />
        <p>
          Nos reservamos el derecho de restringir el acceso a cualquier usuario
          que incumpla estas condiciones.
        </p>
      </LegalSection>

      <LegalSection id="propiedad-intelectual" title="Propiedad intelectual">
        <p>
          Todo el contenido del sitio web de AgentFlow — incluyendo textos,
          diseños, logotipos, gráficos, íconos y software — es propiedad de MS
          Group Ventures LLC o de sus licenciantes y está protegido por las
          leyes de propiedad intelectual aplicables y tratados internacionales.
          No se otorga ninguna licencia ni derecho sobre dicho contenido salvo
          el uso personal y no comercial de navegación del sitio.
        </p>
      </LegalSection>

      <LegalSection id="limitacion" title="Limitación de responsabilidad">
        <p>
          El sitio, el servicio y sus contenidos se proporcionan &quot;tal
          cual&quot; y &quot;según disponibilidad&quot;, sin garantías de
          ningún tipo, expresas o implícitas.
        </p>
        <p>
          En la medida permitida por la ley aplicable, AgentFlow no será
          responsable por daños directos, indirectos, incidentales,
          consecuentes o especiales que surjan del uso o la imposibilidad de
          uso del sitio o del servicio. Esto incluye, sin limitación, la
          pérdida de datos, interrupciones del servicio o errores en el
          contenido.
        </p>
      </LegalSection>

      <LegalSection id="privacidad" title="Privacidad">
        <p>
          El tratamiento de datos personales se rige por nuestra{" "}
          <Link href="/privacy" className="text-accent hover:underline">
            Política de Privacidad
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection id="marcas" title="Marcas">
        <p>
          RE/MAX, WhatsApp, Google y Google Calendar son marcas de sus
          respectivos titulares. AgentFlow es un producto independiente y no
          está afiliado, patrocinado ni avalado por ellos.
        </p>
      </LegalSection>

      <LegalSection id="ley-aplicable" title="Ley aplicable">
        <p>
          Estos términos se rigen por las leyes del Estado de Wyoming, Estados
          Unidos, sin perjuicio de las normas imperativas de protección al
          consumidor y de datos personales que resulten aplicables en tu país
          de residencia.
        </p>
      </LegalSection>

      <LegalSection id="cambios" title="Cambios a estos términos">
        <p>
          Podemos modificar estos Términos de Uso en cualquier momento. Los
          cambios serán efectivos desde su publicación en esta página con la
          fecha de actualización correspondiente. El uso continuado del sitio o
          del servicio después de cualquier modificación implica la aceptación
          de los nuevos términos.
        </p>
      </LegalSection>

      <LegalSection id="contacto" title="Contacto">
        <p>
          MS Group Ventures LLC — 30 N Gould St, Sheridan, WY 82801, Estados
          Unidos — <Mail address={PRIVACY_EMAIL} />.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
