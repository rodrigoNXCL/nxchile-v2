"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { products } from "@/data/productos";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  hint?: string;
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
      ...products.map<NavItem>((p) => ({
        label: p.name,
        href: p.href,
        external: true,
        hint: p.tagline,
      })),
      { label: "Soluciones a medida", href: "/contacto", hint: "Desarrollo a medida" },
    ],
  },
  { label: "Cómo trabajamos", href: "/#como-trabajamos" },
  { label: "Clientes", href: "/clientes" },
  { label: "Contacto", href: "/contacto" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(true);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(false), 140);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setOpenDropdown(false);
    setMobileExpanded(false);
  };

  const renderMobileItem = (item: NavGroup) => {
    if (item.children) {
      const children = item.children;
      return (
        <div key={item.label} className="w-full">
          <button
            onClick={() => setMobileExpanded(!mobileExpanded)}
            className="inline-flex items-center gap-1.5 text-lg font-medium tracking-tight text-[var(--text-primary)]"
            aria-expanded={mobileExpanded}
          >
            {item.label}
            <Chevron open={mobileExpanded} />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileExpanded ? "mt-4 max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-0.5 rounded-[var(--radius-md)] bg-[var(--surface-muted)]/70 p-2">
              {children.map((child, idx) => (
                <li key={child.label} className={idx === children.length - 1 ? "mt-1 border-t border-gray-200 pt-1" : ""}>
                  {child.external ? (
                    <a
                      href={child.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeAll}
                      className="flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 hover:bg-white/70"
                    >
                      <span className="text-[0.95rem] font-medium text-[var(--text-primary)]">
                        {child.label}
                      </span>
                      {child.hint && (
                        <span className="text-xs text-[var(--text-tertiary)]">{child.hint}</span>
                      )}
                    </a>
                  ) : (
                    <Link
                      href={child.href}
                      onClick={closeAll}
                      className="flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 hover:bg-white/70"
                    >
                      <span className="text-[0.95rem] font-medium text-[var(--text-primary)]">
                        {child.label}
                      </span>
                      {child.hint && (
                        <span className="text-xs text-[var(--text-tertiary)]">{child.hint}</span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    const isActive = item.href === pathname;
    return (
      <Link
        key={item.label}
        href={item.href!}
        onClick={closeAll}
        className={`text-lg font-medium tracking-tight transition-colors ${
          isActive ? "text-[var(--accent)]" : "text-[var(--text-primary)] hover:text-[var(--accent)]"
        }`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? "border-b border-gray-200/60 bg-white/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(15,23,42,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group -ml-1 flex items-center p-1">
          <img
            src="/images/logo.svg"
            alt="NXChile"
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.03] md:h-11"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-7 md:flex lg:gap-9">
          {navItems.map((item) => {
            if (item.children) {
              const children = item.children;
              return (
                <div
                  key={item.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={openMenu}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className={`inline-flex items-center gap-1.5 py-2 text-sm font-medium tracking-tight transition-colors duration-200 ${
                      openDropdown
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                    aria-expanded={openDropdown}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <Chevron open={openDropdown} />
                  </button>

                  <div
                    className={`absolute left-1/2 top-full w-[290px] -translate-x-1/2 pt-3 transition-all duration-200 ease-out ${
                      openDropdown
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-gray-200/70 bg-[var(--surface)] p-2 shadow-[var(--shadow-lift)]">
                      <p className="px-3.5 pb-2 pt-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                        Productos
                      </p>
                      {children.map((child, idx) => (
                        <div key={child.label}>
                          {idx === children.length - 1 && (
                            <div className="mx-3.5 my-2 border-t border-gray-100" />
                          )}
                          {child.external ? (
                            <a
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeAll}
                              className="group/link flex items-center justify-between gap-3 rounded-[14px] px-3.5 py-2.5 transition-colors duration-200 hover:bg-[var(--surface-muted)]"
                            >
                              <span className="flex flex-col">
                                <span className="text-sm font-medium text-[var(--text-primary)] transition-colors group-hover/link:text-[var(--accent)]">
                                  {child.label}
                                </span>
                                {child.hint && (
                                  <span className="text-xs text-[var(--text-tertiary)]">
                                    {child.hint}
                                  </span>
                                )}
                              </span>
                              <svg
                                width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="shrink-0 text-[var(--text-tertiary)] transition-all duration-200 group-hover/link:translate-x-0.5 group-hover/link:text-[var(--accent)]"
                                aria-hidden="true"
                              >
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            </a>
                          ) : (
                            <Link
                              href={child.href}
                              onClick={closeAll}
                              className="group/link flex items-center justify-between gap-3 rounded-[14px] px-3.5 py-2.5 transition-colors duration-200 hover:bg-[var(--surface-muted)]"
                            >
                              <span className="flex flex-col">
                                <span className="text-sm font-medium text-[var(--text-primary)] transition-colors group-hover/link:text-[var(--accent)]">
                                  {child.label}
                                </span>
                                {child.hint && (
                                  <span className="text-xs text-[var(--text-tertiary)]">
                                    {child.hint}
                                  </span>
                                )}
                              </span>
                              <svg
                                width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="shrink-0 text-[var(--text-tertiary)] transition-all duration-200 group-hover/link:translate-x-0.5 group-hover/link:text-[var(--accent)]"
                                aria-hidden="true"
                              >
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            const isActive = item.href === pathname;
            return (
              <Link
                key={item.label}
                href={item.href!}
                onClick={closeAll}
                className={`py-2 text-sm font-medium tracking-tight transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contacto"
            onClick={closeAll}
            className="btn-primary ml-1 px-5 py-2.5 text-sm"
          >
            Evaluación gratuita
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="-mr-2 rounded-xl p-2.5 text-[var(--text-primary)] transition-colors hover:bg-black/5 md:hidden"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-[var(--bg)]/95 backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="container-wide flex h-full flex-col items-center justify-center gap-6 overflow-y-auto pb-24 pt-8">
          {navItems.map((item) => renderMobileItem(item))}
          <Link
            href="/contacto"
            onClick={closeAll}
            className="btn-primary mt-4 w-full max-w-xs px-6 py-3.5"
          >
            Evaluación gratuita
          </Link>
        </nav>
      </div>
    </header>
  );
}