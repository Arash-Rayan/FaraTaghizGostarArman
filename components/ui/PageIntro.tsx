import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  className?: string;
  titleClassName?: string;
}

export function PageIntro({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
}: PageIntroProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="mb-3 text-[12px] font-semibold tracking-[0.18em] text-cyan-200/90">
        {eyebrow}
      </p>
      <h1
        className={cn(
          "text-3xl font-extrabold leading-snug text-white sm:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </h1>
      {description ? (
        <p className="mt-5 text-sm leading-8 text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}
