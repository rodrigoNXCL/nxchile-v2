import Link from "next/link";
import { products } from "@/data/productos";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0B1220] text-white">
      <div className="container-wide py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-5 inline-block">
              <img
                src="/images/logo.svg"
                alt="NXChile"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Liberamos trabas operacionales con tecnología. Productos listos y desarrollo
              a medida para empresas en Chile.
            </p>
            <p className="mt-6 text-xs text-slate-500">
              Hecho en Chile para la realidad chilena.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Productos
            </h3>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.slug}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  Soluciones a medida
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Empresa
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Inicio", href: "/" },
                { label: "Cómo trabajamos", href: "/#como-trabajamos" },
                { label: "Clientes", href: "/clientes" },
                { label: "Contacto", href: "/contacto" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href="mailto:contacto@nxchile.com"
                  className="transition-colors duration-200 hover:text-white"
                >
                  contacto@nxchile.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/56977412178"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-white"
                >
                  WhatsApp +56 9 7741 2178
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {year} NXChile. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-500">
            RindeNX · GastosNX · TransNX · QualityNX
          </p>
        </div>
      </div>
    </footer>
  );
}