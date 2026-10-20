import Image from "next/image";
import { Reveal } from "./reveal";
import { WavyBackground } from "./wavy-background";

interface ServiceCard {
  title: string;
  badge: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: { label: string; bg: string; text: string }[];
}

// In RTL layout:
// First in array (idx 0) displays on the Right in RTL, or we display from left to right:
// Left: first.jpeg (Hacker/Cyber), Center: twe.jpeg (Retro Laptop), Right: three.jpeg (AI Hand/Chip)
const cards: ServiceCard[] = [
  {
    badge: "سیستم‌های هوش مصنوعی و تراشه",
    title: "اتوماسیون و مدل‌های هوشمند",
    description:
      "ایجاد ایجنت‌های هوشمند مستقل، پایپ‌لاین‌های پیشرفته با مدل‌های زبانی، اتصال ابزارها و اتوماسیون جریان‌های کاری واقعی.",
    image: "/images/three.jpeg",
    imageAlt: "هوش مصنوعی و اتوماسیون هوشمند",
    tags: [
      { label: "Python", bg: "bg-[#090b04]", text: "text-[#facc15]" },
      { label: "AI Agents", bg: "bg-[#090b04]", text: "text-[#fb923c]" },
      { label: "LLMs", bg: "bg-[#090b04]", text: "text-[#a78bfa]" },
    ],
  },
  {
    badge: "طراحی محصول و دیزاین سیستم",
    title: "طراحی تجربه و رابط کاربری",
    description:
      "سیستم‌های طراحی مقیاس‌پذیر، موشن‌های ظریف و تعاملی، استانداردهای سخت‌گیرانه دسترسی‌پذیری و رابط‌هایی که در یاد می‌مانند.",
    image: "/images/twe.jpeg",
    imageAlt: "طراحی محصول و دیزاین سیستم",
    tags: [
      { label: "Figma", bg: "bg-[#090b04]", text: "text-[#f43f5e]" },
      { label: "Tailwind CSS", bg: "bg-[#090b04]", text: "text-[#38bdf8]" },
      { label: "Motion", bg: "bg-[#090b04]", text: "text-[#ccff00]" },
    ],
  },
  {
    badge: "توسعه فول‌استک (Next.js)",
    title: "محصولات و برنامه‌های وب",
    description:
      "معماری مدرن سرتاسری با Next.js، رابط‌های کاربری ریسپانسیو و پرسرعت، سئو و کدهای تمیز و ساختاریافته.",
    image: "/images/first.jpeg",
    imageAlt: "توسعه فول استک و وب پیشرفته",
    tags: [
      { label: "Next.js", bg: "bg-[#090b04]", text: "text-[#38bdf8]" },
      { label: "TypeScript", bg: "bg-[#090b04]", text: "text-[#60a5fa]" },
      { label: "React 19", bg: "bg-[#090b04]", text: "text-[#22d3ee]" },
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
          <div className="mb-14">
            <h2 className="font-display text-5xl tracking-normal text-white md:text-7xl lg:text-8xl">
              چه کارهایی انجام می‌دهم
            </h2>
            <p className="mt-2 max-w-xl text-base font-medium leading-relaxed text-white/90 md:text-lg">
              توسعه نرم‌افزار پیشرفته، سیستم‌های هوش مصنوعی مستقل و رابط‌های کاربری با هویت اصیل.
            </p>
          </div>
        </Reveal>

        {/* 3 Main Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <Reveal key={card.badge} delay={idx * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-black/15 bg-[#0e1107] p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-black/50">
                {/* Visual Image Capsule */}
                <div className="relative mb-6 h-56 w-full overflow-hidden rounded-[20px] border border-white/10 bg-black/60 shadow-inner">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1107] via-transparent to-black/20" />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ccff00]">
                    {card.badge}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-white md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300">
                    {card.description}
                  </p>

                  {/* Software / Tech Badges */}
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-3">
                    {card.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold tracking-wider ${tag.bg} ${tag.text} border border-white/10`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
