"use client";

import { motion } from "motion/react";
import { MessageCircle, Cpu, CheckCircle2 } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Hablá",
    description:
      'Mandá un mensaje o audio por WhatsApp con lo que necesitás. "Coordiná una visita al depto de Palermo para mañana a las 15hs."',
  },
  {
    icon: Cpu,
    number: "02",
    title: "La IA actúa",
    description:
      "AgentFlow entiende tu pedido, verifica disponibilidad, contacta a las partes involucradas y coordina todo automáticamente.",
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Resultado",
    description:
      "Visita confirmada. Documento generado. Calendario actualizado. Vos no tuviste que hacer nada más.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 md:py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/3 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.05em] text-accent mb-4">
            Cómo Funciona
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2] text-text-primary">
            Así de simple funciona.
          </h2>
        </AnimatedSection>

        {/* Steps */}
        <StaggerContainer
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
          staggerDelay={0.15}
        >
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[72px] left-[16.67%] right-[16.67%] z-0" aria-hidden="true">
            <motion.div
              className="h-px w-full bg-gradient-to-r from-accent/40 via-accent to-accent/40"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />
            {/* Animated glow dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(0,212,170,0.6)]"
              initial={{ left: "0%" }}
              whileInView={{ left: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="relative z-10 group">
                {/* Step card */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div className="w-[88px] h-[88px] rounded-2xl border border-border bg-bg-secondary flex items-center justify-center transition-all duration-300 group-hover:border-accent/30 group-hover:bg-bg-tertiary group-hover:shadow-[0_0_30px_rgba(0,212,170,0.1)]">
                      <step.icon
                        size={32}
                        className="text-accent"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    {/* Step number badge */}
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-bg-primary text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  {/* Mobile connecting line */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden w-px h-8 bg-gradient-to-b from-accent/40 to-transparent mb-2 -mt-2" />
                  )}

                  {/* Text */}
                  <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-text-secondary max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
