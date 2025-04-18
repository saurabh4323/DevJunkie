"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Code,
  Coffee,
  Heart,
  DollarSign,
  AlertCircle,
  Check,
  Briefcase,
  MessageSquare,
  X,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState({
    isSubmitted: false,
    isError: false,
    message: "",
  });

  const [formData, setFormData] = useState({
    projectType: "small",
    budget: "",
    details: "",
  });

  const [showCoffeeModal, setShowCoffeeModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real application, you would handle the form submission here
    // For demo purposes, we'll just simulate success

    setFormStatus({
      isSubmitted: true,
      isError: false,
      message:
        "Thanks for reaching out! I'll review your project details and get back to you soon.",
    });

    // Reset form
    setFormData({
      projectType: "small",
      budget: "",
      details: "",
    });
  };

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const contactOptions = [
    {
      title: "Quick Consultation",
      amount: "$4.99",
      description: "One-hour consultation to discuss your project needs",
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      onClick: () => {},
    },
    {
      title: "Buy Us a Coffee",
      amount: "Any",
      description: "Support my work with a small token of appreciation",
      icon: <Coffee className="h-8 w-8 text-white" />,
      onClick: () => setShowCoffeeModal(true),
    },
    {
      title: "Hire for Project",
      amount: "Custom",
      description: "Let's collaborate on your next big idea",
      icon: <Briefcase className="h-8 w-8 text-white" />,
      onClick: () => {},
    },
  ];

  return (
    <div className="relative min-h-screen  overflow-hidden">
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
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />

        {/* Code grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-repeat"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold text-center mb-6"
            style={{ marginTop: "40px" }}
          >
            <span className="text-white">Get In </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Touch
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center"
          >
            Have a project in mind? Need a consultation? Or just want to support
            my work? Choose the option that works best for you.
          </motion.p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
              onClick={option.onClick}
            >
              <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-4 mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {option.title}
              </h3>
              <p className="text-gray-300 mb-4">{option.description}</p>
              <span className="text-2xl font-bold text-white">
                {option.amount}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1 space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Email Me
                  </h3>
                  <a
                    href="mailto:contact@example.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    saurabhiitr01@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 mr-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    My GitHub
                  </h3>
                  <a
                    href="https://github.com/example"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    github.com/example
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Project Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-6"
            >
              Tell Me About Your Project
            </motion.h2>

            {formStatus.isSubmitted && !formStatus.isError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg bg-green-500/20 text-green-300 flex items-center"
              >
                <Check className="h-5 w-5 mr-2" />
                {formStatus.message}
              </motion.div>
            )}

            {formStatus.isError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg bg-red-500/20 text-red-300 flex items-center"
              >
                <AlertCircle className="h-5 w-5 mr-2" />
                {formStatus.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                >
                  <option value="small">Small Project (1-2 weeks)</option>
                  <option value="medium">Medium Project (2-4 weeks)</option>
                  <option value="large">Large Project (1+ months)</option>
                  <option value="consultation">Consultation Only</option>
                  <option value="coffee">Just Supporting Your Work</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Budget Range
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full pl-10 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="500-1000 or 'Not Sure'"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Tell me about your project, timeline, and what you hope to achieve..."
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Coffee Support Modal */}
      <AnimatePresence>
        {showCoffeeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowCoffeeModal(false)}
            />

            {/* Modal Content */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-gray-800/90 backdrop-blur-md border border-gray-700 rounded-xl p-8 w-full max-w-md shadow-2xl shadow-purple-500/20"
            >
              {/* Close button */}
              <button
                onClick={() => setShowCoffeeModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col items-center">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-4 mb-4">
                  <Coffee className="h-8 w-8 text-white" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">
                  Buy us a Coffee
                </h2>
                <p className="text-gray-300 text-center mb-6">
                  Your support helps us to continue creating amazing content and
                  tools!
                </p>

                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-1 rounded-lg mb-6">
                  <div className="bg-gray-900 rounded-md p-4 flex flex-col items-center">
                    <img
                      src="/image.png"
                      alt="UPI QR Code"
                      className="w-48 h-48 mb-4 rounded-md"
                    />

                    <span className="text-gray-300 text-sm mb-1">
                      Scan the QR code or
                    </span>

                    <Link
                      href="upi://pay?pa=8810873052@ptsbi&pn=SaurabhSingh&cu=INR"
                      className="text-blue-500 underline"
                    >
                      Pay via UPI
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
