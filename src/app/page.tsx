"use client";

import { AboutMe } from "@/components/AboutMe";
import Achievements from "@/components/Achievement"; // plural, keep your import style
import ClientPageWrapper from "@/components/ClientPageWrapper";
import { Contact } from "@/components/Contact";
import GetInTouch from "@/components/GetInTouch";
import { HeroSection } from "@/components/HeroSection";
import { MyJourny } from "@/components/MyJourny";
import { ProjectsWork } from "@/components/ProjectsWork";
import { Skills } from "@/components/Skills";
import { useRef } from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <ClientPageWrapper>
      <HeroSection projectsRef={projectsRef} contactRef={contactRef} />
      <AboutMe />
      <Skills />
      <ProjectsWork ref={projectsRef} />
      <Achievements />
      <Contact ref={contactRef} />
    </ClientPageWrapper>
  );
}
