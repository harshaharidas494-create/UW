"use client";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="relative py-16 md:py-20 lg:py-28 bg-white" id="vis">
      
      {/* Decorative dark split */}
      <div className="hidden md:block absolute top-0 right-0 w-[45%] h-full bg-[#030712]"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left: Light Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pr-0 md:pr-12"
        >

          
          <h2 className="text-[clamp(1.8rem,3vw,3.5rem)] font-body font-medium leading-[1.05] text-gray-900 tracking-tight mb-6">
            Structuring <br className="hidden lg:block"/>
            the Future of <br className="hidden lg:block"/>
            <span className="text-gray-400">Global Trade.</span>
          </h2>
          
          <p className="text-[0.85rem] md:text-[0.95rem] font-body font-light leading-[1.8] text-gray-600 max-w-[450px] mb-8">
            Beyond conventional investments, we architect scalable ecosystems. By aligning capital with innovation, we ensure sustainable growth across all our operational territories.
          </p>
          
          <a href="#ft" className="inline-flex items-center gap-3 font-body text-[0.7rem] font-medium tracking-[0.15em] uppercase text-gray-900 group/btn">
            <span className="pb-1 border-b border-gray-300 transition-colors duration-300 group-hover/btn:border-gray-900">
              Corporate Strategy
            </span>
          </a>
        </motion.div>

        {/* Right: Dark Side Imagery */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[4/3] md:aspect-[4/4] lg:aspect-[5/4] w-full max-w-[500px] ml-auto mt-10 md:mt-0"
        >
          <img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1200" alt="Architecture" className="w-full h-full object-cover rounded-none" />
          
          {/* Overlapping Stats Card for Mobile Only */}
          <div className="md:hidden absolute -bottom-8 left-4 right-4 bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-gray-100 z-20">
             <div className="mb-6">
                <span className="text-3xl font-body font-medium text-gray-900 block mb-1">12</span>
                <span className="text-[0.6rem] font-body font-bold tracking-[0.15em] uppercase text-c5">Global Markets</span>
             </div>
             
             {/* Mid half line */}
             <div className="w-1/2 h-[1px] bg-gray-200 mb-6"></div>

             <div>
                <span className="text-3xl font-body font-medium text-gray-900 block mb-1">$5B+</span>
                <span className="text-[0.6rem] font-body font-bold tracking-[0.15em] uppercase text-c5">Assets Managed</span>
             </div>
          </div>
        </motion.div>

      </div>

      {/* Desktop Overlapping Stats Card - Centered on Background Split */}
      <div className="hidden md:block absolute bottom-16 lg:bottom-24 right-[45%] translate-x-1/2 bg-white p-8 lg:p-10 shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-gray-100 w-[260px] z-20">
         <div className="mb-6">
            <span className="text-3xl font-body font-medium text-gray-900 block mb-1">12</span>
            <span className="text-[0.6rem] font-body font-bold tracking-[0.15em] uppercase text-c5">Global Markets</span>
         </div>
         
         {/* Mid half line */}
         <div className="w-1/2 h-[1px] bg-gray-200 mb-6"></div>

         <div>
            <span className="text-3xl font-body font-medium text-gray-900 block mb-1">$5B+</span>
            <span className="text-[0.6rem] font-body font-bold tracking-[0.15em] uppercase text-c5">Assets Managed</span>
         </div>
      </div>
    </section>
  );
}
