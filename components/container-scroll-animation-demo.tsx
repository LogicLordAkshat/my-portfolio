"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Building tools, products, and clean UI with code.
              <br />
              <span className="text-4xl md:text-[6.5rem] font-bold mt-1 leading-none bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                Explore My Work
              </span>
            </h1>
          </>
        }
      >
        <a
          href="https://github.com/LogicLordAkshat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <img
            src={`/gitpic.png`}
            alt="hero"
            height={800}
            width={1500}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </a>
      </ContainerScroll>
    </div>
  );
}
