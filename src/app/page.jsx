"use client";
import { useEffect } from "react";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import HeroAbout from "@/components/HeroAbout";
import Ecosystem from "@/components/Ecosystem";
import Clients from "@/components/Clients";
import Featured from "@/components/Featured";
import Parallax from "@/components/Parallax";
import Industries from "@/components/Industries";
import Vision from "@/components/Vision";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // 1. Intersection Observer for fade/scale reveals
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("v");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".sr, .sr-s").forEach((e) => io.observe(e));

    // 2. Intersection Observer for CountUp numbers
    const countUp = (el) => {
      const t = +(el.dataset.count || 0);
      const s = el.dataset.suffix || "";
      const d = 2200;
      const st = performance.now();
      const f = (n) => {
        const p = Math.min((n - st) / d, 1);
        const v = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(v * t) + s;
        if (p < 1) {
          requestAnimationFrame(f);
        } else {
          el.textContent = t + s;
        }
      };
      requestAnimationFrame(f);
    };

    const ci = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            countUp(e.target);
            ci.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll("[data-count]").forEach((e) => ci.observe(e));
  }, []);

  return (
    <>
      <Loader />
      <Header />
      <HeroAbout />
      <Ecosystem />
      <Featured />
      <Parallax />
      <Industries />
      <Vision />
      <About />
      <Footer />
    </>
  );
}
