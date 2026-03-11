"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data";

const StarRating = () => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const avatarColors = [
  "from-purple-600 to-violet-700",
  "from-pink-600 to-rose-700",
  "from-indigo-600 to-blue-700",
  "from-violet-600 to-purple-700",
  "from-fuchsia-600 to-pink-700",
  "from-blue-600 to-indigo-700",
];

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

interface TestimonialCardProps {
  item: { quote: string; name: string; title: string };
  index: number;
}

const accentColors = [
  { border: "from-purple-500/60 via-purple-400/20 to-transparent", glow: "rgba(168,85,247,0.12)", ring: "shadow-purple-500/30" },
  { border: "from-pink-500/60 via-pink-400/20 to-transparent",   glow: "rgba(236,72,153,0.12)", ring: "shadow-pink-500/30" },
  { border: "from-violet-500/60 via-violet-400/20 to-transparent", glow: "rgba(139,92,246,0.12)", ring: "shadow-violet-500/30" },
];

const TestimonialCard = ({ item, index }: TestimonialCardProps) => {
  const accent = accentColors[index % accentColors.length];
  return (
    <div
      className={`flex-shrink-0 w-[400px] md:w-[460px] mx-3 select-none p-[1px] rounded-2xl bg-gradient-to-br ${accent.border}`}
      style={{ boxShadow: `0 0 24px ${accent.glow}` }}
    >
      <div className="flex flex-col gap-4 p-6 rounded-2xl bg-[#0d0d0f] relative overflow-hidden">
        {/* Inner top highlight */}
        <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Author row — at top */}
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center flex-shrink-0 ring-2 ring-white/5`}
          >
            <span className="text-white text-xs font-bold tracking-wide">{getInitials(item.name)}</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-white text-sm font-semibold truncate">{item.name}</p>
            <p className="text-gray-500 text-xs mt-0.5 truncate">{item.title}</p>
          </div>
          {/* Verified tick */}
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/15 border border-purple-500/25 flex items-center justify-center">
            <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        {/* Quote */}
        <div className="relative">
          {/* Decorative quote mark */}
          <span
            className="absolute -top-1 -left-0.5 text-5xl font-serif leading-none select-none pointer-events-none"
            style={{ color: accent.glow.replace("0.12", "0.35") }}
          >
            &ldquo;
          </span>
          <p className="text-gray-300 text-sm leading-relaxed pl-6">
            {item.quote.length > 200 ? item.quote.slice(0, 200) + "…" : item.quote}
          </p>
        </div>

        {/* Stars */}
        <div className="flex items-center justify-between mt-auto pt-1">
          <StarRating />
          <span className="text-[10px] font-mono text-gray-600 tracking-wider">via LinkedIn</span>
        </div>
      </div>
    </div>
  );
};

// Marquee row — truly full-width using relative positioning
const MarqueeRow = ({
  items,
  direction = "left",
  speed = 40,
}: {
  items: typeof testimonials;
  direction?: "left" | "right";
  speed?: number;
}) => {
  const duplicated = [...items, ...items, ...items];
  const xFrom = direction === "left" ? "0%" : "-33.33%";
  const xTo   = direction === "left" ? "-33.33%" : "0%";

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex items-stretch"
        animate={{ x: [xFrom, xTo] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        style={{ willChange: "transform" }}
      >
        {duplicated.map((item, i) => (
          <TestimonialCard key={i} item={item} index={i % items.length} />
        ))}
      </motion.div>
    </div>
  );
};

const Clients = () => {
  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5);

  return (
    <section
      id="testimonials"
      className="relative py-24 -mt-24 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-purple-700/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-pink-700/6 rounded-full blur-[120px] pointer-events-none" />

      {/* Header — re-padded to align with page */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-mono tracking-[0.35em] text-purple-400 uppercase mb-4">
            Social proof
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              What people{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                say about me
              </span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs lg:text-right leading-relaxed">
              From founders to engineering managers — across timezones and industries.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="mb-4">
        <MarqueeRow items={row1} direction="left" speed={45} />
      </div>

      {/* Row 2 — scrolls right */}
      <MarqueeRow items={row2} direction="right" speed={38} />
    </section>
  );
};

export default Clients;
