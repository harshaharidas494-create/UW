"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export default function SpaceShowcase() {
  const containerRef = useRef(null);
  
  // Scroll parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const planetY = useSpring(useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]), { stiffness: 80, damping: 20 });
  const starsY = useSpring(useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]), { stiffness: 80, damping: 20 });
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]), { stiffness: 80, damping: 20 });
  
  // Mouse hover 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { damping: 20, stiffness: 100 });
  const rotateY = useSpring(mouseX, { damping: 20, stiffness: 100 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30; 
    const y = (clientY / innerHeight - 0.5) * -30;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[100vh] min-h-[800px] bg-[#030712] overflow-hidden flex items-center justify-center border-y border-white/5"
      style={{ perspective: 1000 }}
    >
      {/* LAYER 1: Deep Space Galaxy Background (Parallax scroll) */}
      <motion.div 
        className="absolute inset-[-20%] z-0 opacity-40 pointer-events-none"
        style={{ y: starsY }}
      >
        <img 
          src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2500" 
          alt="Galaxy" 
          className="w-full h-full object-cover mix-blend-screen" 
        />
      </motion.div>

      {/* LAYER 2: Distant Stars (Rotating slowly) */}
      <motion.div 
        className="absolute inset-[-50%] z-0 opacity-50 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=2500" 
          alt="Stars" 
          className="w-full h-full object-cover mix-blend-screen" 
        />
      </motion.div>

      {/* LAYER 3: Background Massive Text (Scrolls faster) */}
      <motion.div 
        className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
        style={{ y: textY }}
      >
        <h2 className="text-[15vw] font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/0 leading-none select-none tracking-tighter">
          BEYOND
        </h2>
        <h2 className="text-[15vw] font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/0 leading-none select-none tracking-tighter -mt-[4vw]">
          LIMITS
        </h2>
      </motion.div>

      {/* LAYER 4: The 3D Planet (Reacts to scroll and mouse) */}
      <motion.div 
        className="absolute z-20 w-[90vw] max-w-[800px] aspect-square rounded-full flex items-center justify-center pointer-events-none"
        style={{ 
          y: planetY,
          rotateX,
          rotateY
        }}
      >
        {/* Floating Animation */}
        <motion.div
          animate={{ y: ["-3%", "3%", "-3%"] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="w-full h-full relative"
        >
          {/* Earth Image with Screen blend mode to remove black background */}
          <img 
            src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1500" 
            alt="3D Earth" 
            className="w-full h-full object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_100px_rgba(27,158,139,0.3)]"
          />
        </motion.div>
      </motion.div>

      {/* LAYER 5: Foreground UI / Glassmorphism Cards */}
      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-end h-[60%] pointer-events-none">
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-sm pointer-events-auto transform transition-all duration-500 hover:scale-105 hover:bg-white/10 group">
          <div className="w-12 h-12 rounded-full bg-c5/20 flex items-center justify-center mb-6 border border-c5/50 group-hover:bg-c5/40 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-c6">
              <path d="M2 12h4l3-9 5 18 3-9h5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-xl font-heading font-bold text-white mb-3">Global Infrastructure</h3>
          <p className="text-white/60 text-sm leading-relaxed font-body">
            Building the foundations of tomorrow with cutting-edge technology deployed across five continents.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-sm pointer-events-auto transform transition-all duration-500 hover:scale-105 hover:bg-white/10 group hidden md:block">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/50 group-hover:bg-purple-500/40 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-purple-400">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-xl font-heading font-bold text-white mb-3">Economic Dominance</h3>
          <p className="text-white/60 text-sm leading-relaxed font-body">
            Driving market trends and dominating industries through strategic acquisitions and visionary leadership.
          </p>
        </div>

      </div>

      {/* Subtle overlay gradient at top and bottom to blend with the rest of the site */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#060e0e] to-transparent z-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060e0e] to-transparent z-40 pointer-events-none"></div>
    </section>
  );
}
