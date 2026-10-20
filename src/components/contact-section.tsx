import { Reveal } from "./reveal";
import { WhiteHairGlassesAvatar, BlossomWatermark } from "./anime-avatars";
import { ArrowLeft, EnvelopeSimple } from "@phosphor-icons/react/ssr";

export function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#708200] py-24 text-white md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Main Super-Card Container */}
        <Reveal>
          <div className="overflow-hidden rounded-[36px] border border-black/20 bg-[#0e1107] p-8 shadow-2xl md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-14">
              {/* Left Column: Info, Brand, CTA */}
              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-widest text-[#ccff00]">
                  ارتباط مستقیم / برآورد هزینه پروژه
                </span>
                <h2 className="mt-3 font-display text-5xl tracking-normal text-white md:text-7xl lg:text-8xl">
                  ثبت سفارش و شروع پروژه
                </h2>
                <p className="mt-2 text-base leading-relaxed text-zinc-300 md:text-lg">
                  اگر به دنبال راه‌حلی منحصربه‌فرد، سیستم‌های هوش مصنوعی با کارایی بالا یا
                  محصول وبی ساخته‌شده با ظرافت و وسواس هستید، من آماده‌ام چشم‌انداز شما را به یک واقعیت ملموس تبدیل کنم.
                </p>

                {/* Brand Emblem Pill */}
                <div className="mt-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <div className="text-[#ccff00]">
                    <BlossomWatermark className="h-5 w-5" />
                  </div>
                  <span className="font-display text-2xl font-bold tracking-wider text-white">
                    استودیو مهدی
                  </span>
                </div>

                {/* Big Neon Lime CTA Button */}
                <a
                  href="mailto:hello@mhdi.dev"
                  className="group mt-8 flex flex-col items-center justify-center rounded-[22px] bg-[#ccff00] p-5 text-center text-[#090b04] shadow-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                >
                  <span className="font-display text-2xl font-bold md:text-3xl">
                    روی این دکمه کلیک کنید و درخواست‌تان را بفرستید
                  </span>
                  <span className="mt-1 flex items-center gap-1.5 font-mono text-sm font-bold tracking-wider text-[#090b04]/90">
                    <EnvelopeSimple size={16} weight="bold" />
                    hello@mhdi.dev
                    <ArrowLeft size={16} weight="bold" className="transition-transform group-hover:-translate-x-1" />
                  </span>
                  <span className="mt-1 text-xs font-semibold text-[#090b04]/75">
                    ایده و محصول شما شایسته زنده شدن و درخشیدن است.
                  </span>
                </a>
              </div>

              {/* Right Column: Red/Coral Portrait Container */}
              <div className="flex justify-center">
                <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] bg-[#ff3838] p-4 shadow-xl">
                  <div className="flex h-full w-full items-end justify-center">
                    <WhiteHairGlassesAvatar className="h-full w-full object-contain" />
                  </div>

                  {/* Corner Accent Badge */}
                  <div className="absolute left-4 top-4 rounded-full bg-[#090b04]/80 px-3.5 py-1 text-xs font-mono font-bold text-white backdrop-blur">
                    آماده پذیرش پروژه • فصل جاری
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Minimal Footer */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-black/15 pt-8 text-xs font-medium text-white/80 md:flex-row">
          <p>© {year} استودیو مهدی. تمامی حقوق محفوظ است.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@mhdi.dev" className="hover:text-white transition-colors">
              ارسال ایمیل
            </a>
            <a href="#work" className="hover:text-white transition-colors">
              پروژه‌ها و خدمات
            </a>
            <a href="/about" className="hover:text-white transition-colors">
              درباره من
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
