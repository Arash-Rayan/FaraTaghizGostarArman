import Link from "next/link";
import { company } from "@/data/site";
import { cn } from "@/lib/cn";

interface LogoProps {
  compact?: boolean;
  href?: string;
  className?: string;
}

export function Logo({ compact = false, href = "/", className }: LogoProps) {
  const content = (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        width={compact ? 34 : 40}
        height={compact ? 34 : 40}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 3.5 36.5 20 20 36.5 3.5 20 20 3.5Z"
          stroke="#8d7cff"
          strokeWidth="1.7"
        />
        <path d="M20 11 29 20 20 29 11 20 20 11Z" fill="#7c5cff" />
        <path d="M20 15.2 24.8 20 20 24.8 15.2 20 20 15.2Z" fill="#d7d0ff" />
      </svg>
      <div className="leading-tight">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="text-[15px] font-extrabold tracking-wide text-white sm:text-[16px]">
            {company.nameFa}
          </span>
          <span className="text-[11px] font-bold tracking-[0.14em] text-violet-300">
            {company.nameEn}
          </span>
        </div>
        {!compact && (
          <div className="text-[10.5px] font-medium text-slate-400">
            {company.tagline}
          </div>
        )}
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="shrink-0" aria-label={company.nameFa}>
      {content}
    </Link>
  );
}
