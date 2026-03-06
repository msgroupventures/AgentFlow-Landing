"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";

const metrics = [
  { value: 79, suffix: "", label: "herramientas de IA", sublabel: "especializadas en operaciones inmobiliarias" },
  { value: 2, prefix: "<", suffix: " min", label: "generación de documentos", sublabel: "de pedido a PDF por WhatsApp" },
  { value: 9, suffix: "", label: "procesos automáticos", sublabel: "funcionando 24/7 en segundo plano" },
  { value: 10, suffix: "", label: "etapas del pipeline", sublabel: "desde lead hasta escritura" },
];

function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function MetricsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Particle-like background dots */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/20"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: (i * 0.2) % 2,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2] text-text-primary">
            Los números hablan solos.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent">
                <CountUp
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </p>
              <p className="mt-2 text-base md:text-lg font-medium text-text-primary">
                {metric.label}
              </p>
              <p className="mt-1 text-sm text-text-tertiary">
                {metric.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
