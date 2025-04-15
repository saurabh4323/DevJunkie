"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiBook,
  FiLayers,
  FiUsers,
  FiMail,
  FiArchive,
} from "react-icons/fi";

// Navigation links
const navLinks = [
  { href: "/projects", label: "Projects", icon: <FiLayers /> },
  { href: "/reelproject", label: "Reel Project", icon: <FiBook /> },
  // { href: "/support", label: "support", icon: <FiArchive /> },
  { href: "/community", label: "Community", icon: <FiUsers /> },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll(); // Track scroll for dynamic effects
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for background blur and shadow
  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => setScrolled(y > 20));
    return () => unsubscribe();
  }, [scrollY]);

  // Variants for logo animation
  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, rotate: 2, transition: { duration: 0.3 } },
  };

  // Variants for nav link animation
  const linkVariants = {
    initial: { y: 0, scale: 1 },
    hover: {
      y: -2,
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "bg-white/80 dark:bg-gray-900/85 shadow-xl border-b border-gray-200/50 dark:border-gray-800/50 backdrop-blur-2xl"
            : "bg-gradient-to-b from-white/20 to-transparent dark:from-gray-900/20"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with enhanced animation */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
          >
            <Link href="/" className="flex items-center gap-3">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text tracking-tight">
                DevJunkie
              </span>
              <motion.span
                className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <motion.div
                key={href}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
              >
                <Link
                  href={href}
                  className="relative px-3 py-2 text-gray-700 dark:text-gray-100 font-medium text-lg transition-all duration-300
                    hover:text-blue-600 dark:hover:text-blue-400 group"
                >
                  {label}
                  {/* Dynamic underline with glow effect */}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500/30 blur-md"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </Link>
              </motion.div>
            ))}
            {/* Contact Button with scale and glow */}
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/support"
                className="ml-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-2.5 rounded-full font-semibold shadow-lg transition-all duration-300"
              >
                support Us
              </Link>
            </motion.div>
          </div>

          {/* Hamburger Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden text-gray-700 dark:text-gray-200 p-3 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -50 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map(({ href, label, icon }) => (
                <motion.div
                  key={href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 * navLinks.indexOf({ href, label, icon }),
                  }}
                >
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-100 font-semibold text-lg
                      hover:bg-blue-50 dark:hover:bg-gray-800/50 transition-all duration-300 group"
                  >
                    <motion.span
                      className="text-2xl text-blue-500 group-hover:text-purple-500"
                      whileHover={{ rotate: 10, scale: 1.2 }}
                    >
                      {icon}
                    </motion.span>
                    {label}
                  </Link>
                </motion.div>
              ))}
              {/* Mobile Contact Button */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ scale: 1.03 }}
              >
                <Link
                  href="/support"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-4 mt-4 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <motion.span whileHover={{ rotate: 10, scale: 1.2 }}>
                    <FiMail className="text-xl" />
                  </motion.span>
                  Support us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
