import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-black text-white p-4 shadow-lg border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Toby Kaufman
          </Link>
        </div>

        <nav className="space-x-6">
          <Link
            href="/about"
            className="px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            About
          </Link>
          <Link
            href="/resume"
            className="px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            Resume
          </Link>
          <Link
            href="/marketwatch"
            className="px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            DaD Market Watch (WIP)
          </Link>
        </nav>
      </div>
    </header>
  );
};