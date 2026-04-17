"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const brands = [
  {
    id: "brand-one",
    name: "Brand One",
    description: "Premium cotton and natural fibers for everyday wear.",
    image1: "https://cdn.tuzemengroup.com/uploads/winbrella_sosyal_yeni_1_126_87d70ea499.JPG?w=1920&q=75",
    image2: "https://cdn.tuzemengroup.com/uploads/DSC_3212_5796bdce25.jpg?w=1920&q=75",
  },
  {
    id: "brand-two",
    name: "Brand Two",
    description: "Performance synthetic blends for active and outdoor use.",
    image1: "https://cdn.tuzemengroup.com/uploads/DBBC_9725_Kopya_26268c3a4c.JPG?w=1920&q=75",
    image2: "https://cdn.tuzemengroup.com/uploads/DSC_3037_9456a8533d.jpg?w=1920&q=75",
  },
  {
    id: "brand-three",
    name: "Brand Three",
    description: "Luxury silks and delicate fabrics for formal attire.",
    image1: "https://cdn.tuzemengroup.com/uploads/DSC_3212_5796bdce25.jpg?w=1920&q=75",
    image2: "https://cdn.tuzemengroup.com/uploads/winbrella_sosyal_yeni_1_126_87d70ea499.JPG?w=1920&q=75",
  },
  {
    id: "brand-four",
    name: "Brand Four",
    description: "Durable and sustainable textiles for home goods.",
    image1: "https://cdn.tuzemengroup.com/uploads/DSC_3037_9456a8533d.jpg?w=1920&q=75",
    image2: "https://cdn.tuzemengroup.com/uploads/DBBC_9725_Kopya_26268c3a4c.JPG?w=1920&q=75",
  },
];

export function OurBrands() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [
      "#3e4a36", // Natural earthy green
      "#1e3a5f", // Dynamic steel blue
      "#4a1525", // Fancy rich burgundy
      "#5c4a3d", // Cozy warm taupe
    ] 
  );

  return (
    <section ref={targetRef} id="our-brands" className="relative h-[400vh]">
      <motion.div 
        style={{ backgroundColor }}
        className="sticky top-0 flex h-screen items-center overflow-hidden"
      >
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 h-3 bg-linear-to-b from-background/95 to-background/0"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-3 bg-linear-to-t from-background/95 to-background/0"></div>

        <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-br from-black/10 to-black/60"></div>

        <motion.div style={{ x }} className="relative z-10 flex h-full w-[400vw]">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex h-full w-screen shrink-0 items-center justify-center px-6 md:px-16 lg:px-24"
            >
              <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
                
                <div className="flex flex-col justify-center text-left">
                  <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
                    {brand.name}
                  </h2>
                  <p className="text-lg leading-relaxed text-white/80 md:text-2xl">
                    {brand.description}
                  </p>
                </div>

                <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
                  <div className="absolute top-0 left-0 z-10 h-[65%] w-[65%] overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:z-30 hover:scale-105">
                    <Image
                      src={brand.image1}
                      alt={`${brand.name} product 1`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  <div className="absolute right-0 bottom-0 z-20 h-[65%] w-[65%] overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:z-30 hover:scale-105">
                    <Image
                      src={brand.image2}
                      alt={`${brand.name} product 2`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}