export type Product = {
  slug: string;
  name: string;
  tagline: string;
  href: string;
  logo?: string;
  logoType?: "image" | "icon" | "text";
  logoAlt: string;
  featured?: boolean;
  status?: "listo" | "iniciando";
  statusLabel?: string;
  complement?: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  secondary: string;
};

export const products: Product[] = [
  {
    slug: "rindenx",
    name: "RindeNX",
    tagline: "Fondos por rendir",
    href: "https://rinde.nxchile.com",
    logo: "/images/products/rindenx-icon.png",
    logoType: "icon",
    logoAlt: "RindeNX",
    featured: true,
    status: "listo",
    complement: "Complementa a GastosNX",
    description:
      "Controla cada fondo que entregas, cada gasto que se rinde y cada saldo pendiente, desde un solo lugar. El sistema que usan pymes y contadores para cerrar rendiciones cuadradas y generar asientos contables automáticos.",
    benefits: [
      "OCR en el momento: boletas, facturas y vouchers leídos al instante",
      "Aprobación con comentarios: decisión trazada, sin ambigüedad",
      "Asiento contable automático con Debe igual a Haber",
    ],
    ctaLabel: "Conocer RindeNX",
    secondary: "Solicita una demostración",
  },
  {
    slug: "gastosnx",
    name: "GastosNX",
    tagline: "Registro de gastos",
    href: "https://gastos.nxchile.com",
    logo: "/images/products/gastosnx.png",
    logoType: "image",
    logoAlt: "GastosNX",
    status: "listo",
    description:
      "Captura y organiza boletas, vouchers y gastos operacionales desde el celular en segundos. El gasto queda registrado, respaldado y listo para tu contador.",
    benefits: [
      "Foto del documento en el momento en que ocurre",
      "OCR que lee fecha, monto y proveedor",
      "Exportación CSV y Excel lista para revisión",
    ],
    ctaLabel: "Conocer GastosNX",
    secondary: "Prueba gratis, sin tarjeta",
  },
  {
    slug: "transnx",
    name: "TransNX",
    tagline: "Control operacional",
    href: "https://trans.nxchile.com",
    logo: "/images/products/transnx.svg",
    logoType: "image",
    logoAlt: "TransNX",
    status: "listo",
    description:
      "Rutas, evidencia fotográfica, stock de materiales y liquidación de kilometraje en una sola plataforma. Para courier, carga y flotas frutícolas.",
    benefits: [
      "App Chofer Android nativa con GPS en background",
      "Control de stock de materiales por destino",
      "Liquidación de kilometraje auditada",
    ],
    ctaLabel: "Conocer TransNX",
    secondary: "Agenda una demo gratuita",
  },
  {
    slug: "qualitynx",
    name: "QualityNX",
    tagline: "Trazabilidad y calidad",
    href: "https://quality.nxchile.com",
    logo: "/images/products/qualitynx.png",
    logoType: "image",
    logoAlt: "QualityNX",
    status: "iniciando",
    statusLabel: "Implementaciones iniciales",
    description:
      "Centraliza inspecciones, resultados, fotografías y trazabilidad para reconstruir el historial de calidad de cada lote desde una sola vista.",
    benefits: [
      "Ficha por lote con historial consultable",
      "Evidencia fotográfica vinculada a cada inspección",
      "IA que responde preguntas sobre tu operación",
    ],
    ctaLabel: "Conocer QualityNX",
    secondary: "Solicita una demostración",
  },
];

export const ecosystemFlow = [
  { label: "Fondo entregado", detail: "Administrador asigna" },
  { label: "RendeNX", detail: "Controla la rendición" },
  { label: "GastosNX", detail: "Respalda el gasto" },
  { label: "Contador", detail: "Recibe todo cuadrado" },
];