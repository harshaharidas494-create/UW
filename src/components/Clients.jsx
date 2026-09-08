"use client";
import { motion } from "framer-motion";

export default function Clients() {
  const clients = [
    "Google", "Microsoft", "Amazon", "Netflix", "Spotify", 
    "Meta", "Apple", "Tesla", "Adobe", "Intel"
  ];

  return (
    <section className="py-24 bg-[#030712] border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 text-center">

        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl font-body font-medium text-white tracking-tight"
        >
          Our Partners & Clients
        </motion.h2>
      </div>
      
      {/* Infinite Logo Marquee using Framer Motion */}
      <div className="relative w-full flex overflow-hidden group py-12 border-y border-white/5 bg-[#050b1a]">
        {/* Deep Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap w-max"
        >
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div key={i} className="flex items-center justify-center px-12 md:px-20">
              <span className="text-4xl md:text-6xl font-heading font-black text-white/10 transition-colors duration-500 hover:text-white cursor-default">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
