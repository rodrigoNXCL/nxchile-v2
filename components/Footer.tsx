import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#111827] px-4 py-14 text-white sm:px-0">
      <div className="container-custom">
        <div className="grid gap-10 md:grid-cols-4">

          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/images/logo.svg"
                alt="NXChile"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 max-w-sm">
              Liberamos trabas operacionales con tecnología. Productos listos y desarrollo a medida para empresas en Chile.
            </p>
            <p className="mt-6 text-xs text-slate-500">
              Hecho en Chile para la realidad chilena.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Productos
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="https://gastos.nxchile.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  GastosNX
                </a>
              </li>
              <li>
                <a
                  href="https://trans.nxchile.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  TransNX
                </a>
              </li>
              <li>
                <Link href="/contacto" className="transition hover:text-white">
                  Soluciones a medida
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">
              Empresa
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/" className="transition hover:text-white">Inicio</Link>
              </li>
              <li>
                <Link href="/clientes" className="transition hover:text-white">Clientes</Link>
              </li>
              <li>
                <Link href="/contacto" className="transition hover:text-white">Contacto</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} NXChile. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-500">
            Diseño y tecnología para operaciones más inteligentes.
          </p>
        </div>
      </div>
    </footer>
  );
}
