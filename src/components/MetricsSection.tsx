"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";

const metrics = [
  {
    qualifier: null,
    value: 2,
    unit: "hs/día",
    label: "recuperadas por agente",
    sublabel: "que antes se perdían en coordinación y papeleo",
  },
  {
    qualifier: null,
    value: 50,
    unit: "%",
    label: "menos tiempo en visitas",
    sublabel: "coordinando entre vendedor, comprador y agente",
  },
  {
    qualifier: "menos de",
    value: 2,
    unit: "min",
    label: "de pedido a documento entregado",
    sublabel: "autorizaciones, reservas y ofertas listas para firmar",
  },
  {
    qualifier: null,
    value: 24,
    unit: "/7",
    label: "siempre trabajando",
    sublabel: "9 automatizaciones activas mientras vos vendés",
  },
];

function CountUp({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return <span ref={ref} className="tabular-nums">{count}</span>;
}

export function MetricsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-8">
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.2] text-text-primary">
            Los números hablan solos.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/40">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="px-6 md:px-8 first:pl-0 last:pr-0 flex flex-col gap-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Qualifier pill */}
              <div className="h-5 flex items-center">
                {metric.qualifier && (
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent/70">
                    {metric.qualifier}
                  </span>
                )}
              </div>

              {/* Number + unit */}
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-5xl md:text-6xl font-bold text-accent leading-none">
                  <CountUp value={metric.value} />
                </span>
                <span className="font-display text-2xl md:text-3xl font-semibold text-accent/80 leading-none">
                  {metric.unit}
                </span>
              </div>

              {/* Label */}
              <p className="text-sm md:text-base font-semibold text-text-primary leading-snug">
                {metric.label}
              </p>

              {/* Sublabel */}
              <p className="text-xs md:text-sm text-text-tertiary leading-relaxed">
                {metric.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
