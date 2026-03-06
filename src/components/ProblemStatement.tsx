"use client";

import { motion } from "motion/react";
import { Clock, Phone, MessageSquare } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

const stats = [
  {
    icon: Clock,
    number: "3–4 hs/día",
    label: "en tareas administrativas",
  },
  {
    icon: Phone,
    number: "30+ min",
    label: "para coordinar una sola visita",
  },
  {
    icon: MessageSquare,
    number: "∞ mensajes",
    label: "persiguiendo documentos",
  },
];

function ChaosGrid() {
  // Scattered icons representing operational chaos — animate to order on scroll
  const chaosItems = [
    { icon: "📞", x: 15, y: 20, rotate: -15, delay: 0 },
    { icon: "📅", x: 65, y: 10, rotate: 12, delay: 0.1 },
    { icon: "📄", x: 40, y: 55, rotate: -8, delay: 0.2 },
    { icon: "💬", x: 80, y: 40, rotate: 20, delay: 0.15 },
    { icon: "⏰", x: 25, y: 70, rotate: -22, delay: 0.25 },
    { icon: "📋", x: 70, y: 75, rotate: 10, delay: 0.05 },
  ];

  return (
    <div className="relative w-full h-[280px] md:h-[320px]" aria-hidden="true">
      {/* Ambient glow behind the chaos */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-error/5 blur-3xl" />
      </div>

      {chaosItems.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl md:text-4xl"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          initial={{
            opacity: 0,
            scale: 0.5,
            rotate: item.rotate * 2,
          }}
          whileInView={{
            opacity: [0, 0.8, 0.6],
            scale: [0.5, 1.1, 1],
            rotate: [item.rotate * 2, item.rotate, item.rotate],
          }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 1.2,
            delay: item.delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          animate={{
            y: [0, -6, 0, 4, 0],
            rotate: [item.rotate, item.rotate + 3, item.rotate - 2, item.rotate],
          }}
        >
          <motion.span
            animate={{
              y: [0, -4, 0, 3, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="block"
          >
            {item.icon}
          </motion.span>
        </motion.div>
      ))}

      {/* Connecting chaotic lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M15 20 Q40 35 65 10 Q80 25 80 40 Q55 55 40 55 Q30 65 25 70 Q50 80 70 75"
          fill="none"
          stroke="var(--color-error)"
          strokeWidth="0.3"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}

export function ProblemStatement() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle top divider gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: visual */}
          <div className="order-2 lg:order-1">
            <ChaosGrid />
          </div>

          {/* Right: copy */}
          <div className="order-1 lg:order-2">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2] text-text-primary">
                Tus horas más productivas se pierden en{" "}
                <span className="text-error/80">coordinación.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-text-secondary max-w-xl">
                Los agentes inmobiliarios pasan entre 3 y 4 horas por día en
                tareas administrativas: coordinar visitas por teléfono, perseguir
                documentos, actualizar planillas y responder mensajes
                repetitivos. Es tiempo que podrías estar vendiendo, negociando y
                construyendo relaciones.
              </p>
            </AnimatedSection>
          </div>
        </div>

        {/* Stat cards */}
        <StaggerContainer
          className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
          staggerDelay={0.12}
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="group relative rounded-2xl border border-border bg-bg-secondary p-6 md:p-8 transition-all duration-300 hover:border-accent/20 hover:bg-bg-tertiary">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

                <div className="relative">
                  <stat.icon
                    size={24}
                    className="text-accent mb-4"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <p className="font-display text-3xl md:text-4xl font-bold text-text-primary">
                    {stat.number}
                  </p>
                  <p className="mt-2 text-sm md:text-base text-text-secondary">
                    {stat.label}
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
