"use client"
import Image from 'next/image';
import { FaSearch, FaHeart, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle Mobile Menu
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white border-b border-gray-300 px-4 md:px-8 py-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <Image
            src="/images/go.jpg"
            alt="Nike Logo"
            className="h-24 cursor-pointer"
            width={120}
            height={120}
          />
        </div>

        {/* Skip to main content */}
        <div className="hidden sm:block flex-1 text-center">
          <a
            href="#main-content"
            className="text-xs md:text-sm text-black hover:text-gray-800 focus:text-gray-800"
          >
            Skip to main content
          </a>
        </div>

        {/* Right Section - Links */}
        <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-black">
        <a
            href="/hero"
            className="hover:text-gray-800 focus:text-gray-800 transition"
          >
            Home |
          </a>
          <a
            href="#"
            className="hover:text-gray-800 focus:text-gray-800 transition"
          >
            Find a Store
          </a>
          <span className="hidden sm:block">|</span>
          <a
            href="/help"
            className="hover:text-gray-800 focus:text-gray-800 transition"
          >
            Help
          </a>
          <span className="hidden sm:block">|</span>
          <a
            href="/joinUs"
            className="hover:text-gray-800 focus:text-gray-800 transition"
          >
            Join Us
          </a>
          <span className="hidden sm:block">|</span>
          <a
            href="/signIn"
            className="hover:text-gray-800 focus:text-gray-800 transition"
          >
            Sign In
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto flex items-center justify-between mt-4">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <Image
            src="/images/nikelogo.jpeg"
            alt="Nike Logo"
            className="h-12 cursor-pointer"
            width={48}
            height={48}
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-lg font-semibold hover:text-gray-600">
            New & Featured
          </a>
          <a href="#" className="text-lg font-semibold hover:text-gray-600">
            Men
          </a>
          <a href="#" className="text-lg font-semibold hover:text-gray-600">
            Women
          </a>
          <a href="#" className="text-lg font-semibold hover:text-gray-600">
            Kids
          </a>
          <a href="#" className="text-lg font-semibold hover:text-gray-600">
            Sale
          </a>
          <a href="#" className="text-lg font-semibold hover:text-gray-600">
            SNKRS
          </a>
        </nav>

        {/* Right Section - Search, Heart, and Shopping Bag Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Input */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Heart Icon */}
          <FaHeart className="text-gray-700 hover:text-gray-900 cursor-pointer text-xl" />

          {/* Shopping Bag Icon */}
          <FaShoppingBag className="text-gray-700 hover:text-gray-900 cursor-pointer text-xl" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between mt-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/nikelogo.jpeg"
            alt="Nike Logo"
            className="h-10"
            width={40}
            height={40}
          />
        </div>

        {/* Hamburger Icon */}
        <div className="relative">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-gray-900 cursor-pointer text-xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Links (Dropdown/Toggle logic) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4">
          <a href="/Hero" className="text-lg font-semibold hover:text-gray-600">
            New & Featured
          </a>
          <a href="/Allproduct" className="text-lg font-semibold hover:text-gray-600">
            Men
          </a>
          <a href="#" className="text-lg font-semibold hover:text-gray-600">
            Women
          </a>
          <a href="#" className="text-lg font-semibold hover:text-gray-600">
            Kids
          </a>
          <a href="#" className="text-lg font-semibold hover:text-gray-600">
            Sale
          </a>
          <a href="#" className="text-lg font-semibold hover:text-gray-600">
            SNKRS
          </a>
        </div>
      )}
    </header>
  );
}
