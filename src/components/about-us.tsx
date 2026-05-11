"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";

function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (value) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, suffix]);

  return (
    <p ref={ref} className="text-foreground text-4xl font-light">
      0{suffix}
    </p>
  );
}

export function AboutUs() {
  return (
    <section id="about-us" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-foreground text-3xl font-light tracking-widest uppercase md:text-4xl">
                About Tüzemen Group
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We produce high-quality fabrics for the global market. Our
                manufacturing process blends traditional craftsmanship with
                modern technology.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We manage a catalog of over 160 distinct designs. Our team
                ensures every yard of fabric meets strict quality standards
                before it reaches your business.
              </p>
            </div>

            <div className="border-border grid grid-cols-2 gap-8 border-t pt-10">
              <div>
                <AnimatedCounter to={160} suffix="+" />
                <p className="text-muted-foreground mt-2 text-sm tracking-widest uppercase">
                  Exclusive Designs
                </p>
              </div>
              <div>
                <AnimatedCounter to={3000} suffix="+" />
                <p className="text-muted-foreground mt-2 text-sm tracking-widest uppercase">
                  Satisfied Customers
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="bg-muted relative aspect-4/5 overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="https://cdn.tuzemengroup.com/uploads/DSC_3212_5796bdce25.jpg?w=1920&q=75"
                alt="Tüzemen Group Manufacturing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
