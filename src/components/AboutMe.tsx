"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function AboutMe() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest text-white/60 uppercase mb-3">About</p>
          <h2 className="text-4xl md:text-5xl font-bold  py-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Full‑stack engineer focused on building performant, reliable products with clean architecture
            and thoughtful UX. I care about clarity, maintainability, and measurable impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Intro + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-[0_0_30px_rgba(99,68,245,0.15)]">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Hello, I'm Chotu Kumar</h3>
             <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
  Full-stack developer, completed B.Tech in Computer Science at BFCET
  Bathinda. I design modular systems, ship iteratively, and write readable, well-tested code.
</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>End‑to‑end product development: UI, APIs, DB, auth, deployment</li>
                <li>Component‑driven front‑end with accessibility and motion design</li>
                <li>RESTful services, data modeling, and pragmatic performance tuning</li>
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Experience', value: '1+ Year' },
                { label: 'Projects', value: '15+' },
                { label: 'Tech', value: '10+ Stack' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 text-center hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(24,204,252,0.25)] transition-transform"
                >
                  <p className="text-xs uppercase tracking-wider text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-extrabold mt-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <p className="text-sm text-white/70 mb-3">Core competencies</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'React • Next.js',
                  'Node.js • Express',
                  'TypeScript',
                  'MongoDB • PostgreSQL',
                  'Tailwind CSS',
                  'Framer Motion',
                  'Auth • JWT • OAuth',
                  'Cloud • Vercel'
                ].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10 text-gray-200">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {[
              {
                year: '2025–Present',
                title: 'Full Stack Developer',
                company: 'Cracent Private Limited',
                description: 'Contributing across the stack with a focus on reliability and DX.',
                bullets: [
                  'Developed modular React/Next.js components with strong typing',
                  'Implemented REST APIs, input validation, and error handling',
                  'Optimized MongoDB queries and API response times (~30% faster)'
                ]
              },
              {
                year: '2024',
                title: 'Full Stack Training',
                company: 'ThinkNext Technologies',
                description: 'Completed hands‑on training building real‑world projects end‑to‑end.',
                bullets: [
                  'Built CRUD apps with authentication and role‑based access',
                  'Integrated third‑party services (cloud storage, email, payments)',
                  'Practiced Git workflows, code reviews, and deployment'
                ]
              },
         {
  year: '2021–2025',
  title: 'B.Tech Computer Science',
  company: 'BFCET Bathinda',
  description: 'Completed B.Tech in Computer Science with focus on modern web development stack.',
  bullets: [
    'Data structures, algorithms, DBMS, OS, and networking',
    'Team projects: agile delivery and documentation',
    'Hackathons and open-source contributions'
  ]
}
            ].map((item: any, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8"
              >
                {/* Vertical line */}
                <div className="absolute left-1 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-cyan-400/30 to-purple-500/40" />
                {/* Dot */}
                <div className="absolute -left-1 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-[0_0_12px_rgba(99,68,245,0.6)]" />

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:-translate-y-1 transition-transform">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-blue-400 font-semibold">{item.year}</span>
                    <span className="text-xs text-gray-400">{item.company}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mt-1">{item.title}</h4>
                  <p className="text-gray-300 mt-2 leading-relaxed">{item.description}</p>
                  {item.bullets && (
                    <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300">
                      {item.bullets.map((b: string) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}