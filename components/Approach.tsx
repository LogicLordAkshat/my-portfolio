"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const CanvasRevealEffect = dynamic(() => import("./ui/CanvasRevealEffect"), {
  ssr: false,
  loading: () => <div />, // optional fallback
});

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-center tracking-tight">
        My{" "}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent font-black drop-shadow-2xl">
          Approach
        </span>
      </h1>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-8 max-w-7xl mx-auto px-4">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
          gradient="from-emerald-500 via-green-400 to-teal-500"
          bgGradient="from-emerald-900/20 via-green-900/10 to-teal-900/20"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900/80 rounded-3xl overflow-hidden"
            colors={[
              [34, 197, 94],
              [163, 230, 53],
              [21, 128, 61],
            ]}
          />
        </Card>

        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
          gradient="from-amber-500 via-yellow-400 to-orange-500"
          bgGradient="from-amber-900/20 via-yellow-900/10 to-orange-900/20"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-amber-900/80 rounded-3xl overflow-hidden"
            colors={[
              [250, 204, 21],
              [253, 224, 71],
              [161, 98, 7],
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
          gradient="from-rose-500 via-pink-400 to-red-500"
          bgGradient="from-rose-900/20 via-pink-900/10 to-red-900/20"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-rose-900/80 rounded-3xl overflow-hidden"
            colors={[
              [239, 68, 68],
              [252, 165, 165],
              [153, 27, 27],
            ]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
  gradient,
  bgGradient,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
  gradient: string;
  bgGradient: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group/canvas-card relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${bgGradient} backdrop-blur-xl shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-xl w-full max-w-sm h-96 md:h-[28rem] flex flex-col items-center justify-center px-8 py-8 md:px-10 md:py-12`}
      style={{
        background: `linear-gradient(135deg, rgba(0,0,0,0.9) 0%, ${bgGradient.replace('from-', 'rgba(').replace('via-', 'rgba(').replace('to-', 'rgba(').replace('/20', ',0.2)').replace('/10', ',0.1)')} 50%, rgba(0,0,0,0.9) 100%)`,
      }}
    >
      {/* Enhanced gradient border effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover/canvas-card:opacity-20 transition-all duration-700 blur-sm`} />

      {/* Animated corner accent elements */}
      <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${gradient} opacity-30 rounded-tl-2xl animate-pulse`} />
      <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${gradient} opacity-30 rounded-br-2xl animate-pulse`} />

      {/* Glowing border on hover */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-lg opacity-0 group-hover/canvas-card:opacity-40 transition-all duration-700 -z-10`} />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 rounded-2xl"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden z-0 pointer-events-none">
          {children}
        </div>
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center w-full h-full"
          whileHover={{
            y: -10,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          initial={{ y: 0 }}
          animate={{ y: hovered ? -10 : 0 }}
        >
          <div className="mb-8 transform group-hover/canvas-card:scale-110 transition-transform duration-500">
            {icon}
          </div>
          <h2 className={`text-center text-2xl md:text-3xl font-bold mb-6 text-white drop-shadow-lg group-hover/canvas-card:text-transparent group-hover/canvas-card:bg-gradient-to-r ${gradient} group-hover/canvas-card:bg-clip-text transition-all duration-500`}>
            {title}
          </h2>
          <p className="text-sm md:text-base text-center text-gray-300 leading-relaxed max-w-xs group-hover/canvas-card:text-gray-200 transition-all duration-500">
            {des}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div className="relative group/icon">
      <button className="relative inline-flex overflow-hidden rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-400 hover:via-pink-400 hover:to-purple-400 transition-all duration-500 shadow-lg hover:shadow-purple-500/50 transform group-hover/icon:scale-110">
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#EC4899_50%,#E2CBFF_100%)]" />
        <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-3 text-white backdrop-blur-3xl font-bold text-xl md:text-2xl transition-all duration-500 hover:bg-black/80 group-hover/icon:bg-black/60">
          {order}
        </span>
      </button>
      
      {/* Enhanced glow effects */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 blur-xl opacity-0 group-hover/canvas-card:opacity-100 transition-all duration-700" />
      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover/canvas-card:opacity-60 transition-all duration-1000" />
      
      {/* Floating sparkles */}
      <div className="absolute -top-2 -right-2 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover/canvas-card:opacity-100 animate-ping transition-all duration-700 delay-300" />
      <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover/canvas-card:opacity-100 animate-ping transition-all duration-700 delay-500" />
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
