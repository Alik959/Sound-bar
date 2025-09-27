"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-md">
      <motion.div
        initial={{ background: "#ffffff", color: "#000000" }}
        animate={{
          background: isScrolled
            ? "linear-gradient(to right, #111827, #1f2937, #000000)"
            : "#ffffff",
          color: isScrolled ? "#ffffff" : "#000000",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide transition-all duration-300 hover:text-shadow-[0_0_16px_rgba(0,255,150,0.5),0_0_32px_rgba(0,255,120,0.3)]"
          >
            Sound Bar
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/artists"
              className="hover:text-pink-400 transition-all duration-300 hover:text-shadow-[0_0_16px_rgba(0,255,150,0.5),0_0_32px_rgba(0,255,120,0.3)]"
            >
              Artists
            </Link>
            <Link
              href="/albums"
              className="hover:text-pink-400 transition-all duration-300 hover:text-shadow-[0_0_16px_rgba(0,255,150,0.5),0_0_32px_rgba(0,255,120,0.3)]"
            >
              Albums
            </Link>
            <Link
              href="/genres"
              className="hover:text-pink-400 transition-all duration-300 hover:text-shadow-[0_0_16px_rgba(0,255,150,0.5),0_0_32px_rgba(0,255,120,0.3)]"
            >
              Genres
            </Link>
            <Link
              href="/about"
              className="hover:text-pink-400 transition-all duration-300 hover:text-shadow-[0_0_16px_rgba(0,255,150,0.5),0_0_32px_rgba(0,255,120,0.3)]"
            >
              About
            </Link>
          </nav>
        </div>
      </motion.div>
    </header>
  );
}
