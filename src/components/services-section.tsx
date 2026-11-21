"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Brain, Camera, GameController, Terminal, Wrench } from "@phosphor-icons/react";
import { Reveal } from "./reveal";
import TopoBackground from "./topo-background";

const TIMELINE_STATIONS = [
  {
    step: "01",
    epoch: "2010 — 2015",
    title: "اتاق کودکی، یاهو و بازی‌های قدیمی",
    desc: "زل می‌زدم به مانیتور داداشم تا ببینم با کامپیوترش چیکار می‌کنه. ساعت‌ها تو یاهو می‌گشتم، Most Wanted بازی می‌کردم و تو ذهنم دنیای ابرقهرمانی خودم رو می‌ساختم.",
    icon: GameController,
  },
  {
    step: "02",
    epoch: "2015 — 2018",
    title: "زمین فوتبال و آچار مکانیکی",
    desc: "از کلاس پنجم رفتم فوتبال باشگاهی، بعدش هم دستم رفت تو آچار و مکانیکی. همون‌جا یاد گرفتم کار واقعی یعنی چی و چطور زیر فشار کم نیارم.",
    icon: Wrench,
  },
  {
    step: "03",
    epoch: "2018 — 2022",
    title: "دوربین عکاسی و ۴ سال کف بازار مد",
    desc: "از ۱۴ سالگی عکاسی و فیلم‌برداری رو شروع کردم و چهار سال توی فروشگاه پوشاک همه کارها، از ویترین و محتوا تا فروش رو چرخوندم. سلیقه بصری و شناخت آدم‌ها از همون‌جا اومد.",
    icon: Camera,
  },
  {
    step: "04",
    epoch: "2022 — 2024",
    title: "لینوکس، امنیت و شب‌زنده‌داری‌ها",
    desc: "افتادم تو دنیای امنیت سایبری و آرچ لینوکس. روزی ۱۰ تا ۱۲ ساعت پای سیستم بودم و شبکه‌ها و سیستم‌ها رو می‌شکافتم تا بفهمم پشت پرده چطوری کار می‌کنن.",
    icon: Terminal,
  },
  {
    step: "05",
    epoch: "2024 — الان",
    title: "فقط پیدا کردن ایراد بس نیست، باید ساخت",
    desc: "هوش مصنوعی که اومد، دیدم بیشتر از کشف باگ، از ساختن راه‌حل لذت می‌برم. الان دارم سیستم‌های واقعی می‌سازم و دنبال ساختن دستیار هوشمند شخصیِ خودم هستم.",
    icon: Brain,
  },
] as const;

export function ServicesSection() {
  return (
    <section id="story" className="relative overflow-hidden border-t border-line bg-bg text-fg">
      <TopoBackground
        className="min-h-0 py-24 md:py-32"
        interval={0.22}
        terrainScale={1400}
        speed={0.55}
        interactive
        labels
        overlay={<div className="absolute inset-0 bg-bg/65 backdrop-blur-[1px]" />}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          {/* Section Header */}
          <Reveal>
            <div className="flex flex-col justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-medium text-accent">از کجا اومدم</p>
                <h2 className="mt-2 font-display text-5xl tracking-normal text-fg md:text-7xl">
                  مسیر من تا اینجا
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-fg-secondary md:text-base">
                هیچ‌وقت تو یه چارچوب بسته نموندم؛ از چند سال کار کف بازار و شناختن سلیقه آدم‌ها تا
                سر و کله زدن با ترمینال لینوکس و سخت‌افزار.
              </p>
            </div>
          </Reveal>

          {/* Editorial Asymmetric Layout */}
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Editorial Timeline List (Visual Subtraction: hairline dividers instead of 5 nested boxes) */}
            <div className="lg:col-span-7">
              <ol className="divide-y divide-line border-b border-line">
                {TIMELINE_STATIONS.map((station, idx) => {
                  const Icon = station.icon;
                  return (
                    <Reveal key={station.step} delay={idx * 0.06}>
                      <li className="group py-6 first:pt-0">
                        <div className="flex items-center justify-between gap-4">
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

                          <Icon
                            size={18}
                            className="text-muted transition-colors duration-150 group-hover:text-accent"
                            aria-hidden="true"
                          />
                        </div>

                        <h3 className="mt-3 text-lg font-bold text-fg transition-colors duration-150 group-hover:text-accent">
                          {station.title}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                          {station.desc}
                        </p>
                      </li>
                    </Reveal>
                  );
                })}
              </ol>

              <div className="mt-6">
                <Link
                  href="/about"
                  className="group inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-90"
                >
                  <span>کل داستانم رو اینجا بخون</span>
                  <ArrowLeft
                    size={16}
                    weight="bold"
                    aria-hidden="true"
                    className="transition-transform duration-150 group-hover:-translate-x-1 motion-reduce:transition-none"
                  />
                </Link>
              </div>
            </div>

            {/* Visual Artworks & Manifesto Column */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              {/* Signature High-Contrast Lime Manifesto Card */}
              <Reveal delay={0.12}>
                <div className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-accent p-6 text-accent-fg md:p-7">
                  <div>
                    <p className="text-xs font-bold tracking-wide text-accent-fg/75">چرا می‌سازم</p>
                    <blockquote className="mt-4 font-display text-3xl leading-snug tracking-normal text-accent-fg md:text-4xl">
                      «کدنویسی برام فقط سینتکس و منطق نیست؛ راهیه برای اینکه چیزایی که تو ذهنمه
                      واقعی کنم.»
                    </blockquote>
                    <p className="mt-3 text-sm font-medium text-accent-fg/80">
                      مثل هیرو توی انیمیشن Big Hero 6
                    </p>
                  </div>

                  <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-xl border border-accent-fg/15 bg-bg">
                    <Image
                      src="/images/art-dreamscape.webp"
                      alt="تصویرسازی رویاپردازانه روی تپه کنار موج‌های رنگین"
                      fill
                      referrerPolicy="no-referrer"
                      sizes="(min-width: 1024px) 420px, 100vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Visual Culture & Influences Card */}
              <Reveal delay={0.2}>
                <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/90 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-2 border-b border-line pb-3 text-xs text-muted">
                    <span className="font-medium text-fg">حال‌وهوای کار کردنم</span>
                    <span dir="ltr" className="font-mono">
                      Synthwave · Retro Lab
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-fg-secondary">
                    آهنگ‌های سینت‌ویو دهه هشتادی، حس و حال Need for Speed Most Wanted و کد زدن توی
                    سکوت شب.
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-bg">
                      <Image
                        src="/images/art-stereogram.webp"
                        alt="اثر گرافیکی استریوگرام ریترو"
                        fill
                        referrerPolicy="no-referrer"
                        sizes="(min-width: 1024px) 200px, 50vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-bg">
                      <Image
                        src="/images/art-design.webp"
                        alt="پوستر تایپوگرافی پیکسلی"
                        fill
                        referrerPolicy="no-referrer"
                        sizes="(min-width: 1024px) 200px, 50vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </TopoBackground>
    </section>
  );
}
