"use client";
import { useState } from "react";
import Image from "next/image";

export default function MainContent({ currentSection, packages }) {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = (command) => {
    navigator.clipboard.writeText(command);
    setCopySuccess("Copied!");
    setTimeout(() => setCopySuccess(""), 2000);
  };

  const renderGettingStarted = () => {
    return (
      <div className="space-y-8">
        <h1
          className="text-3xl font-semibold text-white"
          style={{ marginTop: "5rem" }}
        >
          DevJunkie UI Components
        </h1>
        <p className="text-gray-400 max-w-3xl">
          Every DevJunkie UI component available so far. DevJunkie UI aims to
          provide building blocks for developers to create great user interfaces
          using modern design guidelines as a reference, which we strive to
          follow where practical.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {packages.slice(0, 6).map((pkg) => (
            <div
              key={pkg.id}
              className=" rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div
                className="p-4 cursor-pointer"
                onClick={() => copyToClipboard(pkg.installCommand)}
              >
                <div className=" rounded p-3 flex items-center justify-center h-32 mb-4">
                  <div className="w-24 h-24 bg-gray-800 rounded flex items-center justify-center">
                    <div className="text-blue-400">
                      <svg
                        className="w-12 h-12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="text-white font-medium">{pkg.name}</div>
                <div className="text-gray-400 text-sm mt-1 h-12 overflow-hidden">
                  {pkg.description}
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center mr-3">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      {pkg.stars}
                    </span>
                    <span>{pkg.downloads}</span>
                  </div>
                  <div className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs">
                    {pkg.category}
                  </div>
                </div>
              </div>
              <button
                className="w-full bg-gray-900 py-2 text-gray-400 hover:text-white text-sm flex items-center justify-center border-t border-gray-700"
                onClick={() => copyToClipboard(pkg.installCommand)}
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
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
                {copySuccess &&
                pkg.installCommand === copySuccess.replace("Copied: ", "")
                  ? "Copied!"
                  : pkg.installCommand}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTestimonials = () => {
    const testimonials = [
      {
        id: 1,
        text: "DevJunkie UI has transformed our development workflow. The components are incredibly well-designed and customizable.",
        author: "Sarah L.",
        company: "Frontend Developer at TechCorp",
      },
      {
        id: 2,
        text: "We switched from a more complex UI library to DevJunkie UI and haven't looked back. Documentation is clear and the components just work.",
        author: "Michael R.",
        company: "CTO at Startup XYZ",
      },
      {
        id: 3,
        text: "The hooks package saved us countless hours of development time. Highly recommended for any React project.",
        author: "Jennifer K.",
        company: "Lead Developer at WebSolutions",
      },
    ];

    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-semibold text-white">Testimonials</h1>
        <p className="text-gray-400 max-w-3xl">
          See what developers are saying about DevJunkie UI components and
          packages.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
            >
              <div className="text-gray-300 mb-4">"{testimonial.text}"</div>
              <div>
                <div className="text-white font-medium">
                  {testimonial.author}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="/testimonials"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            View all testimonials
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    );
  };

  return (
    <main className="flex-1 p-8 overflow-y-auto ">
      {currentSection === "getting-started" && renderGettingStarted()}
      {currentSection === "testimonials" && renderTestimonials()}
    </main>
  );
}
