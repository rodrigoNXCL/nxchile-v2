import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import InstagramFloat from "@/components/InstagramFloat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NXChile | Resolvemos problemas operativos con tecnología",
  description: "Soluciones a medida para empresas. Deja de perder tiempo con procesos manuales y WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <InstagramFloat />
      </body>
    </html>
  );
}
