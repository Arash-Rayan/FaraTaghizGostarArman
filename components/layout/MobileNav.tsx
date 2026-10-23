"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="border-t border-white/5 bg-[#0b1426] px-5 py-4 lg:hidden">
      <div className="flex flex-col gap-1">
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
                "rounded-xl px-3 py-3 text-sm",
                isActive
                  ? "bg-white/5 font-semibold text-white"
                  : "text-slate-300",
              )}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          className="purple-btn mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-white"
        >
          دریافت قیمت
        </Link>
      </div>
    </div>
  );
}
