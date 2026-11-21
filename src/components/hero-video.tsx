"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  className?: string;
  desktopSrc: string;
  mobileSrc: string;
  desktopPoster: string;
  mobilePoster: string;
}

/**
 * Responsive hero background video.
 *
 * Selects desktop vs. mobile source via matchMedia so mobile devices never
 * download the larger desktop stream, respects prefers-reduced-motion, and
 * pauses automatically when scrolled out of view or when the tab is hidden.
 */
export function HeroVideo({
  className,
  desktopSrc,
  mobileSrc,
  desktopPoster,
  mobilePoster,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [media, setMedia] = useState<{ src: string; poster: string } | null>(null);

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 768px)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMedia = () => {
      const isDesktop = mqDesktop.matches;
      setMedia({
        src: mqReduced.matches ? "" : isDesktop ? desktopSrc : mobileSrc,
        poster: isDesktop ? desktopPoster : mobilePoster,
      });
    };

    updateMedia();
    mqDesktop.addEventListener("change", updateMedia);
    mqReduced.addEventListener("change", updateMedia);

    return () => {
      mqDesktop.removeEventListener("change", updateMedia);
      mqReduced.removeEventListener("change", updateMedia);
    };
  }, [desktopSrc, mobileSrc, desktopPoster, mobilePoster]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !media?.src) return;

    let visible = true;

    const sync = () => {
      if (visible && !document.hidden) {
        void video.play().catch(() => {
          /* autoplay may be blocked; poster remains visible */
        });
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        sync();
      },
      { threshold: 0.01 }
    );

    observer.observe(video);
    document.addEventListener("visibilitychange", sync);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [media?.src]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={media?.src || undefined}
      poster={media?.poster}
      autoPlay={Boolean(media?.src)}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
