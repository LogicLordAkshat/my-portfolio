"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendar, FaClock, FaArrowRight, FaSearch, FaFire, FaTrophy } from "react-icons/fa";
import { SimpleNavbar } from "../components/ui/SimpleNavbar";
import Footer from "../components/Footer";
import { Spotlight } from "../components/ui/Spotlight";
import Image from "next/image";
import { navItems } from "../data";
import Head from "next/head";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable AI Systems: Lessons from MarkovAI",
    excerpt: "How we engineered a real-time AI assistant platform that reduced support workload by 45% and improved response latency by 65%.",
    content: "Deep dive into the architecture decisions, LLM integration patterns, and performance optimizations that made MarkovAI successful...",
    date: "2025-09-15",
    readTime: "8 min read",
    category: "AI/ML",
    tags: ["AI", "LLMs", "System Design", "Performance"],
    image: "/s1(2).png",
    featured: true,
    views: "2.4k",
  },
  {
    id: 2,
    title: "Implementing RAG Pipelines: A Practical Guide",
    excerpt: "Learn how we optimized Retrieval-Augmented Generation pipelines to reduce latency by 40% while maintaining high accuracy in FinvestaAI.",
    content: "Exploring vector databases, embedding strategies, and caching mechanisms for production RAG systems...",
    date: "2025-07-20",
    readTime: "10 min read",
    category: "AI/ML",
    tags: ["RAG", "LangChain", "Vector DB", "FastAPI"],
    image: "/s1(4).png",
    views: "1.8k",
  },
  {
    id: 3,
    title: "Scaling to 100k+ Users: VITrendz Architecture",
    excerpt: "The journey of building and scaling a student community platform to serve 100,000+ users with 99.9% uptime.",
    content: "Database optimization, caching strategies, and infrastructure decisions that enabled us to scale efficiently...",
    date: "2025-05-10",
    readTime: "12 min read",
    category: "System Design",
    tags: ["Scalability", "PostgreSQL", "Next.js", "Performance"],
    image: "/s1(5).png",
    views: "3.1k",
  },
  {
    id: 4,
    title: "AI-Powered Security: Building KravenAI",
    excerpt: "Implementing quantum-resistant cryptography and zero-knowledge architecture for a password security platform serving 50k+ users.",
    content: "Security best practices, threat detection algorithms, and achieving 98.2% accuracy in real-world scenarios...",
    date: "2025-08-05",
    readTime: "9 min read",
    category: "Security",
    tags: ["Security", "AI", "Cryptography", "Python"],
    image: "/s1(3).png",
    views: "1.5k",
  },
  {
    id: 5,
    title: "Full Stack Development Best Practices in 2025",
    excerpt: "Modern approaches to building production-ready applications with React, Next.js, TypeScript, and Node.js.",
    content: "Code organization, testing strategies, CI/CD pipelines, and deployment best practices from real projects...",
    date: "2025-06-15",
    readTime: "7 min read",
    category: "Web Development",
    tags: ["React", "Next.js", "TypeScript", "Best Practices"],
    image: "/p3.png",
    views: "2.2k",
  },
  {
    id: 6,
    title: "From Idea to Production: The SpeechLite Journey",
    excerpt: "How we built an AI speech analysis platform that reached Top 4 in CodeCortex 2.0 competition among 200+ teams.",
    content: "NLP techniques, real-time processing, sentiment analysis, and the lessons learned from competition to production...",
    date: "2025-09-25",
    readTime: "11 min read",
    category: "AI/ML",
    tags: ["NLP", "Speech Analysis", "Competition", "ML"],
    image: "/s1(1).png",
    views: "1.9k",
  },
];

const categories = ["All", "AI/ML", "System Design", "Security", "Web Development"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Blog - Akshat Srivastava | AI & Full Stack Development Insights</title>
        <meta name="description" content="Technical blog by Akshat Srivastava covering AI/ML, system design, full-stack development, and software engineering best practices." />
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </Head>

      <main className="relative bg-black min-h-screen flex flex-col">
        {/* Spotlight Effects */}
        <div className="fixed inset-0 z-0">
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="#8B5CF6"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="#EC4899"
          />
          <Spotlight
            className="left-80 top-28 h-[80vh] w-[50vw]"
            fill="#4C1D95"
          />
        </div>

        {/* Background Grid */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/footer-grid.svg"
            alt="background grid"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-80 mix-blend-screen"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <SimpleNavbar navItems={navItems} />

            {/* Hero Section with Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16 md:py-20"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6"
              >
                <FaFire className="text-orange-400" />
                <span className="text-sm font-semibold text-gray-300">Latest Tech Insights</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Tech Blog
                </span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                Insights on AI/ML, system design, and full-stack development from building production systems
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {blogPosts.length}+
                  </div>
                  <div className="text-gray-400 text-sm mt-1">Articles</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    12k+
                  </div>
                  <div className="text-gray-400 text-sm mt-1">Total Views</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {categories.length - 1}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">Categories</div>
                </motion.div>
              </div>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="max-w-2xl mx-auto"
              >
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-purple-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Featured Post */}
            {featuredPost && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-16"
              >
                <div className="flex items-center gap-2 mb-6">
                  <FaTrophy className="text-yellow-400 text-xl" />
                  <h2 className="text-2xl font-bold text-white">Featured Article</h2>
                </div>

                <div className="group relative cursor-pointer">
                  {/* Glowing Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-700" />
                  
                  {/* Featured Card */}
                  <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl overflow-hidden border border-yellow-500/50 group-hover:border-yellow-400/70 transition-all duration-500">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <Image
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                        
                        {/* Featured Badge */}
                        <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center gap-2">
                          <FaTrophy className="text-white text-sm" />
                          <span className="text-white text-sm font-bold">Featured</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full w-fit mb-4">
                          <span className="text-purple-300 text-sm font-semibold">{featuredPost.category}</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:via-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                          {featuredPost.title}
                        </h3>

                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                          {featuredPost.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6">
                          <div className="flex items-center gap-2">
                            <FaCalendar className="text-purple-400" />
                            <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaClock className="text-pink-400" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaFire className="text-orange-400" />
                            <span>{featuredPost.views} views</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {featuredPost.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-xs font-semibold"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-3 text-lg font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent group-hover:gap-4 transition-all duration-300">
                          <span>Read Full Article</span>
                          <FaArrowRight className="text-yellow-400 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-105"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 border border-purple-500/30 hover:border-purple-500/50 hover:scale-105"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative cursor-pointer"
                >
                  {/* Glowing Border Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-700 ease-out" />

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl overflow-hidden border border-neutral-800/50 group-hover:border-purple-500/50 transition-all duration-500 h-full flex flex-col min-h-[520px]">
                    {/* Image */}
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-purple-500/90 backdrop-blur-sm rounded-full">
                        <span className="text-white text-xs font-semibold">{post.category}</span>
                      </div>

                      {/* Views Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full flex items-center gap-1">
                        <FaFire className="text-orange-400 text-xs" />
                        <span className="text-white text-xs font-semibold">{post.views}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <FaCalendar className="text-purple-400" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaClock className="text-pink-400" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500 line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-purple-300 text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300">
                        <span>Read More</span>
                        <FaArrowRight className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* No Results Message */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Blog;
