"use client";

import { X, Check } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";

const painItems = [
  "3+ llamadas para coordinar una visita",
  "Documentos armados a mano, con errores",
  "Perseguir firmas y vencimientos por WhatsApp",
  "Tipear todo — respuestas, datos, instrucciones",
  "Oportunidades en una planilla que nadie actualiza",
];

const solutionItems = [
  "Un mensaje. La IA coordina todo.",
  "PDFs generados en 2 minutos, sin errores.",
  "Recordatorios automáticos a 7, 3 y 1 día.",
  "Mandá un audio. La IA transcribe y ejecuta.",
  "Pipeline automático con 10 etapas validadas.",
];

export function BeforeAfter() {
  return (
    <section className="relative py-24 md:py-32 bg-bg-primary overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-4">
            Chatbot vs. Agente
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            No es un chatbot.{" "}
            <span className="text-accent">
              Es una IA que trabaja por vos.
            </span>
          </h2>
        </AnimatedSection>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left column — pain */}
          <StaggerContainer
            className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 lg:p-8"
            staggerDelay={0.1}
          >
            <h3 className="font-display text-lg font-semibold text-text-primary mb-6">
              Cómo trabajás hoy
            </h3>
            <div className="space-y-4">
              {painItems.map((item) => (
                <StaggerItem key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  <span className="text-text-secondary text-sm lg:text-base">
                    {item}
                  </span>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* Right column — solution */}
          <StaggerContainer
            className="rounded-2xl border border-accent/20 bg-accent/5 p-6 lg:p-8"
            staggerDelay={0.1}
          >
            <h3 className="font-display text-lg font-semibold text-text-primary mb-6">
              Con AgentFlow
            </h3>
            <div className="space-y-4">
              {solutionItems.map((item) => (
                <StaggerItem key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-text-secondary text-sm lg:text-base">
                    {item}
                  </span>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
