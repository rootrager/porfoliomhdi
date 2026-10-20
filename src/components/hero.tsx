import Link from "next/link";
import { MovingBorderLink } from "./moving-border";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/desktop.mp4" media="(min-width: 768px)" type="video/mp4" />
        <source src="/videos/mobile.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/70" />
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <p className="mb-6 font-neopixel text-xs uppercase tracking-[0.4em] text-[#ccff00]">
            PERSONAL PORTFOLIO
          </p>
          <h1
            className="font-neopixel text-3xl font-normal uppercase leading-snug tracking-wider sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9)" }}
          >
            I could fix the world,
            <br />
            <span className="text-[#ccff00]">but they won&apos;t give me the source code!</span>
          </h1>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MovingBorderLink
              href="/about"
              glowColor="#ccff00"
              innerBg="#ccff00"
              duration={3.5}
              size={110}
              className="text-[#090b04]"
            >
              <span className="font-display text-2xl font-bold">درباره من</span>
            </MovingBorderLink>

            <MovingBorderLink
              href="/#work"
              glowColor="#ccff00"
              innerBg="#0d1105"
              duration={4}
              size={90}
              className="text-white border border-white/20"
            >
              <span className="font-display text-2xl font-bold text-white">پروژه‌ها و خدمات من</span>
            </MovingBorderLink>
          </div>
        </div>
      </div>

      {/* Cyber/Futuristic Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <a
          href="#work"
          aria-label="اسکرول به بخش بعدی"
          className="group flex flex-col items-center gap-2 text-white/80 transition-all hover:text-[#ccff00]"
        >
          <span className="font-orbitron text-[10px] uppercase tracking-[0.25em] text-[#ccff00]/90">
            SCROLL
          </span>
          {/* Cyber Capsule Pill */}
          <div className="relative flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 bg-black/40 p-1 shadow-[0_0_15px_rgba(204,255,0,0.15)] backdrop-blur-sm transition-colors group-hover:border-[#ccff00]">
            <span className="h-2 w-1.5 animate-bounce rounded-full bg-[#ccff00] shadow-[0_0_8px_#ccff00]" />
          </div>
        </a>
      </div>

      {/* Smooth Transition Gradient to Section 2 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#090b04] via-[#090b04]/60 to-transparent" />
    </section>
  );
}
