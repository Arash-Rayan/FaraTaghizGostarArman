import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CoverFrame } from "@/components/ui/CoverFrame";
import { CoverImage } from "@/components/ui/CoverImage";
import { services } from "@/data/site";

export function ServicesPreview() {
  return (
    <Container as="section" className="py-16 lg:py-20">
      <div className="grid items-end gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-[12px] font-semibold tracking-[0.18em] text-cyan-200/90">
            خدمات ما
          </p>
          <h2 className="text-3xl font-extrabold leading-snug text-white sm:text-[38px]">
            از طراحی تا
            <br />
            اتوماسیون کامل
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-8 text-slate-400">
            خدمات کامل اتوماسیون صنعتی؛ از طراحی الکتریکال و ساخت تابلو تا
            برنامه‌نویسی، راه‌اندازی و پشتیبانی مستمر.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 hover:text-white"
          >
            مشاهده همه خدمات
            <ArrowLeft size={15} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.id}
              href="/services"
              className="group overflow-hidden rounded-[22px] border border-white/8"
            >
              <CoverFrame height={230} className="min-h-[230px]">
                <CoverImage
                  src={service.image}
                  alt={service.title}
                  objectPosition={service.imagePos}
                  sizes="(max-width: 640px) 100vw, 40vw"
                  imageClassName="transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-[#070d18]/55 to-black/10" />
                <div className="relative z-10 flex h-full min-h-[230px] flex-col justify-end p-5">
                  <span className="mb-2 text-xs text-slate-400">
                    {service.number}
                  </span>
                  <h3 className="text-[16px] font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-6 text-slate-300">
                    {service.text}
                  </p>
                </div>
              </CoverFrame>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
