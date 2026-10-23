import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CoverFrameProps {
  children: ReactNode;
  className?: string;
  /** Pixel height used as inline style so layout holds before CSS loads */
  height: number;
  /** Optional min-height for large/desktop frames */
  minHeight?: number;
  rounded?: boolean;
  style?: CSSProperties;
}

/**
 * Relative frame for fill images. Inline position/size prevents
 * next/image from covering the whole viewport during FOUC.
 */
export function CoverFrame({
  children,
  className,
  height,
  minHeight,
  style,
}: CoverFrameProps) {
  return (
    <div
      data-cover-frame
      className={cn("relative overflow-hidden", className)}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height,
        minHeight,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
