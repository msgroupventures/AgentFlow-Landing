"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const techLogos = [
  { name: "Anthropic", subtitle: "Claude AI" },
  { name: "Meta", subtitle: "WhatsApp API" },
  { name: "Google", subtitle: "Calendar" },
  { name: "Supabase", subtitle: "Database" },
  { name: "Next.js", subtitle: "Frontend" },
  { name: "Railway", subtitle: "Infrastructure" },
];

export function TechSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.2] text-text-primary">
            Construido con tecnología de primer nivel.
          </h2>
          <p className="mt-3 text-base text-text-secondary">
            La misma infraestructura que usan las mejores plataformas del mundo.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
          staggerDelay={0.06}
        >
          {techLogos.map((tech) => (
            <StaggerItem key={tech.name}>
              <div className="group flex flex-col items-center justify-center py-6 px-4 rounded-xl border border-border/50 bg-bg-secondary/30 transition-all duration-300 hover:border-accent/20 hover:bg-bg-secondary">
                {/* Text-based logo placeholder — grayscale to teal on hover */}
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
      </div>
    </section>
  );
}
