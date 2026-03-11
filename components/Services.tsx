"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "AI & LLM Integration",
    description:
      "I've spent the last year deep in the AI stack — building RAG systems, integrating GPT-4 and open-source models like Llama and Mistral into real products. Not just API wrappers, but structured pipelines that actually work in production.",
    stack: ["RAG Pipelines", "LangChain", "OpenAI API", "Vector DBs", "Llama / Mistral"],
    accentColor: "#a855f7",
    accentRgb: "168,85,247",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
        <path d="M9 15s1 1 3 1 3-1 3-1" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Full-Stack Product Engineering",
    description:
      "From a rough idea to a deployed product — I handle the full picture. Next.js frontend, clean REST or GraphQL APIs, database design, auth, and everything in between. I care about shipping things that feel fast and polished.",
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma"],
    accentColor: "#ec4899",
    accentRgb: "236,72,153",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="5" rx="1" />
        <rect x="2" y="10" width="20" height="5" rx="1" />
        <rect x="2" y="17" width="20" height="5" rx="1" />
        <line x1="6" y1="5.5" x2="6.01" y2="5.5" strokeWidth="2" />
        <line x1="6" y1="12.5" x2="6.01" y2="12.5" strokeWidth="2" />
        <line x1="6" y1="19.5" x2="6.01" y2="19.5" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Backend Systems & Cloud",
    description:
      "I've built backend infrastructure handling 100k+ concurrent users at VITrendz. I know what breaks at scale and how to fix it before it becomes a problem. FastAPI, Docker, cloud deployments, and async architecture.",
    stack: ["FastAPI", "Docker", "Node.js", "AWS / GCP", "Redis"],
    accentColor: "#6366f1",
    accentRgb: "99,102,241",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="2" />
        <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="2" />
        <line x1="10" y1="6" x2="14" y2="6" />
        <line x1="10" y1="18" x2="14" y2="18" />
      </svg>
    ),
  },
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services" className="py-28 w-full relative -mt-16">
      {/* Bento dot-grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img src="/footer-grid.svg" alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" />
      </div>
      <style>{`
        @keyframes float-3d {
          0%   { transform: perspective(900px) rotateX(-12deg) translateY(0px); }
          50%  { transform: perspective(900px) rotateX(-12deg) translateY(-14px); }
          100% { transform: perspective(900px) rotateX(-12deg) translateY(0px); }
        }

        .service-card {
          position: relative;
          background-color: rgb(10, 10, 12);
          transform-style: preserve-3d;
          animation: float-3d 3s infinite ease-in-out;
          border-radius: 20px;
          transition: box-shadow 0.5s ease, transform 0.5s ease;
          cursor: default;
          overflow: hidden;
        }

        .service-card:hover {
          animation-play-state: paused;
          transform: perspective(900px) rotateX(0deg) translateY(-6px) scale(1.03);
        }

        .service-card .card-number {
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .service-card:hover .card-number {
          opacity: 0.08;
          transform: scale(1.4);
        }

        .service-card .card-icon {
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .service-card:hover .card-icon {
          opacity: 0;
          transform: scale(0.6);
        }

        .service-card .card-title-default {
          transition: opacity 0.3s ease;
        }
        .service-card:hover .card-title-default {
          opacity: 0;
        }

        .service-card .card-content-hover {
          opacity: 0;
          transform: translateY(12px) scale(0.97);
          transition: opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s;
          pointer-events: none;
        }
        .service-card:hover .card-content-hover {
          opacity: 1;
          transform: translateY(0px) scale(1);
          pointer-events: auto;
        }

        .service-card .tag-item {
          transition: opacity 0.3s ease, transform 0.3s ease;
          opacity: 0;
          transform: scale(0.85);
        }
        .service-card:hover .tag-item {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-xs font-mono tracking-[0.35em] text-purple-400 uppercase mb-4">
            How I work
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Things I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                really good at
              </span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs lg:text-right leading-relaxed">
              I don&apos;t take on everything. These are the three areas where I can genuinely move the needle.
            </p>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 lg:gap-14 flex-wrap">
          {services.map((service, index) => {
            const isHovered = hoveredId === service.id;
            const anyHovered = hoveredId !== null;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                animate={{ opacity: anyHovered && !isHovered ? 0.35 : 1 }}
                style={{
                  animationDelay: `${index * 0.6}s`,
                  transition: "opacity 0.4s ease",
                }}
                className="service-card w-[300px] h-[420px] flex flex-col items-center justify-center p-8"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                // Dynamic box-shadow via inline style, toggled by hoveredId
                ref={(el) => {
                  if (el) {
                    el.style.boxShadow = isHovered
                      ? `0 0 60px 4px ${service.accentColor}, inset 0 0 40px rgba(${service.accentRgb},0.15)`
                      : `0 0 40px 0px rgba(${service.accentRgb},0.5), inset 0 0 80px rgba(${service.accentRgb},0.07)`;
                    el.style.border = isHovered
                      ? `1px solid rgba(${service.accentRgb},0.6)`
                      : `1px solid rgba(${service.accentRgb},0.25)`;
                  }
                }}
              >
                {/* Default state — visible when NOT hovered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  {/* Giant faded number */}
                  <span
                    className="card-number absolute text-[140px] font-black font-mono leading-none select-none"
                    style={{ color: service.accentColor, opacity: 0.1 }}
                  >
                    {service.id}
                  </span>

                  {/* SVG Icon */}
                  <div
                    className="card-icon relative z-10 mb-5"
                    style={{ color: service.accentColor }}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="card-title-default relative z-10 text-white font-bold text-center text-lg leading-snug px-2">
                    {service.title}
                  </h3>
                </div>

                {/* Hover state content */}
                <div className="card-content-hover absolute inset-0 flex flex-col justify-between p-6">
                  <div>
                    <p
                      className="text-xs font-mono tracking-widest uppercase mb-3"
                      style={{ color: service.accentColor }}
                    >
                      {service.id} / Service
                    </p>
                    <h3 className="text-white font-bold text-base leading-snug mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-[12px] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.stack.map((tag, i) => (
                      <span
                        key={tag}
                        className="tag-item text-[10px] font-mono px-2.5 py-1 rounded-md border"
                        style={{
                          borderColor: `rgba(${service.accentRgb},0.35)`,
                          color: service.accentColor,
                          transitionDelay: `${i * 0.05}s`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]"
        >
          <div>
            <p className="text-white font-semibold text-base mb-1">Got a project in mind?</p>
            <p className="text-gray-500 text-sm">I usually respond within a few hours.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
          >
            Let&apos;s talk
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
