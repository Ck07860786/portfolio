import useScrollReveal from "@/hooks/useScrollReveal";

function Achievements() {
  const ref = useScrollReveal();
  return (
    <section id="achievements" ref={ref} className="py-24 px-6 border-t" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal font-mono-custom text-xs uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>Recognition</div>
        <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl font-semibold mb-16" style={{ color: "var(--foreground)" }}>
          Achievements &amp; Certifications.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Hackathon */}
          <div className="reveal reveal-delay-1">
            <div
              className="rounded-2xl p-8 border h-full flex flex-col justify-between"
              style={{ background: "var(--background)", borderColor: "var(--border)" }}
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(43,99,84,0.1)" }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"><path d="M6 9H4.5a2.5 2.5 0 000 5H6" /><path d="M18 9h1.5a2.5 2.5 0 010 5H18" /><path d="M8 9h8" /><path d="M8 15h8" /><path d="M9 9v6" /><path d="M15 9v6" /><path d="M12 3v2" /><path d="M12 19v2" /></svg>
                  </div>
                  <span
                    className="font-mono-custom text-xs px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(43,99,84,0.1)", color: "var(--primary)" }}
                  >
                    Top 10
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: "var(--foreground)" }}>HackCBS Hackathon</h3>
                <p className="text-sm mb-1" style={{ color: "var(--muted-foreground)" }}>Shaheed Sukhdev College of Business Studies</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  Placed in the top 10 finalists, building a full-stack solution under time constraints with a cross-functional team.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="font-mono-custom text-xs" style={{ color: "var(--muted-foreground)" }}>Competitive programming · Team collaboration · Rapid prototyping</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="reveal reveal-delay-2 space-y-4">
            {[
              { name: "Full Stack Development (MERN)", issuer: "Certification Authority", year: "2024", desc: "Comprehensive MERN stack training covering React, Node.js, Express, and MongoDB in production contexts." },
              { name: "React.js", issuer: "Certification Authority", year: "2024", desc: "Advanced React patterns, hooks, state management, and component architecture best practices." },
            ].map(cert => (
              <div
                key={cert.name}
                className="rounded-2xl p-6 border"
                style={{ background: "var(--background)", borderColor: "var(--border)" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold mb-0.5" style={{ color: "var(--foreground)" }}>{cert.name}</h3>
                    <div className="text-xs font-mono-custom" style={{ color: "var(--muted-foreground)" }}>{cert.issuer} · {cert.year}</div>
                  </div>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ml-4" style={{ background: "rgba(43,99,84,0.1)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;