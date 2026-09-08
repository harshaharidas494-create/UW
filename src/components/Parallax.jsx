"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function AnimatedWord({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.35, 1, 0.35]);
  const glow = useTransform(progress, range, [
    "0px 0px 0px rgba(27,158,139,0)",
    "0px 0px 20px rgba(27,158,139,0.6)",
    "0px 0px 0px rgba(27,158,139,0)",
  ]);
  const scale = useTransform(progress, range, [1, 1.05, 1]);
  const y = useTransform(progress, range, [4, -2, 4]);

  return (
    <motion.span
      className="inline-block mr-[0.3em]"
      style={{ opacity, scale, y, textShadow: glow }}
    >
      {word}
    </motion.span>
  );
}

export default function Parallax() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const line1 = ["We", "do", "not", "merely", "navigate", "markets"];
  const line2 = ["We", "engineer", "them\""];

  // Slower flow: wider ranges with more overlap
  const line1Ranges = [
    [0.05, 0.25, 0.40],
    [0.12, 0.30, 0.47],
    [0.19, 0.36, 0.54],
    [0.26, 0.42, 0.61],
    [0.33, 0.49, 0.68],
    [0.40, 0.55, 0.75],
  ];

  const line2Ranges = [
    [0.45, 0.62, 0.80],
    [0.55, 0.72, 0.88],
    [0.65, 0.82, 0.96],
  ];

  return (
    <section
      ref={sectionRef}
      className="h-[120vh] md:h-[100vh] w-full relative bg-white flex items-center justify-center border-y border-gray-100"
    >
      <div className="relative z-20 text-center max-w-6xl px-6 md:px-12">
        <h2 className="text-[clamp(2rem,4vw,4rem)] font-body leading-[1.3] tracking-tight">
          <span className="block font-medium mb-4">
            {line1.map((word, i) => (
              <AnimatedWord
                key={i}
                word={word}
                progress={scrollYProgress}
                range={line1Ranges[i]}
              />
            ))}
          </span>
          <span className="block font-medium">
            {line2.map((word, i) => (
              <AnimatedWord
                key={i}
                word={word}
                progress={scrollYProgress}
                range={line2Ranges[i]}
              />
            ))}
          </span>
        </h2>
      </div>
    </section>
  );
}
