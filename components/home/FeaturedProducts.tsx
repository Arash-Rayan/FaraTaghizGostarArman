import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CoverFrame } from "@/components/ui/CoverFrame";
import { CoverImage } from "@/components/ui/CoverImage";
import { GlassCard } from "@/components/ui/GlassCard";
import { featuredProducts } from "@/data/site";

export function FeaturedProducts() {
  return (
    <Container as="section" className="pb-8">
      <div className="grid items-center gap-8 rounded-[28px] border border-white/6 bg-[#0b1528]/70 p-6 lg:grid-cols-[0.78fr_1.22fr] lg:p-8">
        <div>
          <p className="mb-3 text-[12px] font-semibold tracking-[0.18em] text-cyan-200/90">
            تجهیزات و راه‌حل‌ها
          </p>
          <h2 className="text-3xl font-extrabold leading-snug text-white">
            تابلو، PLC، HMI
            <br />
            و درایو صنعتی
          </h2>
          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white hover:bg-white/5"
          >
            مشاهده محصولات
            <ArrowLeft size={15} />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {featuredProducts.map((product) => (
            <Link key={product.id} href="/products">
              <GlassCard className="flex items-center gap-4 rounded-2xl p-3.5 transition hover:border-violet-400/30">
                <CoverFrame
                  height={78}
                  className="w-[96px] shrink-0 rounded-xl bg-[#0a1424]"
                  style={{ width: 96, flexShrink: 0, borderRadius: 12 }}
                >
                  <CoverImage
                    src={product.image}
                    alt={product.name}
                    objectPosition={product.imagePos ?? "center"}
                    sizes="96px"
                  />
                </CoverFrame>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-[12px] leading-6 text-slate-400">
                    {product.text}
                  </p>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
