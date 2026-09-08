"use client";
import { useEffect, useRef } from "react";
import CursorLight from "@/components/CursorLight";
import { motion, useScroll, useTransform, animate, useInView, useSpring } from "framer-motion";

function AnimatedCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  const display = useTransform(spring, (current) => 
    Math.floor(current).toLocaleString() + suffix
  );

  return (
    <div className="flex flex-col items-center md:items-start" ref={ref}>
      <motion.div className="text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-heading font-bold leading-none text-gray-900 tracking-tight">
        {display}
      </motion.div>
      <div className="text-[0.7rem] md:text-[0.8rem] font-bold tracking-[0.25em] uppercase text-gray-500 mt-4">
        {label}
      </div>
    </div>
  );
}

export default function HeroAbout() {
  const pillars = [
    { n: "01", t: "Diversified Portfolio", d: "Technology, real estate, digital media, hospitality, e-commerce, and professional services." },
    { n: "02", t: "Entrepreneurial Independence", d: "Every company moves fast and owns its lane, driving focused growth." },
    { n: "03", t: "Collective Strength", d: "Shared capital, network, and trust compound across the entire ecosystem." },
  ];

  const stats = [
    { v: 12, suf: "+", l: "Companies" },
    { v: 6, suf: "", l: "Industries" },
    { v: 8, suf: "+", l: "Markets" },
    { v: 500, suf: "+", l: "Professionals" },
  ];

  const containerRef = useRef(null);
  const heroPinRef = useRef(null);
  const heroRevealRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: sectionScroll } = useScroll({
    target: heroRevealRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Parallax for the floating image in the second section
  const floatingImgY = useTransform(sectionScroll, [0, 1], [60, -60]);

  // We can use the intersection observer for the pinning effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroPinRef.current && heroRevealRef.current) {
        const r = heroRevealRef.current.getBoundingClientRect();
        const vh = window.innerHeight;
        if (r.top < vh && r.top > 0) {
          const p = (vh - r.top) / vh;
          heroPinRef.current.style.transform = `scale(${1 - p * 0.06})`;
          heroPinRef.current.style.opacity = `${1 - p * 0.4}`;
          heroPinRef.current.style.borderRadius = `${p * 16}px`;
        } else if (r.top >= vh) {
          heroPinRef.current.style.transform = "";
          heroPinRef.current.style.opacity = "";
          heroPinRef.current.style.borderRadius = "";
        } else {
          heroPinRef.current.style.transform = "scale(.94)";
          heroPinRef.current.style.opacity = ".6";
          heroPinRef.current.style.borderRadius = "16px";
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      
      {/* --- HERO SECTION --- */}
      <div className="hero-pin origin-top" ref={heroPinRef}>
        <CursorLight />
        <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#060E0E]">
          
          <motion.div 
            className="absolute inset-[-10%] z-0"
            style={{ y: yBg }}
          >
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ 
                opacity: 1, 
                scale: [1.1, 1.25, 1.1],
                x: ["0%", "-3%", "0%"],
                y: ["0%", "-2%", "0%"]
              }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeOut" },
                scale: { repeat: Infinity, duration: 25, ease: "easeInOut" },
                x: { repeat: Infinity, duration: 20, ease: "easeInOut" },
                y: { repeat: Infinity, duration: 30, ease: "easeInOut" }
              }}
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2500" 
              alt="Business Corporate Architecture" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060E0E] via-[#060E0E]/40 to-transparent opacity-90"></div>
          </motion.div>

          <motion.div 
            className="absolute inset-0 z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-end justify-between pb-12 md:pb-24 pointer-events-none"
            style={{ opacity: opacityHero }}
          >
            
            <div className="w-full md:w-3/5 pb-10 md:pb-0 pointer-events-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-heading font-bold text-[clamp(2.5rem,5vw,5rem)] leading-[1.0] tracking-tight text-white"
              >
                Unique World <br className="hidden md:block" />
                Group of Company
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full md:w-[380px] lg:w-[420px] aspect-[16/9] rounded-2xl overflow-hidden relative group cursor-pointer pointer-events-auto border-4 border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0">
                <video 
                  src="/assets/hero_image_uw.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20"></div>
              </div>
            </motion.div>

          </motion.div>
        </section>
      </div>

      {/* --- ABOUT SECTION (Cinematic Design) --- */}
      <div className="bg-white relative z-10" id="about" ref={heroRevealRef}>
        
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-gray-50 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>

        <section className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* --- LEFT: TEXT & STATS --- */}
            <div className="max-w-xl">
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="font-body font-medium text-[clamp(3.5rem,5vw,5rem)] leading-[1.05] tracking-tight text-gray-900 mb-8"
              >
                One Group. <br />
                <span className="text-gray-400">Infinite</span> Possibilities.
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-500 font-body text-[1.05rem] font-light leading-relaxed mb-6"
              >
                Unique World Group is a diversified conglomerate with deep roots across technology, real estate, digital media, hospitality, e-commerce, and professional services.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-500 font-body text-[1.05rem] font-light leading-relaxed mb-10"
              >
                Each company operates with entrepreneurial independence while benefiting from the collective strength of the group.
              </motion.p>

              <motion.hr 
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="border-gray-200 mb-10 origin-left"
              />
              
              {/* Stats Row inside Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-10 md:gap-16"
              >
                <div>
                  <div className="text-[3.5rem] md:text-[4.5rem] font-body font-medium text-c5 leading-none mb-2">12</div>
                  <div className="text-[0.6rem] font-bold tracking-[0.2em] text-gray-500 uppercase">Companies</div>
                </div>
                <div>
                  <div className="text-[3.5rem] md:text-[4.5rem] font-body font-medium text-c5 leading-none mb-2">6</div>
                  <div className="text-[0.6rem] font-bold tracking-[0.2em] text-gray-500 uppercase">Industries</div>
                </div>
                <div>
                  <div className="text-[3.5rem] md:text-[4.5rem] font-body font-medium text-c5 leading-none mb-2">8</div>
                  <div className="text-[0.6rem] font-bold tracking-[0.2em] text-gray-500 uppercase">Markets</div>
                </div>
              </motion.div>

            </div>

            {/* --- RIGHT: CINEMATIC MEDIA OVERLAP --- */}
            <div className="relative w-full max-w-[600px] ml-auto mt-16 lg:mt-0 pt-10">
              
              {/* Floating "UW" Circle Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                viewport={{ once: true }}
                className="absolute -top-4 md:-top-10 left-0 md:left-4 w-24 h-24 bg-gray-100/80 backdrop-blur-md rounded-full shadow-lg border border-white z-30 flex items-center justify-center"
              >
                <span className="text-c5 font-heading font-bold text-xl tracking-widest">UW</span>
              </motion.div>

              {/* Main Video (Tall vertical) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-[85%] ml-auto aspect-[3/4] md:aspect-[4/5] overflow-hidden shadow-2xl relative z-10 bg-gray-100"
              >
                <video
                  src="/assets/videouw.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
              </motion.div>

              {/* Overlapping Image (Bottom Left, Horizontal) */}
              <motion.div 
                style={{ y: floatingImgY }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 md:bottom-12 -left-4 md:-left-12 w-[65%] aspect-[4/3] md:aspect-[3/2] overflow-hidden shadow-2xl border-[6px] md:border-[10px] border-white z-20"
              >
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
                  alt="Team at whiteboard"
                  className="w-full h-full object-cover"
                />
              </motion.div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}