"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Phone, MapPin, AlertCircle, Check } from "lucide-react";
import axios from "axios";

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    });

    try {
      // This would be replaced with your actual API endpoint that uses Resend
      // The frontend code for sending the email
      const payload = {
        from: "onboarding@resend.dev", // This would typically be your verified sender in Resend
        to: "saurabhiitr01@gmail.com",
        subject: `${formData.subject || "Contact Form Submission"}: Issue`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, "<br>")}</p>
        `,
      };

      // In a real implementation, this would be an API call
      console.log("Sending email with payload:", payload);

      // Simulating API call for the demo
      // In production, replace with actual axios call like:
      // await axios.post('/api/send-email', payload);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: "Thank you! Your message has been sent successfully.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({
          ...prev,
          isSubmitted: false,
          message: "",
        }));
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "There was an error sending your message. Please try again.",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
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
          <div className="h-full w-full bg-[url('/code-pattern.png')] bg-repeat"></div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        style={{ marginTop: "40px" }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold text-center mb-6"
          >
            <span className="text-white">Get in </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Touch
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center"
          >
            Have questions or feedback? We'd love to hear from you. Fill out the
            form below and we'll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
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
                    Email Us
                  </h3>
                  <a
                    href="mailto:saurabhiitr01@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    saurabhiitr01@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-6"
            >
              Send us a message
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
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full py-2 px-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full py-2 px-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full py-2 px-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full py-2 px-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className={`w-full flex items-center justify-center py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 ${
                    formStatus.isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  }`}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
