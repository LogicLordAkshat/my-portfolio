"use client";

import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    id: 1,
    title: "Oracle OCI 2025 Certified AI Professional",
    org: "Oracle Corporation",
    date: "May 2025",
    tags: ["Certification", "Generative AI"],
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=807A8ABBE9669C648B5FF363CEC69F98653300561B6C4C4B9E32E9D5FC0B313B",
    code: [
      { key: "type",       val: '"Certification"',      color: "#ec4899" },
      { key: "issuer",     val: '"Oracle"',             color: "#a78bfa" },
      { key: "credential", val: '"OCI-GenAI-Prof"',     color: "#34d399" },
      { key: "coverage",   val: '["LLMs","RAG","OCI"]', color: "#fbbf24" },
      { key: "year",       val: "2025",                 color: "#60a5fa" },
      { key: "verified",   val: "true",                 color: "#f472b6" },
    ],
  },
  {
    id: 2,
    title: "Finalist — CodeCortex 2.0 AI/ML Competition",
    org: "VIT Vellore",
    date: "September 2024",
    tags: ["Competition", "AI/ML", "Top 4"],
    link: "https://speechlite.netlify.app/",
    code: [
      { key: "event",     val: '"CodeCortex 2.0"',         color: "#ec4899" },
      { key: "rank",      val: '"Top 4 / 200+ Teams"',     color: "#fbbf24" },
      { key: "project",   val: '"SpeechLite"',             color: "#34d399" },
      { key: "stack",     val: '["NLP","Speech AI","ML"]', color: "#a78bfa" },
      { key: "national",  val: "true",                     color: "#f472b6" },
    ],
  },
  {
    id: 3,
    title: "Finance Head — German Literary Association",
    org: "VIT Vellore",
    date: "Nov 2024 – Present",
    tags: ["Leadership", "Finance"],
    link: null,
    code: [
      { key: "role",     val: '"Finance Head"',          color: "#ec4899" },
      { key: "org",      val: '"German Literary Assoc"', color: "#a78bfa" },
      { key: "members",  val: "85",                      color: "#fbbf24" },
      { key: "scope",    val: '["Budget","Events"]',     color: "#34d399" },
      { key: "active",   val: "true",                    color: "#f472b6" },
    ],
  },
];

const AchievementCard = ({ a, index }: { a: typeof achievements[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(0,0,0,0.5)", transition: { type: "spring", stiffness: 300, damping: 20 } }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="flex flex-col rounded-xl overflow-hidden cursor-pointer"
    style={{
      background: "#000",
      border: "1px solid #1a1a1a",
      boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
    }}
  >
    {/* Mac header */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
      <span className="w-3 h-3 rounded-full bg-[#28c941]" />
      <span className="ml-auto text-[10px] font-mono text-gray-600">{a.org}</span>
    </div>

    {/* Card body */}
    <div className="p-5 flex flex-col gap-3 flex-1">
      {/* Title */}
      <h3 className="text-[#e6e6ef] font-bold text-sm leading-snug">{a.title}</h3>

      {/* Date */}
      <p className="text-gray-600 text-[11px] font-mono">{a.date}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {a.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2 py-0.5 rounded"
            style={{ background: "#0d1117", color: "#dcdcdc", border: "1px solid #222" }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Code editor */}
      <div
        className="rounded-lg p-4 mt-1 overflow-auto font-mono text-xs leading-6"
        style={{
          background: "#0d1117",
          border: "1px solid #222",
          height: "148px",
          scrollbarWidth: "thin",
          scrollbarColor: "#333 transparent",
        }}
      >
        <span className="text-[#6e7681]">const </span>
        <span className="text-[#79c0ff]">achievement </span>
        <span className="text-[#6e7681]">= {"{"}</span>
        {a.code.map((line, i) => (
          <div key={i} className="ml-4">
            <span className="text-[#79c0ff]">{line.key}</span>
            <span className="text-[#6e7681]">: </span>
            <span style={{ color: line.color }}>{line.val}</span>
            {i < a.code.length - 1 && <span className="text-[#6e7681]">,</span>}
          </div>
        ))}
        <span className="text-[#6e7681]">{"}"}</span>
      </div>

      {/* Link */}
      {a.link && (
        <a
          href={a.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 text-[11px] font-mono text-[#79c0ff] hover:text-white transition-colors duration-200 w-fit mt-1"
        >
          View credential
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      )}
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 w-full">
      {/* Bento dot-grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img src="/footer-grid.svg" alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" />
      </div>
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
            Recognition
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Achievements &amp;{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs lg:text-right leading-relaxed">
              Certified, competed, and recognised — across AI, engineering and leadership.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <AchievementCard key={a.id} a={a} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
