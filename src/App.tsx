import Contact from "./components/Footer";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
import Projects from "./components/Projects";
import ScrollLinked from "./components/ui/framer-motion/ScrollLinked";
// import Particles from "./components/ui/BgParticles";
// import SplashCursor from "./components/ui/SplashCrusor";

const App = () => {
  return (
    <>
      {/* <SplashCursor /> */}
      <div className="relative">
        {/* Particles sebagai background */}
        {/* <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="sticky top-0 left-0"
        > */}
        {/* Konten utama */}
        <div className="absolute z-50">
          <ScrollLinked />
          <Navbar />
          <PageContainer>
            <Hero />
            <Projects />
            <Experience />
          </PageContainer>
          <Contact />
        </div>
        {/* </Particles> */}
      </div>
    </>
  );
};

export default App;
