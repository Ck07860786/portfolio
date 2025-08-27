"use client";

import React, { forwardRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Tabs } from "./ui/tabs";
import partyplanner from "@/pictures/partyplanner.png";
import visaventure from "@/pictures/visaventure.png";
import skillverve from "@/pictures/skillverve.png";
import ecommrce from "@/pictures/ecommrce.png";

// ✅ ProjectsWork now supports `ref`
export const ProjectsWork = forwardRef<HTMLDivElement>((props, ref) => {
  const tabs = [
    {
      title: "VisaVenture",
      value: "VisaVenture",
      content: (
        <ProjectTabContent
          title="VisaVenture"
          description="Streamline visa applications with agent selection, AI recommendations, and real-time status tracking."
          githubLink="https://github.com/Ck07860786/VisaVenture"
          liveLink="https://visa-venture.vercel.app/"
          image={visaventure}
          technologies={[
            "React",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "Cloudinary",
            "RestAPI",
            "Express",
            "Socket.io",
            "Figma",
            "Magic UI",
            "ShadCn UI",
          ]}
        />
      ),
    },
    {
      title: "Party Planner",
      value: "partyPlanner",
      content: (
        <ProjectTabContent
          title="Party Planner"
          description="An event services platform connecting organizers with service providers for seamless event management."
          githubLink="https://github.com/Ck07860786/Party-Planner"
          liveLink="https://party-planner-pp.vercel.app/"
          image={partyplanner}
          technologies={[
            "React",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "Cloudinary",
            "RestAPI",
            "Express",
            "Socket.io",
            "Figma",
            "Magic UI",
            "ShadCn UI",
          ]}
        />
      ),
    },
    {
      title: "Skill Verve",
      value: "skillVerve",
      content: (
        <ProjectTabContent
          title="Skill Verve"
          description="A skill exchange platform for users to share and monetize their expertise with ease."
          githubLink="https://github.com/Ck07860786/SkillVerve"
          liveLink="https://skillverve.vercel.app/"
          image={skillverve}
          technologies={[
            "React",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "Cloudinary",
            "RestAPI",
            "Express",
            "Socket.io",
            "Figma",
            "Magic UI",
            "ShadCn UI",
          ]}
        />
      ),
    },
    {
      title: "E-Commerce",
      value: "E-Commerce",
      content: (
        <ProjectTabContent
          title="E-Commerce"
          description="An intuitive e-commerce platform for seamless shopping experiences."
          githubLink="https://github.com/Ck07860786/MERN-E_COMMERCE"
          liveLink="https://mern-e-commerce-client-seven.vercel.app/"
          image={ecommrce}
          technologies={[
            "React",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "Cloudinary",
            "RestAPI",
            "Express",
            "Socket.io",
            "Figma",
            "Magic UI",
            "ShadCn UI",
          ]}
        />
      ),
    },
  ];

  return (
    <div ref={ref} className="max-w-7xl mx-auto my-16 mt-28 mb-40 px-4">
     <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent mb-4">
  Project Work
</h1>
<p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
  A showcase of my key projects highlighting expertise in full-stack development, 
  problem-solving, and building scalable solutions.
</p>


      <div className="mb-16">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
});

ProjectsWork.displayName = "ProjectsWork";

// ✅ Tab content stays the same
const ProjectTabContent = ({
  title,
  description,
  githubLink,
  liveLink,
  image,
  technologies,
}: {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  image: StaticImageData;
  technologies: string[];
}) => {
  return (
    <div className="flex overflow-hidden flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-gray-900 to-black rounded-xl shadow-lg min-h-[400px]">
      {/* Text Section */}
      <div className="flex-1 text-white min-h-full">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="text-base md:text-lg mt-4 leading-relaxed">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-neutral-700 text-white rounded-lg hover:bg-gray-800 transition font-medium"
          >
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition font-medium"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 min-h-full">
        <Image
          src={image}
          alt={title}
          width={800}
          height={800}
          className="rounded-lg shadow-md object-cover h-full"
        />
      </div>
    </div>
  );
};
