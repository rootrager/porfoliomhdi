import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-line py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface">
            <Image
              src="https://picsum.photos/seed/mhdi-studio/900/1125"
              alt="Mhdi at work"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              A designer who ships code.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                I work where product thinking meets frontend craft. The goal is
                always the same - ship something useful, keep it fast, and make it
                pleasant to use.
              </p>
              <p>
                I care about accessible markup, stable layout, and small details
                that hold up under real traffic.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-8 grid gap-3 text-sm text-fg">
              <li className="flex gap-3">
                <span className="font-mono text-muted">01</span>
                <span>End to end ownership of web products</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-muted">02</span>
                <span>Collaboration with design and engineering teams</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-muted">03</span>
                <span>Performance and accessibility as first-class work</span>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="mailto:hello@mhdi.dev"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg active:scale-[0.98]"
              >
                hello@mhdi.dev
              </Link>
              <Link
                href="#work"
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:bg-surface"
              >
                See work
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
