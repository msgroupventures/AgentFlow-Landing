# AgentFlow Landing Page — Design Direction

## Design Philosophy

**"Precision technology with Argentine warmth."**

AgentFlow's design should communicate that this is a world-class technology product — built with the same craft as Linear, Vercel, or Stripe — but rooted in the human, relationship-driven reality of Argentine real estate. The design walks a tightrope: cutting-edge enough to signal serious technology, warm enough to not intimidate a 45-year-old RE/MAX agent in Belgrano.

---

## Visual Identity (From Scratch)

### Brand Name Treatment

- **AgentFlow** — one word, camelCase in logo: **agent**Flow or Agent**Flow**
- The "Flow" concept is central — visualize movement, continuity, automation
- Consider a subtle animated logomark that suggests flow/continuity (a flowing line, a conversation thread, a signal pulse)

### Color System

**Primary Palette — "Midnight Operations"**

Inspired by the Pointer AI template's dark theme, but with a warmer accent that nods to Argentine identity. Not cold blue-black — a warm, deep navy that feels premium but inviting.

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Background (Primary)** | Deep Navy Black | `#0A0B14` | Page background, hero sections |
| **Background (Secondary)** | Warm Dark | `#111827` | Card backgrounds, alternating sections |
| **Background (Tertiary)** | Elevated Surface | `#1A1F2E` | Hover states, modals, dropdowns |
| **Accent (Primary)** | Electric Teal | `#00D4AA` | CTAs, links, active states, key highlights |
| **Accent (Secondary)** | Warm Amber | `#F59E0B` | Secondary highlights, notification badges, WhatsApp association |
| **Accent (Gradient)** | Teal → Cyan | `#00D4AA → #06B6D4` | Hero gradient, feature highlights |
| **Text (Primary)** | Off-White | `#F1F5F9` | Headlines, body text |
| **Text (Secondary)** | Muted Silver | `#94A3B8` | Descriptions, secondary info |
| **Text (Tertiary)** | Dim Gray | `#64748B` | Captions, metadata |
| **Border** | Subtle Edge | `#1E293B` | Cards, dividers |
| **Success** | WhatsApp Green | `#25D366` | WhatsApp-related elements, confirmations |
| **Error** | Soft Red | `#EF4444` | Error states |

**Rationale:** 
- The Electric Teal differentiates from the overused purple/blue AI gradient cliché
- Warm Amber provides a secondary accent that feels human and creates visual hierarchy
- WhatsApp Green appears only in WhatsApp-related UI to reinforce the integration message
- The dark theme signals technology sophistication (Linear, Vercel, Raycast precedent) while providing dramatic contrast for product screenshots

### Color Usage Rules

1. **Accent (Primary)** used sparingly — only for CTAs, active navigation, and critical highlights. Maximum 10% of any viewport.
2. **Gradient** used in hero section and one additional section maximum. Not repeated throughout.
3. **WhatsApp Green** ONLY on WhatsApp mockup elements and WhatsApp-specific feature mentions. Do not use as general accent.
4. Body text always `#F1F5F9` on dark backgrounds. Never pure white `#FFFFFF` (too harsh).
5. Cards use `#111827` with `1px solid #1E293B` border. Hover state elevates to `#1A1F2E` with subtle glow.

---

### Typography

**Display / Headlines:** `Cal Sans` or `Satoshi`  
- Weight: 700 (Bold) for headlines, 600 (SemiBold) for sub-headlines
- Character: Modern geometric sans with personality — not generic, not quirky
- Fallback: `system-ui, -apple-system, sans-serif`
- **Alternate option:** `Space Grotesk` is overused in AI SaaS — AVOID. Consider `General Sans`, `Outfit`, or `Plus Jakarta Sans` for a fresh feel.

**Body / UI:** `General Sans` or `Plus Jakarta Sans`  
- Weight: 400 (Regular) for body, 500 (Medium) for emphasis
- Line height: 1.6 for body text, 1.2 for headlines
- Character: Clean, highly legible at small sizes, slightly rounded for warmth

**Monospace (Tech section):** `JetBrains Mono` or `Fira Code`  
- Used sparingly: code snippets, technical specifications, tool names

**Type Scale (Desktop):**

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero headline | 64–80px | 700 | 1.1 |
| Section headline | 40–48px | 700 | 1.2 |
| Sub-headline | 24–28px | 600 | 1.3 |
| Body large | 18–20px | 400 | 1.6 |
| Body regular | 16px | 400 | 1.6 |
| Caption / Meta | 14px | 500 | 1.5 |
| Overline / Label | 12–13px | 600 | 1.4 (uppercase, letter-spacing: 0.05em) |

**Mobile adjustments:** Headlines scale down to 60–70% of desktop size. Body stays at 16px minimum.

---

### Spacing System

8px base grid. All spacing uses multiples of 8.

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight inline spacing |
| `sm` | 8px | Component internal padding |
| `md` | 16px | Between related elements |
| `lg` | 24px | Between groups |
| `xl` | 32px | Section internal padding |
| `2xl` | 48px | Between sections (mobile) |
| `3xl` | 64px | Between sections (tablet) |
| `4xl` | 96px | Between sections (desktop) |
| `5xl` | 128px | Hero section padding |

**Max content width:** 1280px (centered). Hero can bleed to full width for background effects.

---

## Aesthetic Direction

### Overall Vibe: "Linear meets WhatsApp"

The page should feel like a premium dev-tool landing page (dark, precise, animated) that reveals a warm, human product underneath. The contrast between sophisticated presentation and approachable product is the design tension that makes it memorable.

### Design References (Mood Board)

| Reference | What to Take | What to Skip |
|-----------|-------------|-------------|
| **Pointer AI Template (v0)** | Dark theme foundation, clean section rhythm, smooth fade-in animations, hero layout structure | Generic AI copy, standard pricing layout |
| **Linear.app** | Gradient mesh backgrounds, feature card hover effects, precision typography, radial glow effects | Issue tracking specific visuals |
| **Vercel.com** | Hero with ambient gradient animation, code-as-visual-element, "Start Deploying" CTA confidence, tech logo bar | Triangle logo motif |
| **Superhuman** | Bold metric in headline ("Save 4 hours"), premium dark aesthetic, feature breakdowns with clear benefit/visual pairs | Email-specific UI |
| **Raycast** | Spotlight-style glowing elements against dark backgrounds, smooth motion, keyboard-first confidence | Mac-only context |
| **WhatsApp Business Site** | Green accent usage, chat bubble visual language, mobile-first screenshots | Corporate tone, bland design |

### What Makes AgentFlow's Page Unique

1. **WhatsApp conversation mockup as hero visual** — not a generic dashboard screenshot. Show the AI having a real conversation in a WhatsApp-accurate UI mockup.
2. **Flow animation** — a continuous flowing line/particle trail that connects sections, representing the "flow" of automated operations.
3. **Split personality:** Dark tech sophistication for the page chrome + warm WhatsApp green bubbles for the product demonstrations. The contrast IS the brand.

---

## Section-by-Section Design Direction

### 1. Hero Section

**Layout:** Full viewport height. Centered text with product visual below/beside.

**Background:** Animated radial gradient mesh — dark base with subtle teal/cyan glow pulsing outward from center. NOT a static gradient. Think Linear.app hero energy.

**Content:**
- Overline badge: "PARA AGENTES RE/MAX EN ARGENTINA" (small, uppercase, teal accent)
- Main headline: Large, bold, max 8 words
- Sub-headline: 1–2 lines, muted silver, specific benefit
- CTA: "Unirme a la Lista de Espera" button (teal, pill-shaped, with subtle glow)
- Secondary: "Ver cómo funciona ↓" text link

**Product Visual:** Floating WhatsApp phone mockup showing a real conversation. Slightly rotated (5–8°), with a soft ambient glow behind it. The conversation should show the AI coordinating a visit — specific, not generic.

**Animation:** 
- Headline fades up with 0.3s delay
- Sub-headline fades up with 0.5s delay
- CTA fades up with 0.7s delay
- Phone mockup slides in from right with 0.8s delay and subtle float animation (continuous, slow)

---

### 2. Problem Statement Section

**Layout:** Text-left, visual-right or full-width centered.

**Visual approach:** Use a "before" state — scattered icons representing chaos (phone, calendar, document, chat bubble, clock) in a disorganized cluster. On scroll, they animate into an organized flow, converging into the AgentFlow logo.

**Alternative:** Simple stat cards with large numbers:
- "3–4 hs/día" — en tareas administrativas
- "30+ min" — para coordinar una sola visita
- "∞ mensajes" — persiguiendo documentos

Each stat card appears with a staggered entrance animation.

---

### 3. How It Works (3-Step Flow)

**Layout:** Horizontal 3-column on desktop, vertical stack on mobile.

**Visual:** Connected by a flowing line (the "flow" brand element) that animates as you scroll through.

**Steps:**
1. 💬 **Hablá** — "Mandá un mensaje o audio por WhatsApp" (WhatsApp input mockup)
2. 🧠 **La IA actúa** — "AgentFlow entiende, planifica y ejecuta" (abstract processing visual — glowing nodes/connections)
3. ✅ **Resultado** — "Visita coordinada. Documento generado. Calendario actualizado." (Result mockup — confirmation message)

**Animation:** Each step reveals sequentially as you scroll. The connecting flow line animates between them with a trailing glow effect.

---

### 4. Feature Showcase (Primary Features)

**Layout:** Alternating left-right sections (feature text + visual, then visual + feature text).

**Card style:** Large feature cards with:
- Teal icon or small illustration
- Feature name (24px, bold)
- 2–3 line description (16px, muted)
- Key detail callout (metric or capability in a small badge)

**Features to showcase here:** Visit Coordination, Document Generation, Opportunity Pipeline

Each feature card has a subtle border gradient on hover (teal to transparent).

---

### 5. WhatsApp Demo (Hero Feature Deep Dive)

**This is the signature section — invest the most design effort here.**

**Layout:** Full-width section with a centered, oversized iPhone/phone mockup.

**Visual:** A pixel-perfect WhatsApp conversation mockup showing a complete visit booking flow:
```
Agent: "Coordiná una visita al depto de Av. Libertador 1234 para Juan Pérez, mañana a las 15hs"
AgentFlow: "Verificando disponibilidad... ✅ La propiedad está disponible mañana de 14-18hs. ✅ Tu agenda está libre. Contactando al vendedor..."
[Time passes indicator]
AgentFlow: "✅ María González (vendedora) confirmó para mañana 15hs. Contactando al comprador..."
[Time passes indicator]  
AgentFlow: "✅ Juan Pérez (comprador) confirmó. ✅ Visita confirmada: Mañana 15:00 - Av. Libertador 1234, Palermo. Agregada a tu calendario de Google."
```

**Animation:** Messages appear sequentially with typing indicators (the "..." dots) between them, simulating a real conversation in real-time. Auto-plays when scrolled into view.

**Background:** Darker than surrounding sections. WhatsApp-green subtle glow behind the phone. Maybe a faint grid pattern or noise texture.

---

### 6. Feature Grid (Secondary Features)

**Layout:** 2x3 or 3x2 grid of compact feature cards.

**Card style:** 
- Icon (28px, teal)
- Name (18px, bold)
- One-line description (14px, muted)
- Subtle hover: card elevates with border glow

**Features:** Calendar, Authorizations, Offers, Reservations, Documentation, Voice Messages

---

### 7. Tech Credibility Section

**Layout:** Clean, understated. This section should whisper, not shout.

**Visual:** Logo bar of technology partners/tools, grayscale by default, color on hover.

**Content:**
- Small headline: "Construido con tecnología de primer nivel"
- Logo row: Anthropic, Meta (WhatsApp), Google, Supabase, Next.js, Railway
- Optional: Brief "Under the Hood" expandable section for tech-savvy visitors

**Style:** This section is intentionally minimal — it builds trust without overwhelming non-technical visitors.

---

### 8. Numbers / Metrics Section

**Layout:** Full-width dark section with large animated counters.

**Metrics (count-up animation on scroll):**
- "79 herramientas de IA" 
- "<2 min generación de documentos"
- "9 procesos automáticos 24/7"
- "50% menos tiempo en coordinación"

**Style:** Large numbers (48–64px) in teal, labels in muted text below. Subtle particle/dot animation in background.

---

### 9. FAQ Section

**Layout:** Centered, max-width 768px. Accordion-style.

**Visual:** Clean expand/collapse with smooth animation. Plus icon rotates to X on expand.

**Must include these questions (for SEO/AI-CITE):**
1. "¿Qué es AgentFlow?"
2. "¿Cómo funciona con WhatsApp?"
3. "¿Necesito instalar alguna aplicación?"
4. "¿Mis datos están seguros?"
5. "¿Funciona con Google Calendar?"
6. "¿En qué idioma funciona?"
7. "¿Cuánto cuesta AgentFlow?"
8. "¿Cuándo estará disponible?"

**Structured data:** Implement `FAQPage` schema.org markup for this section.

---

### 10. Final CTA Section

**Layout:** Full-width, elevated background (`#1A1F2E`). Centered.

**Content:**
- Headline: "Dejá que la IA se encargue de lo operativo."
- Sub-headline: "Sumate a la lista de espera y sé de los primeros en usar AgentFlow."
- Email input + "Unirme" button (teal)
- Small text: "Sin compromiso. Te avisamos cuando esté listo."

**Visual:** Subtle upward gradient glow from the bottom, suggesting momentum/future.

---

### 11. Footer

**Layout:** 4-column on desktop, stacked on mobile.

**Columns:**
1. Logo + one-line description + social links
2. Producto: Features, How it works, FAQ
3. Empresa: About (future), Blog (future), Contact
4. Legal: Privacy, Terms

**Style:** Muted, functional. `#0A0B14` background with `#64748B` text. Links highlight to teal on hover.

---

## Navigation

**Style:** Sticky top bar, transparent initially → solid dark on scroll. Blur backdrop.

**Items:**
- Logo (left)
- Funcionalidades | Cómo Funciona | FAQ (center)
- "Unirme a la Lista de Espera" button (right, teal, small)

**Mobile:** Hamburger menu, full-screen overlay with large nav items.

**Animation:** Nav items have subtle underline animation on hover. Active section indicator.

---

## Motion & Animation Guidelines

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Section entrance | Fade up + slide (20px) | 0.6s | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Staggered children | Sequential with 0.1s delay each | 0.4s each | Same as above |
| Hero gradient | Continuous slow pulse/shift | 8–12s loop | Linear |
| WhatsApp messages | Sequential appearance with typing delay | 0.8s per message | Ease-out |
| Number counters | Count-up on scroll intersection | 2s | Ease-out |
| Card hover | Scale(1.02) + border glow + shadow | 0.2s | Ease |
| CTA button | Subtle glow pulse on idle | 3s loop | Ease-in-out |
| Nav scroll | Background opacity transition | 0.3s | Ease |
| Phone mockup | Continuous subtle float (Y: ±8px) | 4s loop | Ease-in-out |
| Flow line | Draw-on effect following scroll position | Scroll-synced | Linear |

**Performance rule:** All animations use `transform` and `opacity` only. No layout-triggering properties. Use `will-change` sparingly. Respect `prefers-reduced-motion`.

---

## Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Single column, stacked sections, hamburger nav, hero text centered |
| Tablet | 640–1024px | 2-column feature grid, side-by-side hero (text left, visual right) |
| Desktop | 1024–1440px | Full layout, all animations active |
| Wide | >1440px | Content max-width 1280px, background effects extend to full width |

---

## Image & Asset Requirements

| Asset | Format | Notes |
|-------|--------|-------|
| AgentFlow logo | SVG | Light version (for dark backgrounds) + dark version |
| AgentFlow icon/favicon | SVG + PNG (16, 32, 180, 512) | Simplified logomark |
| Phone mockup frame | SVG or CSS | iPhone 15-style frame for WhatsApp demo |
| Feature icons (10) | SVG, 24-28px | Consistent line-style, teal color |
| Tech partner logos (8-10) | SVG | Grayscale + color versions |
| OG image | PNG 1200x630 | For social sharing — hero visual + headline |
| Background textures | CSS-generated | Noise, grid, gradient — no raster images |

---

## Accessibility Requirements

- Color contrast: All text passes WCAG AA (4.5:1 for normal text, 3:1 for large text)
- `#F1F5F9` on `#0A0B14` = ratio ~15:1 ✅
- `#94A3B8` on `#0A0B14` = ratio ~7:1 ✅
- `#00D4AA` on `#0A0B14` = ratio ~8:1 ✅
- All interactive elements keyboard accessible
- `prefers-reduced-motion` support for all animations
- Semantic HTML (nav, main, section, article, footer)
- `alt` text on all images
- `aria-labels` on icon-only buttons
- Focus visible styles on all interactive elements

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| First Contentful Paint | <1.5s |
| Largest Contentful Paint | <2.5s |
| Cumulative Layout Shift | <0.1 |
| Total page weight | <500KB (excluding fonts) |
| Font loading | `font-display: swap` + preload critical weights |
| Images | Next.js Image optimization, WebP/AVIF |
| Animation | 60fps, GPU-accelerated only |
