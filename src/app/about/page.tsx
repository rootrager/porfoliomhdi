import { SiteHeader } from "@/components/site-header";
import Link from "next/link";
import { ArrowRight, EnvelopeSimple } from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره من — از کنجکاوی تا ساختن",
  description:
    "روایت مسیر مهدی: از کنجکاوی‌های کودکی و امنیت سایبری تا توسعه نرم‌افزار، هوش مصنوعی و ساخت سیستم‌های زنده.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative min-h-[calc(100dvh-4rem)] w-full overflow-hidden bg-[#07080a] text-white">
        {/* Mobile Background Image (Vertical Etching with Figure at the Bottom) */}
        <div
          className="pointer-events-none fixed inset-0 z-0 bg-cover bg-bottom bg-no-repeat lg:hidden"
          style={{
            backgroundImage: "url('/images/about-mobile-bg.jpg')",
          }}
          aria-hidden="true"
        />

        {/* Desktop Background Image (Horizontal Etching with Planets on the Right) */}
        <div
          className="pointer-events-none fixed inset-0 z-0 hidden bg-cover bg-center bg-no-repeat lg:block"
          style={{
            backgroundImage: "url('/images/about-bg.jpg')",
          }}
          aria-hidden="true"
        />

        {/* Desktop Dark Gradient Overlay for Left Side Readability */}
        <div
          className="pointer-events-none fixed inset-0 z-0 hidden bg-gradient-to-r from-[#07080a]/95 via-[#07080a]/85 to-transparent lg:block"
          aria-hidden="true"
        />

        {/* Top Fade for Mobile Header Readability */}
        <div
          className="pointer-events-none fixed inset-x-0 top-0 z-0 h-24 bg-gradient-to-b from-[#07080a]/90 to-transparent lg:hidden"
          aria-hidden="true"
        />

        {/* Content Container:
            On Mobile: Constrained in upper-middle region so the bottom figure (آدمک) is always visible!
            On Desktop: Left 7 columns with unobstructed view of the right 5 columns
        */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] max-w-xl flex-col justify-start px-4 pt-3 pb-2 md:px-6 lg:max-w-7xl lg:justify-center lg:py-12">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Desktop Spacer Column (Right in RTL): Kept empty so celestial planets are visible */}
            <div className="hidden lg:col-span-5 lg:block" aria-hidden="true" />

            {/* Story Card Column:
                On Mobile: Positioned from top-down with max-h-[56vh] scrollable box so the bottom figure remains visible
                On Desktop: Full open layout
            */}
            <div className="w-full lg:col-span-7">
              <div
                role="region"
                aria-label="داستان من"
                tabIndex={0}
                className="flex max-h-[54dvh] flex-col overflow-y-auto overscroll-contain rounded-[24px] border border-white/10 bg-[#07080a]/80 p-5 shadow-2xl backdrop-blur-md [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#ccff00]/40 md:max-h-[58dvh] md:p-8 lg:max-h-none lg:overflow-visible lg:p-12"
              >
                {/* Header */}
                <div className="border-b border-white/10 pb-4 text-center lg:text-right">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#ccff00]">
                    داستان من / The Journey
                  </span>
                  <h1 className="mt-1 font-display text-4xl tracking-normal text-[#ccff00] md:text-6xl lg:text-8xl">
                    دربارهٔ من
                  </h1>
                  <h2 className="mt-1 font-display text-xl tracking-normal text-white md:text-3xl lg:text-4xl">
                    از کنجکاوی تا ساختن
                  </h2>
                </div>

                {/* Story Paragraphs */}
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-200 md:text-base md:leading-loose">
                  <p>
                    حدود 14 سال پیش، از زیر صندلی سرک می‌کشیدم تا ببینم برادر بزرگ‌ترم با کامپیوتر زغالی‌رنگش چه می‌کند. گاهی Most Wanted بازی می‌کرد، گاهی در خیابان‌های Vice City می‌چرخید و گاهی با یک مودم قدیمی در یاهو و اینترنت می‌گشت. آن موقع نمی‌دانستم این جعبه قرار است مرا به کجا ببرد. فقط می‌خواستم بیشتر از آن سر دربیاورم.
                  </p>

                  <p>
                    بعدتر، فوتبال شد تمام زندگی‌ام. بعد مکانیکی، آرایشگری و دنیای مد و ساختن برند لباس. هر بار فکر می‌کردم مسیرم را پیدا کرده‌ام، چیزی تازه توجهم را جلب می‌کرد. تنها چیزی که در تمام این سال‌ها تغییر نکرد، لپ‌تاپم بود.
                  </p>

                  <p>
                    کنجکاوی‌ام بالاخره مرا به دنیای امنیت سایبری رساند. یاد گرفتم سیستم‌ها چطور کار می‌کنند، چطور آسیب‌پذیری‌هایشان را پیدا کنم و چطور از زاویه‌ای متفاوت به آن‌ها نگاه کنم. مدتی رؤیای تبدیل شدن به یک باگ‌بانتی‌هانتر حرفه‌ای را داشتم، تا اینکه فهمیدم بیشتر از پیدا کردن ایرادها، از ساختن راه‌حل‌ها لذت می‌برم.
                  </p>

                  <p>
                    از آنجا برنامه‌نویسی، شبکه، لینوکس و طراحی وب وارد مسیرم شدند. دانشگاه هم فرصتی شد تا مبانی علوم کامپیوتر را جدی‌تر دنبال کنم. در تمام این مدت، هوش مصنوعی یکی از حوزه‌هایی بود که پیوسته دنبالش می‌کردم؛ از بررسی ابزارها و مدل‌ها گرفته تا آزمایش راه‌های تازه برای استفاده از آن‌ها.
                  </p>

                  <p>
                    حالا بیشتر از هر چیز، ساختن سیستم‌هایی برایم جذاب است که بتوانند کارهای واقعی انجام دهند. یکی از ایده‌هایی که دنبال می‌کنم، ساختن یک دستیار هوش مصنوعی شخصی است؛ چیزی با الهام از هیرو در انیمیشن <em className="text-[#ccff00] not-italic font-semibold">Big Hero 6</em>، که بتواند ابزارهای مختلف را به هم وصل کند، مهارت‌های تازه به دست بیاورد و در انجام کارها کمکم کند.
                  </p>

                  <p>
                    هنوز دارم یاد می‌گیرم و مسیرم تمام نشده. شاید بالاخره جواب سؤال آن بچه‌ای را پیدا کرده باشم که از زیر صندلی به مانیتور نگاه می‌کرد، اما حالا سؤال‌های بزرگ‌تری دارم.
                  </p>

                  {/* Punchline Statement Box */}
                  <div className="mt-5 rounded-2xl border-y-2 border-[#ccff00] bg-[#ccff00]/10 p-4 text-center text-sm font-bold leading-relaxed text-white md:text-base lg:border-r-4 lg:border-y-0 lg:text-right">
                    دیگر فقط نمی‌خواهم بفهمم با کامپیوتر چه کارهایی می‌شود کرد. می‌خواهم خودم آن‌ها را بسازم.
                  </div>
                </div>

                {/* Bottom Quick Actions */}
                <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 sm:flex-row">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-display text-lg text-zinc-300 transition-colors hover:text-[#ccff00]"
                  >
                    <ArrowRight size={16} />
                    بازگشت به صفحه اصلی
                  </Link>

                  <a
                    href="mailto:hello@mhdi.dev"
                    className="inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-4 py-2 font-display text-base font-bold text-[#090b04] transition-all hover:brightness-110 active:scale-[0.98]"
                  >
                    <EnvelopeSimple size={15} weight="bold" />
                    ارتباط با من
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
