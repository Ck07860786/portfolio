function Footer() {
    return (
        <footer className="py-10 px-6 border-t" style={{ borderColor: "var(--border)" }}>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <div className="font-display text-lg font-semibold mb-1" style={{ color: "var(--foreground)" }}>CK — Full Stack Developer</div>
                    <div className="text-xs font-mono-custom" style={{ color: "var(--muted-foreground)" }}>Designed & built with React.js</div>
                </div>

                <div className="flex items-center gap-6">
                    {["About", "Experience", "Projects", "Skills", "Contact"].map(l => (
                        <a key={l} href={`#${l.toLowerCase()}`} className="text-xs transition-colors" style={{ color: "var(--muted-foreground)" }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "var(--foreground)"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted-foreground)"}
                        >{l}</a>
                    ))}
                </div>

                <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                    © {new Date().getFullYear()} CK. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer