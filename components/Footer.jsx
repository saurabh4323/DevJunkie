"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Newsletter Subscription */}
        <motion.div
          className="mb-12 p-6 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-0 md:flex-1">
              <h3 className="text-xl font-bold text-white">
                Join our developer community
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Get weekly updates on new components, tutorials, and developer
                resources
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:ml-8">
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="mt-2 sm:mt-0 px-4 py-2 rounded-r-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Links */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand and Description */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                DevJunkie
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-400 max-w-md">
              Empowering the next generation of web developers with cutting-edge
              tools, components, and resources for modern web development.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-gray-100 transition-colors duration-200"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://discord.com"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
              >
                <span className="sr-only">Discord</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-200">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/tutorials"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Components */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-200">
              Components
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/components/ui"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  UI Components
                </Link>
              </li>
              <li>
                <Link
                  href="/components/layout"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Layout Components
                </Link>
              </li>
              <li>
                <Link
                  href="/components/forms"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Form Components
                </Link>
              </li>
              <li>
                <Link
                  href="/components/data-display"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Data Display
                </Link>
              </li>
              <li>
                <Link
                  href="/components/navigation"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Navigation
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Packages */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-200">
              Packages
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/packages/shadcn-ui"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  shadcn/ui
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/tailwind"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Tailwind CSS
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/framer-motion"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Framer Motion
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/state-management"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  State Management
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/api"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  API Clients
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Community */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-200">
              Community
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/forum"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Forum
                </Link>
              </li>
              <li>
                <Link
                  href="/showcase"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contributors"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Contributors
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Sponsors
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Links */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
            {/* Secondary Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/about"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Cookie Policy
              </Link>
              <Link
                href="/accessibility"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Accessibility
              </Link>
              <Link
                href="/sitemap"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 md:text-right">
              &copy; {currentYear} DevJunkie. All rights reserved.
              <div className="mt-2 text-xs">
                Crafted with ❤️ for developers, by developers.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
