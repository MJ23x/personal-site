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

      {/* THE SPLIT LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT COLUMN: Text */}
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
            <strong> performance</strong>. I;m currently working on a project
            that involves building offline-first applications that bring
            powerful AI models to consumer hardware without compromising user
            data.
          </p>
          <p>
            When I'm not debugging C++ or training models, you can find me
            experimenting with VR development in Unity or building custom PCs.
          </p>
        </div>

        {/* RIGHT COLUMN: Image */}
        <div className="relative group">
          {/* The decorative border box behind the image */}
          <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 rounded-lg transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          <img
            src="/profile_photo.png"
            alt="Mohamed Jama"
            className="rounded-lg w-full h-auto object-cover grayscale shadow-xl"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        {/* Links to socials */}
        <div className="pt-6 flex gap-6">
          <a
            href="https://github.com/yourusername"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:m5jama@torontomu.ca"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Email ↗
          </a>
        </div>
      </div>
    </Layout>
  );
}
