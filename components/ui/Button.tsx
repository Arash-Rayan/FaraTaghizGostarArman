import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "ghost" | "outline";

interface ButtonBaseProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
  showPlay?: boolean;
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  type?: never;
  onClick?: never;
}

interface ButtonActionProps extends ButtonBaseProps {
  href?: never;
  type?: "button" | "submit";
  onClick?: () => void;
}

type ButtonProps = ButtonLinkProps | ButtonActionProps;

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "purple-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white",
  ghost:
    "inline-flex items-center gap-3 text-sm font-medium text-slate-200 transition hover:text-white",
  outline:
    "inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white transition hover:bg-white/5",
};

export function Button({
  children,
  className,
  variant = "primary",
  showArrow = variant === "primary",
  showPlay = variant === "ghost",
  ...props
}: ButtonProps) {
  const content = (
    <>
      {children}
      {showArrow && <ArrowLeft size={16} />}
      {showPlay && (
        <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15">
          <Play size={11} fill="currentColor" />
        </span>
      )}
    </>
  );

  const classes = cn(variantClass[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {content}
    </button>
  );
}
