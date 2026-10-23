"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { brands, productCategories, products } from "@/data/site";
import { cn } from "@/lib/cn";
import type { ProductCategoryId } from "@/types/site";

export function ProductCatalog() {
  const [category, setCategory] = useState<ProductCategoryId>("all");
  const [brand, setBrand] = useState<string>("all");

  const filtered = useMemo(
    () =>
      products.filter((item) => {
        const categoryOk = category === "all" || item.category === category;
        const brandOk = brand === "all" || item.brand.includes(brand);
        return categoryOk && brandOk;
      }),
    [brand, category],
  );

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        {productCategories.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCategory(item.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm",
              category === item.id
                ? "purple-btn text-white"
                : "border border-white/10 text-slate-300 hover:bg-white/5",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setBrand("all")}
          className={cn(
            "rounded-full px-4 py-2 text-sm",
            brand === "all"
              ? "bg-white/10 text-white"
              : "text-slate-400 hover:text-white",
          )}
        >
          همه برندها
        </button>
        {brands.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setBrand(item)}
            className={cn(
              "rounded-full px-4 py-2 text-sm",
              brand === item
                ? "bg-white/10 text-white"
                : "text-slate-400 hover:text-white",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
