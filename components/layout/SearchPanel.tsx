"use client";

import Link from "next/link";
import { projects } from "@/data/site";

interface SearchPanelProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export function SearchPanel({ query, onQueryChange }: SearchPanelProps) {
  const trimmed = query.trim();

  const results = trimmed
    ? projects
        .filter(
          (item) =>
            item.title.includes(trimmed) ||
            item.industry.includes(trimmed) ||
            item.text.includes(trimmed),
        )
        .map((item) => ({
          href: "/projects",
          label: item.title,
          kind: item.industry,
        }))
        .slice(0, 8)
    : [];

  return (
    <div className="site-header__search">
      <div className="mx-auto max-w-[1280px]">
        <input
          autoFocus
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="جستجو در پروژه‌ها..."
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
