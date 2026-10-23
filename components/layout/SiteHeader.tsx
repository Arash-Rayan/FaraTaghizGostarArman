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

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setQuery("");
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#070d18]/78 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-[1280px] items-center justify-between gap-4 px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3.5 py-2 text-[14.5px] transition",
                  isActive
                    ? "font-semibold text-white"
                    : "text-slate-300 hover:text-white",
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-[2px] h-px bg-violet-300" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full text-slate-300 transition hover:bg-white/5 hover:text-white"
            aria-label="جستجو"
          >
            <Search size={18} />
          </button>
          <div className="hidden items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300 sm:flex">
            FA
            <span className="text-slate-500">▾</span>
          </div>
          <Link
            href="/contact"
            className="purple-btn hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white sm:inline-flex"
          >
            دریافت قیمت
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="منو"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <SearchPanel query={query} onQueryChange={setQuery} />
      )}
      {menuOpen && <MobileNav />}
    </header>
  );
}
