"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBg(window.scrollY > window.innerHeight - 80); // reveal after hero
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Collections", href: "#collections" },
    { label: "Craft", href: "#craft" },
    { label: "Contact", href: "#samples" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        showBg ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-wide">
          Tuzemen Textile
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:opacity-75"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#samples"
            className={`rounded-full px-4 py-2 ${
              showBg
                ? "bg-green-800 text-white hover:bg-green-700"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Request Samples
          </a>
        </nav>

        {/* Hamburger for mobile */}
        <button
          className="flex flex-col gap-1.5 focus:outline-none md:hidden"
          onClick={() => setShowBg(true)} // ensures menu text is visible
        >
          <span
            className={`h-0.5 w-6 ${showBg ? "bg-black" : "bg-white"}`}
          ></span>
          <span
            className={`h-0.5 w-6 ${showBg ? "bg-black" : "bg-white"}`}
          ></span>
          <span
            className={`h-0.5 w-6 ${showBg ? "bg-black" : "bg-white"}`}
          ></span>
        </button>
      </div>
    </header>
  );
}
