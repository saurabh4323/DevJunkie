"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink, Github, Bookmark } from "lucide-react";

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

export default function RepositoryShowcase() {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [sortOption, setSortOption] = useState("newest");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from repos.json in public folder
  useEffect(() => {
    setLoading(true);
    fetch("/repos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch repository data");
        }
        return response.json();
      })
      .then((data) => {
        // Assuming data is an array of repositories
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching repositories:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter and sort repositories
  useEffect(() => {
    let results = [...repos];

    // Filter based on search term
    if (searchTerm) {
      results = results.filter(
        (repo) =>
          repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (repo.description &&
            repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort repositories
    switch (sortOption) {
      case "newest":
        results.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        break;
      case "oldest":
        results.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        break;
      case "name":
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setFilteredRepos(results);
  }, [repos, searchTerm, sortOption]);

  // Helper function to generate a price tag (simulated)
  const generatePrice = (repo) => {
    // This is just a demonstration - in reality you would have actual pricing data
    // Using repo.id to generate a deterministic "price" for demo purposes
    const priceOptions = ["Free", "$14.99", "$14.99", "$14.99", "$14.99"];
    const idx = repo.id % priceOptions.length;
    return priceOptions[idx];
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white">Loading repositories...</div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-red-400">Error: {error}</div>
      </div>
    );

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
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

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        style={{ marginTop: "40px" }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold mb-6"
          >
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              GitHub Repositories
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Explore my collection of projects and open-source contributions
          </motion.p>
        </motion.div>

        {/* Search and filter section */}
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
              placeholder="Search repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-2 text-gray-300">
            <span>Sort by:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="name">Name</option>
            </select>
          </div>
        </motion.div>

        {/* Repository grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredRepos.length > 0 ? (
            filteredRepos.map((repo) => (
              <motion.div
                key={repo.id}
                variants={itemVariants}
                className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {repo.owner && (
                      <img
                        src={repo.owner.avatar_url}
                        alt={`${repo.owner.login}'s avatar`}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                    )}
                    <div>
                      <h3 className="font-bold text-xl text-white">
                        {repo.name}
                      </h3>
                      <p className="text-sm text-gray-400">{repo.full_name}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-300 line-clamp-2 h-12">
                      {repo.description || "No description available"}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">
                      Created: {formatDate(repo.created_at)}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300">
                      {repo.language || "Unknown"}
                    </span>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-lg p-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-300 font-medium">
                        {generatePrice(repo)}
                      </span>
                      <button className="flex items-center space-x-1 text-blue-300 hover:text-blue-200 transition-colors">
                        <Bookmark className="h-4 w-4" />
                        <span className="text-sm">Save</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between gap-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-1 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>

                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-1 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-white text-lg">
                No repositories match your search.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
