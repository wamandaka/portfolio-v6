import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import LanguageProvider from "./i18n/LanguageProvider";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Services />
        <About />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

export default App;
