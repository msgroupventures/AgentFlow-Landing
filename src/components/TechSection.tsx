"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const tools = [
  { name: "WhatsApp", subtitle: "Tu canal de trabajo" },
  { name: "Google Calendar", subtitle: "Tu agenda, sincronizada" },
  { name: "Anthropic", subtitle: "Modelos de IA" },
];

export function TechSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] text-text-primary">
            Funciona con las herramientas que ya usás.
          </h2>
          <p className="mt-3 text-base text-text-secondary">
            Se conecta con WhatsApp y Google Calendar, y usa modelos de IA de Anthropic.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto"
          staggerDelay={0.06}
        >
          {tools.map((tech) => (
            <StaggerItem key={tech.name}>
              <div className="group flex flex-col items-center justify-center py-6 px-4 rounded-xl border border-border/50 bg-bg-secondary/30 transition-all duration-300 hover:border-accent/20 hover:bg-bg-secondary">
                {/* Text names only — no third-party logos (no implied endorsement) */}
                <span className="font-display text-lg font-bold text-text-tertiary group-hover:text-text-primary transition-colors duration-300">
                  {tech.name}
                </span>
                <span className="text-[11px] text-text-tertiary/60 group-hover:text-accent/60 transition-colors duration-300 mt-1">
                  {tech.subtitle}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <p className="mt-8 text-center text-xs text-text-tertiary">
          Las marcas mencionadas pertenecen a sus titulares. AgentFlow no está afiliado ni avalado por ellos.
        </p>
      </div>
    </section>
  );
}
