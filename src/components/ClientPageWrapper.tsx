"use client";
import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { FaArrowUp } from "react-icons/fa";

interface ClientPageWrapperProps {
  children: React.ReactNode;
}

export default function ClientPageWrapper({ children }: ClientPageWrapperProps) {
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

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <>
      <Navbar
        journeyRef={journeyRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        achievmentsRef={achievmentsRef}
        contactRef={contactRef}
      />

      {childrenArray[0]}
      <div ref={journeyRef}>{childrenArray[1]}</div>
      <div ref={skillsRef}>{childrenArray[2]}</div>
      <div ref={projectsRef}>{childrenArray[3]}</div>
      <div ref={achievmentsRef}>{childrenArray[4]}</div>
      <div ref={contactRef}>{childrenArray[5]}</div>
      {childrenArray[6]}

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