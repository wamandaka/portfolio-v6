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
      <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0]">
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Projects />
          <Services />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
