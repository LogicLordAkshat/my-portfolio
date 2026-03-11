"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    issue: "01",
    title: "Building Scalable AI Systems: Lessons from MarkovAI",
    excerpt:
      "How we engineered a real-time multimodal AI assistant that reduced support workload by 45% and cut response latency by 65% — a deep-dive into production AI architecture.",
    category: "AI / Architecture",
    readTime: "8 min",
    accentColor: "#a855f7",
    accentRgb: "168,85,247",
    border: "from-[#a855f7]/50 via-[#ec4899]/10 to-transparent",
    image: "/s1(2).png",
    featured: true,
  },
  {
    id: 2,
    issue: "02",
    title: "Scaling to 100k+ Users: The VITrendz Architecture",
    excerpt:
      "The engineering decisions behind VITrendz — how we achieved 99.9% uptime and 45% performance gains while serving 100,000+ concurrent students.",
    category: "System Design",
    readTime: "12 min",
    accentColor: "#ec4899",
    accentRgb: "236,72,153",
    border: "from-[#ec4899]/50 via-[#f97316]/10 to-transparent",
    image: "/s1(5).png",
    featured: false,
  },
  {
    id: 3,
    issue: "03",
    title: "Implementing RAG Pipelines: A Practical Guide",
    excerpt:
      "How we cut FinvestaAI's LLM latency by 40% with optimized retrieval-augmented generation — chunking strategies, vector stores, and reranking.",
    category: "LLM / RAG",
    readTime: "10 min",
    accentColor: "#6366f1",
    accentRgb: "99,102,241",
    border: "from-[#6366f1]/50 via-[#06b6d4]/10 to-transparent",
    image: "/s1(4).png",
    featured: false,
  },
];

const FeaturedCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } }}
    className="group"
  >
    <Link href="/blog">
      <div
        className={`p-[1px] rounded-2xl bg-gradient-to-br ${post.border}`}
        style={{ transition: "box-shadow 0.4s ease" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px rgba(${post.accentRgb},0.2)`; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
      >
        <div className="rounded-2xl bg-[#0d0d0f] overflow-hidden flex flex-col lg:flex-row h-full">
          {/* Image */}
          <div className="relative w-full lg:w-2/5 h-56 lg:h-auto flex-shrink-0 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0d0d0f] via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-6 lg:p-8 flex-1">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border"
                  style={{ color: post.accentColor, borderColor: `rgba(${post.accentRgb},0.35)`, background: `rgba(${post.accentRgb},0.08)` }}
                >
                  {post.category}
                </span>
                <span className="text-[10px] font-mono text-gray-600">{post.readTime} read</span>
              </div>

              <p className="text-xs font-mono mb-3" style={{ color: `rgba(${post.accentRgb},0.5)` }}>
                Issue {post.issue}
              </p>

              <h3 className="text-white font-bold text-xl lg:text-2xl leading-snug mb-4 group-hover:text-transparent transition-all duration-300"
                style={{ backgroundImage: `linear-gradient(135deg, ${post.accentColor}, white)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "inherit" }}
              >
                {post.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center gap-2 mt-6 pt-5 border-t border-white/[0.06]">
              <span className="text-sm font-mono" style={{ color: post.accentColor }}>Read article</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                style={{ color: post.accentColor }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const SmallCard = ({ post, index }: { post: typeof blogPosts[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } }}
    className="group h-full"
  >
    <Link href="/blog" className="block h-full">
      <div
        className={`p-[1px] rounded-2xl bg-gradient-to-br ${post.border} h-full`}
        style={{ transition: "box-shadow 0.4s ease" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 35px rgba(${post.accentRgb},0.2)`; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
      >
        <div className="rounded-2xl bg-[#0d0d0f] overflow-hidden h-full flex flex-col">
          {/* Image */}
          <div className="relative h-44 overflow-hidden flex-shrink-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent" />
            <div className="absolute top-3 left-3">
              <span
                className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm"
                style={{ color: post.accentColor, borderColor: `rgba(${post.accentRgb},0.35)`, background: `rgba(${post.accentRgb},0.1)` }}
              >
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5">
            <p className="text-[10px] font-mono mb-2" style={{ color: `rgba(${post.accentRgb},0.5)` }}>
              Issue {post.issue} · {post.readTime} read
            </p>
            <h3
              className="text-white font-bold text-base leading-snug mb-2 flex-1"
              style={{ backgroundImage: `linear-gradient(135deg, ${post.accentColor}, white)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              {post.title}
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-1.5 pt-4 border-t border-white/[0.06]">
              <span className="text-[11px] font-mono opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: post.accentColor }}>Read article</span>
              <svg className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" style={{ color: post.accentColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const BlogPreview = () => {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <section id="blog-preview" className="py-24 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-[0.35em] text-purple-400 uppercase mb-4">
            Tech blog
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              From the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h2>
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm max-w-xs lg:text-right leading-relaxed">
                AI, system design, and full-stack engineering — in depth.
              </p>
              <Link
                href="/blog"
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03] text-xs font-mono text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                All posts
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Featured */}
        <div className="mb-5">
          <FeaturedCard post={featured} />
        </div>

        {/* 2 secondary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rest.map((post, i) => (
            <SmallCard key={post.id} post={post} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogPreview;
