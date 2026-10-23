import Image from "next/image";
import { cn } from "@/lib/cn";

interface CoverImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  objectPosition?: string;
  priority?: boolean;
  sizes?: string;
  /** Explicit pixel height for the cover frame (avoids FOUC full-page image) */
  height?: number;
}

/**
 * Cover image that keeps layout stable before CSS loads.
 * Uses an inline-styled absolute frame so next/image `fill`
 * cannot escape to the viewport during FOUC.
 */
export function CoverImage({
  src,
  alt,
  className,
  imageClassName,
  objectPosition = "center",
  priority = false,
  sizes = "100vw",
  height,
}: CoverImageProps) {
  return (
    <span
      className={cn("block overflow-hidden", className)}
      style={{
        position: "absolute",
        inset: 0,
        display: "block",
        overflow: "hidden",
        width: "100%",
        height: height ? `${height}px` : "100%",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={imageClassName}
        style={{
          objectFit: "cover",
          objectPosition,
        }}
      />
    </span>
  );
}
