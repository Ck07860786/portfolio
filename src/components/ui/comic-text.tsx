"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { CSSProperties } from "react";

type ComicTextProps = {
  children: string;
  className?: string;
  style?: CSSProperties;
};

export function ComicText({
  children,
  className,
  style,
}: ComicTextProps) {
  if (typeof children !== "string") {
    throw new Error("children must be a string");
  }

  const dotColor = "#EF4444";
  const backgroundColor = "#608EF7";

  return (
    <motion.div
      className={cn(
        "select-none text-center",
        // Clamp makes it responsive across devices
        "text-[clamp(3rem,6vw,4.5rem)] leading-tight",
        className
      )}
      style={{
        fontFamily: "'Bangers', 'Comic Sans MS', 'Impact', sans-serif",
        fontWeight: "900",
        WebkitTextStroke: "2px #000000", // fixed thickness for small screens
        transform: "skewX(-6deg)",
        textTransform: "uppercase",
        filter: `
          drop-shadow(3px 3px 0px #000000) 
          drop-shadow(2px 2px 0px ${dotColor})
        `,
        backgroundColor: backgroundColor,
        backgroundImage: `radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        lineHeight: "1.15",
        padding: "0.1em 0.25em", // prevents clipping on small devices
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.275],
        type: "spring",
      }}
    >
      {children}
    </motion.div>
  );
}
