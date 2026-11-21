"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Cpu, Sparkle, User } from "@phosphor-icons/react";
import { HeroVideo } from "./hero-video";

type Side = "work" | "human" | null;

export function SplitPortal() {
  const [hovered, setHovered] = useState<Side>(null);

  const workGrow = hovered === "work" ? "md:flex-[1.28]" : hovered === "human" ? "md:flex-[0.72]" : "md:flex-1";
  const humanGrow = hovered === "human" ? "md:flex-[1.28]" : hovered === "work" ? "md:flex-[0.72]" : "md:flex-1";

  return (
    <main className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-bg md:flex-row">
      {/* Subtle Center Brand Anchor (Desktop) */}
      <div className="pointer-events-none fixed inset-x-0 top-5 z-30 flex justify-center px-4">
        <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0e110a]/85 px-4 py-1.5 text-sm font-medium text-[#f5f5f0] shadow-lg backdrop-blur-md">
          <Sparkle size={14} weight="fill" className="text-[#ccff00]" aria-hidden="true" />
          <span className="font-display text-xl tracking-normal">مهدی</span>
          <span className="text-white/30" aria-hidden="true">
            ·
          </span>
          <span dir="ltr" className="font-orbitron text-xs font-bold tracking-wider text-[#ccff00]">
            MHDI
          </span>
        </div>
      </div>

      {/* RIGHT HEMISPHERE (in RTL, first column sits on the right): Work, Projects & AI Agent */}
      <Link
        href="/work"
        data-hemisphere="work"
        onMouseEnter={() => setHovered("work")}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered("work")}
        onBlur={() => setHovered(null)}
        className={`group relative flex min-h-[50dvh] flex-1 flex-col justify-between overflow-hidden bg-bg px-6 pt-20 pb-10 text-fg transition-[flex-grow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent motion-reduce:transition-none md:min-h-dvh md:px-12 md:py-16 lg:px-16 ${workGrow}`}
      >
        {/* Atmospheric Responsive Hero Video */}
        <HeroVideo
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen bg-[url('/images/hero-poster-mobile.webp')] bg-cover bg-center transition-opacity duration-500 group-hover:opacity-35 md:bg-[url('/images/hero-poster-desktop.webp')]"
          desktopSrc="/videos/desktop.mp4"
          mobileSrc="/videos/mobile.mp4"
          desktopPoster="/images/hero-poster-desktop.webp"
          mobilePoster="/images/hero-poster-mobile.webp"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/70 to-bg/95"
        />

        {/* Top Kicker */}
        <div className="relative z-10 flex items-center justify-between border-b border-line pb-4 text-xs text-muted">
          <span className="inline-flex items-center gap-2 font-medium text-accent">
            <Cpu size={16} aria-hidden="true" />
            <span>نیم‌کره راست</span>
          </span>
          <span dir="ltr" className="font-mono">
            01 · BUILDER & AGENT
          </span>
        </div>

        {/* Center Focal Typography */}
        <div className="relative z-10 my-auto py-8">
          <h1 className="font-display text-5xl leading-none tracking-normal text-fg sm:text-6xl lg:text-7xl">
            پروژه‌ها، اسکیل‌ها
            <span className="block text-accent">و ایجنت هوش مصنوعی</span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-fg-secondary sm:text-base">
            این سمت برای کارهای فنی و سیستم‌هایی‌ست که ساختم؛ از کارشناسی سخت‌افزار آیفون و
            مهندسی معکوس تا نقشه تعاملی ایجنت شخصی‌ام.
          </p>

          <p dir="ltr" className="mt-6 font-mono text-xs text-muted">
            AURA Core-X · DaniFone · Shamloo Copilot · SubFarsi
          </p>
        </div>

        {/* Bottom Action Cue */}
        <div className="relative z-10 flex items-center justify-between border-t border-line pt-5">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
            <span>ورود به دنیای تخصصی</span>
            <ArrowLeft
              size={18}
              weight="bold"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-x-1.5 motion-reduce:transition-none"
            />
          </span>
          <span className="text-xs text-muted">تیره · لیمویی</span>
        </div>
      </Link>

      {/* Hairline Divider between hemispheres */}
      <div
        aria-hidden="true"
        className="h-px w-full shrink-0 bg-white/15 md:h-auto md:w-px md:bg-neutral-500/30"
      />

      {/* LEFT HEMISPHERE (in RTL, second column sits on the left): Human, Ethos, Story & Gallery */}
      <Link
        href="/human"
        data-hemisphere="human"
        onMouseEnter={() => setHovered("human")}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered("human")}
        onBlur={() => setHovered(null)}
        className={`group relative flex min-h-[50dvh] flex-1 flex-col justify-between overflow-hidden bg-bg px-6 pt-12 pb-10 text-fg transition-[flex-grow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent motion-reduce:transition-none md:min-h-dvh md:px-12 md:py-16 lg:px-16 ${humanGrow}`}
      >
        {/* Subtle Editorial Artwork Atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.09] transition-opacity duration-500 group-hover:opacity-[0.14]"
        >
          <Image
            src="/images/art-dreamscape.webp"
            alt=""
            fill
            referrerPolicy="no-referrer"
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover object-center grayscale-[35%]"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/75 to-bg/95"
        />

        {/* Top Kicker */}
        <div className="relative z-10 flex items-center justify-between border-b border-line pb-4 text-xs text-muted">
          <span className="inline-flex items-center gap-2 font-medium text-accent">
            <User size={16} aria-hidden="true" />
            <span>نیم‌کره چپ</span>
          </span>
          <span dir="ltr" className="font-mono">
            02 · HUMAN & STORY
          </span>
        </div>

        {/* Center Focal Typography */}
        <div className="relative z-10 my-auto py-8">
          <h2 className="font-display text-5xl leading-none tracking-normal text-fg sm:text-6xl lg:text-7xl">
            خودِ من، روحیات
            <span className="block text-accent">و داستان مسیرم</span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-fg-secondary sm:text-base">
            این سمت برای شناختن آدم پشت کدهاست؛ از زیر صندلیِ اتاق کودکی و چهار سال کف بازار مد تا
            اخلاق کاری، گالری کارهام و چیزایی که الان درگیرشم.
          </p>

          <p className="mt-6 text-xs font-medium text-muted">
            داستان زندگی · الان درگیر چیم · گالری آثار · موسیقی و فیلم
          </p>
        </div>

        {/* Bottom Action Cue */}
        <div className="relative z-10 flex items-center justify-between border-t border-line pt-5">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
            <span>ورود به دنیای انسانی</span>
            <ArrowLeft
              size={18}
              weight="bold"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-x-1.5 motion-reduce:transition-none"
            />
          </span>
          <span className="text-xs text-muted">روشن · کاغذی</span>
        </div>
      </Link>
    </main>
  );
}
