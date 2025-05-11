// import ScrollReveal from "./ui/gsap/ScrollReveal";
import type { Variants } from "framer-motion";
import * as motion from "motion/react-client";
// import SplitText from "./ui/framer-motion/SplitText";
const listExperience = [
  {
    title: "Frontend Developer",
    company: "PT Indosistem Teknologi Utama",
    date: "Nov 2024 - Apr 2025",
    responsibilities: [
      "Developed responsive dashboard interfaces using ReactJS and Next.js, significantly improving user experience.",
      "Collaborated with cross-functional teams to ensure the design was consistent and scalable using TailwindCSS.",
      "Integrated RESTful APIs using Axios to fetch real-time data, ensuring smooth user interactions and fast page loading.",
      "Worked closely with the backend team to ensure seamless deployment using Git, improving team collaboration and version control.",
      "Developed a user-friendly web platform for event ticketing, simplifying the process of purchasing and managing tickets for customers.",
    ],
  },
  {
    title: "Mendix Developer Internship",
    company: "PT Merkle Innovation Technology",
    date: "Apr 2024 - Jul 2024",
    responsibilities: [
      "Develope a Contract Monitoring System using Mendix Studio Pro",
      "Design User Interface for App within Mendix Studio Pro",
      "Established data relationships between entities using a domain model in Mendix Studio Pro, fostering data integrity and facilitating seamless information flow.",
      "Utilized microflows to automate data capture, transfer, and deletion processes, optimizing efficiency and data integrity.",
    ],
  },
];

const Experience = () => {
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
      <section id="experience" className="my-10">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ once: true }}
        >
          <motion.div variants={cardVariants}>
            <h1 className="text-5xl text-blue-400 text-center uppercase font-bold mt-10">
              Experience
            </h1>
          </motion.div>
        </motion.div>
        {listExperience.map((experience, index) => (
          <div key={index} className="my-10 flex flex-col gap-5">
            <div className="flex flex-col justify-between">
              <p className="text-2xl">
                {experience.title} at{" "}
                <span className="font-bold">{experience.company}</span>
              </p>
              <p className="text-gray-500">{experience.date}</p>
            </div>
            <ul className="list-disc list-inside">
              {experience.responsibilities.map((responsibility, index) => (
                // <li key={index} className="font-light">
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {responsibility}
                </motion.li>
                // </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
};

export default Experience;
