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
    faTitle: "تشخیص تقلب و کارشناسی سخت‌افزار آیفون",
    category: "سخت‌افزار و iOS",
    problem:
      "توی بازار آیفون دست‌دوم، گوشی‌های پروگرام‌شده سلامت باتری رو ۱۰۰٪ نشون می‌دن و خروجی ابزارهایی مثل 3uTools هم برای آدم عادی گنگه و هم وابسته به کلوده.",
    solution:
      "یه سیستم آفلاین ساختم که مستقیم با USB به Lockdownd وصل می‌شه، دیتای خام BMS باتری رو می‌خونه و سریال قطعات داخلی رو با کارخونه تطبیق می‌ده.",
    outcome: "کارشناسی ۱۰۰٪ آفلاین و مستقل",
    stack: ["iOS Protocols", "Hardware Security", "FastAPI", "Gemma 3 Local"],
    github: "https://github.com/rootrager/aura-corex-diagnostics",
    icon: Cpu,
  },
  {
    index: "02",
    title: "DaniFone Commerce Engine",
    faTitle: "موتور قیمت‌گذاری، حسابداری و انبار زنده",
    category: "ایجنت هوشمند و فین‌تک",
    problem:
      "قیمت آیفون ثانیه‌ای با دلار بالا پایین می‌شه؛ چک کردن دستی صدها فیش واریزی و پیگیری انتقال مالکیت همتا هم پر از خطای انسانی و دردسر بود.",
    solution:
      "بینایی ماشین برای بررسی ظاهر گوشی، یه بات تلگرام OCR برای خوندن فیش‌های بانکی و یه داشبورد حسابداری سریع با شورتکات‌های کیبورد رو گذاشتم کنار هم.",
    outcome: "بیش از ۸۳ دستگاه توی چرخه زنده",
    stack: ["ReAct Agents", "Vision OCR", "SQLite WAL", "Next.js 16"],
    github: "https://github.com/rootrager/danifon-pricing-engine",
    icon: ShoppingCart,
  },
  {
    index: "03",
    title: "Shamloo AI Coach Copilot",
    faTitle: "دستیار مربیگری ورزشی با دیتابیس برداری",
    category: "RAG و تایید انسانی",
    problem:
      "برنامه تمرینی دادن به هوش مصنوعیِ خالی خطرناکه؛ اگه مدل توهم بزنه ممکنه به ورزشکار آسیب‌دیده ضرر بزنه. از اون طرف شاگردها هم مدام برنامه‌هاشون رو گم می‌کردن.",
    solution:
      "صدها برنامه واقعی مربی رو ریختم توی ChromaDB؛ بات توی تلگرام وضعیت شاگرد رو می‌گیره، با Pydantic سخت‌گیرانه چکش می‌کنه و بعد از تایید خود مربی، یه PDF مرتب تحویل می‌ده.",
    outcome: "تایید نهایی با مربی، بدون توهم",
    stack: ["ChromaDB RAG", "Telegram Bot API", "Pydantic V2", "WeasyPrint"],
    icon: Barbell,
  },
  {
    index: "04",
    title: "SubFarsiPro & WebSubFarsi",
    faTitle: "ساخت و ترجمه زیرنویس فارسی به‌صورت آفلاین",
    category: "هوش مصنوعی آفلاین",
    problem:
      "ابزارهای زیرنویس یا اشتراک دلاری و اینترنت خوب می‌خوان، یا یه ترجمه خشک و کتابی و بی‌روح تحویل می‌دن که اصلاً شبیه حرف‌زدن ما نیست.",
    solution:
      "Whisper رو با مدل‌های زبانی محلی ترکیب کردم تا همه‌چیز ۱۰۰٪ آفلاین روی سیستم خود کاربر اجرا بشه و زیرنویس با لحن محاوره‌ای و طبیعی فارسی در بیاد.",
    outcome: "اجرای کامل روی سیستم خودت",
    stack: ["Whisper AI", "Local LLM", "Python / PyQt", "Motion"],
    github: "https://github.com/rootrager/finalsubfarsi",
    icon: Subtitles,
  },
];

const HIGHLIGHTS = [
  { value: "4", label: "پروژه واقعی و در حال استفاده" },
  { value: "83+", label: "دستگاه توی سیستم انبار زنده" },
  { value: "100%", label: "اجرای محلی بدون وابستگی به کلود" },
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
              <p className="text-sm font-medium text-accent">کارهای واقعی</p>
              <h2 className="mt-2 font-display text-5xl tracking-normal text-fg md:text-7xl">
                چیزهایی که ساختم
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-fg-secondary md:text-base">
              کد وقتی جذابه که یه گره واقعی رو باز کنه. این پروژه‌ها همه‌شون از دل یه دردسر واقعی تو
              بازار یا کار روزمره در اومدن، نه تمرین‌های الکی.
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
                            aria-label={`گیت‌هاب ${project.title}`}
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
                        <span className="font-semibold text-danger">مسئله: </span>
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
