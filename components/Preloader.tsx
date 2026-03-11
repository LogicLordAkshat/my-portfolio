"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Galaxy = dynamic(() => import("./Galaxy"), { ssr: false });

// Smooth ease curve
const ease = [0.25, 0.1, 0.25, 1] as const;
const easeOut = [0.0, 0.0, 0.2, 1] as const;

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [done, setDone] = useState(false);
  const motionCount = useMotionValue(0);
  const progressScale = useTransform(motionCount, [0, 100], [0, 1]);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    // Animate count 0→100 with easeInOut over 2.8s
    const controls = animate(motionCount, 100, {
      duration: 2.8,
      ease: "easeInOut",
      onUpdate: (v) => setDisplayCount(Math.round(v)),
      onComplete: () => {
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 1100);
        }, 350);
      },
    });
    return () => controls.stop();
  }, [onComplete, motionCount]);

  return (
    <AnimatePresence mode="wait">
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#030303] flex flex-col overflow-hidden"
        >
          {/* Galaxy starfield background */}
          <div className="absolute inset-0 pointer-events-none">
            <Galaxy
              mouseRepulsion={false}
              mouseInteraction={false}
              density={0.6}
              glowIntensity={0.1}
              saturation={0.15}
              hueShift={260}
              twinkleIntensity={0.25}
              rotationSpeed={0.03}
              starSpeed={0.4}
              speed={0.8}
              transparent
            />
          </div>

          {/* Center glow */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          >
            <div className="w-[600px] h-[600px] rounded-full bg-purple-700/15 blur-[130px]" />
          </motion.div>

          {/* Top bar */}
          <div className="relative z-10 flex items-center justify-between px-8 pt-8">
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="text-xs font-mono tracking-[0.25em] text-white/30 uppercase"
            >
              Portfolio
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease }}
              className="text-xs font-mono tracking-[0.2em] text-white/30"
            >
              2025
            </motion.span>
          </div>

          {/* Center content */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8">

            {/* Top line pair */}
            <div className="relative w-full flex items-center justify-center">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, delay: 0.4, ease }}
                className="absolute left-0 right-1/2 h-[1px] bg-gradient-to-l from-white/20 to-transparent origin-right"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, delay: 0.4, ease }}
                className="absolute left-1/2 right-0 h-[1px] bg-gradient-to-r from-white/20 to-transparent origin-left"
              />
            </div>

            {/* Name reveal */}
            <div className="overflow-hidden py-2">
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.6, ease }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white text-center"
                style={{ letterSpacing: "-0.03em" }}
              >
                Akshat
                <motion.span
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
                  className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  .
                </motion.span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.9, ease }}
                className="text-xs md:text-sm tracking-[0.4em] text-white/40 uppercase text-center font-medium"
              >
                AI · Full Stack · Engineer
              </motion.p>
            </div>

            {/* Bottom line pair */}
            <div className="relative w-full flex items-center justify-center">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, delay: 0.7, ease }}
                className="absolute left-0 right-1/2 h-[1px] bg-gradient-to-l from-white/20 to-transparent origin-right"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, delay: 0.7, ease }}
                className="absolute left-1/2 right-0 h-[1px] bg-gradient-to-r from-white/20 to-transparent origin-left"
              />
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-10 px-8 pb-8 flex flex-col gap-3">
            {/* Progress bar */}
            <div className="w-full h-[1px] bg-white/8 overflow-hidden rounded-full">
              <motion.div
                style={{ scaleX: progressScale }}
                className="h-full w-full bg-gradient-to-r from-purple-500 via-pink-400 to-purple-400 origin-left"
              />
            </div>

            <div className="flex items-center justify-between">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease }}
                className="text-xs font-mono text-white/30 tracking-widest uppercase"
              >
                Loading
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease }}
                className="text-xs font-mono text-white/50 tabular-nums"
              >
                {String(displayCount).padStart(3, "0")}
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
