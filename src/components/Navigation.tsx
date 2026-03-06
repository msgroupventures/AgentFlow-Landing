"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    },
    [mobileOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Focus trap inside mobile menu
  useEffect(() => {
    if (!mobileOpen || !mobileMenuRef.current) return;

    const menu = mobileMenuRef.current;
    const focusableSelectors =
      'a[href], button, [tabindex]:not([tabindex="-1"])';

    // Small delay to let animations render the elements
    const timer = setTimeout(() => {
      const focusableElements = menu.querySelectorAll(focusableSelectors);
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }, 100);

    function handleTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      const focusableElements = menu.querySelectorAll(focusableSelectors);
      if (focusableElements.length === 0) return;

      const first = focusableElements[0] as HTMLElement;
      const last = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleTab);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleTab);
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Skip-to-content link */}
      <a href="#main-content" className="skip-to-content">
        Saltar al contenido principal
      </a>

      <nav
        aria-label="Navegación principal"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="font-display text-xl font-bold text-text-primary tracking-tight"
              aria-label="AgentFlow — Ir al inicio"
            >
              agent
              <span className="text-accent">Flow</span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#waitlist"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all duration-200"
            >
              Unirme a la Lista de Espera
            </a>

            {/* Mobile hamburger */}
            <button
              ref={hamburgerRef}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-50 p-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label={mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-2xl font-display font-bold text-text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#waitlist"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1 + navLinks.length * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-4 rounded-full bg-accent px-8 py-3 text-lg font-medium text-bg-primary hover:bg-accent/90 transition-colors"
              >
                Unirme a la Lista de Espera
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
