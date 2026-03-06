"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const faqs = [
  {
    q: "¿Qué es AgentFlow?",
    a: "AgentFlow es una plataforma de inteligencia artificial diseñada específicamente para agentes inmobiliarios RE/MAX en Argentina. Automatiza las tareas operativas del día a día — coordinación de visitas, generación de documentos, seguimiento de autorizaciones y reservas — todo a través de WhatsApp.",
  },
  {
    q: "¿Cómo funciona con WhatsApp?",
    a: "AgentFlow se integra directamente con la API oficial de WhatsApp Business (Meta). Vos le mandás un mensaje o audio por WhatsApp y la IA entiende lo que necesitás, ejecuta las acciones y te responde por el mismo canal. No necesitás otra aplicación.",
  },
  {
    q: "¿Necesito instalar alguna aplicación?",
    a: "No. AgentFlow funciona 100% a través de WhatsApp. También tenés acceso a un panel web para una vista completa de tus operaciones, pero no es obligatorio — podés manejar todo desde WhatsApp.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. AgentFlow usa Supabase (PostgreSQL) con políticas de seguridad a nivel de fila — cada agente solo ve sus propios datos. Los tokens de Google Calendar se encriptan con AES-256-GCM. Todos los registros tienen enmascaramiento de datos personales. Las operaciones sensibles se auditan automáticamente.",
  },
  {
    q: "¿Funciona con Google Calendar?",
    a: "Sí. AgentFlow se sincroniza bidireccionalmente con Google Calendar cada 15 minutos. Las visitas y actividades se reflejan automáticamente en tu calendario de Google, y los cambios que hagas en Google Calendar se sincronizan de vuelta.",
  },
  {
    q: "¿En qué idioma funciona?",
    a: "AgentFlow funciona completamente en español argentino (es-AR). Toda la interfaz, los mensajes de WhatsApp y los documentos generados están en español. Los precios se manejan en dólares (USD), como es práctica estándar en el mercado inmobiliario argentino.",
  },
  {
    q: "¿Cuánto cuesta AgentFlow?",
    a: "Los precios se anunciarán cuando lancemos. Sumate a la lista de espera para ser de los primeros en acceder y recibir información sobre planes y precios.",
  },
  {
    q: "¿Cuándo estará disponible?",
    a: "AgentFlow está en desarrollo activo y estamos preparando el lanzamiento del MVP. Sumate a la lista de espera y te avisamos cuando esté listo.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const answerId = `faq-answer-${index}`;

  return (
    <div className="border-b border-border">
      <h3>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 md:py-6 text-left cursor-pointer group"
          aria-expanded={open}
          aria-controls={answerId}
        >
          <span className="font-display text-base md:text-lg font-semibold text-text-primary group-hover:text-accent transition-colors pr-4">
            {q}
          </span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0"
            aria-hidden="true"
          >
            <Plus size={20} className="text-text-tertiary" />
          </motion.div>
        </button>
      </h3>
      <AnimatePresence>
        {open && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 md:pb-6 text-base leading-relaxed text-text-secondary pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.05em] text-accent mb-4">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2] text-text-primary">
            Preguntas frecuentes
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="border-t border-border">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* FAQ Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
