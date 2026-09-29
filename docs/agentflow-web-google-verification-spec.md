# Spec: agentflow.casa update for Google OAuth verification + feature refresh

> **Audience:** Claude Code. **Owner:** Martin. **Status:** ready for implementation.
> **Date:** 2026-09-28. **Repo:** landing site deployed on Vercel at `https://agentflow.casa` (inspect the repo first; routes `/`, `/privacy`, `/terms` already exist).
> Two sections (E) apply to the **app repo** (Railway, `app.agentflow.casa`), not the landing repo. Do them in that repo or skip them here and report back.

---

## 0. Why this exists

Google Cloud project `agentflow-prod` requests one **sensitive** scope (`calendar.events`) plus three non-sensitive ones (`calendar.events.freebusy`, `calendar.freebusy`, `calendar.calendarlist.readonly`). No restricted scopes, so no CASA audit. To remove the "unverified app" warning, Google must verify:

1. **Branding** — home page, privacy policy and terms on the verified domain `agentflow.casa`.
2. **Data access** — scope justification + demo video.

Google's reviewer will read the privacy policy against the scope justification. Today `/privacy` says the only data collected is the waitlist email and name. That contradicts a live Calendar integration and **will fail review**. This spec fixes that, removes wording that implies Google endorsement, and refreshes the product copy so it matches the shipped app.

### Hard constraints for all copy

| Rule | Why |
|---|---|
| Never claim a feature that is not shipped in production | Consumer-protection exposure (AR Ley 24.240) and reviewer trust |
| Never imply Google, Meta or Anthropic endorse or partner with AgentFlow | Google brand review rejects implied endorsement |
| Privacy policy content must match the scope justification in substance | Reviewer cross-checks both |
| User-facing copy in es-AR with voseo; English mirror for legal pages | Users are Argentine; Google reviewers work in English |
| Legal entity everywhere: **MS Group Ventures LLC**, 30 N Gould St, Sheridan, WY 82801, USA | Must match the Google project owner and consent-screen identity |

### Definition of done

- [ ] **Section E2 verification tasks (V1–V3) completed first, and `VERIFICATION-REPORT.md` reviewed by Martin before any copy ships**
- [ ] `/privacy` and `/terms` replaced with the texts in sections A and B (es-AR)
- [ ] `/en/privacy` and `/en/terms` published with the English texts, cross-linked with a language switch
- [ ] Home page changes in section C shipped
- [ ] Every page reachable without login, HTTPS, no redirect to another domain
- [ ] Footer on every page links to Privacy + Terms (both languages)
- [ ] `[CONFIRM]` placeholders resolved by Martin before deploy (list in section F)
- [ ] QA checklist in section G passes

---

## A. Privacy policy (replace `/privacy`, add `/en/privacy`)

Implementation notes:
- Render as a static page with anchor IDs per section (`#google-user-data` must exist; the Google section will be linked directly from the consent-screen justification).
- Keep the current "Volver al inicio" link.
- Add at top: language switch `ES | EN`.
- Replace `[FECHA]` with the deploy date.

### A.1 Spanish (es-AR) — canonical for users

```markdown
# Política de Privacidad

Última actualización: [FECHA]

Esta política explica qué datos personales trata AgentFlow, para qué, con quién los compartimos y qué derechos tenés. AgentFlow es propiedad de y operada por **MS Group Ventures LLC**, sociedad constituida en los Estados Unidos, con domicilio en 30 N Gould St, Sheridan, WY 82801, Estados Unidos ("AgentFlow", "nosotros"). Cumplimos con la Ley 25.326 de Protección de los Datos Personales de la República Argentina y su normativa complementaria.

## 1. A quién aplica esta política

- **Agentes inmobiliarios** que usan AgentFlow ("Usuarios").
- **Terceros** con los que AgentFlow se comunica en nombre de un Usuario: compradores, vendedores, propietarios y otros agentes ("Contactos").
- **Visitantes** de agentflow.casa y personas que se anotan en la lista de espera.

## 2. Qué datos tratamos

| Categoría | Ejemplos | Fuente |
|---|---|---|
| Datos de cuenta del Usuario | Nombre, email, teléfono de WhatsApp, oficina RE/MAX, horario laboral | El Usuario |
| Mensajes de WhatsApp | Texto, audios, documentos e imágenes intercambiados con AgentFlow | Usuario y Contactos |
| Transcripciones de audio | Texto generado a partir de mensajes de voz | Generado por AgentFlow |
| Datos de operaciones inmobiliarias | Propiedades, oportunidades, visitas, ofertas, autorizaciones, reservas, documentos | Usuario y Contactos |
| Datos de Contactos | Nombre, teléfono, email, tipo y número de documento, domicilio, rol en la operación | Usuario y Contactos |
| Datos de Google Calendar | Ver sección 3 | Google, con tu autorización |
| Lista de espera | Email y, opcionalmente, nombre | Visitante |
| Datos técnicos | Registros de acceso y de errores, necesarios para operar el servicio | Generado automáticamente |

No usamos cookies de publicidad ni de seguimiento de terceros.

## 3. Datos de usuario de Google (Google Calendar) {#google-user-data}

Si conectás tu cuenta de Google, AgentFlow solicita acceso a:

| Permiso | Para qué lo usamos |
|---|---|
| Ver y editar eventos de tus calendarios (`calendar.events`) | Crear, modificar y cancelar los eventos de visitas y actividades que coordinás con AgentFlow, y leer tus eventos existentes para evitar superposiciones |
| Ver tu disponibilidad (`calendar.freebusy`, `calendar.events.freebusy`) | Proponer horarios libres para las visitas |
| Ver la lista de tus calendarios (`calendar.calendarlist.readonly`) | Que elijas en qué calendario se registran las visitas |

**Cómo los usamos.** Los datos de Google Calendar se usan únicamente para brindarte la función de agenda de AgentFlow: detectar conflictos, proponer horarios y mantener sincronizados tus eventos de visitas. AgentFlow sincroniza periódicamente tu calendario para que la agenda esté actualizada.

**Uso limitado.** El uso que AgentFlow hace de la información recibida de las APIs de Google, y su transferencia a cualquier otra aplicación, cumple con la [Política de Datos de Usuario de los Servicios de API de Google](https://developers.google.com/terms/api-services-user-data-policy), incluidos los requisitos de Uso Limitado. En particular:

- Usamos los datos de Google solo para brindar o mejorar las funciones de agenda que ves en AgentFlow.
- No vendemos datos de Google ni los usamos para publicidad, perfiles publicitarios ni reventa.
- **No usamos datos de Google para entrenar ni mejorar modelos generales de inteligencia artificial o aprendizaje automático**, propios ni de terceros.
- Solo transferimos datos de Google a los proveedores listados en la sección 5 cuando es necesario para ejecutar un pedido tuyo (por ejemplo, el proveedor de IA que interpreta tu mensaje), bajo obligaciones contractuales de confidencialidad.
- Ninguna persona de AgentFlow lee tus datos de Google, salvo que (a) nos des tu consentimiento expreso para un caso puntual (por ejemplo, un pedido de soporte), (b) sea necesario por motivos de seguridad, como investigar un abuso, o (c) lo exija la ley.

**Almacenamiento.** El token de acceso de Google se guarda cifrado (AES-256-GCM). Los eventos sincronizados se guardan en nuestra base de datos con acceso restringido a tu cuenta.

**Cómo revocar el acceso.** Podés desconectar Google Calendar en cualquier momento desde Configuración en AgentFlow o desde https://myaccount.google.com/permissions. Al desconectar, revocamos el token y eliminamos los datos de calendario sincronizados desde Google dentro de los [CONFIRM: 30] días.

## 4. Para qué usamos los datos (finalidades)

- Prestar el servicio: interpretar tus pedidos, coordinar visitas, generar y enviar documentos, hacer seguimiento de operaciones y enviar recordatorios.
- Comunicarnos con Contactos en nombre del Usuario que los cargó o que interactúa con ellos.
- Recordar tus preferencias de trabajo para responderte mejor dentro de tu cuenta.
- Seguridad, prevención de abusos, diagnóstico de errores y cumplimiento legal.
- Avisos sobre la lista de espera y novedades del producto (podés darte de baja en cualquier momento).

No vendemos ni alquilamos datos personales.

## 5. Inteligencia artificial y proveedores

AgentFlow usa proveedores que procesan datos por cuenta nuestra, solo para prestar el servicio y bajo obligaciones contractuales. Ninguno está autorizado a usar tus datos para sus propios fines.

| Proveedor | Función | Ubicación |
|---|---|---|
| Anthropic | Modelo de IA que interpreta mensajes y decide acciones | EE.UU. |
| Meta (WhatsApp Business Platform) | Envío y recepción de mensajes de WhatsApp | EE.UU. |
| OpenAI | Transcripción de mensajes de voz | EE.UU. |
| Google | Integración con Google Calendar | EE.UU. |
| Supabase | Base de datos, autenticación y almacenamiento de archivos | [CONFIRM: región, p. ej. EE.UU.] |
| Railway | Infraestructura de servidores | EE.UU. |
| ConvertAPI | Conversión de documentos a PDF | [CONFIRM] |
| Langfuse | Monitoreo técnico del funcionamiento de la IA | [CONFIRM: región] |
| Vercel | Alojamiento de este sitio web | EE.UU. |

Las respuestas generadas por IA pueden contener errores. Antes de enviar documentos legales a terceros, AgentFlow te los presenta para tu revisión.

## 6. Transferencias internacionales

Tus datos se almacenan y procesan fuera de la República Argentina, principalmente en los Estados Unidos, que no cuenta con una decisión de nivel adecuado de protección según la normativa argentina. Adoptamos garantías contractuales con nuestros proveedores. Al usar AgentFlow prestás tu consentimiento para esta transferencia.

## 7. Datos de Contactos (compradores, vendedores y terceros)

El Usuario que carga o se comunica con un Contacto a través de AgentFlow es responsable de contar con una base legítima para hacerlo. AgentFlow trata esos datos solo para las operaciones inmobiliarias en curso. Si sos un Contacto y querés ejercer tus derechos, escribinos a la dirección de la sección 10.

## 8. Conservación

| Datos | Plazo |
|---|---|
| Cuenta y operaciones | Mientras la cuenta esté activa, y luego [CONFIRM: 12] meses o lo que exija la ley |
| Mensajes y transcripciones de WhatsApp | [CONFIRM: 12] meses desde su recepción |
| Datos de Google Calendar | Hasta la desconexión, y luego hasta [CONFIRM: 30] días |
| Lista de espera | Hasta que te des de baja, y luego hasta 30 días |
| Registros técnicos | [CONFIRM: 90] días |

## 9. Seguridad

Aplicamos cifrado en tránsito (HTTPS/TLS), cifrado de credenciales sensibles, control de acceso por cuenta a nivel de base de datos, enmascaramiento de datos personales en registros técnicos y acceso restringido del personal.

## 10. Tus derechos

De acuerdo con la Ley 25.326 tenés derecho a acceder, rectificar, actualizar y suprimir tus datos, y a oponerte a su tratamiento. El derecho de acceso puede ejercerse en forma gratuita a intervalos no inferiores a seis meses, salvo interés legítimo. Escribinos a **[CONFIRM: privacidad@agentflow.casa o hola@agentflow.casa]**. Respondemos dentro de los plazos legales.

La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.

## 11. Menores

AgentFlow está dirigido a profesionales inmobiliarios mayores de 18 años. No recopilamos a sabiendas datos de menores.

## 12. Cambios

Publicaremos cualquier cambio en esta página con su fecha de actualización. Si el cambio es relevante, te avisaremos por WhatsApp o email.

## 13. Contacto

MS Group Ventures LLC — 30 N Gould St, Sheridan, WY 82801, Estados Unidos — [CONFIRM: email].
```

### A.2 English — `/en/privacy`

Translate A.1 faithfully, with these fixed strings (use verbatim):

- Title: `Privacy Policy`
- Section 3 heading: `Google user data (Google Calendar)` with anchor `#google-user-data`
- Limited Use sentence: `AgentFlow's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.` (link the policy name to https://developers.google.com/terms/api-services-user-data-policy)
- AI training bullet: `We do not use Google user data to develop, improve or train generalized AI or machine-learning models, whether our own or third parties'.`
- Human-access bullet: `No AgentFlow personnel read your Google user data unless (a) you give us explicit consent for specific data (for example, a support request), (b) it is necessary for security purposes such as investigating abuse, or (c) it is required by law.`
- Add a line under the title: `This is an English translation provided for convenience. For users in Argentina, the Spanish version prevails.`
- Keep the AAIP paragraph in English as: `The Argentine Agency for Access to Public Information (AAIP), as the supervisory authority under Law 25,326, handles complaints from anyone whose rights are affected by non-compliance with data protection rules.`

---

## B. Terms of use (replace `/terms`, add `/en/terms`)

Current terms describe a waitlist-only site. Replace the "Descripción del servicio" section and add the sections below; keep "Uso aceptable", "Propiedad intelectual", "Limitación de responsabilidad" and "Cambios", updating "AgentFlow" to "MS Group Ventures LLC (AgentFlow)" in the first paragraph.

```markdown
## Descripción del servicio
AgentFlow es un asistente de inteligencia artificial para agentes inmobiliarios que opera principalmente por WhatsApp. Coordina visitas, genera documentos, hace seguimiento de operaciones y se integra con Google Calendar. El servicio se ofrece actualmente en etapa beta a agentes RE/MAX en Argentina.

## Responsabilidad del Usuario
- Sos responsable de la veracidad de los datos que cargás y de contar con base legítima para tratar los datos de tus clientes y contactos.
- Los documentos y respuestas generados por IA pueden contener errores. Revisá todo documento antes de enviarlo o firmarlo.
- AgentFlow no presta asesoramiento legal, contable ni fiscal.

## Beta
Durante la beta el servicio puede cambiar, interrumpirse o tener errores. Podemos modificar o discontinuar funciones con aviso razonable.

## Privacidad
El tratamiento de datos personales se rige por nuestra [Política de Privacidad](/privacy).

## Marcas
RE/MAX, WhatsApp, Google y Google Calendar son marcas de sus respectivos titulares. AgentFlow es un producto independiente y no está afiliado, patrocinado ni avalado por ellos.

## Ley aplicable
[CONFIRM with counsel: governing law and jurisdiction. Note: for Argentine consumers/professionals, local consumer rules may apply regardless.]
```

English mirror at `/en/terms`, same structure. The **Marcas / Trademarks** paragraph is required in both languages.

---

## C. Home page (`/`)

### C.1 Google-verification fixes (required)

| # | Location | Current | Change to |
|---|---|---|---|
| C1 | "Integrado con las plataformas que ya conocés" section | Subtitle: "Tecnología de Anthropic, Meta y Google — las mismas empresas que lideran la industria." Logos/names as a partner strip | Heading: `Funciona con las herramientas que ya usás`. Subtitle: `Se conecta con WhatsApp y Google Calendar, y usa modelos de IA de Anthropic.` Use **text names only**, no third-party logos unless brand guidelines are followed. Add small print: `Las marcas mencionadas pertenecen a sus titulares. AgentFlow no está afiliado ni avalado por ellos.` |
| C2 | Feature card "Agenda sincronizada" | "Google Calendar integrado con detección automática de conflictos." | `Conectá tu Google Calendar: AgentFlow agenda las visitas y evita superposiciones. Podés desconectarlo cuando quieras.` + link `Cómo usamos tus datos de calendario` → `/privacy#google-user-data` |
| C3 | FAQ "¿Funciona con Google Calendar?" | (verify current answer) | `Sí. Conectás tu cuenta de Google una vez y AgentFlow lee tu disponibilidad y crea, modifica o cancela los eventos de tus visitas. Solo usamos tu calendario para coordinar tu agenda, nunca para publicidad ni para entrenar modelos de IA. Podés desconectarlo en cualquier momento. Más info en nuestra Política de Privacidad.` |
| C4 | FAQ "¿Mis datos están seguros?" | (verify current answer) | Mention: cifrado, acceso restringido por cuenta, proveedores bajo contrato, no venta de datos, link a `/privacy`. |
| C5 | Footer | Legal: Política de Privacidad, Términos de Uso | Add `Privacy Policy (EN)` and `Terms (EN)` links. Keep "AgentFlow es propiedad de y operada por MS Group Ventures LLC." |
| C6 | Demo chat bubble | "📅 Agregada a tu Google Calendar" | Keep. It is accurate and shows the use case to the reviewer. |

### C.2 Accuracy fixes (required — current copy does not match the product)

| # | Location | Issue | Change to |
|---|---|---|---|
| C7 | "Pipeline de ventas" stages | Page lists Lead, Contacto, Visita, Oferta, Negociación, Reserva, Seña, Boleto, Hipoteca, Escritura. The app's real 10 stages are different. | Use the shipped stages in order: `Lead recibido → Visita inicial → Análisis comparativo → Autorización obtenida → Lista para publicar → Propiedad publicada → Visitas programadas → Reserva firmada → Venta final` (9 active stages + cancelación). Update the stat to `9 etapas` or say `Pipeline de principio a fin` without a count. [CONFIRM] |
| C8 | "Documentos automáticos" — "5 tipos de documento" | Verify against templates in prod | Shipped template types: autorización de venta, reserva, oferta, análisis comparativo (CMA). State only those live in prod. [CONFIRM count] |
| C9 | Stats: "hs/día recuperadas", "50% menos tiempo en visitas", "menos de 2 min de pedido a documento" | Unsubstantiated performance claims (counters also render as `0` in static HTML, which looks broken to reviewers and crawlers) | Either (a) add qualifier `Estimación basada en el piloto con agentes RE/MAX` with real pilot data, or (b) replace with capability statements. Ensure SSR renders final numbers, not `0`. [CONFIRM which] |
| C10 | "9 automatizaciones activas" | Matches the 9 scheduled jobs. OK | Keep |

### C.3 New / updated feature copy (shipped features not on the page)

Add or update feature cards. Only features live in production. Tone: voseo, concrete, no hype.

| Feature | Status | Card title | Card copy |
|---|---|---|---|
| Análisis comparativo de mercado (CMA) | Shipped (`cma_generate`) | `ACM en minutos` | `Pasale las propiedades comparables y AgentFlow arma el Análisis Comparativo de Mercado en la plantilla oficial, listo para presentar.` |
| Revisión antes de enviar | Shipped (authorization `pending_review` gate) | `Vos aprobás, la IA envía` | `Cada autorización se genera como borrador. La revisás por WhatsApp y recién ahí se envía al cliente.` |
| Pedido y seguimiento de documentación | Shipped (`doc_request`, reminders, verify/reject) | `La IA persigue por vos` (exists — expand) | `Pide la documentación al cliente, registra lo que llega, te avisa si falta algo y manda recordatorios automáticos.` |
| Renovación de autorizaciones | Shipped (`auth_renew` + 7/3/1-day alerts) | `Nunca más se te vence` (exists — expand) | `Te avisa 7, 3 y 1 día antes del vencimiento y prepara la renovación.` |
| Comparación de ofertas y contraofertas | Shipped | `Compará y decidí` (exists) | Keep |
| Reprogramación y cancelación de visitas | Shipped | fold into "Coordinación de visitas" | `Si alguien pide cambiar el horario, AgentFlow vuelve a coordinar con las tres partes.` (already partly present) |
| Memoria de preferencias | Shipped (`memory_manage`) | `Aprende cómo trabajás` | `Recuerda tus preferencias (horarios, duración de visitas, formas de trabajo) para no preguntarte dos veces.` |
| Horarios de muestra por propiedad | Shipped (`showing_schedule`) | fold into visits | `Respeta los horarios en que cada propiedad se puede mostrar.` |
| Panel web | Shipped (`/dashboard`: oportunidades, contactos, propiedades, calendario) | `Todo en un panel` | `Además de WhatsApp, tenés un panel web con tus oportunidades, contactos, propiedades y agenda.` |
| Panel para brokers / franquicia | Shipped for admins | Optional; only if targeting brokers on this page | `Vista de la oficina: pipeline, ranking de agentes y alertas.` |

**Do NOT add** (not shipped in production — demo data or unapplied migrations):

- Publicación automática en el CRM de RE/MAX (dashboard "vision" widget, demo data only)
- Firma electrónica con Contractia (vision widget, demo data only)
- Extracción automática de escrituras (spec 19.1; prod migration 025 not yet applied)

If Martin wants them shown, use a separate `Próximamente` block, clearly labeled, with no claims of availability.

### C.4 SEO/meta (nice to have)

- `og:locale` es_AR is fine. Add `<link rel="alternate" hreflang="en">` on legal pages.
- Remove `meta-keywords` "CRM WhatsApp inmobiliario" if the product is not positioned as a CRM.

---

## D. Out of scope for this spec

- Google Cloud console configuration (Martin does it manually).
- Demo video production.
- Search Console DNS verification (Martin, via DNS provider).

---

## E. App-repo prerequisites (must be true for the policy to be accurate)

These are not landing-page changes, but the privacy policy above asserts them. Verify in the **app repo**; if any is false, either implement it or tell Martin so the policy text is adjusted **before** it is published.

| # | Assertion in policy | Check | If missing |
|---|---|---|---|
| E1 | "No AgentFlow personnel read your Google user data" | **Langfuse traces**: do they contain Google Calendar event content (titles, descriptions, attendees) from `calendar_*`, `db_calendar_*`, `visit_check_feasibility` tool I/O or the `calendar-sync` worker? Anyone viewing Langfuse is a human reading Google user data. | Mask/redact Google-sourced event fields before sending to Langfuse (extend the existing Pino PII masking to the Langfuse wrapper). Keep internal AgentFlow visit data as-is only if it is not sourced from Google. |
| E2 | "Podés desconectar Google Calendar desde Configuración" | `/dashboard/settings` has a disconnect action? Since the primary channel is WhatsApp, is there a WhatsApp path too? | Add disconnect that (1) calls Google's token revoke endpoint `https://oauth2.googleapis.com/revoke`, (2) nulls `google_refresh_token_encrypted`, `google_sync_enabled=false`, (3) deletes Google-pulled rows in `agent_calendar` within the stated window. |
| E3 | "Eliminamos los datos sincronizados dentro de 30 días" | Is there a job for it? | Add to `expiration-check` or do it synchronously on disconnect. |
| E4 | Token encrypted AES-256-GCM | `lib/google` — confirmed in docs | none |
| E5 | Requested scopes = the four declared in console | Grep the OAuth init route (`/api/auth/google/init`) scope array | Align exactly; remove `calendar.freebusy` or `calendar.events.freebusy` if unused |
| E6 | "Antes de enviar documentos legales, te los presenta para revisión" | Authorization has `pending_review`. Reservation flow? | If reservations go out without review, narrow the sentence to authorizations |

---

## E2. Mandatory verification tasks (run BEFORE writing any copy)

The copy in sections A and C was drafted from the functionality doc, not from the live code or prod database. Before implementing, verify the three findings below against the **app repo** and **production**, and write the results to `VERIFICATION-REPORT.md` in the landing repo. If any result contradicts this spec, stop and report to Martin; do not guess.

### V1. Langfuse exposure of Google Calendar data (blocks the privacy policy)

**Question:** Do Langfuse traces contain Google-sourced calendar content? If yes, the policy's "no human reads your Google data" statement is false until fixed.

| Step | Action |
|---|---|
| V1.1 | In the app repo, locate the Langfuse wrapper (`lib/langfuse`) and every place traces/spans/generations are created (`grep -rn "langfuse\|trace(\|span(\|generation(" src/`) |
| V1.2 | Determine what is sent: full LLM prompt/messages, tool inputs and tool outputs? Check the agent loop worker and the tool executor. |
| V1.3 | Trace the path of Google data: `calendar-sync` worker pulls Google events → `agent_calendar` rows → read by `db_calendar_lookup`, `calendar_check_availability`, `calendar_detect_conflicts`, `visit_check_feasibility`. Do any of these tool outputs include `title`, `description`, `location` or attendee fields of events **pulled from Google** (not created by AgentFlow)? |
| V1.4 | Confirm whether PII masking (Pino) is also applied to Langfuse payloads, or only to logs. |
| V1.5 | If you have read access to Langfuse (ask Martin; do not use prod credentials without approval), inspect 3 recent traces that invoked a calendar tool and record whether Google event titles/descriptions appear. |
| **Output** | Verdict: `EXPOSED` / `NOT EXPOSED` / `UNKNOWN`, with file paths and line numbers. If `EXPOSED`, propose a fix: redact Google-pulled fields (keep only start/end/busy flag, plus AgentFlow-created visit data) before they enter the LLM context or Langfuse. Note the trade-off: sending less to the LLM also reduces what reaches Anthropic, which strengthens the policy. |

### V2. Actual opportunity pipeline stages (blocks home page section C7)

| Step | Action |
|---|---|
| V2.1 | Read the `opportunity_stage` enum from the latest migration in the app repo (`grep -rn "opportunity_stage" database/migrations/`) and the `validate_opportunity_stage_transition()` function. |
| V2.2 | If Supabase access is available and Martin approves, confirm against prod: `SELECT unnest(enum_range(NULL::opportunity_stage));` (read-only). |
| V2.3 | Find the Spanish display labels used in the app (stage helpers under `lib/dashboard`). The landing page must use the **same labels**. |
| **Output** | Ordered stage list (DB value → es-AR label), count of active (non-terminal, non-cancelled) stages, and the exact text to use in the "Pipeline de ventas" block. |

### V3. Which features are live in production (blocks section C.3 and the "Do NOT add" list)

For each feature below, determine the status: `LIVE` (code deployed, schema applied in prod, tool registered in the prod agent, reachable by a real agent), `PARTIAL`, `DEMO-ONLY` (UI backed by `demo_metadata` seed data) or `NOT SHIPPED`.

| Feature | Evidence to check |
|---|---|
| CMA generation | `cma_generate` registered in the tool registry; `cma_analyses` table + `CMA_ANALYSIS` template exist in prod |
| Authorization review gate | `pending_review` status in prod enum; `auth_approve_send` / `auth_reject_review` registered |
| Document request + reminders | `doc_request`, `doc_reminder_send` registered; `document-reminder-daily` job scheduled in prod worker |
| Authorization renewal alerts (7/3/1) | `auth-expiration-daily` job + `auth_renew` tool |
| Offer comparison | `offer_compare` registered |
| Agent memory | `memory_manage` registered |
| Voice transcription | Whisper call path active in the WhatsApp webhook |
| Web dashboard for agents | `/dashboard` routes deployed on `app.agentflow.casa` and accessible to non-admin agents |
| Franchise dashboard | admin-only; confirm it is not advertised to agents |
| CRM auto-listing | Expected `DEMO-ONLY` (`CRMAutoListingWidget` reads `demo_metadata`). Confirm no real CRM push code path exists. |
| Contractia e-signature | Expected `DEMO-ONLY` (`ContractiaSignaturesWidget`). Confirm no real integration. |
| Escritura extraction (spec 19.1) | Expected `NOT SHIPPED` in prod (migration 025 not applied to prod). Confirm migration status and whether the tool is registered in prod. |
| Document types | List `document_templates` where `is_current = true` (repo seeds, or prod read-only query with approval). Gives the real number for C8. |

**How to determine "live in prod":** check the tool registry file(s) that build the agent's tool list, the worker's repeatable-job registration, the migration status table in the steering docs (`technical-stack.md`, "Database Migration Status"), and the deployed branch on Railway (ask Martin which branch/commit prod runs if not obvious).

**Output:** the table above with status + evidence (file:line or query result). Only `LIVE` features may appear in section C.3 copy. `PARTIAL` goes to Martin for a decision. `DEMO-ONLY` and `NOT SHIPPED` may appear only in an optional, clearly labeled `Próximamente` block, and only if Martin approves.

### Guardrails for V1–V3

- Read-only. No schema changes, no writes to prod, no prod credentials without Martin's explicit approval.
- Do not modify the app repo as part of this spec. Propose fixes in the report; Martin decides.
- If a check can't be completed, mark it `UNKNOWN` and say what access is needed.

---

## F. Open items for Martin (`[CONFIRM]` list)

1. Privacy contact email (recommend a dedicated `privacidad@agentflow.casa` alias; must be monitored).
2. Retention periods: account data, WhatsApp messages, logs, Google data after disconnect.
3. Supabase, ConvertAPI and Langfuse hosting regions.
4. Pipeline stage display (C7) and document count (C8).
5. Stats treatment (C9): real pilot data or remove.
6. Governing law in terms (counsel: Financers / Conta Online).
7. Whether Uruguay users are in scope now (if yes, add Ley 18.331 reference).
8. AAIP database registration status (Registro Nacional de Bases de Datos) — counsel question, not a Google blocker.

---

## G. QA checklist (run after deploy)

- [ ] `curl -sI https://agentflow.casa/privacy` → 200, no redirect off-domain; same for `/terms`, `/en/privacy`, `/en/terms`
- [ ] `https://agentflow.casa/privacy#google-user-data` scrolls to the Google section
- [ ] The Limited Use sentence and link are present on both language versions
- [ ] Search page source (not just rendered DOM) for the Google section text — reviewers and crawlers may not execute JS
- [ ] No page shows Google/Meta/Anthropic logos implying partnership
- [ ] No mention of Contractia, CRM auto-listing or escritura extraction as available
- [ ] Stats do not render as `0` with JS disabled
- [ ] Footer legal links present on every page
- [ ] Lighthouse accessibility ≥ 90 on `/privacy`
- [ ] Pipeline stages and feature list on the page match `VERIFICATION-REPORT.md` exactly
- [ ] All `[CONFIRM]` tokens removed (`grep -r "\[CONFIRM" .` returns nothing)
