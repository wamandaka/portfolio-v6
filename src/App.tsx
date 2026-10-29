import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Footer from "./components/Footer";
import LanguageProvider from "./i18n/LanguageProvider";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#090d16] text-[#e2e8f0] px-0 sm:px-4 py-0 sm:py-10 md:py-14 antialiased">
        {/* Floating Glassmorphic Nav Dock */}
        <Navbar />

        {/* Unified Figma Resume Document Card Canvas */}
        <div className="w-full sm:max-w-[780px] sm:mx-auto bg-[#0f172a] sm:border sm:border-[#334155] sm:rounded-2xl sm:shadow-[0_20px_60px_rgba(0,0,0,0.65)] overflow-hidden relative">
          <main id="main">
            <Hero />
            <About />
            <Projects />
            <Services />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;
