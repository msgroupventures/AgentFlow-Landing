import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AgentFlow",
    short_name: "AgentFlow",
    description:
      "IA que automatiza tus operaciones inmobiliarias por WhatsApp.",
    start_url: "/",
    display: "browser",
    background_color: "#0A0B14",
    theme_color: "#0A0B14",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
