import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#111827] px-4 py-14 text-white sm:px-0">
      <div className="container-custom">
        <div className="flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            {/* 👇 REEMPLAZA ESTA LÍNEA */}
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} NXChile. Todos los derechos reservados.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Diseño y tecnología para operaciones más inteligentes.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300 md:justify-end md:gap-6">
            <Link href="/" className="transition hover:text-white">Inicio</Link>
            <Link href="/experiencia" className="transition hover:text-white">Experiencia</Link>
            <Link href="/clientes" className="transition hover:text-white">Clientes</Link>
            <Link href="/contacto" className="transition hover:text-white">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}