import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import PageContainer from "./components/PageContainer";
import ScrollLinked from "./components/ui/framer-motion/ScrollLinked";
import AmbientBackground from "./components/ui/AmbientBackground";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 relative overflow-x-hidden">
      {/* Scroll progress bar */}
      <ScrollLinked />

      {/* Atmospheric ambient lighting */}
      <AmbientBackground />

      {/* Floating navigation dock */}
      <Navbar />

      {/* Main page content */}
      <main className="relative z-10">
        <PageContainer>
          <Hero />
          <About />
          <Experience />
          <Projects />
        </PageContainer>
      </main>

      {/* Contact & Footer section */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;
