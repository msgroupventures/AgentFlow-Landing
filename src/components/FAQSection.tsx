"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

type FAQ = {
  q: string;
  a: string;
  link?: { href: string; label: string };
};

const faqs: FAQ[] = [
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
    a: "Sí. Tus datos y los de tus clientes son privados: el acceso está restringido a tu cuenta y ningún otro agente puede ver tus operaciones. Usamos cifrado en tránsito y cifrado de credenciales, trabajamos con proveedores bajo contrato y nunca vendemos datos. Más info en nuestra Política de Privacidad.",
    link: { href: "/privacy", label: "Política de Privacidad" },
  },
  {
    q: "¿Funciona con Google Calendar?",
    a: "Sí. Conectás tu cuenta de Google una vez y AgentFlow lee tu disponibilidad y crea, modifica o cancela los eventos de tus visitas. Solo usamos tu calendario para coordinar tu agenda, nunca para publicidad ni para entrenar modelos de IA. Podés desconectarlo en cualquier momento. Más info en nuestra Política de Privacidad.",
    link: { href: "/privacy#google-user-data", label: "Política de Privacidad" },
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

function FAQItem({
  q,
  a,
  link,
  index,
}: FAQ & { index: number }) {
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
              {link && (
                <>
                  {" "}
                  <Link href={link.href} className="text-accent hover:underline">
                    {link.label} →
                  </Link>
                </>
              )}
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
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-accent mb-4">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2] text-text-primary">
            Preguntas frecuentes
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="border-t border-border">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} {...faq} index={i} />
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
