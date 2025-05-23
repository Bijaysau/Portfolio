import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProjects from "./SingleProjects";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varianys";
const projects = [
  {
    name: "E-commerce",
    year: "May2025",
    align: "right",
    image: "/images/Project1.jpg",
    link: "https://e-com-frontend-sandy.vercel.app/",
  },
  {
    name: "Uber-Clone",
    year: "April2025",
    align: "left",
    image: "/images/Project2.jpg",
    link: "https://uber-frontend-three.vercel.app/",
  },
  {
    name: "Text to Speech",
    year: "March2025",
    align: "right",
    image: "/images/Project3.jpg",
    link: "https://tts-frontend-one.vercel.app/",
  },
  {
    name: "Chat App",
    year: "Aug2024",
    align: "left",
    image: "/images/Project4.jpg",
    link: "https://chatapp-fronted.vercel.app/login",
  },
];
const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => (
          <SingleProjects
            key={index}
            name={item.name}
            year={item.year}
            align={item.align}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
