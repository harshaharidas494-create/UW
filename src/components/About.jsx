"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const marqueeImages = [
    { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80", label: "Real Estate" },
    { src: "https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&w=600&q=80", label: "Technology" },
    { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80", label: "Hospitality" },
    { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80", label: "Digital Media" },
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80", label: "E-Commerce" },
    { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80", label: "Professional Services" },
  ];

  const stats = [
    { value: "12+", label: "Companies" },
    { value: "6", label: "Industries" },
    { value: "8+", label: "Markets" },
    { value: "500+", label: "Professionals" },
  ];

  return (
    <section id="about-section" className="bg-[#060E0E] text-white overflow-hidden">

      {/* ── TOP: Big Editorial Intro ── */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-16 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16"
        >
          {/* Left: Giant Heading */}
          <div className="md:w-3/5">
            <span className="text-c5 font-bold tracking-[0.3em] uppercase text-xs block mb-6">
              Our Diverse Portfolio
            </span>
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-heading font-bold leading-[1.0] tracking-tight">
              One Group. <br />
              <span className="text-c5">Infinite</span> <br />
              Possibilities.
            </h2>
          </div>

          {/* Right: Description + Line */}
          <div className="md:w-2/5 md:pb-3">
            <div className="w-12 h-[2px] bg-c5 mb-6"></div>
            <p className="text-[1.1rem] leading-relaxed text-white/60 font-light">
              Unique World Group is a diversified conglomerate spanning technology, real estate, digital media, hospitality, e-commerce, and professional services — built to scale across every frontier.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-8 border border-white/20 hover:border-c5 hover:bg-c5/10 text-white text-xs font-bold tracking-[0.2em] uppercase px-7 py-4 rounded-full transition-all duration-300"
            >
              Discover More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* ── Full-Bleed Hero Image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
            alt="Unique World Group — Our Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060E0E] via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060E0E]/50 via-transparent to-transparent"></div>

          {/* Quote overlaid on image */}
          <div className="absolute bottom-8 left-10 right-10 md:bottom-12 md:left-14">
            <p className="text-white/80 text-lg md:text-2xl font-light italic max-w-lg leading-relaxed">
              "We don&apos;t just build companies — <br className="hidden md:block" />
              we build ecosystems."
            </p>
            <span className="text-c5 text-xs font-bold tracking-[0.2em] uppercase mt-3 block">
              — UW Group, Founding Vision
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── Stats Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-60px" }}
        className="border-t border-b border-white/10 py-8 px-6 md:px-16"
      >
        <div className="max-w-[1300px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
          {stats.map((s, i) => (
            <div key={i} className="text-center px-4 md:px-10 py-4 md:py-0">
              <div className="text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-heading font-bold leading-none text-white mb-2">
                {s.value}
              </div>
              <div className="text-[0.7rem] md:text-[0.8rem] font-bold tracking-[0.2em] uppercase text-white/40">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Image Marquee ── */}
      <div className="py-16 relative">
        <div className="max-w-[1300px] mx-auto px-6 md:px-16 mb-10 flex items-center justify-between">
          <h3 className="font-heading text-2xl font-bold text-white">Ventures &amp; Domains</h3>
          <div className="flex-1 h-px bg-white/10 mx-8"></div>
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll to Explore</span>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#060E0E] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#060E0E] to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee flex gap-5 px-4">
            {[...marqueeImages, ...marqueeImages, ...marqueeImages].map((item, idx) => (
              <div
                key={idx}
                className="relative shrink-0 w-[280px] md:w-[340px] aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-5 left-5">
                  <span className="text-white text-sm font-bold tracking-wide">{item.label}</span>
                  <div className="w-0 group-hover:w-full h-[1px] bg-c5 transition-all duration-500 mt-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Tagline ── */}
      <div className="border-t border-white/10 py-10 px-6 md:px-16">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-sm tracking-widest uppercase text-center md:text-left">
            Unique World Group &copy; Building Tomorrow, Today
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            {["Technology", "Real Estate", "Media", "Hospitality"].map((tag) => (
              <span key={tag} className="border border-white/10 text-white/40 text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
