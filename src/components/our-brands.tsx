"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";

const brands = [
  {
    id: "brand-one",
    name: "Winbrella",
    link: "https://www.winbrellafabrics.com/",
    description: "Premium cotton and natural fibers for everyday wear.",
    image1:
      "https://cdn.tuzemengroup.com/uploads/winbrella_sosyal_yeni_1_126_87d70ea499.JPG?w=1920&q=75",
    image2:
      "https://cdn.tuzemengroup.com/uploads/DSC_3212_5796bdce25.jpg?w=1920&q=75",
  },
  {
    id: "brand-two",
    name: "Vanilla Home",
    link: "https://www.vanillahome.com.tr/",
    description: "Durable and sustainable textiles for home goods.",
    image1:
      "https://cdn.tuzemengroup.com/uploads/DSC_3037_9456a8533d.jpg?w=1920&q=75",
    image2:
      "https://cdn.tuzemengroup.com/uploads/DBBC_9725_Kopya_26268c3a4c.JPG?w=1920&q=75",
  },
  {
    id: "brand-three",
    name: "La Luxe",
    link: "https://www.winbrellafabrics.com/",
    description: "Luxury silks and delicate fabrics for formal attire.",
    image1:
      "https://cdn.tuzemengroup.com/uploads/DSC_3212_5796bdce25.jpg?w=1920&q=75",
    image2:
      "https://cdn.tuzemengroup.com/uploads/winbrella_sosyal_yeni_1_126_87d70ea499.JPG?w=1920&q=75",
  },
  {
    id: "brand-four",
    name: "Advantage",
    link: "https://www.winbrellafabrics.com/",
    description: "Performance synthetic blends for active and outdoor use.",
    image1:
      "https://cdn.tuzemengroup.com/uploads/DBBC_9725_Kopya_26268c3a4c.JPG?w=1920&q=75",
    image2:
      "https://cdn.tuzemengroup.com/uploads/DSC_3037_9456a8533d.jpg?w=1920&q=75",
  },
];

export function OurBrands() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const clipRadius = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    ["0%", "150%", "150%", "0%"],
  );
  const clipPath = useMotionTemplate`circle(${clipRadius} at 50% 50%)`;

  // Redistributed timing: Even 10% blocks for holding and moving
  const x = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 1],
    ["0%", "0%", "0%", "-25%", "-25%", "-50%", "-50%", "-75%", "-75%", "-75%"],
  );

  // Sync the color shifts with the exact same timing blocks
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85],
    [
      "#1B3B28",
      "#1B3B28",
      "#16325B",
      "#16325B",
      "#5B162B",
      "#5B162B",
      "#6B4412",
      "#6B4412",
    ],
  );

  const progressScale = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  const progressOpacity = useTransform(scrollYProgress, [0.8, 0.85], [1, 0]);

  return (
    <section
      ref={targetRef}
      id="our-brands"
      className="bg-background relative h-[800vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="bg-background absolute inset-0 z-0 flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-foreground mb-6 text-4xl font-light tracking-widest uppercase md:text-6xl lg:text-7xl">
            Our Brands
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base tracking-widest uppercase md:text-lg">
            Discover our specialized textile collections
          </p>
          <div className="mt-16 flex flex-col items-center gap-2 opacity-60">
            <span className="text-foreground text-xs font-light tracking-widest uppercase">
              Scroll to explore
            </span>
            <div className="from-foreground h-16 w-px bg-linear-to-b to-transparent"></div>
          </div>
        </div>

        <motion.div
          style={{ clipPath, backgroundColor }}
          className="absolute inset-0 z-10 flex items-center overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-br from-black/10 to-black/60"></div>

          <motion.div
            style={{ x }}
            className="relative z-10 flex h-full w-[400vw]"
          >
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="relative flex h-full w-screen shrink-0 items-center justify-center overflow-hidden"
              >
                <h2 className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold tracking-tighter whitespace-nowrap text-white/5 uppercase">
                  {brand.name}
                </h2>

                <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12 lg:gap-8">
                  <div className="flex flex-col text-left lg:col-span-5 lg:col-start-1">
                    <h3 className="mb-6 text-4xl font-light tracking-widest text-white uppercase md:text-6xl">
                      {brand.name}
                    </h3>
                    <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/80">
                      {brand.description}
                    </p>
                    <div>
                      <a
                        href={`${brand.link}`}
                        target="_blank"
                        className="inline-flex items-center justify-center border border-white/50 bg-transparent px-10 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                      >
                        Explore Collection
                      </a>
                    </div>
                  </div>

                  <div className="relative h-[50vh] w-full lg:col-span-6 lg:col-start-7 lg:h-[70vh]">
                    <div className="absolute top-0 right-0 z-10 h-[80%] w-[75%] overflow-hidden rounded-sm shadow-2xl transition-transform duration-700 hover:scale-105">
                      <Image
                        src={brand.image1}
                        alt={`${brand.name} feature 1`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 z-20 h-[60%] w-[55%] overflow-hidden rounded-sm border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-105">
                      <Image
                        src={brand.image2}
                        alt={`${brand.name} feature 2`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: progressOpacity }}
          className="absolute bottom-0 left-0 z-50 h-1.5 w-full bg-white/20"
        >
          <motion.div
            style={{ scaleX: progressScale }}
            className="h-full w-full origin-left bg-white"
          />
        </motion.div>
      </div>
    </section>
  );
}
