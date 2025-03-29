import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import { motion } from "framer-motion";
import hand from "../pictures/Heyhand.png";
import { SiReact, SiNodedotjs, SiNextdotjs, SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";

export function HeroSection() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 text-center relative overflow-hidden">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 font-bold tracking-tight relative z-20"
      >
        Hi There
        <motion.span 
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="inline-block w-14 ml-4"
        >
          <Image src={hand} alt="Wave Hand" />
        </motion.span>
        <br /> I'm Chotu Kumar
      </motion.h2>

      {/* Subtext */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400"
      >
        "Full Stack Developer | Passionate Coder"
      </motion.p>

      {/* Tech Stack Icons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="flex space-x-6 mt-6"
      >
        {[SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiJavascript, SiTailwindcss].map((Icon, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-4xl text-neutral-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
          >
            <Icon />
          </motion.div>
        ))}
      </motion.div>
    </BackgroundLines>
  );
}