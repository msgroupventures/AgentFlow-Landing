"use client";

import {
  Calendar,
  ShieldCheck,
  Scale,
  KeyRound,
  FolderSearch,
  Mic,
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";

const features = [
  {
    icon: Calendar,
    title: "Calendario Inteligente",
    headline: "Agenda sincronizada",
    description:
      "Google Calendar integrado con detección automática de conflictos.",
  },
  {
    icon: ShieldCheck,
    title: "Autorizaciones de Venta",
    headline: "Nunca más se te vence",
    description:
      "Alertas automáticas a 7, 3 y 1 día antes del vencimiento.",
  },
  {
    icon: Scale,
    title: "Gestión de Ofertas",
    headline: "Compará y decidí",
    description:
      "Ofertas lado a lado con seguimiento de contraofertas.",
  },
  {
    icon: KeyRound,
    title: "Gestión de Reservas",
    headline: "De oferta a reserva, sin fricciones",
    description:
      "Confirmación de 3 partes con seguimiento de seña.",
  },
  {
    icon: FolderSearch,
    title: "Documentación del Cliente",
    headline: "La IA persigue por vos",
    description:
      "Pedidos automáticos por WhatsApp con recordatorios.",
  },
  {
    icon: Mic,
    title: "Mensajes de Voz",
    headline: "Hablá, no escribas",
    description:
      "Mandá audios — la IA transcribe y ejecuta.",
  },
];

export function FeatureGrid() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          staggerDelay={0.08}
        >
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group relative rounded-2xl border border-border bg-bg-secondary p-6 md:p-7 transition-all duration-300 hover:border-accent/20 hover:bg-bg-tertiary h-full">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

                <div className="relative">
                  <feature.icon
                    size={28}
                    className="text-accent mb-4"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-lg font-bold text-text-primary mb-1">
                    {feature.headline}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
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
