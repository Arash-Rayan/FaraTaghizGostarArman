import Link from "next/link";
import { company } from "@/data/site";

interface LogoProps {
  href?: string;
}

export function Logo({ href = "/" }: LogoProps) {
  const image = (
    <img
      src="/images/logo-mark.png"
      alt=""
      width={70}
      height={45}
      className="site-logo-mark"
    />
  );

  if (!href) return image;

  return (
    <Link href={href} className="site-logo" aria-label={company.nameFa}>
      {image}
    </Link>
  );
}
