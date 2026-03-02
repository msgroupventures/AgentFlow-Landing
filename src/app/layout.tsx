import type { Metadata } from "next";
import { satoshi, generalSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "AgentFlow — IA que automatiza tus operaciones inmobiliarias por WhatsApp",
  description:
    "AgentFlow es la plataforma de IA que automatiza visitas, documentos y coordinación para agentes RE/MAX en Argentina. Todo por WhatsApp.",
  keywords:
    "agente IA inmobiliario, automatización inmobiliaria Argentina, CRM WhatsApp inmobiliario, RE/MAX Argentina IA, proptech Argentina",
  openGraph: {
    title: "AgentFlow — Tu asistente de IA inmobiliario en WhatsApp",
    description:
      "Automatizá visitas, documentos y coordinación. Todo por WhatsApp. Diseñado para agentes RE/MAX en Argentina.",
    type: "website",
    url: "https://agentflow.casa",
    images: [{ url: "https://agentflow.casa/og-image.png" }],
  },
};

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
      <body>{children}</body>
    </html>
  );
}
