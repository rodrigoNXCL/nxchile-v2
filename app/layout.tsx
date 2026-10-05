import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import InstagramFloat from "@/components/InstagramFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "NXChile | RindeNX, GastosNX, TransNX y QualityNX";
const description =
  "Tecnología que ordena operaciones en Chile. RindeNX para fondos por rendir, GastosNX para gastos y boletas, TransNX para transporte y QualityNX para trazabilidad de calidad. Productos listos y desarrollo a medida.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nxchile.com"),
  title,
  description,
  keywords: [
    "software de gestión Chile",
    "fondos por rendir",
    "control de gastos",
    "control operacional transporte",
    "trazabilidad de calidad",
    "digitalización operacional",
    "NXChile",
    "RindeNX",
    "GastosNX",
    "TransNX",
    "QualityNX",
  ],
  openGraph: {
    title,
    description,
    url: "https://www.nxchile.com",
    siteName: "NXChile",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable} data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text-primary)] antialiased">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <InstagramFloat />
      </body>
    </html>
  );
}