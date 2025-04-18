"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState({
    gettingStarted: true,
    components: true,
  });

  const toggleSection = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="w-64  h-screen overflow-y-auto flex-shrink-0 border-r border-gray-800">
      <div className="px-4 py-3" style={{ marginTop: "5rem" }}>
        <div className="flex items-center mb-6">
          <div className="text-blue-400 mr-2">
            {/* <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
          </div>
          {/* <h1 className="text-blue-400 font-medium text-lg">DevJunkie UI</h1> */}
        </div>

        <div className="space-y-1">
          <div
            className="flex items-center justify-between py-2 px-3 text-gray-300 hover:bg-gray-800 rounded cursor-pointer"
            onClick={() => toggleSection("gettingStarted")}
          >
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Getting started
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${
                expanded.gettingStarted ? "transform rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>

          {expanded.gettingStarted && (
            <Link
              href="/docs"
              className="block py-2 px-8 text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded"
            >
              Documentation
            </Link>
          )}

          <div
            className="flex items-center justify-between py-2 px-3 text-gray-300 hover:bg-gray-800 rounded cursor-pointer"
            onClick={() => toggleSection("components")}
          >
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              Components
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${
                expanded.components ? "transform rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>

          {expanded.components && (
            <div className="space-y-1">
              <Link
                href="/components/ui"
                className="block py-2 px-8 text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded"
              >
                UI Components
              </Link>
              <Link
                href="/ui/buttons"
                className="block py-2 px-8 text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded"
              >
                Buttons
              </Link>
              <Link
                href="/components/forms"
                className="block py-2 px-8 text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded"
              >
                Forms
              </Link>
            </div>
          )}

          <Link
            href="/testimonials"
            className="flex items-center py-2 px-3 text-gray-300 hover:bg-gray-800 rounded"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
            Testimonials
          </Link>
        </div>
      </div>
    </aside>
  );
}
