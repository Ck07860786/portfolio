import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import thinknext from '../pictures/thinknext.png';
import college from "../pictures/college.jpg";
import meritourious from "../pictures/meritourious.avif";

import { CheckCircle } from "lucide-react";

export function MyJourny() {
    const data = [
        {
            title: "Full Stack Developer Intern",
            subtitle: "Cracent Private Limited",
            timeline:"Feb 2025 - Present",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
                        Full Stack Developer Intern at Cracent Private Limited (Feb 2024 - Present)
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Developing and maintaining scalable web applications, implementing RESTful APIs, 
                        and enhancing user experiences with modern front-end technologies.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                        {["React.js", "Next.js", "Node.js", "TypeScript", "Express", "MongoDB", "PostgreSQL", "Tailwind CSS"].map((tech) => (
                            <span key={tech} className="px-4 py-2 text-xs md:text-sm font-semibold bg-white/10 backdrop-blur-md border border-white/20 dark:border-neutral-800 text-white shadow-lg rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image src="https://cracent.com/images/Logo%20cracent%202.png" alt="Cracent Logo" width={400} height={0} className="rounded-lg object-cover    shadow-md" />
                    </div>
                </div>
            ),
        },
        {
            title: "Full Stack Training - ThinkNext Technologies",
            subtitle: "ThinkNext Technologies",
            timeline:"June 2024 - Aug 2024",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Successfully completed a <strong>Full Stack Development</strong> training program at <strong>ThinkNext Technologies</strong>.
                        Gained hands-on experience in <strong>front-end, back-end, databases, and deployment</strong> while working on real-world projects.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                        {["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"].map((tech) => (
                            <span key={tech} className="px-4 py-2 text-xs md:text-sm font-semibold bg-white/10 backdrop-blur-md border border-white/20 dark:border-neutral-800 text-white shadow-lg rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <ul className="pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-normal mb-4 space-y-2">
  <li className="flex items-center gap-2">
    <CheckCircle className="w-4 h-4 text-blue-500" /> Front-end development using <strong>React.js & Next.js</strong>
  </li>
  <li className="flex items-center gap-2">
    <CheckCircle className="w-4 h-4 text-blue-500" /> Back-end APIs with <strong>Node.js & Express.js</strong>
  </li>
  <li className="flex items-center gap-2">
    <CheckCircle className="w-4 h-4 text-blue-500" /> Database management with <strong>MongoDB & PostgreSQL</strong>
  </li>
  <li className="flex items-center gap-2">
    <CheckCircle className="w-4 h-4 text-blue-500" /> Authentication & Authorization using <strong>JWT & Firebase</strong>
  </li>
  <li className="flex items-center gap-2">
    <CheckCircle className="w-4 h-4 text-blue-500" /> Deployment on <strong>Vercel & Render</strong>
  </li>
</ul>
                    <div className="grid grid-cols-2 gap-4">
                        <Image src={thinknext} alt="ThinkNext Full Stack Training" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
                    </div>
                </div>
            ),
        },
        {
            title: "B.Tech in Computer Science",
            subtitle: "Baba Farid Collage of Engineering & Technology Bathinda",
            timeline:"2021 - 2025",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Pursuing <strong>Bachelor of Technology (B.Tech) in Computer Science</strong>.
                        Focused on software development, web technologies, and modern frameworks.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-normal mb-4">
                        <li className=" flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />Developed multiple projects including web applications and APIs.
                            </li>
                        <li className=" flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />Participated in hackathons and coding competitions.
                        </li>
                        <li className=" flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />Gained expertise in MERN stack, cloud computing, and DevOps.
                        </li>
                    </ul>
                    <div className="grid grid-cols-2 gap-4">
                        <Image src={college} alt="ThinkNext Full Stack Training" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
                    </div>
                </div>
            ),
        },
        {
            title: "Higher Secondary",
            subtitle: "Sen. Sec. Residential School for Meritourious Students Ludhiana",
            timeline:" 2019 - 2021",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Completed High School with a strong foundation in Science from meritourious school ludhiana.
                    </p>
                    <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-normal mb-4">
                        <li className=" flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />Secured 88% in the PSEB board examinations.
                            </li>
                        <li className=" flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />Excelled in academics and actively participated in tech clubs.
                            </li>
                        <li className=" flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />Developed a keen interest in problem-solving and algorithms during
                        these years.
                        </li>
                    </ul>
                    <div className="grid grid-cols-2 gap-4">
                        <Image src={meritourious} alt="ThinkNext Full Stack Training" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}