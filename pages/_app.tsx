import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import Preloader from "../components/Preloader";
import dynamic from "next/dynamic";

const Galaxy = dynamic(() => import("../components/Galaxy"), { ssr: false });
const SmoothScroll = dynamic(() => import("../components/SmoothScroll"), { ssr: false });
const CustomCursor = dynamic(() => import("../components/CustomCursor"), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <CustomCursor />
      <SmoothScroll>
        {/* Fixed Galaxy background */}
        <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <Galaxy
            mouseRepulsion
            mouseInteraction
            density={0.8}
            glowIntensity={0.15}
            saturation={0.7}
            hueShift={260}
            twinkleIntensity={0.4}
            rotationSpeed={0.02}
            repulsionStrength={1.5}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={0.8}
            transparent
          />
        </div>

        {/* Preloader — only on first visit per session */}
        <AnimatePresence>
          {isLoading && (
            <Preloader onComplete={handlePreloaderComplete} />
          )}
        </AnimatePresence>

        {/* Main app with page transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{ duration: 0.5 }}
            variants={{
              initialState: { opacity: 0, y: 20 },
              animateState: { opacity: 1, y: 0 },
              exitState:    { opacity: 0, y: -20 },
            }}
            style={{ position: "relative", zIndex: 1 }}
            className="w-full h-full min-h-screen"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </SmoothScroll>
    </ThemeProvider>
  );
}
