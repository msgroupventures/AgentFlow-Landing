# AgentFlow Brand Guidelines v1.2 — Consolidated

**Effective:** 2026-05-17
**Supersedes:** Brand Guidelines v1.0 (March 2026, PDF) and v1.1 (May 2026, MD). This document is the single authoritative source.

**Machine-readable sibling:** [`DESIGN-v1.2.md`](DESIGN-v1.2.md) — the token contract used by product code, Figma, and AI agents. Version pinned to this file; when these guidelines bump to v1.3, the DESIGN file bumps with them and tokens must mirror §4 (Colors), §6 (Typography), §8 (Spacing).

This is a consolidation, not a redesign. All v1.1 decisions (mark, lockups, Geist typography, family extension architecture) are preserved as-is. The v1.0 content that v1.1 left untouched (brand identity, color system, color usage rules, brand direction, spacing, accessibility) is integrated back in. Where the two documents disagreed, v1.1 wins.

---

## 1. Brand Identity

### 1.1 Who we are

AgentFlow is an AI-powered operations platform built specifically for RE/MAX real estate agents in Argentina. We combine world-class technology with the human, relationship-driven reality of Argentine real estate. Our AI agent handles the entire operational lifecycle through WhatsApp — the dominant communication channel in the market.

### 1.2 Brand personality

- **Precision Technology** — World-class AI engineering under the hood, built with the same craft as Linear, Vercel, or Stripe.
- **Argentine Warmth** — Rooted in the human, relationship-driven reality of Argentine real estate. Approachable to a 45-year-old RE/MAX agent in Belgrano.
- **Quietly Confident** — Not a flashy startup nor a corporate vendor. Think: the best hire your franchise ever made, who happens to be an AI.
- **WhatsApp-Native** — Works where agents already live. No new app to learn. The AI speaks their language (Spanish es-AR, vos form).

### 1.3 Tone spectrum

| Axis | Position |
|---|---|
| Professional ←→ Casual | Lean Casual (≈70%) |
| Technical ←→ Simple | Lean Simple (≈70%) |
| Bold ←→ Understated | Slight Understated (≈60%) |
| Argentine ←→ Global | Slight Global (≈60%) |

### 1.4 One-liner (ES)

> "Tu asistente de IA que automatiza las operaciones inmobiliarias a través de WhatsApp."

### 1.5 Tagline (EN, supporting)

> "IA que automatiza tus operaciones inmobiliarias por WhatsApp."

---

## 2. The Mark

### 2.1 Anatomy

The AgentFlow mark is a solid Electric Teal disc containing a symmetric sine wave carved as negative space in Deep Navy Black.

**Geometric construction** (in a 256-unit grid):

| Element | Specification |
|---|---|
| Disc center | `(128, 128)` |
| Disc radius | `106` (leaves 18-unit margin to the grid edge) |
| Wave start | `(43, 128)` |
| Wave control point | `(85, 64)` |
| Wave midpoint | `(128, 128)` |
| Wave end | `(213, 128)` (via smooth quadratic reflection) |
| Wave stroke width | `18` units |
| Wave stroke cap | Round |

Reproduced at any size, the relative proportions must remain constant.

### 2.2 Construction principle

The wave is a single symmetric sine cycle: one crest above the horizontal axis, one trough below, both reaching equal amplitude. The crests resolve at the **vertical center** of the disc, never offset. The wave is the **only** internal element.

### 2.3 Mark variants

| Variant | When to use |
|---|---|
| **Primary** — Electric Teal disc, Deep Navy wave | Default. On Deep Navy, Warm Dark, Elevated Surface, and cream backgrounds (≥`#F1F5F9`) |
| **Monochrome dark** — Deep Navy disc, Off-White wave | Pure-white surfaces, single-color print, accessibility-mandated contexts |

A pure outline variant (transparent disc, teal stroke only) is **prohibited**. The solid disc is the family signature.

### 2.4 Clear space

Minimum clear space around the mark equals **one-quarter of the disc diameter** in every direction.

### 2.5 Minimum size

| Context | Minimum |
|---|---|
| Digital display | 16×16 px (use `agentflow-favicon.svg` with optimized stroke) |
| Print | 8mm diameter |
| Reproduction on textured surfaces | 32×32 px / 16mm |

### 2.6 Mark don'ts

- ❌ Do not change the disc color outside the family palette (see §5)
- ❌ Do not change the wave color (always Deep Navy on teal disc, always Off-White on dark disc)
- ❌ Do not rotate, skew, or distort the wave
- ❌ Do not add stroke, shadow, gradient, or glow to the disc
- ❌ Do not place the mark inside another container (square, frame, ring)
- ❌ Do not separate the wave from the disc
- ❌ Do not use the mark as a watermark behind text
- ❌ Do not animate the wave in marketing materials (motion is reserved for product UI only)

---

## 3. Lockups — three-variant surface-aware system

### 3.1 Variants

The horizontal lockup has **three** variants. The variant is chosen by the **target surface**, not by aesthetic preference.

| Variant | File | Background range | Mark | "agent" | "Flow" |
|---|---|---|---|---|---|
| **On dark** (primary) | `agentflow-lockup-horizontal-on-dark.svg` | Deep Navy `#0A0B14` → Elevated Surface `#1A1F2E` | Electric Teal | Off-White `#F1F5F9` | Electric Teal `#00D4AA` |
| **On light** | `agentflow-lockup-horizontal-on-light.svg` | Cream `#F1F5F9` → warm light tones (NOT pure white) | Electric Teal | Deep Navy `#0A0B14` | Electric Teal `#00D4AA` |
| **Mono on light** | `agentflow-lockup-horizontal-mono-on-light.svg` | Pure white `#FFFFFF`, single-color print, WCAG AA-mandated | Monochrome dark | Deep Navy `#0A0B14` | Teal-Dark `#00A98A` |

### 3.2 Surface-guidance rule

The **on-light** lockup is intended for off-white / warm light tones (cream `#F1F5F9` and warmer). It is **NOT for pure white** backgrounds.

The Electric Teal `Flow` word has only **1.9:1 contrast** on pure white — fails WCAG AA even for large text. This is technically legible to typical users but fails:

- Automated accessibility audits (axe, Lighthouse)
- Users with low vision
- High-glare environments (printed marketing in sunlight)
- Public-sector procurement contexts with mandated accessibility

For these situations, use the **mono-on-light** variant which substitutes Teal-Dark `#00A98A` for `Flow` to achieve 3.7:1 contrast (WCAG AA-large compliant).

### 3.3 Lockup selection decision tree

```
Is the background dark (≤#1A1F2E)?
├── YES → on-dark
└── NO  → Is the background pure white (#FFFFFF) OR is WCAG AA mandated?
         ├── YES → mono-on-light
         └── NO  → on-light
```

### 3.4 Lockup proportions

- **Gap between mark and wordmark:** equal to one-quarter of the disc diameter
- **Wordmark visual height:** approximately equal to the disc diameter
- **Vertical alignment:** wordmark center-aligned to the disc

### 3.5 Stacked lockup

Mark above wordmark, both center-aligned to the same vertical axis.

- **Gap between mark and wordmark:** equal to half the disc diameter
- **Wordmark size:** approximately 65% of the disc diameter
- **Use only for:** social profile graphics, posters, vertical layouts where horizontal lockup doesn't fit

### 3.6 Mark only

When the wordmark is unnecessary: favicons, app icons, WhatsApp avatars, sponsor logo bars where space is constrained, internal product UI where the user already knows what app they're in.

### 3.7 Wordmark only

For very narrow contexts: single-line headers, email signatures, breadcrumbs. The wordmark always retains the `agent`/`Flow` weight and color split, never as a single solid color.

### 3.8 Lockup don'ts

- ❌ Don't change the color relationship — `agent` must be lighter, `Flow` must be teal/teal-dark
- ❌ Don't add shadows, outlines, or gradients to the wordmark
- ❌ Don't stretch, compress, or rotate the lockup
- ❌ Don't place the lockup on busy backgrounds without sufficient contrast

---

## 4. Color System — Midnight Operations Palette

The AgentFlow color system balances dark sophistication with warm, inviting accents. The Electric Teal differentiates from overused purple/blue AI gradients. Warm Amber provides a secondary accent that feels human. WhatsApp Green appears only in WhatsApp-related UI.

### 4.1 Backgrounds

| Token | Hex | Use |
|---|---|---|
| Deep Navy Black | `#0A0B14` | Page background, hero sections |
| Warm Dark | `#111827` | Card backgrounds, alternating sections |
| Elevated Surface | `#1A1F2E` | Hover states, modals, dropdowns |

### 4.2 Accent colors

| Token | Hex | Use |
|---|---|---|
| Electric Teal | `#00D4AA` | CTAs, links, active states, highlights, mark disc, "Flow" word on dark/cream |
| **Teal-Dark** *(new in v1.1)* | `#00A98A` | "Flow" word on pure-white backgrounds only — contrast-compliant substitute |
| Warm Amber | `#F59E0B` | Secondary highlights, notifications, reserved for InsureFlow vertical (see §10) |
| Teal Cyan | `#06B6D4` | Gradient endpoint, feature accents, reserved for CashFlow vertical (see §10) |

### 4.3 Text & UI

| Token | Hex | Use |
|---|---|---|
| Off-White | `#F1F5F9` | Headlines, body text, light wordmark, wave in mono variant |
| Muted Silver | `#94A3B8` | Descriptions, secondary text |
| Dim Gray | `#64748B` | Captions, metadata |
| Subtle Edge | `#1E293B` | Cards, dividers |

### 4.4 Semantic colors

| Token | Hex | Use |
|---|---|---|
| WhatsApp Green | `#25D366` | WhatsApp elements, confirmations |
| Soft Red | `#EF4444` | Error states |

### 4.5 Primary gradient

`#00D4AA` Electric Teal → `#06B6D4` Teal Cyan. Used in hero section and feature highlights.

### 4.6 Contrast reference (combined)

| Foreground | Background | Ratio | Notes |
|---|---|---|---|
| `#F1F5F9` | `#0A0B14` | 15:1 ✓ | Body text on dark |
| `#94A3B8` | `#0A0B14` | 7:1 ✓ | Secondary text on dark |
| `#00D4AA` | `#0A0B14` | 8.1:1 ✓ | Electric Teal on dark |
| `#64748B` | `#0A0B14` | 4.6:1 ✓ | Tertiary (large text only) |
| `#00D4AA` | `#FFFFFF` | 1.9:1 ✗ | Electric Teal on pure white — **fails WCAG AA**, use Teal-Dark |
| `#00A98A` | `#FFFFFF` | 3.7:1 ✓ | Teal-Dark on pure white (large text only) |
| `#0A0B14` | `#FFFFFF` | 19.5:1 ✓ | Deep Navy on white |

---

## 5. Color Usage Rules

1. **Accent (Primary) used sparingly** — Electric Teal is only for CTAs, active navigation, and critical highlights. Maximum 10% of any viewport.
2. **Gradient limited use** — Used in hero section and one additional section maximum. Not repeated throughout.
3. **WhatsApp Green is contextual** — ONLY on WhatsApp mockup elements and WhatsApp-specific feature mentions. Do not use as general accent.
4. **Body text: Off-White only** — Always `#F1F5F9` on dark backgrounds. Never pure white `#FFFFFF` (too harsh for dark themes).
5. **Card styling is consistent** — Cards use `#111827` background with 1px solid `#1E293B` border. Hover state elevates to `#1A1F2E` with subtle teal glow.
6. **Contrast ratios are non-negotiable** — All text must exceed WCAG AA (see §4.6).
7. **Pure white backgrounds require Teal-Dark** — When `#FFFFFF` is unavoidable, swap Electric Teal for Teal-Dark `#00A98A` on the `Flow` word.

### Do

- ✅ Use Electric Teal for primary CTAs
- ✅ Use dark backgrounds (`#0A0B14`, `#111827`)
- ✅ Use gradient sparingly for visual interest
- ✅ Use Warm Amber for secondary highlights
- ✅ Maintain 4.5:1+ contrast for all text

### Don't

- ❌ Use purple or blue gradients
- ❌ Use white (`#FFFFFF`) backgrounds without switching to the mono-on-light lockup
- ❌ Use WhatsApp Green as a general accent
- ❌ Mix brand colors with off-palette colors
- ❌ Use light theme or pastel backgrounds

---

## 6. Typography — Geist Sans

### 6.1 Single-font system

**Display, body, UI, labels:** all use **Geist Sans**.

| Property | Value |
|---|---|
| Family | Geist Sans |
| License | MIT (free, no foundry dependency) |
| Source | Open source, designed by Basement Studio for Vercel (2023) |
| Variants used | 400 Regular, 500 Medium, 700 Bold |
| Mono pair (for code/UI) | Geist Mono |
| CDN | `https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5/index.css` |
| Self-host source | `@fontsource/geist-sans` npm package |
| Font-family declaration | `'Geist Sans', 'Geist', system-ui, -apple-system, sans-serif` |

### 6.2 Why Geist replaces v1.0's Satoshi + General Sans

The v1.0 brand guidelines specified Satoshi (display) + General Sans (body) — a two-font system. v1.1 consolidated to Geist Sans alone for the following reasons:

1. **Operational simplicity** — one font, one license, one network request vs two of each
2. **Licensing robustness** — MIT license eliminates the Fontshare dependency that would surface at acquisition diligence
3. **Brand-aspiration alignment** — Geist is Vercel's official font, making the v1.0 "Linear/Vercel craft" brand reference self-fulfilling
4. **Single variable font payload** — smaller font payload than Satoshi + General Sans combined
5. **Geist Mono pair** — Geist's official mono variant provides typographic consistency for code/UI contexts in the product

### 6.3 Type scale (desktop)

| Element | Size | Weight | Line height |
|---|---|---|---|
| Hero headline | 64-80px | 700 Bold | 1.1 |
| Section headline | 40-48px | 700 Bold | 1.2 |
| Sub-headline | 24-28px | 500 Medium | 1.3 |
| Body large | 18-20px | 400 Regular | 1.6 |
| Body regular | 16px | 400 Regular | 1.6 |
| Caption / Meta | 14px | 500 Medium | 1.5 |
| Overline / Label | 12-13px | 500 Medium, letter-spacing `0.08em` | 1.4 |

Mobile: headlines scale to 60-70% of desktop. Body stays at 16px minimum. 8px base grid for all spacing (see §8).

### 6.4 Fonts to avoid

- ❌ **Inter** — too generic, default for every SaaS
- ❌ **Space Grotesk** — overused in AI/tech products
- ❌ **Arial / Roboto** — lack personality, feel corporate
- ❌ **Satoshi + General Sans** — the v1.0 pair; replaced by Geist Sans single-family system (operational complexity > marginal craft benefit)
- ❌ **Any serif fonts** — doesn't match the brand aesthetic

### 6.5 Self-hosting recommendation

For production sites, vendor the Geist Sans WOFF2 files into the application repo rather than relying on jsdelivr at runtime:

```bash
npm install @fontsource/geist-sans
# Then import in your Next.js app:
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/500.css';
import '@fontsource/geist-sans/700.css';
```

This eliminates the runtime CDN dependency for the production site. The SVG brand assets continue to reference jsdelivr for portability (the assets are designed to render correctly when opened anywhere).

---

## 7. Brand Direction — Aesthetic & Visual Identity

### 7.1 "Linear meets WhatsApp"

The page should feel like a premium dev-tool landing page (dark, precise, animated) that reveals a warm, human product underneath. The contrast between sophisticated presentation and approachable product is the design tension that makes it memorable.

### 7.2 Design philosophy

> "Precision technology with Argentine warmth."

### 7.3 What makes AgentFlow unique

1. **WhatsApp as Hero Visual** — Not a generic dashboard screenshot. Show the AI having a real conversation in a WhatsApp-accurate UI mockup.
2. **Flow Animation** — A continuous flowing line/particle trail that connects sections, representing the 'flow' of automated operations.
3. **Split Personality** — Dark tech sophistication for the page chrome + warm WhatsApp green bubbles for the product demonstrations. The contrast IS the brand.

### 7.4 Design references

| Reference | What to borrow |
|---|---|
| Linear.app | Gradient mesh backgrounds, precision typography, radial glow effects |
| Vercel.com | Hero with ambient gradient animation, tech logo bar, CTA confidence |
| Superhuman | Bold metric in headline, premium dark aesthetic, feature breakdowns |
| Raycast | Spotlight-style glowing elements against dark backgrounds, smooth motion |

### 7.5 Motion principles

- All animations use `transform` and `opacity` only (GPU-accelerated)
- Section entrance: fade up + slide 20px, 0.6s, `cubic-bezier(0.16, 1, 0.3, 1)`
- Staggered children: 0.1s delay between each, 0.4s duration
- Card hover: `scale(1.02)` + border glow, 0.2s ease
- Always respect `prefers-reduced-motion`

---

## 8. Spacing & Layout

### 8.1 8px base grid

| Token | Size | Use |
|---|---|---|
| xs | 4px | Tight inline spacing |
| sm | 8px | Component internal padding |
| md | 16px | Between related elements |
| lg | 24px | Between groups |
| xl | 32px | Section internal padding |
| 2xl | 48px | Between sections (mobile) |
| 3xl | 64px | Between sections (tablet) |
| 4xl | 96px | Between sections (desktop) |
| 5xl | 128px | Hero section padding |

Max content width: **1280px centered**. Hero backgrounds extend full width.

### 8.2 Responsive breakpoints

| Breakpoint | Range | Behavior |
|---|---|---|
| Mobile | `<640px` | Single column, stacked, hamburger nav, centered hero |
| Tablet | `640-1024px` | 2-column grids, side-by-side hero |
| Desktop | `1024-1440px` | Full layout, all animations active |
| Wide | `>1440px` | Content max 1280px, backgrounds full width |

---

## 9. Accessibility (WCAG AA)

### 9.1 Contrast standards

See §4.6 for the full contrast reference table. All body text must achieve ≥4.5:1; large text and UI elements ≥3:1.

### 9.2 Implementation checklist

- ✅ All interactive elements keyboard accessible
- ✅ `prefers-reduced-motion` support for all animations
- ✅ Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`
- ✅ `aria-label` on icon-only buttons
- ✅ Focus visible styles (2px solid teal, 2px offset) on all interactive elements
- ✅ Heading levels logical: `h1` in hero, `h2` for sections, `h3` for features
- ✅ Font loading with `font-display: swap`
- ✅ On pure-white surfaces, use the mono-on-light lockup with Teal-Dark `#00A98A` to meet WCAG AA

---

## 10. Family Extension Architecture

AgentFlow is the first product under MS Group LLC. Future vertical AI agent products will share the **mark archetype** and the **typography system**, but each receives a **vertical-specific color**.

### 10.1 Architecture decision (locked)

**Pattern:** Parent-Child brand architecture.

- Each vertical AI agent product has its own complete brand (mark + wordmark + name)
- All vertical marks share the **same wave-in-solid-circle archetype** as their geometric signature
- All verticals share **Geist Sans** as their typography system
- Each vertical has a **dedicated accent color** — never two verticals sharing
- The wordmark follows the `[prefix]Flow` naming pattern, where `Flow` is always bold and matches the vertical's accent color

### 10.2 Why this architecture (not single shared mark)

A single shared mark across verticals creates a carve-out problem: if any vertical is sold (e.g., AgentFlow's planned exit to Real REMAX Group), the buyer either licenses the mark forever, forces a rebrand, or fragments the parent brand. The family architecture avoids this — each vertical owns its specific mark cleanly. Family resemblance is preserved through shared archetype, shared typography, and shared design language, not shared ownership of a specific glyph.

### 10.3 Vertical color reservations

The following vertical-color pairings are reserved. Each color must achieve 8:1+ contrast on Deep Navy Black:

| Vertical | Wordmark prefix | Accent color | Hex |
|---|---|---|---|
| Real estate | `agent` (AgentFlow) | Electric Teal | `#00D4AA` |
| Insurance | `insure` (InsureFlow) | Warm Amber | `#F59E0B` |
| Healthcare | `care` (CareFlow) | Coral | `#F87171` |
| Finance | `cash` (CashFlow) | Teal Cyan | `#06B6D4` |
| Legal | *(reserved, TBD)* | — | — |
| Logistics | *(reserved, TBD)* | — | — |

New verticals must choose a color **at least 45° away on the hue wheel** from any already-reserved color, to ensure visual distinguishability in family contexts (e.g., a sponsor bar showing multiple verticals).

### 10.4 Vertical mark construction rules

To construct a sibling vertical mark:

1. Take `agentflow-mark.svg` as the template
2. Replace the disc fill color (`#00D4AA`) with the vertical's reserved accent color
3. Keep the wave color (`#0A0B14`) and all geometry unchanged
4. Build the wordmark using Geist Sans 400/700, same `agent`/`Flow` weight split pattern, with the vertical's prefix and accent color on the `Flow` word
5. Generate all lockup variants (on-dark, on-light, mono-on-light), favicon, WhatsApp avatar, OG image following AgentFlow's templates

The wave geometry **must remain identical** across the family. Variation by color alone is the family signature. Geometric variants per vertical are explicitly **not allowed** without a brand guidelines revision approved by both MS Group co-founders.

### 10.5 What stays with each vertical at acquisition

If a vertical (e.g., AgentFlow) is acquired by a third party (e.g., Real REMAX Group):

- **The acquirer receives:** the vertical-specific mark, the vertical-specific wordmark, the brand name (e.g., "AgentFlow"), the domain (e.g., agentflow.casa), and all marketing collateral specific to that vertical
- **MS Group retains:** the wave archetype itself (as design language), the family extension rights for all other verticals, the parent brand identity, and the right to launch new verticals using the same archetype with new colors
- **Geist Sans:** non-exclusive; both parties continue to use Geist Sans (it's MIT-licensed, not proprietary to either)

The wave archetype is licensed to each vertical as part of the construction rules, not transferred. If the acquirer wishes to retain perpetual rights to the archetype itself beyond the AgentFlow-specific application, that becomes a separate negotiation point at acquisition.

### 10.6 MS Group parent identity (out of scope for v1.2)

The MS Group parent brand identity is separate from the vertical brands. MS Group may use the wave archetype in a desaturated or monochrome treatment as its own identity, documented in a separate MS Group brand specification. The two should never appear at equal visual weight in marketing materials — verticals lead, MS Group attributes (e.g., "an MS Group company" in fine print).

---

## 11. Application checklist for new vertical launches

When launching a new vertical AI agent product, verify before public launch:

- [ ] Vertical name follows `[prefix]Flow` pattern (lowercase prefix, capital F)
- [ ] Accent color reserved in §10.3, contrast verified at 8:1+ on Deep Navy
- [ ] Mark constructed from `agentflow-mark.svg` template with disc color replaced
- [ ] All three lockup variants generated (on-dark, on-light, mono-on-light)
- [ ] Stacked lockup and wordmark-only variants generated
- [ ] Favicon (16×16/32×32) optimized
- [ ] WhatsApp avatar 640×640 PNG exported
- [ ] OG image 1200×630 PNG exported
- [ ] Apple-touch-icon (180×180) and Android chrome icons (192/512) exported
- [ ] Vertical-specific brand guidelines markdown produced (this template, with §2-4 customized to the vertical color)
- [ ] Domain registered (`[prefix]flow.casa` or equivalent)
- [ ] Brand color tokens added to shared design tokens repository
- [ ] Both MS Group co-founders sign off

---

## Document control

| Version | Date | Change | Authors |
|---|---|---|---|
| 1.0 | 2026-03 | Initial brand guidelines (PDF). Covered identity, color system, color usage, typography (Satoshi + General Sans), brand direction, spacing, accessibility. | Martin D'Elia, Soledad |
| 1.1 | 2026-05-13 | Added §1 Mark anatomy. Revised §2 to three-variant surface-aware lockup system with surface-guidance rule. Introduced Teal-Dark `#00A98A` for pure-white backgrounds. **Replaced §4 Typography**: Satoshi + General Sans → Geist Sans single-family system. Added §5 Family Extension Architecture documenting the parent-child brand pattern for cross-vertical reuse. | Martin D'Elia |
| 1.2 | 2026-05-17 | **Consolidation release.** Single authoritative document. All v1.1 decisions preserved verbatim. Re-integrated from v1.0 PDF: Brand Identity (§1), full Color System (§4), Color Usage Rules (§5), Brand Direction (§7), Spacing & Layout (§8), Accessibility (§9). Renumbered all sections. No new design decisions. | Martin D'Elia |
