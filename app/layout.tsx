import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://atlasdevs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atlas Devs — Software, Apps e IA para empresas que escalan",
    template: "%s | Atlas Devs",
  },
  description:
    "Atlas Devs desarrolla software, aplicaciones móviles, inteligencia artificial y automatización empresarial para compañías que buscan escalar con tecnología.",
  keywords: [
    "desarrollo de software",
    "aplicaciones móviles",
    "inteligencia artificial",
    "automatización empresarial",
    "agencia de desarrollo",
    "Atlas Devs",
  ],
  authors: [{ name: "Atlas Devs" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Atlas Devs",
    title: "Atlas Devs — Software que impulsa el crecimiento de tu empresa",
    description:
      "Web, Apps, IA y Automatización para empresas que buscan escalar con tecnología.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atlas Devs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Devs — Software que impulsa el crecimiento de tu empresa",
    description:
      "Web, Apps, IA y Automatización para empresas que buscan escalar con tecnología.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={manrope.variable}>
      <body className="bg-background text-text antialiased">{children}</body>
    </html>
  );
}
