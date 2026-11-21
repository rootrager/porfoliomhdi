"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpLeft,
  Check,
  Copy,
  EnvelopeSimple,
  GithubLogo,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { Reveal } from "./reveal";

const EMAIL = "hello@mhdi.dev";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
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
                  <p className="text-sm font-medium text-accent">شروع همکاری</p>

                  <h2 className="mt-2 font-display text-5xl tracking-normal text-fg md:text-7xl">
                    خط مستقیم ارتباط و شروع کار
                  </h2>

                  <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-secondary md:text-lg">
                    بدون فرم‌های طولانی و تشریفات اضافه. اگر مسئله پیچیده‌ای داری که نیاز به حل
                    دقیق دارد یا محصولی که می‌خواهی واقعی و قابل اتکا ساخته شود، مستقیم پیام بده.
                  </p>
                </div>

                {/* Quiet Availability & Core Stack Metadata */}
                <div className="mt-8 border-t border-line pt-6 text-sm text-fg-secondary">
                  <p>تهران · دسترس‌پذیر برای همکاری ریموت و پروژه‌های تخصصی</p>
                  <p dir="ltr" className="mt-2 font-mono text-xs text-muted">
                    Python · Next.js · Reverse Engineering · Multi-Agent RAG
                  </p>
                </div>
              </div>

              {/* Direct Contact Channels */}
              <div className="flex flex-col justify-between gap-4 lg:col-span-5">
                {/* Email Direct Card */}
                <div className="rounded-2xl border border-line bg-bg p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-muted">ایمیل مستقیم</span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium text-fg-secondary transition-colors duration-150 hover:bg-surface hover:text-accent"
                    >
                      {copied ? (
                        <>
                          <Check size={14} weight="bold" className="text-accent" />
                          <span className="text-accent">کپی شد</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>کپی ایمیل</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p dir="ltr" className="mt-2 font-mono text-base font-semibold text-fg">
                    {EMAIL}
                  </p>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-4 flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-fg transition-transform duration-150 hover:brightness-110 active:scale-[0.98]"
                  >
                    <EnvelopeSimple size={18} weight="bold" aria-hidden="true" />
                    <span>ارسال ایمیل مستقیم</span>
                  </a>
                </div>

                {/* Telegram & GitHub Direct Links */}
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <a
                    href="https://t.me/rootrager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[64px] items-center justify-between rounded-2xl border border-line bg-bg px-5 py-3.5 transition-colors duration-150 hover:border-accent"
                  >
                    <div className="flex items-center gap-3">
                      <PaperPlaneTilt size={20} className="text-accent" aria-hidden="true" />
                      <div>
                        <div className="text-sm font-semibold text-fg">تلگرام مستقیم</div>
                        <div dir="ltr" className="font-mono text-xs text-muted">
                          @rootrager
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
                    href="https://github.com/rootrager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[64px] items-center justify-between rounded-2xl border border-line bg-bg px-5 py-3.5 transition-colors duration-150 hover:border-accent"
                  >
                    <div className="flex items-center gap-3">
                      <GithubLogo size={20} className="text-accent" aria-hidden="true" />
                      <div>
                        <div className="text-sm font-semibold text-fg">مخازن گیت‌هاب</div>
                        <div dir="ltr" className="font-mono text-xs text-muted">
                          github.com/rootrager
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

        {/* Quiet Semantic Footer */}
        <footer className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p dir="ltr" className="font-mono">
            © 2026 MHDI
          </p>

          <nav aria-label="لینک‌های فوتر" className="flex flex-wrap items-center gap-6">
            <Link href="/#work" className="transition-colors hover:text-fg">
              پروژه‌ها
            </Link>
            <Link href="/#story" className="transition-colors hover:text-fg">
              مسیر من
            </Link>
            <Link href="/about" className="transition-colors hover:text-fg">
              درباره من
            </Link>
            <a
              href="https://github.com/rootrager"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fg"
            >
              گیت‌هاب
            </a>
            <a
              href="https://t.me/rootrager"
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
