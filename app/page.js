"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Features from "@/components/Features";
import Testimonials from "@/components/Testiminial";

export default function Page() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <>
      <div
        className="relative min-h-screen flex items-center  overflow-hidden"
        style={{ backgroundColor: "#000" }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full "></div>

          {/* Animated circles */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          />

          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          />

          {/* Code grid background */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[url('/code-pattern.png')] bg-repeat"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <motion.div variants={itemVariants}>
                <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 mb-6">
                  Web Development for the Modern Era
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
              >
                <span className="text-white">Craft the </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Future of Web
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-xl text-gray-300 max-w-xl"
              >
                Join thousands of students mastering modern web development
                through hands-on projects, in-depth tutorials, and cutting-edge
                resources.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 border-0 rounded-full text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/25"
                >
                  Explore Projects
                  <svg
                    className="ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>

                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center px-8 py-4 border border-blue-400/30 rounded-full text-base font-medium text-blue-300 hover:bg-blue-800/20 transform transition-all duration-200 hover:scale-105"
                >
                  View Resources
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-12">
                <p className="text-gray-400 mb-4 flex items-center">
                  <svg
                    className="h-5 w-5 mr-2 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Trusted by 10,000+ aspiring developers
                </p>

                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs text-white">
                      JD
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs text-white">
                      KL
                    </div>
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs text-white">
                      MN
                    </div>
                    <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-xs text-white">
                      +
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="text-blue-400 font-medium">4.9/5</span>{" "}
                    from 500+ reviews
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 bg-gradient-to-br from-white/5 to-white/10 shadow-2xl">
                <div className="px-6 pt-8 pb-10">
                  <div className="flex mb-4">
                    <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                    <div className="ml-2 h-3 w-3 bg-yellow-400 rounded-full"></div>
                    <div className="ml-2 h-3 w-3 bg-green-400 rounded-full"></div>
                  </div>

                  <div className="text-gray-300 text-sm font-mono">
                    <div className="flex">
                      <span className="text-purple-400">const</span>
                      <span className="px-1 text-white">developer</span>
                      <span className="text-blue-400">=</span>
                      <span className="px-1 text-blue-400">&#123;</span>
                    </div>

                    <div className="pl-6">
                      <span className="text-green-400">name:</span>
                      <span className="px-1 text-yellow-300">You</span>
                      <span className="text-blue-400">,</span>
                    </div>

                    <div className="pl-6">
                      <span className="text-green-400">skills:</span>
                      <span className="px-1 text-blue-400">[</span>
                      <span className="text-yellow-300">HTML</span>
                      <span className="text-blue-400">,</span>
                      <span className="px-1 text-yellow-300">CSS</span>
                      <span className="text-blue-400">,</span>
                      <span className="px-1 text-yellow-300">JavaScript</span>
                      <span className="text-blue-400">]</span>
                      <span className="text-blue-400">,</span>
                    </div>

                    <div className="pl-6">
                      <span className="text-green-400">level:</span>
                      <span className="px-1 text-yellow-300">Learning</span>
                      <span className="text-blue-400">,</span>
                    </div>

                    <motion.div
                      className="pl-6"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <span className="text-green-400">futureLevel:</span>
                      <span className="px-1 text-yellow-300">Expert</span>
                    </motion.div>

                    <div>
                      <span className="text-blue-400">&#125;</span>
                      <span className="text-blue-400">;</span>
                    </div>

                    <div className="mt-4">
                      <span className="text-pink-400">function</span>
                      <span className="px-1 text-blue-300">levelUp</span>
                      <span className="text-blue-400">(</span>
                      <span className="text-orange-300">dev</span>
                      <span className="text-blue-400">)</span>
                      <span className="px-1 text-blue-400">&#123;</span>
                    </div>

                    <div className="pl-6">
                      <span className="text-purple-400">return</span>
                      <span className="px-1 text-white">DevJunkie</span>
                      <span className="text-blue-400">.</span>
                      <span className="text-blue-300">transform</span>
                      <span className="text-blue-400">(</span>
                      <span className="text-orange-300">dev</span>
                      <span className="text-blue-400">)</span>
                      <span className="text-blue-400">;</span>
                    </div>

                    <div>
                      <span className="text-blue-400">&#125;</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-blue-500 rounded-full p-3 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-purple-500 rounded-full p-3 shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            className="h-6 w-6 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
      <Features></Features>
      {/* <Testimonials></Testimonials> */}
    </>
  );
}
