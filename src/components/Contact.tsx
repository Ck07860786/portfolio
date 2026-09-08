import useScrollReveal from "@/hooks/useScrollReveal";
import { useState } from "react";

function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputBase: React.CSSProperties = {
    background: "var(--card)",
    border: "1px solid var(--border)",
    color: "var(--foreground)",
    borderRadius: "var(--radius)",
    fontSize: "14px",
    padding: "12px 14px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="reveal font-mono-custom text-xs uppercase tracking-widest mb-4" style={{ color: "var(--primary)" }}>Contact</div>
            <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl font-semibold leading-tight mb-6" style={{ color: "var(--foreground)" }}>
              Have a project in mind? Let&apos;s build something{" "}
              <em className="not-italic" style={{ color: "var(--primary)" }}>useful.</em>
            </h2>
            <p className="reveal reveal-delay-2 text-base leading-relaxed mb-8" style={{ color: "var(--muted-foreground)" }}>
              I&apos;m open to Full Stack / MERN opportunities, interesting products, and collaborations. If you&apos;re building something real, I&apos;d love to hear about it.
            </p>

            {/* Availability badge */}
            <div
              className="reveal reveal-delay-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-full border mb-10"
              style={{ borderColor: "var(--primary)", background: "rgba(43,99,84,0.07)", color: "var(--primary)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--primary)" }} />
              <span className="text-sm font-medium">Open to Full Stack / MERN opportunities</span>
            </div>

            <div className="reveal reveal-delay-3 flex flex-col gap-4">
              {[
                { label: "Email Me", href: "mailto:ck4001252@gmail.com", primary: true },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/chotukumar786/" },
                { label: "GitHub", href: "https://github.com/Ck07860786/" },
              ].map(({ label, href, primary }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border text-sm font-semibold transition-all duration-200"
                  style={primary
                    ? { background: "var(--primary)", color: "var(--primary-foreground)", border: "none" }
                    : { border: "1px solid var(--border)", color: "var(--foreground)", background: "transparent" }
                  }
                  onMouseEnter={(e) => { if (!primary) { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.background = "rgba(43,99,84,0.04)"; } }}
                  onMouseLeave={(e) => { if (!primary) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "transparent"; } }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border p-8 space-y-5"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  style={inputBase}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  style={inputBase}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  style={{ ...inputBase, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                {sent ? "Message sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
