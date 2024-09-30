"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-800 text-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center"></div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/experience"
                className="hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Experience
              </Link>
              <Link
                href="/projects"
                className="hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                About Me
              </Link>
              <Link
                target="_blank"
                href="/docs/resume.pdf"
                className="hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                CV
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4 ">
            <Link target="_blank" href="mailto:almaguero95@gmail.com">
              <Button className="hidden bg-cyan-700 shadow-md hover:shadow-lg hover:bg-cyan-800 text-white text-md md:block hover:bg-cyan-900 transition-all duration-300">
                Hire Me
              </Button>
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
          >
            <span className="sr-only">Open menu</span>
            {/* Hamburger Icon */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-Screen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-800 bg-opacity-90 flex flex-col items-center justify-center z-40">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            href="/"
            className="text-white text-3xl py-4"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/experience"
            className="text-white text-3xl py-4"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="text-white text-3xl py-4"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-white text-3xl py-4"
            onClick={toggleMenu}
          >
            About Me
          </Link>
          <Link
            target="_blank"
            href="/docs/resume.pdf"
            className="text-white text-3xl py-4"
            onClick={toggleMenu}
          >
            CV
          </Link>
          <Link
            target="_blank"
            href="mailto:almaguero95@gmail.com"
            className="text-white text-3xl py-4"
            onClick={toggleMenu}
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}
