import type { Metadata, Viewport } from "next";
import { satoshi, generalSans } from "@/lib/fonts";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0B14",
};

export const metadata: Metadata = {
  title:
    "AgentFlow — IA que automatiza tus operaciones inmobiliarias por WhatsApp",
  description:
    "AgentFlow es la plataforma de IA que automatiza visitas, documentos y coordinación para agentes RE/MAX en Argentina. Todo por WhatsApp.",
  keywords:
    "agente IA inmobiliario, automatización inmobiliaria Argentina, CRM WhatsApp inmobiliario, RE/MAX Argentina IA, proptech Argentina",
  metadataBase: new URL("https://agentflow.casa"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "AgentFlow — Tu asistente de IA inmobiliario en WhatsApp",
    description:
      "Automatizá visitas, documentos y coordinación. Todo por WhatsApp. Diseñado para agentes RE/MAX en Argentina.",
    type: "website",
    url: "https://agentflow.casa",
    siteName: "AgentFlow",
    locale: "es_AR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AgentFlow — IA para operaciones inmobiliarias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentFlow — IA que automatiza tus operaciones inmobiliarias",
    description:
      "Automatizá visitas, documentos y coordinación por WhatsApp. Para agentes RE/MAX en Argentina.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AgentFlow",
    description:
      "Plataforma de IA que automatiza operaciones inmobiliarias para agentes RE/MAX en Argentina a través de WhatsApp.",
    url: "https://agentflow.casa",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, WhatsApp",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "AgentFlow",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AgentFlow",
    url: "https://agentflow.casa",
    description:
      "AI-powered real estate operations platform for RE/MAX agents in Argentina",
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-AR"
      className={`${satoshi.variable} ${generalSans.variable}`}
    >
      <head>
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
