import useScrollReveal from "@/hooks/useScrollReveal";
import { useState } from "react";

interface Project {
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  tags: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
}

/* ─── Data ─── */
const PROJECTS: Project[] = [
  {
    title: "FixPro – Multi-Tenant Field Service Management Platform",
    category: "Personal · Full-Stack MERN Project",
    description:
      "A multi-tenant field service management platform that helps service businesses manage services, technicians, customers, and service requests from one centralized system.",
    challenge:
      "Local service businesses often rely on manual processes to manage customers, services, technicians, and service requests, making it difficult to scale operations and maintain organized workflows.",
    solution:
      "Built a full-stack MERN platform with separate business and customer onboarding flows, business approval workflows, role-based access control, JWT authentication, service management, and business-scoped data isolation.",
    impact:
      "Designed as a scalable SaaS-style platform that gives service businesses a structured way to manage their operations while allowing customers to discover businesses and request services.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redux Toolkit",
      "Axios",
      "JWT",
      "RBAC",
      "REST APIs",
      "Multi-Tenancy"
    ],
    featured: true,
    github: "https://github.com/Ck07860786/FixPro",
  },
  {
    title: "VisaVenture – Visa & Travel Management Platform",
    category: "Full-Stack · Web Application",
    description:
      "A modern visa and travel management platform designed to simplify visa-related processes and provide users with an organized digital experience.",
    challenge:
      "Visa and travel processes can involve multiple steps, documents, and user interactions, making it difficult for applicants to keep track of everything in one place.",
    solution:
      "Built a responsive web platform focused on simplifying the user journey, organizing visa-related information, and creating a structured experience for managing applications and travel services.",
    impact:
      "Created a user-focused platform that makes visa and travel information easier to access while providing a clean and organized digital workflow.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Responsive UI"
    ],
    featured: true,
    github: "https://github.com/Ck07860786/VisaVenture",
    demo: "https://visa-venture.vercel.app",
  },
  {
    title: "PartyPlanner – Event Planning Platform",
    category: "Full-Stack · Web Application",
    description:
      "A digital event planning platform designed to help users organize celebrations, manage event requirements, and streamline the overall planning experience.",
    challenge:
      "Planning events often requires coordinating multiple requirements and services, which can become difficult to manage through disconnected tools and manual processes.",
    solution:
      "Developed a full-stack platform with a structured event-planning experience focused on organizing event information, services, and user interactions in one place.",
    impact:
      "Delivered a centralized event-planning experience that reduces complexity and gives users a more organized way to manage their events.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JavaScript"
    ],
    featured: false,
    github: "https://github.com/Ck07860786/Party-Planner",
    demo: "https://party-planner-pp.vercel.app/",
  },
  {
    title: "ToolXchange – Tool & Resource Sharing Platform",
    category: "Full-Stack · Web Application",
    description:
      "A platform concept focused on making tools and useful resources easier to discover, share, and exchange through a centralized digital marketplace-style experience.",
    challenge:
      "People often own tools and resources that remain unused while others may need the same items, creating an opportunity for better resource utilization and sharing.",
    solution:
      "Built a web platform focused on connecting users around tool discovery and exchange while providing a structured digital experience for managing shared resources.",
    impact:
      "Created a platform concept that encourages resource sharing and makes tools easier to discover and exchange between users.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JavaScript"
    ],
    featured: false,
    github: "https://github.com/Ck07860786/ToolXChange",
    demo: "https://tool-x-change.vercel.app",
  },
  {
    title: "Remid2U – Automated WhatsApp Reminder Platform",
    category: "Full-Stack · Automation Platform",
    description:
      "A reminder automation platform that allows users to connect their WhatsApp account, schedule important tasks and events, and automatically receive timely reminders directly through WhatsApp.",
    challenge:
      "Users often create reminders in different apps but may miss them because they are not actively checking those platforms. There was a need for a more direct and convenient reminder experience through a communication channel users already use regularly.",
    solution:
      "Built a full-stack platform where users can register, connect their WhatsApp account, create and schedule reminders, and receive automated WhatsApp notifications at the configured date and time. The system combines REST APIs, scheduled background processing, database persistence, and WhatsApp integration.",
    impact:
      "Created an automated reminder workflow that reduces the need for users to manually check reminder applications and delivers important notifications directly through WhatsApp.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "WhatsApp API",
      "JWT",
      "REST APIs",
      "Scheduled Jobs",
      "Automation"
    ],
    featured: true,
    github: "https://github.com/Ck07860786/remind2u",
    demo: "https://remind2u.vercel.app",
  },
  {
    title: "CodeTalk-JS – JavaScript Code Explanation NPM Package",
    category: "Open Source · NPM Package",
    description:
      "A lightweight NPM package that explains JavaScript code in plain English, helping developers and learners understand what a piece of code is doing in a simpler and more accessible way.",
    challenge:
      "JavaScript code can be difficult to understand for beginners, especially when dealing with unfamiliar syntax, functions, and programming concepts.",
    solution:
      "Created a simple NPM package that analyzes JavaScript code and provides plain-English explanations, making code easier to read and understand.",
    impact:
      "Published a developer-focused package that demonstrates practical JavaScript, package development, and the ability to turn complex programming concepts into accessible explanations.",
    tags: [
      "JavaScript",
      "NPM",
      "Node.js",
      "Open Source",
      "Developer Tools"
    ],
    featured: true,
    github: "https://github.com/Ck07860786/codetalk-js",
    demo: "https://www.npmjs.com/package/codetalk-js",
  },
  {
    title: "ECommerce – Full-Stack Online Shopping Platform",
    category: "Full-Stack · MERN Application",
    description:
      "A full-stack eCommerce platform that provides a complete online shopping experience with product discovery, cart management, authentication, order processing, and an organized user experience.",
    challenge:
      "Traditional shopping workflows require users to browse products, manage carts, and track orders across multiple steps, while administrators need an efficient way to manage products and orders.",
    solution:
      "Built a MERN-based eCommerce application with user authentication, product management, shopping cart functionality, order workflows, responsive interfaces, and RESTful APIs connecting the frontend and backend.",
    impact:
      "Delivered an end-to-end shopping experience while demonstrating practical skills in full-stack application architecture, API integration, authentication, database management, and responsive UI development.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "REST APIs",
      "JavaScript",
      "Responsive UI"
    ],
    featured: false,
    github: "https://github.com/Ck07860786/MERN-E_COMMERCE",
    demo: "https://mern-e-commerce-client-seven.vercel.app/",
  },
];



function ProjectCard({ project, large }: { project: Project; large?: boolean }) {
  const [hovered, setHovered] = useState(false);

  if (large) {
    return (
      <div
        className="rounded-2xl border overflow-hidden transition-all duration-300"
        style={{
          borderColor: hovered ? "var(--primary)" : "var(--border)",
          background: "var(--card)",
          boxShadow: hovered ? "0 16px 48px rgba(43,99,84,0.12)" : "0 2px 8px rgba(28,26,21,0.06)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="grid md:grid-cols-2">
          {/* Visual */}
          <div className="relative overflow-hidden" style={{ background: "var(--secondary)", minHeight: "280px" }}>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              {/* Browser chrome */}
              <div className="rounded-lg overflow-hidden border" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ borderColor: "var(--border)" }}>
                  {["#FF6059", "#FFBD2E", "#27C840"].map(c => <span key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />)}
                  <span className="ml-2 text-[10px] font-mono-custom" style={{ color: "var(--muted-foreground)" }}>www.fixpro.com</span>
                </div>
                <div className="p-3 space-y-2">
                  <div className="h-2 rounded-full w-3/4" style={{ background: "var(--muted)" }} />
                  <div className="h-2 rounded-full w-1/2" style={{ background: "var(--muted)" }} />
                  <div className="grid grid-cols-3 gap-1.5 mt-3">
                    {["Technician", "Services", "Users"].map(l => (
                      <div key={l} className="rounded p-2" style={{ background: "var(--card)" }}>
                        <div className="h-3 rounded w-full mb-1" style={{ background: "var(--muted)" }} />
                        <div className="text-[9px]" style={{ color: "var(--muted-foreground)" }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono-custom px-2 py-1 rounded" style={{ background: "rgba(43,99,84,0.1)", color: "var(--primary)" }}>
                  {project.category}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 leading-tight" style={{ color: "var(--foreground)" }}>{project.title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted-foreground)" }}>{project.description}</p>

              <div className="space-y-3 mb-6">
                {[["Challenge", project.challenge], ["Solution", project.solution], ["Impact", project.impact]].map(([label, text]) => (
                  <div key={label}>
                    <div className="text-[10px] font-mono-custom uppercase tracking-widest mb-1" style={{ color: "var(--primary)" }}>{label}</div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map(t => (
                <span key={t} className="px-2 py-1 rounded text-[11px] font-mono-custom border" style={{ border: "1px solid var(--border)", color: "var(--muted-foreground)" }}>{t}</span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-opacity"
                  style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Live Demo <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 11 11 1M11 1H5M11 1v6" /></svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md text-xs font-semibold border flex items-center gap-2 transition-all duration-200"
                  style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--primary)";
                    e.currentTarget.style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--foreground)";
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl border p-6 flex flex-col transition-all duration-300"
      style={{
        borderColor: hovered ? "var(--primary)" : "var(--border)",
        background: "var(--card)",
        boxShadow: hovered ? "0 8px 32px rgba(43,99,84,0.1)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono-custom px-2 py-1 rounded" style={{ background: "rgba(43,99,84,0.1)", color: "var(--primary)" }}>
          {project.category}
        </span>
        <div className="flex items-center gap-1.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              title="GitHub Repository"
              className="p-1.5 rounded-md transition-colors"
              style={{ color: "var(--muted-foreground)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--primary)";
                e.currentTarget.style.background = "rgba(43,99,84,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted-foreground)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
              title="Live Demo"
              className="p-1.5 rounded-md transition-colors"
              style={{ color: "var(--muted-foreground)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--primary)";
                e.currentTarget.style.background = "rgba(43,99,84,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted-foreground)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display text-xl font-semibold mb-2 leading-tight" style={{ color: "var(--foreground)" }}>{project.title}</h3>
      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--muted-foreground)" }}>{project.description}</p>

      <div className="space-y-2 mb-5">
        {[["Impact", project.impact]].map(([label, text]) => (
          <div key={label}>
            <div className="text-[10px] font-mono-custom uppercase tracking-widest mb-1" style={{ color: "var(--primary)" }}>{label}</div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.slice(0, 4).map(t => (
          <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono-custom" style={{ background: "var(--secondary)", color: "var(--muted-foreground)" }}>{t}</span>
        ))}
        {project.tags.length > 4 && (
          <span className="px-2 py-0.5 rounded text-[11px] font-mono-custom" style={{ background: "var(--secondary)", color: "var(--muted-foreground)" }}>+{project.tags.length - 4}</span>
        )}
      </div>

    </div>
  );
}

function ProjectsWork() {
  const ref = useScrollReveal();
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" ref={ref} className="py-24 px-6 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <div className="reveal font-mono-custom text-xs uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>Selected Work</div>
            <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl font-semibold leading-tight" style={{ color: "var(--foreground)" }}>
              Products, platforms,<br />and interfaces I&apos;ve built.
            </h2>
          </div>
          <div className="reveal reveal-delay-2 text-sm max-w-xs text-right" style={{ color: "var(--muted-foreground)" }}>
            Real-world applications, not coding exercises.
          </div>
        </div>

        <div className="reveal reveal-delay-2 mb-6">
          <ProjectCard project={featured} large />
        </div>

        <div className="reveal reveal-delay-3 grid md:grid-cols-3 gap-5">
          {rest.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  );
}
export default ProjectsWork;