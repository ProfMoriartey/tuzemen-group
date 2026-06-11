"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "~/i18n/navigation";
import { routing } from "~/i18n/routing";

const navLinkKeys = [
  { key: "home", href: "#" },
  { key: "about", href: "#about-us" },
  { key: "brands", href: "#our-brands" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const [isTriggerVisible, setIsTriggerVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const menuRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsTriggerVisible(true);
    } else {
      setIsTriggerVisible(false);
      if (isMenuOpen) setIsMenuOpen(false);
    }
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="fixed right-6 top-6 z-50 md:right-10 md:top-10">
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isTriggerVisible ? 1 : 0,
          y: isTriggerVisible ? 0 : -20,
          pointerEvents: isTriggerVisible ? "auto" : "none",
        }}
        transition={{ duration: 0.4 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="border-foreground/20 bg-background/70 hover:bg-foreground hover:text-background flex h-12 w-12 items-center justify-between border px-1 backdrop-blur-md transition-colors"
      >
        {isMenuOpen ? <X className="ml-2.5 h-4 w-4" /> : <Menu className="ml-2.5 h-4 w-4" />}
      </motion.button>

      <AnimatePresence>
        {isMenuOpen && isTriggerVisible && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-foreground/10 bg-background/80 absolute right-0 top-full mt-2 w-48 border shadow-2xl backdrop-blur-xl"
          >
            <ul className="flex flex-col py-2">
              {navLinkKeys.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground hover:bg-foreground/5 hover:text-muted-foreground block px-6 py-4 text-xs font-semibold uppercase tracking-widest transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-foreground/10 flex gap-1 border-t px-4 py-3">
              {routing.locales.map((loc) => (
                <Link
                  key={loc}
                  href={pathname}
                  locale={loc}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-2 py-1 text-xs font-semibold uppercase tracking-widest transition-colors ${
                    locale === loc
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {loc === "en" ? t("switchToEn") : t("switchToTr")}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
