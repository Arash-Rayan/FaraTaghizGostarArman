import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

export function GlassCard({
  children,
  className,
  style,
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag className={cn("glass-card", className)} style={style}>
      {children}
    </Tag>
  );
}
