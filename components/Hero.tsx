import { FaLocationArrow, FaDownload } from "react-icons/fa6";
import AnimatedButton from "./ui/AnimatedButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { motion } from "framer-motion";
import { Scales } from "./ui/scales";
import dynamic from "next/dynamic";

const PixelGhost = dynamic(() => import("./PixelGhost"), { ssr: false });

const Hero = () => {
  return (
    <div id="about" className="pb-12 pt-24 hero-container">
      {/* REMOVED: New Header "Akshat" with Animation and Effect */}
      {/* The motion.div containing the Akshat header has been removed */}

      {/* Purple and Pink Spotlight Effects */}
      <div>
        <Spotlight
          className="-top-20 sm:-top-32 md:-top-40 -left-5 sm:-left-8 md:-left-32 h-screen hero-spotlight-1"
          fill="#8B5CF6" // Violet-500 (Purple)
        />
        <Spotlight
          className="h-[60vh] sm:h-[70vh] md:h-[80vh] w-[40vw] sm:w-[45vw] md:w-[50vw] top-5 sm:top-8 md:top-10 left-full hero-spotlight-2"
          fill="#EC4899" // MODIFIED: Changed to Pink-500 for a pink effect
        />
        <Spotlight
          className="left-40 sm:left-60 md:left-80 top-20 sm:top-24 md:top-28 h-[60vh] sm:h-[70vh] md:h-[80vh] w-[40vw] sm:w-[45vw] md:w-[50vw] hero-spotlight-3"
          fill="#4C1D95" // Violet-900 (Deep Purple)
        />
      </div>

      {/* Background with Grid Image - REFERENCED FROM FOOTER */}
      {/* This div now acts as the container for the grid image, similar to footer */}
      <div className="h-[80vh] w-full absolute top-0 left-0 flex items-center justify-center z-0 overflow-hidden">
        <Image
          src="/footer-grid.svg" // Path to your grid SVG
          alt="background grid"
          fill // updated prop, no value
          style={{ objectFit: "cover" }} // new way to handle objectFit
          className="opacity-60 mix-blend-screen" // Adjusted opacity for visibility
          priority // Prioritize loading for LCP
        />
        {/* Radial Gradient for Fade Effect - Kept for consistency with original Hero */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Content Section - Adjusted for left alignment and picture box */}
      {/* This container uses flexbox to arrange items. On small screens (default), it's a column (flex-col)
          with items centered (items-center) and content centered (justify-center).
          On medium screens and up (md:), it becomes a row (md:flex-row) with items aligned to the start (md:items-start)
          and space distributed between them (md:justify-between). */}
      <div className="flex justify-center relative my-16 z-10 hero-content">
        <div className="max-w-[89vw] md:max-w-5xl lg:max-w-[85vw] w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-10">
          {" "}
          {/* MODIFIED: Changed gap-8 to gap-4 for mobile */}
          {/* Text and Buttons Column */}
          {/* This column also uses flexbox to stack its contents. On mobile, items are centered (items-center)
              and text is centered (text-center). On medium screens and up, items align to the start (md:items-start)
              and text aligns to the left (md:text-left). */}
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left hero-text-column">
            {/* Minimalist Professional Status Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-300 tracking-wide uppercase">
                  Available for Hire
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <span className="text-xs sm:text-sm font-medium text-gray-300 tracking-wide uppercase">
                  Remote Worldwide
                </span>
              </div>
            </motion.div>

            {/* Name - Combined into one TextGenerateEffect for unified shade effect */}
            <TextGenerateEffect
              words="Akshat Srivastava"
              className="text-[50px] md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg hero-name"
            />

            {/* Title/Profession - Combined into one TextGenerateEffect for unified animation */}
            <div className="mt-2 whitespace-nowrap">
              {" "}
              {/* Removed flex-wrap, justify-center/start as it's now one block */}
              <TextGenerateEffect
                words="Software Development Engineer (SDE) | Full Stack & AI Engineer"
                className="text-[18px] md:text-xl lg:text-2xl text-white font-semibold hero-title" // Removed mr-1 as it's one string
              />
            </div>

            {/* Personal Description */}
            <p className="text-center md:text-left text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-2xl font-light bg-gradient-to-r from-[#E0BBE4] via-[#FFC0CB] to-[#E0BBE4] bg-clip-text text-transparent leading-relaxed hero-description">
              AI Full Stack Software Engineer with experience building scalable SaaS and AI-driven platforms. Proven track record delivering production systems serving 100k+ users at VITrendz, optimizing performance, and integrating LLM workflows, RAG, and cloud infrastructure. Strong in system design, full-stack development, and end-to-end product delivery.
            </p>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto justify-center md:justify-start items-center hero-buttons">
              {/* Book a Call Button - Prominent CTA */}
              <a href="#contact">
                <AnimatedButton variant="primary" size="small">
                  Book a Call
                </AnimatedButton>
              </a>

              {/* View Projects Button */}
              <a href="#projects">
                <AnimatedButton variant="secondary" size="small">
                  View Projects
                </AnimatedButton>
              </a>

              {/* My Resume Button */}
              <a href="/resume.pdf" download="resume.pdf">
                <AnimatedButton variant="secondary" size="small">
                  Receive Resume
                </AnimatedButton>
              </a>
            </div>
          </div>
          {/* Picture Box - CIRCULAR WITH SPINNING RING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center order-1 lg:order-2 flex-shrink-0 mt-10 md:mt-0 -ml-8"
          >
            {/* Ambient background glow */}
            <div className="absolute w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-violet-600 opacity-20 blur-3xl" />

            {/* Spinning gradient ring */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #8B5CF6, #EC4899, #8B5CF6, #6D28D9, #EC4899, #8B5CF6)",
                  padding: "3px",
                }}
              >
                <div className="w-full h-full rounded-full bg-black" />
              </motion.div>

              {/* Static inner ring for depth */}
              <div
                className="absolute inset-[3px] rounded-full"
                style={{ background: "conic-gradient(from 180deg, #8B5CF6, #EC4899, #6D28D9)" }}
              >
                <div className="absolute inset-[2px] rounded-full bg-[#0a0a0a]" />
              </div>

              {/* Actual image */}
              <div className="absolute inset-[5px] rounded-full overflow-hidden">
                <Image
                  src="/placeholder-profile.jpg"
                  alt="Akshat Srivastava - AI Full Stack Engineer"
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-110 transition-transform duration-700"
                  priority
                />
                {/* Subtle inner vignette */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] pointer-events-none" />
              </div>

              {/* 👻 Pixel ghost — top-left of the circle border */}
              <PixelGhost delay={1.4} />

              {/* Floating tech badges around the circle */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -left-14 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-black/80 border border-purple-500/40 rounded-full backdrop-blur-md shadow-[0_0_12px_rgba(139,92,246,0.4)] whitespace-nowrap"
              >
                <span className="text-purple-400 text-sm">⚛</span>
                <span className="text-xs font-semibold text-white">React</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -right-16 top-1/3 flex items-center gap-1.5 px-3 py-1.5 bg-black/80 border border-pink-500/40 rounded-full backdrop-blur-md shadow-[0_0_12px_rgba(236,72,153,0.4)] whitespace-nowrap"
              >
                <span className="text-green-400 text-sm">🐍</span>
                <span className="text-xs font-semibold text-white">Python</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-black/80 border border-violet-500/40 rounded-full backdrop-blur-md shadow-[0_0_12px_rgba(139,92,246,0.4)] whitespace-nowrap"
              >
                <span className="text-white text-sm font-bold">N</span>
                <span className="text-xs font-semibold text-white">Next.js</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-black/80 border border-pink-500/40 rounded-full backdrop-blur-md shadow-[0_0_12px_rgba(236,72,153,0.3)] whitespace-nowrap"
              >
                <span className="text-teal-400 text-sm">⚡</span>
                <span className="text-xs font-semibold text-white">FastAPI</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
