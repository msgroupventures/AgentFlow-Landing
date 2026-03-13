# Landing Page Improvements — Post-Competitive Analysis

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement all P0, P1, and P2 improvements identified in the FalloBot competitive analysis to fix critical bugs (dead legal links), improve conversion (FAQ rewrite, feature tile reorder, CTA copy, tech logos), and add a new "Chatbot vs. Agente" contrast section.

**Architecture:** Surgical edits to existing components — no new dependencies, no structural refactors. Two new pages (`/privacy`, `/terms`) are the only new files. One new component (`BeforeAfter.tsx`) for the contrast section. All copy in Spanish (es-AR, "vos" form).

**Tech Stack:** Next.js 15 (App Router), Tailwind CSS v4, Framer Motion (`motion/react`), Lucide React icons.

**Source Analysis:** `C:\Users\marti\Downloads\agentflow-landing-analysis.md`

---

## Task 1: Create Privacy Policy page (P0)

**Why:** Footer links to `#` — violates Argentine Ley 25.326 and Meta WhatsApp Business policy. Compliance blocker.

**Files:**
- Create: `src/app/privacy/page.tsx`
- Modify: `src/components/Footer.tsx:16` — update href

**Step 1: Create the privacy policy page**

Create `src/app/privacy/page.tsx` — a minimal, professional privacy policy page in Spanish. Must:
- Use the same dark theme (`bg-bg-primary`, `text-text-primary`/`text-text-secondary`)
- Include: what data is collected (email for waitlist), how it's stored (encrypted database), contact email for deletion requests (`hola@agentflow.casa`), data retention policy
- Include a "back to home" link
- Include metadata export with title "Política de Privacidad | AgentFlow"
- Use Satoshi for headings, General Sans for body (same as rest of site)
- No boilerplate legal English — write in clear, plain Argentine Spanish

**Step 2: Update Footer link**

In `src/components/Footer.tsx`, change the `legalLinks` array:
```tsx
// FROM:
{ label: "Política de Privacidad", href: "#" },
// TO:
{ label: "Política de Privacidad", href: "/privacy" },
```

**Step 3: Verify**

Run: `npm run build`
Expected: Build succeeds, `/privacy` route renders.

**Step 4: Commit**

```bash
git add src/app/privacy/page.tsx src/components/Footer.tsx
git commit -m "feat: add privacy policy page and wire footer link"
```

---

## Task 2: Create Terms of Use page (P0)

**Why:** Same compliance issue as privacy policy. Both legal links must be live.

**Files:**
- Create: `src/app/terms/page.tsx`
- Modify: `src/components/Footer.tsx:17` — update href

**Step 1: Create the terms page**

Create `src/app/terms/page.tsx` — minimal terms of use in Spanish. Must:
- Same dark theme styling as privacy page
- Cover: service description (waitlist + future platform), user obligations, intellectual property, limitation of liability, contact
- Include metadata export with title "Términos de Uso | AgentFlow"
- Back to home link

**Step 2: Update Footer link**

In `src/components/Footer.tsx`, change:
```tsx
// FROM:
{ label: "Términos de Uso", href: "#" },
// TO:
{ label: "Términos de Uso", href: "/terms" },
```

**Step 3: Verify**

Run: `npm run build`
Expected: Build succeeds, `/terms` route renders.

**Step 4: Commit**

```bash
git add src/app/terms/page.tsx src/components/Footer.tsx
git commit -m "feat: add terms of use page and wire footer link"
```

---

## Task 3: Rewrite "Mis datos están seguros" FAQ answer (P1)

**Why:** Current answer mentions "Supabase (PostgreSQL)", "RLS", "AES-256-GCM" — tech jargon a RE/MAX agent won't understand. Reads as evasive instead of reassuring.

**Files:**
- Modify: `src/components/FAQSection.tsx:23` — replace the FAQ answer string

**Step 1: Replace the FAQ answer**

In `src/components/FAQSection.tsx`, find the FAQ item with `q: "¿Mis datos están seguros?"` and replace its `a` value:

```tsx
// FROM:
a: "Sí. AgentFlow usa Supabase (PostgreSQL) con políticas de seguridad a nivel de fila — cada agente solo ve sus propios datos. Los tokens de Google Calendar se encriptan con AES-256-GCM. Todos los registros tienen enmascaramiento de datos personales. Las operaciones sensibles se auditan automáticamente.",

// TO:
a: "Sí. Tus datos y los de tus clientes son completamente privados — solo vos podés verlos. Usamos los mismos estándares de seguridad que usan los bancos, con datos encriptados y acceso restringido por usuario. Ningún otro agente puede ver tus operaciones. Las acciones sensibles quedan registradas automáticamente.",
```

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds. The schema.org JSON-LD in this component auto-updates since it reads from the same `faqs` array.

**Step 3: Commit**

```bash
git add src/components/FAQSection.tsx
git commit -m "fix: rewrite data security FAQ in plain Spanish (remove tech jargon)"
```

---

## Task 4: Promote "Hablá, no escribas" to first feature tile (P1)

**Why:** Voice note transcription is the primary interaction pattern for Argentine RE/MAX agents (WhatsApp voice notes). Currently buried as tile #6 of 6.

**Files:**
- Modify: `src/components/FeatureGrid.tsx:13-56` — reorder the features array

**Step 1: Move the Mic feature to position 1**

In `src/components/FeatureGrid.tsx`, reorder the `features` array so the `Mic` item is first:

```tsx
const features = [
  {
    icon: Mic,
    title: "Mensajes de Voz",
    headline: "Hablá, no escribas",
    description: "Mandá audios — la IA transcribe y ejecuta.",
  },
  {
    icon: Calendar,
    title: "Calendario Inteligente",
    headline: "Agenda sincronizada",
    description: "Google Calendar integrado con detección automática de conflictos.",
  },
  {
    icon: ShieldCheck,
    title: "Autorizaciones de Venta",
    headline: "Nunca más se te vence",
    description: "Alertas automáticas a 7, 3 y 1 día antes del vencimiento.",
  },
  {
    icon: Scale,
    title: "Gestión de Ofertas",
    headline: "Compará y decidí",
    description: "Ofertas lado a lado con seguimiento de contraofertas.",
  },
  {
    icon: KeyRound,
    title: "Gestión de Reservas",
    headline: "De oferta a reserva, sin fricciones",
    description: "Confirmación de 3 partes con seguimiento de seña.",
  },
  {
    icon: FolderSearch,
    title: "Documentación del Cliente",
    headline: "La IA persigue por vos",
    description: "Pedidos automáticos por WhatsApp con recordatorios.",
  },
];
```

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds. "Hablá, no escribas" renders as first tile (top-left on desktop).

**Step 3: Commit**

```bash
git add src/components/FeatureGrid.tsx
git commit -m "fix: promote voice message feature to first tile position"
```

---

## Task 5: Curate tech stack logos — remove internal tools (P2)

**Why:** Railway, Supabase, and Next.js are engineering choices, not user-facing integrations. A RE/MAX agent doesn't know or care about these. Keep only Anthropic, Meta, and Google — the brands that matter to the audience.

**Files:**
- Modify: `src/components/TechSection.tsx` — reduce to 3 logos, update copy, adjust grid

**Step 1: Update the tech logos array and section copy**

In `src/components/TechSection.tsx`:

1. Reduce `techLogos` to 3 items:
```tsx
const techLogos = [
  { name: "Anthropic", subtitle: "Inteligencia Artificial" },
  { name: "Meta", subtitle: "WhatsApp Business API" },
  { name: "Google", subtitle: "Calendar" },
];
```

2. Update the section headline and subtitle:
```tsx
// FROM:
"Construido con tecnología de primer nivel."
"La misma infraestructura que usan las mejores plataformas del mundo."

// TO:
"Integrado con las plataformas que ya conocés."
"Tecnología de Anthropic, Meta y Google — las mismas empresas que lideran la industria."
```

3. Update grid from 6-col to 3-col:
```tsx
// FROM:
className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"

// TO:
className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto"
```

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds. Section shows 3 centered logos.

**Step 3: Commit**

```bash
git add src/components/TechSection.tsx
git commit -m "fix: curate tech logos to user-facing integrations only"
```

---

## Task 6: Update closing CTA with scarcity copy (P2)

**Why:** Current CTA ("sé de los primeros") is generic. Adding scarcity ("limited to first 30 agents") increases urgency.

**Files:**
- Modify: `src/components/FinalCTA.tsx:26-28` — update subtitle copy

**Step 1: Update the CTA subtitle**

In `src/components/FinalCTA.tsx`, update the subtitle paragraph:

```tsx
// FROM:
<p className="mt-4 text-base md:text-lg text-text-secondary">
  Sumate a la lista de espera y sé de los primeros en usar AgentFlow.
</p>

// TO:
<p className="mt-4 text-base md:text-lg text-text-secondary">
  La beta está limitada a los primeros 30 agentes RE/MAX.{" "}
  <span className="text-accent font-medium">Asegurá tu lugar.</span>
</p>
```

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds. CTA copy reads with urgency.

**Step 3: Commit**

```bash
git add src/components/FinalCTA.tsx
git commit -m "fix: add scarcity framing to final CTA copy"
```

---

## Task 7: Add value justification sentence to pipeline section (P2)

**Why:** The pipeline visualization shows 10 stages but doesn't explain *why* it matters. One sentence fixes this.

**Files:**
- Modify: `src/components/FeatureShowcase.tsx:28` — add sentence to pipeline body copy

**Step 1: Append the justification sentence**

In `src/components/FeatureShowcase.tsx`, update the pipeline feature's `body`:

```tsx
// FROM:
body: "10 etapas claras desde el primer contacto hasta la escritura. AgentFlow avanza cada oportunidad automáticamente, valida que no se saltee ningún paso y te mantiene al tanto del estado de cada operación.",

// TO:
body: "10 etapas claras desde el primer contacto hasta la escritura. AgentFlow avanza cada oportunidad automáticamente, valida que no se saltee ningún paso y te mantiene al tanto del estado de cada operación. Ninguna oportunidad avanza sin completar el paso anterior.",
```

**Step 2: Verify**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/FeatureShowcase.tsx
git commit -m "fix: add pipeline value justification sentence"
```

---

## Task 8: Reduce scroll animation threshold (P1)

**Why:** At normal scroll speed, sections appear nearly blank because the intersection observer margin is too aggressive (`-100px`). Content only becomes visible when the user has already scrolled most of the way through.

**Files:**
- Modify: `src/components/AnimatedSection.tsx:21,45` — reduce margin from `-100px` to `-50px`

**Step 1: Update intersection observer margins**

In `src/components/AnimatedSection.tsx`, change both viewport margins:

```tsx
// In AnimatedSection (line 21):
// FROM:
viewport={{ once: true, margin: "-100px" }}
// TO:
viewport={{ once: true, margin: "-50px" }}

// In StaggerContainer (line 45):
// FROM:
viewport={{ once: true, margin: "-100px" }}
// TO:
viewport={{ once: true, margin: "-50px" }}
```

**Step 2: Also update HowItWorks connecting line animations**

In `src/components/HowItWorks.tsx`, update the two `viewport` props on the connecting line and glow dot (lines 66, 75):

```tsx
// Both instances:
// FROM:
viewport={{ once: true, margin: "-100px" }}
// TO:
viewport={{ once: true, margin: "-50px" }}
```

**Step 3: Verify**

Run: `npm run build`
Expected: Build succeeds. Animations now trigger earlier during scroll.

**Step 4: Commit**

```bash
git add src/components/AnimatedSection.tsx src/components/HowItWorks.tsx
git commit -m "fix: reduce scroll animation threshold for earlier content reveal"
```

---

## Task 9: Add "Chatbot vs. Agente" contrast section (P2)

**Why:** RE/MAX agents will arrive expecting a FAQ bot. The analysis shows the "agent vs. chatbot" distinction is only mentioned in a small bullet below the hero. FalloBot builds a full comparison section. This resets the mental model before features are presented.

**Files:**
- Create: `src/components/BeforeAfter.tsx`
- Modify: `src/app/page.tsx:21` — insert new component after HowItWorks

**Step 1: Create the BeforeAfter component**

Create `src/components/BeforeAfter.tsx` — a 2-column comparison section:

Left column: "Cómo trabajás hoy" (current painful workflow)
Right column: "Con AgentFlow" (automated workflow)

Design requirements:
- Use the same dark theme, teal accent
- Left column: slightly reddish/warm tint to signal pain (`bg-red-500/5`, `border-red-500/20`)
- Right column: teal tint to signal solution (`bg-accent/5`, `border-accent/20`)
- 4-5 comparison rows covering: visit coordination, documents, follow-ups, voice messages, pipeline tracking
- Each row: short 1-line description of "before" vs "after"
- Use `AnimatedSection` wrapper for scroll-triggered reveal
- Section heading: "No es un chatbot. Es una IA que trabaja por vos."
- Section overline: "CHATBOT VS. AGENTE"
- Mobile: stack columns vertically (left column first, then right)
- Use Lucide icons: `X` (red) for "before" items, `Check` (teal) for "after" items

Comparison rows:
1. "3+ llamadas para coordinar una visita" → "Un mensaje. La IA coordina todo."
2. "Documentos armados a mano, con errores" → "PDFs generados en 2 minutos, sin errores."
3. "Perseguir firmas y vencimientos por WhatsApp" → "Recordatorios automáticos a 7, 3 y 1 día."
4. "Tipear todo — respuestas, datos, instrucciones" → "Mandá un audio. La IA transcribe y ejecuta."
5. "Oportunidades en una planilla que nadie actualiza" → "Pipeline automático con 10 etapas validadas."

**Step 2: Insert in page.tsx**

In `src/app/page.tsx`, add the import and place `<BeforeAfter />` between `<HowItWorks />` and `<FeatureShowcase />`:

```tsx
import { BeforeAfter } from "@/components/BeforeAfter";

// In the JSX:
<HowItWorks />
<BeforeAfter />
<FeatureShowcase />
```

**Step 3: Verify**

Run: `npm run build`
Expected: Build succeeds. New section renders between "Cómo Funciona" and "Funcionalidades".

**Step 4: Commit**

```bash
git add src/components/BeforeAfter.tsx src/app/page.tsx
git commit -m "feat: add Chatbot vs. Agente contrast section"
```

---

## Task 10: Final build + type check + lint

**Files:** None modified — verification only.

**Step 1: Run full build pipeline**

```bash
npm run typecheck && npm run lint && npm run build
```

Expected: All three pass with zero errors.

**Step 2: Commit any remaining fixes**

If any step fails, fix the issue and commit the fix.

---

## Summary — Priority Map

| Task | Priority | Effort | File(s) |
|------|----------|--------|---------|
| 1. Privacy Policy page | P0 | 30 min | `src/app/privacy/page.tsx`, `Footer.tsx` |
| 2. Terms of Use page | P0 | 30 min | `src/app/terms/page.tsx`, `Footer.tsx` |
| 3. FAQ jargon rewrite | P1 | 5 min | `FAQSection.tsx` |
| 4. Voice feature tile reorder | P1 | 5 min | `FeatureGrid.tsx` |
| 5. Tech logos curation | P2 | 10 min | `TechSection.tsx` |
| 6. CTA scarcity copy | P2 | 5 min | `FinalCTA.tsx` |
| 7. Pipeline value sentence | P2 | 5 min | `FeatureShowcase.tsx` |
| 8. Scroll threshold fix | P1 | 10 min | `AnimatedSection.tsx`, `HowItWorks.tsx` |
| 9. Before/After contrast section | P2 | 45 min | `BeforeAfter.tsx`, `page.tsx` |
| 10. Final verification | — | 5 min | None |

**Total estimated effort: ~2.5 hours**

---

## Issues from analysis NOT included in this plan

These were flagged but are already resolved or not actionable:

| Issue | Status | Reason |
|-------|--------|--------|
| Waitlist forms not capturing emails | **Already fixed** | `WaitlistForm.tsx` POSTs to `/api/waitlist` → Supabase. Forms are functional. |
| Blank gap after Funcionalidades | **Needs investigation** | Could not reproduce from code alone — may be a CSS overflow issue visible only at specific viewport widths. Recommend visual QA after deploying other changes. |
| Scroll animation on "Cómo Funciona" fires too late | **Addressed in Task 8** | Reducing margin from `-100px` to `-50px` globally. |
