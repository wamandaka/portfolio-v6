import * as motion from "motion/react-client";
import { FaHtml5, FaReact } from "react-icons/fa";
import Profile from "../assets/icon.png";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
// import { SiTypescript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import SplitText from "./ui/framer-motion/SplitText";
import { useRef } from "react";

const Hero = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <main id="home">
        <div className="flex flex-col justify-center items-center h-screen md:h-full text-center gap-4 md:py-24">
          <motion.div ref={constraintsRef}>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.4}
              className="cursor-pointer"
            >
              <img
                src={Profile}
                alt="Avatar"
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
                className="rounded-full w-32 h-32 shadow-2xl shadow-primary/20"
              />
            </motion.div>
          </motion.div>
          <div className="text-3xl font-bold md:w-md lg:w-sm">
            <div className="font-normal">
              <SplitText text="Hi, i'm" />
            </div>{" "}
            <SplitText text="Waman Daka Wardani" cn="text-center" />
          </div>
          <div className="text-lg font-extralight md:w-1/2">
            <SplitText
              text="I have experience in developing responsive and dynamic user interfaces using ReactJS and Next.js, and integrating them with RESTful APIs."
              cn="text-center"
            />
          </div>

          <div className="flex gap-5 mt-5 justify-center items-center ">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <a
                href="mailto:wamandaka122@gmail.com"
                className="px-5 py-3 bg-primary text-black rounded-full cursor-pointer font-semibold border-2 border-primary hover:bg-black hover:text-primary transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <a
                href="https://drive.google.com/file/d/1OleZS0hx0FLzpG3C1MEiOCdTWPJ8SyfX/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border-2 border-primary rounded-full cursor-pointer font-semibold hover:bg-primary hover:text-black transition-all duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </div>
          <h1 className="mt-10 text-xl uppercase tracking-widest">
            <SplitText text="Experience With" />
          </h1>
          <div className="flex flex-wrap justify-center gap-5">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <FaHtml5 size={45} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <FaReact size={45} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <RiNextjsFill size={45} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <RiTailwindCssFill size={45} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <BiLogoTypescript size={45} />
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
