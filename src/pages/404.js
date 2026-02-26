import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        {/* Glitch effect */}
        <h1 className="text-9xl font-black text-zinc-200 dark:text-zinc-800 mb-4 select-none">
          404
        </h1>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
          Page Not Found
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-8 leading-relaxed">
          It looks like this page has been moved, deleted, or never existed.
          Maybe it's a broken link, or maybe you're just exploring the void.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            Return Home
          </Link>

          <Link
            to="/projects"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium"
          >
            View Projects
          </Link>
        </div>
      </div>
    </Layout>
  );
}
