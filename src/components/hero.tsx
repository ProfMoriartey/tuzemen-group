"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Link from "next/link";

export function Hero() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const slides = [
    {
      id: 1,
      title: "Tüzemen Group",
      description: "Premium fabrics and textile manufacturing for international markets.",
      image: "https://cdn.tuzemengroup.com/uploads/winbrella_sosyal_yeni_1_126_87d70ea499.JPG?w=3840&q=75",
    },
    {
      id: 2,
      title: "Global Reach",
      description: "Exporting high-quality textiles to businesses worldwide.",
      image: "https://cdn.tuzemengroup.com/uploads/DSC_3212_5796bdce25.jpg?w=3840&q=75",
    },
    {
      id: 3,
      title: "Modern Craftsmanship",
      description: "Blending traditional techniques with modern technology.",
      image: "https://cdn.tuzemengroup.com/uploads/DBBC_9725_Kopya_26268c3a4c.JPG?w=3840&q=75",
    },
    {
      id: 4,
      title: "Over 160 Designs",
      description: "A diverse catalog built to meet strict quality standards.",
      image: "https://cdn.tuzemengroup.com/uploads/DSC_3037_9456a8533d.jpg?w=3840&q=75",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative flex min-h-[80vh] items-center md:min-h-screen">
                
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={slide.id === 1}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>
                </div>

                <div className="container relative z-10 mx-auto w-full px-4 md:px-8">
                  <div className="max-w-2xl">
                    <h1 className="mb-6 text-4xl font-bold uppercase tracking-tight text-white md:text-5xl xl:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="mb-10 text-lg leading-relaxed text-white/90 md:text-xl">
                      {slide.description}
                    </p>
                    <div className="flex gap-4">
                      <Link
                        href="#our-brands"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 font-bold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        Explore Brands
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                      <Link
                        href="#about-us"
                        className="inline-flex items-center justify-center rounded-md border border-white/30 bg-black/20 px-8 py-4 font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                      >
                        About Us
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute right-36 bottom-12 z-20 hidden space-x-4 lg:block">
          <CarouselPrevious className="static h-12 w-12 translate-x-0 translate-y-0 border-none bg-black/20 text-white backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="relative h-12 w-12 translate-x-0 translate-y-0 border-none bg-black/20 text-white backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground" />
        </div>
      </Carousel>
    </section>
  );
}