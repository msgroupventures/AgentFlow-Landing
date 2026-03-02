# AgentFlow Landing Page

AI-powered real estate operations platform for RE/MAX agents in Argentina. This repo contains the marketing landing page at agentflow.casa.

## Tech Stack

- Next.js 15 (App Router, TypeScript strict mode)
- Tailwind CSS v4
- Framer Motion for animations
- Deploy target: Vercel

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint
npm run typecheck    # TypeScript check
```

## Project Structure

```
├── BRIEF.md         # Product context, audience, tone — READ FIRST
├── FEATURES.md      # Feature inventory with copy angles
├── DESIGN.md        # Visual identity, colors, typography, animations
├── COPY.md          # All copy blocks (Spanish es-AR), structured data
├── src/
│   ├── app/         # Next.js App Router pages
│   ├── components/  # React components (one per section)
│   ├── lib/         # Utilities, constants, types
│   └── styles/      # Global styles, font imports
└── public/          # Static assets, OG images, favicons
```

## Design System — CRITICAL CONSTRAINTS

This project uses the Anthropic frontend-design skill. Read `.claude/skills/frontend-design/SKILL.md` before writing any frontend code.

**Aesthetic direction:** Dark, premium, Linear/Vercel-inspired with WhatsApp warmth. Full spec in DESIGN.md.

**Non-negotiable rules:**
- Dark theme ONLY. Primary background: `#0A0B14`. Never use white/light backgrounds.
- Accent color: Electric Teal `#00D4AA`. Never use purple gradients or generic blue.
- Typography: Satoshi for headlines, General Sans for body. Never use Inter, Arial, Roboto, or Space Grotesk.
- Body text: `#F1F5F9` on dark backgrounds. Never pure white `#FFFFFF`.
- All user-facing copy is Spanish (es-AR) using "vos" form. Pull exact copy from COPY.md.
- All animations use `transform` and `opacity` only. Respect `prefers-reduced-motion`.

## Workflow

1. Before any design/UI work, read the frontend-design skill AND the 4 spec files (BRIEF.md, FEATURES.md, DESIGN.md, COPY.md).
2. Build section by section. Show each section for review before proceeding.
3. After completing all sections, do a polish pass: accessibility (WCAG AA), responsive (640/1024/1440px breakpoints), Lighthouse 95+.

## Copy & Content Rules

- Never write placeholder copy like "Lorem ipsum" or "Your tagline here" — all copy exists in COPY.md.
- Never invent features or metrics — all data comes from FEATURES.md.
- FAQ section must include `FAQPage` schema.org structured data.
- Include `SoftwareApplication` and `Organization` schema.org in page head.
- OG meta tags are defined in COPY.md — use them exactly.

## Component Conventions

- One component per file, named by section: `Hero.tsx`, `ProblemStatement.tsx`, `HowItWorks.tsx`, etc.
- Use CSS-generated visuals (gradients, noise, grids) — no stock images or placeholder illustrations.
- WhatsApp mockup must look like a real WhatsApp chat: green outgoing bubbles, white incoming, typing indicators, double blue checkmarks.
- Icons: Lucide React, consistent 24px line style, teal colored.

## What NOT to Do

- Don't use a light/white theme; prefer dark backgrounds with the palette in DESIGN.md.
- Don't use generic AI SaaS illustrations or stock photos; prefer CSS-generated visuals.
- Don't add pricing section — this is a waitlist page.
- Don't use emoji in headlines — only inside WhatsApp mockup conversations.
- Don't install UI component libraries (shadcn, Chakra, MUI) — use custom Tailwind components.
