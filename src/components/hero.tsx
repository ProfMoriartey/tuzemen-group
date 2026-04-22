"use client"

import { useRef } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import Link from "next/link"

export function Hero() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  const slides = [
    {
      id: 1,
      title: "Tüzemen Group",
      description: "Premium fabrics and textile manufacturing for international markets",
      image: "https://cdn.tuzemengroup.com/uploads/winbrella_sosyal_yeni_1_126_87d70ea499.JPG?w=3840&q=75",
    },
    {
      id: 2,
      title: "Global Reach",
      description: "Exporting high-quality textiles to businesses worldwide",
      image: "https://cdn.tuzemengroup.com/uploads/DSC_3212_5796bdce25.jpg?w=3840&q=75",
    },
    {
      id: 3,
      title: "Modern Craftsmanship",
      description: "Blending traditional techniques with modern technology",
      image: "https://cdn.tuzemengroup.com/uploads/DBBC_9725_Kopya_26268c3a4c.JPG?w=3840&q=75",
    },
    {
      id: 4,
      title: "Over 160 Designs",
      description: "A diverse catalog built to meet strict quality standards",
      image: "https://cdn.tuzemengroup.com/uploads/DSC_3037_9456a8533d.jpg?w=3840&q=75",
    },
  ]

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
              <div className="relative flex min-h-[80vh] items-center justify-center md:min-h-screen">
                
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={slide.id === 1}
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="container relative z-10 mx-auto w-full px-4 text-center md:px-8">
                  <div className="mx-auto max-w-3xl">
                    <h1 className="mb-6 text-3xl font-light uppercase tracking-widest text-white md:text-4xl xl:text-5xl">
                      {slide.title}
                    </h1>
                    <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                      {slide.description}
                    </p>
                    <div className="flex justify-center">
                      <Link
                        href="#our-brands"
                        className="inline-flex items-center justify-center border border-white/50 bg-transparent px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                      >
                        Explore Brands
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center border-none bg-transparent text-white transition-all duration-300 hover:bg-black/20 md:left-8 after:absolute after:content-[''] after:h-1.5 after:w-1.5 after:rounded-full after:bg-white/60 after:transition-all after:duration-300 hover:after:scale-0 hover:after:opacity-0 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:scale-50 [&>svg]:opacity-0 [&>svg]:transition-all [&>svg]:duration-300 hover:[&>svg]:scale-100 hover:[&>svg]:opacity-100" />
        <CarouselNext className="absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center border-none bg-transparent text-white transition-all duration-300 hover:bg-black/20 md:right-8 after:absolute after:content-[''] after:h-1.5 after:w-1.5 after:rounded-full after:bg-white/60 after:transition-all after:duration-300 hover:after:scale-0 hover:after:opacity-0 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:scale-50 [&>svg]:opacity-0 [&>svg]:transition-all [&>svg]:duration-300 hover:[&>svg]:scale-100 hover:[&>svg]:opacity-100" />
      </Carousel>
    </section>
  )
}