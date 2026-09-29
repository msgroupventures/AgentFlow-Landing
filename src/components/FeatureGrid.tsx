"use client";

import {
  BarChart3,
  BookOpen,
  Calendar,
  Camera,
  CheckCheck,
  DollarSign,
  FileSpreadsheet,
  FolderSearch,
  HeartHandshake,
  KeyRound,
  LayoutDashboard,
  Mic,
  Scale,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";

type Feature = {
  icon: LucideIcon;
  headline: string;
  description: string;
  link?: { href: string; label: string };
};

const features: Feature[] = [
  {
    icon: Mic,
    headline: "Hablá, no escribas",
    description: "Mandá audios — la IA transcribe y ejecuta.",
  },
  {
    icon: Calendar,
    headline: "Agenda sincronizada",
    description:
      "Conectá tu Google Calendar: AgentFlow agenda las visitas y evita superposiciones. Podés desconectarlo cuando quieras.",
    link: {
      href: "/privacy#google-user-data",
      label: "Cómo usamos tus datos de calendario",
    },
  },
  {
    icon: FileSpreadsheet,
    headline: "ACM en minutos",
    description:
      "Pasale las propiedades comparables y AgentFlow arma el Análisis Comparativo de Mercado en la plantilla oficial, listo para presentar.",
  },
  {
    icon: CheckCheck,
    headline: "Vos aprobás, la IA envía",
    description:
      "Cada autorización se genera como borrador. La revisás por WhatsApp y recién ahí se envía al cliente.",
  },
  {
    icon: ShieldCheck,
    headline: "Nunca más se te vence",
    description:
      "Te avisa 7, 3 y 1 día antes del vencimiento y prepara la renovación.",
  },
  {
    icon: FolderSearch,
    headline: "La IA persigue por vos",
    description:
      "Pide la documentación al cliente, registra lo que llega, te avisa si falta algo y manda recordatorios automáticos.",
  },
  {
    icon: Scale,
    headline: "Compará y decidí",
    description: "Ofertas lado a lado con seguimiento de contraofertas.",
  },
  {
    icon: KeyRound,
    headline: "De oferta a reserva, sin fricciones",
    description: "Confirmación de 3 partes con seguimiento de seña.",
  },
  {
    icon: Camera,
    headline: "Fotos que venden",
    description:
      "Mandá una foto de la propiedad y te devuelve una versión mejorada para que la revises antes de compartirla.",
  },
  {
    icon: Sparkles,
    headline: "Aprende cómo trabajás",
    description:
      "Recuerda tus preferencias (horarios, duración de visitas, formas de trabajo) para no preguntarte dos veces.",
  },
  {
    icon: HeartHandshake,
    headline: "Tu base de relaciones, al día",
    description:
      "Registrá contactos, charlas y compromisos. Te recuerda a quién llamar y te avisa cumpleaños y fechas clave.",
  },
  {
    icon: BarChart3,
    headline: "Tu semana en números",
    description:
      "Cargá tus métricas semanales de actividad y seguí tu avance sin planillas.",
  },
  {
    icon: BookOpen,
    headline: "Los procesos de tu oficina, a mano",
    description:
      "Preguntale cómo se hace un trámite o un proceso y te responde con la documentación de tu franquicia.",
  },
  {
    icon: DollarSign,
    headline: "Dólar al día",
    description:
      "Pedile la cotización del dólar y la tenés al instante, sin salir de WhatsApp.",
  },
  {
    icon: LayoutDashboard,
    headline: "Todo en un panel",
    description:
      "Además de WhatsApp, tenés un panel web con tus oportunidades, contactos, propiedades y agenda.",
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
            <StaggerItem key={feature.headline}>
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
                  {feature.link && (
                    <Link
                      href={feature.link.href}
                      className="relative mt-3 inline-block text-sm text-accent hover:underline"
                    >
                      {feature.link.label}
                    </Link>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
