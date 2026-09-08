import HeroVisual from "./HeroVisual";

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">
        {/* Left */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono-custom font-medium mb-8 border"
            style={{ color: "var(--primary)", borderColor: "var(--primary)", background: "rgba(43,99,84,0.07)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--primary)" }} />
            Open to Full Stack / MERN opportunities
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-6" style={{ color: "var(--foreground)" }}>
            Full Stack Developer building scalable,{" "}
            <em className="not-italic" style={{ color: "var(--primary)" }}>production-ready</em>{" "}
            web experiences.
          </h1>

          <p className="text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "var(--muted-foreground)" }}>
            I build modern web applications across the MERN stack — from intuitive React
            interfaces to scalable Node.js backends. 1.5+ years of professional experience
            shipping real production applications and 100+ REST APIs.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200"
              style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md text-sm font-semibold border transition-all duration-200"
              style={{ border: "1.5px solid var(--foreground)", color: "var(--foreground)", background: "transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--foreground)"; e.currentTarget.style.color = "var(--background)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--foreground)"; }}
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            <span className="text-xs font-mono-custom uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>Find me on</span>
            {[
              { label: "GitHub", href: "https://github.com/Ck07860786", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/chotukumar786/", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { label: "Email", href: "mailto:ck4001252@gmail.com", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg> },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors duration-200"
                style={{ color: "var(--muted-foreground)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — 3D Code Visual */}
        <div className="hidden lg:block">
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 flex items-center gap-3">
        <div className="h-px flex-1 max-w-[60px]" style={{ background: "var(--border)" }} />
        <span className="text-xs font-mono-custom uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>Scroll to explore</span>
      </div>
    </section>
  );
}

export default HeroSection;