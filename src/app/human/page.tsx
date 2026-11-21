import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown } from "@phosphor-icons/react/ssr";
import { HUMAN_TRAITS, NOW_ITEMS } from "@/content/site";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { HumanStory } from "@/components/human-story";
import { HumanGallery } from "@/components/human-gallery";
import { HumanCulture } from "@/components/human-culture";
import { HumanFooter } from "@/components/human-footer";

export const metadata: Metadata = {
  title: "دنیای انسانی، روحیات و داستان من",
  description:
    "سمت انسانی مهدی: داستان زندگی از کودکی تا الان، اخلاق کاری، چیزهایی که الان در حال ساخت و یادگیری است، گالری آثار و الهام‌ها.",
  alternates: {
    canonical: "/human",
  },
  openGraph: {
    title: "دنیای انسانی، روحیات و داستان من | مهدی",
    description:
      "داستان زندگی مهدی، اخلاق کاری، گالری کارهای گرافیکی و چیزهایی که همین الان درگیرشان است.",
    url: "/human",
  },
};

export default function HumanPage() {
  return (
    <div data-hemisphere="human" className="min-h-dvh bg-bg text-fg">
      <SiteHeader />

      <main>
        {/* 1. Editorial Human Hero & Ethos */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-sm font-semibold text-accent">
                  نیم‌کره چپ <span aria-hidden="true">·</span> دنیای انسانی
                </p>

                <h1 className="mt-3 font-display text-6xl leading-none tracking-normal text-fg sm:text-7xl md:text-8xl">
                  خودِ من، بی‌تعارف
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-fg-secondary sm:text-xl">
                  توی اون یکی سمت سایت می‌تونی کدها، سخت‌افزارها و ایجنت هوش مصنوعیم رو ببینی.
                  اینجا اما برای اینه که بدونی پشت اون سیستم‌ها چه جور آدمی نشسته؛ از کجا اومدم،
                  چطوری فکر می‌کنم و چی برام مهمه.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium text-muted">
                  <span>۲۱ ساله</span>
                  <span aria-hidden="true">·</span>
                  <span>تهران</span>
                  <span aria-hidden="true">·</span>
                  <Link
                    href="#story"
                    className="inline-flex items-center gap-1.5 text-accent transition-opacity hover:opacity-80"
                  >
                    <span>مستقیم برو سر داستانم</span>
                    <ArrowDown size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Ethos & Working Traits — Clean 2x2 Hairline Editorial Grid */}
            <div className="mt-16 border-t border-line pt-12">
              <p className="text-sm font-semibold text-accent">خلقیات و سبک کار کردنم</p>
              <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2">
                {HUMAN_TRAITS.map((trait, idx) => (
                  <Reveal key={trait.index} delay={idx * 0.06}>
                    <div className="border-t border-line pt-5">
                      <span
                        dir="ltr"
                        className="font-mono text-xs font-semibold tabular-nums text-accent"
                      >
                        {trait.index}
                      </span>
                      <h2 className="mt-2 text-lg font-bold text-fg">{trait.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-fg-secondary sm:text-base">
                        {trait.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. Now Section (چیزهایی که همین الان درگیرشم) */}
        <section id="now" className="border-t border-line bg-surface/65 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
                <div>
                  <p className="text-sm font-semibold text-accent">همین الان روی میز کارم</p>
                  <h2 className="mt-2 font-display text-5xl tracking-normal text-fg md:text-7xl">
                    الان درگیر چیم
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-relaxed text-fg-secondary md:text-base">
                  کارها و چیزهایی که این روزها بیشترین وقتم رو روشون می‌ذارم و دارم می‌سازم یا
                  یاد می‌گیرم.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {NOW_ITEMS.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.06}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-bg p-6">
                    <div>
                      <p className="text-xs font-semibold text-accent">{item.status}</p>
                      <h3 className="mt-2 text-lg font-bold text-fg">{item.title}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-fg-secondary">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Full Life Story & 5-Stage Timeline */}
        <HumanStory />

        {/* 4. Visual Artwork Gallery with Lightbox */}
        <HumanGallery />

        {/* 5. Music, Games & Films Cultural Shelf */}
        <HumanCulture />

        {/* 6. Personal Contact & Bridge to Right Hemisphere */}
        <HumanFooter />
      </main>
    </div>
  );
}
