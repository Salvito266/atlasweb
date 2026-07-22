import { clsx } from "clsx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  showIcon?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showIcon = true,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ease-out active:scale-[0.98]";

  const variants = {
    primary:
      "bg-primary text-white shadow-glow hover:bg-primary-hover hover:shadow-[0_0_80px_-8px_rgba(96,165,250,0.55)]",
    secondary:
      "glass text-text hover:border-primary/50 hover:bg-white/[0.04]",
  };

  return (
    <Link href={href} className={clsx(base, variants[variant], className)}>
      {children}
      {showIcon && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      )}
    </Link>
  );
}
