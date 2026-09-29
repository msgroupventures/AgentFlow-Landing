import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

type Lang = "es" | "en";

const backLabel: Record<Lang, string> = {
  es: "Volver al inicio",
  en: "Back to home",
};

const updatedLabel: Record<Lang, string> = {
  es: "Última actualización",
  en: "Last updated",
};

function BackLink({ lang, className = "" }: { lang: Lang; className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors ${className}`}
    >
      <ArrowLeft size={16} aria-hidden="true" />
      {backLabel[lang]}
    </Link>
  );
}

function LanguageSwitch({
  lang,
  esHref,
  enHref,
}: {
  lang: Lang;
  esHref: string;
  enHref: string;
}) {
  const base = "px-2 py-1 rounded-md transition-colors";
  const active = "text-accent font-semibold";
  const inactive = "text-text-secondary hover:text-accent";

  return (
    <nav aria-label={lang === "es" ? "Idioma" : "Language"} className="flex items-center gap-1 text-sm">
      <Link
        href={esHref}
        hrefLang="es-AR"
        lang="es-AR"
        aria-current={lang === "es" ? "page" : undefined}
        className={`${base} ${lang === "es" ? active : inactive}`}
      >
        ES
      </Link>
      <span className="text-text-tertiary" aria-hidden="true">
        |
      </span>
      <Link
        href={enHref}
        hrefLang="en"
        lang="en"
        aria-current={lang === "en" ? "page" : undefined}
        className={`${base} ${lang === "en" ? active : inactive}`}
      >
        EN
      </Link>
    </nav>
  );
}

export function LegalPage({
  lang,
  title,
  updated,
  esHref,
  enHref,
  notice,
  children,
}: {
  lang: Lang;
  title: string;
  updated: string;
  esHref: string;
  enHref: string;
  notice?: string;
  children: React.ReactNode;
}) {
  return (
    <>
    <main
      id="main-content"
      lang={lang === "es" ? "es-AR" : "en"}
      className="min-h-screen bg-bg-primary"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-8 py-16 md:py-24">
        <div className="flex items-center justify-between gap-4 mb-12">
          <BackLink lang={lang} />
          <LanguageSwitch lang={lang} esHref={esHref} enHref={enHref} />
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-text-secondary text-sm">
          {updatedLabel[lang]}: {updated}
        </p>
        {notice && (
          <p className="mt-3 text-text-tertiary text-sm italic">{notice}</p>
        )}

        <div className="mt-12 space-y-10">{children}</div>

        <div className="mt-16 pt-8 border-t border-border">
          <BackLink lang={lang} />
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      {title && (
        <h2 className="font-display text-xl font-semibold text-text-primary mb-4">
          {id ? (
            <a href={`#${id}`} className="hover:text-accent transition-colors">
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
      )}
      <div className="space-y-3 text-text-secondary leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalTable({
  head,
  rows,
}: {
  head: string[];
  rows: React.ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-bg-secondary text-text-primary">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="text-text-primary">{children}</strong>;
}

export function ExtLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      {children}
    </a>
  );
}

export function Mail({ address }: { address: string }) {
  return (
    <a href={`mailto:${address}`} className="text-accent hover:underline">
      {address}
    </a>
  );
}

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-bg-secondary px-1.5 py-0.5 text-[0.85em] text-text-primary">
      {children}
    </code>
  );
}
