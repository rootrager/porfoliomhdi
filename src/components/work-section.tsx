"use client";

import { useState } from "react";
import { Barbell, Cpu, GithubLogo, ShoppingCart, Subtitles } from "@phosphor-icons/react";
import {
  PROJECT_CATEGORIES,
  PROJECTS,
  type ProjectCategoryId,
} from "@/content/site";
import { Reveal } from "./reveal";
import { WavyBackground } from "./wavy-background";

const PROJECT_ICONS = [Cpu, ShoppingCart, Barbell, Subtitles];

const HIGHLIGHTS = [
  { value: "4", label: "پروژه واقعی و در حال استفاده" },
  { value: "83+", label: "دستگاه توی سیستم انبار زنده" },
  { value: "100%", label: "اجرای محلی بدون وابستگی به کلود" },
] as const;

export function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryId>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.categoryId === selectedCategory);

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-line bg-bg py-24 text-fg md:py-32"
    >
      <WavyBackground
        waves={4}
        speed="slow"
        blur={26}
        opacity={0.22}
        colors={["--accent", "--olive-dark", "--bg"]}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-accent">کارهای واقعی</p>
              <h2 className="mt-2 font-display text-5xl tracking-normal text-fg md:text-7xl">
                چیزهایی که ساختم
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-fg-secondary md:text-base">
              کد وقتی جذابه که یه گره واقعی رو باز کنه. این پروژه‌ها همه‌شون از دل یه دردسر واقعی تو
              بازار یا کار روزمره در اومدن، نه تمرین‌های الکی.
            </p>
          </div>
        </Reveal>

        {/* Interactive Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="فیلتر پروژه‌ها"
          className="mt-8 inline-flex flex-wrap items-center gap-1.5 rounded-xl border border-line bg-surface/90 p-1.5"
        >
          {PROJECT_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category.id)}
                className={`min-h-[40px] cursor-pointer whitespace-nowrap rounded-lg px-4 py-1.5 text-xs font-semibold transition-colors duration-150 sm:text-sm ${
                  isActive
                    ? "bg-accent text-accent-fg"
                    : "text-fg-secondary hover:bg-surface-elevated hover:text-fg"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Single-Elevation Project Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, idx) => {
            const Icon = PROJECT_ICONS[Number(project.index) - 1] ?? Cpu;
            return (
              <Reveal key={project.title} delay={idx * 0.06}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface/90 p-6 backdrop-blur-md transition-colors duration-200 hover:border-line-strong md:p-8">
                  <div>
                    <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
                      <div className="flex items-center gap-3 text-xs text-muted">
                        <span
                          dir="ltr"
                          className="font-mono text-sm font-semibold tabular-nums text-accent"
                        >
                          {project.index}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{project.category}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`گیت‌هاب ${project.title}`}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-fg-secondary transition-colors duration-150 hover:border-accent hover:text-accent"
                          >
                            <GithubLogo size={18} />
                          </a>
                        ) : null}
                        <span
                          aria-hidden="true"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-elevated text-accent"
                        >
                          <Icon size={18} />
                        </span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3
                        dir="ltr"
                        className="font-orbitron text-xl font-bold tracking-tight text-fg md:text-2xl"
                      >
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-base font-semibold text-accent">
                        {project.faTitle}
                      </p>
                    </div>

                    <div className="mt-6 space-y-4 text-sm leading-relaxed text-fg-secondary">
                      <div>
                        <span className="font-semibold text-danger">مسئله: </span>
                        <span>{project.problem}</span>
                      </div>

                      <div className="border-t border-line pt-4">
                        <span className="font-semibold text-fg">راه‌حل: </span>
                        <span>{project.solution}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-line pt-5">
                    <p dir="ltr" className="font-mono text-xs leading-relaxed text-muted">
                      {project.stack.join(" · ")}
                    </p>
                    <p className="mt-2.5 text-sm font-semibold text-fg">{project.outcome}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Grounded Quantitative Proof Row */}
        <Reveal delay={0.18}>
          <div className="mt-14 grid grid-cols-1 divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-x-reverse sm:divide-y-0">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="px-4 py-6 text-center">
                <div
                  dir="ltr"
                  className="font-orbitron text-2xl font-bold tabular-nums text-accent md:text-3xl"
                >
                  {item.value}
                </div>
                <p className="mt-1.5 text-sm text-fg-secondary">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
