import Link from "next/link";
import { cn } from "@/lib/utils";

interface MovingBorderLinkProps {
  href: string;
  duration?: number;
  size?: number;
  radius?: number;
  glowColor?: string;
  innerBg?: string;
  children: React.ReactNode;
  className?: string;
}

export function MovingBorderLink({
  href,
  duration = 4,
  size = 90,
  radius = 9999, // Pill/rounded-full default
  glowColor = "#ccff00",
  innerBg = "#090b04",
  children,
  className,
}: MovingBorderLinkProps) {
  return (
    <Link
      href={href}
      data-slot="moving-border-link"
      style={
        {
          "--mb-duration": `${duration}s`,
          "--mb-size": `${size}px`,
          "--mb-radius": `${radius}px`,
          "--mb-glow": glowColor,
          borderRadius: radius,
        } as React.CSSProperties
      }
      className={cn(
        "relative inline-flex cursor-pointer items-center justify-center overflow-hidden p-[1.5px] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]",
        className
      )}
    >
      {/* Light ray travelling around the border via offset-path */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 motion-reduce:bg-[linear-gradient(135deg,var(--mb-glow),transparent_35%,transparent_65%,var(--mb-glow))]"
      >
        <span
          className="absolute aspect-square w-[var(--mb-size)] bg-[radial-gradient(circle,var(--mb-glow),transparent_65%)] motion-safe:animate-moving-border motion-reduce:hidden"
          style={{
            offsetPath: `rect(0 auto auto 0 round var(--mb-radius))`,
          }}
        />
      </span>

      {/* Button content surface */}
      <span
        className="relative z-10 flex h-full w-full items-center justify-center rounded-[inherit] px-8 py-3.5"
        style={{ backgroundColor: innerBg }}
      >
        {children}
      </span>
    </Link>
  );
}
