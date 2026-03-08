"use client";

import { AnimatedSection } from "./AnimatedSection";
import { WaitlistForm } from "./WaitlistForm";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Elevated background */}
      <div className="absolute inset-0 bg-bg-tertiary/40" />

      {/* Gradient glow from bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-2xl px-6 md:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2] text-text-primary">
            Dejá que la IA se encargue de lo operativo.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-4 text-base md:text-lg text-text-secondary">
            Sumate a la lista de espera y sé de los primeros en usar AgentFlow.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-8 flex justify-center">
          <WaitlistForm variant="compact" source="final_cta" />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-4 text-sm text-text-tertiary">
            Sin compromiso. Te avisamos cuando esté listo.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
