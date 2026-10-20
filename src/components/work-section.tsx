import { Reveal } from "./reveal";
import { WavyBackground } from "./wavy-background";
import { ServiceCard, type ServiceCardData } from "./service-card";

// In RTL layout the first array item is rendered on the right.
const cards: ServiceCardData[] = [
  {
    badge: "سیستم‌های هوش مصنوعی و تراشه",
    title: "اتوماسیون و مدل‌های هوشمند",
    description:
      "ایجاد ایجنت‌های هوشمند مستقل، پایپ‌لاین‌های پیشرفته با مدل‌های زبانی، اتصال ابزارها و اتوماسیون جریان‌های کاری واقعی.",
    image: "/images/three.jpeg",
    imageAlt: "هوش مصنوعی و اتوماسیون هوشمند",
    gradient: ["#ff3838", "#7a1420"],
    tags: [
      { label: "Python", text: "text-[#facc15]" },
      { label: "AI Agents", text: "text-[#fb923c]" },
      { label: "LLMs", text: "text-[#a78bfa]" },
    ],
  },
  {
    badge: "طراحی محصول و دیزاین سیستم",
    title: "طراحی تجربه و رابط کاربری",
    description:
      "سیستم‌های طراحی مقیاس‌پذیر، موشن‌های ظریف و تعاملی، استانداردهای سخت‌گیرانه دسترسی‌پذیری و رابط‌هایی که در یاد می‌مانند.",
    image: "/images/twe.jpeg",
    imageAlt: "طراحی محصول و دیزاین سیستم",
    gradient: ["#ff758f", "#7a2140"],
    tags: [
      { label: "Figma", text: "text-[#f43f5e]" },
      { label: "Tailwind CSS", text: "text-[#38bdf8]" },
      { label: "Motion", text: "text-[#ccff00]" },
    ],
  },
  {
    badge: "توسعه فول‌استک (Next.js)",
    title: "محصولات و برنامه‌های وب",
    description:
      "معماری مدرن سرتاسری با Next.js، رابط‌های کاربری ریسپانسیو و پرسرعت، سئو و کدهای تمیز و ساختاریافته.",
    image: "/images/first.jpeg",
    imageAlt: "توسعه فول استک و وب پیشرفته",
    gradient: ["#4f7cff", "#1b2a5c"],
    tags: [
      { label: "Next.js", text: "text-[#38bdf8]" },
      { label: "TypeScript", text: "text-[#60a5fa]" },
      { label: "React 19", text: "text-[#22d3ee]" },
    ],
  },
];

export function WorkSection() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#090b04] py-24 text-white md:py-32"
    >
      {/* Velora UI Wavy Background */}
      <WavyBackground
        waves={6}
        speed="slow"
        blur={18}
        opacity={0.4}
        colors={["#ccff00", "#708200", "#586600", "#161a0b"]}
      />

      {/* Subtle overlay to enhance card and text readability */}
      <div className="pointer-events-none absolute inset-0 bg-[#090b04]/50 backdrop-blur-[1px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <Reveal>
          <div className="mb-14 flex items-center gap-4">
            <h2 className="font-display text-5xl tracking-normal text-white md:text-7xl lg:text-8xl">
              چه کارهایی انجام می‌دهم
            </h2>
            {/* Hand-drawn doodle arrow (same spirit as the reference design) */}
            <svg
              aria-hidden
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden h-14 w-14 shrink-0 text-[#ccff00] md:block"
            >
              <path
                d="M62 10c-6 6-10 4-14 8s-2 10-8 12-10-2-14 2-2 12-6 16c-3 3-7 3-9 1"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M20 42c-3 3-4 7-4 10m4-10 8-1m-8 1 1 8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="mt-2 max-w-xl text-base font-medium leading-relaxed text-white/90 md:text-lg">
            توسعه نرم‌افزار پیشرفته، سیستم‌های هوش مصنوعی مستقل و رابط‌های کاربری با هویت اصیل.
          </p>
        </Reveal>

        {/* 3 Main Cards — overlapping stack on large screens (like the reference) */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-0">
          {cards.map((card, idx) => (
            <Reveal
              key={card.badge}
              delay={idx * 0.1}
              className="md:last:col-span-2 lg:last:col-span-1 lg:-ms-6 lg:first:ms-0"
            >
              <ServiceCard card={card} index={idx} />
            </Reveal>
          ))}
        </div>

        {/* Floating Metrics Pill Capsule */}
        <Reveal delay={0.35}>
          <div className="mt-16 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-8 rounded-full border border-black/20 bg-[#0e1107] px-8 py-4 shadow-xl md:gap-14 md:px-12 md:py-5">
              <div className="text-center">
                <span className="font-display text-4xl font-normal text-white md:text-5xl">
                  +۱۰۰
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#ccff00]">
                  راه‌حل و پروژه تحویل داده شده
                </p>
              </div>

              <div className="h-8 w-px bg-white/15" />

              <div className="text-center">
                <span className="font-display text-4xl font-normal text-white md:text-5xl">
                  +۲۰۰
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#ccff00]">
                  کامیت و خروجی کد
                </p>
              </div>

              <div className="h-8 w-px bg-white/15" />

              <div className="text-center">
                <span className="font-display text-4xl font-normal text-white md:text-5xl">
                  +۴
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#ccff00]">
                  معماری سیستم‌های اصلی
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
