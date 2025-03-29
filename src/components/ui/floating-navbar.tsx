import React, { RefObject } from "react";

interface FloatingNavProps {
  journeyRef: RefObject<HTMLDivElement | null>;
  skillsRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  journeyRef,
  skillsRef,
  projectsRef,
  contactRef,
}) => {
  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-around py-4">
      <button onClick={() => scrollToSection(journeyRef)}>Journey</button>
      <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
      <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
      <button onClick={() => scrollToSection(contactRef)}>Contact</button>
    </nav>
  );
};
