"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [showBg, setShowBg] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBg(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Brands", href: "/brand" },
    { label: "Contacs", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        showBg
          ? "text-white shadow-md backdrop-blur"
          : `${isMenuOpen ? "text-white backdrop-blur" : "bg-transparent text-white"}`
      } `}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold tracking-wide md:pt-2">
          <Image
            src={`${showBg ? "/logo2.svg" : "/logo2.svg"}`}
            width={205}
            height={45}
            alt={"Tuzemen Group Logo"}
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2 text-lg font-stretch-50% transition hover:opacity-75"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 focus:outline-none md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`h-0.5 w-6 transition ${
              showBg ? "bg-black" : "bg-white"
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 transition ${
              showBg ? "bg-black" : "bg-white"
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 transition ${
              showBg ? "bg-black" : "bg-white"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div
          className={`md:hidden ${
            showBg ? "text-black backdrop-blur" : "text-white backdrop-blur"
          } shadow-md`}
        >
          <nav className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:opacity-75"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
