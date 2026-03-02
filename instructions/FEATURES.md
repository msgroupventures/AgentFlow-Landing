# AgentFlow Landing Page — Feature Inventory

> Source: Extracted from product-core.md, product-workflows.md, app-functionality.md, tech-core.md, and agentflow-schema-v2.1.0.sql

---

## Feature Hierarchy for Landing Page

Features are organized in three tiers:
1. **Hero Features** — headline-worthy, go in the main feature showcase
2. **Supporting Features** — important but secondary, go in feature grid or expandable sections
3. **Technical Depth** — for the "Under the Hood" or tech credibility section

---

## 🏆 Hero Features (Top-of-Page Showcase)

### 1. WhatsApp-Native AI Assistant

**Landing page name:** "Tu Asistente de IA en WhatsApp"

| Aspect | Detail |
|--------|--------|
| **What it does** | Agents interact with AgentFlow entirely through WhatsApp — the app they already use 8+ hours/day |
| **How it works** | Send a voice note or text message → AI understands intent → executes the task → responds in WhatsApp |
| **Key capabilities** | Text messages, voice notes (auto-transcribed), document sending/receiving, interactive buttons, template messages outside 24h window |
| **Why it matters** | Zero learning curve. No new app to install. No dashboard to check. Works on any phone. |
| **Proof point** | Supports freeform messages within 24h conversation window + pre-approved templates outside it |
| **Visual suggestion** | Simulated WhatsApp conversation showing agent asking to schedule a visit → AI confirming with seller → confirming with buyer → all confirmed |

**Copy angle:** "No descargás nada. No aprendés nada nuevo. Solo hablale a tu WhatsApp."

---

### 2. Autonomous Multi-Party Visit Coordination

**Landing page name:** "Coordinación Automática de Visitas"

| Aspect | Detail |
|--------|--------|
| **What it does** | Schedules property visits by coordinating between seller, buyer, and agent — all via WhatsApp |
| **How it works** | Agent says "Coordiná una visita al depto de Palermo para mañana" → AI checks property showing schedule → checks agent calendar → contacts seller for confirmation → contacts buyer → confirms with agent → all 3 confirmed → visit created + calendar updated |
| **Key capabilities** | Three-party async confirmation flow, feasibility checks (property constraints, calendar conflicts, existing visit overlaps), automatic rescheduling, cancellation handling, no-show tracking, expiration of unconfirmed visits |
| **State machine** | `pending` → `seller_confirmed` → `buyer_confirmed` → `confirmed` → `completed` / `no_show` / `cancelled` / `rescheduled` |
| **Why it matters** | Visit coordination is the #1 time sink — agents typically spend 30+ min per visit juggling phone calls and WhatsApp threads |
| **Proof point** | Target: 50% reduction in visit coordination time |
| **Visual suggestion** | Animated flow diagram showing the 3-party confirmation dance, or a timeline showing "before" (manual) vs "after" (AgentFlow) |

**Copy angle:** "Coordiná visitas entre 3 partes sin tocar tu teléfono. La IA habla con el vendedor, el comprador, y vos — todo por WhatsApp."

---

### 3. Automated Document Generation & Tracking

**Landing page name:** "Documentos Automáticos"

| Aspect | Detail |
|--------|--------|
| **What it does** | Generates professional PDF documents from templates, sends via WhatsApp, tracks signatures and collection |
| **Document types** | Sales authorizations, reservation agreements, listing documents, offer letters, closing documents |
| **How it works** | Agent says "Generá la autorización de venta para la propiedad de Recoleta" → AI gathers data (client, property, opportunity, terms) → generates DOCX → converts to PDF → sends to client via WhatsApp → tracks signed return |
| **Key capabilities** | Template versioning, variable hydration, PDF generation (<2 min), WhatsApp delivery, document checklist per opportunity, automated reminders for missing docs, status tracking (requested → received → verified → expired/rejected) |
| **Why it matters** | Document chasing is the #2 time sink — agents spend hours following up on missing paperwork |
| **Proof point** | Target: <2 minutes end-to-end document generation |
| **Visual suggestion** | Before/after: messy email chain vs. clean WhatsApp flow with PDF attachment |

**Copy angle:** "Autorizaciones de venta, reservas, ofertas — generados en menos de 2 minutos y enviados directamente por WhatsApp."

---

## 📊 Supporting Features (Feature Grid)

### 4. Intelligent Calendar Management

**Landing page name:** "Calendario Inteligente"

| Aspect | Detail |
|--------|--------|
| **What it does** | Centralized calendar with two-way Google Calendar sync, conflict detection, and geographic awareness |
| **Key capabilities** | Day/week/month views, activity types (visits, meetings, signings, evaluations, open houses), automatic conflict detection (every 6 hours), Google Calendar two-way sync (every 15 min), travel time awareness between activities |
| **Activity types** | visit, client_meeting, document_signing, property_evaluation, photography_session, open_house, negotiation, closing |
| **How it works** | "¿Qué tengo mañana?" → AI shows day-at-a-glance with all activities, conflicts highlighted |

**Copy angle:** "Tu agenda sincronizada con Google Calendar. Conflictos detectados automáticamente."

---

### 5. Complete Opportunity Lifecycle Management

**Landing page name:** "Pipeline de Oportunidades"

| Aspect | Detail |
|--------|--------|
| **What it does** | Tracks every sales opportunity from first lead to final sale through 10 defined stages |
| **Stages** | Lead Received → Initial Visit → Comparative Analysis → Authorization Obtained → Documentation Complete → Property Listed → Visits Scheduled → Reservation Signed → Final Sale (or Cancelled) |
| **Key capabilities** | Stage-validated transitions (enforced at DB level), opportunity summary with denormalized view (client, property, auth status, reservation status, visit count, offer count), active/inactive filtering |
| **Linked entities** | Agent, client (seller), property, visits, offers, authorizations, reservations, documentation |

**Copy angle:** "Cada oportunidad de venta, desde el primer contacto hasta la escritura. Sin que se pierda un paso."

---

### 6. Sales Authorization Management

**Landing page name:** "Autorizaciones de Venta"

| Aspect | Detail |
|--------|--------|
| **What it does** | Tracks sales authorization lifecycle with expiration monitoring and automatic renewal reminders |
| **State machine** | `draft` → `sent` → `active` → `expired` / `cancelled` / `renewal_pending` |
| **Key capabilities** | Expiration monitoring (7/3/1 day warnings), automated renewal reminders, document generation, signed document tracking, authorization history chain (previous_authorization_id) |
| **Scheduled checks** | Daily 9:00 AM ART — finds expiring authorizations and notifies agents |

**Copy angle:** "Nunca más se te vence una autorización sin darte cuenta. Alertas automáticas a 7, 3 y 1 día."

---

### 7. Offer Management & Comparison

**Landing page name:** "Gestión de Ofertas"

| Aspect | Detail |
|--------|--------|
| **What it does** | Records, tracks, compares, and manages all purchase offers per opportunity |
| **State machine** | `pending` → `under_review` → `accepted` / `rejected` / `counter_offered` / `expired` / `withdrawn` → `reserved` |
| **Key capabilities** | Side-by-side offer comparison, counter-offer tracking, expiration monitoring, automatic offer-to-reservation conversion |

**Copy angle:** "Compará ofertas lado a lado. Contraofertá con un mensaje. Todo queda registrado."

---

### 8. Reservation Agreement Management

**Landing page name:** "Gestión de Reservas"

| Aspect | Detail |
|--------|--------|
| **What it does** | Creates and manages reservation agreements with multi-party confirmation and deposit tracking |
| **State machine** | `draft` → `sent` → `agent_approved` → `buyer_confirmed` → `active` → `converted` / `expired` / `cancelled` |
| **Key capabilities** | Single active reservation per opportunity (enforced at DB level), three-party confirmation (agent → buyer → seller), document generation, deposit receipt tracking, conversion to final sale |
| **Scheduled checks** | Daily 9:00 AM ART — finds expiring reservations |

**Copy angle:** "De la oferta aceptada a la reserva firmada — sin papeles perdidos ni pasos salteados."

---

### 9. Client Documentation Collection

**Landing page name:** "Documentación del Cliente"

| Aspect | Detail |
|--------|--------|
| **What it does** | Maintains required document checklists per opportunity, sends requests via WhatsApp, tracks status, sends reminders |
| **Document statuses** | `requested` → `received` → `verified` / `rejected` / `expired` / `missing` |
| **Key capabilities** | Automated WhatsApp document requests, status tracking per document, automated reminders for pending docs (>48h), verification/rejection workflow |
| **Scheduled checks** | Daily 10:00 AM ART — reminds about pending documents |

**Copy angle:** "La IA le pide los documentos al cliente por WhatsApp y te avisa cuando llegan. Si no llegan, insiste."

---

### 10. Voice Message Intelligence

**Landing page name:** "Mensajes de Voz Inteligentes"

| Aspect | Detail |
|--------|--------|
| **What it does** | Receives WhatsApp voice notes, transcribes them using AI (OpenAI Whisper), and processes the intent |
| **How it works** | Agent sends 30-second voice note → transcribed in 3-10 seconds → AI understands intent → executes task |
| **Why it matters** | Argentine agents prefer voice notes over typing — this meets them where they are |

**Copy angle:** "Mandá un audio por WhatsApp. La IA lo transcribe, entiende lo que necesitás, y lo hace."

---

### 11. Contact & Property Management

**Landing page name:** "Contactos y Propiedades"

| Aspect | Detail |
|--------|--------|
| **What it does** | Full CRM for people (buyers, sellers, agents) and properties with search and filtering |
| **Person details** | Name, email, phone, WhatsApp, document ID, address, role (buyer/seller/buyer_agent/seller_agent/owner/tenant/guarantor), notes |
| **Property details** | Full address with neighborhood, GPS coordinates, type, area (total/covered), bedrooms/bathrooms/garage, amenities, photos, virtual tour, floor plan, showing schedule (per-day time windows), cadastral/registry numbers |
| **Key capabilities** | Search by name/email/phone/role, property search by type/city/neighborhood/area/bedrooms/price, WhatsApp phone lookup, automatic person creation for unknown WhatsApp contacts |

**Copy angle:** "Todos tus contactos y propiedades en un solo lugar. Buscá por barrio, tipo, precio — o simplemente preguntale a la IA."

---

### 12. Web Dashboard

**Landing page name:** "Panel de Control Web"

| Aspect | Detail |
|--------|--------|
| **What it does** | Full web interface for agents who want visual management alongside WhatsApp |
| **Pages** | Home dashboard (metrics), opportunities list/detail/edit, contacts, properties, calendar (day/week/month), web chat, settings |
| **Key capabilities** | Real-time updates (Supabase Realtime), toast notifications for data changes, stage filters for opportunities, calendar with activity creation, Google Calendar connection settings |
| **Why it matters** | Not everyone wants to manage everything through WhatsApp — the dashboard provides visual oversight |

**Copy angle:** "WhatsApp para el día a día. Dashboard para la visión completa."

---

## 🔧 Technical Depth Features (Tech Section)

### 13. True Agentic Architecture

| Aspect | Detail |
|--------|--------|
| **What it means** | The AI doesn't follow scripted if/else workflows — it reasons dynamically using 79 specialized tools |
| **How it's different** | Traditional chatbots: "If user says X, do Y." AgentFlow: "Understand what the agent needs, plan the steps, execute them, handle exceptions." |
| **Tool count** | 79 AI tools across 12 namespaces (database, visit, calendar, authorization, offer, reservation, document, WhatsApp, memory, continuation, utility) |
| **Tool layers** | Foundation (CRUD) → Convenience (Lookup) → Workflow (Complete business operations) |

---

### 14. Async Continuation Pattern

| Aspect | Detail |
|--------|--------|
| **What it means** | Handles multi-day workflows where the AI waits for external responses (WhatsApp replies, document uploads, signatures) |
| **How it works** | AI saves state → creates pending action → returns → webhook receives response → resumes conversation with full context |
| **Why it matters** | Real estate workflows span hours/days — seller confirms today, buyer confirms tomorrow |

---

### 15. Enterprise-Grade Reliability

| Aspect | Detail |
|--------|--------|
| **Infrastructure** | Railway containers (no serverless timeouts), BullMQ job queues with Redis, Supabase PostgreSQL with row-level security |
| **Error handling** | Circuit breakers for all external APIs (Claude, WhatsApp, Google Calendar, ConvertAPI), 3 retries with exponential backoff, dead letter queues |
| **Security** | Row-level security (each agent sees only their data), encrypted Google OAuth tokens (AES-256-GCM), PII masking in all logs, idempotent webhook processing |
| **Observability** | Langfuse agent tracing, structured JSON logging (Pino), audit trail for sensitive operations |

---

### 16. Background Automation (9 Scheduled Jobs)

| Job | Schedule | What it does |
|-----|----------|--------------|
| Authorization expiration check | Daily 9:00 AM | Warns agents 7/3/1 days before authorization expires |
| Reservation expiration check | Daily 9:00 AM | Tracks reservation validity periods |
| Document reminder | Daily 10:00 AM | Follows up on pending documents >48h |
| Calendar conflict check | Every 6 hours | Detects overlapping calendar entries |
| Google Calendar sync | Every 15 minutes | Two-way calendar synchronization |
| Pending action expiration | Hourly | Expires overdue async operations |
| Visit expiration | Hourly | Expires unconfirmed visits past scheduled time |
| Session cleanup | Daily 2:00 AM | Cleans up expired agent sessions |
| Webhook cleanup | Daily 2:00 AM | Cleans up old processed webhooks |

---

### 17. Tech Stack (for Credibility Section)

| Layer | Technology | Logo Available |
|-------|------------|----------------|
| AI Engine | Anthropic Claude | ✅ |
| Voice Transcription | OpenAI Whisper | ✅ |
| Database | Supabase (PostgreSQL) | ✅ |
| Hosting | Railway | ✅ |
| Framework | Next.js | ✅ |
| Job Queue | BullMQ + Redis | ✅ Redis logo |
| Communication | WhatsApp Cloud API (Meta) | ✅ |
| Calendar | Google Calendar API | ✅ |
| Document Conversion | ConvertAPI | ✅ |
| Observability | Langfuse | ✅ |
| Language | TypeScript | ✅ |

---

## Feature-to-Section Mapping (Recommended)

| Landing Page Section | Features to Include |
|---------------------|--------------------|
| **Hero** | #1 WhatsApp-Native + Key value prop |
| **Problem Statement** | Reference pain points solved by #2, #3, #9 |
| **How It Works** | Simplified 3-step: Message → AI Processes → Result via WhatsApp |
| **Feature Showcase (Primary)** | #2 Visit Coordination, #3 Document Generation, #5 Opportunity Pipeline |
| **Feature Grid (Secondary)** | #4 Calendar, #6 Authorizations, #7 Offers, #8 Reservations, #9 Documentation, #10 Voice |
| **WhatsApp Demo** | Interactive/animated WhatsApp conversation mockup using #2 as example |
| **Under the Hood / Tech** | #13 Agentic Architecture, #17 Tech Stack logos |
| **Numbers** | 79 tools, 9 automated jobs, <2 min documents, 50% time reduction target |
| **Dashboard Preview** | #12 Web Dashboard screenshot/mockup |
| **FAQ** | Common questions about #1 WhatsApp integration, data security (#15), language support |

---

## Metrics & Numbers for Landing Page

Use these specific, credible numbers throughout the page:

| Metric | Value | Source |
|--------|-------|--------|
| AI tools available | 79 | app-functionality.md tool count |
| Tool namespaces | 12 | app-functionality.md |
| Automated background jobs | 9 | product-workflows.md scheduled operations |
| Document generation time | <2 minutes | product-core.md success metrics |
| Visit coordination reduction target | 50% | product-core.md success metrics |
| Client response rate target | >80% | product-core.md success metrics |
| Opportunity lifecycle stages | 10 | product-core.md (including cancelled) |
| Webhook processing latency | <500ms p95 | product-core.md success metrics |
| Google Calendar sync frequency | Every 15 min | product-workflows.md |
| Supported document types | 5 | Schema (authorization, reservation, listing, offer, closing) |
| Business entity types managed | 19 | app-functionality.md (tables count) |
| Background workers | 5 | app-functionality.md |
