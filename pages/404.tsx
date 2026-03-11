"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";

const Galaxy = dynamic(() => import("../components/Galaxy"), { ssr: false });

/* ─────────────────────────────────────────
   Styled ghost (converted from the original)
───────────────────────────────────────────*/
const GhostWrapper = styled.div`
  #ghost {
    position: relative;
    scale: 1;
  }

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
    0%, 49% { transform: translateY(0px); }
    50%, 100% { transform: translateY(-10px); }
  }

  #top0, #top1, #top2, #top3, #top4,
  #st0, #st1, #st2, #st3, #st4, #st5 {
    background-color: #a855f7;
  }
  #top0 { grid-area: top0; }
  #top1 { grid-area: top1; }
  #top2 { grid-area: top2; }
  #top3 { grid-area: top3; }
  #top4 { grid-area: top4; }
  #st0 { grid-area: st0; }
  #st1 { grid-area: st1; }
  #st2 { grid-area: st2; }
  #st3 { grid-area: st3; }
  #st4 { grid-area: st4; }
  #st5 { grid-area: st5; }

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
  #an5  { grid-area: an5; }
  #an14 { grid-area: an14; }

  @keyframes flicker0 {
    0%, 49%  { background-color: #a855f7; }
    50%, 100% { background-color: transparent; }
  }
  @keyframes flicker1 {
    0%, 49%  { background-color: transparent; }
    50%, 100% { background-color: #ec4899; }
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
    background-color: #6366f1;
    position: absolute; top: 50px; left: 10px;
    z-index: 1;
    animation: eyesMovement infinite 3s;
  }
  #pupil1 {
    width: 20px; height: 20px;
    background-color: #6366f1;
    position: absolute; top: 50px; right: 50px;
    z-index: 1;
    animation: eyesMovement infinite 3s;
  }
  @keyframes eyesMovement {
    0%, 49%  { transform: translateX(0px); }
    50%, 99% { transform: translateX(10px); }
    100%     { transform: translateX(0px); }
  }

  #shadow {
    background-color: rgba(168,85,247,0.3);
    width: 140px; height: 140px;
    position: absolute;
    border-radius: 50%;
    transform: rotateX(80deg);
    filter: blur(20px);
    top: 80%;
    animation: shadowMovement infinite 0.5s;
  }
  @keyframes shadowMovement {
    0%, 49%  { opacity: 0.5; }
    50%, 100% { opacity: 0.15; }
  }
`;

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 — Page Not Found | Akshat Srivastava</title>
        <meta name="description" content="Looks like this page ghosted you." />
      </Head>

      <div className="fixed inset-0 bg-[#030303] flex flex-col items-center justify-center overflow-hidden">

        {/* Galaxy bg */}
        <div className="absolute inset-0 pointer-events-none">
          <Galaxy
            mouseRepulsion
            mouseInteraction
            density={0.7}
            glowIntensity={0.12}
            saturation={0.2}
            hueShift={260}
            twinkleIntensity={0.3}
            rotationSpeed={0.02}
            starSpeed={0.4}
            speed={0.8}
            transparent
          />
        </div>

        {/* Ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[120px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">

          {/* 404 badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono tracking-[0.3em] uppercase"
          >
            Error 404
          </motion.div>

          {/* Ghost */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
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

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2"
          >
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              You&apos;ve been{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ghosted
              </span>
            </h1>
            <p className="text-gray-500 text-sm font-mono max-w-sm mx-auto leading-relaxed">
              This page doesn&apos;t exist — or maybe it does, and it&apos;s just haunting another dimension.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow duration-300"
              >
                ← Back to reality
              </motion.button>
            </Link>
            <Link href="/#projects">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 text-sm font-mono hover:text-white hover:border-white/20 transition-all duration-200"
              >
                View projects
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom mono label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-6 text-[10px] font-mono text-white/20 tracking-widest uppercase"
        >
          akshat srivastava · portfolio · 2025
        </motion.div>
      </div>
    </>
  );
}
