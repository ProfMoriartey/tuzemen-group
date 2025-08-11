"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

type CTA = { label: string; href: string };

export type Slide = {
  image: string;
  title?: string;
  subtitle?: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
};

interface Props {
  slides: Slide[]; // pass at least 1
  intervalMs?: number; // default 5000
  heightClass?: string; // e.g., "h-screen" or "h-[80vh]"
}

export default function HeroCarousel({
  slides,
  intervalMs = 5000,
  heightClass = "h-screen",
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1); // 1 => next (R→L), -1 => prev (L→R)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  if (!slides || slides.length === 0) return null;

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((prev) => (nextIndex + slides.length) % slides.length);
    },
    [slides.length],
  );

  const next = useCallback(() => {
    setDirection(1);
    goTo(index + 1);
  }, [goTo, index]);

  const prev = useCallback(() => {
    setDirection(-1);
    goTo(index - 1);
  }, [goTo, index]);

  // Dots click: set direction based on shortest move
  const goToWithDirection = (target: number) => {
    const current = index;
    const len = slides.length;
    const forward = (target - current + len) % len;
    const backward = (current - target + len) % len;
    setDirection(forward <= backward ? 1 : -1);
    goTo(target);
  };

  // Autoplay
  useEffect(() => {
    if (paused || slides.length <= 1) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(next, intervalMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, paused, intervalMs, slides.length, next]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.changedTouches.item(0);
    touchStartX.current = t ? t.clientX : null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const t = e.changedTouches.item(0);
    if (touchStartX.current == null || !t) return;
    const dx = t.clientX - touchStartX.current;
    if (dx > 50) prev();
    if (dx < -50) next();
    touchStartX.current = null;
  };

  const current = slides[index % slides.length]!;

  // Slide variants (no white flash)
  const slideVariants: Variants = {
    enter: (dir: 1 | -1) => ({
      x: dir === 1 ? "100%" : "-100%",
    }),
    center: { x: 0 },
    exit: (dir: 1 | -1) => ({
      x: dir === 1 ? "-100%" : "100%",
    }),
  };

  return (
    <section
      className={`relative w-full ${heightClass} overflow-hidden bg-black`} // black bg prevents flashes
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          className="absolute inset-0 z-0"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Image
            src={current.image}
            alt={current.title ?? `Slide ${index + 1}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        {current.title && (
          <h1 className="font-serif text-4xl font-bold md:text-6xl">
            {current.title}
          </h1>
        )}
        {current.subtitle && (
          <p className="mt-4 max-w-2xl text-base md:text-lg">
            {current.subtitle}
          </p>
        )}
        {(current.ctaPrimary ?? current.ctaSecondary) && (
          <div className="mt-6 flex gap-3">
            {current.ctaPrimary && (
              <a
                href={current.ctaPrimary.href}
                className="rounded-full bg-white px-6 py-3 text-black hover:bg-gray-200"
              >
                {current.ctaPrimary.label}
              </a>
            )}
            {current.ctaSecondary && (
              <a
                href={current.ctaSecondary.href}
                className="rounded-full border border-white px-6 py-3 hover:bg-white hover:text-black"
              >
                {current.ctaSecondary.label}
              </a>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 z-20 flex items-center justify-between px-4">
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="pointer-events-auto rounded-full bg-white/40 px-3 py-2 text-black backdrop-blur-md hover:bg-white/60"
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="pointer-events-auto rounded-full bg-white/40 px-3 py-2 text-black backdrop-blur-md hover:bg-white/60"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goToWithDirection(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
