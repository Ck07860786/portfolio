"use client";
import React, { useState, useEffect } from "react";
import { motion, useTransform, useScroll, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MyImage from "../../public/assets/ckimage.png";
import Image from "next/image";
import { ComicText } from "./ui/comic-text";

type DivRef = React.RefObject<HTMLDivElement | null> | React.MutableRefObject<HTMLDivElement | null>;

interface ModernHeroProps {
  projectsRef: DivRef;
  contactRef: DivRef;
}

export function HeroSection({ projectsRef, contactRef }: ModernHeroProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (sectionRef: DivRef | null) => {
    if (sectionRef && sectionRef.current) {
      const targetPosition = sectionRef.current.offsetTop - 80;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    } else {
      console.error("Section reference is not available");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8"
      aria-label="Introduction"
    >
      {/* Background animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl opacity-30"
            style={{
              background: `linear-gradient(45deg, ${
                ["#ff006e", "#8338ec", "#3a86ff", "#06ffa5", "#ffbe0b"][i]
              }, transparent)`,
              width: `${150 + i * 100}px`,
              height: `${150 + i * 100}px`,
              left: `${15 * i}%`,
              top: `${8 * i}%`,
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    rotate: [0, 180, 360],
                  }
            }
            transition={
              shouldReduceMotion
                ? {}
                : { duration: 10 + i * 2, repeat: Infinity, ease: "linear" }
            }
          />
        ))}
      </div>

      {/* Hero content */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : y }}
        className="text-center z-10 max-w-6xl mx-auto w-full"
      >
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center mb-6 mt-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-green-400/30 bg-green-900/10 backdrop-blur-md shadow-lg shadow-green-500/10 relative overflow-hidden text-sm sm:text-base">
            {!shouldReduceMotion && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              />
            )}
            <span className="relative flex h-3 w-3">
              {!shouldReduceMotion && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              )}
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-green-300"></span>
            </span>
            <span className="text-green-400 font-semibold">Open to new opportunities</span>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center relative">
              <Image
                src={MyImage}
                alt="Professional headshot of a Full Stack Developer"
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoadingComplete={() => setImageLoaded(true)}
                priority
              />
              {!imageLoaded && <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-full"></div>}
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
        >
          <ComicText>Full Stack Developer</ComicText>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
        >
          Crafting digital experiences with cutting-edge technologies and creative solutions
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection(projectsRef)}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className="w-full sm:w-auto px-5 py-3 sm:px-6 md:px-8 sm:py-3.5 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg"
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => scrollToSection(contactRef)}
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className="w-full sm:w-auto px-5 py-3 sm:px-6 md:px-8 sm:py-3.5 md:py-4 border-2 border-white/20 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            Let&apos;s Connect
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll chevron */}
      {!shouldReduceMotion && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2"
          aria-hidden="true"
        >
          <ChevronDown />
        </motion.div>
      )}
    </section>
  );
}
