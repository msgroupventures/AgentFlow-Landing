"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

const ease = [0.16, 1, 0.3, 1] as const;

const differentiators = [
  "No es un chatbot — es una IA que razona",
  "Autorizaciones y reservas RE/MAX incluidas",
  "Construida para Argentina, conoce el mercado local",
] as const;

const whatsappMessages = [
  {
    type: "outgoing" as const,
    text: "Coordiná una visita al depto de Av. Libertador 1234 para Juan Pérez, mañana a las 15hs.",
    delay: 0.8,
  },
  {
    type: "incoming" as const,
    text: "Verificando disponibilidad...\n✅ La propiedad está disponible mañana de 14 a 18hs.\n✅ Tu agenda está libre a las 15hs.\nContactando a María González (vendedora)...",
    delay: 1.6,
  },
  {
    type: "status" as const,
    text: "⏳ Esperando respuesta de la vendedora...",
    delay: 2.4,
  },
  {
    type: "incoming" as const,
    text: "✅ María González confirmó para mañana a las 15hs.\nContactando a Juan Pérez (comprador)...",
    delay: 3.0,
  },
  {
    type: "incoming" as const,
    text: "✅ Juan Pérez confirmó.\n\n📋 Visita confirmada\n📍 Av. Libertador 1234, Palermo\n📅 Mañana 15:00 - 15:45\n👤 Vendedora: María González\n👤 Comprador: Juan Pérez\n📅 Agregada a tu Google Calendar",
    delay: 3.8,
  },
];

function TypingIndicator({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 0] }}
      transition={{ duration: 1.2, delay, times: [0, 0.1, 0.8, 1] }}
      className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white/10 w-fit"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-text-tertiary"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.15,
            repeat: Infinity,
          }}
        />
      ))}
    </motion.div>
  );
}

function WhatsAppMockup() {
  return (
    <div className="relative w-full max-w-[340px] mx-auto" aria-hidden="true" role="img" aria-label="Demostración de conversación de WhatsApp con AgentFlow">
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-accent/8 rounded-[60px] blur-3xl" />
      <div className="absolute -inset-4 bg-whatsapp/5 rounded-[50px] blur-2xl" />

      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border border-border/60 bg-bg-secondary overflow-hidden shadow-2xl shadow-black/40">
        {/* Notch */}
        <div className="flex justify-center pt-2 pb-0">
          <div className="w-28 h-6 rounded-b-2xl bg-bg-primary" />
        </div>

        {/* WhatsApp header */}
        <div className="bg-[#1F2C34] px-4 py-3 flex items-center gap-3 border-b border-white/5">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-accent text-xs font-bold">AF</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-text-primary leading-tight">
              AgentFlow
            </p>
            <p className="text-[11px] text-whatsapp leading-tight">en línea</p>
          </div>
          <div className="flex gap-4 text-text-tertiary" aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </div>
        </div>

        {/* Chat area */}
        <div className="bg-[#0B141A] px-3 py-4 space-y-2 min-h-[380px] max-h-[420px] overflow-hidden">
          {/* Date chip */}
          <div className="flex justify-center mb-3">
            <span className="text-[11px] text-text-tertiary bg-white/5 px-3 py-1 rounded-md">
              Hoy
            </span>
          </div>

          {whatsappMessages.map((msg, i) => {
            if (msg.type === "status") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: msg.delay, ease }}
                  className="flex justify-center"
                >
                  <span className="text-[11px] text-text-tertiary bg-white/5 px-3 py-1 rounded-md">
                    {msg.text}
                  </span>
                </motion.div>
              );
            }

            const isOutgoing = msg.type === "outgoing";

            return (
              <div key={i}>
                {/* Typing indicator before incoming messages */}
                {!isOutgoing && (
                  <TypingIndicator delay={msg.delay - 0.6} />
                )}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: msg.delay, ease }}
                  className={`flex ${isOutgoing ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-lg text-[13px] leading-relaxed whitespace-pre-line ${
                      isOutgoing
                        ? "bg-[#005C4B] text-text-primary rounded-tr-sm"
                        : "bg-[#1F2C34] text-text-primary rounded-tl-sm"
                    }`}
                  >
                    {!isOutgoing && (
                      <span className="text-accent text-[11px] font-medium block mb-0.5">
                        AgentFlow ✓
                      </span>
                    )}
                    {msg.text}
                    <span className="text-[10px] text-text-tertiary float-right ml-2 mt-1 flex items-center gap-0.5">
                      {isOutgoing ? "14:32" : "14:32"}
                      {isOutgoing && (
                        <svg
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          className="text-[#53BDEB] ml-0.5"
                        >
                          <path
                            d="M11.07 0.93L4.5 7.5L1.93 4.93L0.5 6.36L4.5 10.36L12.5 2.36L11.07 0.93Z"
                            fill="currentColor"
                          />
                          <path
                            d="M14.07 0.93L7.5 7.5L6.78 6.78L5.35 8.21L7.5 10.36L15.5 2.36L14.07 0.93Z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Input bar */}
        <div className="bg-[#1F2C34] px-3 py-2 flex items-center gap-2 border-t border-white/5">
          <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2">
            <span className="text-[13px] text-text-tertiary">Mensaje</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0A0B14"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" x2="12" y1="19" y2="22" />
            </svg>
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center py-2 bg-[#1F2C34]">
          <div className="w-32 h-1 rounded-full bg-text-tertiary/30" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Primary radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
          <div
            className="absolute inset-0 animate-glow-pulse"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,212,170,0.08) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)",
            }}
          />
        </div>
        {/* Secondary glow - offset */}
        <div
          className="absolute top-[30%] right-[10%] w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(241,245,249,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(241,245,249,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Top fade for nav blending */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg-primary to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1280px] w-full px-6 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Overline badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.05em] border border-accent/20 bg-accent/5 text-accent">
                Para agentes RE/MAX en Argentina
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] tracking-tight text-text-primary"
            >
              Tu operación inmobiliaria en{" "}
              <span className="bg-gradient-to-r from-accent to-accent-cyan bg-clip-text text-transparent">
                piloto automático.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="mt-6 text-lg md:text-xl leading-relaxed text-text-secondary max-w-xl"
            >
              AgentFlow es la IA que coordina visitas, genera autorizaciones de
              venta y sigue tus oportunidades — todo por WhatsApp.{" "}
              <span className="text-text-tertiary">
                Diseñada desde cero para el mercado argentino, no adaptada para
                él.
              </span>
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
              className="mt-8 w-full max-w-md scroll-mt-20"
              id="waitlist"
            >
              <WaitlistForm />
            </motion.div>

            {/* Trust signal */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mt-3 text-xs text-text-tertiary text-center lg:text-left"
            >
              Beta gratuita · Sin compromiso · Solo para agentes RE/MAX en
              Argentina
            </motion.p>

            {/* Secondary link */}
            <motion.a
              href="#como-funciona"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-4 text-sm text-text-tertiary hover:text-accent transition-colors"
            >
              Ver cómo funciona ↓
            </motion.a>
          </div>

          {/* Right: WhatsApp mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="relative"
          >
            {/* Continuous float animation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <WhatsAppMockup />
            </motion.div>
          </motion.div>
        </div>

        {/* Differentiator strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1, ease }}
          className="mt-12 md:mt-14 pt-8 border-t border-border/50"
          aria-label="Por qué AgentFlow"
        >
          <ul
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 sm:divide-x sm:divide-border/50 list-none m-0 p-0"
            role="list"
          >
            {differentiators.map((text, i) => (
              <li
                key={i}
                className="flex items-center gap-2.5 text-sm sm:flex-1 sm:justify-center sm:px-6"
              >
                <Check
                  size={14}
                  className="text-accent shrink-0"
                  strokeWidth={2.5}
                />
                <span className="text-text-secondary">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
