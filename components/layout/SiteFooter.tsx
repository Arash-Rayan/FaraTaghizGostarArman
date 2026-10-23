import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { company, navLinks } from "@/data/site";

const serviceLinks = [
  { href: "/services", label: "تابلو برق صنعتی" },
  { href: "/services", label: "سیستم‌های اتوماسیون" },
  { href: "/services", label: "ابزار دقیق" },
  { href: "/products", label: "PLC و HMI" },
];

export function SiteFooter() {
  return (
    <footer className="mountain-footer relative mt-8 overflow-hidden border-t border-white/5">
      <div className="relative z-10 mx-auto grid max-w-[1280px] gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
            طراحی تابلو برق صنعتی، اتوماسیون، ابزار دقیق و برنامه‌نویسی فرآیند؛
            از مهندسی تا راه‌اندازی.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">دسترسی سریع</h3>
          <div className="flex flex-col gap-2.5 text-sm text-slate-400">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">خدمات</h3>
          <div className="flex flex-col gap-2.5 text-sm text-slate-400">
            {serviceLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">ارتباط</h3>
          <div className="space-y-3 text-sm text-slate-400">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 shrink-0 text-violet-300" />
              {company.address}
            </p>
            {company.contacts.map((person) => (
              <p key={person.phone} className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-violet-300" />
                <span>
                  {person.name}
                  <span className="block text-slate-500" dir="ltr">
                    {person.phone}
                  </span>
                </span>
              </p>
            ))}
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-violet-300" />
              {company.email}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/5 py-6 text-center text-sm text-slate-400">
        شریک شما در اتوماسیون صنعتی
      </div>
    </footer>
  );
}
