import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { company, navLinks } from "@/data/site";
import { toTelHref } from "@/lib/phone";

const serviceLinks = [
  { href: "/projects", label: "تجهیزات آزمایشگاهی و ماشین مخصوص" },
  { href: "/projects", label: "طراحی و ساخت تابلو برق" },
  { href: "/projects", label: "اتوماسیون صنعتی و PLC" },
  { href: "/projects", label: "ابزار دقیق و شبکه صنعتی" },
  { href: "/projects", label: "بینایی ماشین و هوش مصنوعی" },
];

const persianYear = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
  year: "numeric",
}).format(new Date());

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__accent" aria-hidden />

      <div className="site-footer__inner">
        <section className="site-footer__cta">
          <div>
            <p className="site-footer__eyebrow">همکاری با FTGA</p>
            <h2 className="site-footer__cta-title">پروژه‌ای در ذهن دارید؟</h2>
            <p className="site-footer__cta-text">
              از طراحی و ساخت تا برنامه‌نویسی و راه‌اندازی، تیم فنی ما کنار
              شماست.
            </p>
          </div>
          <div className="site-footer__cta-actions">
            <Link href="/contact" className="brand-btn site-footer__cta-btn">
              ارتباط با ما
              <ArrowLeft size={16} />
            </Link>
            <Link href="/projects" className="site-footer__ghost-btn">
              مشاهده پروژه‌ها
            </Link>
          </div>
        </section>

        <div className="site-footer__grid">
          <div className="site-footer__about">
            <h3 className="site-footer__heading">درباره FTGA</h3>
            <p className="site-footer__text">
              {company.nameFa}؛ مهندسی اتوماسیون صنعتی، ساخت ماشین‌آلات و
              تجهیزات آزمایشگاهی، و توسعه راهکارهای هوشمند با بینایی ماشین و
              هوش مصنوعی.
            </p>
          </div>

          <nav aria-label="دسترسی سریع">
            <h3 className="site-footer__heading">دسترسی سریع</h3>
            <ul className="site-footer__links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="حوزه‌های فعالیت">
            <h3 className="site-footer__heading">حوزه‌های فعالیت</h3>
            <ul className="site-footer__links">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__contact">
            <h3 className="site-footer__heading">ارتباط با ما</h3>
            <img
              src="/images/logo-full.png"
              alt={`${company.nameFa} — ${company.nameEn}`}
              className="site-footer__logo"
            />
            <ul className="site-footer__people">
              {company.contacts.map((person) => (
                <li key={person.phone} className="site-footer__person">
                  <div>
                    <p className="site-footer__person-name">{person.name}</p>
                    {person.role && (
                      <p className="site-footer__person-role">{person.role}</p>
                    )}
                  </div>
                  <a
                    href={toTelHref(person.phone)}
                    className="site-footer__phone"
                  >
                    <Phone size={14} />
                    <span dir="ltr">{person.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
            {company.email && (
              <a href={`mailto:${company.email}`} className="site-footer__email">
                <Mail size={16} />
                <span dir="ltr">{company.email}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__bottom-inner">
          <span>
            © {persianYear} {company.nameFa} ({company.nameEn}). تمامی حقوق
            محفوظ است.
          </span>
          <span>شریک شما در اتوماسیون صنعتی</span>
        </div>
      </div>
    </footer>
  );
}
