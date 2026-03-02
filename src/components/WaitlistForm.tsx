"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function WaitlistForm({
  variant = "default",
}: {
  variant?: "default" | "compact";
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("Waitlist signup:", email);
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <p className="text-2xl font-bold font-display">
            ¡Estás en la lista! 🎉
          </p>
          <p className="text-text-secondary mt-2">
            Te vamos a avisar apenas AgentFlow esté listo. Mientras tanto,
            seguinos para novedades.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className={`flex ${variant === "compact" ? "flex-row" : "flex-col sm:flex-row"} gap-3 w-full max-w-md`}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 px-4 py-3 rounded-full bg-bg-secondary border border-border text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-accent text-bg-primary font-semibold hover:brightness-110 transition-all cursor-pointer whitespace-nowrap shadow-[0_0_20px_rgba(0,212,170,0.3)] hover:shadow-[0_0_30px_rgba(0,212,170,0.5)]"
          >
            Unirme →
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
