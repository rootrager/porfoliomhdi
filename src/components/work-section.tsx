"use client";

import { useState } from "react";
import { Reveal } from "./reveal";
import { WavyBackground } from "./wavy-background";
import { 
  Cpu, 
  ShoppingCart, 
  Barbell, 
  Subtitles, 
  ArrowUpRight, 
  GithubLogo, 
  ShieldCheck, 
  Terminal,
  Lightning
} from "@phosphor-icons/react";

interface ProjectData {
  rank: string;
  codename: string;
  title: string;
  faTitle: string;
  category: string;
  problem: string;
  solution: string;
  metricLabel: string;
  metricValue: string;
  tags: { label: string; color: string }[];
  github?: string;
  accent: string;
  icon: typeof Cpu;
}

const PROJECTS: ProjectData[] = [
  {
    rank: "#01",
    codename: "HARDWARE_ZERO_TRUST",
    title: "AURA Core-X Diagnostics",
    faTitle: "کشف تقلب و کارشناسی سخت‌افزار آیفون",
    category: "iOS Forensics & Hardware Security",
    problem: "در بازار دست‌دوم، بردهای تقلبی و دستگاه‌های پروگرام‌شده سلامت باتری را ۱۰۰٪ نشان می‌دهند و اطلاعات 3uTools برای کاربر غیرقابل فهم و وابسته به کلود است.",
    solution: "سیستم زیروتراست با اتصال مستقیم USB به Lockdownd؛ استخراج تله‌متری زنده BMS باتری و مطابقت شماره‌سریال‌های فیزیکی کارخانه با قطعات داخلی بدون اتکا به کلود.",
    metricLabel: "DIAGNOSTIC ENGINE",
    metricValue: "100% HEURISTIC ZERO-CLOUD",
    tags: [
      { label: "iOS Protocols", color: "text-[#ccff00]" },
      { label: "Hardware Security", color: "text-[#38bdf8]" },
      { label: "FastAPI", color: "text-[#a78bfa]" },
      { label: "Gemma 3 Local", color: "text-[#f43f5e]" },
    ],
    github: "https://github.com/rootrager/aura-corex-diagnostics",
    accent: "#ccff00",
    icon: Cpu,
  },
  {
    rank: "#02",
    codename: "AUTONOMOUS_MARKET",
    title: "DaniFone Commerce Engine",
    faTitle: "موتور قیمت‌گذاری، حسابداری و انبار زنده",
    category: "Autonomous Multi-Agent & FinTech",
    problem: "قیمت آیفون ثانیه‌ای با ارز نوسان می‌کند و بررسی دستی صدها فیش واریزی و فرآیند دونوبته انتقال مالکیت همتا باعث خطای انسانی و اتلاف سرمایه می‌شد.",
    solution: "تلفیق مدل‌های بینایی ماشین برای تشخیص مدل و سلامت بدنه، بات تلگرام OCR پردازش فیش‌های پایا/کارت‌به‌کارت و داشبورد حسابداری سه‌دید با کلیدهای میانبر پرسرعت.",
    metricLabel: "LIVE SYNCED INVENTORY",
    metricValue: "83+ DEVICES // ReAct LOOP",
    tags: [
      { label: "ReAct Agents", color: "text-[#ccff00]" },
      { label: "Vision OCR", color: "text-[#fb923c]" },
      { label: "SQLite WAL", color: "text-[#22d3ee]" },
      { label: "Next.js 16", color: "text-[#a78bfa]" },
    ],
    github: "https://github.com/rootrager/danifon-pricing-engine",
    accent: "#38bdf8",
    icon: ShoppingCart,
  },
  {
    rank: "#03",
    codename: "HUMAN_IN_THE_LOOP",
    title: "Shamloo AI Coach Copilot",
    faTitle: "دستیار مربیگری ورزشی با پایگاه دانش برداری",
    category: "Vector RAG & Autonomous HITL",
    problem: "سپردن برنامه‌نویسی تمرینی به مدل‌های هوش مصنوعی عمومی به دلیل توهم (Hallucination) برای ورزشکار آسیب‌دیده خطرناک است و شاگردان هم برنامه‌ها را گم می‌کردند.",
    solution: "معماری Human-in-the-Loop با دیتابیس برداری ChromaDB از صدها برنامه واقعی؛ آنالیز خودکار وضعیت بدنی در تلگرام، اعتبارسنجی سفت‌وسخت با Pydantic و تولید PDF شکیل پس از تایید مربی.",
    metricLabel: "RELIABILITY PROTOCOL",
    metricValue: "ZERO-HALLUCINATION HITL",
    tags: [
      { label: "ChromaDB RAG", color: "text-[#ccff00]" },
      { label: "Telegram Bot API", color: "text-[#60a5fa]" },
      { label: "Pydantic V2", color: "text-[#facc15]" },
      { label: "WeasyPrint", color: "text-[#ec4899]" },
    ],
    accent: "#ff3b3b",
    icon: Barbell,
  },
  {
    rank: "#04",
    codename: "LOCAL_SPEECH_SYNTH",
    title: "SubFarsiPro & WebSubFarsi",
    faTitle: "سامانه تولید و ترجمه هوشمند زیرنویس فارسی",
    category: "Offline AI & Natural Language Processing",
    problem: "ابزارهای زیرنویس یا نیازمند اشتراک‌های دلاری و اینترنت پرسرعت بودند یا خروجی ماشینی، تحت‌اللفظی و کاملاً بی‌روحی به زبان فارسی ارائه می‌دادند.",
    solution: "موتور تبدیل صوت به متن Whisper با مدل‌های زبانی بومی به صورت ۱۰۰٪ آفلاین و محافظ حریم خصوصی؛ ترجمه طبیعی با اصطلاحات عامیانه و لحن واقعی محاوره‌ای فارسی.",
    metricLabel: "PRIVACY RUNTIME",
    metricValue: "100% OFFLINE LOCAL",
    tags: [
      { label: "Whisper AI", color: "text-[#ccff00]" },
      { label: "Local LLM", color: "text-[#38bdf8]" },
      { label: "Python/PyQt", color: "text-[#fbbf24]" },
      { label: "Framer Motion", color: "text-[#a78bfa]" },
    ],
    github: "https://github.com/rootrager/finalsubfarsi",
    accent: "#a78bfa",
    icon: Subtitles,
  },
];

export function WorkSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#080a04] py-24 text-white md:py-32 border-t border-[#1a220d]"
    >
      {/* Background Ambience */}
      <WavyBackground
        waves={4}
        speed="slow"
        blur={22}
        opacity={0.3}
        colors={["#ccff00", "#586600", "#16200a", "#080a04"]}
      />

      {/* Grid Pattern Texture */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(to right, #ccff00 1px, transparent 1px), linear-gradient(to bottom, #ccff00 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#222810] pb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ccff00]/20 bg-[#121808] px-3.5 py-1 mb-3">
                <Lightning className="h-3.5 w-3.5 text-[#ccff00]" />
                <span dir="ltr" className="font-mono text-[11px] font-bold tracking-widest text-[#ccff00] uppercase">
                  THE FORGE // CORE REPOSITORIES
                </span>
              </div>
              <h2 className="font-display text-5xl tracking-normal text-white md:text-7xl lg:text-8xl">
                ویترین بلک‌لیست پروژه‌ها
              </h2>
            </div>
            
            <p className="max-w-md font-persian text-sm leading-relaxed text-[#9ca38f] md:text-right" dir="rtl">
              کدنویسی بدون حل چالش‌های واقعی بازار بی‌ارزش است. تمام پروژه‌ها برای شکستن یک محدودیت واقعی، حذف کارهای تکراری یا کارشناسی در لایه صفر ساخته شده‌اند.
            </p>
          </div>
        </Reveal>

        {/* NFS Blacklist Style Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((proj, idx) => {
            const Icon = proj.icon;
            const isSelected = activeProject === idx;
            return (
              <Reveal key={proj.title} delay={idx * 0.1}>
                <div
                  onMouseEnter={() => setActiveProject(idx)}
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[26px] border bg-[#0d1207]/90 p-6 md:p-8 backdrop-blur-md transition-all duration-300 ${
                    isSelected 
                      ? "border-[#ccff00]/60 shadow-[0_0_30px_rgba(204,255,0,0.12)] -translate-y-1" 
                      : "border-[#1e2710] hover:border-[#ccff00]/40"
                  }`}
                >
                  {/* Top Bar: Rank & Category */}
                  <div>
                    <div className="flex items-center justify-between border-b border-[#1c240f] pb-4">
                      <div className="flex items-center gap-2.5">
                        <span 
                          dir="ltr" 
                          className="font-orbitron text-xl font-black tracking-wider text-[#ccff00]"
                        >
                          {proj.rank}
                        </span>
                        <span className="h-3 w-px bg-[#2a3614]" />
                        <span 
                          dir="ltr" 
                          className="font-mono text-[10px] tracking-widest text-[#849170] uppercase"
                        >
                          {proj.codename}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {proj.github && (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`گیت‌هاب پروژه ${proj.title}`}
                            className="rounded-lg border border-[#263312] p-1.5 text-[#889772] transition-colors hover:border-[#ccff00] hover:text-[#ccff00]"
                          >
                            <GithubLogo className="h-4 w-4" />
                          </a>
                        )}
                        <div className="rounded-lg bg-[#16200a] p-1.5 text-[#ccff00] border border-[#2a3615]">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    {/* Titles */}
                    <div className="mt-5">
                      <h3 
                        dir="ltr" 
                        className="font-orbitron text-xl font-bold tracking-tight text-white md:text-2xl"
                      >
                        {proj.title}
                      </h3>
                      <h4 
                        dir="rtl" 
                        className="font-persian text-base font-semibold text-[#ccff00] mt-1"
                      >
                        {proj.faTitle}
                      </h4>
                    </div>

                    {/* Problem -> Solution Story */}
                    <div dir="rtl" className="mt-5 space-y-3 font-persian text-xs sm:text-sm leading-relaxed text-[#b1b8a5]">
                      <div className="rounded-xl border border-[#222c12] bg-[#090d04]/60 p-3">
                        <span className="font-bold text-[#f43f5e] block mb-1">
                          [!] چالش بازار:
                        </span>
                        <p className="text-[#a0a894]">{proj.problem}</p>
                      </div>

                      <div className="rounded-xl border border-[#283515] bg-[#111908]/60 p-3">
                        <span className="font-bold text-[#ccff00] block mb-1">
                          [✓] معماری راه‌حل من:
                        </span>
                        <p className="text-[#cfd4c2]">{proj.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Tags & Telemetry Metric */}
                  <div className="mt-6 border-t border-[#1c240f] pt-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4" dir="ltr">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className={`rounded-md border border-[#242f13] bg-[#0c1106] px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider ${tag.color}`}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>

                    {/* Metric readout */}
                    <div 
                      dir="ltr" 
                      className="flex items-center justify-between rounded-xl bg-[#141d0a] px-3.5 py-2 border border-[#283614]"
                    >
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#6b7757]">
                        {proj.metricLabel}
                      </span>
                      <span className="font-mono text-xs font-bold text-white tracking-wider flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-[#ccff00]" />
                        <span>{proj.metricValue}</span>
                      </span>
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Global Summary Badge Capsule */}
        <Reveal delay={0.4}>
          <div className="mt-14 flex justify-center">
            <div 
              dir="ltr"
              className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 rounded-full border border-[#243013] bg-[#0e1407]/90 px-8 py-3.5 font-mono text-xs shadow-2xl backdrop-blur-md"
            >
              <div className="text-center sm:text-left">
                <span className="font-orbitron text-xl font-bold text-[#ccff00]">+100</span>
                <span className="text-[#7d8b67] text-[10px] block uppercase tracking-wider">Solutions Delivered</span>
              </div>
              <div className="h-6 w-px bg-[#263314] hidden sm:block" />
              <div className="text-center sm:text-left">
                <span className="font-orbitron text-xl font-bold text-white">+500K</span>
                <span className="text-[#7d8b67] text-[10px] block uppercase tracking-wider">Lines Of Hardened Code</span>
              </div>
              <div className="h-6 w-px bg-[#263314] hidden sm:block" />
              <div className="text-center sm:text-left">
                <span className="font-orbitron text-xl font-bold text-[#ccff00]">0-DAY</span>
                <span className="text-[#7d8b67] text-[10px] block uppercase tracking-wider">Security Architecture</span>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
