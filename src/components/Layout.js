import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "../styles/global.css";

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-200 transition-colors duration-300">
      {/* NAVBAR CONTAINER */}
      <nav className="relative w-full max-w-7xl mx-auto py-8 px-[5%] z-50">
        {/* Mobile Layout  */}
        <div className="flex md:hidden justify-between items-center w-full">
          {/* Logo Left */}
          <Link to="/" className="font-bold text-xl tracking-tight">
            Mohamed Jama
          </Link>

          {/* Controls Right (Toggle + Hamburger) */}
          <div className="flex items-center gap-4">
            <button onClick={() => setIsDark(!isDark)} className="text-xl">
              {isDark ? "☀" : "☾"}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <div className="space-y-1.5">
                <span
                  className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Layout*/}
        <div className="hidden md:flex justify-center items-center relative w-full">
          {/* CENTER GROUP: Logo + Slash + Links */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="font-bold text-xl tracking-tight hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
            >
              Mohamed Jama
            </Link>

            <span className="text-zinc-400 dark:text-zinc-600 text-lg">//</span>

            <ul className="flex gap-6 list-none text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <li className="hover:text-black dark:hover:text-white transition-colors">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-black dark:hover:text-white transition-colors">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="hover:text-black dark:hover:text-white transition-colors">
                <Link to="/resume">Resume</Link>
              </li>
              <li className="hover:text-black dark:hover:text-white transition-colors">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* RIGHT ITEM: Toggle Button (Absolutely Positioned) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="cursor-pointer hover:text-blue-500 dark:hover:text-white text-xl transition-transform active:scale-95"
            >
              {isDark ? "☀" : "☾"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN (Matches previous logic) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-6 shadow-xl z-40">
            <ul className="flex flex-col gap-4 text-lg font-medium text-zinc-600 dark:text-zinc-400">
              <li>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" onClick={() => setIsMenuOpen(false)}>
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <main className="px-[5%] md:px-[10%] max-w-5xl mx-auto pb-20 w-full grow">
        {children}
      </main>
    </div>
  );
}
