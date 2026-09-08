import useScrollReveal from "../hooks/useScrollReveal";

function Stats() {
    const ref = useScrollReveal();
    const stats = [
        { value: "1.5+", label: "Years of professional\nexperience" },
        { value: "100+", label: "REST APIs\ndesigned & built" },
        { value: "MERN", label: "Primary technology\nstack" },
        { value: "Top 10", label: "HackCBS Hackathon\nfinalist" },
    ];
    return (
        <section ref={ref} className="py-16 px-6 border-y" style={{ borderColor: "var(--border)" }}>
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((s, i) => (
                    <div key={s.value} className={`reveal reveal-delay-${i + 1}`}>
                        <div className="font-display text-4xl md:text-5xl font-semibold mb-2" style={{ color: "var(--foreground)" }}>{s.value}</div>
                        <div className="text-sm leading-snug whitespace-pre-line" style={{ color: "var(--muted-foreground)" }}>{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stats;