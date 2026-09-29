import React from "react";
import SmoothScrollProvider from "./components/ui/SmoothScroll";
import NoiseGrain from "./components/ui/NoiseGrain";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export const App: React.FC = () => {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#08090d] text-neutral-100 relative selection:bg-amber-400 selection:text-neutral-950 font-sans">
        {/* Analog film grain & architectural guide grid */}
        <NoiseGrain />

        {/* Tactical navigation & real-time ribbon */}
        <Navbar />

        {/* Main Fluid Scroll Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
        </main>

        {/* Transmission & Colophon */}
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </SmoothScrollProvider>
  );
};

export default App;
