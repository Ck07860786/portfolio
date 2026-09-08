import { useCallback, useEffect, useRef, useState } from "react";

function HeroVisual() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const CODE_LINES = [
  { tokens: [{ t: "// MERN stack · production server", c: "#7A9A8E" }] },
  { tokens: [] },
  { tokens: [{ t: "import", c: "#B85C38" }, { t: " express ", c: "#2B6354" }, { t: "from", c: "#B85C38" }, { t: " 'express'", c: "#7A9A8E" }] },
  { tokens: [{ t: "import", c: "#B85C38" }, { t: " mongoose ", c: "#2B6354" }, { t: "from", c: "#B85C38" }, { t: " 'mongoose'", c: "#7A9A8E" }] },
  { tokens: [{ t: "import", c: "#B85C38" }, { t: " { router } ", c: "#2B6354" }, { t: "from", c: "#B85C38" }, { t: " './routes'", c: "#7A9A8E" }] },
  { tokens: [] },
  { tokens: [{ t: "const", c: "#B85C38" }, { t: " app ", c: "#1C1A15" }, { t: "= express()", c: "#2B6354" }] },
  { tokens: [] },
  { tokens: [{ t: "app", c: "#2B6354" }, { t: ".use(express.json())", c: "#7A7468" }] },
  { tokens: [{ t: "app", c: "#2B6354" }, { t: ".use(", c: "#7A7468" }, { t: "'/api'", c: "#7A9A8E" }, { t: ", router)", c: "#7A7468" }] },
  { tokens: [{ t: "app", c: "#2B6354" }, { t: ".use(", c: "#7A7468" }, { t: "'/auth'", c: "#7A9A8E" }, { t: ", authRouter)", c: "#7A7468" }] },
  { tokens: [] },
  { tokens: [{ t: "await", c: "#B85C38" }, { t: " mongoose.", c: "#2B6354" }, { t: "connect(", c: "#7A7468" }, { t: "process.env.MONGO_URI", c: "#B85C38" }, { t: ")", c: "#7A7468" }] },
  { tokens: [] },
  { tokens: [{ t: "app", c: "#2B6354" }, { t: ".listen(", c: "#7A7468" }, { t: "5000", c: "#B85C38" }, { t: ", () => {", c: "#7A7468" }] },
  { tokens: [{ t: "  console", c: "#2B6354" }, { t: ".log(", c: "#7A7468" }, { t: "'🚀 Server :5000'", c: "#7A9A8E" }, { t: ")", c: "#7A7468" }] },
  { tokens: [{ t: "})", c: "#7A7468" }] },
];

const MERN_NODES = [
  { label: "React", sub: "Frontend", color: "#61DAFB", bg: "rgba(97,218,251,0.1)", x: "10%", y: "8%" },
  { label: "Node.js", sub: "Runtime", color: "#4CAF50", bg: "rgba(76,175,80,0.1)", x: "72%", y: "5%" },
  { label: "Express", sub: "API Layer", color: "#B85C38", bg: "rgba(184,92,56,0.1)", x: "80%", y: "62%" },
  { label: "MongoDB", sub: "Database", color: "#47A248", bg: "rgba(71,162,72,0.1)", x: "4%", y: "68%" },
  { label: "JWT", sub: "Auth", color: "#2B6354", bg: "rgba(43,99,84,0.12)", x: "42%", y: "88%" },
];

  useEffect(() => {
    let line = 0;
    const tick = () => {
      if (line < CODE_LINES.length) {
        line++;
        setVisibleLines(line);
        timerRef.current = setTimeout(tick, line < 6 ? 120 : 90);
      } else {
        setTimeout(() => setShowToast(true), 400);
      }
    };
    timerRef.current = setTimeout(tick, 800);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -6, y: dx * 7 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative select-none"
      style={{ perspective: "1000px", height: "420px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* SVG connection lines behind everything */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
        viewBox="0 0 420 420"
        preserveAspectRatio="none"
      >
        {/* Center to nodes */}
        {[[210, 210, 55, 48], [210, 210, 315, 38], [210, 210, 349, 275], [210, 210, 35, 300], [210, 210, 189, 388]].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(43,99,84,0.18)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}
      </svg>

      {/* MERN node badges */}
      {MERN_NODES.map((n, i) => (
        <div
          key={n.label}
          className="node-pulse absolute z-10"
          style={{
            left: n.x, top: n.y,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <div
            className="px-2.5 py-1.5 rounded-lg border flex items-center gap-1.5"
            style={{
              background: n.bg,
              borderColor: n.color + "55",
              backdropFilter: "blur(4px)",
            }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: n.color }} />
            <div>
              <div className="text-[10px] font-mono-custom font-semibold leading-none mb-0.5" style={{ color: n.color }}>{n.label}</div>
              <div className="text-[8px] leading-none" style={{ color: "var(--muted-foreground)" }}>{n.sub}</div>
            </div>
          </div>
        </div>
      ))}

      {/* Main code editor card — 3D tilted */}
      <div
        className="absolute float-slow"
        style={{
          left: "14%", right: "10%",
          top: "6%", bottom: "6%",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out",
          zIndex: 5,
        }}
      >
        {/* Glow behind card */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "radial-gradient(ellipse at 50% 60%, rgba(43,99,84,0.18) 0%, transparent 70%)",
            transform: "translateZ(-20px) scale(1.05)",
            filter: "blur(20px)",
          }}
        />

        {/* Card */}
        <div
          className="relative rounded-2xl overflow-hidden h-full"
          style={{
            background: "#16181D",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04) inset",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Subtle scan-line shimmer */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(transparent 0%, rgba(255,255,255,0.015) 50%, transparent 100%)",
              backgroundSize: "100% 4px",
              zIndex: 1,
            }}
          />

          {/* Editor chrome */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ borderColor: "rgba(255,255,255,0.07)", background: "#1C1F26" }}
          >
            <div className="flex gap-1.5">
              {["#FF6059", "#FFBD2E", "#27C840"].map(c => (
                <span key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div className="flex-1 flex justify-center">
              <div
                className="px-3 py-0.5 rounded text-[10px] font-mono-custom flex items-center gap-2"
                style={{ background: "rgba(255,255,255,0.05)", color: "#606672" }}
              >
                <span style={{ color: "#2B6354" }}>●</span>
                server.ts
              </div>
            </div>
            <div className="flex gap-3">
              {["index.css", "routes.ts"].map(f => (
                <span key={f} className="text-[9px] font-mono-custom" style={{ color: "#404550" }}>{f}</span>
              ))}
            </div>
          </div>

          {/* Line numbers + code */}
          <div className="flex overflow-hidden" style={{ height: "calc(100% - 41px)" }}>
            {/* Line numbers */}
            <div className="py-4 px-3 text-right" style={{ background: "#1a1d23", minWidth: "36px" }}>
              {CODE_LINES.slice(0, Math.max(visibleLines, 1)).map((_, i) => (
                <div key={i} className="text-[11px] font-mono-custom leading-[1.75]" style={{ color: "#383c46" }}>
                  {i + 1}
                </div>
              ))}
            </div>

            {/* Code content */}
            <div className="py-4 px-4 overflow-hidden flex-1">
              {CODE_LINES.slice(0, visibleLines).map((line, li) => (
                <div key={li} className="text-[11px] font-mono-custom leading-[1.75] whitespace-nowrap">
                  {line.tokens.length === 0 ? (
                    <span>&nbsp;</span>
                  ) : (
                    line.tokens.map((tok, ti) => (
                      <span key={ti} style={{ color: tok.c }}>{tok.t}</span>
                    ))
                  )}
                  {li === visibleLines - 1 && visibleLines < CODE_LINES.length && (
                    <span className="cursor-blink inline-block w-[2px] h-[13px] ml-0.5 align-middle" style={{ background: "#2B6354" }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom status bar */}
          <div
            className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-1.5 border-t"
            style={{ borderColor: "rgba(255,255,255,0.06)", background: "#2B6354" }}
          >
            <span className="text-[9px] font-mono-custom" style={{ color: "rgba(246,243,238,0.7)" }}>TypeScript · MERN</span>
            <span className="text-[9px] font-mono-custom" style={{ color: "rgba(246,243,238,0.7)" }}>UTF-8 · Node 20</span>
          </div>
        </div>
      </div>

      {/* Build success toast */}
      {showToast && (
        <div
          className="toast-in absolute z-20"
          style={{ bottom: "14px", left: "50%", transform: "translateX(-50%)" }}
        >
          <div
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border"
            style={{
              background: "rgba(22,24,29,0.95)",
              borderColor: "rgba(43,99,84,0.5)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(43,99,84,0.2) inset",
              whiteSpace: "nowrap",
            }}
          >
            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(43,99,84,0.3)" }}>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#2B6354" strokeWidth="2.5" strokeLinecap="round"><polyline points="2,6 5,9 10,3"/></svg>
            </div>
            <div>
              <div className="text-[10px] font-mono-custom font-semibold" style={{ color: "#F6F3EE" }}>Build successful</div>
              <div className="text-[9px] font-mono-custom" style={{ color: "#7A7468" }}>compiled in 0.82s · 0 errors</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default HeroVisual;