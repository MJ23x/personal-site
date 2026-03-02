import React from "react";
import { Link } from "gatsby";
import ProjectItem from "./ProjectItem";

const Content = () => {
  return (
    <div>
      <section className="text-l max-w-auto mb-8 mt-6 leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          Hi there! My name is Mohamed. I'm a computer science student at
          Toronto Metropolitan University.
        </p>
        <p className="pt-4">
          I'm interested in AI systems and low-level engineering. I build
          platforms that bridge the gap between research and production.
        </p>
      </section>

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

      <div>
        <h2 className=" text-xl font-semibold mb-8 text-zinc-900 dark:text-white">
          Selected Projects
        </h2>

        <div>
          <ProjectItem
            title="Brain Tumor Segmentation & Classification"
            summary="Hybrid deep learning pipeline utilizing a U-Net architecture and ResNet-50."
            details="Engineered a dual-stage architecture to process 3,064 MRI scans. The U-Net stage generates binary masks for tumor localization (achieving a 0.75 Dice Score), while the ResNet-50 stage classifies the tumor type (Meningioma, Glioma, Pituitary) with 96% accuracy."
            techStack="Python • PyTorch • OpenCV • ResNet-50"
            links={[{ label: "Github", url: "https://github.com/MJ23x/CPS843-Term-Project-Deliverables" }, { label: "View IEEE Report", url: "/ieee.pdf" }]}
          />

          <ProjectItem
            title="Motorolla 6809 Emulator"
            summary="Cycle-accurate CPU emulation."
            details="This is the microprosser that was used to teach me in the Computer Organization II course at TMU (CPS310) so I thought I'd build it myself"
            techStack="C++ • SDL3 • Assembly"
            links={[{ label: "Github Repo", url: "https://github.com/MJ23x/m6809-emulator" }]}
          />

          <ProjectItem
            title="Personal website"
            summary="Built with Gatsby and deployed on Netlify"
            details="A statically generated React site using Tailwind CSS v4. Implements a continuous deployment pipeline where git commits automatically trigger builds and deployments via Netlify/Vercel."
            techStack="React • Gatsby • CI/CD"
            links={[{ label: "GitHub Repo", url: "https://github.com/MJ23x/personal-site" }]}
          />

          <div className="mt-12 pl-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-zinc-900 dark:text-white font-semibold border-b-2 border-transparent hover:border-blue-500 transition-colors"
            >
              See more of my projects
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
