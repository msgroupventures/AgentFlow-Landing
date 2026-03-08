"""
AgentFlow Brand Guideline PDF Generator
Generates a comprehensive brand guideline document.
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor, Color, white, black
from reportlab.pdfgen import canvas
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# ─── Brand Colors ─────────────────────────────────────────────
DEEP_NAVY = HexColor("#0A0B14")
WARM_DARK = HexColor("#111827")
ELEVATED = HexColor("#1A1F2E")
TEAL = HexColor("#00D4AA")
AMBER = HexColor("#F59E0B")
CYAN = HexColor("#06B6D4")
OFF_WHITE = HexColor("#F1F5F9")
MUTED_SILVER = HexColor("#94A3B8")
DIM_GRAY = HexColor("#64748B")
BORDER = HexColor("#1E293B")
WHATSAPP = HexColor("#25D366")
ERROR_RED = HexColor("#EF4444")

W, H = A4  # 595.28 x 841.89 points

# ─── Helpers ──────────────────────────────────────────────────

def draw_bg(c, color=DEEP_NAVY):
    c.setFillColor(color)
    c.rect(0, 0, W, H, fill=True, stroke=False)


def draw_color_swatch(c, x, y, w, h, color, name, hex_code, usage=""):
    """Draw a rounded color swatch with label."""
    c.setFillColor(color)
    c.roundRect(x, y, w, h, 6, fill=True, stroke=False)

    # Determine text color based on luminance
    r, g, b = color.red, color.green, color.blue
    lum = 0.299 * r + 0.587 * g + 0.114 * b
    text_col = DEEP_NAVY if lum > 0.5 else OFF_WHITE

    # Name inside swatch
    c.setFillColor(text_col)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(x + 8, y + h - 18, name)
    c.setFont("Helvetica", 8)
    c.drawString(x + 8, y + h - 32, hex_code)

    # Usage below swatch
    if usage:
        c.setFillColor(MUTED_SILVER)
        c.setFont("Helvetica", 7)
        c.drawString(x, y - 13, usage)


def draw_section_title(c, text, y, color=TEAL):
    """Draw a section overline label."""
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(50, y, text.upper())
    # Underline
    c.setStrokeColor(color)
    c.setLineWidth(1.5)
    c.line(50, y - 4, 50 + len(text) * 6.5, y - 4)


def draw_heading(c, text, y, size=28, color=OFF_WHITE):
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", size)
    c.drawString(50, y, text)


def draw_body(c, text, x, y, max_width=495, size=10, color=MUTED_SILVER, leading=15):
    """Draw wrapped body text."""
    c.setFillColor(color)
    c.setFont("Helvetica", size)
    words = text.split()
    lines = []
    current_line = ""
    for word in words:
        test = current_line + (" " if current_line else "") + word
        if c.stringWidth(test, "Helvetica", size) > max_width:
            lines.append(current_line)
            current_line = word
        else:
            current_line = test
    if current_line:
        lines.append(current_line)

    for i, line in enumerate(lines):
        c.drawString(x, y - i * leading, line)
    return y - len(lines) * leading


def draw_logo(c, x, y, scale=1.0):
    """Draw the AgentFlow logo text treatment."""
    size = 32 * scale
    c.setFont("Helvetica", size)
    c.setFillColor(OFF_WHITE)
    w1 = c.stringWidth("agent", "Helvetica", size)
    c.drawString(x, y, "agent")
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", size)
    c.drawString(x + w1, y, "Flow")


def draw_page_number(c, num, total):
    c.setFillColor(DIM_GRAY)
    c.setFont("Helvetica", 8)
    c.drawRightString(W - 50, 30, f"{num} / {total}")


# ─── Page 1: Cover ───────────────────────────────────────────

def page_cover(c):
    draw_bg(c)

    # Decorative gradient circles
    for i in range(5):
        alpha = 0.03 + i * 0.01
        col = Color(0, 0.83, 0.67, alpha)  # Teal with low alpha
        c.setFillColor(col)
        c.circle(W * 0.7, H * 0.6, 200 + i * 60, fill=True, stroke=False)

    for i in range(3):
        alpha = 0.02 + i * 0.01
        col = Color(0.02, 0.71, 0.83, alpha)  # Cyan with low alpha
        c.setFillColor(col)
        c.circle(W * 0.3, H * 0.4, 150 + i * 50, fill=True, stroke=False)

    # Logo
    draw_logo(c, 50, H - 80, scale=1.0)

    # Main title
    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica-Bold", 48)
    c.drawString(50, H * 0.55, "Brand")
    c.drawString(50, H * 0.55 - 58, "Guidelines")

    # Version info
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(50, H * 0.55 - 120, "VERSION 1.0")

    c.setFillColor(MUTED_SILVER)
    c.setFont("Helvetica", 11)
    c.drawString(50, H * 0.55 - 145, "March 2026")

    # Tagline
    c.setFillColor(DIM_GRAY)
    c.setFont("Helvetica", 10)
    c.drawString(50, 80, "agentflow.casa")
    c.drawString(50, 65, "IA que automatiza tus operaciones inmobiliarias por WhatsApp.")

    # Decorative border line
    c.setStrokeColor(TEAL)
    c.setLineWidth(2)
    c.line(50, H - 100, W - 50, H - 100)


# ─── Page 2: Brand Identity ─────────────────────────────────

def page_brand_identity(c):
    draw_bg(c)
    draw_page_number(c, 2, 8)

    draw_section_title(c, "Brand Identity", H - 60)
    draw_heading(c, "Who We Are", H - 100)

    y = H - 140
    y = draw_body(c, (
        "AgentFlow is an AI-powered operations platform built specifically for RE/MAX real estate agents "
        "in Argentina. We combine world-class technology with the human, relationship-driven reality of "
        "Argentine real estate. Our AI agent handles the entire operational lifecycle through WhatsApp -- "
        "the dominant communication channel in the market."
    ), 50, y, max_width=495)

    y -= 30
    draw_section_title(c, "Brand Personality", y)
    y -= 35

    # Personality traits
    traits = [
        ("Precision Technology", "World-class AI engineering under the hood, built with the same craft as Linear, Vercel, or Stripe."),
        ("Argentine Warmth", "Rooted in the human, relationship-driven reality of Argentine real estate. Approachable to a 45-year-old RE/MAX agent in Belgrano."),
        ("Quietly Confident", "Not a flashy startup nor a corporate vendor. Think: the best hire your franchise ever made, who happens to be an AI."),
        ("WhatsApp-Native", "Works where agents already live. No new app to learn. The AI speaks their language (Spanish es-AR, vos form)."),
    ]

    for title, desc in traits:
        # Teal dot
        c.setFillColor(TEAL)
        c.circle(60, y + 3, 3, fill=True, stroke=False)
        c.setFillColor(OFF_WHITE)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(72, y, title)
        y -= 18
        y = draw_body(c, desc, 72, y, max_width=470, size=9)
        y -= 20

    # Tone spectrum
    y -= 15
    draw_section_title(c, "Tone Spectrum", y)
    y -= 40

    spectrums = [
        ("Professional", "Casual", 0.7),
        ("Technical", "Simple", 0.4),
        ("Bold", "Understated", 0.6),
        ("Argentine", "Global", 0.55),
    ]

    for left, right, pos in spectrums:
        c.setFillColor(DIM_GRAY)
        c.setFont("Helvetica", 8)
        c.drawString(72, y + 3, left)
        c.drawRightString(W - 72, y + 3, right)

        # Track
        track_x = 150
        track_w = W - 250
        c.setFillColor(BORDER)
        c.roundRect(track_x, y, track_w, 8, 4, fill=True, stroke=False)

        # Indicator
        c.setFillColor(TEAL)
        indicator_x = track_x + track_w * pos - 6
        c.roundRect(indicator_x, y - 2, 12, 12, 6, fill=True, stroke=False)

        y -= 30

    # One-liner
    y -= 10
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.line(50, y + 10, W - 50, y + 10)
    y -= 15
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(50, y, "ONE-LINER (ES)")
    y -= 20
    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica", 12)
    c.drawString(50, y, '"Tu asistente de IA que automatiza las operaciones')
    y -= 17
    c.drawString(50, y, 'inmobiliarias a traves de WhatsApp."')


# ─── Page 3: Logo ────────────────────────────────────────────

def page_logo(c):
    draw_bg(c)
    draw_page_number(c, 3, 8)

    draw_section_title(c, "Logo", H - 60)
    draw_heading(c, "Brand Name Treatment", H - 100)

    y = H - 140
    y = draw_body(c, (
        'The AgentFlow logo uses a wordmark treatment: "agent" in regular weight followed by "Flow" in bold '
        'with the accent teal color. The "Flow" concept is central to the brand -- it visualizes movement, '
        'continuity, and automation.'
    ), 50, y, max_width=495)

    # Primary logo (dark background)
    y -= 40
    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(50, y, "PRIMARY (ON DARK)")

    y -= 15
    c.setFillColor(WARM_DARK)
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.roundRect(50, y - 80, 220, 80, 8, fill=True, stroke=True)
    draw_logo(c, 70, y - 55, scale=1.0)

    # Monochrome logo (light)
    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(310, y + 65, "MONOCHROME (ON LIGHT)")

    c.setFillColor(HexColor("#F8FAFC"))
    c.setStrokeColor(HexColor("#E2E8F0"))
    c.roundRect(310, y - 80, 220, 80, 8, fill=True, stroke=True)
    c.setFont("Helvetica", 32)
    c.setFillColor(HexColor("#334155"))
    w1 = c.stringWidth("agent", "Helvetica", 32)
    c.drawString(330, y - 55, "agent")
    c.setFont("Helvetica-Bold", 32)
    c.setFillColor(HexColor("#0F172A"))
    c.drawString(330 + w1, y - 55, "Flow")

    # Logo clear space
    y -= 130
    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(50, y, "CLEAR SPACE")
    y -= 18
    y = draw_body(c, (
        "Maintain a minimum clear space around the logo equal to the height of the letter 'F' in Flow. "
        "This ensures the logo remains legible and impactful in all contexts."
    ), 50, y, max_width=495, size=9)

    # Clear space visual
    y -= 30
    c.setStrokeColor(TEAL)
    c.setDash(3, 3)
    c.setLineWidth(0.5)
    c.rect(100, y - 60, 280, 70, fill=False, stroke=True)
    c.setDash()

    # Inner logo
    draw_logo(c, 130, y - 40, scale=0.8)

    # Arrows for clear space
    c.setFillColor(DIM_GRAY)
    c.setFont("Helvetica", 7)
    c.drawCentredString(240, y + 15, "clear space = cap height of F")

    # Minimum size
    y -= 100
    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(50, y, "MINIMUM SIZE")
    y -= 18
    y = draw_body(c, (
        "The logo should never be reproduced smaller than 100px wide for digital or 25mm for print. "
        "At smaller sizes, the distinction between 'agent' and 'Flow' becomes illegible."
    ), 50, y, max_width=495, size=9)

    # Size examples
    y -= 25
    draw_logo(c, 50, y, scale=0.5)
    c.setFillColor(DIM_GRAY)
    c.setFont("Helvetica", 7)
    c.drawString(170, y + 5, "Minimum: 100px / 25mm")

    # Don'ts
    y -= 60
    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(50, y, "LOGO DON'TS")
    y -= 20

    donts = [
        "Don't change the color relationship (agent must be lighter, Flow must be teal/dark)",
        "Don't add effects like shadows, outlines, or gradients to the wordmark",
        "Don't stretch, compress, or rotate the logo",
        "Don't place the logo on busy backgrounds without sufficient contrast",
    ]

    for d in donts:
        c.setFillColor(ERROR_RED)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(55, y, "x")
        c.setFillColor(MUTED_SILVER)
        c.setFont("Helvetica", 9)
        c.drawString(72, y, d)
        y -= 18


# ─── Page 4: Color Palette ───────────────────────────────────

def page_colors(c):
    draw_bg(c)
    draw_page_number(c, 4, 8)

    draw_section_title(c, "Color System", H - 60)
    draw_heading(c, "Midnight Operations Palette", H - 100)

    y = H - 140
    y = draw_body(c, (
        "The AgentFlow color system balances dark sophistication with warm, inviting accents. The Electric "
        "Teal differentiates from overused purple/blue AI gradients. Warm Amber provides a secondary accent "
        "that feels human. WhatsApp Green appears only in WhatsApp-related UI."
    ), 50, y, max_width=495)

    # Backgrounds
    y -= 35
    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(50, y, "BACKGROUNDS")
    y -= 15

    sw = 155
    sh = 80
    gap = 15

    draw_color_swatch(c, 50, y - sh, sw, sh, DEEP_NAVY, "Deep Navy Black", "#0A0B14", "Page background, hero sections")
    draw_color_swatch(c, 50 + sw + gap, y - sh, sw, sh, WARM_DARK, "Warm Dark", "#111827", "Card backgrounds, alternating sections")
    draw_color_swatch(c, 50 + 2 * (sw + gap), y - sh, sw, sh, ELEVATED, "Elevated Surface", "#1A1F2E", "Hover states, modals, dropdowns")

    # Accents
    y -= sh + 40
    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(50, y, "ACCENT COLORS")
    y -= 15

    draw_color_swatch(c, 50, y - sh, sw, sh, TEAL, "Electric Teal", "#00D4AA", "CTAs, links, active states, highlights")
    draw_color_swatch(c, 50 + sw + gap, y - sh, sw, sh, AMBER, "Warm Amber", "#F59E0B", "Secondary highlights, notifications")
    draw_color_swatch(c, 50 + 2 * (sw + gap), y - sh, sw, sh, CYAN, "Teal Cyan", "#06B6D4", "Gradient endpoint, feature accents")

    # Text & UI
    y -= sh + 40
    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(50, y, "TEXT & UI")
    y -= 15

    sw2 = 115
    draw_color_swatch(c, 50, y - sh, sw2, sh, OFF_WHITE, "Off-White", "#F1F5F9", "Headlines, body text")
    draw_color_swatch(c, 50 + sw2 + gap, y - sh, sw2, sh, MUTED_SILVER, "Muted Silver", "#94A3B8", "Descriptions, secondary")
    draw_color_swatch(c, 50 + 2 * (sw2 + gap), y - sh, sw2, sh, DIM_GRAY, "Dim Gray", "#64748B", "Captions, metadata")
    draw_color_swatch(c, 50 + 3 * (sw2 + gap), y - sh, sw2, sh, BORDER, "Subtle Edge", "#1E293B", "Cards, dividers")

    # Semantic
    y -= sh + 40
    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(50, y, "SEMANTIC COLORS")
    y -= 15

    draw_color_swatch(c, 50, y - sh, sw, sh, WHATSAPP, "WhatsApp Green", "#25D366", "WhatsApp elements, confirmations")
    draw_color_swatch(c, 50 + sw + gap, y - sh, sw, sh, ERROR_RED, "Soft Red", "#EF4444", "Error states")

    # Gradient
    y -= sh + 40
    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(50, y, "PRIMARY GRADIENT")
    y -= 15

    # Draw gradient bar
    grad_w = 400
    grad_h = 40
    steps = 80
    for i in range(steps):
        t = i / steps
        r = TEAL.red + (CYAN.red - TEAL.red) * t
        g = TEAL.green + (CYAN.green - TEAL.green) * t
        b = TEAL.blue + (CYAN.blue - TEAL.blue) * t
        c.setFillColor(Color(r, g, b))
        sx = 50 + i * (grad_w / steps)
        c.rect(sx, y - grad_h, grad_w / steps + 1, grad_h, fill=True, stroke=False)

    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(50, y - grad_h - 15, "#00D4AA")
    c.drawRightString(50 + grad_w, y - grad_h - 15, "#06B6D4")
    c.setFillColor(DIM_GRAY)
    c.setFont("Helvetica", 8)
    c.drawCentredString(50 + grad_w / 2, y - grad_h - 15, "Teal to Cyan  --  Hero gradient, feature highlights")


# ─── Page 5: Color Usage Rules ───────────────────────────────

def page_color_rules(c):
    draw_bg(c)
    draw_page_number(c, 5, 8)

    draw_section_title(c, "Color Usage", H - 60)
    draw_heading(c, "Rules & Application", H - 100)

    y = H - 150
    rules = [
        ("Accent (Primary) used sparingly",
         "Only for CTAs, active navigation, and critical highlights. Maximum 10% of any viewport."),
        ("Gradient limited use",
         "Used in hero section and one additional section maximum. Not repeated throughout."),
        ("WhatsApp Green is contextual",
         "ONLY on WhatsApp mockup elements and WhatsApp-specific feature mentions. Do not use as general accent."),
        ("Body text: Off-White only",
         "Always #F1F5F9 on dark backgrounds. Never pure white #FFFFFF (too harsh for dark themes)."),
        ("Card styling is consistent",
         "Cards use #111827 background with 1px solid #1E293B border. Hover state elevates to #1A1F2E with subtle teal glow."),
        ("Contrast ratios are non-negotiable",
         "#F1F5F9 on #0A0B14 = 15:1. #94A3B8 on #0A0B14 = 7:1. #00D4AA on #0A0B14 = 8:1. All exceed WCAG AA."),
    ]

    for i, (title, desc) in enumerate(rules):
        # Number
        c.setFillColor(TEAL)
        c.setFont("Helvetica-Bold", 18)
        c.drawString(50, y, f"{i + 1:02d}")

        c.setFillColor(OFF_WHITE)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(85, y, title)
        y -= 18
        y = draw_body(c, desc, 85, y, max_width=450, size=9)
        y -= 28

    # Do / Don't section
    y -= 10
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.line(50, y + 10, W - 50, y + 10)
    y -= 10

    # DO column
    half_w = (W - 130) / 2
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(50, y, "DO")
    y_do = y - 22

    dos = [
        "Use Electric Teal for primary CTAs",
        "Use dark backgrounds (#0A0B14, #111827)",
        "Use gradient sparingly for visual interest",
        "Use Warm Amber for secondary highlights",
        "Maintain 4.5:1+ contrast for all text",
    ]

    for d in dos:
        c.setFillColor(TEAL)
        c.setFont("Helvetica-Bold", 10)
        c.drawString(55, y_do, "+")
        c.setFillColor(MUTED_SILVER)
        c.setFont("Helvetica", 9)
        c.drawString(72, y_do, d)
        y_do -= 18

    # DON'T column
    c.setFillColor(ERROR_RED)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(310, y, "DON'T")
    y_dont = y - 22

    donts = [
        "Use purple or blue gradients",
        "Use white (#FFFFFF) backgrounds",
        "Use WhatsApp Green as general accent",
        "Mix brand colors with off-palette colors",
        "Use light theme or pastel backgrounds",
    ]

    for d in donts:
        c.setFillColor(ERROR_RED)
        c.setFont("Helvetica-Bold", 10)
        c.drawString(315, y_dont, "x")
        c.setFillColor(MUTED_SILVER)
        c.setFont("Helvetica", 9)
        c.drawString(332, y_dont, d)
        y_dont -= 18


# ─── Page 6: Typography ──────────────────────────────────────

def page_typography(c):
    draw_bg(c)
    draw_page_number(c, 6, 8)

    draw_section_title(c, "Typography", H - 60)
    draw_heading(c, "Type System", H - 100)

    y = H - 150

    # Display font
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(50, y, "DISPLAY / HEADLINES")
    y -= 25

    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica-Bold", 36)
    c.drawString(50, y, "Satoshi")
    y -= 20
    c.setFillColor(MUTED_SILVER)
    c.setFont("Helvetica", 10)
    c.drawString(50, y, "Weights: 400 Regular  |  500 Medium  |  700 Bold")
    y -= 15
    c.drawString(50, y, "Source: fontshare.com  |  Fallback: system-ui, -apple-system, sans-serif")
    y -= 15
    c.drawString(50, y, "Character: Modern geometric sans with personality. Not generic, not quirky.")

    # Body font
    y -= 40
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(50, y, "BODY / UI")
    y -= 25

    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica", 32)
    c.drawString(50, y, "General Sans")
    y -= 20
    c.setFillColor(MUTED_SILVER)
    c.setFont("Helvetica", 10)
    c.drawString(50, y, "Weights: 400 Regular  |  500 Medium  |  600 Semibold")
    y -= 15
    c.drawString(50, y, "Line height: 1.6 for body, 1.2 for headlines")
    y -= 15
    c.drawString(50, y, "Character: Clean, highly legible at small sizes, slightly rounded for warmth.")

    # Type scale table
    y -= 40
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(50, y, "TYPE SCALE (DESKTOP)")
    y -= 5

    # Table header
    y -= 20
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.line(50, y - 2, W - 50, y - 2)

    c.setFillColor(DIM_GRAY)
    c.setFont("Helvetica-Bold", 8)
    cols = [50, 200, 290, 370, 450]
    headers = ["Element", "Size", "Weight", "Line Height", "Font"]
    for col, header in zip(cols, headers):
        c.drawString(col, y, header)

    y -= 4
    c.line(50, y - 2, W - 50, y - 2)

    rows = [
        ("Hero headline", "64-80px", "700 Bold", "1.1", "Satoshi"),
        ("Section headline", "40-48px", "700 Bold", "1.2", "Satoshi"),
        ("Sub-headline", "24-28px", "600 Semi", "1.3", "Satoshi"),
        ("Body large", "18-20px", "400 Regular", "1.6", "General Sans"),
        ("Body regular", "16px", "400 Regular", "1.6", "General Sans"),
        ("Caption / Meta", "14px", "500 Medium", "1.5", "General Sans"),
        ("Overline / Label", "12-13px", "600 Semi", "1.4", "General Sans"),
    ]

    c.setFont("Helvetica", 9)
    for row in rows:
        y -= 20
        c.setFillColor(OFF_WHITE)
        c.drawString(cols[0], y, row[0])
        c.setFillColor(MUTED_SILVER)
        for j in range(1, 5):
            c.drawString(cols[j], y, row[j])

    y -= 8
    c.line(50, y - 2, W - 50, y - 2)

    # Fonts to avoid
    y -= 30
    c.setFillColor(ERROR_RED)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(50, y, "FONTS TO AVOID")
    y -= 20

    avoid = [
        "Inter -- too generic, default for every SaaS",
        "Space Grotesk -- overused in AI/tech products",
        "Arial / Roboto -- lack personality, feel corporate",
        "Any serif fonts -- doesn't match the brand aesthetic",
    ]

    for item in avoid:
        c.setFillColor(ERROR_RED)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(55, y, "x")
        c.setFillColor(MUTED_SILVER)
        c.setFont("Helvetica", 9)
        c.drawString(72, y, item)
        y -= 16

    # Mobile note
    y -= 20
    c.setFillColor(DIM_GRAY)
    c.setFont("Helvetica", 8)
    c.drawString(50, y, "MOBILE: Headlines scale to 60-70% of desktop. Body stays at 16px minimum. All spacing uses 8px base grid.")


# ─── Page 7: Brand Direction ─────────────────────────────────

def page_brand_direction(c):
    draw_bg(c)
    draw_page_number(c, 7, 8)

    draw_section_title(c, "Brand Direction", H - 60)
    draw_heading(c, "Aesthetic & Visual Identity", H - 100)

    y = H - 145

    # Core concept
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(50, y, '"Linear meets WhatsApp"')
    y -= 22
    y = draw_body(c, (
        "The page should feel like a premium dev-tool landing page (dark, precise, animated) that reveals "
        "a warm, human product underneath. The contrast between sophisticated presentation and approachable "
        "product is the design tension that makes it memorable."
    ), 50, y, max_width=495)

    # Design philosophy
    y -= 30
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(50, y, "DESIGN PHILOSOPHY")
    y -= 22
    c.setFillColor(OFF_WHITE)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(50, y, '"Precision technology with Argentine warmth."')

    # Uniqueness pillars
    y -= 40
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(50, y, "WHAT MAKES AGENTFLOW UNIQUE")
    y -= 25

    pillars = [
        ("WhatsApp as Hero Visual",
         "Not a generic dashboard screenshot. Show the AI having a real conversation in a WhatsApp-accurate UI mockup."),
        ("Flow Animation",
         "A continuous flowing line/particle trail that connects sections, representing the 'flow' of automated operations."),
        ("Split Personality",
         "Dark tech sophistication for the page chrome + warm WhatsApp green bubbles for the product demonstrations. The contrast IS the brand."),
    ]

    for i, (title, desc) in enumerate(pillars):
        # Number circle
        c.setFillColor(TEAL)
        c.circle(62, y + 4, 10, fill=True, stroke=False)
        c.setFillColor(DEEP_NAVY)
        c.setFont("Helvetica-Bold", 10)
        c.drawCentredString(62, y, str(i + 1))

        c.setFillColor(OFF_WHITE)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(82, y, title)
        y -= 18
        y = draw_body(c, desc, 82, y, max_width=450, size=9)
        y -= 22

    # Design references
    y -= 10
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(50, y, "DESIGN REFERENCES")
    y -= 20

    refs = [
        ("Linear.app", "Gradient mesh backgrounds, precision typography, radial glow effects"),
        ("Vercel.com", "Hero with ambient gradient animation, tech logo bar, CTA confidence"),
        ("Superhuman", "Bold metric in headline, premium dark aesthetic, feature breakdowns"),
        ("Raycast", "Spotlight-style glowing elements against dark backgrounds, smooth motion"),
    ]

    for name, take in refs:
        c.setFillColor(OFF_WHITE)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(55, y, name)
        c.setFillColor(DIM_GRAY)
        c.setFont("Helvetica", 8)
        c.drawString(140, y, take)
        y -= 16

    # Animation principles
    y -= 20
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(50, y, "MOTION PRINCIPLES")
    y -= 20

    motions = [
        "All animations use transform and opacity only (GPU-accelerated)",
        "Section entrance: fade up + slide 20px, 0.6s, cubic-bezier(0.16, 1, 0.3, 1)",
        "Staggered children: 0.1s delay between each, 0.4s duration",
        "Always respect prefers-reduced-motion",
        "Card hover: scale(1.02) + border glow, 0.2s ease",
    ]

    for m in motions:
        c.setFillColor(TEAL)
        c.circle(58, y + 3, 2, fill=True, stroke=False)
        c.setFillColor(MUTED_SILVER)
        c.setFont("Helvetica", 8.5)
        c.drawString(68, y, m)
        y -= 14


# ─── Page 8: Spacing & Accessibility ─────────────────────────

def page_spacing_a11y(c):
    draw_bg(c)
    draw_page_number(c, 8, 8)

    draw_section_title(c, "Spacing & Accessibility", H - 60)
    draw_heading(c, "System & Standards", H - 100)

    y = H - 150

    # Spacing system
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(50, y, "8PX BASE GRID")
    y -= 22

    tokens = [
        ("xs", "4px", "Tight inline spacing"),
        ("sm", "8px", "Component internal padding"),
        ("md", "16px", "Between related elements"),
        ("lg", "24px", "Between groups"),
        ("xl", "32px", "Section internal padding"),
        ("2xl", "48px", "Between sections (mobile)"),
        ("3xl", "64px", "Between sections (tablet)"),
        ("4xl", "96px", "Between sections (desktop)"),
        ("5xl", "128px", "Hero section padding"),
    ]

    for token, val, usage in tokens:
        c.setFillColor(TEAL)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(55, y, token)
        c.setFillColor(OFF_WHITE)
        c.setFont("Helvetica", 9)
        c.drawString(110, y, val)

        # Visual bar
        try:
            px = int(val.replace("px", ""))
            bar_w = min(px * 1.5, 200)
            c.setFillColor(Color(0, 0.83, 0.67, 0.2))
            c.rect(160, y - 1, bar_w, 10, fill=True, stroke=False)
        except ValueError:
            pass

        c.setFillColor(DIM_GRAY)
        c.setFont("Helvetica", 8)
        c.drawString(370, y, usage)
        y -= 18

    # Max content width
    y -= 10
    c.setFillColor(MUTED_SILVER)
    c.setFont("Helvetica", 9)
    c.drawString(55, y, "Max content width: 1280px centered. Hero backgrounds extend full width.")

    # Breakpoints
    y -= 35
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(50, y, "RESPONSIVE BREAKPOINTS")
    y -= 20

    breakpoints = [
        ("Mobile", "<640px", "Single column, stacked, hamburger nav, centered hero"),
        ("Tablet", "640-1024px", "2-column grids, side-by-side hero"),
        ("Desktop", "1024-1440px", "Full layout, all animations active"),
        ("Wide", ">1440px", "Content max 1280px, backgrounds full width"),
    ]

    for name, width, changes in breakpoints:
        c.setFillColor(OFF_WHITE)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(55, y, name)
        c.setFillColor(TEAL)
        c.setFont("Helvetica", 9)
        c.drawString(120, y, width)
        c.setFillColor(DIM_GRAY)
        c.setFont("Helvetica", 8)
        c.drawString(220, y, changes)
        y -= 18

    # Accessibility
    y -= 25
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(50, y, "ACCESSIBILITY (WCAG AA)")
    y -= 22

    # Contrast ratios
    contrasts = [
        ("#F1F5F9 on #0A0B14", "15:1", "Body text on dark background"),
        ("#94A3B8 on #0A0B14", "7:1", "Secondary text on dark background"),
        ("#00D4AA on #0A0B14", "8:1", "Accent on dark background"),
        ("#64748B on #0A0B14", "4.6:1", "Tertiary text (large text only)"),
    ]

    for combo, ratio, usage in contrasts:
        c.setFillColor(OFF_WHITE)
        c.setFont("Helvetica", 9)
        c.drawString(55, y, combo)

        # Ratio badge
        c.setFillColor(TEAL)
        c.roundRect(290, y - 3, 40, 15, 3, fill=True, stroke=False)
        c.setFillColor(DEEP_NAVY)
        c.setFont("Helvetica-Bold", 8)
        c.drawCentredString(310, y, ratio)

        c.setFillColor(DIM_GRAY)
        c.setFont("Helvetica", 8)
        c.drawString(340, y, usage)
        y -= 20

    # A11y checklist
    y -= 15
    a11y_items = [
        "All interactive elements keyboard accessible",
        "prefers-reduced-motion support for all animations",
        "Semantic HTML: <nav>, <main>, <section>, <footer>",
        "aria-labels on icon-only buttons",
        "Focus visible styles (2px solid teal, 2px offset) on all interactive elements",
        "Heading levels logical: h1 in hero, h2 for sections, h3 for features",
        "Font loading with font-display: swap",
    ]

    for item in a11y_items:
        c.setFillColor(TEAL)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(55, y, "+")
        c.setFillColor(MUTED_SILVER)
        c.setFont("Helvetica", 8.5)
        c.drawString(70, y, item)
        y -= 15

    # Footer
    y -= 20
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.line(50, y, W - 50, y)
    y -= 18
    c.setFillColor(DIM_GRAY)
    c.setFont("Helvetica", 8)
    c.drawCentredString(W / 2, y, "AgentFlow Brand Guidelines v1.0  |  March 2026  |  agentflow.casa")


# ─── Build PDF ────────────────────────────────────────────────

def main():
    output_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    output_path = os.path.join(output_dir, "AgentFlow-Brand-Guidelines.pdf")

    c = canvas.Canvas(output_path, pagesize=A4)
    c.setTitle("AgentFlow Brand Guidelines")
    c.setAuthor("AgentFlow")
    c.setSubject("Brand identity, color system, typography, and design direction")

    pages = [
        page_cover,
        page_brand_identity,
        page_logo,
        page_colors,
        page_color_rules,
        page_typography,
        page_brand_direction,
        page_spacing_a11y,
    ]

    for i, page_fn in enumerate(pages):
        page_fn(c)
        if i < len(pages) - 1:
            c.showPage()

    c.save()
    print(f"PDF generated: {output_path}")


if __name__ == "__main__":
    main()
