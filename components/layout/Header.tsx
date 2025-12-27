'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import SearchModal from '@/components/ui/SearchModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Culture', href: '/category/culture' },
    { name: 'Food', href: '/category/food' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <span className="text-2xl md:text-3xl font-display font-bold text-primary-600">
                Sri Lanka
              </span>
              <span className="text-2xl md:text-3xl font-display font-bold ml-1 text-accent-600">
                Travel Hub
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-neutral-700 transition-colors hover:text-primary-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links & Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 transition-colors hover:text-primary-600"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 transition-colors hover:text-primary-600"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 transition-colors hover:text-primary-600"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 transition-colors hover:text-primary-600"
            >
              <FaYoutube size={18} />
            </a>

            <button
              className="text-neutral-700 transition-colors hover:text-primary-600"
              onClick={() => setIsSearchOpen(true)}
            >
              <FiSearch size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-neutral-700"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 bg-white rounded-lg shadow-lg mt-2 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-6 pt-4 border-t">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-primary-600"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-primary-600"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-primary-600"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-primary-600"
                >
                  <FaYoutube size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
