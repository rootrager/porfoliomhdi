"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { List, Sparkle, X } from "@phosphor-icons/react";

const NAV_LINKS = [
  { href: "/#work", label: "پروژه‌ها" },
  { href: "/#story", label: "مسیر من" },
  { href: "/about", label: "درباره من" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

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
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6">
        {/* Zone 1: Brand wordmark */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-3xl tracking-normal text-fg transition-colors hover:text-accent"
        >
          <Sparkle size={18} weight="fill" className="text-accent" aria-hidden="true" />
          <span>مهدی</span>
        </Link>

        {/* Zone 2: Clean single-line navigation links */}
        <nav aria-label="ناوبری اصلی" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap text-sm font-medium text-fg-secondary transition-colors duration-150 hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="hidden shrink-0 items-center md:flex">
          <Link
            href="/#contact"
            className="shrink-0 whitespace-nowrap rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-fg transition-transform duration-150 hover:brightness-110 active:scale-[0.98]"
          >
            شروع همکاری
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-fg transition-colors hover:bg-surface md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="منوی موبایل"
          className="border-t border-line bg-bg px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
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
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-fg"
            >
              شروع همکاری
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
