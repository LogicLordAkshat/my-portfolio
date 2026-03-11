"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";

export const SimpleNavbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (link: string) => {
    // Check if it's an anchor link (starts with #)
    if (link.startsWith("#")) {
      // If we're not on the home page, navigate there first
      if (router.pathname !== "/") {
        router.push("/" + link);
      } else {
        // Scroll to section on current page
        const element = document.querySelector(link);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Navigate to the page
      router.push(link);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className={cn(
          "group relative flex max-w-fit md:min-w-[50vw] lg:min-w-fit fixed z-[5000] top-3 sm:top-4 inset-x-0 mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg items-center justify-center space-x-3 sm:space-x-4 md:space-x-5",
          className
        )}
        style={{
          backdropFilter: "blur(20px) saturate(200%)",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          borderRadius: "8px",
          border: "1px solid rgba(139, 92, 246, 0.4)",
          boxShadow: "0 15px 35px -12px rgba(139, 92, 246, 0.25), 0 0 0 1px rgba(139, 92, 246, 0.1), 0 0 15px rgba(139, 92, 246, 0.1)",
        }}
      >
        {/* Primary border glow - Enhanced with better colors and blur */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/40 via-fuchsia-500/40 to-violet-500/40 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md" />
        
        {/* Secondary border glow - Subtle inner glow */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-400/30 via-fuchsia-400/30 to-violet-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
        
        {/* Animated border ring - Moves on hover */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100" />
        
        {navItems.map((navItem, idx) => (
          <motion.button
            key={`nav-${idx}`}
            onClick={() => handleNavClick(navItem.link)}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "relative items-center flex space-x-1.5 sm:space-x-2 text-white hover:text-violet-200 transition-all duration-300 cursor-pointer group/nav px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md overflow-hidden"
            )}
          >
            {/* Button background glow - Enhanced gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/25 via-fuchsia-500/25 to-violet-500/25 opacity-0 group-hover/nav:opacity-100 transition-all duration-400 scale-95 group-hover/nav:scale-100 rounded-md" />
            
            {/* Button border glow - Animated border */}
            <div className="absolute inset-0 rounded-md border border-transparent group-hover/nav:border-violet-400/40 group-hover/nav:border-fuchsia-400/40 transition-all duration-300" />
            
            {/* Inner button highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400/10 via-fuchsia-400/10 to-violet-400/10 opacity-0 group-hover/nav:opacity-100 transition-all duration-300 rounded-md" />
            
            <span className="relative z-10 block sm:hidden text-violet-300 group-hover/nav:text-violet-200 transition-colors duration-300 text-xs">
              {navItem.icon}
            </span>
            <span className="relative z-10 text-xs sm:text-sm font-medium tracking-wide group-hover/nav:tracking-wider transition-all duration-300 text-white group-hover/nav:text-violet-100">
              {navItem.name}
            </span>
            
            {/* Enhanced underline effect - Better gradient and animation */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 group-hover/nav:w-full transition-all duration-500 ease-out rounded-full shadow-lg shadow-violet-400/50" />
            
            {/* Top highlight line */}
            <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 group-hover/nav:w-full transition-all duration-500 ease-out delay-100 rounded-full shadow-lg shadow-violet-400/50" />
          </motion.button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
