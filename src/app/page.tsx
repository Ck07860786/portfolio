"use client";
import { useRef, useState, useEffect } from "react";
import { AboutMe } from "@/components/AboutMe";
import { Achievement } from "@/components/Achievement";
import { Contact } from "@/components/Contact";
import GetInTouch from "@/components/GetInTouch";
import { HeroSection } from "@/components/HeroSection";
import { MyJourny } from "@/components/MyJourny";
import { ProjectsWork } from "@/components/ProjectsWork";
import { Skills } from "@/components/Skills";
import Navbar from "@/components/Navbar";
import { FaArrowUp } from "react-icons/fa"; // Import arrow icon

export default function Home() {
  const journeyRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const achievmentsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [showScrollButton, setShowScrollButton] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        journeyRef={journeyRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        achievmentsRef={achievmentsRef}
        contactRef={contactRef}
      />

      <HeroSection />
      <div ref={journeyRef}><MyJourny /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={projectsRef}><ProjectsWork /></div>
      <div ref={achievmentsRef}><Achievement /></div>
      <div ref={contactRef}><GetInTouch /></div>
      <Contact />

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 border-[0.5px] border-gray-200  shadow-gray-200  right-5 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition-all"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}
