import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import InstagramFloat from "@/components/InstagramFloat";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "NXChile | Soluciones Tecnológicas Operativas",
  description: "Digitalización, automatización y plataformas de gestión para empresas que buscan orden, trazabilidad y eficiencia real.",
  keywords: ["tecnología operacional", "digitalización", "automatización", "gestión empresarial", "NXChile"],
  openGraph: {
    title: "NXChile | Soluciones Tecnológicas Operativas",
    description: "Transformamos problemas operativos en sistemas claros, trazables y eficientes.",
    url: "https://nxchile.cl",
    siteName: "NXChile",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NXChile | Soluciones Tecnológicas Operativas",
    description: "Transformamos problemas operativos en sistemas claros, trazables y eficientes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased bg-[var(--bg)] text-[var(--text-primary)] min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20 md:pt-24">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <InstagramFloat />
      </body>
    </html>
  );
}