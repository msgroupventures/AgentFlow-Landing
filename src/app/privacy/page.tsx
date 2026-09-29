import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalPage,
  LegalSection,
  LegalList,
  LegalTable,
  Strong,
  ExtLink,
  Mail,
  Code,
} from "@/components/legal/LegalPage";
import { LEGAL_UPDATED_ES, PRIVACY_EMAIL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de Privacidad | AgentFlow",
  description:
    "Política de privacidad de AgentFlow: qué datos tratamos, cómo usamos los datos de Google Calendar, con quién los compartimos y cuáles son tus derechos.",
  alternates: {
    canonical: "/privacy",
    languages: {
      "es-AR": "/privacy",
      en: "/en/privacy",
    },
  },
  openGraph: {
    url: "https://agentflow.casa/privacy",
    title: "Política de Privacidad | AgentFlow",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      lang="es"
      title="Política de Privacidad"
      updated={LEGAL_UPDATED_ES}
      esHref="/privacy"
      enHref="/en/privacy"
    >
      <LegalSection>
        <p>
          Esta política explica qué datos personales trata AgentFlow, para qué,
          con quién los compartimos y qué derechos tenés. AgentFlow es propiedad
          de y operada por <Strong>MS Group Ventures LLC</Strong>, sociedad
          constituida en los Estados Unidos, con domicilio en 30 N Gould St,
          Sheridan, WY 82801, Estados Unidos (&quot;AgentFlow&quot;,
          &quot;nosotros&quot;). Cumplimos con la Ley 25.326 de Protección de
          los Datos Personales de la República Argentina y su normativa
          complementaria.
        </p>
      </LegalSection>

      <LegalSection id="alcance" title="1. A quién aplica esta política">
        <LegalList
          items={[
            <>
              <Strong>Oficinas y franquicias RE/MAX</Strong> que contratan
              AgentFlow para sus agentes (&quot;Franquicias&quot;).
            </>,
            <>
              <Strong>Agentes inmobiliarios</Strong> que usan AgentFlow como
              parte de una Franquicia (&quot;Usuarios&quot;).
            </>,
            <>
              <Strong>Terceros</Strong> con los que AgentFlow se comunica en
              nombre de un Usuario: compradores, vendedores, propietarios y
              otros agentes (&quot;Contactos&quot;).
            </>,
            <>
              <Strong>Visitantes</Strong> de agentflow.casa y personas que se
              anotan en la lista de espera.
            </>,
          ]}
        />
        <p>
          <Strong>Roles.</Strong> AgentFlow se contrata a través de la
          Franquicia. Respecto de los datos de las operaciones, clientes y
          Contactos de la Franquicia, la Franquicia es la responsable del
          tratamiento y AgentFlow actúa como prestador de servicios de
          tratamiento por cuenta de ella, en los términos del artículo 25 de la
          Ley 25.326. Respecto de los datos de Google Calendar, del sitio web y
          de la lista de espera, AgentFlow es el responsable.
        </p>
      </LegalSection>

      <LegalSection id="datos" title="2. Qué datos tratamos">
        <LegalTable
          head={["Categoría", "Ejemplos", "Fuente"]}
          rows={[
            [
              "Datos de cuenta del Usuario",
              "Nombre, email, teléfono de WhatsApp, oficina RE/MAX, horario laboral",
              "El Usuario",
            ],
            [
              "Mensajes de WhatsApp",
              "Texto, audios, documentos e imágenes intercambiados con AgentFlow",
              "Usuario y Contactos",
            ],
            [
              "Transcripciones de audio",
              "Texto generado a partir de mensajes de voz",
              "Generado por AgentFlow",
            ],
            [
              "Datos de operaciones inmobiliarias",
              "Propiedades, fotos, oportunidades, visitas, ofertas, autorizaciones, reservas, documentos",
              "Usuario y Contactos",
            ],
            [
              "Datos de Contactos",
              "Nombre, teléfono, email, tipo y número de documento, domicilio, rol en la operación",
              "Usuario y Contactos",
            ],
            [
              "Datos de Google Calendar",
              <a key="g" href="#google-user-data" className="text-accent hover:underline">
                Ver sección 3
              </a>,
              "Google, con tu autorización",
            ],
            ["Lista de espera", "Email y, opcionalmente, nombre", "Visitante"],
            [
              "Datos técnicos",
              "Registros de acceso y de errores, necesarios para operar el servicio",
              "Generado automáticamente",
            ],
          ]}
        />
        <p>No usamos cookies de publicidad ni de seguimiento de terceros.</p>
      </LegalSection>

      <LegalSection
        id="google-user-data"
        title="3. Datos de usuario de Google (Google Calendar)"
      >
        <p>Si conectás tu cuenta de Google, AgentFlow solicita acceso a:</p>
        <LegalTable
          head={["Permiso", "Para qué lo usamos"]}
          rows={[
            [
              <>
                Ver y editar eventos de tus calendarios (
                <Code>calendar.events</Code>)
              </>,
              "Crear, modificar y cancelar los eventos de visitas y actividades que coordinás con AgentFlow, y leer tus eventos existentes para detectar superposiciones y proponer horarios libres",
            ],
            [
              <>
                Ver la lista de tus calendarios (
                <Code>calendar.calendarlist.readonly</Code>)
              </>,
              "Que elijas en qué calendario se registran las visitas",
            ],
          ]}
        />
        <p>
          <Strong>Cómo los usamos.</Strong> Los datos de Google Calendar se usan
          únicamente para brindarte la función de agenda de AgentFlow: detectar
          conflictos, proponer horarios, responder tus consultas sobre tu agenda
          y mantener sincronizados tus eventos de visitas. AgentFlow sincroniza
          tu calendario automáticamente para que la agenda esté actualizada.
        </p>
        <p>
          <Strong>Uso limitado.</Strong> El uso que AgentFlow hace de la
          información recibida de las APIs de Google, y su transferencia a
          cualquier otra aplicación, cumple con la{" "}
          <ExtLink href="https://developers.google.com/terms/api-services-user-data-policy">
            Política de Datos de Usuario de los Servicios de API de Google
          </ExtLink>
          , incluidos los requisitos de Uso Limitado. En particular:
        </p>
        <LegalList
          items={[
            "Usamos los datos de Google solo para brindar o mejorar las funciones de agenda que ves en AgentFlow.",
            "No vendemos datos de Google ni los usamos para publicidad, perfiles publicitarios ni reventa.",
            <>
              <Strong>
                No usamos datos de Google para entrenar ni mejorar modelos
                generales de inteligencia artificial o aprendizaje automático
              </Strong>
              , propios ni de terceros.
            </>,
            <>
              Solo transferimos datos de Google a los proveedores listados en la{" "}
              <a href="#proveedores" className="text-accent hover:underline">
                sección 5
              </a>{" "}
              cuando es necesario para ejecutar un pedido tuyo (por ejemplo, el
              proveedor de IA que interpreta tu mensaje), bajo obligaciones
              contractuales de confidencialidad.
            </>,
            "Ninguna persona de AgentFlow lee tus datos de Google, salvo que (a) nos des tu consentimiento expreso para un caso puntual (por ejemplo, un pedido de soporte), (b) sea necesario por motivos de seguridad, como investigar un abuso, o (c) lo exija la ley.",
          ]}
        />
        <p>
          <Strong>Almacenamiento.</Strong> El token de acceso de Google se
          guarda cifrado (AES-256-GCM). Los eventos sincronizados se guardan en
          nuestra base de datos con acceso restringido a tu cuenta.
        </p>
        <p>
          <Strong>Cómo revocar el acceso.</Strong> Podés desconectar Google
          Calendar en cualquier momento desde Configuración, en el panel web de
          AgentFlow, o desde{" "}
          <ExtLink href="https://myaccount.google.com/permissions">
            myaccount.google.com/permissions
          </ExtLink>
          . Al desconectar, revocamos el acceso y eliminamos los datos de
          calendario sincronizados desde Google.
        </p>
      </LegalSection>

      <LegalSection id="finalidades" title="4. Para qué usamos los datos">
        <LegalList
          items={[
            "Prestar el servicio: interpretar tus pedidos, coordinar visitas, generar y enviar documentos, mejorar fotos de propiedades, hacer seguimiento de operaciones y enviar recordatorios.",
            "Comunicarnos con Contactos en nombre del Usuario que los cargó o que interactúa con ellos.",
            "Recordar tus preferencias de trabajo para responderte mejor dentro de tu cuenta.",
            "Seguridad, prevención de abusos, diagnóstico de errores y cumplimiento legal.",
            "Avisos sobre la lista de espera y novedades del producto (podés darte de baja en cualquier momento).",
          ]}
        />
        <p>No vendemos ni alquilamos datos personales.</p>
      </LegalSection>

      <LegalSection
        id="proveedores"
        title="5. Inteligencia artificial y proveedores"
      >
        <p>
          AgentFlow usa proveedores que procesan datos por cuenta nuestra, solo
          para prestar el servicio y bajo obligaciones contractuales que limitan
          el uso de esos datos.
        </p>
        <LegalTable
          head={["Proveedor", "Función", "Ubicación"]}
          rows={[
            ["Anthropic", "Modelo de IA que interpreta mensajes y decide acciones", "EE.UU."],
            ["Meta (WhatsApp Business Platform)", "Envío y recepción de mensajes de WhatsApp", "EE.UU."],
            ["OpenAI", "Transcripción de mensajes de voz y mejora de fotos de propiedades", "EE.UU."],
            ["Google", "Integración con Google Calendar y servicios de mapas", "EE.UU."],
            ["Supabase", "Base de datos, autenticación y almacenamiento de archivos", "EE.UU."],
            ["Railway", "Infraestructura de servidores", "EE.UU."],
            ["ConvertAPI", "Conversión de documentos a PDF", "EE.UU."],
            ["Langfuse", "Monitoreo técnico del funcionamiento de la IA", "EE.UU."],
            ["Vercel", "Alojamiento de este sitio web", "EE.UU."],
          ]}
        />
        <p>
          Las respuestas generadas por IA pueden contener errores. Las
          autorizaciones se generan como borrador para que las revises antes de
          enviarlas. Revisá siempre cualquier documento antes de enviarlo o
          firmarlo.
        </p>
      </LegalSection>

      <LegalSection
        id="transferencias"
        title="6. Transferencias internacionales"
      >
        <p>
          Tus datos se almacenan y procesan fuera de la República Argentina,
          principalmente en los Estados Unidos, que no cuenta con una decisión
          de nivel adecuado de protección según la normativa argentina.
          Adoptamos garantías contractuales con nuestros proveedores. Al usar
          AgentFlow prestás tu consentimiento para esta transferencia.
        </p>
      </LegalSection>

      <LegalSection
        id="contactos"
        title="7. Datos de Contactos (compradores, vendedores y terceros)"
      >
        <p>
          La Franquicia, a través de sus Usuarios, es responsable de contar
          con una base legítima para cargar datos de Contactos o comunicarse
          con ellos a través de AgentFlow. AgentFlow trata esos datos solo por
          cuenta de la Franquicia y para las operaciones inmobiliarias en
          curso. Si sos un Contacto y querés ejercer tus derechos, podés
          dirigirte a la Franquicia o escribirnos a la dirección de la{" "}
          <a href="#derechos" className="text-accent hover:underline">
            sección 10
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="conservacion" title="8. Conservación">
        <LegalTable
          head={["Datos", "Plazo"]}
          rows={[
            [
              "Operaciones, Contactos, documentos, mensajes y transcripciones de WhatsApp",
              "Mientras esté vigente el contrato con la Franquicia. Al finalizar, se devuelven o eliminan dentro de los 90 días, salvo que la ley exija conservarlos por más tiempo",
            ],
            [
              "Datos de cuenta de un Usuario que deja la Franquicia",
              "Se eliminan dentro de los 90 días de su baja. Si pedís la supresión antes, la hacemos dentro del plazo legal. Las operaciones que gestionaste siguen siendo registros de la Franquicia",
            ],
            ["Datos de Google Calendar", "Hasta que desconectes tu cuenta de Google"],
            ["Lista de espera", "Hasta que te des de baja, y luego hasta 30 días"],
            ["Registros técnicos", "90 días"],
          ]}
        />
      </LegalSection>

      <LegalSection id="seguridad" title="9. Seguridad">
        <p>
          Aplicamos cifrado en tránsito (HTTPS/TLS), cifrado de credenciales
          sensibles, control de acceso por cuenta a nivel de base de datos,
          enmascaramiento de datos personales en registros técnicos y acceso
          restringido del personal.
        </p>
      </LegalSection>

      <LegalSection id="derechos" title="10. Tus derechos">
        <p>
          De acuerdo con la Ley 25.326 tenés derecho a acceder, rectificar,
          actualizar y suprimir tus datos, y a oponerte a su tratamiento. El
          derecho de acceso puede ejercerse en forma gratuita a intervalos no
          inferiores a seis meses, salvo que se acredite un interés legítimo al
          efecto. Podés dirigirte a tu Franquicia o escribirnos a{" "}
          <Mail address={PRIVACY_EMAIL} />; si el pedido corresponde a datos
          que tratamos por cuenta de la Franquicia, lo gestionamos junto con
          ella. Respondemos dentro de los plazos legales.
        </p>
        <p>
          La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de
          Órgano de Control de la Ley N° 25.326, tiene la atribución de atender
          las denuncias y reclamos que interpongan quienes resulten afectados en
          sus derechos por incumplimiento de las normas vigentes en materia de
          protección de datos personales.
        </p>
      </LegalSection>

      <LegalSection id="menores" title="11. Menores">
        <p>
          AgentFlow está dirigido a profesionales inmobiliarios mayores de 18
          años. No recopilamos a sabiendas datos de menores.
        </p>
      </LegalSection>

      <LegalSection id="cambios" title="12. Cambios">
        <p>
          Publicaremos cualquier cambio en esta página con su fecha de
          actualización. Si el cambio es relevante, te avisaremos por WhatsApp o
          email.
        </p>
      </LegalSection>

      <LegalSection id="contacto" title="13. Contacto">
        <p>
          MS Group Ventures LLC — 30 N Gould St, Sheridan, WY 82801, Estados
          Unidos — <Mail address={PRIVACY_EMAIL} />.
        </p>
        <p>
          Ver también los{" "}
          <Link href="/terms" className="text-accent hover:underline">
            Términos de Uso
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
