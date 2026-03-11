"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Exact mouse tracking (Zero lag)
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  // Buttery smooth follower tracking (No jerky rotations, just pure fluid lag)
  const springConfig1 = { damping: 25, stiffness: 400, mass: 0.5 };
  const springConfig2 = { damping: 20, stiffness: 300, mass: 0.8 };
  
  const ghost1X = useSpring(mx, springConfig1);
  const ghost1Y = useSpring(my, springConfig1);
  
  const ghost2X = useSpring(mx, springConfig2);
  const ghost2Y = useSpring(my, springConfig2);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };

    const onDown = () => setIsClicked(true);
    const onUp   = () => setIsClicked(false);

    const onOver = (e: MouseEvent) => {
      const hit = (e.target as Element).closest(
        "a, button, [role='button'], [role='link'], select, label, .cursor-pointer"
      );
      setIsHovered(!!hit);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, {   passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
    };
  }, [mx, my]);

  // The PERFECT, symmetrical "Paper Plane" Arrow shape.
  // This is fundamentally unbreakable and beautiful.
  // Based on a flawless 24x24 grid.
  const PERFECT_ARROW = "M 3 3 L 10.07 19.97 L 13.3 13.3 L 19.97 10.07 Z";

  return (
    <>
      <style>{`*, *::before, *::after { cursor: none !important; }`}</style>

      {/* ── GHOST 2 (Smoothest, light pink trail) ── */}
      <motion.svg
        width={42} height={42} viewBox="0 0 24 24"
        style={{
          position: "fixed", top: 0, left: 0,
          pointerEvents: "none", zIndex: 99997,
          x: ghost2X, y: ghost2Y,
          transformOrigin: "4px 4px",
          filter: "drop-shadow(0px 0px 8px rgba(236,72,153,0.6))"
        }}
        animate={{
          scale: isClicked ? 0.85 : isHovered ? 1.05 : 1,
          opacity: isHovered ? 0 : 0.35,
        }}
        transition={{ duration: 0.15 }}
      >
        <path 
          d={PERFECT_ARROW} 
          fill="none" 
          stroke="#EC4899" 
          strokeWidth="1.8" 
          strokeLinejoin="round" 
          strokeLinecap="round" 
        />
      </motion.svg>

      {/* ── GHOST 1 (Faster, bright purple trail) ── */}
      <motion.svg
        width={42} height={42} viewBox="0 0 24 24"
        style={{
          position: "fixed", top: 0, left: 0,
          pointerEvents: "none", zIndex: 99998,
          x: ghost1X, y: ghost1Y,
          transformOrigin: "4px 4px",
          filter: "drop-shadow(0px 0px 6px rgba(139,92,246,0.8))"
        }}
        animate={{
          scale: isClicked ? 0.85 : isHovered ? 1.1 : 1,
          opacity: isHovered ? 0 : 0.5,
        }}
        transition={{ duration: 0.15 }}
      >
        <path 
          d={PERFECT_ARROW} 
          fill="none" 
          stroke="#8B5CF6" 
          strokeWidth="1.8" 
          strokeLinejoin="round" 
          strokeLinecap="round" 
        />
      </motion.svg>

      {/* ── MAIN POINTER (Zero lag, extremely crisp) ── */}
      <motion.svg
        width={42} height={42} viewBox="0 0 24 24"
        style={{
          position: "fixed", top: 0, left: 0,
          pointerEvents: "none", zIndex: 99999,
          x: mx, y: my,
          transformOrigin: "4px 4px",
          filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.6))"
        }}
        animate={{
          scale: isClicked ? 0.85 : isHovered ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      >
        <defs>
          <linearGradient id="brand-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>

        <motion.path
          d={PERFECT_ARROW}
          strokeLinejoin="round"
          strokeLinecap="round"
          animate={{
            fill: isHovered ? "url(#brand-grad)" : "transparent",
            stroke: isHovered ? "#ffffff" : "#A78BFA",
            strokeWidth: isHovered ? 1.5 : 2.5,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.svg>
    </>
  );
}
