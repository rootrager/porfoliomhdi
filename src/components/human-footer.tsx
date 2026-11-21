"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Copy,
  Cpu,
  EnvelopeSimple,
  GithubLogo,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { SITE_LINKS } from "@/content/site";
import { Reveal } from "./reveal";

export function HumanFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_LINKS.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard API unavailable */
    }
  };

  return (
    <section id="contact" className="border-t border-line pt-20 pb-12 md:pt-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Warm Personal Contact Block */}
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-line bg-surface p-8 md:grid-cols-12 md:items-center md:p-12">
            <div className="md:col-span-7">
              <p className="text-sm font-semibold text-accent">خوشحال می‌شم آشنا بشیم</p>
              <h2 className="mt-2 font-display text-5xl tracking-normal text-fg md:text-6xl">
                یه پیام ساده بفرست
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-fg-secondary sm:text-base">
                چه برای یه گپ فنی و ایده مشترک، چه برای همکاری روی یه پروژه واقعی، مستقیم توی
                تلگرام یا ایمیل در دسترسم.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:col-span-5">
              <div className="flex items-center justify-between gap-2 rounded-2xl border border-line bg-bg px-4 py-3">
                <span dir="ltr" className="font-mono text-sm font-semibold text-fg">
                  {SITE_LINKS.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-lg px-2.5 text-xs font-semibold text-fg-secondary transition-colors hover:bg-surface hover:text-accent"
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

              <div className="flex flex-wrap gap-2.5">
                <a
                  href={`mailto:${SITE_LINKS.email}`}
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent px-5 text-sm font-bold text-accent-fg transition-transform duration-150 hover:brightness-110 active:scale-[0.98]"
                >
                  <EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
                  <span>ایمیل بفرست</span>
                </a>
                <a
                  href={SITE_LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line-strong bg-bg px-5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
                >
                  <PaperPlaneTilt size={16} aria-hidden="true" />
                  <span>تلگرام</span>
                </a>
                <a
                  href={SITE_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="گیت‌هاب مهدی"
                  className="inline-flex min-h-[44px] w-11 items-center justify-center rounded-full border border-line-strong bg-bg text-fg transition-colors hover:border-accent hover:text-accent"
                >
                  <GithubLogo size={18} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Hemisphere Bridge to Right Brain (/work) */}
        <Reveal delay={0.1}>
          <Link
            href="/work"
            data-hemisphere="work"
            className="group mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-line bg-bg px-7 py-6 text-fg transition-transform duration-200 hover:-translate-y-0.5 sm:flex-row sm:items-center md:px-10 md:py-8"
          >
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                <Cpu size={15} aria-hidden="true" />
                <span>نیم‌کره راست · دنیای تخصصی و ایجنت</span>
              </p>
              <h3 className="mt-1.5 font-display text-3xl tracking-normal text-fg sm:text-4xl">
                آماده‌ای ببینی با این روحیه چه چیزایی ساختم؟
              </h3>
              <p className="mt-1 text-sm text-fg-secondary">
                نقشه تعاملی اسکیل‌های ایجنت شخصی، سخت‌افزار آیفون و پروژه‌های واقعی.
              </p>
            </div>

            <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-fg">
              <span>برو به دنیای تخصصی</span>
              <ArrowLeft
                size={16}
                weight="bold"
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:-translate-x-1 motion-reduce:transition-none"
              />
            </span>
          </Link>
        </Reveal>

        {/* Quiet Footer */}
        <footer className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p dir="ltr" className="font-mono">
            © 2026 MHDI
          </p>

          <nav aria-label="لینک‌های فوتر" className="flex flex-wrap items-center gap-6">
            <Link href="/" className="transition-colors hover:text-fg">
              صفحه ورود
            </Link>
            <Link href="/human#now" className="transition-colors hover:text-fg">
              الان درگیر چیم
            </Link>
            <Link href="/human#story" className="transition-colors hover:text-fg">
              داستان من
            </Link>
            <Link href="/human#gallery" className="transition-colors hover:text-fg">
              گالری
            </Link>
            <Link href="/work" className="transition-colors hover:text-fg">
              دنیای تخصصی
            </Link>
          </nav>
        </footer>
      </div>
    </section>
  );
}
