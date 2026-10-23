import type { Metadata } from "next";
import { AboutActivities } from "@/components/about/AboutActivities";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutValues } from "@/components/about/AboutValues";
import { Container } from "@/components/ui/Container";
import { CoverFrame } from "@/components/ui/CoverFrame";
import { CoverImage } from "@/components/ui/CoverImage";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageIntro } from "@/components/ui/PageIntro";
import { aboutSummary, company } from "@/data/site";

export const metadata: Metadata = {
  title: "درباره ما",
  description: `درباره ${company.nameFa} (${company.nameEn}) و زمینه‌های فعالیت در برق صنعتی، اتوماسیون و ابزار دقیق`,
};

export default function AboutPage() {
  return (
    <Container className="py-14">
      <PageIntro
        className="max-w-3xl"
        eyebrow="درباره ما"
        title={`${company.nameFa} | ${company.nameEn}`}
        description={aboutSummary}
      />

      <AboutIntro />

      <CoverFrame
        height={340}
        className="mt-10 rounded-[28px] border border-white/8 bg-[#0a1424]"
      >
        <CoverImage
          src="/images/about.jpg"
          alt={`فضای صنعتی ${company.nameFa}`}
          objectPosition="center 30%"
          sizes="100vw"
        />
      </CoverFrame>

      <AboutActivities />

      <section className="mt-14">
        <p className="mb-3 text-[12px] font-semibold tracking-[0.18em] text-cyan-200/90">
          رویکرد کاری
        </p>
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          اصولی که در هر پروژه رعایت می‌کنیم
        </h2>
        <AboutValues />
      </section>

      <CtaBanner
        className="mt-12"
        align="start"
        title="آماده‌ایم پروژه شما را بررسی کنیم"
        description="اگر نقشه‌، لیست تجهیزات یا شرح فرآیند دارید، برای ما بفرستید تا مسیر اجرا و برآورد را مشخص کنیم."
        href="/contact"
        actionLabel="گفت‌وگو با تیم فنی"
      />
    </Container>
  );
}
