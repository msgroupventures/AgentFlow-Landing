# Claude Code Prompt — AgentFlow Landing Page

## Prompt

```
Read the 4 specification files in the project root before writing any code:
- BRIEF.md (product context, audience, tone)
- FEATURES.md (feature inventory with copy angles)
- DESIGN.md (visual identity, colors, typography, animations, section-by-section direction)
- COPY.md (all copy blocks in Spanish, structured data templates)

Build a single-page landing page for AgentFlow (agentflow.casa) — an AI-powered operations platform for RE/MAX real estate agents in Argentina.

## Tech Stack
- Next.js 15 App Router (single page, no routing needed beyond index)
- Tailwind CSS v4
- Framer Motion for animations
- TypeScript strict mode
- Deploy target: Vercel

## Critical Design Requirements (read DESIGN.md fully before starting)

1. DARK THEME — base background #0A0B14, NOT white. Reference the "Midnight Operations" palette in DESIGN.md.
2. Typography: Use "Satoshi" (from fontsource or CDN) for headlines and "General Sans" for body. Do NOT use Inter, Arial, Roboto, or Space Grotesk.
3. Accent color: Electric Teal #00D4AA for CTAs and highlights. NOT purple, NOT blue gradients.
4. The HERO must feature an animated WhatsApp phone mockup showing a real conversation (use the script from COPY.md Section 5). Messages should appear sequentially with typing indicators.
5. Hero background: animated radial gradient mesh (teal/cyan glow pulsing on dark), similar to Linear.app hero energy.
6. All user-facing copy is in Spanish (es-AR) using "vos" form. Pull exact copy from COPY.md.
7. Smooth scroll-triggered entrance animations on all sections (fade up + slide, staggered children).
8. The page MUST include schema.org structured data (SoftwareApplication, Organization, FAQPage) from COPY.md.

## Page Sections (in order)
1. Sticky nav (transparent → solid on scroll, blur backdrop)
2. Hero (headline + sub-headline + waitlist CTA + WhatsApp phone mockup)
3. Problem statement (stat cards: "3-4 hs/día", "30+ min", "∞ mensajes")
4. How it works (3-step flow with connecting animated line)
5. Primary features (3 alternating left-right showcases: visits, documents, pipeline)
6. WhatsApp demo (centered phone mockup with auto-playing conversation)
7. Secondary feature grid (2x3 grid: calendar, authorizations, offers, reservations, documentation, voice)
8. Tech credibility (grayscale logo bar: Anthropic, Meta, Google, Supabase, Next.js, Railway)
9. Numbers/metrics (animated count-up: 79, <2 min, 9, 10)
10. FAQ (accordion with 8 questions from COPY.md)
11. Final CTA (email input + "Unirme" button)
12. Footer (3-column)

## Waitlist Form
- Simple email capture (input + button)
- For now, just console.log the email on submit and show the success state from COPY.md
- We'll wire up the backend later

## Performance
- Target 95+ Lighthouse
- All animations GPU-accelerated (transform/opacity only)
- Respect prefers-reduced-motion
- Font loading with font-display: swap

## What NOT to do
- Do NOT use a white/light theme
- Do NOT use generic placeholder copy — all copy is in COPY.md
- Do NOT use stock illustrations or placeholder images — use CSS-generated visuals, gradients, and icons
- Do NOT add a pricing section
- Do NOT use emoji in headlines (only in the WhatsApp mockup conversation)

Start by creating the project structure, installing dependencies, and building the page section by section starting with the hero. Show me the hero section first before proceeding to the rest.
```

## Usage Notes

- **Drop the 4 .md files** (BRIEF.md, FEATURES.md, DESIGN.md, COPY.md) into the project root before running this prompt
- The prompt asks Claude Code to **read all 4 files first** — this is critical for context
- It requests the **hero section first** as a checkpoint — review it before letting it continue
- The "What NOT to do" section prevents the most common Claude Code failure modes (defaulting to light theme, using Inter font, generic purple gradients)
- The waitlist form is intentionally a stub — you can wire it to Supabase or a simple API later

## Follow-up Prompts (after hero is approved)

### Continue building:
```
The hero looks good. Continue building sections 3 through 7 (problem statement, how it works, primary features, WhatsApp demo, secondary feature grid). Follow the exact copy from COPY.md and the design direction from DESIGN.md for each section.
```

### After all sections are built:
```
Now add sections 8-12 (tech credibility, numbers, FAQ, final CTA, footer). Include the schema.org structured data from COPY.md in the page head. Make sure the FAQ uses the FAQPage schema and the accordion is accessible (keyboard navigable, aria-expanded).
```

### Polish pass:
```
Do a final polish pass on the full page:
1. Verify all animations respect prefers-reduced-motion
2. Check color contrast meets WCAG AA (use the values from DESIGN.md accessibility section)
3. Add smooth scroll behavior for nav anchor links
4. Add the OG meta tags from COPY.md
5. Ensure mobile responsive at all breakpoints (640, 1024, 1440px)
6. Run a Lighthouse audit and fix any issues below 95
```

### WhatsApp mockup refinement:
```
Refine the WhatsApp conversation mockup in the hero and demo sections:
- Make it look like a real WhatsApp chat (green outgoing bubbles, white incoming, gray background, double blue checkmarks, timestamps)
- Messages should appear one by one with a 1.5s delay and a typing indicator ("...") animation between each message
- The conversation should auto-play when scrolled into view (use Intersection Observer)
- On mobile, the phone mockup should be centered and full-width (no rotation)
```
