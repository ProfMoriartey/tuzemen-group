// src/components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate h-screen overflow-hidden md:p-24">
      <Image
        src="/images/hero-fabrics.jpg"
        alt="Draped fabrics in natural light"
        fill
        priority
        className="object-cover"
      />
      <div className="photo-overlay" />

      <div className="container-default relative z-10 flex min-h-[80vh] flex-col justify-end pb-16">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl leading-tight text-white md:text-6xl">
            Fabrics for timeless spaces
          </h1>
          <p className="mt-4 text-white/90 md:text-lg">
            Drapery, sheers, and upholstery crafted for homes, hotels, and
            projects.
          </p>
        </div>
      </div>
      {/* bottom fade to blend with next section */}
      <div className="from-sand/90 pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent" />
    </section>
  );
}
