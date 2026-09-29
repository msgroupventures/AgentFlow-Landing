import localFont from "next/font/local";

// Brand typography per docs/BRAND-GUIDELINES-v1.2.md §6: Geist Sans (single family) + Geist Mono.
export const geistSans = localFont({
  src: "../../public/fonts/Geist-Variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-geist-sans",
  display: "swap",
});

export const geistMono = localFont({
  src: "../../public/fonts/GeistMono-Variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-geist-mono",
  display: "swap",
});
