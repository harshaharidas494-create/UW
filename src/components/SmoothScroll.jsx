"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 5.0, // extremely slow slomo scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth curve
      smoothWheel: true,
      wheelMultiplier: 0.35, // heavily reduces scroll distance per wheel click
      smoothTouch: false,
      touchMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
