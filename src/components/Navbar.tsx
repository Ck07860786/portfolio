"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem,} from "./ui/navbar-menu";
import { cn } from "@/lib/utils";



export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu  setActive={setActive}>
        <HoveredLink href={'/'}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </HoveredLink>
        <HoveredLink href={'/'}>
        <MenuItem setActive={setActive} active={active} item="Skills">
        
        </MenuItem>
        </HoveredLink>

        <HoveredLink href={'/'}>
        <MenuItem setActive={setActive} active={active} item="Projects">
          
        </MenuItem>
        </HoveredLink>
        <HoveredLink href={'/'}>
        <MenuItem setActive={setActive} active={active} item="Contact">
         
        </MenuItem>
        </HoveredLink>
      </Menu>
    </div>
  );
}
