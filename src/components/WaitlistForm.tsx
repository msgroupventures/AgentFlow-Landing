"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function WaitlistForm({
  variant = "default",
  source = "hero",
}: {
  variant?: "default" | "compact";
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Error al registrar. Intentá de nuevo.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Error de conexión. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
          role="status"
          aria-live="polite"
        >
          <p className="text-2xl font-bold font-display">
            <span aria-hidden="true">🎉 </span>¡Estás en la lista!
          </p>
          <p className="text-text-secondary mt-2">
            Te vamos a avisar apenas AgentFlow esté listo. Mientras tanto,
            seguinos para novedades.
          </p>
        </motion.div>
      ) : (
        <motion.div key="form" exit={{ opacity: 0, scale: 0.95 }}>
          <form
            onSubmit={handleSubmit}
            className={`flex ${variant === "compact" ? "flex-row" : "flex-col sm:flex-row"} gap-3 w-full max-w-md`}
          >
            <label htmlFor={`waitlist-email-${variant}`} className="sr-only">
              Tu email
            </label>
            <input
              id={`waitlist-email-${variant}`}
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(null);
              }}
              placeholder="tu@email.com"
              aria-label="Tu dirección de email para la lista de espera"
              aria-describedby={error ? `waitlist-error-${variant}` : undefined}
              autoComplete="email"
              disabled={loading}
              className="flex-1 px-4 py-3 rounded-full bg-bg-secondary border border-border text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-full bg-accent text-bg-primary font-semibold hover:brightness-110 transition-all cursor-pointer whitespace-nowrap shadow-[0_0_20px_rgba(0,212,170,0.3)] hover:shadow-[0_0_30px_rgba(0,212,170,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Registrando..." : "Unirme →"}
            </button>
          </form>

          <AnimatePresence>
            {error && (
              <motion.p
                id={`waitlist-error-${variant}`}
                role="alert"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-2 text-xs text-error pl-1"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
