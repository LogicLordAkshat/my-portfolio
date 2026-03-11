"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const GhostWrapper = styled.div`
  #ghost { position: relative; }

  #red {
    animation: upNDown infinite 0.5s;
    position: relative;
    width: 140px;
    height: 140px;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(14, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-areas:
      "a1  a2  a3  a4  a5  top0  top0  top0  top0  a10 a11 a12 a13 a14"
      "b1  b2  b3  top1 top1 top1 top1 top1 top1 top1 top1 b12 b13 b14"
      "c1 c2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 c13 c14"
      "d1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 d14"
      "e1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 e14"
      "f1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 f14"
      "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
      "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
      "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
      "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
      "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
      "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
      "st0 st0 an4 st1 an7 st2 an10 an10 st3 an13 st4 an16 st5 st5"
      "an1 an2 an3 an5 an6 an8 an9 an9 an11 an12 an14 an15 an17 an18";
  }

  @keyframes upNDown {
    0%, 49%  { transform: translateY(0px); }
    50%, 100% { transform: translateY(-6px); }
  }

  #top0, #top1, #top2, #top3, #top4,
  #st0, #st1, #st2, #st3, #st4, #st5 { background-color: #8B5CF6; }

  /* Glow exactly matching site violet-500 */
  #ghost {
    position: relative;
    filter: drop-shadow(0 0 5px rgba(139,92,246,0.75)) drop-shadow(0 0 14px rgba(139,92,246,0.3));
  }

  #top0 { grid-area: top0; } #top1 { grid-area: top1; }
  #top2 { grid-area: top2; } #top3 { grid-area: top3; }
  #top4 { grid-area: top4; } #st0  { grid-area: st0; }
  #st1  { grid-area: st1; }  #st2  { grid-area: st2; }
  #st3  { grid-area: st3; }  #st4  { grid-area: st4; }
  #st5  { grid-area: st5; }

  #an1  { grid-area: an1;  animation: flicker0 infinite 0.5s; }
  #an18 { grid-area: an18; animation: flicker0 infinite 0.5s; }
  #an2  { grid-area: an2;  animation: flicker1 infinite 0.5s; }
  #an17 { grid-area: an17; animation: flicker1 infinite 0.5s; }
  #an3  { grid-area: an3;  animation: flicker1 infinite 0.5s; }
  #an16 { grid-area: an16; animation: flicker1 infinite 0.5s; }
  #an4  { grid-area: an4;  animation: flicker1 infinite 0.5s; }
  #an15 { grid-area: an15; animation: flicker1 infinite 0.5s; }
  #an6  { grid-area: an6;  animation: flicker0 infinite 0.5s; }
  #an12 { grid-area: an12; animation: flicker0 infinite 0.5s; }
  #an7  { grid-area: an7;  animation: flicker0 infinite 0.5s; }
  #an13 { grid-area: an13; animation: flicker0 infinite 0.5s; }
  #an9  { grid-area: an9;  animation: flicker1 infinite 0.5s; }
  #an10 { grid-area: an10; animation: flicker1 infinite 0.5s; }
  #an8  { grid-area: an8;  animation: flicker0 infinite 0.5s; }
  #an11 { grid-area: an11; animation: flicker0 infinite 0.5s; }
  #an5  { grid-area: an5; } #an14 { grid-area: an14; }

  @keyframes flicker0 {
    0%, 49%  { background-color: #8B5CF6; }
    50%, 100% { background-color: transparent; }
  }
  @keyframes flicker1 {
    0%, 49%  { background-color: transparent; }
    50%, 100% { background-color: #6D28D9; }
  }

  #eye {
    width: 40px; height: 50px;
    position: absolute; top: 30px; left: 10px;
  }
  #eye::before {
    content: ""; background-color: white;
    width: 20px; height: 50px;
    transform: translateX(10px);
    display: block; position: absolute;
  }
  #eye::after {
    content: ""; background-color: white;
    width: 40px; height: 30px;
    transform: translateY(10px);
    display: block; position: absolute;
  }
  #eye1 {
    width: 40px; height: 50px;
    position: absolute; top: 30px; right: 30px;
  }
  #eye1::before {
    content: ""; background-color: white;
    width: 20px; height: 50px;
    transform: translateX(10px);
    display: block; position: absolute;
  }
  #eye1::after {
    content: ""; background-color: white;
    width: 40px; height: 30px;
    transform: translateY(10px);
    display: block; position: absolute;
  }

  #pupil {
    width: 20px; height: 20px;
    background-color: #0f0a1e;
    position: absolute; top: 50px; left: 10px;
    z-index: 1; animation: eyesMovement infinite 3s;
  }
  #pupil1 {
    width: 20px; height: 20px;
    background-color: #0f0a1e;
    position: absolute; top: 50px; right: 50px;
    z-index: 1; animation: eyesMovement infinite 3s;
  }
  @keyframes eyesMovement {
    0%, 49%  { transform: translateX(0px); }
    50%, 99% { transform: translateX(10px); }
    100%     { transform: translateX(0px); }
  }

  #shadow {
    background: rgba(139,92,246,0.18);
    width: 120px; height: 40px;
    position: absolute;
    border-radius: 50%;
    transform: rotateX(80deg);
    filter: blur(10px);
    top: 90%;
    animation: shadowMovement infinite 0.5s;
  }
  @keyframes shadowMovement {
    0%, 49%  { opacity: 0.4; }
    50%, 100% { opacity: 0.1; }
  }
`;

export default function PixelGhost({ delay = 1.2 }: { delay?: number }) {
  const [config, setConfig] = useState({ scale: 0.85, top: "1%", left: "-7%" });

  useEffect(() => {
    const update = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth;
      if (w < 480) {
        setConfig({ scale: 0.35, top: "1%", left: "-2%" });
      } else if (w < 768) {
        setConfig({ scale: 0.55, top: "1%", left: "-3%" });
      } else if (w < 1024) {
        setConfig({ scale: 0.75, top: "1%", left: "-5%" });
      } else {
        setConfig({ scale: 0.85, top: "1%", left: "-7%" });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
      animate={{ opacity: 1, scale: config.scale, rotate: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.34, 1.56, 0.64, 1] }}
      style={{
        position: "absolute",
        top: config.top,
        left: config.left,
        transformOrigin: "top left",
        zIndex: 20,
        pointerEvents: "none",
      }}
    >
      <GhostWrapper>
        <div id="ghost">
          <div id="red">
            <div id="pupil" /><div id="pupil1" />
            <div id="eye" /><div id="eye1" />
            <div id="top0" /><div id="top1" /><div id="top2" />
            <div id="top3" /><div id="top4" />
            <div id="st0" /><div id="st1" /><div id="st2" />
            <div id="st3" /><div id="st4" /><div id="st5" />
            <div id="an1" /><div id="an2" /><div id="an3" />
            <div id="an4" /><div id="an5" /><div id="an6" />
            <div id="an7" /><div id="an8" /><div id="an9" />
            <div id="an10" /><div id="an11" /><div id="an12" />
            <div id="an13" /><div id="an14" /><div id="an15" />
            <div id="an16" /><div id="an17" /><div id="an18" />
          </div>
          <div id="shadow" />
        </div>
      </GhostWrapper>
    </motion.div>
  );
}

