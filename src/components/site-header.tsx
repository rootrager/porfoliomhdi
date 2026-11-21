"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cpu, List, Sparkle, User, X } from "@phosphor-icons/react";

const WORK_ANCHORS = [
  { href: "/work#agent", label: "ایجنت و اسکیل‌ها" },
  { href: "/work#projects", label: "پروژه‌ها" },
];

const HUMAN_ANCHORS = [
  { href: "/human#now", label: "الان درگیر چیم" },
  { href: "/human#story", label: "داستان من" },
  { href: "/human#gallery", label: "گالری" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isHuman = pathname?.startsWith("/human");
  const isWork = pathname?.startsWith("/work");
  const sectionAnchors = isHuman ? HUMAN_ANCHORS : WORK_ANCHORS;
  const contactHref = isHuman ? "/human#contact" : "/work#contact";

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:gap-8 sm:px-6">
        {/* Zone 1: Brand Wordmark (returns to Split Portal) */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-3xl tracking-normal text-fg transition-colors hover:text-accent"
        >
          <Sparkle size={18} weight="fill" className="text-accent" aria-hidden="true" />
          <span>مهدی</span>
        </Link>

        {/* Zone 2: Persistent Dual-Hemisphere Switcher + Active Section Links */}
        <div className="hidden items-center gap-6 md:flex">
          <nav
            aria-label="جابه‌جایی بین دو نیم‌کره"
            className="inline-flex items-center rounded-full border border-line bg-surface p-1"
          >
            <Link
              href="/work"
              aria-current={isWork ? "page" : undefined}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 ${
                isWork
                  ? "bg-accent text-accent-fg"
                  : "text-fg-secondary hover:text-fg"
              }`}
            >
              <Cpu size={14} weight={isWork ? "fill" : "regular"} aria-hidden="true" />
              <span>تخصصی و ایجنت</span>
            </Link>
            <Link
              href="/human"
              aria-current={isHuman ? "page" : undefined}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 ${
                isHuman
                  ? "bg-accent text-accent-fg"
                  : "text-fg-secondary hover:text-fg"
              }`}
            >
              <User size={14} weight={isHuman ? "fill" : "regular"} aria-hidden="true" />
              <span>انسانی و داستان من</span>
            </Link>
          </nav>

          <nav aria-label="بخش‌های این صفحه" className="hidden items-center gap-5 lg:flex">
            {sectionAnchors.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="shrink-0 whitespace-nowrap text-xs font-medium text-fg-secondary transition-colors duration-150 hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden shrink-0 items-center md:flex">
          <Link
            href={contactHref}
            className="shrink-0 whitespace-nowrap rounded-full bg-accent px-5 py-2 text-xs font-bold text-accent-fg transition-transform duration-150 hover:brightness-110 active:scale-[0.98] sm:text-sm"
          >
            بیا حرف بزنیم
          </Link>
        </div>

        {/* Mobile Quick Switch + Menu Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={isHuman ? "/work" : "/human"}
            className="inline-flex min-h-[38px] items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-surface px-3 text-xs font-semibold text-fg transition-colors hover:border-accent"
          >
            {isHuman ? (
              <>
                <Cpu size={14} className="text-accent" aria-hidden="true" />
                <span>تخصصی</span>
              </>
            ) : (
              <>
                <User size={14} className="text-accent" aria-hidden="true" />
                <span>انسانی</span>
              </>
            )}
          </Link>

          <button
            type="button"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-fg transition-colors hover:bg-surface"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="منوی موبایل"
          className="border-t border-line bg-bg px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-line">
              <Link
                href="/work"
                onClick={() => setOpen(false)}
                className={`flex min-h-[44px] items-center justify-center gap-2 rounded-xl text-xs font-bold ${
                  isWork
                    ? "bg-accent text-accent-fg"
                    : "border border-line bg-surface text-fg-secondary"
                }`}
              >
                <Cpu size={15} aria-hidden="true" />
                <span>تخصصی و ایجنت</span>
              </Link>
              <Link
                href="/human"
                onClick={() => setOpen(false)}
                className={`flex min-h-[44px] items-center justify-center gap-2 rounded-xl text-xs font-bold ${
                  isHuman
                    ? "bg-accent text-accent-fg"
                    : "border border-line bg-surface text-fg-secondary"
                }`}
              >
                <User size={15} aria-hidden="true" />
                <span>انسانی و داستان من</span>
              </Link>
            </div>

            {sectionAnchors.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center text-base font-medium text-fg-secondary transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={contactHref}
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-full bg-accent px-5 text-sm font-bold text-accent-fg"
            >
              بیا حرف بزنیم
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
