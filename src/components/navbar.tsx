"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#" }, 
  { name: "About", href: "#about-us" },
  { name: "Brands", href: "#our-brands" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isTriggerVisible, setIsTriggerVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const menuRef = useRef<HTMLDivElement>(null)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsTriggerVisible(true)
    } else {
      setIsTriggerVisible(false)
      if (isMenuOpen) setIsMenuOpen(false)
    }
  })

  // Close the menu if the user clicks outside of the component
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={menuRef} className="fixed right-6 top-6 z-50 md:right-10 md:top-10">
      
      {/* Scroll-triggered Menu Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isTriggerVisible ? 1 : 0,
          y: isTriggerVisible ? 0 : -20,
          pointerEvents: isTriggerVisible ? "auto" : "none"
        }}
        transition={{ duration: 0.4 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex h-12 w-12 items-center justify-between border border-foreground/20 bg-background/70 px-1 backdrop-blur-md transition-colors hover:bg-foreground hover:text-background"
      >
       
        {isMenuOpen ? <X className="ml-2.5 h-4 w-4" /> : <Menu className="ml-2.5 h-4 w-4" />}
      </motion.button>

      {/* Compact Dropdown Panel */}
      <AnimatePresence>
        {isMenuOpen && isTriggerVisible && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 w-48 border border-foreground/10 bg-background/80 shadow-2xl backdrop-blur-xl"
          >
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-4 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground/5 hover:text-muted-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  )
}