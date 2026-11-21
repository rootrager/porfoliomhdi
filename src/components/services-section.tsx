"use client";

import Image from "next/image";
import { Reveal } from "./reveal";
import { SparkleStar } from "./anime-avatars";
import TopoBackground from "./topo-background";
import { 
  GameController, 
  Camera, 
  Terminal, 
  Brain, 
  Wrench, 
  ArrowDownLeft, 
  ArrowDownRight,
  ShieldCheck
} from "@phosphor-icons/react";

const TIMELINE_STATIONS = [
  {
    step: "01",
    epoch: "2010 — 2015",
    tag: "THE BOY IN THE TERMINAL",
    title: "اتاق کودکی، یاهو و تخیل ابرقهرمانی",
    desc: "زل زدن به صفحه مانیتور داداشم و یاد گرفتن تک‌تک حرکاتش. ساعت‌ها گشتن در یاهو، تمام کردن Need for Speed Most Wanted و ساختن دنیای خیالی ابرقهرمانی بن‌تن در خانه.",
    icon: GameController,
  },
  {
    step: "02",
    epoch: "2015 — 2018",
    tag: "GRIT & THE FIELD",
    title: "مستطیل سبز فوتبال و آچار مکانیکی",
    desc: "شاگرد اول همیشه مدرسه، ورود به فوتبال باشگاهی از کلاس پنجم و بعد آچار به دست گرفتن در مکانیکی. یاد گرفتن انضباط، استقامت فیزیکی و تسلیم نشدن زیر فشار.",
    icon: Wrench,
  },
  {
    step: "03",
    epoch: "2018 — 2022",
    tag: "VISUALS & MARKET FLOOR",
    title: "لنز دوربین و ۴ سال کف بازار مد",
    desc: "شروع عکاسی و فیلم‌برداری از ۱۴ سالگی برای ثبت قشنگی‌های دنیا. ورود به فروشگاه پوشاک و ۴ سال مدیریت کامل ویترین، تولید محتوا، پیج و فروشندگی موفق؛ یادگیری روانشناسی خریدار و سلیقه بصری.",
    icon: Camera,
  },
  {
    step: "04",
    epoch: "2022 — 2024",
    tag: "NIGHT MARATHONS",
    title: "ترمینال لینوکس، امنیت و هک تهاجمی",
    desc: "کشف دنیای امنیت؛ جایی که می‌شد واقعاً یک قهرمان دیجیتال بود. دوره‌های سنگین، ترمینال آرچ لینوکس، و روزی ۱۰ تا ۱۲ ساعت مطالعه بی‌وقفه در سخت‌ترین شرایط کشور و دانشگاه.",
    icon: Terminal,
  },
  {
    step: "05",
    epoch: "2024 — NOW",
    tag: "THE SHAPESHIFTER",
    title: "تولد سازنده و ساختن بایمکس شخصی",
    desc: "اضافه شدن AI مثل یک قدرت ماورایی بی‌پایان بود. حل مسائل واقعی از دل محدودیت‌ها (SubFarsi، دانی‌فون، ios-diag). مثل هیرو در Big Hero 6 که از هیچ بایمکس می‌سازد؛ بدون محدودیت در دنیای دیجیتال.",
    icon: Brain,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#090b04] text-white border-t border-[#1a220d]"
    >
      <TopoBackground
        className="min-h-0 py-24 md:py-32"
        interval={0.22}
        terrainScale={1400}
        speed={0.6}
        interactive
        labels
        overlay={<div className="absolute inset-0 bg-[#090b04]/60 backdrop-blur-[2px]" />}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          
          {/* Section Header */}
          <Reveal>
            <div className="flex flex-col justify-between gap-6 pb-12 md:flex-row md:items-end border-b border-[#222810]">
              <div>
                <span dir="ltr" className="font-mono text-xs uppercase tracking-widest text-[#ccff00]">
                  THE ORIGIN // STORY OF A BUILDER
                </span>
                <div className="flex items-center gap-4 mt-2">
                  <h2 className="font-display text-5xl tracking-normal text-white md:text-7xl lg:text-8xl">
                    ریشه‌ها، اراده و سیر تحول
                  </h2>
                  <SparkleStar className="h-8 w-8 animate-pulse text-[#ccff00] motion-reduce:animate-none" />
                </div>
              </div>

              <p className="max-w-md font-persian text-sm leading-relaxed text-[#9ca38f] md:text-right" dir="rtl">
                من یک تخصص بسته نیستم؛ مثل بن‌تن توانایی تبدیل به هر ابزاری برای خلق نتیجه دارم. از درک عمیق سلیقه کاربر در کف بازار تا تزریق کد به لایه‌های زیرین لینوکس.
              </p>
            </div>
          </Reveal>

          {/* Interactive Story Bento Grid */}
          <div className="relative mt-10 grid gap-6 lg:grid-cols-12">
            
            {/* Left Column: 5 Life Stations Timeline (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {TIMELINE_STATIONS.map((station, idx) => {
                const Icon = station.icon;
                return (
                  <Reveal key={station.step} delay={idx * 0.08}>
                    <div 
                      className="group relative rounded-2xl border border-[#202911] bg-[#0c1106]/85 p-5 md:p-6 backdrop-blur-md transition-all duration-300 hover:border-[#ccff00]/60 hover:bg-[#121909]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span 
                            dir="ltr" 
                            className="font-orbitron text-lg font-black text-[#ccff00]"
                          >
                            {station.step}
                          </span>
                          <span className="h-3 w-px bg-[#263314]" />
                          <span 
                            dir="ltr" 
                            className="font-mono text-[10px] uppercase tracking-widest text-[#72805d]"
                          >
                            {station.epoch}{' // '}{station.tag}
                          </span>
                        </div>
                        
                        <div className="rounded-lg bg-[#18230b] p-2 text-[#ccff00] border border-[#2a3a14] group-hover:scale-110 transition-transform">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>

                      <h3 
                        dir="rtl" 
                        className="mt-3 font-persian text-base md:text-lg font-bold text-white group-hover:text-[#ccff00] transition-colors"
                      >
                        {station.title}
                      </h3>

                      <p 
                        dir="rtl" 
                        className="mt-2 font-persian text-xs sm:text-sm leading-relaxed text-[#a6ada0]"
                      >
                        {station.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Right Column: Visual Artworks & Manifesto Cards (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              
              {/* Highlight Card 1: Dreamscape Artwork & Big Hero 6 Mindset */}
              <Reveal delay={0.2}>
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] bg-[#ccff00] p-6 text-[#090b04] shadow-2xl">
                  <div className="flex items-center justify-between border-b border-[#090b04]/15 pb-4">
                    <span dir="ltr" className="font-mono text-xs font-black uppercase tracking-wider text-[#090b04]">
                      SHAPESHIFTER PROTOCOL
                    </span>
                    <ArrowDownLeft size={28} weight="bold" />
                  </div>

                  <div className="my-6">
                    <p className="font-display text-3xl leading-snug tracking-normal text-[#090b04] md:text-4xl">
                      «کدنویسی فقط منطق و سینتکس نیست؛ هویت، اراده و زنده کردن رویاهاست.»
                    </p>
                    <p className="mt-2 font-mono text-[11px] font-bold uppercase tracking-widest text-[#090b04]/75">
                      مثل هیرو در انیمیشن Big Hero 6
                    </p>
                  </div>

                  <div className="relative h-44 w-full overflow-hidden rounded-xl border-2 border-[#090b04]/20 shadow-lg">
                    <Image
                      src="/images/art-dreamscape.webp"
                      alt="آدمی روی تپه کنار موج‌های رنگین"
                      fill
                      sizes="(min-width: 1024px) 400px, 100vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Highlight Card 2: Retro Terminal & Cyber Culture */}
              <Reveal delay={0.3}>
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-[#2a3615] bg-[#0e1407]/90 p-6 text-white backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-[#1f280f] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#ccff00] animate-pulse" />
                      <span dir="ltr" className="font-mono text-[10px] tracking-widest text-[#ccff00] uppercase">
                        RETRO LAB // NOSTALGIA
                      </span>
                    </div>
                    <span dir="ltr" className="font-mono text-[10px] text-[#6e7b5b]">
                      NFS MW // STRANGER THINGS
                    </span>
                  </div>

                  <p dir="rtl" className="mt-4 font-persian text-xs sm:text-sm leading-relaxed text-[#c3c8ba]">
                    ترکیب موسیقی‌های سینت‌ویو دهه هشتادی، آدرنالین سرعت و هیجان نیدفوراسپید موست‌وانتد، و ساعت‌ها کد زدن در تاریکی اتاق به سبک مستر روبات.
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="relative h-28 overflow-hidden rounded-xl border border-[#283515]">
                      <Image
                        src="/images/art-stereogram.webp"
                        alt="استریوگرام ریترو"
                        fill
                        sizes="200px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="relative h-28 overflow-hidden rounded-xl border border-[#283515]">
                      <Image
                        src="/images/art-design.webp"
                        alt="پوستر تایپوگرافی پیکسلی"
                        fill
                        sizes="200px"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
