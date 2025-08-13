import { AboutMe } from "@/components/AboutMe";
import { Achievement } from "@/components/Achievement";
import { Contact } from "@/components/Contact";
import GetInTouch from "@/components/GetInTouch";
import { HeroSection } from "@/components/HeroSection";
import { MyJourny } from "@/components/MyJourny";
import { ProjectsWork } from "@/components/ProjectsWork";
import { Skills } from "@/components/Skills";
import ClientPageWrapper from "@/components/ClientPageWrapper";

export default function Home() {
  return (
    <ClientPageWrapper>
      <HeroSection />
      <MyJourny />
      <Skills />
      <ProjectsWork />
      <Achievement />
      <GetInTouch />
      <Contact />
    </ClientPageWrapper>
  );
}