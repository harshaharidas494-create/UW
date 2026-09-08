"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [navStuck, setNavStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavStuck(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? "hidden" : "";
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const t = document.querySelector(id);
    if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
    if (menuOpen) toggleMenu();
  };

  return (
    <>
      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[999] bg-[#030712] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <a href="#about" onClick={(e) => scrollToSection(e, "#about")} className="text-3xl font-body font-medium text-white opacity-50 hover:opacity-100 hover:text-c5 transition-colors">About</a>
        <a href="#eco" onClick={(e) => scrollToSection(e, "#eco")} className="text-3xl font-body font-medium text-white opacity-50 hover:opacity-100 hover:text-c5 transition-colors">Ecosystem</a>
        <a href="#feat" onClick={(e) => scrollToSection(e, "#feat")} className="text-3xl font-body font-medium text-white opacity-50 hover:opacity-100 hover:text-c5 transition-colors">Businesses</a>
        <a href="#vis" onClick={(e) => scrollToSection(e, "#vis")} className="text-3xl font-body font-medium text-white opacity-50 hover:opacity-100 hover:text-c5 transition-colors">Vision</a>
        <a href="#ft" onClick={(e) => scrollToSection(e, "#ft")} className="text-3xl font-body font-medium text-white opacity-50 hover:opacity-100 hover:text-c5 transition-colors">Contact</a>
      </div>

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-500 ${
          navStuck
            ? "py-4 px-6 md:px-8 lg:px-16 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "py-5 lg:py-7 px-6 md:px-8 lg:px-16 bg-gradient-to-b from-black/80 to-transparent"
        }`}
      >
        <a href="#" className="flex items-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={navStuck ? "/assets/logo-color.png" : "/assets/logo-white.png"}
            alt="Logo"
            className="h-[30px] w-auto transition-opacity duration-300"
          />
        </a>
        <div className="hidden md:flex items-center gap-10">
          <a href="#about" onClick={(e) => scrollToSection(e, "#about")} className={`text-[0.75rem] font-body font-medium tracking-[0.1em] uppercase transition-colors duration-300 ${navStuck ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white drop-shadow-md"}`}>About</a>
          <a href="#eco" onClick={(e) => scrollToSection(e, "#eco")} className={`text-[0.75rem] font-body font-medium tracking-[0.1em] uppercase transition-colors duration-300 ${navStuck ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white drop-shadow-md"}`}>Ecosystem</a>
          <a href="#feat" onClick={(e) => scrollToSection(e, "#feat")} className={`text-[0.75rem] font-body font-medium tracking-[0.1em] uppercase transition-colors duration-300 ${navStuck ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white drop-shadow-md"}`}>Businesses</a>
          <a href="#vis" onClick={(e) => scrollToSection(e, "#vis")} className={`text-[0.75rem] font-body font-medium tracking-[0.1em] uppercase transition-colors duration-300 ${navStuck ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white drop-shadow-md"}`}>Vision</a>
          <a href="#ft" onClick={(e) => scrollToSection(e, "#ft")} className={`text-[0.75rem] font-body font-medium tracking-[0.1em] uppercase border py-2.5 px-6 rounded-sm transition-all duration-300 ${navStuck ? "border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-white" : "border-white/30 text-white hover:bg-white hover:text-gray-900 drop-shadow-md"}`}>Contact</a>
        </div>
        <button className="block md:hidden bg-transparent border-none cursor-pointer p-2 z-[1001]" aria-label="Menu" onClick={toggleMenu}>
          <i className={`block w-[24px] h-[2px] my-[6px] transition-all duration-300 ${menuOpen ? (navStuck ? 'bg-gray-900 translate-y-[8px] rotate-45' : 'bg-white translate-y-[8px] rotate-45') : (navStuck ? 'bg-gray-900' : 'bg-white')}`}></i>
          <i className={`block w-[24px] h-[2px] my-[6px] transition-all duration-300 ${menuOpen ? 'opacity-0' : (navStuck ? 'bg-gray-900' : 'bg-white')}`}></i>
          <i className={`block w-[24px] h-[2px] my-[6px] transition-all duration-300 ${menuOpen ? (navStuck ? 'bg-gray-900 -translate-y-[8px] -rotate-45' : 'bg-white -translate-y-[8px] -rotate-45') : (navStuck ? 'bg-gray-900' : 'bg-white')}`}></i>
        </button>
      </nav>
    </>
  );
}
