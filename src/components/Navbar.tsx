"use client";
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Trophy, Mail, ChevronRight } from 'lucide-react';

interface ModernNavbarProps {
  heroRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  achievementsRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export default function Navbar({ 
  heroRef, 
  aboutRef, 
  skillsRef, 
  projectsRef, 
  achievementsRef, 
  contactRef 
}: ModernNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  
  // Smooth transforms for navbar animation
  const navbarHeight = useTransform(scrollY, [0, 100], [80, 64]);
  const navbarBlur = useTransform(scrollY, [0, 50], [8, 20]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);
  const progressWidth = useTransform(scrollY, [0, 2000], ['0%', '100%']);

  // Memoized navigation items for better performance
  const navItems = useMemo(() => [
    { name: 'Home', ref: heroRef, icon: Home, id: 'home' },
    { name: 'About', ref: aboutRef, icon: User, id: 'about' },
    { name: 'Skills', ref: skillsRef, icon: Code, id: 'skills' },
    { name: 'Projects', ref: projectsRef, icon: Briefcase, id: 'projects' },
    { name: 'Achievements', ref: achievementsRef, icon: Trophy, id: 'achievements' },
    { name: 'Contact', ref: contactRef, icon: Mail, id: 'contact' }
  ], [heroRef, aboutRef, skillsRef, projectsRef, achievementsRef, contactRef]);

  // Optimized scroll to section function
  const scrollToSection = useCallback((sectionRef: React.RefObject<HTMLDivElement | null>) => {
    sectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
    setIsMenuOpen(false);
  }, []);

  // Throttled scroll handler for better performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          setScrolled(scrollPosition > 50);

          // Update active section
          const offset = 100;
          const sections = [heroRef, aboutRef, skillsRef, projectsRef, achievementsRef, contactRef];
          const sectionIds = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
          
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i].current;
            if (section) {
              const rect = section.getBoundingClientRect();
              if (rect.top <= offset) {
                setActiveSection(sectionIds[i]);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroRef, aboutRef, skillsRef, projectsRef, achievementsRef, contactRef]);

  // Close menu on escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && !(e.target as Element)?.closest('[data-navbar]')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"
        style={{ width: progressWidth }}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
      />

      {/* Main Navbar */}
      <motion.nav
        data-navbar
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg' 
            : 'bg-transparent'
        }`}
        style={{ height: navbarHeight }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            
            {/* Logo */}
            <motion.div
              onClick={() => scrollToSection(heroRef)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer flex items-center space-x-2"
              style={{ scale: logoScale }}
            >
              <div className="relative">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 5 }}
                >
                  <span className="text-white font-bold text-lg">C</span>
                </motion.div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              
              <div className={`transition-all duration-300 ${scrolled ? 'hidden sm:block' : 'block'}`}>
                <h1 className="text-xl font-bold text-white">Chotu Kumar</h1>
                <p className="text-xs text-gray-300 -mt-0.5">Full Stack Developer</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.ref)}
                    className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                      isActive 
                        ? 'text-white bg-white/10 shadow-lg' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="flex items-center space-x-2">
                      <item.icon size={16} />
                      {!scrolled && <span>{item.name}</span>}
                    </span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/20"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col justify-center items-center space-y-6 px-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className="flex items-center space-x-4 text-white text-xl font-medium p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 w-64 justify-between group hover:bg-white/10 transition-all duration-300"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <item.icon size={20} />
                    </div>
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              ))}

              {/* Social Links */}
              <motion.div
                className="flex space-x-6 pt-8"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { href: 'https://github.com/ck07860786', label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/chotukumar786/', label: 'LinkedIn' },
                  { href: 'mailto:ck4001252@gmail.com', label: 'Email' }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.label.charAt(0)}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator (Desktop) */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col space-y-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ 
          opacity: scrolled ? 1 : 0, 
          x: scrolled ? 0 : 50 
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.ref)}
            className={`w-2 h-2 rounded-full border transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-blue-500 border-blue-500 scale-150'
                : 'border-white/30 hover:border-white/60 hover:scale-125'
            }`}
            whileHover={{ scale: activeSection === item.id ? 1.5 : 1.25 }}
            title={item.name}
          />
        ))}
      </motion.div>
    </>
  );
}