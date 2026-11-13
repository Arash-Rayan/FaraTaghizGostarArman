"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { SearchPanel } from "@/components/layout/SearchPanel";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setQuery("");
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("site-header", scrolled && "is-scrolled")}>
      <div className="site-header__bar">
        <Logo />

        <nav className="site-header__nav" aria-label="منوی اصلی">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn("site-header__link", isActive && "is-active")}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            onClick={() => setSearchOpen((value) => !value)}
            className="site-header__icon"
            aria-label="جستجو"
            aria-expanded={searchOpen}
          >
            <Search size={18} />
          </button>
          <Link href="/contact" className="brand-btn site-header__cta">
            دریافت قیمت
          </Link>
          <button
            type="button"
            className="site-header__icon site-header__menu"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="منو"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div className="site-header__accent" aria-hidden />

      {searchOpen && (
        <SearchPanel query={query} onQueryChange={setQuery} />
      )}
      {menuOpen && <MobileNav />}
    </header>
  );
}
