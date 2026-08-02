'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <Image
              src="/logo.png"
              alt={BUSINESS_INFO.name}
              width={60}
              height={60}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center text-gray-700">
            <Link href="/" className="hover:text-green-600 transition font-medium">Home</Link>
            <Link href="/catalog" className="hover:text-green-600 transition font-medium">Catalog</Link>
            <Link href="/about" className="hover:text-green-600 transition font-medium">About</Link>
            <Link href="/contact" className="hover:text-green-600 transition font-medium">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1 cursor-pointer"
          >
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 text-gray-700">
            <Link href="/" className="hover:text-green-600 transition font-medium">Home</Link>
            <Link href="/catalog" className="hover:text-green-600 transition font-medium">Catalog</Link>
            <Link href="/about" className="hover:text-green-600 transition font-medium">About</Link>
            <Link href="/contact" className="hover:text-green-600 transition font-medium">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
