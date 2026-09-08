"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const industries = [
  { 
    title: "Technology", 
    subtitle: "Enterprise & Cloud",
    desc: "Robust enterprise software, cutting-edge cloud infrastructure, and advanced data analytics platforms. We empower modern businesses to scale securely and optimise their operations globally.", 
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80" 
  },
  { 
    title: "Real Estate", 
    subtitle: "Property & Infrastructure",
    desc: "Premium residential communities and state-of-the-art commercial spaces focused on sustainable architecture and long-term value creation.", 
    video: "/assets/hero_image_uw.mp4" 
  },
  { 
    title: "Media", 
    subtitle: "Broadcasting & Production",
    desc: "A comprehensive creative studio specializing in corporate communications, brand identity, and high-end cinematic video production.", 
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200&q=80" 
  },
  { 
    title: "E-Commerce", 
    subtitle: "Retail & Supply Chain",
    desc: "Next-generation retail platforms and global supply chain solutions optimized for speed, precision, and the fastest delivery times.", 
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80" 
  },
  { 
    title: "Hospitality", 
    subtitle: "Accommodation & Dining",
    desc: "Curating luxury accommodations and premium dining experiences. From boutique hotels to fine dining, we deliver utmost comfort and service.", 
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80" 
  },
  { 
    title: "Finance", 
    subtitle: "Capital & Investment",
    desc: "Strategic capital allocation and high-growth venture investments managed with rigorous oversight for the highest returns.", 
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80" 
  }
];

export default function Industries() {
  const targetRef = useRef(null);

  // useScroll tracks the vertical scroll progress of the targetRef container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Translate the horizontal track. 6 cards means a wider track, so we move it further.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-[#050810]" id="inds">
      
      {/* Sticky container that stays on screen while scrolling vertically */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden z-10 w-full">
        
        {/* Full background starry effect (stays inside sticky to cover full viewport) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
          {/* Teal accent dots */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#1B9E8B_2px,_transparent_2px)] bg-[length:120px_120px]"></div>
        </div>

        {/* Header Section above the cards (Static within sticky container) */}
        {/* Adjusted top position and removed flex-col centering impact on this absolute element */}
        <div className="absolute top-8 md:top-16 left-0 w-full px-6 md:px-16 lg:px-24 flex flex-col md:flex-row md:items-end justify-between gap-6 z-20 pointer-events-none">
          <div>
            {/* Reduced Header Font Size */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-medium leading-[1.1] tracking-tight">
              Six Sectors<br/>
              <span className="text-white/70">One Unified Vision</span>
            </h2>
          </div>
          
          {/* Teal accent button */}
          <a 
            href="#" 
            className="pointer-events-auto inline-flex items-center justify-center gap-3 bg-c5 hover:bg-c6 text-white font-medium py-2.5 px-6 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(27,158,139,0.3)] hover:shadow-[0_0_30px_rgba(27,158,139,0.5)] text-sm"
          >
            <span>Explore All Sectors</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        {/* Horizontal Scrolling Track */}
        {/* Reduced height of cards to increase gap top and bottom. Used margin-top to push it away from header */}
        <motion.div style={{ x }} className="flex gap-6 md:gap-8 px-6 md:px-16 lg:px-24 w-[600vw] md:w-[450vw] lg:w-[350vw] h-[45vh] md:h-[50vh] mt-10 md:mt-16 z-20">
          {industries.map((project, index) => (
            <div 
              key={index} 
              className="relative w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 h-full rounded-none overflow-hidden shadow-2xl border border-white/10 group bg-[#020408] transition-all duration-500 hover:border-c5/50 hover:shadow-[0_0_40px_rgba(27,158,139,0.15)]"
            >
              {/* Card Background Media */}
              {project.video ? (
                <video 
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-none transition-transform duration-1000 group-hover:scale-110 opacity-100"
                />
              ) : (
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-none transition-transform duration-1000 group-hover:scale-110 opacity-100"
                />
              )}
              


              {/* Card Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                {/* Teal accent subtitle */}
                <span className="text-c5 font-bold tracking-widest uppercase text-[0.65rem] md:text-xs mb-2 block">
                  {project.subtitle}
                </span>
                
                {/* Reduced Card Title Font Size */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                {/* Reduced Description Font Size */}
                <p className="text-xs md:text-sm text-gray-400 max-w-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Progress Bar at the bottom */}
        {/* Pushed further down to bottom-6 to increase gap between cards and line */}
        <div className="absolute bottom-6 md:bottom-10 left-0 w-full px-6 md:px-16 lg:px-24 flex justify-center z-20">
          <div className="relative w-full max-w-5xl h-[2px] bg-white/10 rounded-full">
            {/* The filling line */}
            <motion.div 
              className="absolute top-0 left-0 h-full bg-c5 rounded-full origin-left"
              style={{ scaleX: scrollYProgress }}
            />
            {/* The moving dot at the end of the line */}
            <motion.div 
              className="absolute top-1/2 -mt-[4px] w-[8px] h-[8px] bg-c5 rounded-full shadow-[0_0_12px_rgba(27,158,139,0.9)]"
              style={{ 
                left: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                x: "-50%" 
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
