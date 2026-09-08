import useScrollReveal from "@/hooks/useScrollReveal";

const SKILLS = {
  Frontend: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Responsive Design", "Component Architecture"],
  Backend: ["Node.js", "Express.js", "REST API Design", "JWT Authentication", "RBAC"],
  Database: ["MongoDB", "Schema Design", "Query Optimisation", "Mongoose ORM"],
  "Cloud & Tools": ["AWS SES", "Git & GitHub", "API Documentation", "Postman", "VS Code"],
};

function Skills() {
  const ref = useScrollReveal();
  return (
    <section id="skills" ref={ref} className="py-24 px-6 border-t" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal font-mono-custom text-xs uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>Skills</div>
        <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl font-semibold mb-16" style={{ color: "var(--foreground)" }}>
          Technical toolkit.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([category, items], i) => (
            <div key={category} className={`reveal reveal-delay-${i + 1}`}>
              <div className="font-semibold text-sm mb-4" style={{ color: "var(--foreground)" }}>{category}</div>
              <div className="space-y-2">
                {items.map(skill => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border transition-all duration-200"
                    style={{ border: "1px solid var(--border)", background: "var(--background)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.background = "rgba(43,99,84,0.04)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--background)"; }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--primary)" }} />
                    <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills