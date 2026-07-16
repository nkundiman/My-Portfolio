"use client";

import { useState } from "react";
import Link from "next/link";
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

        {/* Desktop Navigation */}
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

          {/* Admin Login Button */}
          <Link
            href="/login"
            className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-700"
          >
            Admin
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <DarkModeToggle />

          {/* Mobile Menu Button */}
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
          <div className="flex flex-col gap-5 px-6 py-6">

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

            {/* Admin Login */}
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-green-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Admin Login
            </Link>

          </div>
        </nav>
      )}
    </header>
  );
}