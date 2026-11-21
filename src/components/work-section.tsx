"use client";

import { Barbell, Cpu, GithubLogo, ShoppingCart, Subtitles } from "@phosphor-icons/react";
import { Reveal } from "./reveal";
import { WavyBackground } from "./wavy-background";

interface ProjectItem {
  index: string;
  title: string;
  faTitle: string;
  category: string;
  problem: string;
  solution: string;
  outcome: string;
  stack: string[];
  github?: string;
  icon: typeof Cpu;
}

const PROJECTS: ProjectItem[] = [
  {
    index: "01",
    title: "AURA Core-X Diagnostics",
    faTitle: "کشف تقلب و کارشناسی سخت‌افزار آیفون",
    category: "عیب‌یابی سخت‌افزار و iOS",
    problem:
      "در بازار دست‌دوم، دستگاه‌های پروگرام‌شده سلامت باتری را ۱۰۰٪ نشان می‌دهند و خروجی ابزارهای معمول برای کاربر غیرقابل فهم و وابسته به سرورهای خارجی است.",
    solution:
      "اتصال مستقیم USB به Lockdownd، استخراج تله‌متری واقعی BMS باتری و تطبیق شماره‌سریال‌های کارخانه با قطعات داخلی به‌صورت کاملاً محلی.",
    outcome: "100% آفلاین و زیروتراست",
    stack: ["iOS Protocols", "Hardware Security", "FastAPI", "Gemma 3 Local"],
    github: "https://github.com/rootrager/aura-corex-diagnostics",
    icon: Cpu,
  },
  {
    index: "02",
    title: "DaniFone Commerce Engine",
    faTitle: "موتور قیمت‌گذاری، حسابداری و انبار زنده",
    category: "سیستم‌های چندایجنتی و فین‌تک",
    problem:
      "نوسان لحظه‌ای قیمت آیفون با نرخ ارز، بررسی دستی صدها فیش واریزی و پیگیری فرآیند انتقال مالکیت همتا باعث خطای انسانی و اتلاف سرمایه می‌شد.",
    solution:
      "ترکیب بینایی ماشین برای ارزیابی وضعیت دستگاه، ربات تلگرام OCR برای پردازش فیش‌های بانکی و داشبورد حسابداری سه‌دید با کلیدهای میانبر سریع.",
    outcome: "83+ دستگاه همگام در چرخه زنده",
    stack: ["ReAct Agents", "Vision OCR", "SQLite WAL", "Next.js 16"],
    github: "https://github.com/rootrager/danifon-pricing-engine",
    icon: ShoppingCart,
  },
  {
    index: "03",
    title: "Shamloo AI Coach Copilot",
    faTitle: "دستیار مربیگری ورزشی با پایگاه دانش برداری",
    category: "پایگاه دانش برداری و HITL",
    problem:
      "سپردن برنامه‌نویسی تمرینی به مدل‌های عمومی به دلیل احتمال توهم برای ورزشکاران آسیب‌دیده خطرناک است و پیگیری برنامه‌ها توسط شاگردان دشوار بود.",
    solution:
      "معماری Human-in-the-Loop روی ChromaDB از صدها برنامه واقعی؛ آنالیز وضعیت بدنی در تلگرام، اعتبارسنجی دقیق با Pydantic و خروجی PDF پس از تایید مربی.",
    outcome: "اعتبارسنجی سفت‌وسخت بدون توهم",
    stack: ["ChromaDB RAG", "Telegram Bot API", "Pydantic V2", "WeasyPrint"],
    icon: Barbell,
  },
  {
    index: "04",
    title: "SubFarsiPro & WebSubFarsi",
    faTitle: "سامانه تولید و ترجمه هوشمند زیرنویس فارسی",
    category: "پردازش زبان طبیعی و اجرای آفلاین",
    problem:
      "ابزارهای زیرنویس یا نیازمند اشتراک‌های دلاری و اینترنت پایدار بودند یا ترجمه ماشینی، تحت‌اللفظی و بی‌روح به فارسی ارائه می‌دادند.",
    solution:
      "موتور تبدیل صوت به متن Whisper در کنار مدل‌های زبانی محلی به‌صورت ۱۰۰٪ آفلاین؛ ترجمه طبیعی با اصطلاحات رایج و لحن واقعی محاوره‌ای فارسی.",
    outcome: "100% آفلاین با حفظ حریم خصوصی",
    stack: ["Whisper AI", "Local LLM", "Python / PyQt", "Motion"],
    github: "https://github.com/rootrager/finalsubfarsi",
    icon: Subtitles,
  },
];

const HIGHLIGHTS = [
  { value: "4", label: "سیستم تولیدی در دنیای واقعی" },
  { value: "83+", label: "دستگاه فعال در موتور موجودی زنده" },
  { value: "100%", label: "معماری بومی و مستقل از کلود" },
] as const;

export function WorkSection() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-line bg-bg py-24 text-fg md:py-32"
    >
      <WavyBackground
        waves={4}
        speed="slow"
        blur={26}
        opacity={0.22}
        colors={["--accent", "--olive-dark", "--bg"]}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-accent">پروژه‌های منتخب</p>
              <h2 className="mt-2 font-display text-5xl tracking-normal text-fg md:text-7xl">
                کارهایی که ساخته‌ام
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-fg-secondary md:text-base">
              هر پروژه برای شکستن یک محدودیت واقعی در بازار، حذف کارهای تکراری یا کارشناسی دقیق در
              لایه صفر ساخته شده است.
            </p>
          </div>
        </Reveal>

        {/* Single-Elevation Project Grid (Zero Cards-in-Cards) */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, idx) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.title} delay={idx * 0.08}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface/90 p-6 backdrop-blur-md transition-colors duration-200 hover:border-line-strong md:p-8">
                  <div>
                    {/* Clean Metadata Top Row */}
                    <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
                      <div className="flex items-center gap-3 text-xs text-muted">
                        <span
                          dir="ltr"
                          className="font-mono text-sm font-semibold tabular-nums text-accent"
                        >
                          {project.index}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{project.category}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`مخزن گیت‌هاب ${project.title}`}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-fg-secondary transition-colors duration-150 hover:border-accent hover:text-accent"
                          >
                            <GithubLogo size={18} />
                          </a>
                        ) : null}
                        <span
                          aria-hidden="true"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-elevated text-accent"
                        >
                          <Icon size={18} />
                        </span>
                      </div>
                    </div>

                    {/* Titles */}
                    <div className="mt-6">
                      <h3
                        dir="ltr"
                        className="font-orbitron text-xl font-bold tracking-tight text-fg md:text-2xl"
                      >
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-base font-semibold text-accent">
                        {project.faTitle}
                      </p>
                    </div>

                    {/* Challenge & Solution separated by whitespace and hairline rule */}
                    <div className="mt-6 space-y-4 text-sm leading-relaxed text-fg-secondary">
                      <div>
                        <span className="font-semibold text-danger">چالش: </span>
                        <span>{project.problem}</span>
                      </div>

                      <div className="border-t border-line pt-4">
                        <span className="font-semibold text-fg">راه‌حل: </span>
                        <span>{project.solution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Unboxed Stack Metadata & Outcome */}
                  <div className="mt-8 border-t border-line pt-5">
                    <p dir="ltr" className="font-mono text-xs leading-relaxed text-muted">
                      {project.stack.join(" · ")}
                    </p>
                    <p className="mt-2.5 text-sm font-semibold text-fg">{project.outcome}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Grounded Quantitative Proof Row */}
        <Reveal delay={0.2}>
          <div className="mt-14 grid grid-cols-1 divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-x-reverse sm:divide-y-0">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="px-4 py-6 text-center">
                <div
                  dir="ltr"
                  className="font-orbitron text-2xl font-bold tabular-nums text-accent md:text-3xl"
                >
                  {item.value}
                </div>
                <p className="mt-1.5 text-sm text-fg-secondary">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
