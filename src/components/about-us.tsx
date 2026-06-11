"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("AboutUs");

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
                {t("title")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("paragraph1")}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("paragraph2")}
              </p>
            </div>

            <div className="border-border grid grid-cols-2 gap-8 border-t pt-10">
              <div>
                <AnimatedCounter to={160} suffix="+" />
                <p className="text-muted-foreground mt-2 text-sm tracking-widest uppercase">
                  {t("exclusiveDesigns")}
                </p>
              </div>
              <div>
                <AnimatedCounter to={3000} suffix="+" />
                <p className="text-muted-foreground mt-2 text-sm tracking-widest uppercase">
                  {t("satisfiedCustomers")}
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
                alt={t("imageAlt")}
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
