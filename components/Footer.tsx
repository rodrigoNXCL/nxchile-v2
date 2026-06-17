import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 mt-12 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2025 NXChile. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#1B5E20]">Inicio</Link>
            <Link href="/problemas" className="hover:text-[#1B5E20]">Problemas</Link>
            <Link href="/casos" className="hover:text-[#1B5E20]">Casos</Link>
            <Link href="/clientes" className="hover:text-[#1B5E20]">Clientes</Link>
            <Link href="/contacto" className="hover:text-[#1B5E20]">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
