"use client";

import Link from "next/link";
import { products, services } from "@/data/site";

interface SearchPanelProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export function SearchPanel({ query, onQueryChange }: SearchPanelProps) {
  const trimmed = query.trim();

  const results = trimmed
    ? [
        ...services
          .filter((item) => item.title.includes(trimmed))
          .map((item) => ({
            href: "/services",
            label: item.title,
            kind: "خدمت",
          })),
        ...products
          .filter(
            (item) =>
              item.name.toLowerCase().includes(trimmed.toLowerCase()) ||
              item.brand.includes(trimmed),
          )
          .map((item) => ({
            href: "/products",
            label: `${item.name} · ${item.brand}`,
            kind: "محصول",
          })),
      ].slice(0, 6)
    : [];

  return (
    <div className="border-t border-white/5 bg-[#0b1426] px-5 py-4 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <input
          autoFocus
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="جستجوی خدمات یا محصولات..."
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
        />
        {results.length > 0 && (
          <div className="mt-3 space-y-1">
            {results.map((item) => (
              <Link
                key={`${item.kind}-${item.label}`}
                href={item.href}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-slate-200 hover:bg-white/5"
              >
                <span>{item.label}</span>
                <span className="text-xs text-slate-500">{item.kind}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
