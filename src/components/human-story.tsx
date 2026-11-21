"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ABOUT_CLOSING_STATEMENT,
  ABOUT_STORY_PARAGRAPHS,
  TIMELINE_STATIONS,
} from "@/content/site";
import { Reveal } from "./reveal";

type StoryView = "essay" | "timeline";

export function HumanStory() {
  const [view, setView] = useState<StoryView>("essay");

  return (
    <section id="story" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold text-accent">از کودکی تا الان</p>
              <h2 className="mt-2 font-display text-5xl tracking-normal text-fg md:text-7xl">
                داستان مسیر من
              </h2>
            </div>

            {/* Mode Switcher: Full Essay vs 5-Station Timeline */}
            <div
              role="tablist"
              aria-label="نحوه نمایش داستان"
              className="inline-flex self-start rounded-xl border border-line bg-surface p-1 md:self-auto"
            >
              <button
                type="button"
                role="tab"
                aria-selected={view === "essay"}
                onClick={() => setView("essay")}
                className={`min-h-[40px] cursor-pointer whitespace-nowrap rounded-lg px-4 py-1.5 text-xs font-semibold transition-colors duration-150 sm:text-sm ${
                  view === "essay"
                    ? "bg-accent text-accent-fg"
                    : "text-fg-secondary hover:text-fg"
                }`}
              >
                روایت کامل
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={view === "timeline"}
                onClick={() => setView("timeline")}
                className={`min-h-[40px] cursor-pointer whitespace-nowrap rounded-lg px-4 py-1.5 text-xs font-semibold transition-colors duration-150 sm:text-sm ${
                  view === "timeline"
                    ? "bg-accent text-accent-fg"
                    : "text-fg-secondary hover:text-fg"
                }`}
              >
                خط زمانی ۵ مرحله‌ای
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Narrative / Timeline Column */}
          <div className="lg:col-span-7">
            {view === "essay" ? (
              <div className="space-y-5 text-base leading-9 text-fg-secondary">
                {ABOUT_STORY_PARAGRAPHS.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                <p className="mt-8 rounded-2xl border border-accent/30 bg-surface p-6 text-base font-bold leading-relaxed text-fg">
                  {ABOUT_CLOSING_STATEMENT}
                </p>
              </div>
            ) : (
              <ol className="divide-y divide-line border-b border-line">
                {TIMELINE_STATIONS.map((station) => (
                  <li key={station.step} className="py-6 first:pt-0">
                    <div className="flex items-center gap-3 text-xs text-muted">
                      <span
                        dir="ltr"
                        className="font-mono text-sm font-semibold tabular-nums text-accent"
                      >
                        {station.step}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span dir="ltr" className="font-mono tabular-nums">
                        {station.epoch}
                      </span>
                    </div>
                    <h3 className="mt-2.5 text-lg font-bold text-fg">{station.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-secondary sm:text-base">
                      {station.desc}
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {/* Editorial Side Visual & Quote */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-elevated">
                <Image
                  src="/images/about-bg.jpg"
                  alt="تصویرسازی حکاکی کیهانی از مسیر کنجکاوی تا ساختن"
                  fill
                  referrerPolicy="no-referrer"
                  sizes="(min-width: 1024px) 440px, 100vw"
                  className="object-cover object-right"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-accent">از کنجکاوی تا ساختن</p>
                <blockquote className="mt-3 font-display text-3xl leading-snug tracking-normal text-fg">
                  «کدنویسی برام فقط سینتکس و منطق نیست؛ راهیه برای اینکه چیزایی که تو ذهنمه واقعی
                  کنم.»
                </blockquote>
                <p className="mt-3 text-xs text-muted">
                  مثل هیرو توی انیمیشن Big Hero 6
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
