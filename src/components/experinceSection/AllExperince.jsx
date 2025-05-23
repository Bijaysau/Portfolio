// import React from "react";
// import SingleExpeince from "./SingleExpeince";
// import { FaArrowRight } from "react-icons/fa";
// const experiences = [
//   {
//     job: "Full Stack Developer",
//     company: "Labmentix",
//     date: "2025-Present",
//     responsibilities: [
//       "Developing and maintaining web applications using React, Node.js, and MongoDB.",
//       " Collaborating with cross-functional teams to design and implement new features.",
//       " Writing clean, maintainable code and conducting code reviews.",
//     ],
//   },
//   {
//     job: "Full Stack Developer",
//     company: "Labmentix",
//     date: "2025-Present",
//     responsibilities: [
//       "Developing and maintaining web applications using React, Node.js, and MongoDB.",
//       " Collaborating with cross-functional teams to design and implement new features.",
//       " Writing clean, maintainable code and conducting code reviews.",
//     ],
//   },
//   {
//     job: "Full Stack Developer",
//     company: "Labmentix",
//     date: "2025-Present",
//     responsibilities: [
//       "Developing and maintaining web applications using React, Node.js, and MongoDB.",
//       " Collaborating with cross-functional teams to design and implement new features.",
//       " Writing clean, maintainable code and conducting code reviews.",
//     ],
//   },
// ];
// const AllExperince = () => {
//   return (
//     <div className="flex md:flex-row sm:flex-col items-center justify-between ">
//       {experiences.map((experiences, index) => {
//         return (
//           <React.Fragment key={index}>
//             <SingleExpeince key={index} experiences={experiences} />
//             {index < 2 ? (
//               <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
//             ) : (
//               ""
//             )}
//           </React.Fragment>
//         );
//       })}
//     </div>
//   );
// };
// export default AllExperince;

import React from "react";
import SingleExpeince from "./SingleExpeince";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varianys";
const experiences = [
  {
    job: "Full Stack Developer",
    company: "Labmentix",
    date: "2025-Present",
    responsibilities: [
      "Designed and developed multiple full-stack web applications at Labmentix using React, Node.js, and MongoDB, delivering robust frontend and backend solutions.",
      "Implemented a real-time collaboration feature in a task management app using WebSockets, significantly boosting user engagement and reducing task update conflicts.",
      "Collaborated closely with product managers and designers to translate business requirements into scalable, user-friendly features.",
      "Wrote clean, maintainable code and conducted regular peer code reviews to ensure high code quality and consistency.",
      "Integrated various RESTful APIs and third-party tools, including payment gateways and analytics services, to extend functionality and automate workflows.",
      "Monitored and optimized application performance, improving page load speed by 20% and maintaining near-perfect uptime for smooth user interactions.",
    ],
  },

  // multiple testing ke liye yaha ek aur add kar sakte ho
];

const AllExperience = () => {
  const isSingle = experiences.length === 1;

  return (
    <div
      className={`flex ${
        isSingle
          ? "justify-center"
          : "flex-col md:flex-row justify-between flex-wrap"
      } items-center gap-6 mt-12`}
    >
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExpeince experiences={experience} isSingle={isSingle} />
          {!isSingle && index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <FaArrowRight className="text-4xl text-orange hidden md:block" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperience;
