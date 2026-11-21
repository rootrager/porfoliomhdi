"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  Check,
  Copy,
  EnvelopeSimple,
  GithubLogo,
  PaperPlaneTilt,
  User,
} from "@phosphor-icons/react";
import { SITE_LINKS } from "@/content/site";
import { Reveal } from "./reveal";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_LINKS.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard API unavailable in restricted contexts */
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line bg-bg pt-24 pb-12 text-fg md:pt-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-line bg-surface p-8 md:p-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Editorial Value Proposition */}
              <div className="flex flex-col justify-between lg:col-span-7">
                <div>
                  <p className="text-sm font-medium text-accent">تماس با من</p>

                  <h2 className="mt-2 font-display text-5xl tracking-normal text-fg md:text-7xl">
                    بیا حرف بزنیم
                  </h2>

                  <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-secondary md:text-lg">
                    هیچ فرم طولانی و اداری‌ای در کار نیست. اگه یه پروژه جدی داری، یه ایده که
                    می‌خوای از رو کاغذ بیاد بیرون، یا یه گره فنی که دنبال راه‌حل واقعی براشی، مستقیم
                    پیام بده.
                  </p>
                </div>

                {/* Quiet Availability & Core Stack Metadata */}
                <div className="mt-8 border-t border-line pt-6 text-sm text-fg-secondary">
                  <p>تهران · برای کار ریموت و پروژه‌های فنی در دسترس هستم</p>
                  <p dir="ltr" className="mt-2 font-mono text-xs text-muted">
                    Python · Next.js · Reverse Engineering · Multi-Agent RAG
                  </p>
                </div>
              </div>

              {/* Direct Contact Channels */}
              <div className="flex flex-col justify-between gap-4 lg:col-span-5">
                <div className="rounded-2xl border border-line bg-bg p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-muted">ایمیل</span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium text-fg-secondary transition-colors duration-150 hover:bg-surface hover:text-accent"
                    >
                      {copied ? (
                        <>
                          <Check size={14} weight="bold" className="text-accent" />
                          <span className="text-accent">کپی شد!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>کپی کن</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p dir="ltr" className="mt-2 font-mono text-base font-semibold text-fg">
                    {SITE_LINKS.email}
                  </p>

                  <a
                    href={`mailto:${SITE_LINKS.email}`}
                    className="mt-4 flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-fg transition-transform duration-150 hover:brightness-110 active:scale-[0.98]"
                  >
                    <EnvelopeSimple size={18} weight="bold" aria-hidden="true" />
                    <span>برام ایمیل بفرست</span>
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <a
                    href={SITE_LINKS.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[64px] items-center justify-between rounded-2xl border border-line bg-bg px-5 py-3.5 transition-colors duration-150 hover:border-accent"
                  >
                    <div className="flex items-center gap-3">
                      <PaperPlaneTilt size={20} className="text-accent" aria-hidden="true" />
                      <div>
                        <div className="text-sm font-semibold text-fg">تلگرام</div>
                        <div className="text-xs text-muted">
                          <span dir="ltr" className="font-mono">
                            {SITE_LINKS.telegramHandle}
                          </span>{" "}
                          · سریع‌تر جواب می‌دم
                        </div>
                      </div>
                    </div>
                    <ArrowUpLeft
                      size={18}
                      aria-hidden="true"
                      className="text-muted transition-colors duration-150 group-hover:text-accent"
                    />
                  </a>

                  <a
                    href={SITE_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[64px] items-center justify-between rounded-2xl border border-line bg-bg px-5 py-3.5 transition-colors duration-150 hover:border-accent"
                  >
                    <div className="flex items-center gap-3">
                      <GithubLogo size={20} className="text-accent" aria-hidden="true" />
                      <div>
                        <div className="text-sm font-semibold text-fg">گیت‌هاب</div>
                        <div dir="ltr" className="font-mono text-xs text-muted">
                          {SITE_LINKS.githubHandle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpLeft
                      size={18}
                      aria-hidden="true"
                      className="text-muted transition-colors duration-150 group-hover:text-accent"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Hemisphere Bridge to Left Brain (/human) */}
        <Reveal delay={0.1}>
          <Link
            href="/human"
            data-hemisphere="human"
            className="group mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-line bg-bg px-7 py-6 text-fg transition-transform duration-200 hover:-translate-y-0.5 sm:flex-row sm:items-center md:px-10 md:py-8"
          >
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                <User size={15} aria-hidden="true" />
                <span>نیم‌کره چپ · دنیای انسانی</span>
              </p>
              <h3 className="mt-1.5 font-display text-3xl tracking-normal text-fg sm:text-4xl">
                می‌خوای آدم پشت این کدها رو هم بشناسی؟
              </h3>
              <p className="mt-1 text-sm text-fg-secondary">
                داستان مسیرم، اخلاق کاری، گالری کارهام و چیزایی که الان درگیرشم.
              </p>
            </div>

            <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-fg">
              <span>برو به دنیای انسانی</span>
              <ArrowLeft
                size={16}
                weight="bold"
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:-translate-x-1 motion-reduce:transition-none"
              />
            </span>
          </Link>
        </Reveal>

        {/* Quiet Semantic Footer */}
        <footer className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p dir="ltr" className="font-mono">
            © 2026 MHDI
          </p>

          <nav aria-label="لینک‌های فوتر" className="flex flex-wrap items-center gap-6">
            <Link href="/" className="transition-colors hover:text-fg">
              صفحه ورود
            </Link>
            <Link href="/work#agent" className="transition-colors hover:text-fg">
              ایجنت و اسکیل‌ها
            </Link>
            <Link href="/work#projects" className="transition-colors hover:text-fg">
              پروژه‌ها
            </Link>
            <Link href="/human" className="transition-colors hover:text-fg">
              دنیای انسانی
            </Link>
            <a
              href={SITE_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fg"
            >
              گیت‌هاب
            </a>
            <a
              href={SITE_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fg"
            >
              تلگرام
            </a>
          </nav>
        </footer>
      </div>
    </section>
  );
}
