"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background video.
 *
 * The video is decorative, so it is paused whenever it is off screen or the
 * tab is hidden: an always-decoding 1080p loop burns battery and CPU for
 * nothing.
 */
export function HeroVideo({
  className,
  poster,
  children,
}: {
  className?: string;
  poster?: string;
  children?: React.ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let visible = true;

    const sync = () => {
      if (visible && !document.hidden) {
        void video.play().catch(() => {
          /* autoplay can be blocked; the poster stays visible */
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
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
    >
      {children}
    </video>
  );
}
