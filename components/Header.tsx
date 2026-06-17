import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="NXChile"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="text-xl font-bold text-[#1B5E20] hidden sm:inline">
            NXChile
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 text-gray-600">
          <Link href="/" className="hover:text-[#1B5E20]">Inicio</Link>
          <Link href="/problemas" className="hover:text-[#1B5E20]">Problemas que resolvemos</Link>
          <Link href="/casos" className="hover:text-[#1B5E20]">Casos reales</Link>
          <Link href="/clientes" className="hover:text-[#1B5E20]">Clientes</Link>
          <Link href="/contacto" className="hover:text-[#1B5E20]">Contacto</Link>
        </nav>
        <Link href="/contacto" className="btn-primary text-sm">
          Evaluación gratuita
        </Link>
      </div>
    </header>
  );
}
