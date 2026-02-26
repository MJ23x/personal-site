import React from "react";
import { Link } from "gatsby";
import ProjectItem from "./ProjectItem";

const Content = () => {
  return (
    <div>
      <section className="text-l max-w-auto mb-16 mt-6 leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          Hi there! My name is Mohamed. I'm a computer science student at
          Toronto Metropolitan University.
        </p>
        <p className="pt-4">
          I'm interested in AI systems and low-level engineering. I build
          platforms that bridge the gap between research and production.
        </p>
      </section>

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
            links={[{ label: "View IEEE Report", url: "/ieee.pdf" }]}
          />

          <ProjectItem
            title="Chip-8 Emulator"
            summary="Low-level system emulator built in Rust."
            details="Implemented a full fetch-decode-execute cycle with memory management, stack operations, and display rendering. Currently refactoring to support a cycle-accurate 6502 variant in C++ to run NES games."
            techStack="Rust • Systems • WebAssembly"
            links={[{ label: "GitHub Repo", url: "#" }]}
          />

          <ProjectItem
            title="Personal website"
            summary="Built with Gatsby, deployed via GitOps workflow."
            details="A statically generated React site using Tailwind CSS v4. Implements a continuous deployment pipeline where git commits automatically trigger builds and deployments via Netlify/Vercel."
            techStack="React • Gatsby • CI/CD"
            links={[{ label: "GitHub Repo", url: "#" }]}
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
