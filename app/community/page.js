"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Share2,
  Code,
  PlusCircle,
  Search,
  ThumbsUp,
  MessageCircle,
  Filter,
  Award,
  User,
} from "lucide-react";

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

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("projects");
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [postType, setPostType] = useState("project");
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
    projectUrl: "",
    imageUrl: "",
  });

  // Sample data for UI demonstration
  const sampleProjects = [
    {
      id: 1,
      title: "Next.js Dashboard with Tailwind CSS",
      author: "devWizard",
      authorImage: "/api/placeholder/40/40",
      content:
        "Just launched my new dashboard template built with Next.js and Tailwind. It features dark mode, responsive design, and real-time data visualization.",
      image: "/api/placeholder/500/300",
      likes: 124,
      comments: 32,
      tags: ["next.js", "tailwind", "dashboard"],
    },
    {
      id: 2,
      title: "React Native Fitness App",
      author: "mobileGuru",
      authorImage: "/api/placeholder/40/40",
      content:
        "Check out my new fitness tracking app built with React Native. Tracks workouts, nutrition, and includes social features for workout buddies.",
      image: "/api/placeholder/500/300",
      likes: 89,
      comments: 21,
      tags: ["react-native", "fitness", "mobile"],
    },
  ];

  const sampleQuestions = [
    {
      id: 1,
      title: "How to optimize React component re-renders?",
      author: "reactNewbie",
      authorImage: "/api/placeholder/40/40",
      content:
        "I'm building a large app with many components and I'm noticing performance issues. What are the best practices for preventing unnecessary re-renders in React?",
      likes: 45,
      comments: 18,
      tags: ["react", "performance", "optimization"],
      solved: false,
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox for complex layouts",
      author: "cssExplorer",
      authorImage: "/api/placeholder/40/40",
      content:
        "When would you choose CSS Grid over Flexbox for page layouts? I'm working on a complex dashboard and trying to decide the best approach.",
      likes: 62,
      comments: 27,
      tags: ["css", "layout", "grid", "flexbox"],
      solved: true,
    },
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (would connect to backend in real implementation)
  const handleSubmit = (e) => {
    e.preventDefault();
    // This would send data to the backend in a real implementation
    console.log("Form submitted:", {
      type: postType,
      ...formData,
    });

    // Reset form and close modal
    setFormData({
      title: "",
      content: "",
      tags: "",
      projectUrl: "",
      imageUrl: "",
    });
    setShowNewPostModal(false);
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
            <span className="text-white">Developer </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Community
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center"
          >
            Connect with fellow developers, share your projects, ask questions,
            and grow together in this collaborative space.
          </motion.p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          variants={containerVariants}
          className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center"
        >
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects and questions..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-2 text-gray-300">
            <button className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
            <button
              className="flex items-center space-x-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
              onClick={() => {
                setPostType("project");
                setShowNewPostModal(true);
              }}
            >
              <PlusCircle className="h-4 w-4" />
              <span>New Post</span>
            </button>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={containerVariants} className="mb-8">
          <div className="flex border-b border-gray-700 mb-6">
            <button
              className={`pb-4 px-6 font-medium text-lg transition-colors ${
                activeTab === "projects"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("projects")}
            >
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5" />
                <span>Projects</span>
              </div>
            </button>
            <button
              className={`pb-4 px-6 font-medium text-lg transition-colors ${
                activeTab === "questions"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("questions")}
            >
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Questions</span>
              </div>
            </button>
          </div>
        </motion.div>

        {/* Posts List */}
        <motion.div variants={containerVariants} className="space-y-8">
          {activeTab === "projects"
            ? sampleProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="p-6">
                    {/* Author info */}
                    <div className="flex items-center mb-4">
                      <img
                        src={project.authorImage}
                        alt={`${project.author}'s avatar`}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h3 className="font-medium text-white">
                          {project.author}
                        </h3>
                        <p className="text-sm text-gray-400">
                          Posted a project
                        </p>
                      </div>
                    </div>

                    {/* Project content */}
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 mb-4">{project.content}</p>

                    {/* Project image */}
                    {project.image && (
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto"
                        />
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Interaction buttons */}
                    <div className="flex justify-between pt-4 border-t border-gray-700">
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
                        <ThumbsUp className="h-5 w-5" />
                        <span>{project.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span>{project.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
                        <Share2 className="h-5 w-5" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            : sampleQuestions.map((question) => (
                <motion.div
                  key={question.id}
                  variants={itemVariants}
                  className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="p-6">
                    {/* Author info */}
                    <div className="flex items-center mb-4">
                      <img
                        src={question.authorImage}
                        alt={`${question.author}'s avatar`}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h3 className="font-medium text-white">
                          {question.author}
                        </h3>
                        <p className="text-sm text-gray-400">
                          Asked a question
                        </p>
                      </div>
                      {question.solved && (
                        <span className="ml-auto flex items-center space-x-1 px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">
                          <Award className="h-4 w-4" />
                          <span>Solved</span>
                        </span>
                      )}
                    </div>

                    {/* Question content */}
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {question.title}
                    </h2>
                    <p className="text-gray-300 mb-4">{question.content}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {question.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Interaction buttons */}
                    <div className="flex justify-between pt-4 border-t border-gray-700">
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
                        <ThumbsUp className="h-5 w-5" />
                        <span>{question.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span>{question.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
                        <Share2 className="h-5 w-5" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
        </motion.div>

        {/* New Post Modal */}
        {showNewPostModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {postType === "project"
                    ? "Share Your Project"
                    : "Ask a Question"}
                </h2>
                <button
                  onClick={() => setShowNewPostModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Post type toggle */}
              <div className="flex mb-6 bg-gray-900 rounded-lg p-1">
                <button
                  className={`flex-1 py-2 px-4 rounded-lg ${
                    postType === "project"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : "text-gray-400"
                  }`}
                  onClick={() => setPostType("project")}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Code className="h-5 w-5" />
                    <span>Project</span>
                  </div>
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-lg ${
                    postType === "question"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : "text-gray-400"
                  }`}
                  onClick={() => setPostType("question")}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>Question</span>
                  </div>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder={
                        postType === "project"
                          ? "Your project name"
                          : "Your question title"
                      }
                      className="w-full py-2 px-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      {postType === "project"
                        ? "Description"
                        : "Question details"}
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      placeholder={
                        postType === "project"
                          ? "Describe your project..."
                          : "Explain your question in detail..."
                      }
                      rows={5}
                      className="w-full py-2 px-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {postType === "project" && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Project URL (optional)
                        </label>
                        <input
                          type="url"
                          name="projectUrl"
                          value={formData.projectUrl}
                          onChange={handleInputChange}
                          placeholder="https://your-project-url.com"
                          className="w-full py-2 px-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Image URL (optional)
                        </label>
                        <input
                          type="url"
                          name="imageUrl"
                          value={formData.imageUrl}
                          onChange={handleInputChange}
                          placeholder="https://your-image-url.com/image.jpg"
                          className="w-full py-2 px-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Tags (comma separated)
                    </label>
                    <input
                      type="text"
                      name="tags"
                      value={formData.tags}
                      onChange={handleInputChange}
                      placeholder="react, typescript, css"
                      className="w-full py-2 px-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-lg transition-colors"
                    >
                      {postType === "project"
                        ? "Share Project"
                        : "Post Question"}
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
