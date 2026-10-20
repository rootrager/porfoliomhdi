"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export interface ServiceCardData {
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: { label: string; text: string }[];
  /** [inner, outer] colors of the glow blob that fills the bottom of the card */
  gradient: [string, string];
}

export function ServiceCard({
  card,
  index,
}: {
  card: ServiceCardData;
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      style={{ zIndex: index + 1 }}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="group relative flex h-full min-h-[23rem] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0d06] p-6 shadow-2xl transition-shadow duration-500 hover:shadow-black/70 md:min-h-[26rem] lg:-ms-6 lg:first:ms-0"
    >
      {/* Gradient blob — the colored glow that fills the lower half of the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 start-[-4.5rem] h-80 w-80 rounded-[42%] opacity-95 blur-2xl transition-all duration-700 ease-out will-change-transform group-hover:scale-110 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${card.gradient[0]} 0%, ${card.gradient[1]} 48%, transparent 74%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ccff00]">
          {card.badge}
        </span>
        <h3 className="mt-2 font-display text-2xl leading-snug text-white md:text-3xl">
          {card.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300/85">
          {card.description}
        </p>

        {/* Tech badges */}
        <div className="mt-auto flex flex-wrap gap-2 pt-8">
          {card.tags.map((tag) => (
            <span
              key={tag.label}
              className={`inline-flex items-center rounded-md border border-white/10 bg-[#090b04]/80 px-2.5 py-1 text-xs font-bold tracking-wider ${tag.text}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Photo — sits on top of the glow, like the reference design */}
        <div className="relative mt-6 size-16 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-black shadow-xl transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <Image
            src={card.image}
            alt={card.imageAlt}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
      </div>
    </motion.article>
  );
}
