"use client";

import { useState } from "react";
import Link from "next/link";
import { MovingBorderLink } from "./moving-border";
import { HeroVideo } from "./hero-video";
import { 
  Cpu, 
  ShieldCheck, 
  Robot, 
  Sparkle, 
  TerminalWindow, 
  ArrowUpRight, 
  Radioactive 
} from "@phosphor-icons/react";

const MODES = [
  {
    id: "01",
    tag: "HARDWARE & IOS",
    label: "سخت‌افزار و آیفون",
    desc: "کالبدشکافی لایه صفر، استخراج داده‌های BMS باتری و کارشناسی بدون اتکا به کلود.",
    metricKey: "ACCURACY",
    metricVal: "100% HEURISTIC",
    badge: "ZERO-CLOUD",
    icon: Cpu,
  },
  {
    id: "02",
    tag: "REVERSE & RED TEAM",
    label: "مهندسی معکوس و امنیت",
    desc: "دیس‌اسمبلی باینری 3uTools لینوکس، پروتکل‌های Lockdownd و تانلینگ مقاوم DNS.",
    metricKey: "DNS RESOLVERS",
    metricVal: "267+ VALIDATED",
    badge: "0-DAY MINDSET",
    icon: ShieldCheck,
  },
  {
    id: "03",
    tag: "AGENTIC SYSTEMS",
    label: "سیستم‌های چندایجنتی",
    desc: "حلقه‌های خودکار ReAct، پرایسینگ انجین دانی‌فون و مربیگری با پایگاه داده برداری.",
    metricKey: "LIVE INVENTORY",
    metricVal: "83+ SYNCED",
    badge: "PRODUCTION",
    icon: Robot,
  },
  {
    id: "04",
    tag: "CREATIVE & WEBGPU",
    label: "شیدرهای زنده و تعاملی",
    desc: "رندرهای بلادرنگ WebGPU، جعبه نور Box of Light و پیاده‌سازی موشن و UI پیشرفته.",
    metricKey: "FRAME RATE",
    metricVal: "60 FPS WEBGPU",
    badge: "SELECTIVE BLOOM",
    icon: Sparkle,
  },
];

export function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeMode = MODES[activeIdx];

  return (
    <section className="relative min-h-[calc(100dvh-4rem)] overflow-hidden bg-[#080a04] text-white">
      {/* Background Video Texture & CRT Scanline */}
      <HeroVideo className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen bg-[url('/images/hero-poster-mobile.webp')] bg-cover bg-center md:bg-[url('/images/hero-poster-desktop.webp')]">
        <source src="/videos/desktop.mp4" media="(min-width: 768px)" type="video/mp4" />
        <source src="/videos/mobile.mp4" type="video/mp4" />
      </HeroVideo>

      {/* Dark & Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080a04]/90 via-[#080a04]/75 to-[#080a04]" />
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: "linear-gradient(to right, #ccff00 1px, transparent 1px), linear-gradient(to bottom, #ccff00 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      {/* Subtle CRT Scanline effect */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.5) 0px, rgba(0,0,0,0.5) 1px, transparent 1px, transparent 2px)"
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] max-w-7xl flex-col justify-between px-6 py-6 sm:py-10">
        
        {/* 1. TOP TELEMETRY HUD BAR */}
        <div 
          dir="ltr" 
          className="flex flex-wrap items-center justify-between gap-3 border-b border-[#222810] pb-4 font-mono text-[11px] tracking-wider text-[#707968]"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ccff00] opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ccff00]" />
            </span>
            <span className="text-white font-medium">SYS_STATUS: ACTIVE</span>
            <span className="text-[#2c3816]">{'//'}</span>
            <span>ARCH_LINUX 7.2</span>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <span>LOC: TEHRAN [35.6892° N, 51.3890° E]</span>
            <span className="text-[#2c3816]">{'//'}</span>
            <span className="text-[#ccff00]/80">TIMEZONE: UTC+03:30</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded bg-[#161f0a] px-2 py-0.5 text-[10px] text-[#ccff00] border border-[#2c3816]">
              NODE: MHDI_WORKSTATION
            </span>
          </div>
        </div>

        {/* 2. MAIN CORE IMPACT ZONE */}
        <div className="my-auto py-8 sm:py-12">
          <div className="mx-auto max-w-4xl text-center">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#ccff00]/30 bg-[#121808]/80 px-4 py-1.5 shadow-[0_0_20px_rgba(204,255,0,0.12)] backdrop-blur-md">
              <Radioactive className="h-4 w-4 animate-spin text-[#ccff00] motion-reduce:animate-none" style={{ animationDuration: "10s" }} />
              <span 
                dir="ltr" 
                className="font-mono text-xs font-semibold tracking-[0.2em] text-[#ccff00] uppercase"
              >
                HARDWARE DAY // REVERSE NIGHT
              </span>
            </div>

            {/* Display Title */}
            <h1 
              dir="ltr"
              className="mt-6 font-orbitron text-5xl font-black uppercase tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl select-none"
              style={{
                textShadow: "0 0 40px rgba(204,255,0,0.18), 0 4px 20px rgba(0,0,0,0.9)",
              }}
            >
              MHDI<span className="text-[#ccff00]">.</span>
            </h1>

            {/* Sub-tag / Concept */}
            <p 
              dir="ltr" 
              className="mt-1 font-mono text-xs uppercase tracking-[0.35em] text-[#a4b584] sm:text-sm"
            >
              [ THE DIGITAL SHAPESHIFTER // FULL-SPECTRUM BUILDER ]
            </p>

            {/* Persian Bio Manifesto */}
            <p 
              dir="rtl"
              className="mx-auto mt-6 max-w-2xl font-persian text-base leading-relaxed text-[#c7ccb8] sm:text-lg md:text-xl font-normal"
            >
              ۲۱ ساله، تهران. تبدیل ایده به سیستم‌های زنده در سخت‌ترین شرایط؛ از کالبدشکافی سخت‌افزار آیفون و مهندسی معکوس تا ساخت ایجنت‌های هوشمند خودکار.
            </p>

            {/* 3. INTERACTIVE OMNITRIX MODE DIAL */}
            <div className="mt-10">
              <div className="text-center mb-3">
                <span dir="ltr" className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#707968]">
                  SELECT SUBSYSTEM PROTOCOL
                </span>
              </div>

              {/* Segmented Switcher Controls */}
              <div 
                dir="ltr" 
                className="mx-auto grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-2xl border border-[#222810] bg-[#0c1006]/90 p-1.5 backdrop-blur-md max-w-3xl"
              >
                {MODES.map((mode, idx) => {
                  const Icon = mode.icon;
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setActiveIdx(idx)}
                      type="button"
                      className={`relative flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 rounded-xl px-2.5 sm:px-3.5 py-2 text-[10px] sm:text-xs font-mono transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#ccff00] text-[#090b04] font-bold shadow-[0_0_15px_rgba(204,255,0,0.35)] scale-[1.02]"
                          : "text-[#8d9a78] hover:text-white hover:bg-[#161e0b]"
                      }`}
                    >
                      <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${isActive ? "text-[#090b04]" : "text-[#ccff00]"}`} />
                      <span className="tracking-wider">{mode.id}{' // '}{mode.tag}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mode Detail Telemetry Card */}
              <div className="mx-auto mt-4 max-w-2xl rounded-2xl border border-[#202810] bg-[#111709]/70 p-4 text-center backdrop-blur-sm transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-center sm:text-right" dir="rtl">
                    <span className="font-persian text-sm font-bold text-[#ccff00]">
                      {activeMode.label}
                    </span>
                    <p className="font-persian text-xs text-[#a0a892] mt-0.5">
                      {activeMode.desc}
                    </p>
                  </div>

                  <div dir="ltr" className="flex items-center gap-3 border-t sm:border-t-0 sm:border-s border-[#222810] pt-2 sm:pt-0 sm:ps-4">
                    <div className="text-right">
                      <div className="font-mono text-[9px] uppercase tracking-wider text-[#687355]">
                        {activeMode.metricKey}
                      </div>
                      <div className="font-mono text-xs font-bold text-white tracking-wider">
                        {activeMode.metricVal}
                      </div>
                    </div>
                    <span className="rounded bg-[#1a250a] px-2 py-1 font-mono text-[10px] text-[#ccff00] border border-[#2f3d17]">
                      {activeMode.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. CALL TO ACTION TRIGGERS */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MovingBorderLink
                href="#contact"
                glowColor="#ccff00"
                innerBg="#ccff00"
                duration={3}
                size={110}
                className="text-[#090b04]"
              >
                <span className="font-persian text-base font-bold flex items-center gap-2">
                  <span>شروع همکاری و ارتباط مستقیم</span>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </MovingBorderLink>

              <Link
                href="#work"
                className="group flex items-center gap-2.5 rounded-full border border-[#2c3816] bg-[#0e1407]/80 px-7 py-3.5 font-mono text-xs uppercase tracking-wider text-white transition-all hover:border-[#ccff00] hover:bg-[#16200a] hover:text-[#ccff00]"
              >
                <TerminalWindow className="h-4 w-4 text-[#ccff00] transition-transform group-hover:scale-110" />
                <span>[_] VIEW BLACKLIST PROJECTS</span>
              </Link>
            </div>

          </div>
        </div>

        {/* 5. BOTTOM SCROLL TACHOMETER INDICATOR */}
        <div className="flex items-center justify-between border-t border-[#1c220d] pt-4">
          <div dir="ltr" className="hidden sm:flex items-center gap-6 font-mono text-[10px] text-[#6b7657]">
            <div>RPM: <span className="text-white">8,200</span></div>
            <div>STATUS: <span className="text-[#ccff00]">NOMINAL</span></div>
            <div>VER: <span className="text-white">v2.4.0_REV</span></div>
          </div>

          <div className="mx-auto sm:mx-0">
            <a
              href="#work"
              aria-label="اسکرول به پروژه‌ها"
              className="group flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8e9c75] transition-colors hover:text-[#ccff00]"
            >
              <span>SCROLL DOWN</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-y-1 text-[#ccff00]">
                ↓
              </span>
            </a>
          </div>

          <div dir="ltr" className="hidden sm:block font-mono text-[10px] text-[#6b7657]">
            NO_SLOP // ZERO_COMPROMISE
          </div>
        </div>

      </div>

      {/* Bottom fade into section 2 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080a04] via-[#080a04]/50 to-transparent" />
    </section>
  );
}
