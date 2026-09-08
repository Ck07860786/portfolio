import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Experience", "Projects", "Skills", "Achievements", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : "bg-transparent"}`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Monogram */}
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          CK
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--muted-foreground)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            Let&apos;s Work Together
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: "var(--foreground)" }}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="16" x2="21" y2="16" /></svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium py-1"
              style={{ color: "var(--foreground)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-4 py-2 text-sm font-semibold rounded-md text-center"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Work Together
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;