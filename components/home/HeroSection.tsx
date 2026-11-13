import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ position: "relative", overflow: "hidden", minHeight: 640 }}
    >
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        aria-hidden
      >
        <div
          className="absolute inset-y-0 left-0 w-[62%]"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "62%",
          }}
        >
          <CoverImage
            src="/images/hero-panel.jpg"
            alt=""
            priority
            sizes="62vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent from-35% via-[#070d18]/20 to-[#070d18]"
            style={{ position: "absolute", inset: 0 }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#070d18]/70 via-transparent to-[#070d18]/40"
            style={{ position: "absolute", inset: 0 }}
          />
        </div>
      </div>

      <Container className="relative grid min-h-[640px] items-center py-16 lg:min-h-[720px] lg:grid-cols-[1.05fr_0.95fr] lg:py-10">
        <div className="relative z-10 max-w-xl">
          <h1 className="text-[34px] font-extrabold leading-[1.25] text-white sm:text-[46px]">
            مهندسی اتوماسیون صنعتی
            <br />
            <span className="text-[#b7a8ff]">و هوش مصنوعی</span>
          </h1>
          <p className="mt-5 text-[16px] font-bold leading-8 text-cyan-200/90">
            از طراحی و ساخت تجهیزات صنعتی تا توسعه سامانه‌های هوشمند
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-8 text-slate-300">
            فرا تجهیز گستر آرمان (FTGA)، ارائه‌دهنده راهکارهای مهندسی در حوزه
            اتوماسیون صنعتی، طراحی و ساخت ماشین‌آلات تخصصی و تجهیزات آزمایشگاهی،
            و توسعه فناوری‌های هوش مصنوعی است.
          </p>
          <p className="mt-3 max-w-lg text-[15px] leading-8 text-slate-300">
            ما با تلفیق تخصص در برق و ابزار دقیق، PLC و HMI، شبکه‌های صنعتی،
            بینایی ماشین و مدل‌های زبانی بزرگ (LLM)، راهکارهایی جامع از طراحی و
            ساخت تا پیاده‌سازی و راه‌اندازی ارائه می‌دهیم.
          </p>
          <p className="mt-4 text-[15px] font-bold text-white">
            FTGA؛ مهندسی، فناوری و نوآوری صنعتی.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button href="/projects">پروژه‌ها</Button>
            <Button href="/contact" variant="ghost">
              تماس با ما
            </Button>
          </div>
        </div>

        <div className="relative hidden h-full lg:block">
          <div className="absolute start-auto end-6 top-[58%] z-10 max-w-[210px] rounded-2xl border border-white/10 bg-[#10192c]/85 p-4 backdrop-blur">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
              <ShieldCheck size={16} className="text-violet-300" />
              راه‌حل‌های قابل اعتماد
            </div>
            <p className="text-xs leading-6 text-slate-400">
              برای اتوماسیون کارآمدتر فرآیند شما
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
