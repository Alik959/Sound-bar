"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Sound Bar
        </Link>
        <nav className="flex gap-6">
          <Link
            href="/artists"
            className="hover:text-pink-400 transition-colors"
          >
            Artists
          </Link>
          <Link
            href="/albums"
            className="hover:text-pink-400 transition-colors"
          >
            Albums
          </Link>
          <Link
            href="/search"
            className="hover:text-pink-400 transition-colors"
          >
            Search
          </Link>
          <Link href="/about" className="hover:text-pink-400 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
