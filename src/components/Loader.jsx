"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let lp = 0;
    const interval = setInterval(() => {
      lp += Math.floor(Math.random() * 15) + 5; 
      if (lp >= 100) {
        lp = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoaded(true), 500); // brief pause at 100%
      }
      setLoadingProgress(lp);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div 
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712]"
          initial={{ opacity: 1, y: "0%" }}
          exit={{ y: "-100%", opacity: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="/assets/logo-white.png"
            alt="Logo"
            className="h-[40px] md:h-[50px] w-auto mb-10"
          />

          {/* Loading Bar */}
          <div className="w-[200px] h-[2px] bg-white/10 overflow-hidden mb-6 relative">
             <motion.div 
               className="absolute top-0 left-0 h-full bg-c5"
               initial={{ width: "0%" }}
               animate={{ width: `${loadingProgress}%` }}
               transition={{ duration: 0.2 }}
             />
          </div>

          {/* Percentage */}
          <div className="text-[0.7rem] font-body font-medium tracking-[0.3em] uppercase text-white/50 tabular-nums">
             Loading {loadingProgress}%
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
