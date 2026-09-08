import useScrollReveal from "@/hooks/useScrollReveal";

function AboutMe() {
  const ref = useScrollReveal();
  return (
    <section id="about" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
        <div>
          <div className="reveal font-mono-custom text-xs uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>About</div>
          <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl font-semibold leading-tight mb-6" style={{ color: "var(--foreground)" }}>
            Engineering with a<br /><em className="not-italic" style={{ color: "var(--primary)" }}>product mindset.</em>
          </h2>
          <div className="reveal reveal-delay-2 space-y-4 text-base leading-relaxed" style={{ color: "var(--muted-foreground)", maxWidth: "540px" }}>
            <p>
              I&apos;m a Full Stack Developer who enjoys building complete products — not just writing code to spec. I think in systems: how does the data model affect the API design? How does the API shape the frontend experience?
            </p>
            <p>
              With 1.5+ years of professional experience at Cracent Pvt. Ltd., I&apos;ve contributed to real production applications — handling 30+ RESTful APIs, JWT-based auth, role-based access control, MongoDB schema design, AWS SES email workflows, and AI-powered feature integrations.
            </p>
            <p>
              I care about code that&apos;s maintainable, UIs that are intuitive, and systems that can scale without breaking.
            </p>
          </div>

          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-2">
            {["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "RBAC", "AWS SES", "AI integrations"].map(t => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-md text-xs font-medium border"
                style={{ border: "1px solid var(--border)", color: "var(--foreground)", background: "var(--card)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Profile card */}
        <div className="reveal reveal-delay-2">
          <div
            className="rounded-2xl p-6 border"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center font-display text-2xl font-semibold mb-4"
              style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
            >
              CK
            </div>
            <div className="font-semibold text-lg mb-0.5" style={{ color: "var(--foreground)" }}>Full Stack Developer</div>
            <div className="text-sm mb-6" style={{ color: "var(--muted-foreground)" }}>MERN Stack · Jaipur, India</div>

            <div className="space-y-3">
              {[
                { label: "Experience", value: "1.5+ years professional" },
                { label: "Focus", value: "Full-stack MERN development" },
                { label: "APIs built", value: "30+ RESTful endpoints" },
                { label: "Status", value: "Open to opportunities" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-start gap-4">
                  <span className="text-xs font-mono-custom" style={{ color: "var(--muted-foreground)" }}>{label}</span>
                  <span className="text-xs font-medium text-right" style={{ color: "var(--foreground)" }}>{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
              <div className="text-xs font-mono-custom mb-3" style={{ color: "var(--muted-foreground)" }}>{"// how I start a new project"}</div>
              <pre className="text-[11px] leading-relaxed font-mono-custom overflow-hidden" style={{ color: "var(--primary)" }}>{`const build = async (idea) => {
  await understand(idea);
  const arch = design(arch);
  await implement(arch);
  return ship(project);
};`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe