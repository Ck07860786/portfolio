"use client";

import {
  useRef,
  useState,
  useEffect,
  cloneElement,
  isValidElement,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { ArrowUp } from "lucide-react";

interface ClientPageWrapperProps {
  children: React.ReactNode;
}

// Define the extra props your Hero component can accept
interface HeroChildProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export default function ClientPageWrapper({ children }: ClientPageWrapperProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking for cursor effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const childrenArray = Array.isArray(children) ? children : [children];

  // Clone Hero and inject refs if it's a valid element
  const enhancedHero = isValidElement<HeroChildProps>(childrenArray[0])
    ? cloneElement(childrenArray[0], {
        projectsRef,
        contactRef,
      })
    : childrenArray[0];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom cursor */}
      <div
        className="fixed w-6 h-6 bg-blue-400/30 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "translate(0, 0)",
        }}
      />

      {/* Background effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -100, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <Navbar
        heroRef={heroRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        achievementsRef={achievementsRef}
        contactRef={contactRef}
      />

      {/* Sections */}
      <section ref={heroRef} className="min-h-screen">
        {enhancedHero}
      </section>
      <section ref={aboutRef} className="py-20">
        {childrenArray[1]}
      </section>
      <section ref={skillsRef} className="py-20">
        {childrenArray[2]}
      </section>
      <section ref={projectsRef} className="py-20">
        {childrenArray[3]}
      </section>
      <section ref={achievementsRef} className="py-20">
        {childrenArray[4]}
      </section>
      <section ref={contactRef} className="py-20">
        {childrenArray[5]}
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          © 2025 Chotu Kumar • Made with ❤️
        </div>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-lg backdrop-blur-sm border border-white/20 z-40 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
