"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-black/30 transition-all duration-300 ${
        scrolled ? "backdrop-blur-lg shadow-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-extrabold">
          Dietitian Lufuno
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-base font-semibold">
          <Link href="/about" className="text-white hover:text-green-400">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-green-400">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:text-green-400">
            Contact
          </Link>
          <Link
            href="/contact"
            className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Slide-in Mobile Nav */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-[80vh] bg-black/80 transform transition-transform duration-300 ease-in-out z-40 ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <Link
            href="/"
            className="text-white text-2xl font-extrabold"
            onClick={() => setMobileOpen(false)}
          >
            Dietitian Lufuno
          </Link>
          <button
            className="text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close Menu"
          >
            <X size={30} />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center py-8 space-y-6 text-white">
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="text-xl font-semibold hover:text-green-400"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileOpen(false)}
            className="text-xl font-semibold hover:text-green-400"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="text-xl font-semibold hover:text-green-400"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition w-3/4 text-center"
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
