"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useSpring,
} from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 60%"],

  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.9, 1] : [1.05, 1];
  };

  // Smooth motion values with spring
  const rawRotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const rawTranslate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const rotate = useSpring(rawRotate, { stiffness: 60, damping: 18 });
const scale = useSpring(rawScale, { stiffness: 70, damping: 20 });
const translate = useSpring(rawTranslate, { stiffness: 60, damping: 18 });


  return (
  <div
    className="min-h-screen w-full flex items-center justify-center relative px-0"
    ref={containerRef}
  >
    <div
      className="py-6 md:py-20 w-full relative"
      style={{ perspective: "1000px" }}
    >
      <Header translate={translate} titleComponent={titleComponent} />
      <Card rotate={rotate} translate={translate} scale={scale}>
        {children}
      </Card>
    </div>
  </div>
);

};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center"
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    >
      <div className="h-full w-full overflow-hidden rounded-4xl bg-gray-100 dark:bg-zinc-900 md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
