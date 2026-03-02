import React from "react";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">
          About Me
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left coloumn for text */}
        <div className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 space-y-6">
          <p>
            Hello! I'm Mohamed, a Computer Science student at Toronto
            Metropolitan University. I have a deep curiosity for how things work
            under the hood, which drives my interest in
            <strong> low-level systems</strong>, <strong> emulation</strong>,
            and <strong> AI infrastructure</strong>.
          </p>
          <p>
            Currently, I'm focused on the intersection of
            <strong> privacy</strong> and
            <strong> performance</strong>. I'm currently working on a project
            that involves building offline-first applications that bring
            powerful AI models to consumer hardware without compromising user
            data.
          </p>
          <div className="flex flex-wrap gap-6 mb-16 text-sm font-medium">
            <a
              href="https://github.com/MJ23x"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
            >
              GitHub
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
            >
              LinkedIn
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Picture of me */}
        <div className="relative group">
          <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 rounded-lg transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          <img
            src="/profile_photo.png"
            alt="Mohamed Jama"
            className="rounded-lg w-full h-auto object-cover grayscale shadow-xl"
          />
        </div>
      </div>
    </Layout>
  );
}
