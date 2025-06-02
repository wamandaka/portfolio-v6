import WeatherApp from "../assets/projects/weather-app.png";
import DashboardIuran from "../assets/projects/dashboard-jakmen.png";
import viptiket from "../assets/projects/viptiket.png";
import MovieApp from "../assets/projects/movie-app.png";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import TiltedCard from "./ui/framer-motion/TiltedCard";

const listProjects = [
  {
    name: "Weather App",
    description:
      "Create a Weather App using ReactJS, TailwindCSS, Axios and OpenWeather API",
    imageUrl: WeatherApp,
    category: "Branding / Signage",
    link: "https://wamandaka.github.io/react-app-weatherapp",
  },
  {
    name: "Website Ticketing",
    description: "Create a Website Ticketing using NextJS",
    imageUrl: viptiket,
    category: "Branding / Signage",
  },
  {
    name: "Website Movie App",
    description: "Create a Movie App using ReactJS, TMDB API and TailwindCSS",
    imageUrl: MovieApp,
    category: "Branding / Signage",
    link: "https://seryu-movie-app.netlify.app/",
  },
  {
    name: "Dashboard Iuran Warga",
    description: "Create a Dashboard UI using ReactJS",
    imageUrl: DashboardIuran,
    category: "Branding / Signage",
  },
];

const Projects = () => {
  // Transformasi scroll menjadi opacity & translateY
  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
      visibility: "hidden",
    },
    onscreen: {
      y: 0,
      opacity: 1,
      visibility: "visible",
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.1,
      },
    },
  };
  return (
    <>
      <section id="project">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ once: true }}
        >
          <motion.div variants={cardVariants}>
            <h1 className="text-5xl text-orange-400 text-center uppercase font-bold mt-10">
              Projects
            </h1>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10">
          {listProjects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              key={index}
            >
              {/* <img
                alt=""
                src={project.imageUrl}
                className="h-56 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-105"
              /> */}
              <TiltedCard
                imageSrc={project.imageUrl}
                altText={project.name}
                captionText={project.name}
                containerHeight="224px"
                containerWidth="100%"
                imageHeight="224px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="px-3 py-1 bg-orange-400 rounded-lg">
                    <p className="tilted-card-demo-text">{project.name}</p>
                  </div>
                }
              />

              <div className="mt-4 sm:items-center sm:gap-4">
                <strong className="font-medium">{project.name}</strong>
                <p className="mt-0.5 opacity-50 sm:mt-0">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
