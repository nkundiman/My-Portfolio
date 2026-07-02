"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Book", href: "#book" },
  { name: "Sponsorship", href: "#sponsorship" },
  { name: "Experience", href: "#experience" },
  { name: "Awards", href: "#awards" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-green-600"
        >
          Augustin
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-gray-700 transition hover:text-green-600 dark:text-gray-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 dark:text-white"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-700 transition hover:text-green-600 dark:text-gray-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}