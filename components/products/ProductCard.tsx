import { Button } from "@/components/ui/Button";
import { CoverFrame } from "@/components/ui/CoverFrame";
import { CoverImage } from "@/components/ui/CoverImage";
import { GlassCard } from "@/components/ui/GlassCard";
import type { ProductItem } from "@/types/site";

interface ProductCardProps {
  product: ProductItem;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <GlassCard as="article" className="overflow-hidden rounded-[22px]">
      <CoverFrame height={208} className="bg-[#0a1424]">
        <CoverImage
          src={product.image}
          alt={product.name}
          objectPosition={product.imagePos ?? "center"}
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101b30] via-transparent to-black/20" />
      </CoverFrame>
      <div className="p-5">
        <div className="mb-2 text-xs text-violet-300">{product.brand}</div>
        <h2 className="text-lg font-semibold text-white">{product.name}</h2>
        <p className="mt-2 text-sm leading-7 text-slate-400">{product.text}</p>
        <div className="mt-5">
          <Button href="/contact">استعلام قیمت</Button>
        </div>
      </div>
    </GlassCard>
  );
}
