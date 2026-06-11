"use client";

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Link } from "~/i18n/navigation";

const slideKeys = ["slide1", "slide2", "slide3", "slide4"] as const;

const slideImages = [
  "https://cdn.tuzemengroup.com/uploads/winbrella_sosyal_yeni_1_126_87d70ea499.JPG?w=3840&q=75",
  "https://cdn.tuzemengroup.com/uploads/DSC_3212_5796bdce25.jpg?w=3840&q=75",
  "https://cdn.tuzemengroup.com/uploads/DBBC_9725_Kopya_26268c3a4c.JPG?w=3840&q=75",
  "https://cdn.tuzemengroup.com/uploads/DSC_3037_9456a8533d.jpg?w=3840&q=75",
];

export function Hero() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const t = useTranslations("Hero");

  return (
    <section className="bg-background relative w-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slideKeys.map((slideKey, index) => (
            <CarouselItem key={slideKey}>
              <div className="relative flex min-h-dvh items-center justify-center">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slideImages[index]!}
                    alt={t(`${slideKey}.title`)}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 container mx-auto w-full px-4 text-center md:px-8">
                  <div className="mx-auto max-w-3xl">
                    <h1 className="mb-6 text-3xl font-light tracking-widest text-white uppercase md:text-4xl xl:text-5xl">
                      {t(`${slideKey}.title`)}
                    </h1>
                    <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                      {t(`${slideKey}.description`)}
                    </p>
                    <div className="flex justify-center">
                      <Link
                        href="#our-brands"
                        className="inline-flex items-center justify-center border border-white/50 bg-transparent px-10 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                      >
                        {t("exploreBrands")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute top-1/2 left-4 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center border-none bg-transparent text-white transition-all duration-300 after:absolute after:h-1.5 after:w-1.5 after:rounded-full after:bg-white/60 after:transition-all after:duration-300 after:content-[''] hover:bg-black/20 hover:after:scale-0 hover:after:opacity-0 md:left-8 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:scale-50 [&>svg]:opacity-0 [&>svg]:transition-all [&>svg]:duration-300 hover:[&>svg]:scale-100 hover:[&>svg]:opacity-100" />
        <CarouselNext className="absolute top-1/2 right-4 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center border-none bg-transparent text-white transition-all duration-300 after:absolute after:h-1.5 after:w-1.5 after:rounded-full after:bg-white/60 after:transition-all after:duration-300 after:content-[''] hover:bg-black/20 hover:after:scale-0 hover:after:opacity-0 md:right-8 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:scale-50 [&>svg]:opacity-0 [&>svg]:transition-all [&>svg]:duration-300 hover:[&>svg]:scale-100 hover:[&>svg]:opacity-100" />
      </Carousel>
    </section>
  );
}
