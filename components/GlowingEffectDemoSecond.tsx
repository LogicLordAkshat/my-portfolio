"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemoSecond() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-3 sm:gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-white" />}
        title="🌐 Full-Stack Web Development"
        description="Building sleek, responsive apps with modern frameworks."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-white" />}
        title="🤖 AI & Machine Learning"
        description="Turning data into smart, practical solutions."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4 text-white" />}
        title="🚀 Scalable Product Building"
        description="Designing products that grow with users."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-white" />}
        title="💼 Freelance & Client Projects"
        description="Delivering custom solutions for real-world needs."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-white" />}
        title="📈 Leadership & Growth Strategy"
        description="Driving projects with vision and execution."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[12rem] sm:min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-xl sm:rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-4 sm:gap-6 overflow-hidden rounded-xl p-4 sm:p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-2 sm:gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-lg sm:text-xl md:text-2xl font-semibold text-balance text-black dark:text-white leading-tight sm:leading-[1.375rem] md:leading-[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-xs sm:text-sm md:text-base text-black dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold leading-tight sm:leading-[1.125rem] md:leading-[1.375rem]">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
