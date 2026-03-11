import React from "react";
import { techStack, navItems } from "../data";

import Hero from "../components/Hero";
import HeroScrollDemo from "../components/container-scroll-animation-demo";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import Approach from "../components/Approach";
import Experience from "../components/Experience";
import RecentProjects from "../components/RecentProjects";
import Achievements from "../components/Achievements";
import BlogPreview from "../components/BlogPreview";
import { SimpleNavbar } from "../components/ui/SimpleNavbar";
import TechStackOrbit from "../components/TechStackOrbit";
import ScrollVelocity from "../components/ScrollVelocity";
import { GlowingEffectDemoSecond } from "../components/GlowingEffectDemoSecond";
import SmoothScrollWrapper from "../components/ui/SmoothScrollWrapper";
import Services from "../components/Services";

import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Akshat Srivastava - AI Full Stack Engineer | SDE Portfolio</title>
        <meta name="description" content="AI Full Stack Software Engineer specializing in scalable SaaS platforms, LLM integration, and RAG workflows. Built systems serving 100k+ users at VITrendz. Expert in React, Next.js, TypeScript, Python, FastAPI, and PostgreSQL." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / LinkedIn / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akshatsrivastava.com/" />
        <meta property="og:title" content="Akshat Srivastava - AI Full Stack Engineer" />
        <meta property="og:description" content="AI Full Stack Software Engineer specializing in scalable SaaS platforms, LLM workflows, and RAG architectures." />
        <meta property="og:image" content="/s1(2).png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://akshatsrivastava.com/" />
        <meta property="twitter:title" content="Akshat Srivastava - AI Full Stack Engineer" />
        <meta property="twitter:description" content="AI Full Stack Software Engineer specializing in scalable SaaS platforms, LLM workflows, and RAG architectures." />
        <meta property="twitter:image" content="/s1(2).png" />
        
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </Head>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="w-full max-w-7xl">
          <SimpleNavbar navItems={navItems} />
                    <SmoothScrollWrapper animation="fadeIn" delay={0} duration={1.2}>
            <Hero />
          </SmoothScrollWrapper>
            
            <SmoothScrollWrapper animation="fadeUp" delay={0.1} duration={1.0}>
              <ScrollVelocity
                texts={['<> Full-Stack Developer <> Freelancer ', ' <> AI & Machine Learning <> Scalable Product ']} 
                velocity={80} 
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent scroll-velocity-text"
                parallaxClassName="py-4 scroll-velocity-container"
                scrollerClassName="select-none"
                numCopies={8}
                damping={30}
                stiffness={200}
              />
            </SmoothScrollWrapper>



            {/* My Expertise Section */}
            <SmoothScrollWrapper animation="fadeUp" delay={0.15} duration={1.0}>
              <div className="w-full py-4 text-center mt-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
                  My{" "}
                  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent font-black">
                    Expertise
                  </span>
                </h2>
              </div>
            </SmoothScrollWrapper>

            {/* Glowing Effect Bento Grid */}
            <SmoothScrollWrapper animation="fadeUp" delay={0.2} duration={1.0}>
              <div className="w-full py-4">
                <GlowingEffectDemoSecond />
              </div>
            </SmoothScrollWrapper>

            {/* Tech Stack Orbit - Rotating Design */}
            <SmoothScrollWrapper animation="fadeUp" delay={0.25} duration={1.0}>
              <TechStackOrbit />
            </SmoothScrollWrapper>
            
            <SmoothScrollWrapper animation="fadeUp" delay={0.3} duration={1.0}>
              <HeroScrollDemo />
            </SmoothScrollWrapper>
            <SmoothScrollWrapper animation="fadeUp" delay={0.35} duration={1.0}>
              <Experience />
            </SmoothScrollWrapper>
            <SmoothScrollWrapper animation="fadeUp" delay={0.38} duration={1.0}>
              <RecentProjects />
            </SmoothScrollWrapper>
            <SmoothScrollWrapper animation="fadeUp" delay={0.4} duration={1.0}>
              <Services />
            </SmoothScrollWrapper>
            <SmoothScrollWrapper animation="fadeUp" delay={0.45} duration={1.0}>
              <Clients />
            </SmoothScrollWrapper>
            
            <SmoothScrollWrapper animation="fadeUp" delay={0.5} duration={1.0}>
              <Achievements />
            </SmoothScrollWrapper>
            
            <SmoothScrollWrapper animation="fadeUp" delay={0.53} duration={1.0}>
              <BlogPreview />
            </SmoothScrollWrapper>
            

            <SmoothScrollWrapper animation="fadeUp" delay={0.59} duration={1.0}>
              <Footer />
            </SmoothScrollWrapper>
        </div>
      </main>
    </>
  );
};

export default Home;
