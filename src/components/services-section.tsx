import Image from "next/image";
import { Reveal } from "./reveal";
import { SparkleStar } from "./anime-avatars";
import { ArrowDownLeft, ArrowDownRight } from "@phosphor-icons/react/ssr";
import TopoBackground from "./topo-background";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#090b04] text-white"
    >
      <TopoBackground
        className="min-h-0 py-24 md:py-32"
        interval={0.22}
        terrainScale={1400}
        speed={0.6}
        interactive
        labels
        overlay={<div className="absolute inset-0 bg-[#090b04]/45" />}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <Reveal>
            <div className="flex flex-col justify-between gap-6 pb-12 md:flex-row md:items-end">
              <div className="flex items-center gap-4">
                <h2 className="font-display text-5xl tracking-normal text-white md:text-7xl lg:text-8xl">
                  سبک و رویکرد من
                </h2>
                <SparkleStar className="h-8 w-8 animate-pulse text-[#ccff00] motion-reduce:animate-none" />
              </div>

              <p className="max-w-md font-mono text-xs uppercase tracking-widest text-zinc-400 md:text-left">
                و بالاتر از همه چیز، سیستم‌هایی که حقیقتاً زنده و تعاملی نفس می‌کشند.
              </p>
            </div>
          </Reveal>

          {/* Bento Grid */}
          <div className="relative mt-4 flex flex-col gap-5">
            {/* Top Row: Arrow + Wide Lime Card */}
            <Reveal delay={0.1}>
              <div className="relative flex items-center gap-4">
                <div className="hidden shrink-0 text-white md:block">
                  <ArrowDownRight size={36} weight="bold" />
                </div>

                <div className="group flex flex-1 flex-col items-center justify-between overflow-hidden rounded-[26px] bg-[#ccff00] p-6 text-[#090b04] shadow-xl md:flex-row md:px-10 md:py-8">
                  <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border-2 border-[#090b04]/20 shadow-lg md:h-40 md:w-40">
                    <Image
                      src="/images/art-dreamscape.webp"
                      alt="آدمی روی تپه کنار موج‌های رنگین"
                      fill
                      sizes="(min-width: 768px) 160px, 128px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 max-w-2xl text-center md:mt-0 md:text-right">
                    <p className="font-display text-3xl leading-snug tracking-normal text-[#090b04] md:text-5xl lg:text-6xl">
                      پرفورمنس بالا. موشن سینمایی. ظرافت بی‌نهایت در خطوط و جزییات.
                    </p>
                    <p className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-[#090b04]/70">
                      Next.js • مهندسی موشن • فرانت‌اند خلاقانه
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Middle Row: Split Bento Cards */}
            <div className="grid gap-5 md:grid-cols-12">
              {/* Left Card: Quote with Pink Avatar */}
              <Reveal delay={0.18} className="md:col-span-7">
                <div className="group flex h-full flex-col items-center justify-between overflow-hidden rounded-[26px] bg-[#ccff00] p-6 text-[#090b04] shadow-xl md:flex-row md:px-8 md:py-6">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-[#090b04]/20 shadow-lg md:h-36 md:w-36">
                    <Image
                      src="/images/art-run.webp"
                      alt="سیلوئت درخشان روی پارچه‌های رنگین"
                      fill
                      sizes="(min-width: 768px) 144px, 112px"
                      className="object-cover object-[50%_28%] transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex-1 text-center md:mt-0 md:pr-6 md:text-right">
                    <p className="font-display text-3xl leading-snug tracking-normal text-[#090b04] md:text-4xl">
                      من باور دارم کد فقط منطق و سینتکس نیست؛ هویت، فلسفه و هنر است.
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-[#090b04] px-3.5 py-1 font-mono text-xs font-bold text-[#ccff00]">
                      معماری ساختار سیستم
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Right Card: Dark Card with Star Burst & Red Avatar */}
              <Reveal delay={0.24} className="md:col-span-5">
                <div className="relative flex h-full min-h-[220px] items-center justify-center overflow-hidden rounded-[26px] border border-white/10 bg-[#0e1107] p-6 shadow-xl">
                  {/* Background Lime Star Burst */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-90">
                    <SparkleStar className="h-56 w-56 text-[#ccff00]" />
                  </div>

                  {/* Artwork in the centre of the star burst */}
                  <div className="relative z-10 h-36 w-36 overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
                    <Image
                      src="/images/art-stereogram.webp"
                      alt="پوستر ریترو کامپیوتر و آزمایشگاه استریوگرام"
                      fill
                      sizes="144px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Bottom Row: Wide Lime Card + Arrow */}
            <Reveal delay={0.3}>
              <div className="relative flex items-center gap-4">
                <div className="group flex flex-1 flex-col items-center justify-between overflow-hidden rounded-[26px] bg-[#ccff00] p-6 text-[#090b04] shadow-xl md:flex-row md:px-10 md:py-8">
                  <div className="max-w-2xl text-center md:text-right">
                    <p className="font-display text-3xl leading-snug tracking-normal text-[#090b04] md:text-5xl">
                      به همین خاطر است که هر خط کد با قصد، وسواس و داستان‌سرایی مهندسی اجرا می‌شود.
                    </p>
                    <p className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-[#090b04]/70">
                      دقت وسواس‌گونه به جزییاتی که اغلب نادیده گرفته می‌شوند
                    </p>
                  </div>

                  {/* Retro poster crop */}
                  <div className="relative mt-4 h-28 w-44 shrink-0 overflow-hidden rounded-xl border-2 border-[#090b04]/20 bg-[#161a0b] shadow-lg md:mt-0 md:h-32 md:w-56">
                    <Image
                      src="/images/art-design.webp"
                      alt="پوستر ریترو با تایپوگرافی پیکسلی و کامپیوترهای قدیمی"
                      fill
                      sizes="(min-width: 768px) 224px, 176px"
                      className="object-cover object-[50%_32%] transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="hidden shrink-0 text-white md:block">
                  <ArrowDownLeft size={36} weight="bold" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </TopoBackground>
    </section>
  );
}
