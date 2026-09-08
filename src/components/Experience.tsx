import useScrollReveal from "@/hooks/useScrollReveal";

function Experience() {
  const ref = useScrollReveal();
  const achievements = [
    "Developed responsive React.js components and reusable UI system",
    "Built and maintained 30+ RESTful APIs across multiple services",
    "Designed and optimised MongoDB schemas for production data models",
    "Implemented JWT-based authentication and role-based access control",
    "Integrated AWS SES for transactional email and notification workflows",
    "Contributed to AI-powered feature integrations within the platform",
    "Built admin dashboard functionality with data visualisation components",
    "Collaborated using Git and GitHub in a team development environment",
  ];

  return (
    <section id="experience" ref={ref} className="py-24 px-6 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal font-mono-custom text-xs uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>Experience</div>
        <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl font-semibold mb-16" style={{ color: "var(--foreground)" }}>
          Where I&apos;ve worked.
        </h2>

        <div className="grid lg:grid-cols-[240px_1fr] gap-12">
          {/* Company info */}
          <div className="reveal reveal-delay-1">
            <div className="sticky top-24">
              <div className="font-semibold text-lg mb-1" style={{ color: "var(--foreground)" }}>Cracent Pvt. Ltd.</div>
              <div className="text-sm mb-1" style={{ color: "var(--muted-foreground)" }}>Jaipur, Rajasthan</div>
              <div className="text-sm font-mono-custom mb-4" style={{ color: "var(--primary)" }}>Feb 2025 – Jul 2026</div>
              <div
                className="inline-block px-3 py-1.5 rounded-md text-xs font-semibold"
                style={{ background: "rgba(43,99,84,0.1)", color: "var(--primary)" }}
              >
                Full Stack Developer
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="reveal reveal-delay-2 space-y-4">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-200"
                style={{ borderColor: "var(--border)", background: "var(--card)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.background = "rgba(43,99,84,0.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--card)"; }}
              >
                <div className="mt-0.5 w-5 h-5 rounded flex items-center justify-center flex-shrink-0" style={{ background: "rgba(43,99,84,0.12)" }}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="2,6 5,9 10,3" /><path stroke="var(--primary)" strokeWidth="2.5" d="M2 6 5 9 10 3" /></svg>
                </div>
                <span className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>{item}</span>
              </div>
            ))}

            {/* Tech tags */}
            <div className="pt-4 flex flex-wrap gap-2">
              {["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "AWS SES", "REST APIs", "Git", "GitHub"].map(t => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded text-xs font-mono-custom border"
                  style={{ border: "1px solid var(--border)", color: "var(--muted-foreground)", background: "var(--secondary)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;