"use client";

import { useState } from "react";
import {
  GradientButton,
  OutlinedButton,
  NeonButton,
  // PillButton,
  GlassButton,
  ThreeDButton,
  // ToggleButton,
  ArrowButton,
  PulseButton,
  MinimalButton,
  FloatingActionButton,
  SplashButton,
  UnderlineRevealButton,
  BorderSlideButton,
  SpotlightButton,
  ScaleIconButton,
  SlideFillButton,
} from "devjunkie";

export default function ButtonsShowcase() {
  const [activeButton, setActiveButton] = useState(null);
  const [copiedImport, setCopiedImport] = useState(false);
  const [copiedUsage, setCopiedUsage] = useState(false);
  const [copiedInstall, setCopiedInstall] = useState(false);

  const buttons = [
    { name: "GradientButton", component: GradientButton },
    { name: "OutlinedButton", component: OutlinedButton },
    { name: "NeonButton", component: NeonButton },
    // { name: "PillButton", component: PillButton },
    { name: "GlassButton", component: GlassButton },
    { name: "ThreeDButton", component: ThreeDButton },
    // { name: "ToggleButton", component: ToggleButton },
    { name: "ArrowButton", component: ArrowButton },
    { name: "PulseButton", component: PulseButton },
    { name: "MinimalButton", component: MinimalButton },
    // { name: "FloatingActionButton", component: FloatingActionButton },
    { name: "SplashButton", component: SplashButton },
    // { name: "UnderlineRevealButton", component: UnderlineRevealButton },
    // { name: "BorderSlideButton", component: BorderSlideButton },
    // { name: "SpotlightButton", component: SpotlightButton },
    // { name: "ScaleIconButton", component: ScaleIconButton },
    // { name: "SlideFillButton", component: SlideFillButton },
  ];

  const copyImportToClipboard = (buttonName) => {
    const textToCopy = `import { ${buttonName} } from "devjunkie";`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedImport(true);
    setTimeout(() => setCopiedImport(false), 2000);
  };

  const copyUsageToClipboard = (buttonName) => {
    const textToCopy = `<${buttonName}>DevJunkie</${buttonName}>`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedUsage(true);
    setTimeout(() => setCopiedUsage(false), 2000);
  };

  const copyInstallToClipboard = () => {
    navigator.clipboard.writeText("npm install devjunkie");
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  // Modal for button details
  const renderModal = () => {
    if (!activeButton) return null;

    const ButtonComponent = buttons.find(
      (b) => b.name === activeButton
    )?.component;
    if (!ButtonComponent) return null;

    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-950 rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl border border-blue-500/30 animate-fadeIn">
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">{activeButton}</h2>
            <div className="flex gap-6 items-center">
              <div className="flex justify-center">
                <ButtonComponent>DevJunkie</ButtonComponent>
              </div>
              <button
                onClick={() => setActiveButton(null)}
                className="bg-gray-800 hover:bg-gray-700 transition-colors text-white rounded-full p-2"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6">
            {/* Import Code Block */}
            <div className="relative">
              <div className="absolute -top-3 left-4 px-3 py-1 bg-blue-600 rounded text-xs font-bold uppercase">
                IMPORT
              </div>
              <div className="bg-gray-900 p-5 rounded-lg border border-blue-500/20">
                <code className="text-green-400 font-mono">
                  import &#123; {activeButton} &#125; from "devjunkie";
                </code>
                <button
                  onClick={() => copyImportToClipboard(activeButton)}
                  className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
                >
                  {copiedImport ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Usage Code Block */}
            <div className="relative">
              <div className="absolute -top-3 left-4 px-3 py-1 bg-purple-600 rounded text-xs font-bold uppercase">
                USAGE
              </div>
              <div className="bg-gray-900 p-5 rounded-lg border border-purple-500/20">
                <code className="text-blue-400 font-mono">
                  {`<${activeButton}>DevJunkie</${activeButton}>`}
                </code>
                <button
                  onClick={() => copyUsageToClipboard(activeButton)}
                  className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
                >
                  {copiedUsage ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Properties (Optional) */}
            <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-500/20">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">
                Properties
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-900 px-3 py-2 rounded">
                  <code className="text-yellow-400 font-mono">onClick</code>
                </div>
                <div className="bg-gray-900 px-3 py-2 rounded">
                  <code className="text-yellow-400 font-mono">className</code>
                </div>
                <div className="bg-gray-900 px-3 py-2 rounded">
                  <code className="text-yellow-400 font-mono">disabled</code>
                </div>
                <div className="bg-gray-900 px-3 py-2 rounded">
                  <code className="text-yellow-400 font-mono">children</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" min-h-screen text-white pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <h1
            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            style={{ marginTop: "3.5rem" }}
          >
            DevJunkie UI Buttons
          </h1>
        </div>

        <p className="text-gray-400 mb-10 text-center max-w-2xl mx-auto">
          Explore our collection of professionally designed React buttons. Click
          on any button to view details and copy code snippets.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {buttons.map((button) => (
            <div
              key={button.name}
              className="transition-all duration-300 hover:transform hover:scale-105 cursor-pointer rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
              onClick={() => setActiveButton(button.name)}
            >
              <div className="bg-gray-900/50 h-24 flex items-center justify-center">
                <button.component>DevJunkie</button.component>
              </div>
              <div className="bg-gray-900 py-3 px-4 text-center border-t border-gray-800">
                <p className="text-sm font-medium text-gray-300">
                  {button.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Button Details */}
        {renderModal()}

        <div className="mt-16 border-t border-gray-800 pt-8">
          <h2 className="text-2xl font-bold mb-6 text-yellow-400">
            Getting Started
          </h2>

          <div className="relative">
            <div className="absolute -top-3 left-4 px-3 py-1 bg-yellow-600 rounded text-xs font-bold uppercase">
              INSTALL
            </div>
            <div className="bg-gray-900 p-5 rounded-lg border border-yellow-500/30 mb-8">
              <code className="text-yellow-400 font-mono">
                npm install devjunkie
              </code>
              <button
                onClick={copyInstallToClipboard}
                className="absolute top-4 right-4 bg-yellow-600 hover:bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
              >
                {copiedInstall ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="bg-blue-900/10 p-6 rounded-lg border border-blue-500/10">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Usage Tips</h3>
            <p className="text-gray-300 mb-3">
              After installation, import any button component directly from the
              package and use it in your React or Next.js application.
            </p>
            <p className="text-gray-300">
              All buttons accept standard button props including{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-blue-300">
                onClick
              </code>
              ,{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-blue-300">
                className
              </code>
              , and{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-blue-300">
                disabled
              </code>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
