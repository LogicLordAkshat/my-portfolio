"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { techStack } from "../data";

// Generate orbit positions for tech stack items
function generateOrbitPositions(count: number, radius: number) {
  const step = 360 / count;
  const positions = [];

  for (let i = 0; i < count; i++) {
    const angle = (step * i * Math.PI) / 180;
    const x = radius + radius * Math.cos(angle) - 28;
    const y = radius + radius * Math.sin(angle) - 28;
    positions.push({ top: `${y.toFixed(2)}px`, left: `${x.toFixed(2)}px` });
  }

  return positions;
}

// Orbit ring component with enhanced animations
const OrbitRing = ({
  items,
  radius,
  spinClass,
  zIndex,
  delay = 0,
}: {
  items: { name: string; img: string }[];
  radius: number;
  spinClass: string;
  zIndex: number;
  delay?: number;
}) => {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const pos = generateOrbitPositions(items.length, radius);
    setPositions(pos);
  }, [items.length, radius]);

  if (!positions.length) return null;

  return (
    <motion.div
      className={`orbit-ring ${spinClass}`}
      style={{ 
        width: radius * 2, 
        height: radius * 2,
        zIndex: zIndex
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.02 }}
    >
      {items.map((item, i) => (
        <motion.img
          key={item.name}
          src={item.img}
          alt={item.name}
          title={item.name}
          className="orbit-icon"
          style={{
            position: "absolute",
            top: positions[i].top,
            left: positions[i].left,
            zIndex: zIndex + 1,
          }}
          initial={{ opacity: 0, scale: 0.3, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            delay: delay + (i * 0.08), 
            duration: 0.6,
            ease: "easeOut"
          }}
          whileHover={{
            scale: 1.2,
            boxShadow: "0 0 25px rgba(236, 72, 153, 0.7)",
            zIndex: 100,
            transition: { duration: 0.2 }
          }}
        />
      ))}
    </motion.div>
  );
};

export default function TechStackOrbit() {
  const orbit1 = techStack.slice(0, 6);
  const orbit2 = techStack.slice(6, 13);
  const orbit3 = techStack.slice(13);

  return (
    <div className="orbit-container h-[600px] sm:h-[700px] md:h-[720px] lg:h-[800px]">
      {/* Tech Stack Title - Centered in the middle of orbits */}
      <motion.div 
        className="absolute text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        style={{
          textAlign: 'center',
          whiteSpace: 'nowrap'
        }}
      >
        Tech Stack
      </motion.div>

      {/* Orbit container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Orbit rings with staggered animations */}
        <OrbitRing items={orbit1} radius={180} spinClass="animate-spin-slow" zIndex={10} delay={0.1} />
        <OrbitRing items={orbit2} radius={280} spinClass="animate-spin-slower" zIndex={20} delay={0.3} />
        <OrbitRing items={orbit3} radius={380} spinClass="animate-spin-slowest" zIndex={30} delay={0.5} />
      </div>
    </div>
  );
}
