# AgentFlow Landing Page — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a single-page dark-theme landing page for AgentFlow (agentflow.casa) — an AI-powered operations platform for RE/MAX agents in Argentina. Waitlist-stage, all copy in Spanish (es-AR).

**Architecture:** Next.js 15 App Router with a single `page.tsx` composing 12 section components. Tailwind CSS v4 with CSS-first `@theme` configuration (no `tailwind.config.js`). Motion (`motion/react`) for scroll-triggered animations in client components. Local fonts via `next/font/local`.

**Tech Stack:** Next.js 15, TypeScript strict, Tailwind CSS v4, Motion (framer-motion), Lucide React icons, `next/font/local` for Satoshi + General Sans.

**Spec Files (read before each task):**
- `instructions/BRIEF.md` — product context, audience, tone
- `instructions/FEATURES.md` — feature inventory with copy angles
- `inventory/DESIGN.md` — visual identity, colors, typography, animations
- `inventory/COPY.md` — all copy blocks in Spanish, structured data templates

---

## Task 1: Project Scaffolding

**Goal:** Create the Next.js 15 project, install all dependencies, set up Tailwind v4 with custom theme, configure fonts.

**Files:**
- Create: `package.json` (via create-next-app)
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `src/lib/fonts.ts`
- Create: `public/fonts/` (font files)
- Modify: `tsconfig.json` (strict mode)
- Modify: `next.config.ts` (if needed)

**Step 1: Scaffold Next.js 15 project**

```bash
cd "C:\Users\marti\OneDrive\GitHub\AgentFlow-Landing"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias --turbopack
```

Accept defaults. This creates the base project with App Router, TypeScript, Tailwind v4, and ESLint.

**Step 2: Install additional dependencies**

```bash
npm install motion lucide-react
```

- `motion` — animation library (framer-motion v12+, import from `motion/react`)
- `lucide-react` — icon library (consistent 24px line icons)

**Step 3: Download font files**

Download Satoshi and General Sans from FontShare (https://www.fontshare.com/) and place in `public/fonts/`:

```
public/fonts/
├── Satoshi-Regular.woff2
├── Satoshi-Medium.woff2
├── Satoshi-Bold.woff2
├── GeneralSans-Regular.woff2
├── GeneralSans-Medium.woff2
└── GeneralSans-Semibold.woff2
```

If font files cannot be downloaded programmatically, create a placeholder `src/lib/fonts.ts` that uses system fallbacks and leave a `TODO` comment noting that font files need to be added manually.

**Step 4: Create font configuration**

Create `src/lib/fonts.ts`:

```typescript
import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    { path: "../../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const generalSans = localFont({
  src: [
    { path: "../../public/fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});
```

**Step 5: Configure Tailwind v4 theme in globals.css**

Replace `src/app/globals.css` with:

```css
@import "tailwindcss";

@theme {
  /* Typography */
  --font-display: var(--font-satoshi), "system-ui", "sans-serif";
  --font-body: var(--font-general-sans), "system-ui", "sans-serif";

  /* Colors — Midnight Operations palette */
  --color-bg-primary: #0A0B14;
  --color-bg-secondary: #111827;
  --color-bg-tertiary: #1A1F2E;
  --color-accent: #00D4AA;
  --color-accent-secondary: #F59E0B;
  --color-accent-cyan: #06B6D4;
  --color-text-primary: #F1F5F9;
  --color-text-secondary: #94A3B8;
  --color-text-tertiary: #64748B;
  --color-border: #1E293B;
  --color-whatsapp: #25D366;
  --color-error: #EF4444;

  /* Easing */
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);

  /* Breakpoints (Tailwind v4 defaults are fine, but add wide) */
  --breakpoint-wide: 1440px;
}

/* Base styles */
html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Selection */
::selection {
  background-color: color-mix(in srgb, var(--color-accent) 30%, transparent);
  color: var(--color-text-primary);
}
```

**Step 6: Set up root layout**

Create `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { satoshi, generalSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentFlow — IA que automatiza tus operaciones inmobiliarias por WhatsApp",
  description:
    "AgentFlow es la plataforma de IA que automatiza visitas, documentos y coordinación para agentes RE/MAX en Argentina. Todo por WhatsApp.",
  keywords:
    "agente IA inmobiliario, automatización inmobiliaria Argentina, CRM WhatsApp inmobiliario, RE/MAX Argentina IA, proptech Argentina",
  openGraph: {
    title: "AgentFlow — Tu asistente de IA inmobiliario en WhatsApp",
    description:
      "Automatizá visitas, documentos y coordinación. Todo por WhatsApp. Diseñado para agentes RE/MAX en Argentina.",
    type: "website",
    url: "https://agentflow.casa",
    images: [{ url: "https://agentflow.casa/og-image.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${satoshi.variable} ${generalSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

**Step 7: Create minimal page.tsx**

Create `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <p className="text-text-primary p-8 font-[family-name:var(--font-display)] text-4xl font-bold">
        AgentFlow
      </p>
    </main>
  );
}
```

**Step 8: Verify setup**

```bash
npm run dev
```

Open http://localhost:3000. Verify:
- Dark background (#0A0B14)
- "AgentFlow" text in Satoshi (or system fallback if fonts not yet loaded)
- No console errors

**Step 9: Commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Next.js 15 project with Tailwind v4 theme and font setup"
```

---

## Task 2: Shared Components — Animation Wrappers & Waitlist Form

**Goal:** Create reusable animation wrapper components and the waitlist email form used in Hero and Final CTA.

**Files:**
- Create: `src/components/AnimatedSection.tsx`
- Create: `src/components/WaitlistForm.tsx`

**Step 1: Create AnimatedSection component**

This wraps any section content with scroll-triggered fade-up animation. Uses `motion/react`.

Create `src/components/AnimatedSection.tsx`:

```tsx
"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className, staggerDelay = 0.1 }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

**Step 2: Create WaitlistForm component**

Create `src/components/WaitlistForm.tsx`:

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function WaitlistForm({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("Waitlist signup:", email);
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <p className="text-2xl font-bold font-[family-name:var(--font-display)]">
            ¡Estás en la lista! 🎉
          </p>
          <p className="text-text-secondary mt-2">
            Te vamos a avisar apenas AgentFlow esté listo. Mientras tanto, seguinos para novedades.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className={`flex ${variant === "compact" ? "flex-row" : "flex-col sm:flex-row"} gap-3 w-full max-w-md`}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 px-4 py-3 rounded-full bg-bg-secondary border border-border text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-accent text-bg-primary font-semibold hover:brightness-110 transition-all cursor-pointer whitespace-nowrap shadow-[0_0_20px_rgba(0,212,170,0.3)] hover:shadow-[0_0_30px_rgba(0,212,170,0.5)]"
          >
            Unirme →
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
```

**Step 3: Verify components compile**

```bash
npm run build
```

No errors expected. These are client components not yet rendered on any page.

**Step 4: Commit**

```bash
git add src/components/AnimatedSection.tsx src/components/WaitlistForm.tsx
git commit -m "feat: add reusable animation wrappers and waitlist form"
```

---

## Task 3: Navigation (Sticky Nav)

**Goal:** Sticky top nav — transparent initially, solid dark with blur backdrop on scroll. Logo left, links center, CTA right. Mobile hamburger.

**Files:**
- Create: `src/components/Navbar.tsx`
- Modify: `src/app/page.tsx` (add Navbar)

**Step 1: Build the Navbar component**

Create `src/components/Navbar.tsx`. Key behaviors:
- `useMotionValueEvent` or a scroll listener to track scroll position
- Background transitions from `transparent` to `bg-bg-primary/80 backdrop-blur-lg` when scrolled
- Nav links: Funcionalidades, Cómo Funciona, FAQ — smooth scroll anchors
- CTA button: "Unirme a la Lista de Espera" — teal pill
- Mobile: hamburger menu icon, full-screen overlay nav
- All text in Spanish per COPY.md

Reference: `inventory/COPY.md` → Navigation section.

**Step 2: Add Navbar to page.tsx**

Import and render `<Navbar />` at the top of the main page.

**Step 3: Verify in browser**

- Nav visible, transparent on top, solid on scroll
- Smooth scroll to sections (anchors won't work yet — sections don't exist)
- Mobile hamburger opens/closes

**Step 4: Commit**

```bash
git add src/components/Navbar.tsx src/app/page.tsx
git commit -m "feat: add sticky navbar with scroll effect and mobile menu"
```

---

## Task 4: Hero Section

**Goal:** Full viewport hero with animated gradient background, headline + sub-headline + waitlist CTA + floating WhatsApp phone mockup.

**Files:**
- Create: `src/components/Hero.tsx`
- Create: `src/components/WhatsAppMockup.tsx` (reused in hero and demo sections)
- Modify: `src/app/page.tsx`

**Step 1: Build the WhatsApp phone mockup component**

Create `src/components/WhatsAppMockup.tsx`. This renders a CSS iPhone frame with a WhatsApp-style chat inside. Key details:
- iPhone 15-style frame (CSS-generated, rounded corners, notch)
- WhatsApp header (green bar, contact name "AgentFlow", checkmark)
- Chat messages with WhatsApp styling:
  - Outgoing (agent): green bubbles (#25D366 bg), aligned right
  - Incoming (AgentFlow): white/light bubbles on dark (#1A1F2E bg), aligned left
  - Typing indicator ("...") animated dots
  - Double blue checkmarks (✓✓) on sent messages
  - Timestamps on messages
- Messages appear sequentially with configurable delay (for auto-play)
- Uses the conversation script from COPY.md Section 5

The component accepts props:
- `autoPlay?: boolean` — start animation on mount vs. on viewport entry
- `className?: string`

The WhatsApp conversation script (from COPY.md):
1. **Agent (outgoing):** "Coordiná una visita al depto de Av. Libertador 1234 para Juan Pérez, mañana a las 15hs."
2. **AgentFlow (incoming):** "Verificando disponibilidad... ✅ La propiedad está disponible mañana de 14 a 18hs. ✅ Tu agenda está libre a las 15hs. Contactando a María González (vendedora)..."
3. **AgentFlow (incoming):** "✅ María González confirmó para mañana a las 15hs. Contactando a Juan Pérez (comprador)..."
4. **AgentFlow (incoming):** "✅ Juan Pérez confirmó.\n📋 Visita confirmada\n📍 Av. Libertador 1234, Palermo\n📅 Mañana 15:00 - 15:45\n👤 Vendedora: María González\n👤 Comprador: Juan Pérez\n📅 Agregada a tu Google Calendar"

Use `motion/react` for sequential message animation. Each message fades in after a typing indicator.

**Step 2: Build the Hero component**

Create `src/components/Hero.tsx`. Layout:
- Full viewport height (`min-h-screen`)
- Background: animated radial gradient mesh (CSS keyframes for pulsing teal/cyan glow on #0A0B14)
- Left side (text):
  - Overline badge: "PARA AGENTES RE/MAX EN ARGENTINA" (uppercase, small, teal border pill)
  - Headline: "Tu operación inmobiliaria en piloto automático." (Satoshi, 64-80px, bold)
  - Sub-headline: from COPY.md Section 1 Option A
  - WaitlistForm component
  - "Ver cómo funciona ↓" text link
- Right side: WhatsAppMockup (slightly rotated 5-8deg, floating animation)
- Staggered entrance animations (0.3s, 0.5s, 0.7s, 0.8s delays)

Reference: `inventory/DESIGN.md` → Hero Section, `inventory/COPY.md` → Section 1.

The gradient background should be a CSS animation, NOT a canvas or heavy JS. Example approach:
```css
/* Radial gradient mesh animation */
background: radial-gradient(ellipse at 30% 50%, rgba(0,212,170,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 50%, rgba(6,182,212,0.06) 0%, transparent 50%),
            #0A0B14;
```
Animate the ellipse positions with CSS keyframes.

**Step 3: Add Hero to page.tsx**

```tsx
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
```

**Step 4: Verify in browser**

- Dark background with animated teal/cyan gradient glow
- Copy matches COPY.md exactly (Spanish, "vos" form)
- WhatsApp mockup shows sequential messages
- Waitlist form captures email (console.log)
- Mobile responsive (phone mockup centers below text)
- Animations play on load

**Step 5: Commit**

```bash
git add src/components/Hero.tsx src/components/WhatsAppMockup.tsx src/app/page.tsx
git commit -m "feat: add hero section with animated gradient and WhatsApp mockup"
```

**CHECKPOINT: Show hero to user for review before proceeding.**

---

## Task 5: Problem Statement Section

**Goal:** Stat cards showing pain points — "3-4 hs/día", "30+ min", "∞ mensajes" — with staggered entrance animations.

**Files:**
- Create: `src/components/ProblemStatement.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build ProblemStatement component**

Create `src/components/ProblemStatement.tsx`:
- Section headline: "Tus horas más productivas se pierden en coordinación."
- Body text paragraph from COPY.md Section 2
- 3 stat cards in a responsive grid (1 col mobile, 3 col desktop):
  - Card 1: "3–4 hs/día" → "en tareas administrativas"
  - Card 2: "30+ min" → "para coordinar una sola visita"
  - Card 3: "∞ mensajes" → "persiguiendo documentos"
- Each card: `bg-bg-secondary border border-border` with hover glow
- Large number in teal (#00D4AA), label in muted text
- Use `StaggerContainer` + `StaggerItem` for entrance animation
- Section id: `id="problema"` (for nav anchor)

Reference: `inventory/COPY.md` → Section 2, `inventory/DESIGN.md` → Problem Statement.

**Step 2: Add to page.tsx**

**Step 3: Verify and commit**

```bash
git add src/components/ProblemStatement.tsx src/app/page.tsx
git commit -m "feat: add problem statement section with animated stat cards"
```

---

## Task 6: How It Works (3-Step Flow)

**Goal:** 3-step horizontal flow (Hablá → La IA actúa → Resultado) with connecting animated line and staggered reveals.

**Files:**
- Create: `src/components/HowItWorks.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build HowItWorks component**

Create `src/components/HowItWorks.tsx`:
- Section headline: "Así de simple funciona."
- 3 steps in horizontal layout (desktop) / vertical stack (mobile):
  1. **Hablá** — icon: MessageSquare (Lucide) — "Mandá un mensaje o audio por WhatsApp con lo que necesitás."
  2. **La IA actúa** — icon: Brain or Sparkles (Lucide) — "AgentFlow entiende tu pedido, verifica disponibilidad, contacta a las partes involucradas y coordina todo automáticamente."
  3. **Resultado** — icon: CheckCircle (Lucide) — "Visita confirmada. Documento generado. Calendario actualizado. Vos no tuviste que hacer nada más."
- Connecting flow line between steps (CSS/SVG):
  - Desktop: horizontal dashed/gradient line between step circles
  - Animated with draw-on effect using CSS `stroke-dasharray` + `stroke-dashoffset` transition triggered on scroll
- Each step number in a teal circle
- Icons colored teal (#00D4AA), 24px
- Section id: `id="como-funciona"`

Reference: `inventory/COPY.md` → Section 3, `inventory/DESIGN.md` → How It Works.

**Step 2: Add to page.tsx**

**Step 3: Verify and commit**

```bash
git add src/components/HowItWorks.tsx src/app/page.tsx
git commit -m "feat: add how-it-works 3-step flow with animated connecting line"
```

---

## Task 7: Primary Feature Showcase (3 Alternating Sections)

**Goal:** 3 alternating left-right feature showcases — visits, documents, pipeline.

**Files:**
- Create: `src/components/FeatureShowcase.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build FeatureShowcase component**

Create `src/components/FeatureShowcase.tsx`:
- Alternating layout: text-left/visual-right then visual-left/text-right
- Each feature has:
  - Overline label (uppercase, teal, small)
  - Headline (Satoshi, bold)
  - Body paragraph (General Sans, muted)
  - Key detail badge (small teal pill with metric)
  - CSS-generated visual mockup on the opposite side (abstract representation)

**Feature A — Visit Coordination:**
- Overline: "COORDINACIÓN DE VISITAS"
- Headline: "Tres partes. Cero llamadas."
- Body: from COPY.md Section 4 Feature A
- Badge: "50% menos tiempo en coordinación"
- Visual: abstract 3-node diagram showing seller↔agent↔buyer with connecting lines

**Feature B — Document Generation:**
- Overline: "DOCUMENTOS AUTOMÁTICOS"
- Headline: "De pedido a PDF en menos de 2 minutos."
- Body: from COPY.md Section 4 Feature B
- Badge: "5 tipos de documento"
- Visual: abstract document/PDF icon with generation animation

**Feature C — Opportunity Pipeline:**
- Overline: "PIPELINE DE VENTAS"
- Headline: "Cada oportunidad, de principio a fin."
- Body: from COPY.md Section 4 Feature C
- Badge: "10 etapas del pipeline"
- Visual: abstract pipeline/funnel with stage indicators

All visuals are CSS-generated (gradients, shapes, icons from Lucide). No images.
Each feature animates in when scrolled into view.
Section id: `id="funcionalidades"`

Reference: `inventory/COPY.md` → Section 4, `inventory/DESIGN.md` → Feature Showcase.

**Step 2: Add to page.tsx**

**Step 3: Verify and commit**

```bash
git add src/components/FeatureShowcase.tsx src/app/page.tsx
git commit -m "feat: add primary feature showcase with alternating layout"
```

---

## Task 8: WhatsApp Demo Section

**Goal:** Full-width section with centered oversized phone mockup showing the auto-playing WhatsApp conversation.

**Files:**
- Create: `src/components/WhatsAppDemo.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build WhatsAppDemo component**

Create `src/components/WhatsAppDemo.tsx`:
- Section headline: "Mirá cómo trabaja AgentFlow."
- Sub-headline: "Una conversación real de coordinación de visita — completamente automática."
- Centered `WhatsAppMockup` component (reuse from Task 4) with `autoPlay` triggered on viewport entry
- Background: darker than surrounding sections (use `bg-bg-primary` with a subtle WhatsApp-green radial glow)
- Phone mockup is larger here than in hero (scale up)
- Optional: faint dot grid pattern behind phone

Reference: `inventory/COPY.md` → Section 5, `inventory/DESIGN.md` → WhatsApp Demo.

**Step 2: Add to page.tsx**

**Step 3: Verify and commit**

```bash
git add src/components/WhatsAppDemo.tsx src/app/page.tsx
git commit -m "feat: add WhatsApp demo section with auto-playing conversation"
```

---

## Task 9: Secondary Feature Grid (2x3)

**Goal:** 2x3 grid of compact feature cards — calendar, authorizations, offers, reservations, documentation, voice.

**Files:**
- Create: `src/components/SecondaryFeatures.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build SecondaryFeatures component**

Create `src/components/SecondaryFeatures.tsx`:
- 2x3 grid (3 cols desktop, 2 cols tablet, 1 col mobile)
- Each card:
  - Lucide icon (28px, teal)
  - Feature name (18px, bold, Satoshi)
  - One-line description (14px, muted, General Sans)
  - Card: `bg-bg-secondary border border-border rounded-xl p-6`
  - Hover: scale(1.02) + border glow (teal shadow) + bg-bg-tertiary

Cards (from COPY.md Section 6):
1. Calendar icon → "Agenda sincronizada" → "Google Calendar integrado con detección automática de conflictos."
2. FileCheck icon → "Nunca más se te vence" → "Alertas automáticas a 7, 3 y 1 día antes del vencimiento."
3. Scale icon → "Compará y decidí" → "Ofertas lado a lado con seguimiento de contraofertas."
4. Handshake icon → "De oferta a reserva, sin fricciones" → "Confirmación de 3 partes con seguimiento de seña."
5. FolderSearch icon → "La IA persigue por vos" → "Pedidos automáticos por WhatsApp con recordatorios."
6. Mic icon → "Hablá, no escribas" → "Mandá audios — la IA transcribe y ejecuta."

Use `StaggerContainer` + `StaggerItem` for entrance.

Reference: `inventory/COPY.md` → Section 6, `inventory/DESIGN.md` → Feature Grid.

**Step 2: Add to page.tsx**

**Step 3: Verify and commit**

```bash
git add src/components/SecondaryFeatures.tsx src/app/page.tsx
git commit -m "feat: add secondary feature grid with hover effects"
```

---

## Task 10: Tech Credibility Section

**Goal:** Minimal section with headline + grayscale tech logo bar (Anthropic, Meta, Google, Supabase, Next.js, Railway).

**Files:**
- Create: `src/components/TechCredibility.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build TechCredibility component**

Create `src/components/TechCredibility.tsx`:
- Section headline: "Construido con tecnología de primer nivel."
- Sub-headline: "La misma infraestructura que usan las mejores plataformas del mundo."
- Logo row: 6 logos in a horizontal row, centered
- Logos are SVG text representations or simple CSS shapes (since we don't have actual logo files):
  - Each logo name rendered in a clean monospace/sans font
  - Grayscale by default (opacity 0.5), full opacity on hover
  - Smooth transition on hover
- This section is intentionally minimal and understated
- Background: `bg-bg-secondary`

Reference: `inventory/COPY.md` → Section 7, `inventory/DESIGN.md` → Tech Credibility.

**Step 2: Add to page.tsx**

**Step 3: Verify and commit**

```bash
git add src/components/TechCredibility.tsx src/app/page.tsx
git commit -m "feat: add tech credibility section with logo bar"
```

---

## Task 11: Numbers / Metrics Section

**Goal:** Animated count-up metrics — 79, <2 min, 9, 10 — triggered on scroll.

**Files:**
- Create: `src/components/Metrics.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build Metrics component**

Create `src/components/Metrics.tsx`:
- Section headline: "Los números hablan solos."
- 4 metric cards in a responsive grid
- Each metric:
  - Large number (48-64px, teal, Satoshi bold)
  - Label below (muted text)
  - Sub-label (smaller, more muted)
- Count-up animation using `motion/react`'s `useMotionValue` + `useTransform` + `useInView`:
  - "79" counts from 0 → 79 over 2s
  - "<2 min" — show "<2" counting, "min" static
  - "9" counts from 0 → 9
  - "10" counts from 0 → 10
- Animation triggers on viewport entry (`useInView`)

Metrics (from COPY.md Section 8):
1. 79 → "herramientas de IA" → "especializadas en operaciones inmobiliarias"
2. <2 min → "generación de documentos" → "de pedido a PDF por WhatsApp"
3. 9 → "procesos automáticos" → "funcionando 24/7 en segundo plano"
4. 10 → "etapas del pipeline" → "desde lead hasta escritura"

Reference: `inventory/COPY.md` → Section 8, `inventory/DESIGN.md` → Numbers/Metrics.

**Step 2: Add to page.tsx**

**Step 3: Verify and commit**

```bash
git add src/components/Metrics.tsx src/app/page.tsx
git commit -m "feat: add metrics section with animated count-up"
```

---

## Task 12: FAQ Section (with Schema.org)

**Goal:** Accordion FAQ with 8 questions, accessible (keyboard, aria), `FAQPage` schema.org structured data.

**Files:**
- Create: `src/components/FAQ.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/layout.tsx` (add FAQ structured data in `<script type="application/ld+json">`)

**Step 1: Build FAQ component**

Create `src/components/FAQ.tsx`:
- Section headline: no explicit headline in COPY.md for FAQ — use "Preguntas Frecuentes" or keep clean
- Centered layout, max-width 768px
- Accordion with smooth expand/collapse animation (Motion `AnimatePresence` + `motion.div` for height)
- Plus icon → rotates to X on expand
- Each item:
  - Question button with `aria-expanded`, keyboard navigable
  - Answer panel with smooth height animation
- Section id: `id="faq"`

All 8 Q&As from COPY.md Section 9:
1. ¿Qué es AgentFlow?
2. ¿Cómo funciona con WhatsApp?
3. ¿Necesito instalar alguna aplicación?
4. ¿Mis datos están seguros?
5. ¿Funciona con Google Calendar?
6. ¿En qué idioma funciona?
7. ¿Cuánto cuesta AgentFlow?
8. ¿Cuándo estará disponible?

Reference: `inventory/COPY.md` → Section 9.

**Step 2: Add FAQPage schema.org structured data**

In `src/app/layout.tsx`, add a `<script type="application/ld+json">` in the `<head>` (via metadata or direct script tag) containing the full FAQPage schema with all 8 Q&As from COPY.md.

Also add `SoftwareApplication` and `Organization` schemas from COPY.md → Schema.org section.

**Step 3: Add to page.tsx**

**Step 4: Verify**

- Accordion opens/closes smoothly
- Keyboard accessible (Tab to question, Enter/Space to toggle)
- `aria-expanded` toggles correctly
- Schema.org JSON-LD present in page source (view source or Lighthouse)

**Step 5: Commit**

```bash
git add src/components/FAQ.tsx src/app/layout.tsx src/app/page.tsx
git commit -m "feat: add FAQ accordion with schema.org structured data"
```

---

## Task 13: Final CTA Section

**Goal:** Full-width CTA with headline + email input + "Unirme" button.

**Files:**
- Create: `src/components/FinalCTA.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build FinalCTA component**

Create `src/components/FinalCTA.tsx`:
- Background: `bg-bg-tertiary` (#1A1F2E) — elevated from page bg
- Centered layout
- Headline: "Dejá que la IA se encargue de lo operativo." (Satoshi, bold)
- Sub-headline: "Sumate a la lista de espera y sé de los primeros en usar AgentFlow."
- Reuse `WaitlistForm` component (from Task 2)
- Fine print: "Sin compromiso. Te avisamos cuando esté listo."
- Subtle upward gradient glow from bottom (CSS gradient)

Reference: `inventory/COPY.md` → Section 10, `inventory/DESIGN.md` → Final CTA.

**Step 2: Add to page.tsx**

**Step 3: Verify and commit**

```bash
git add src/components/FinalCTA.tsx src/app/page.tsx
git commit -m "feat: add final CTA section with waitlist form"
```

---

## Task 14: Footer

**Goal:** 3-column footer with logo, product links, company links, legal links.

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build Footer component**

Create `src/components/Footer.tsx`:
- Background: `bg-bg-primary` (#0A0B14)
- 4 columns desktop, stacked mobile:
  1. Logo ("AgentFlow") + tagline: "IA que automatiza tus operaciones inmobiliarias."
  2. Producto: Funcionalidades, Cómo Funciona, FAQ (anchor links)
  3. Empresa: Sobre Nosotros (coming soon), Blog (coming soon), Contacto
  4. Legal: Política de Privacidad, Términos de Uso
- Muted text (#64748B), links hover to teal
- Copyright: "© 2026 AgentFlow. Todos los derechos reservados."
- Divider line above copyright

Reference: `inventory/COPY.md` → Section 11.

**Step 2: Add to page.tsx**

**Step 3: Verify and commit**

```bash
git add src/components/Footer.tsx src/app/page.tsx
git commit -m "feat: add footer with navigation links"
```

---

## Task 15: Polish Pass — Accessibility, Responsive, Performance

**Goal:** Final quality pass. WCAG AA, responsive at 640/1024/1440px, Lighthouse 95+, smooth scroll nav anchors, OG meta tags.

**Files:**
- Modify: `src/app/globals.css` (any fixes)
- Modify: `src/app/layout.tsx` (complete metadata)
- Modify: various components (responsive fixes, aria attributes)

**Step 1: Responsive audit**

Check every section at 3 breakpoints:
- Mobile: 375px (iPhone)
- Tablet: 768px
- Desktop: 1440px

Fix any layout breaks. Key areas:
- Hero: phone mockup stacks below text on mobile
- Feature showcase: alternating layout stacks to single column on mobile
- Feature grid: 1→2→3 columns
- Nav: hamburger on mobile

**Step 2: Accessibility audit**

- All interactive elements keyboard accessible
- Focus visible styles on all buttons, links, accordion items
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`
- `aria-label` on icon-only buttons
- All heading levels logical (h1 in hero, h2 for sections, h3 for features)
- Color contrast verification (already passing per DESIGN.md ratios)

**Step 3: Smooth scroll nav**

Ensure clicking nav links (`#funcionalidades`, `#como-funciona`, `#faq`) scrolls smoothly. `html { scroll-behavior: smooth }` is already in globals.css. Verify the section IDs match the nav hrefs.

**Step 4: Complete OG metadata**

Verify all OG tags from COPY.md → Meta Tags section are present in layout.tsx metadata. Add English alt meta description.

**Step 5: Performance optimization**

- Ensure all Motion animations use `transform` and `opacity` only
- No layout-triggering CSS in animations
- Font loading with `display: swap` (already configured in fonts.ts)
- Run `npm run build` — check bundle size

**Step 6: Lighthouse audit**

```bash
npm run build && npm run start
```

Run Lighthouse in Chrome DevTools on http://localhost:3000. Target: 95+ on all metrics. Fix any issues.

**Step 7: Final commit**

```bash
git add -A
git commit -m "polish: accessibility, responsive fixes, and performance optimization"
```

---

## Task 16: TypeScript and Lint Verification

**Goal:** Ensure no type errors or lint warnings.

**Step 1: Run TypeScript check**

```bash
npm run typecheck
```

Fix any type errors.

**Step 2: Run ESLint**

```bash
npm run lint
```

Fix any lint errors.

**Step 3: Final build verification**

```bash
npm run build
```

Clean build with no warnings or errors.

**Step 4: Commit any fixes**

```bash
git add -A
git commit -m "chore: fix typecheck and lint issues"
```

---

## Summary: Component File Map

| Component | File | Section |
|-----------|------|---------|
| Navbar | `src/components/Navbar.tsx` | Sticky nav |
| Hero | `src/components/Hero.tsx` | Hero section |
| WhatsAppMockup | `src/components/WhatsAppMockup.tsx` | Reused in Hero + Demo |
| ProblemStatement | `src/components/ProblemStatement.tsx` | Problem/stats |
| HowItWorks | `src/components/HowItWorks.tsx` | 3-step flow |
| FeatureShowcase | `src/components/FeatureShowcase.tsx` | 3 primary features |
| WhatsAppDemo | `src/components/WhatsAppDemo.tsx` | Demo section |
| SecondaryFeatures | `src/components/SecondaryFeatures.tsx` | 2x3 feature grid |
| TechCredibility | `src/components/TechCredibility.tsx` | Logo bar |
| Metrics | `src/components/Metrics.tsx` | Animated numbers |
| FAQ | `src/components/FAQ.tsx` | Accordion FAQ |
| FinalCTA | `src/components/FinalCTA.tsx` | CTA with form |
| Footer | `src/components/Footer.tsx` | Footer |
| AnimatedSection | `src/components/AnimatedSection.tsx` | Reusable animation wrapper |
| WaitlistForm | `src/components/WaitlistForm.tsx` | Reusable email form |

## Final page.tsx Structure

```tsx
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemStatement } from "@/components/ProblemStatement";
import { HowItWorks } from "@/components/HowItWorks";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { WhatsAppDemo } from "@/components/WhatsAppDemo";
import { SecondaryFeatures } from "@/components/SecondaryFeatures";
import { TechCredibility } from "@/components/TechCredibility";
import { Metrics } from "@/components/Metrics";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemStatement />
        <HowItWorks />
        <FeatureShowcase />
        <WhatsAppDemo />
        <SecondaryFeatures />
        <TechCredibility />
        <Metrics />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
```
