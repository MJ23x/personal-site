import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import "../styles/global.css";

export default function Layout({ children }) {
  // LocalStorage is checked first to determine theme
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light") return false;
    }
    return true;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // LocalStorage is modified everytime the user switches modes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);


  const ThemeToggle = () => (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 cursor-pointer text-zinc-500 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-white transition-all active:scale-95"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f4f1ea] text-zinc-900 dark:bg-zinc-950 dark:text-zinc-200 transition-colors duration-300">

      <nav className="relative w-full max-w-7xl mx-auto py-8 px-6 md:px-12 z-50">

        {/* MOBILE HEADER */}
        <div className="flex md:hidden justify-between items-center w-full">
          <Link to="/" className="font-bold text-xl tracking-tight">
            Mohamed Jama
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 focus:outline-none">
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center relative w-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="font-bold text-xl tracking-tight hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
              Mohamed Jama
            </Link>

            <span className="text-zinc-400 dark:text-zinc-600 text-lg">//</span>

            <ul className="flex gap-6 list-none text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <li className="hover:text-black dark:hover:text-white transition-colors"><Link to="/">Home</Link></li>
              <li className="hover:text-black dark:hover:text-white transition-colors"><Link to="/about">About</Link></li>
              <li className="hover:text-black dark:hover:text-white transition-colors"><Link to="/projects">Projects</Link></li>
              <li className="hover:text-black dark:hover:text-white transition-colors"><Link to="/resume">Resume</Link></li>
              <li className="hover:text-black dark:hover:text-white transition-colors"><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#f4f1ea] dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-6 shadow-xl z-40">
            <ul className="flex flex-col gap-4 text-lg font-medium text-zinc-600 dark:text-zinc-400">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
              <li><Link to="/resume" onClick={() => setIsMenuOpen(false)}>Resume</Link></li>
              <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            </ul>
          </div>
        )}
      </nav>

      <main className="px-6 md:px-12 max-w-5xl mx-auto pb-20 w-full flex-grow">
        {children}
      </main>
    </div>
  );
}