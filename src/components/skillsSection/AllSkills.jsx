import React from "react";
import { TfiHtml5 } from "react-icons/tfi";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiSupabase } from "react-icons/si";
import SingleSkills from "./SingleSkills";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varianys";
const skills = [
  {
    skill: "HTML",
    icon: TfiHtml5, // Add your HTML icon here
  },
  {
    skill: "CSS",
    icon: IoLogoCss3, // Add your CSS icon here
  },
  {
    skill: "JavaScript",
    icon: FaJsSquare, // Add your JS icon here
  },
  {
    skill: "MongoDB",
    icon: SiMongodb, // Add your MongoDB icon here
  },
  {
    skill: "Express.js",
    icon: SiExpress, // Add your Express icon here
  },
  {
    skill: "React.js",
    icon: IoLogoReact, // Add your React icon here
  },
  {
    skill: "Node.js",
    icon: FaNode, // Add your Node icon here
  },

  {
    skill: "Git ",
    icon: FaGithub, // Add your Git icon here
  },
  {
    skill: "Tailwind CSS",
    icon: BiLogoTailwindCss, // Add your Tailwind icon here
  },
  {
    skill: "MySQL",
    icon: GrMysql, // Add your MySQL icon here
  },
  {
    skill: "Supabase",
    icon: SiSupabase, // Add your Java icon here
  },
];
const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              key={item.skill}
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkills
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />{" "}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
