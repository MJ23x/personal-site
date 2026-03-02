import React, { useState } from "react";

const ProjectItem = ({ title, summary, details, techStack, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="mb-8 pl-6 border-l-2 border-zinc-400 hover:border-zinc-600 dark:border-zinc-700 dark:hover:border-white transition-colors cursor-pointer group -ml-[2px]"
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-lg text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
            {title}
          </h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 mb-2">
            {summary}
          </p>
        </div>

        <div
          className={`mt-1 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-400 group-hover:text-black dark:text-zinc-500 dark:group-hover:text-white"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
      >
        <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-4 border-t border-zinc-400 dark:border-zinc-800 pt-4">
          {details}
        </p>

        {links && (
          <div className="flex gap-4 text-xs font-medium text-blue-600 dark:text-blue-400 mb-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800 dark:hover:text-blue-300 hover:underline flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                {link.label}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            ))}
          </div>
        )}

        <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
          {techStack}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
