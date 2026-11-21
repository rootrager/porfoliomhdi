"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowsOutSimple, X } from "@phosphor-icons/react";
import { ARTWORKS } from "@/content/site";
import { Reveal } from "./reveal";

export function HumanGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const selectedArtwork = selectedIdx !== null ? ARTWORKS[selectedIdx] : null;

  useEffect(() => {
    if (selectedIdx === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIdx(null);
      } else if (event.key === "ArrowLeft") {
        setSelectedIdx((prev) =>
          prev === null ? null : (prev + 1) % ARTWORKS.length
        );
      } else if (event.key === "ArrowRight") {
        setSelectedIdx((prev) =>
          prev === null ? null : (prev - 1 + ARTWORKS.length) % ARTWORKS.length
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIdx]);

  return (
    <section id="gallery" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold text-accent">آرشیو بصری</p>
              <h2 className="mt-2 font-display text-5xl tracking-normal text-fg md:text-7xl">
                گالری آثار و حس‌وحال
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-fg-secondary md:text-base">
              از ۱۴ سالگی دوربین دستم بود و همیشه به رنگ، قاب‌بندی و گرافیک علاقه داشتم. روی هر
              تصویر کلیک کن تا کامل ببینیش.
            </p>
          </div>
        </Reveal>

        {/* Asymmetric Media-First Bento Gallery */}
        <div className="mt-10 grid gap-6 md:grid-cols-12">
          {ARTWORKS.map((art, idx) => {
            const colSpan = art.span === "wide" ? "md:col-span-7" : "md:col-span-5";
            return (
              <Reveal key={art.id} delay={idx * 0.06} className={colSpan}>
                <button
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  aria-label={`نمایش تمام‌صفحه ${art.title}`}
                  className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-surface text-right transition-colors duration-200 hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-elevated">
                    <Image
                      src={art.src}
                      alt={art.title}
                      fill
                      referrerPolicy="no-referrer"
                      sizes={art.span === "wide" ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 42vw, 100vw"}
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute top-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-bg/85 text-fg opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
                    >
                      <ArrowsOutSimple size={16} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-bold text-fg">{art.title}</h3>
                      <span className="text-xs font-medium text-muted">{art.mood}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-fg-secondary">{art.note}</p>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedArtwork && selectedIdx !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedArtwork.title}
          onClick={() => setSelectedIdx(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#080a05]/92 p-4 backdrop-blur-md sm:p-8"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[90dvh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#11140c] text-[#f5f5f0] shadow-2xl"
          >
            {/* Top Controls */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <h3 className="text-base font-bold text-white">{selectedArtwork.title}</h3>
                <p className="text-xs text-[#b7beb0]">{selectedArtwork.mood}</p>
              </div>

              <button
                type="button"
                aria-label="بستن نمایشگر تصویر"
                onClick={() => setSelectedIdx(null)}
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ccff00] hover:text-[#ccff00]"
              >
                <X size={20} weight="bold" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative h-[55dvh] w-full bg-black sm:h-[62dvh]">
              <Image
                src={selectedArtwork.src}
                alt={selectedArtwork.title}
                fill
                referrerPolicy="no-referrer"
                sizes="90vw"
                className="object-contain"
              />
            </div>

            {/* Caption & Prev/Next Controls */}
            <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 px-5 py-4 sm:flex-row sm:items-center">
              <p className="text-sm text-[#b7beb0]">{selectedArtwork.note}</p>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  aria-label="تصویر قبلی"
                  onClick={() =>
                    setSelectedIdx((selectedIdx - 1 + ARTWORKS.length) % ARTWORKS.length)
                  }
                  className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ccff00] hover:text-[#ccff00]"
                >
                  <ArrowRight size={18} />
                </button>
                <span dir="ltr" className="px-2 font-mono text-xs tabular-nums text-[#8b9482]">
                  {selectedIdx + 1} / {ARTWORKS.length}
                </span>
                <button
                  type="button"
                  aria-label="تصویر بعدی"
                  onClick={() => setSelectedIdx((selectedIdx + 1) % ARTWORKS.length)}
                  className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#ccff00] hover:text-[#ccff00]"
                >
                  <ArrowLeft size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
