"use client";
import { motion, useInView, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Robust animated counter using Framer Motion
function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 40,
    damping: 15,
  });

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  const display = useTransform(spring, (current) => 
    Math.floor(current).toLocaleString() + suffix
  );

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Featured() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    { 
      title: "UW Technologies", 
      subtitle: "Digital Transformation",
      desc: "Delivering robust enterprise software, cutting-edge cloud infrastructure, and advanced data analytics platforms. We empower modern businesses to scale securely, optimise their operations, and accelerate digital transformation across global markets.", 
      stat1Val: 200, stat1Suf: "+", stat1l: "Global Clients", 
      stat2Val: 50, stat2Suf: "+", stat2l: "Deployed Solutions",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=80"
    },
    { 
      title: "UW Properties", 
      subtitle: "Real Estate & Infrastructure",
      desc: "Developing premium residential communities and state-of-the-art commercial spaces. Our focus lies in sustainable architecture, long-term value creation, and redefining modern urban living through innovative design and uncompromising quality standards.", 
      stat1Val: 5, stat1Suf: "", stat1l: "Major Landmarks", 
      stat2Val: 3000, stat2Suf: "+", stat2l: "Properties Delivered",
      video: "/assets/hero_image_uw.mp4"
    },
    { 
      title: "Pixel Media Group", 
      subtitle: "Creative & Broadcasting",
      desc: "A comprehensive creative studio specializing in corporate communications, brand identity, and high-end cinematic video production. We craft compelling narratives that resonate with global audiences and elevate brand positioning.", 
      stat1Val: 120, stat1Suf: "+", stat1l: "Active Campaigns", 
      stat2Val: 40, stat2Suf: "+", stat2l: "Strategic Partners",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1000&q=80"
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const activeProject = projects[activeIndex];

  return (
    <section id="feat" className="py-24 md:py-32 bg-[#020408] text-white overflow-hidden transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Animated Tabs/Controls */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {projects.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative px-4 py-2 text-sm md:text-base font-medium tracking-wider uppercase transition-colors duration-300 ${
                activeIndex === idx ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {item.title}
              {activeIndex === idx && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-c6"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center"
            >
              
              {/* Image Block */}
              <div className="w-full lg:w-[55%]">
                <div className="relative rounded-none overflow-hidden aspect-[16/11] border border-white/5">
                  {activeProject.video ? (
                    <video 
                      src={activeProject.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-none"
                    />
                  ) : (
                    <img 
                      src={activeProject.img} 
                      alt={activeProject.title} 
                      className="w-full h-full object-cover rounded-none"
                    />
                  )}
                </div>
              </div>

              {/* Text Block */}
              <div className="w-full lg:w-[45%] flex flex-col">
                <div className="mb-4">
                  <span className="text-c6 font-bold tracking-[0.2em] uppercase text-xs">
                    {activeProject.subtitle}
                  </span>
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 text-white">
                  {activeProject.title}
                </h3>
                
                <p className="leading-relaxed text-base md:text-lg mb-12 text-gray-400 font-light">
                  {activeProject.desc}
                </p>
                
                {/* Stats with Animated Counters */}
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
                  <div className="flex flex-col gap-1">
                    <div className="text-4xl md:text-5xl font-bold font-body text-white">
                      <Counter value={activeProject.stat1Val} suffix={activeProject.stat1Suf} />
                    </div>
                    <div className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500">
                      {activeProject.stat1l}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-4xl md:text-5xl font-bold font-body text-white">
                      <Counter value={activeProject.stat2Val} suffix={activeProject.stat2Suf} />
                    </div>
                    <div className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500">
                      {activeProject.stat2l}
                    </div>
                  </div>
                </div>

                {/* Enhanced Button */}
                <div className="mt-10">
                  <a 
                    href="#" 
                    className="group inline-flex items-center justify-center gap-3 font-medium uppercase tracking-wider text-sm transition-all duration-300 border-b-2 pb-1 text-c6 border-c6/30 hover:border-c6 hover:text-white"
                  >
                    <span>Explore Case Study</span>
                    <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
