import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.industrialmente.co"),
  title: "Industrialmente | Soluciones para la industria",
  description:
    "Industrialmente desarrolla soluciones industriales y representación comercial para empresas que suministran productos y equipos industriales.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Industrialmente",
    description:
      "Soluciones industriales, representación comercial y líneas de negocio para la industria.",
    url: "https://www.industrialmente.co",
    siteName: "Industrialmente",
    images: [
      {
        url: "/brand/logo-industrialmente.png",
        width: 1200,
        height: 630,
        alt: "Logo de Industrialmente",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrialmente",
    description:
      "Soluciones industriales, representación comercial y líneas de negocio para la industria.",
    images: ["/brand/logo-industrialmente.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f3efe7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
