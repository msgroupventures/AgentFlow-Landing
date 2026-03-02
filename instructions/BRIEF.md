# AgentFlow Landing Page — Product Brief

## What AgentFlow Is

AgentFlow is an AI-powered operations platform built specifically for RE/MAX real estate agents in Argentina. Unlike traditional CRMs that require agents to manually click through workflows, AgentFlow uses a **true agentic architecture** — an AI that autonomously reasons, plans, and executes tasks through WhatsApp, the dominant communication channel in the Argentine real estate market.

The AI agent handles the entire operational lifecycle: scheduling property visits across three parties (seller, buyer, agent), generating legal documents (sales authorizations, reservation agreements), tracking document collection, managing calendars with conflict detection, and coordinating offers and reservations — all through natural WhatsApp conversations in Spanish.

**One-liner:** "Tu asistente de IA que automatiza las operaciones inmobiliarias a través de WhatsApp."  
**English:** "The AI assistant that automates real estate operations through WhatsApp."

---

## Product Stage

- **Pre-launch / Waitlist phase**
- MVP in active development, targeting first RE/MAX franchise deployment
- Domain: **agentflow.casa** (currently placeholder)
- Primary CTA: **Join the Waitlist** (email capture)

---

## Target Audience

### Primary: RE/MAX Franchise Owners & Managers (Decision Makers)

| Attribute | Detail |
|-----------|--------|
| **Role** | RE/MAX franchise owner or regional manager in Argentina |
| **Age** | 35–55 |
| **Pain** | Agents spending 3–4 hours/day on admin (scheduling, follow-ups, document chasing) instead of selling |
| **Motivation** | Increase franchise productivity, modernize operations, retain top agents |
| **Sophistication** | Knows tech is important but isn't deeply technical; evaluates by outcomes, not architecture |
| **Language** | Spanish (es-AR) primary; comfortable reading English for tech/business content |

### Secondary: Individual RE/MAX Agents (Advocates / End Users)

| Attribute | Detail |
|-----------|--------|
| **Role** | RE/MAX agent in Buenos Aires and surrounding areas |
| **Age** | 28–50 |
| **Pain** | Juggling WhatsApp threads, spreadsheets, phone calls; losing deals to disorganization |
| **Motivation** | Close more deals, look professional, reduce repetitive tasks |
| **Sophistication** | WhatsApp power users; minimal CRM adoption; mobile-first |
| **Language** | Spanish (es-AR) exclusively |

### Tertiary: Proptech Investors & Partners

| Attribute | Detail |
|-----------|--------|
| **Pain** | Finding differentiated, technically sound proptech plays in LATAM |
| **Motivation** | Evaluate technology depth, market fit, scalability potential |
| **Language** | English preferred |

---

## Landing Page Language Strategy

**Spanish primary** with English toggle capability:
- All hero copy, feature descriptions, CTAs, and testimonial sections in **Spanish (es-AR)**
- Navigation labels in Spanish
- Optional language toggle for English version (secondary priority — can be Phase 2)
- Technical credibility section (tech stack logos, architecture) can remain in English as it serves a universal audience

---

## Tone & Voice

### Brand Personality

AgentFlow should feel like a **highly competent, quietly confident technology partner** — not a flashy startup nor a corporate enterprise vendor. Think: the best hire your franchise ever made, who happens to be an AI.

| Dimension | Direction |
|-----------|-----------|
| **Professional** ↔ Casual | 70% professional, 30% approachable |
| **Technical** ↔ Simple | Lead with outcomes, reveal tech depth on scroll |
| **Bold** ↔ Understated | Bold claims backed by specifics — never vague hype |
| **Argentine** ↔ Global | Argentine context (WhatsApp, peso realities, barrios) with world-class tech execution |

### Voice Guidelines

- **DO:** "AgentFlow coordina visitas entre 3 partes por WhatsApp sin que toques tu teléfono."
- **DO:** "Genera autorizaciones de venta en PDF en menos de 2 minutos."
- **DON'T:** "Revolucionamos el real estate con IA de última generación." (too vague, too hype)
- **DON'T:** "Nuestra solución de automatización impulsada por machine learning..." (too corporate)
- **DO use** specific numbers: "50% menos tiempo en coordinación", "79 herramientas de IA", "<2 minutos para generar documentos"
- **DO reference** WhatsApp explicitly and repeatedly — it's the key differentiator
- **AVOID** jargon: no "agentic", no "LLM", no "RAG" in user-facing copy — save for tech section

### Emotional Register

The page should make franchise owners feel: *"This is exactly what my agents need — and it actually works the way we already work (WhatsApp)."*

The page should make agents feel: *"Finally, someone built something for how I actually work, not how a CRM vendor thinks I should work."*

---

## Competitive Positioning

AgentFlow is **not** competing with:
- Generic CRMs (Salesforce, HubSpot) — too horizontal, no WhatsApp-native intelligence
- AI chatbot builders (ManyChat, Respond.io) — no domain-specific real estate logic
- Property portals (ZonaProp, Mercado Libre Inmuebles) — listing platforms, not operations platforms

AgentFlow **is** the first:
- WhatsApp-native AI operations platform for Argentine real estate
- True agentic system (not scripted chatbot) for real estate workflows
- Platform that handles multi-party async coordination (seller ↔ buyer ↔ agent) autonomously
- System that generates RE/MAX-compliant legal documents automatically

### Key Differentiators to Emphasize

1. **WhatsApp-first** — works where agents already live, no new app to learn
2. **True AI agent** — reasons autonomously, doesn't follow rigid scripts
3. **Multi-party coordination** — handles the seller/buyer/agent dance automatically
4. **Document automation** — generates PDFs from templates, tracks signatures via WhatsApp
5. **Built for Argentina** — Spanish (es-AR), USD pricing, Buenos Aires neighborhoods, RE/MAX compliance

---

## SEO & AI Search Optimization (AI-CITE Framework)

The landing page must be structured for both traditional SEO and LLM citation (ChatGPT, Perplexity, Google AI Overviews). Key requirements:

- **Answer-first** copy structure (BLUF — bottom line up front in every section)
- **Intent-matched headings** that mirror real search queries in Spanish
- **Schema.org markup**: `SoftwareApplication`, `FAQPage`, `Organization`
- **FAQ section** with questions real agents would ask (structured data)
- **Bilingual meta tags** for English search discovery

### Target Search Queries to Own

**Spanish:**
- "automatización inmobiliaria IA Argentina"
- "CRM inmobiliario WhatsApp"
- "agente IA para inmobiliarias"
- "automatizar visitas inmobiliarias"

**English:**
- "AI real estate agent automation WhatsApp"
- "RE/MAX AI operations platform"
- "proptech Argentina AI"

---

## Page Structure (Recommended Sections)

1. **Hero** — Bold headline + sub-headline + "Join Waitlist" CTA + product visual/mockup
2. **Problem Statement** — "Your agents spend 3-4 hours/day on admin" with specific pain points
3. **How It Works** — 3-step simplified flow showing WhatsApp interaction
4. **Features** — Core capability grid (pulled from FEATURES.md)
5. **WhatsApp Demo** — Simulated WhatsApp conversation showing the AI in action
6. **Technology** — Tech credibility section (Anthropic/Claude, Supabase, etc.) — subtle, not overwhelming
7. **Numbers / Social Proof** — Key metrics and targets (50% time reduction, <2 min documents, etc.)
8. **FAQ** — Structured data FAQ answering top questions
9. **Final CTA** — "Join the Waitlist" with email capture
10. **Footer** — Links, legal, social, language toggle

---

## Technical Implementation Notes

- **Framework:** Next.js (App Router) — aligns with existing AgentFlow stack
- **Hosting:** Vercel or current Railway setup
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion for smooth, deliberate animations
- **Forms:** Waitlist email capture → store in Supabase or simple API endpoint
- **Analytics:** Basic event tracking for waitlist conversions
- **Performance:** Target 95+ Lighthouse score — fast load for Argentine mobile networks
