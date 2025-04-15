"use client";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function SimpleWebDevHeader() {
  return (
    <div className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-purple-900/20"></div>

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
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Web Dev Reels & Projects
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Explore a collection of captivating short-form content showcasing
            innovative web development techniques, behind-the-scenes looks, and
            project highlights.
          </motion.p>

          <motion.div variants={itemVariants}>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Collection
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
