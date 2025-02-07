import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Name */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Toby Kaufman
          </Link>
        </div>

        {/* Navigation Links */}
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
            Market Watch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;