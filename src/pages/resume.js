import React from "react";
import Layout from "../components/Layout";

export default function Resume() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Resume
          </h1>

          {/* Download Button (Always visible) */}
          <a
            href="/draft_resume.pdf"
            download
            className="px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium rounded-md hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download PDF
          </a>
        </div>

        {/* THE EMBED (Hidden on Mobile 'hidden md:block') */}
        <div className="hidden md:block w-full h-[800px] border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-zinc-100">
          <iframe
            src="/draft_resume.pdf"
            className="w-full h-full"
            title="Resume PDF"
          />
        </div>

        {/* THE MOBILE FALLBACK (Visible only on Mobile 'md:hidden') */}
        <div className="md:hidden text-center py-20 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg">
          <p className="text-zinc-500 dark:text-zinc-400 mb-4">
            PDF previews are optimized for desktop.
          </p>
          <a
            href="/draft_resume.pdf"
            className="text-blue-600 dark:text-blue-400 font-semibold underline"
          >
            Click here to view file
          </a>
        </div>
      </div>
    </Layout>
  );
}
