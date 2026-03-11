"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface InfiniteMovingCardsProps {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  itemClass?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = false,
  className,
  itemClass = "",
}: InfiniteMovingCardsProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const durations = {
        fast: "20s",
        normal: "40s",
        slow: "80s"
      };
      containerRef.current.style.setProperty("--animation-duration", durations[speed]);
    }
  };

  return (
  <div
    ref={containerRef}
    className={cn(
      "scroller relative z-20 w-full overflow-hidden",
      "[mask-image:linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)]",
      className
    )}
  >
    {/* Left & right gradient blur overlays */}
    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-30 pointer-events-none backdrop-blur-sm" />
    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-30 pointer-events-none backdrop-blur-sm" />

    <ul
      ref={scrollerRef}
      className={cn(
        "flex min-w-fit shrink-0 gap-10 py-4 px-8 w-max flex-nowrap",
        start && "animate-scroll",
        pauseOnHover && "hover:[animation-play-state:paused]"
      )}
    >
      {items.map((item, idx) => (
        <li
          key={idx}
          className={cn(
            "relative rounded-2xl border flex-shrink-0 p-5 md:p-10 w-[90vw] md:w-[60vw]",
            "border-purple-500/[0.9] hover:border-purple-400 transition-all duration-300",
            itemClass
          )}
          style={{ backgroundColor: "#000000" }}
        >
          <blockquote>
            <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-purple-100 font-normal">
              {item.quote}
            </span>
            <div className="relative z-20 mt-6 flex items-center">
              <div className="me-3">
                <img
                  src="/profile.svg"
                  alt="profile"
                  className="w-10 h-10 rounded-full filter brightness-0 invert-[0.7]"
                />
              </div>
              <span className="flex flex-col gap-1">
                <span className="text-xl font-bold text-purple-50">{item.name}</span>
                <span className="text-sm text-purple-200">{item.title}</span>
              </span>
            </div>
          </blockquote>
        </li>
      ))}
    </ul>
  </div>
);
}
