"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Draw = (t: number, dt: number, still: boolean) => void;
type Build = (ctx: CanvasRenderingContext2D, w: number, h: number, el: HTMLCanvasElement) => Draw;

function rgb(el: Element, color: string) {
  const c = document.createElement("canvas").getContext("2d", { willReadFrequently: true })!;
  c.fillStyle = color.startsWith("--") ? getComputedStyle(el).getPropertyValue(color) : color;
  c.fillRect(0, 0, 1, 1);
  const [r, g, b] = c.getImageData(0, 0, 1, 1).data;
  return `${r}, ${g}, ${b}`;
}

function useCanvasLoop(ref: React.RefObject<HTMLCanvasElement | null>, build: Build) {
  useEffect(() => {
    const el = ref.current;
    const ctx = el?.getContext("2d");
    if (!el || !ctx) return;
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    let draw: Draw | undefined;
    let raf = 0;
    let t = 0;
    let last = 0;
    let seen = false;
    const frame = (now: number) => {
      const dt = Math.max(0, Math.min(now - last, 50));
      last = now;
      t += dt;
      draw?.(t, dt, false);
      raf = requestAnimationFrame(frame);
    };
    const sync = () => {
      cancelAnimationFrame(raf);
      if (!draw) return;
      if (mq.matches) draw(t, 0, true);
      else if (seen && !document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    const setup = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const w = el.clientWidth;
      const h = el.clientHeight;
      el.width = w * dpr;
      el.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw = w && h ? build(ctx, w, h, el) : undefined;
      sync();
    };
    const ro = new ResizeObserver(setup);
    const io = new IntersectionObserver(([e]) => {
      seen = e.isIntersecting;
      sync();
    });
    // Style/class mutations are frequent (Next.js injects styles, fonts load, …),
    // so the canvas is rebuilt on a debounce instead of on every single mutation.
    let timer: ReturnType<typeof setTimeout> | undefined;
    const schedule = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
        setup();
      }, 120);
    };
    const mo = new MutationObserver(schedule);
    ro.observe(el);
    io.observe(el);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "style"] });
    mo.observe(document.head, { childList: true, subtree: true, characterData: true });
    document.addEventListener("visibilitychange", sync);
    mq.addEventListener("change", sync);
    return () => {
      cancelAnimationFrame(raf);
      if (timer) clearTimeout(timer);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", sync);
      mq.removeEventListener("change", sync);
    };
  }, [ref, build]);
}

const seed = (i: number, k: number) => {
  const s = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453;
  return s - Math.floor(s);
};

export interface WavyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  waves?: number;
  speed?: "slow" | "fast";
  blur?: number;
  colors?: string[];
  opacity?: number;
}

export function WavyBackground({
  waves = 5,
  speed = "slow",
  blur = 16,
  colors = ["#ccff00", "#708200", "#161a0b"],
  opacity = 0.4,
  className,
  ...props
}: WavyBackgroundProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  const palette = colors.join("|");

  const build = useCallback<Build>(
    (ctx, w, h, el) => {
      const fills = palette.split("|").map((c) => rgb(el, c));
      const rate = speed === "fast" ? 0.0009 : 0.0003;
      const step = 12;
      const [r, g, b] = rgb(el, getComputedStyle(el).color).split(", ").map(Number);
      ctx.globalCompositeOperation = r * 0.3 + g * 0.59 + b * 0.11 > 128 ? "lighter" : "source-over";
      const tau = Math.PI * 2;
      return (t) => {
        ctx.clearRect(0, 0, w, h);
        ctx.globalAlpha = opacity;
        for (let i = 0; i < waves; i++) {
          const f1 = tau * (0.5 + seed(i, 1));
          const f2 = tau * (1.4 + seed(i, 2) * 1.6);
          const p = seed(i, 3) * tau;
          const s = rate * (0.6 + seed(i, 4) * 0.8) * (i % 2 ? -1 : 1);
          const amp = h * (0.1 + seed(i, 5) * 0.08);
          const base = h * (0.52 + (i - (waves - 1) / 2) * 0.07);
          const top: number[] = [];
          ctx.beginPath();
          for (let x = 0; x <= w + step; x += step) {
            const u = x / w;
            const y =
              base +
              amp * (0.7 * Math.sin(u * f1 + t * s + p) + 0.3 * Math.sin(u * f2 - t * s * 1.7 + p * 2));
            top.push(y);
            ctx.lineTo(x, y);
          }
          for (let j = top.length - 1; j >= 0; j--) {
            const u = (j * step) / w;
            ctx.lineTo(j * step, top[j] + amp * (0.45 + 0.35 * Math.sin(u * f1 * 1.3 - t * s + p)));
          }
          const g = ctx.createLinearGradient(0, 0, w, 0);
          g.addColorStop(0, `rgb(${fills[i % fills.length]})`);
          g.addColorStop(1, `rgb(${fills[(i + 1) % fills.length]})`);
          ctx.fillStyle = g;
          ctx.fill();
        }
      };
    },
    [waves, speed, opacity, palette]
  );
  useCanvasLoop(ref, build);

  return (
    <div
      aria-hidden
      data-slot="wavy-background"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      {...props}
    >
      <canvas
        ref={ref}
        className="absolute"
        style={{
          inset: -blur * 2,
          width: `calc(100% + ${blur * 4}px)`,
          height: `calc(100% + ${blur * 4}px)`,
          filter: `blur(${blur}px)`,
        }}
      />
    </div>
  );
}
