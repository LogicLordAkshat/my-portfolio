"use client";

import { projects } from "../data";
import Image from "next/image";
import { motion } from "framer-motion";

const categoryMap: Record<number, { label: string; color: string; bg: string; border: string }> = {
  1: { label: "AI Platform",    color: "#a855f7", bg: "rgba(168,85,247,0.08)",  border: "rgba(168,85,247,0.3)"  },
  2: { label: "Security SaaS",  color: "#ec4899", bg: "rgba(236,72,153,0.08)",  border: "rgba(236,72,153,0.3)"  },
  3: { label: "FinTech AI",     color: "#6366f1", bg: "rgba(99,102,241,0.08)",  border: "rgba(99,102,241,0.3)"  },
  4: { label: "Community App",  color: "#14b8a6", bg: "rgba(20,184,166,0.08)",  border: "rgba(20,184,166,0.3)"  },
  5: { label: "NLP / Speech",   color: "#f59e0b", bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.3)"  },
  6: { label: "AI / Media",     color: "#3b82f6", bg: "rgba(59,130,246,0.08)",  border: "rgba(59,130,246,0.3)"  },
};

const statMap: Record<number, string> = {
  1: "65% faster",
  2: "50k users",
  3: "40% latency↓",
  4: "100k users",
  5: "Top 4 / 200+",
  6: "Real-time AI",
};

const RecentProjects = () => {
  if (!projects) return null;

  return (
    <section id="projects" className="pt-8 pb-24 w-full">
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
            Selected work
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Recent{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs lg:text-right leading-relaxed">
              Production-grade AI platforms, SaaS tools and community apps — all shipped.
            </p>
          </div>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => {
            const cat = categoryMap[item.id];
            const stat = statMap[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 350, damping: 22 } }}
                className="group"
              >
                {/* Gradient border wrapper — 1px accent gradient */}
                <div
                  className="p-[1px] rounded-2xl h-full transition-all duration-500 group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
                  style={{
                    background: `linear-gradient(135deg, ${cat.color}50, ${cat.color}15 40%, transparent 70%, ${cat.color}25)`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${cat.color}90, ${cat.color}35 40%, transparent 70%, ${cat.color}50)`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px 2px ${cat.color}35`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${cat.color}50, ${cat.color}15 40%, transparent 70%, ${cat.color}25)`;
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-[#111113] to-[#0c0c0f] h-full"
                  >
                {/* Image area */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent opacity-80" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm"
                      style={{ color: cat.color, background: cat.bg, borderColor: cat.border }}
                    >
                      {cat.label}
                    </span>
                  </div>

                  {/* Stat chip */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-gray-400 backdrop-blur-sm">
                      {stat}
                    </span>
                  </div>

                  {/* Hover icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-md"
                      style={{ background: cat.bg, borderColor: cat.border }}
                    >
                      <svg className="w-4 h-4" style={{ color: cat.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5">
                  <span className="text-[11px] font-mono mb-2" style={{ color: `${cat.color}80` }}>
                    {String(item.id).padStart(2, "0")}
                  </span>
                  <h3 className="text-white font-bold text-base leading-snug mb-2"
                    style={{ backgroundImage: `linear-gradient(135deg, ${cat.color}, white)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1 mb-4">{item.des}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                      {item.iconLists.slice(0, 4).map((icon, i) => (
                        <div key={i} className="relative w-6 h-6 rounded-md overflow-hidden bg-white/[0.05] border border-white/[0.08] flex-shrink-0">
                          <Image src={icon} alt="tech" fill sizes="24px" className="object-contain p-0.5" />
                        </div>
                      ))}
                      {item.iconLists.length > 4 && <span className="text-[9px] text-gray-600 font-mono ml-1">+{item.iconLists.length - 4}</span>}
                    </div>
                    <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[11px] font-mono" style={{ color: cat.color }}>View</span>
                      <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" style={{ color: cat.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RecentProjects;
