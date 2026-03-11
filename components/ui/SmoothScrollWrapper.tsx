"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  threshold?: number;
  y?: number;
  x?: number;
  scale?: number;
  rotate?: number;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 0.8,
  threshold = 0.15,
  y = 30,
  x = 30,
  scale = 0.95,
  rotate = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "0px 0px -100px 0px" // Start animation slightly before element comes into view
  });

  const getInitialState = () => {
    switch (animation) {
      case 'fadeUp':
        return { opacity: 0, y: y, scale: scale };
      case 'fadeIn':
        return { opacity: 0, scale: scale };
      case 'slideLeft':
        return { opacity: 0, x: -x, scale: scale };
      case 'slideRight':
        return { opacity: 0, x: x, scale: scale };
      case 'scale':
        return { opacity: 0, scale: 0.9 };
      case 'rotate':
        return { opacity: 0, scale: scale, rotate: -5 };
      default:
        return { opacity: 0, y: y, scale: scale };
    }
  };

  const getAnimateState = () => {
    switch (animation) {
      case 'fadeUp':
        return { opacity: 1, y: 0, scale: 1 };
      case 'fadeIn':
        return { opacity: 1, scale: 1 };
      case 'slideLeft':
        return { opacity: 1, x: 0, scale: 1 };
      case 'slideRight':
        return { opacity: 1, x: 0, scale: 1 };
      case 'scale':
        return { opacity: 1, scale: 1 };
      case 'rotate':
        return { opacity: 1, scale: 1, rotate: 0 };
      default:
        return { opacity: 1, y: 0, scale: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialState()}
      animate={isInView ? getAnimateState() : getInitialState()}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Smooth cubic-bezier easing
        opacity: { duration: duration * 0.6 }, // Faster opacity transition
        scale: { duration: duration * 0.8 }, // Faster scale transition
      }}
      whileInView={{ 
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScrollWrapper;
