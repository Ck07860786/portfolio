"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaNode, FaReact } from 'react-icons/fa';
import { DiMongodb, DiPostgresql } from 'react-icons/di';
import { RiNextjsFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';

export function Skills() {
  const skills = [
    { 
      name: "React.js", 
      level: 95, 
      icon: <FaReact className="text-sky-400" /> // React blue
    },
    { 
      name: "Node.js", 
      level: 90, 
      icon: <FaNode className="text-green-600" /> // Node green
    },
    { 
      name: "MongoDB", 
      level: 85, 
      icon: <DiMongodb className="text-green-500" /> // Mongo green
    },
    { 
      name: "Next.js", 
      level: 88, 
      icon: <RiNextjsFill className="text-black dark:text-white" /> // Next.js black/white
    },
    { 
      name: "TypeScript", 
      level: 50, 
      icon: <BiLogoTypescript className="text-blue-600" /> // TS blue
    },
    { 
      name: "PostgreSQL", 
      level: 80, 
      icon: <DiPostgresql className="text-blue-500" /> // PG blue
    }
  ];
  

  const tools = [
    { name: 'GitHub', icon: 'https://cdn.icon-icons.com/icons2/3685/PNG/512/github_logo_icon_229278.png' },
    { name: 'VS Code', icon: 'https://external-preview.redd.it/WSuAcyz1u8MoF8cokXspkmOIn8oWXaE8JH-SGXbUUW0.png?auto=webp&s=a6abc62ecb4a08f2bf2f287b79c9bd93006791d1' },
    { name: 'Postman', icon: 'https://cdn.iconscout.com/icon/free/png-512/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256' },
    { name: 'Figma', icon: 'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png' },
    { name: 'Docker', icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png' },
    { name: 'Vercel', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwNwDUq_S0U6wDzS60c45kVK5zpxF-03wsQ&s' }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-4 py-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          A balanced stack across front‑end, back‑end, and tooling to ship reliable, performant apps.
        </p>

        {/* Skills Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Technical Skills
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(24, 204, 252, 0.15)' }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-xl font-semibold text-white">{skill.name}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10 text-blue-300">{skill.level}%</span>
                </div>
                <div className="w-full rounded-full h-3 bg-gradient-to-r from-transparent border border-white/10 via-white/10 to-transparent">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400  rounded-full shadow-[0_0_16px_rgba(99,68,245,0.35)]"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.name === 'React.js' && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] bg-white/10 border border-white/10 text-gray-300">Hooks • Context • RSC</span>
                  )}
                  {skill.name === 'Node.js' && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] bg-white/10 border border-white/10 text-gray-300">REST • Auth • Caching</span>
                  )}
                  {skill.name === 'MongoDB' && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] bg-white/10 border border-white/10 text-gray-300">Indexes • Aggregation</span>
                  )}
                  {skill.name === 'Next.js' && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] bg-white/10 border border-white/10 text-gray-300">App Router • ISR</span>
                  )}
                  {skill.name === 'TypeScript' && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] bg-white/10 border border-white/10 text-gray-300">Generics • Utility Types</span>
                  )}
                  {skill.name === 'PostgreSQL' && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] bg-white/10 border border-white/10 text-gray-300">Schemas • Joins</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Tools & Platforms
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.06, y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-center transition-all duration-300 hover:shadow-[0_10px_30px_rgba(99,68,245,0.15)]"
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-12 h-12 mx-auto object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {tool.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-white">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'RESTful APIs', 'GraphQL', 'JWT Authentication', 'Socket.io','AWS',
              'Responsive Design', 'Git/GitHub', 'Agile Methodology', 'UI/UX Design',
              'Cloud Deployment', 'Database Design', 'API Integration', 'Testing'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}