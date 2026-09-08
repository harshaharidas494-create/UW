"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Ecosystem() {
  const ecoScrollRef = useRef(null);

  useEffect(() => {
    const eH = ecoScrollRef.current;
    if (!eH) return;
    let d = false, sx = 0, sl = 0;

    const onMouseDown = (e) => {
      d = true;
      sx = e.pageX - eH.offsetLeft;
      sl = eH.scrollLeft;
    };
    const onMouseLeave = () => (d = false);
    const onMouseUp = () => (d = false);
    const onMouseMove = (e) => {
      if (!d) return;
      e.preventDefault();
      eH.scrollLeft = sl - (e.pageX - eH.offsetLeft - sx) * 1.5;
    };

    eH.addEventListener("mousedown", onMouseDown);
    eH.addEventListener("mouseleave", onMouseLeave);
    eH.addEventListener("mouseup", onMouseUp);
    eH.addEventListener("mousemove", onMouseMove);

    return () => {
      eH.removeEventListener("mousedown", onMouseDown);
      eH.removeEventListener("mouseleave", onMouseLeave);
      eH.removeEventListener("mouseup", onMouseUp);
      eH.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const companies = [
    { title: "UW Technologies", ind: "Technology", desc: "Enterprise software, cloud infrastructure, and digital transformation.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200", col: "lg:col-span-8", badge: "Flagship" },
    { title: "UW Properties", ind: "Real Estate", desc: "Premium real estate development across commercial sectors.", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800", col: "lg:col-span-4" },
    { title: "Pixel Media Group", ind: "Media", desc: "Digital publishing and content creation.", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800", col: "lg:col-span-4" },
    { title: "Souq Digital", ind: "E-Commerce", desc: "Next-generation e-commerce and curated experiences.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200", col: "lg:col-span-8" },
    { title: "Oasis Hospitality", ind: "Hospitality", desc: "Hotel management, F&B ventures, and luxury.", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800", col: "lg:col-span-6" },
    { title: "Apex Consulting", ind: "Consulting", desc: "Strategic consulting for enterprises and governments.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", col: "lg:col-span-6" },
    { title: "CloudNest", ind: "Cloud Tech", desc: "Cloud hosting, cybersecurity, and managed IT services.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f2?q=80&w=800", col: "lg:col-span-5" },
    { title: "UW Capital", ind: "Finance", desc: "Investment management and venture funding.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200", col: "lg:col-span-7" }
  ];

  const industries = ["Technology", "Real Estate", "Digital Media", "E-Commerce", "Hospitality", "Financial Services"];

  return (
    <div id="eco" className="bg-gray-50">
      
      {/* Elegant Industry Marquee */}
      <div className="py-5 overflow-hidden bg-white border-y border-gray-100 flex items-center">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex whitespace-nowrap w-max"
        >
          {[...industries, ...industries, ...industries].map((item, j) => (
            <div key={j} className="flex items-center group cursor-default">
              <span className="text-[0.85rem] md:text-[0.95rem] font-body font-medium px-8 md:px-12 text-gray-500 drop-shadow-[0_1px_2px_rgba(0,0,0,0.08)] group-hover:text-c5 group-hover:drop-shadow-[0_0_12px_rgba(27,158,139,0.5)] transition-all duration-500 uppercase tracking-[0.25em]">
                {item}
              </span>
              <span className="text-gray-300 font-medium text-[0.8rem] group-hover:text-c6 transition-colors duration-500">✧</span>
            </div>
          ))}
        </motion.div>
      </div>

      <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <h2 className="text-[clamp(2.2rem,3.5vw,3.2rem)] font-body font-medium leading-[1.05] text-gray-900 tracking-tight">
                Companies That<br /><span className="text-gray-400">Define</span> Industries
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[400px]"
            >
              <p className="text-[1.05rem] font-body font-light leading-relaxed text-gray-500">
                A meticulously curated portfolio of industry-leading brands, driving innovation and shaping the future of global markets.
              </p>
            </motion.div>
          </div>

          {/* Premium Cinematic Horizontal Scroll (Compact, Sharp Edges) */}
          <div className="overflow-x-auto [scrollbar-width:none] pb-16 cursor-grab active:cursor-grabbing" ref={ecoScrollRef}>
            <div className="flex gap-6 w-max">
              {companies.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  key={i}
                  className="w-[280px] lg:w-[340px] shrink-0 relative group h-[360px] md:h-[420px] rounded-none overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-700"
                >
                  {/* Background Image */}
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-[15s] ease-out group-hover:scale-110 pointer-events-none" 
                  />
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/40 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/95 via-[#030712]/30 to-transparent pointer-events-none"></div>
                  
                  {/* Optional Flagship Badge */}
                  {item.badge && (
                    <span className="absolute top-5 left-5 z-10 text-[0.55rem] font-bold tracking-[0.2em] uppercase px-3 py-1.5 bg-c5 rounded-sm text-white shadow-lg backdrop-blur-md">
                      {item.badge}
                    </span>
                  )}

                  {/* Hover Icon (Top Right) removed as requested */}

                  {/* Content (Bottom aligned) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-6 transition-transform duration-500 group-hover:translate-y-0 pointer-events-none">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-c5"></div>
                      <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-gray-300">
                        {item.ind}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-body font-medium text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[0.85rem] font-light leading-relaxed text-gray-300 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
