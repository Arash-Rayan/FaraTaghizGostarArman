import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function GlassCard({
  children,
  className,
  as: Tag = "div",
}: GlassCardProps) {
  return <Tag className={cn("glass-card", className)}>{children}</Tag>;
}
