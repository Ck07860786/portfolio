"use client";
import { useRef } from "react";
import { AboutMe } from "@/components/AboutMe";
import { Achievement } from "@/components/Achievement";
import { Contact } from "@/components/Contact";
import GetInTouch from "@/components/GetInTouch";
import { HeroSection } from "@/components/HeroSection";
import { MyJourny } from "@/components/MyJourny";
import { ProjectsWork } from "@/components/ProjectsWork";
import { Skills } from "@/components/Skills";
import Navbar from "@/components/Navbar";

export default function Home() {
  const journeyRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const achievmentsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
    </>
  );
}