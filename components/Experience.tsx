"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "AI Engineer Intern",
    company: "BizNeuro AI",
    handle: "@BizNeuroAI",
    period: "Mar 2026 – Present",
    type: "Remote · Hybrid",
    current: true,
    initials: "BN",
    avatarGradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
    shadowColor: "#8B5CF6",
    borderColor: "rgba(139,92,246,0.6)",
    caption: "Building AI fraud detection pipelines, OCR systems, and explainable AI outputs for BFSI and e-commerce clients worldwide.",
    tags: ["Computer Vision", "OCR", "Fraud Detection", "Explainable AI"],
  },
  {
    id: 2,
    role: "Software Dev Engineer",
    company: "VITrendz",
    handle: "@VITrendz",
    period: "2024 – Present",
    type: "Part-time",
    current: false,
    initials: "VT",
    avatarGradient: "linear-gradient(135deg, #6D28D9, #7C3AED)",
    shadowColor: "#7C3AED",
    borderColor: "rgba(109,40,217,0.6)",
    caption: "Scaled a student platform to 100k+ users with 99.9% uptime. Led a 5-member team. Improved backend performance by 45%.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
  },
  {
    id: 3,
    role: "AI Full Stack Dev",
    company: "Freelance",
    handle: "@International",
    period: "2023 – Present",
    type: "Remote",
    current: false,
    initials: "FL",
    avatarGradient: "linear-gradient(135deg, #DB2777, #EC4899)",
    shadowColor: "#EC4899",
    borderColor: "rgba(236,72,153,0.6)",
    caption: "Delivered 6+ production AI & SaaS platforms for clients in the US, Singapore, and India. LLMs, RAG, payments and automation.",
    tags: ["LangChain", "RAG", "OpenAI", "TypeScript"],
  },
  {
    id: 4,
    role: "Solo Product Builder",
    company: "MarkovAI · KravenAI",
    handle: "@IndieHacker",
    period: "2024 – Present",
    type: "Side Projects",
    current: false,
    initials: "SP",
    avatarGradient: "linear-gradient(135deg, #0EA5E9, #06B6D4)",
    shadowColor: "#06B6D4",
    borderColor: "rgba(6,182,212,0.6)",
    caption: "Built and shipped MarkovAI (multimodal AI assistant, 65% latency gain) and KravenAI (quantum-resistant security, 50k+ users, 98.2% threat accuracy).",
    tags: ["LLM", "Multimodal AI", "Security", "SaaS"],
  },
  {
    id: 5,
    role: "CodeCortex 2.0 Finalist",
    company: "VIT Vellore",
    handle: "@Top4 / 200+ Teams",
    period: "2024",
    type: "AI/ML Competition",
    current: false,
    initials: "CC",
    avatarGradient: "linear-gradient(135deg, #1D4ED8, #3B82F6)",
    shadowColor: "#3B82F6",
    borderColor: "rgba(59,130,246,0.6)",
    caption: "Built SpeechLite — real-time AI speech analysis platform. Ranked nationally Top 4 in a 200+ team competition.",
    tags: ["NLP", "Speech AI", "Transformers"],
  },
  {
    id: 6,
    role: "Finance Head",
    company: "German Literary Assoc.",
    handle: "@VIT · 85+ Members",
    period: "2023 – Present",
    type: "Leadership",
    current: false,
    initials: "GL",
    avatarGradient: "linear-gradient(135deg, #7C3AED, #C026D3)",
    shadowColor: "#C026D3",
    borderColor: "rgba(192,38,211,0.6)",
    caption: "Managing finances, event budgets, and financial strategy for one of VIT's most active cultural organizations.",
    tags: ["Finance", "Operations", "Strategy"],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.94, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      whileHover={{
        y: -10,
        rotate: -2,
        scale: 1.02,
        boxShadow: `10px 10px 0px ${exp.shadowColor}`,
        transition: { type: "spring", stiffness: 400, damping: 18 },
      }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="comic-exp-card"
      style={{
        "--shadow-color": exp.shadowColor,
        "--border-color": exp.borderColor,
        boxShadow: `6px 6px 0px ${exp.shadowColor}`,
      } as React.CSSProperties}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
          className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-white/20"
          style={{ background: exp.avatarGradient }}
        >
          <span className="text-white text-sm font-black tracking-widest">{exp.initials}</span>
        </motion.div>
        <div>
          <p
            className="text-sm font-black uppercase tracking-wide comic-username"
            style={{ "--accent": exp.shadowColor } as React.CSSProperties}
          >
            {exp.company}
          </p>
          <p className="text-xs text-gray-500 tracking-widest mt-0.5 font-mono">{exp.handle}</p>
        </div>
        {exp.current && (
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="ml-auto flex-shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
          >
            ● Live
          </motion.span>
        )}
      </div>

      {/* Dot-grid image box with role title */}
      <motion.div
        whileHover={{ skewX: -2, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-28 rounded-lg mb-4 overflow-hidden border border-white/10 comic-image-box relative"
        style={{ "--accent": exp.shadowColor } as React.CSSProperties}
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 px-4 relative z-10">
          <p className="text-white font-black text-base uppercase text-center leading-tight">{exp.role}</p>
          <p className="text-xs font-mono tracking-widest" style={{ color: exp.shadowColor }}>{exp.period}</p>
        </div>
        {/* Scan line shimmer */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, ${exp.shadowColor}18 50%, transparent 100%)`,
            height: "40%",
          }}
          animate={{ top: ["-40%", "140%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
        />
      </motion.div>

      {/* Speech bubble caption */}
      <div className="comic-caption mb-4">
        <p className="text-gray-300 text-xs leading-relaxed">{exp.caption}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {exp.tags.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.09 + i * 0.06 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -1 }}
            className="comic-tag text-[10px] font-mono px-2 py-1 rounded-md border cursor-default"
            style={{ borderColor: exp.borderColor, color: exp.shadowColor } as React.CSSProperties}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 w-full -mt-24">
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
            Career journey
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Work{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs lg:text-right leading-relaxed">
              From 100k+ user platforms to international freelance — here&apos;s what I&apos;ve shipped.
            </p>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
