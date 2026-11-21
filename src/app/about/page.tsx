import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, EnvelopeSimple } from "@phosphor-icons/react/ssr";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "درباره من — از کنجکاوی تا ساختن",
  description:
    "روایت مسیر مهدی: از کنجکاوی‌های کودکی و امنیت سایبری تا توسعه نرم‌افزار، هوش مصنوعی و ساخت سیستم‌های زنده.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "درباره من — از کنجکاوی تا ساختن | مهدی",
    description:
      "روایت مسیر مهدی: از کنجکاوی‌های کودکی و امنیت سایبری تا توسعه نرم‌افزار، هوش مصنوعی و ساخت سیستم‌های زنده.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative min-h-[calc(100dvh-4rem)] w-full overflow-x-clip bg-bg text-fg">
        {/* Mobile Background Etching */}
        <div
          className="pointer-events-none fixed inset-0 z-0 bg-cover bg-bottom bg-no-repeat lg:hidden"
          style={{ backgroundImage: "url('/images/about-mobile-bg.jpg')" }}
          aria-hidden="true"
        />

        {/* Desktop Background Etching */}
        <div
          className="pointer-events-none fixed inset-0 z-0 hidden bg-cover bg-center bg-no-repeat lg:block"
          style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
          aria-hidden="true"
        />

        {/* Measured Contrast Scrims */}
        <div
          className="pointer-events-none fixed inset-0 z-0 hidden bg-gradient-to-r from-bg/95 via-bg/85 to-transparent lg:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-bg/90 via-bg/65 to-transparent lg:hidden"
          aria-hidden="true"
        />

        {/* Natural document flow on mobile (no nested scroll trap) with bottom clearance to reveal artwork */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] max-w-2xl flex-col justify-start px-5 pt-8 pb-64 sm:px-6 sm:pb-80 lg:max-w-6xl lg:justify-center lg:py-14">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Desktop visual breathing space for celestial etching */}
            <div className="hidden lg:col-span-5 lg:block" aria-hidden="true" />

            <article className="w-full rounded-3xl border border-line bg-bg/85 p-6 shadow-2xl backdrop-blur-md sm:p-8 lg:col-span-7 lg:p-12">
              <header className="border-b border-line pb-5">
                <p className="text-sm font-medium text-accent">داستان من</p>
                <h1 className="mt-1 font-display text-5xl tracking-normal text-fg sm:text-6xl lg:text-7xl">
                  درباره من
                </h1>
                <p className="mt-1 text-lg font-semibold text-fg-secondary sm:text-xl">
                  از کنجکاوی تا ساختن
                </p>
              </header>

              <div className="mt-6 space-y-5 text-sm leading-8 text-fg-secondary sm:text-base sm:leading-8">
                <p>
                  حدود ۱۴ سال پیش، از زیر صندلی سرک می‌کشیدم تا ببینم برادر بزرگترم با کامپیوتر
                  زغالی‌رنگش چه می‌کند. گاهی Most Wanted بازی می‌کرد، گاهی در خیابان‌های Vice City
                  می‌چرخید و گاهی با یک مودم قدیمی در یاهو و اینترنت می‌گشت. آن موقع نمی‌دانستم این
                  جعبه قرار است مرا به کجا ببرد؛ فقط می‌خواستم بیشتر از آن سر دربیاورم.
                </p>

                <p>
                  بعدتر، فوتبال شد تمام زندگی‌ام. بعد مکانیکی، آرایشگری و دنیای مد و ساختن برند
                  لباس. هر بار فکر می‌کردم مسیرم را پیدا کرده‌ام، چیزی تازه توجهم را جلب می‌کرد.
                  تنها چیزی که در تمام این سال‌ها تغییر نکرد، لپ‌تاپم بود.
                </p>

                <p>
                  کنجکاوی‌ام بالاخره مرا به دنیای امنیت سایبری رساند. یاد گرفتم سیستم‌ها چطور کار
                  می‌کنند، چطور آسیب‌پذیری‌هایشان را پیدا کنم و چطور از زاویه‌ای متفاوت به آن‌ها
                  نگاه کنم. مدتی رؤیای تبدیل شدن به یک باگ‌بانتی‌هانتر حرفه‌ای را داشتم، تا اینکه
                  فهمیدم بیشتر از پیدا کردن ایرادها، از ساختن راه‌حل‌ها لذت می‌برم.
                </p>

                <p>
                  از آنجا برنامه‌نویسی، شبکه، لینوکس و طراحی وب وارد مسیرم شدند. دانشگاه هم فرصتی
                  شد تا مبانی علوم کامپیوتر را جدی‌تر دنبال کنم. در تمام این مدت، هوش مصنوعی یکی از
                  حوزه‌هایی بود که پیوسته دنبالش می‌کردم؛ از بررسی ابزارها و مدل‌ها گرفته تا آزمایش
                  راه‌های تازه برای استفاده از آن‌ها.
                </p>

                <p>
                  حالا بیشتر از هر چیز، ساختن سیستم‌هایی برایم جذاب است که بتوانند کارهای واقعی
                  انجام دهند. یکی از ایده‌هایی که دنبال می‌کنم، ساختن یک دستیار هوش مصنوعی شخصی
                  است؛ چیزی با الهام از هیرو در انیمیشن{" "}
                  <em className="font-semibold not-italic text-accent">Big Hero 6</em>، که بتواند
                  ابزارهای مختلف را به هم وصل کند، مهارت‌های تازه به دست بیاورد و در انجام کارها
                  کمکم کند.
                </p>

                <p>
                  هنوز دارم یاد می‌گیرم و مسیرم تمام نشده. شاید بالاخره جواب سؤال آن بچه‌ای را پیدا
                  کرده باشم که از زیر صندلی به مانیتور نگاه می‌کرد، اما حالا سؤال‌های بزرگ‌تری
                  دارم.
                </p>

                <p className="rounded-2xl border border-accent/30 bg-accent/10 p-5 text-sm font-bold leading-relaxed text-fg sm:text-base">
                  دیگر فقط نمی‌خواهم بفهمم با کامپیوتر چه کارهایی می‌شود کرد؛ می‌خواهم خودم آن‌ها
                  را بسازم.
                </p>
              </div>

              <footer className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-fg-secondary transition-colors hover:text-accent"
                >
                  <ArrowRight size={16} aria-hidden="true" />
                  <span>بازگشت به صفحه اصلی</span>
                </Link>

                <a
                  href="mailto:hello@mhdi.dev"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-fg transition-transform duration-150 hover:brightness-110 active:scale-[0.98]"
                >
                  <EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
                  <span>ارتباط با من</span>
                </a>
              </footer>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
