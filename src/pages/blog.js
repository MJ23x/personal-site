import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

export default function Blog() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="text-6xl mb-6 animate-pulse">🚧</div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
          Under Construction
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-8">
          I'm currently writing about my experience building{" "}
          <strong>AetherScripts</strong> and the{" "}
          <strong>Chip-8 Emulator</strong>. Check back soon!
        </p>
        <Link
          to="/"
          className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm font-medium"
        >
          ← Return Home
        </Link>
      </div>
    </Layout>
  );
}
