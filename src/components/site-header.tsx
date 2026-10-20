"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { SparkleStar } from "./anime-avatars";

const links = [
  { href: "/#work", label: "چه کارهایی می‌کنم" },
  { href: "/#services", label: "سبک کاری من" },
  { href: "/about", label: "درباره من" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Escape key closes the menu, and the page behind it is not scrollable
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
    <header className="sticky top-0 z-50 border-b border-[#222810] bg-[#090b04]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-display text-2xl font-bold tracking-wider text-white"
        >
          <SparkleStar className="h-5 w-5 text-[#ccff00]" />
          <span>مهدی</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-[#ccff00]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full bg-[#ccff00] px-5 py-2 font-display text-lg font-bold text-[#090b04] transition-all hover:brightness-110 active:scale-[0.98]"
          >
            ثبت سفارش
          </Link>
        </nav>
        <button
          type="button"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-[#222810] bg-[#090b04] px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-[#ccff00]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#ccff00] px-4 py-2.5 text-center font-display text-lg font-bold text-[#090b04]"
            >
              ثبت سفارش
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
