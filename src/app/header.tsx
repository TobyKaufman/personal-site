import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Name */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-300 transition-colors">
            Toby Kaufman
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a
            href="/about"
            className="px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            About
          </a>
          <a
            href="/resume"
            className="px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            Resume
          </a>
          <a
            href="/marketwatch"
            className="px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-black transition-colors"
          >
            Market Watch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;