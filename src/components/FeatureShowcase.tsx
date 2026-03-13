"use client";

import { motion } from "motion/react";
import { Users, FileText, TrendingUp } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const features = [
  {
    overline: "COORDINACIÓN DE VISITAS",
    icon: Users,
    headline: "Tres partes. Cero llamadas.",
    body: "AgentFlow coordina visitas entre vendedor, comprador y agente completamente por WhatsApp. Verifica la disponibilidad de la propiedad, chequea tu agenda, contacta a cada parte y confirma cuando los tres aceptan. Si alguien cancela o pide reprogramar, la IA se encarga.",
    badge: "50% menos tiempo en coordinación",
    visual: "visit",
  },
  {
    overline: "DOCUMENTOS AUTOMÁTICOS",
    icon: FileText,
    headline: "De pedido a PDF en menos de 2 minutos.",
    body: "Autorizaciones de venta, reservas, ofertas — generados automáticamente con los datos de la operación. El documento se envía al cliente por WhatsApp. La IA hace seguimiento de la firma y te avisa cuando llega.",
    badge: "5 tipos de documento",
    visual: "docs",
  },
  {
    overline: "PIPELINE DE VENTAS",
    icon: TrendingUp,
    headline: "Cada oportunidad, de principio a fin.",
    body: "10 etapas claras desde el primer contacto hasta la escritura. AgentFlow avanza cada oportunidad automáticamente, valida que no se saltee ningún paso y te mantiene al tanto del estado de cada operación. Ninguna oportunidad avanza sin completar el paso anterior.",
    badge: "10 etapas del pipeline",
    visual: "pipeline",
  },
];

function FeatureVisual({ type }: { type: string }) {
  if (type === "visit") {
    return (
      <div className="relative w-full h-full min-h-[280px] flex items-center justify-center">
        {/* Three connected nodes representing the 3 parties */}
        <div className="relative w-64 h-48">
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 192" aria-hidden="true">
            <motion.path
              d="M64 48 L128 144 L192 48"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            <motion.path
              d="M64 48 L192 48"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </svg>

          {/* Seller node */}
          <motion.div
            className="absolute top-4 left-4 flex flex-col items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-lg">
              <span aria-hidden="true">🏠</span>
            </div>
            <span className="text-[11px] text-text-tertiary">Vendedor</span>
          </motion.div>

          {/* Buyer node */}
          <motion.div
            className="absolute top-4 right-4 flex flex-col items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-lg">
              <span aria-hidden="true">👤</span>
            </div>
            <span className="text-[11px] text-text-tertiary">Comprador</span>
          </motion.div>

          {/* Agent node (center bottom) */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="w-14 h-14 rounded-full bg-accent/20 border-2 border-accent/50 flex items-center justify-center text-lg shadow-[0_0_20px_rgba(0,212,170,0.15)]">
              <span aria-hidden="true">🤝</span>
            </div>
            <span className="text-[11px] text-accent font-medium">Agente</span>
          </motion.div>

          {/* Center check */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, type: "spring" }}
          >
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-bg-primary text-sm font-bold shadow-[0_0_16px_rgba(0,212,170,0.4)]">
              ✓
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (type === "docs") {
    return (
      <div className="relative w-full h-full min-h-[280px] flex items-center justify-center">
        {/* Stacked document cards */}
        <div className="relative">
          {[
            { label: "Autorización de Venta", rotation: -6, delay: 0.1 },
            { label: "Reserva", rotation: -3, delay: 0.3 },
            { label: "Oferta de Compra", rotation: 0, delay: 0.5 },
          ].map((doc, i) => (
            <motion.div
              key={doc.label}
              className="absolute top-0 left-0 w-48 h-60 rounded-xl border border-border bg-bg-secondary p-4 flex flex-col"
              style={{
                rotate: `${doc.rotation}deg`,
                zIndex: i,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: -(i * 8) }}
              viewport={{ once: true }}
              transition={{ delay: doc.delay, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-8 h-1 bg-accent/40 rounded-full mb-3" />
              <div className="w-full h-1 bg-border rounded-full mb-2" />
              <div className="w-3/4 h-1 bg-border rounded-full mb-2" />
              <div className="w-5/6 h-1 bg-border rounded-full mb-2" />
              <div className="w-2/3 h-1 bg-border rounded-full mb-4" />
              <div className="mt-auto">
                <span className="text-[10px] text-text-tertiary">{doc.label}</span>
              </div>
            </motion.div>
          ))}
          {/* PDF badge */}
          <motion.div
            className="absolute -bottom-4 -right-4 z-10 px-3 py-1.5 rounded-lg bg-accent text-bg-primary text-xs font-bold shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            PDF ✓
          </motion.div>
        </div>
      </div>
    );
  }

  // Pipeline
  return (
    <div className="relative w-full h-full min-h-[280px] flex items-center justify-center">
      <div className="flex flex-col gap-1.5 w-full max-w-[240px]">
        {[
          { label: "Lead", width: "100%", active: true },
          { label: "Contacto", width: "92%", active: true },
          { label: "Visita", width: "84%", active: true },
          { label: "Oferta", width: "76%", active: true },
          { label: "Negociación", width: "68%", active: false },
          { label: "Reserva", width: "60%", active: false },
          { label: "Seña", width: "52%", active: false },
          { label: "Boleto", width: "44%", active: false },
          { label: "Hipoteca", width: "36%", active: false },
          { label: "Escritura", width: "28%", active: false },
        ].map((stage, i) => (
          <motion.div
            key={stage.label}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1 + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div
              className={`h-5 rounded-r-full flex items-center px-2 text-[10px] font-medium ${
                stage.active
                  ? "bg-accent/20 text-accent border-l-2 border-accent"
                  : "bg-bg-tertiary/50 text-text-tertiary border-l-2 border-border"
              }`}
              style={{ width: stage.width }}
            >
              {stage.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function FeatureShowcase() {
  return (
    <section id="funcionalidades" className="relative py-24 md:py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.05em] text-accent mb-4">
            Funcionalidades
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2] text-text-primary">
            Todo lo que necesitás, automatizado.
          </h2>
        </AnimatedSection>

        {/* Feature rows */}
        <div className="space-y-20 md:space-y-32">
          {features.map((feature, i) => {
            const isReversed = i % 2 === 1;

            return (
              <div
                key={feature.overline}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Text */}
                <AnimatedSection
                  className={isReversed ? "lg:order-2" : "lg:order-1"}
                >
                  <span className="inline-block text-xs font-semibold uppercase tracking-[0.05em] text-accent mb-4">
                    {feature.overline}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] text-text-primary mb-4">
                    {feature.headline}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-text-secondary mb-6">
                    {feature.body}
                  </p>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
                    <feature.icon size={16} strokeWidth={2} aria-hidden="true" />
                    {feature.badge}
                  </span>
                </AnimatedSection>

                {/* Visual */}
                <AnimatedSection
                  className={`${isReversed ? "lg:order-1" : "lg:order-2"} rounded-2xl border border-border bg-bg-secondary/50 p-6 md:p-8`}
                  delay={0.15}
                >
                  <FeatureVisual type={feature.visual} />
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
