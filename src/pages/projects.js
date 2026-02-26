import React from "react";
import Layout from "../components/Layout";
import ProjectItem from "../components/ProjectItem";

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-2xl mb-16">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6">
          Projects
        </h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
          A collection of my work in systems engineering, computer vision, and
          web development.
        </p>
      </div>

      <div>
        {/* COMPLETED PROJECTS */}
        <ProjectItem
          title="Brain Tumor Segmentation & Classification"
          summary="Hybrid deep learning pipeline utilizing a U-Net architecture and ResNet-50."
          details="Engineered a dual-stage architecture to process 3,064 MRI scans. The U-Net stage generates binary masks for tumor localization (achieving a 0.75 Dice Score), while the ResNet-50 stage classifies the tumor type (Meningioma, Glioma, Pituitary) with 96% accuracy."
          techStack="Python • PyTorch • OpenCV • ResNet-50"
          links={[{ label: "View IEEE Report", url: "/ieee.pdf" }]}
        />

        <ProjectItem
          title="6809 Emulator"
          summary="Cycle-accurate CPU emulation."
          details=""
          techStack="C++ • SDL3 • Assembly"
          links={[{ label: "Github", url: "#" }]}
        />

        <ProjectItem
          title="Personal website"
          summary="Built with Gatsby, deployed via GitOps workflow."
          details="A statically generated React site using Tailwind CSS v4. Implements a continuous deployment pipeline where git commits automatically trigger builds and deployments via Netlify/Vercel."
          techStack="React • Gatsby • CI/CD"
          links={[{ label: "GitHub Repo", url: "#" }]}
        />

        {/* COMING SOON SECTION */}
        <div className="mt-8 pt-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-6">
            // In the Lab (Coming Soon)
          </h3>

          <div className="opacity-70 hover:opacity-100 transition-opacity">
            <ProjectItem
              title="AetherScripts"
              summary="Offline-first clinical documentation engine."
              details="Runs Google's MedASR locally..."
              techStack="Rust (Tauri) • React • ONNX"
              links={[{ label: "Demo", url: "#" }]}
            />
          </div>

          <div className="opacity-70 hover:opacity-100 transition-opacity">
            <ProjectItem
              title="Virual Reality Game"
              summary="Term project in partial fullfilment of CPS643. Currently in the works."
              details="Working on Unity with C# to develop a game for the Meta Quest 2."
              techStack="Unity • C# • Meta SDK"
            />
          </div>
          
        </div>
      </div>
    </Layout>
  );
}
