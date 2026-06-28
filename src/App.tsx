import { useEffect } from "react";
import GradientOrbs from "@/components/GradientOrbs";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import TLDR from "@/components/TLDR";
import Footer from "@/components/Footer";
import LightModeBanner from "@/components/LightModeBanner";
import TLDRFloat from "@/components/TLDRFloat";
import Achievements from "@/components/Achievements";

export default function App() {
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    requestAnimationFrame(() => {
      const el = document.querySelector(hash);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <LightModeBanner />
      <GradientOrbs />
      <Navbar />
      <ScrollToTop />
      <TLDRFloat />

      <main>
        <Hero />
        <Achievements />
        <Skills />
        <Education />
        <Projects />
        <TLDR />
        <Footer />
      </main>
    </div>
  );
}