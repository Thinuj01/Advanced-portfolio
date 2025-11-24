"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full bg-gradient-to-r from-gray-400 to-gray-50 dark:from-black dark:to-red-900 shadow-md shadow-gray-350 dark:shadow-red-900 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl md:text-xl font-bold text-gray-800 dark:text-gray-100"
        >
          Thinuja Hettiarachchi
        </Link>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-red-700 transition-colors duration-200"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className="ml-4 hover:text-blue-500 dark:hover:text-red-700 cursor-pointer"
        >
          {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </button>

        <button
          className="md:hidden text-gray-700 dark:text-gray-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-red-700 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
