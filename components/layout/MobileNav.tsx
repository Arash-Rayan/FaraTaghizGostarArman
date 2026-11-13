"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="site-header__mobile">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn("site-header__mobile-link", isActive && "is-active")}
          >
            {link.label}
          </Link>
        );
      })}
      <Link href="/contact" className="brand-btn site-header__mobile-cta">
        دریافت قیمت
      </Link>
    </div>
  );
}
