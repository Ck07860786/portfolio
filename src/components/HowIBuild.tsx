import useScrollReveal from "@/hooks/useScrollReveal";

const PROCESS_STEPS = [
  { num: "01", title: "Understand", body: "Map requirements, user goals, and business constraints before writing a line of code." },
  { num: "02", title: "Design", body: "Architecture first — data models, API contracts, UI structure, and user flows." },
  { num: "03", title: "Build", body: "Full-stack delivery: React interfaces, Node.js APIs, MongoDB schemas, and third-party integrations." },
  { num: "04", title: "Improve", body: "Testing, performance profiling, deployment, and iterative refinement post-launch." },
];

function HowIBuild() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="py-24 px-6 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal font-mono-custom text-xs uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>Process</div>
        <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl font-semibold mb-16" style={{ color: "var(--foreground)" }}>
          How I Build.
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.num} className={`reveal reveal-delay-${i + 1} relative`}>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px -translate-x-2 z-0" style={{ background: "var(--border)" }} />
              )}
              <div className="relative z-10">
                <div className="font-mono-custom text-3xl font-medium mb-4" style={{ color: "var(--muted)" }}>{step.num}</div>
                <div className="font-display text-xl font-semibold mb-2" style={{ color: "var(--foreground)" }}>{step.title}</div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default HowIBuild