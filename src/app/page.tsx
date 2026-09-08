"use client";

import AboutMe from "@/components/AboutMe";
import Achievements from "@/components/Achievement";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowIBuild from "@/components/HowIBuild";
import Navbar from "@/components/Navbar";
import ProjectsWork from "@/components/ProjectsWork";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";



export default function Home() {
;

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Stats/>
    <AboutMe/>
    <Experience/>
    <ProjectsWork/>
    <Skills/>
    <HowIBuild/>
    <Achievements/>
    <Contact/>
    <Footer/>
    </>
  
   
 
  );
}
