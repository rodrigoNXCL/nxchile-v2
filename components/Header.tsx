"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

type NavGroup = {
  label: string;
  href?: string;
  children?: NavItem[];
};

const navItems: NavGroup[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Soluciones",
    children: [
      { label: "GastosNX", href: "https://gastos.nxchile.com", external: true },
      { label: "TransNX", href: "https://trans.nxchile.com", external: true },
      { label: "Soluciones a medida", href: "/contacto" },
    ],
  },
  { label: "Cómo trabajamos", href: "/#como-trabajamos" },
  { label: "Clientes", href: "/clientes" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderNavLink = (item: NavGroup, isMobile = false) => {
    if (item.children) {
      if (isMobile) {
        const isExpanded = mobileExpanded === item.label;
        return (
          <div key={item.label} className="w-full text-center">
            <button
              onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
              className="text-xl font-medium text-[var(--text-primary)] inline-flex items-center gap-2"
              aria-expanded={isExpanded}
            >
              {item.label}
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? "max-h-96 mt-4" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-4">
                {item.children.map((child) =>
                  child.external ? (
                    <a
                      key={child.label}
                      href={child.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      {child.label}
                    </a>
                  ) : (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="text-base text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      {child.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        );
      }

      const isOpen = openDropdown === item.label;
      return (
        <div key={item.label} className="relative" ref={isOpen ? dropdownRef : undefined}>
          <button
            onClick={() => setOpenDropdown(isOpen ? null : item.label)}
            onMouseEnter={() => setOpenDropdown(item.label)}
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 inline-flex items-center gap-1"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            {item.label}
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div
            onMouseLeave={() => setOpenDropdown(null)}
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[220px] rounded-2xl border border-gray-200 bg-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.15)] p-2 transition-all duration-200 ${
              isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
            }`}
          >
            {item.children.map((child) =>
              child.external ? (
                <a
                  key={child.label}
                  href={child.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] rounded-xl hover:bg-[var(--bg)] hover:text-[var(--accent)] transition-colors"
                >
                  {child.label}
                </a>
              ) : (
                <Link
                  key={child.label}
                  href={child.href}
                  className="block px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] rounded-xl hover:bg-[var(--bg)] hover:text-[var(--accent)] transition-colors"
                >
                  {child.label}
                </Link>
              )
            )}
          </div>
        </div>
      );
    }

    const isActive = item.href === pathname;
    if (isMobile) {
      return (
        <Link
          key={item.label}
          href={item.href!}
          className={`text-xl font-medium transition-colors ${
            isActive ? "text-[var(--accent)]" : "text-[var(--text-primary)] hover:text-[var(--accent)]"
          }`}
        >
          {item.label}
        </Link>
      );
    }
    return (
      <Link
        key={item.label}
        href={item.href!}
        className={`text-sm font-medium transition-colors duration-200 ${
          isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        }`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-premium flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/images/logo.svg"
            alt="NXChile Logo"
            className="h-11 md:h-12 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => renderNavLink(item, false))}
          <Link href="/contacto" className="btn-primary text-sm px-5 py-2.5">
            Evaluación gratuita
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[4rem] bg-white/95 backdrop-blur-lg transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6 px-6 overflow-y-auto">
          {navItems.map((item) => renderNavLink(item, true))}
          <Link href="/contacto" className="btn-primary text-base px-6 py-3 mt-4">
            Evaluación gratuita
          </Link>
        </nav>
      </div>
    </header>
  );
}
