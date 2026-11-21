"use client";

import { useState } from "react";
import {
  CULTURAL_SHELF,
  CULTURE_FILTERS,
  type CultureKind,
} from "@/content/site";
import { Reveal } from "./reveal";

export function HumanCulture() {
  const [filter, setFilter] = useState<CultureKind>("all");

  const items =
    filter === "all"
      ? CULTURAL_SHELF
      : CULTURAL_SHELF.filter((item) => item.kind === filter);

  return (
    <section id="culture" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold text-accent">موسیقی، بازی و فیلم</p>
              <h2 className="mt-2 font-display text-5xl tracking-normal text-fg md:text-7xl">
                چیزهایی که حال‌وهوام رو ساختن
              </h2>
            </div>

            <div
              role="tablist"
              aria-label="فیلتر قفسه الهام‌ها"
              className="inline-flex flex-wrap self-start rounded-xl border border-line bg-surface p-1 md:self-auto"
            >
              {CULTURE_FILTERS.map((option) => {
                const isActive = filter === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setFilter(option.id)}
                    className={`min-h-[38px] cursor-pointer whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 sm:text-sm ${
                      isActive
                        ? "bg-accent text-accent-fg"
                        : "text-fg-secondary hover:text-fg"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Clean Unboxed Editorial Shelf List */}
        <ul className="mt-6 divide-y divide-line border-b border-line">
          {items.map((item) => (
            <li
              key={item.title}
              className="grid gap-3 py-6 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <div className="md:col-span-4">
                <h3 dir="ltr" className="text-right font-orbitron text-base font-bold text-fg md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted">
                  <span>{item.kindLabel}</span>
                  <span aria-hidden="true"> · </span>
                  <span dir="ltr" className="font-mono tabular-nums">
                    {item.year}
                  </span>
                </p>
              </div>

              <p className="text-sm leading-relaxed text-fg-secondary md:col-span-8 md:text-base">
                {item.note}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
