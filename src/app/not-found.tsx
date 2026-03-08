import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-display text-7xl font-bold text-accent">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-text-primary">
          Página no encontrada
        </h1>
        <p className="mt-3 text-base text-text-secondary leading-relaxed">
          La página que buscás no existe o fue movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg-primary hover:brightness-110 transition-all"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
