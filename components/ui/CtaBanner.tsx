import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface CtaBannerProps {
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  align?: "start" | "center";
  className?: string;
  children?: ReactNode;
}

export function CtaBanner({
  title,
  description,
  href,
  actionLabel,
  align = "center",
  className,
}: CtaBannerProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/8 bg-[#0b1528] p-8",
        align === "center" && "text-center",
        className,
      )}
    >
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p
        className={cn(
          "mt-3 max-w-lg text-sm leading-7 text-slate-400",
          align === "center" && "mx-auto",
        )}
      >
        {description}
      </p>
      <div className={cn("mt-6", align === "center" && "flex justify-center")}>
        <Button href={href}>{actionLabel}</Button>
      </div>
    </div>
  );
}
