"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpLeft, Cpu, Robot, ShieldCheck, Sparkle } from "@phosphor-icons/react";
import { MovingBorderLink } from "./moving-border";
import { HeroVideo } from "./hero-video";

const FOCUS_AREAS = [
  {
    id: "hardware",
    index: "01",
    label: "سخت‌افزار و آیفون",
    summary:
      "عیب‌یابی لایه صفر از طریق ارتباط مستقیم با Lockdownd، استخراج تله‌متری BMS باتری و کارشناسی اصالت قطعات بدون اتکا به کلود.",
    metricLabel: "معماری تحلیل",
    metricValue: "100% آفلاین و بومی",
    icon: Cpu,
  },
  {
    id: "security",
    index: "02",
    label: "مهندسی معکوس و امنیت",
    summary:
      "تحلیل باینری‌های لینوکس، شناخت عمیق پروتکل‌های سطح پایین دستگاه و پیاده‌سازی زیرساخت‌های مقاوم و امن شبکه.",
    metricLabel: "اعتبارسنجی DNS",
    metricValue: "267+ سرور فعال",
    icon: ShieldCheck,
  },
  {
    id: "agents",
    index: "03",
    label: "سیستم‌های چندایجنتی",
    summary:
      "طراحی حلقه‌های خودکار ReAct، موتور قیمت‌گذاری و حسابداری دانی‌فون و دستیارهای تخصصی مبتنی بر پایگاه دانش برداری.",
    metricLabel: "موجودی همگام",
    metricValue: "83+ دستگاه زنده",
    icon: Robot,
  },
  {
    id: "graphics",
    index: "04",
    label: "گرافیک و WebGPU",
    summary:
      "ساخت رندرهای بلادرنگ WebGPU با شیدرهای اختصاصی، بلوم انتخابی و رابط‌های کاربری مدرن و سریع در وب.",
    metricLabel: "نرخ فریم رندر",
    metricValue: "60 FPS WebGPU",
    icon: Sparkle,
  },
] as const;

export function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeArea = FOCUS_AREAS[activeIdx];

  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden bg-bg text-fg">
      {/* Background Video with Responsive Source Selection */}
      <HeroVideo
        className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-screen bg-[url('/images/hero-poster-mobile.webp')] bg-cover bg-center md:bg-[url('/images/hero-poster-desktop.webp')]"
        desktopSrc="/videos/desktop.mp4"
        mobileSrc="/videos/mobile.mp4"
        desktopPoster="/images/hero-poster-desktop.webp"
        mobilePoster="/images/hero-poster-mobile.webp"
      />

      {/* Measured Contrast Scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/65 to-bg"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between px-6 py-10 sm:py-14">
        {/* Main Editorial Focal Area */}
        <div className="my-auto py-6 sm:py-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-muted">
              تهران <span aria-hidden="true">·</span> مهندسی نرم‌افزار، سخت‌افزار و هوش مصنوعی
            </p>

            <h1
              dir="ltr"
              className="mt-4 select-none font-orbitron text-6xl font-black uppercase tracking-tight text-fg sm:text-7xl md:text-8xl lg:text-9xl"
            >
              MHDI<span className="text-accent">.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-fg-secondary sm:text-xl">
              تبدیل ایده‌های سخت به سیستم‌های زنده؛ از کالبدشکافی سخت‌افزار آیفون و مهندسی معکوس
              تا معماری ایجنت‌های هوشمند و محصولات وب.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <MovingBorderLink
                href="#contact"
                glowColor="var(--accent)"
                innerBg="var(--accent)"
                duration={3.5}
                size={110}
                className="text-accent-fg"
              >
                <span className="flex items-center gap-2 whitespace-nowrap text-sm font-bold sm:text-base">
                  <span>شروع همکاری و ارتباط مستقیم</span>
                  <ArrowUpLeft size={16} weight="bold" aria-hidden="true" />
                </span>
              </MovingBorderLink>

              <Link
                href="#work"
                className="inline-flex min-h-[48px] items-center gap-2 whitespace-nowrap rounded-full border border-line-strong bg-surface/80 px-6 py-3 text-sm font-medium text-fg backdrop-blur-sm transition-colors duration-150 hover:border-accent hover:text-accent"
              >
                <span>مشاهده پروژه‌ها</span>
              </Link>
            </div>
          </div>

          {/* Interactive Discipline Switcher */}
          <div className="mx-auto mt-14 max-w-4xl border-t border-line pt-8">
            <div
              role="tablist"
              aria-label="حوزه‌های تخصصی"
              className="grid grid-cols-2 gap-1.5 rounded-2xl border border-line bg-surface/85 p-1.5 backdrop-blur-md sm:grid-cols-4"
            >
              {FOCUS_AREAS.map((area, idx) => {
                const Icon = area.icon;
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={area.id}
                    id={`tab-${area.id}`}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls={`panel-${area.id}`}
                    onClick={() => setActiveIdx(idx)}
                    className={`flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition-colors duration-150 sm:text-sm ${
                      isActive
                        ? "bg-accent font-semibold text-accent-fg"
                        : "text-fg-secondary hover:bg-surface-elevated hover:text-fg"
                    }`}
                  >
                    <Icon
                      size={16}
                      weight={isActive ? "fill" : "regular"}
                      className={isActive ? "text-accent-fg" : "text-accent"}
                      aria-hidden="true"
                    />
                    <span className="truncate">{area.label}</span>
                  </button>
                );
              })}
            </div>

            <div
              id={`panel-${activeArea.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeArea.id}`}
              className="mt-5 flex flex-col items-start justify-between gap-4 px-2 sm:flex-row sm:items-center sm:gap-8"
            >
              <p className="max-w-2xl text-sm leading-relaxed text-fg-secondary sm:text-base">
                {activeArea.summary}
              </p>

              <div className="shrink-0 border-t border-line pt-3 sm:border-s sm:border-t-0 sm:ps-6 sm:pt-0">
                <div className="text-xs text-muted">{activeArea.metricLabel}</div>
                <div
                  dir="ltr"
                  className="mt-0.5 font-mono text-sm font-semibold tabular-nums text-fg"
                >
                  {activeArea.metricValue}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Scroll Anchor */}
        <div className="flex items-center justify-center pt-4">
          <a
            href="#work"
            className="group inline-flex min-h-[40px] items-center gap-2 text-xs font-medium text-muted transition-colors duration-150 hover:text-accent"
          >
            <span>پروژه‌های منتخب</span>
            <ArrowDown
              size={14}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-y-0.5 motion-reduce:transition-none"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
