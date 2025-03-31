"use client";
import React, { useState, RefObject } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";


interface NavbarProps {
  journeyRef: RefObject<HTMLDivElement | null>;
  skillsRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
  achievmentsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}

export default function Navbar({ journeyRef, skillsRef, projectsRef, achievmentsRef, contactRef }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);

  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50">
      <Menu setActive={setActive}>
      <HoveredLink href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { 
    e.preventDefault(); 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
}}>
  <MenuItem setActive={setActive} active={active} item="Home" />
</HoveredLink>

<HoveredLink href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { 
    e.preventDefault(); 
    scrollToSection(journeyRef); 
}}>
  <MenuItem setActive={setActive} active={active} item="Journey" />
</HoveredLink>

<HoveredLink href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { 
    e.preventDefault(); 
    scrollToSection(skillsRef); 
}}>
  <MenuItem setActive={setActive} active={active} item="Skills" />
</HoveredLink>

<HoveredLink href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { 
    e.preventDefault(); 
    scrollToSection(projectsRef); 
}}>
  <MenuItem setActive={setActive} active={active} item="Projects" />
</HoveredLink>

<HoveredLink href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { 
    e.preventDefault(); 
    scrollToSection(achievmentsRef); 
}}>
  <MenuItem setActive={setActive} active={active} item="Achievements" />
</HoveredLink>

<HoveredLink href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { 
    e.preventDefault(); 
    scrollToSection(contactRef); 
}}>
  <MenuItem setActive={setActive} active={active} item="Contact" />
</HoveredLink>
      </Menu>
    </div>
  );
}
