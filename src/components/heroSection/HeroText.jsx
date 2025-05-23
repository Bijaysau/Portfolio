// import React from "react";

// const HeroText = () => {
//   return (
//     <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
//       <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan">
//         Full-Stack Web Developer
//       </h2>
//       <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">
//         Bijay Sau
//       </h1>
//       <p className="text-lg mt-4 text-white">
//         Hands-on experience developing responsive web apps with <br /> React,
//         Node.js, Express, and MongoDB.
//       </p>
//     </div>
//   );
// };

// export default HeroText;

// import React from "react";
// import { RiArrowDownCircleLine } from "react-icons/ri";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// const HeroText = () => {
//   return (
//     <div className="flex flex-col gap-4 justify-center text-center md:text-left w-full md:w-1/2">
//       <h2 className="text-cyan uppercase text-lg md:text-2xl tracking-wider">
//         Full-Stack Web Developer
//       </h2>
//       <h1 className="text-orange font-bold font-special text-4xl md:text-6xl">
//         Bijay Sau
//       </h1>
//       <p className="text-white text-base md:text-lg mt-2 leading-relaxed">
//         Hands-on experience building responsive full-stack apps using <br />
//         React, Node.js, Express, and MongoDB.
//       </p>
//       <motion.a
// variants={fadeIn("up", 0.6)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0 }}
//         href="https://drive.google.com/file/d/1dYuLZ4Y0SOzxhcz3n76X4MWcmquQte1T/view?usp=drive_link"
//         download
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start  sm:self-center text-white hover:text-cyan ">
//           Resume <RiArrowDownCircleLine />
//         </button>
//       </motion.a>

//       <div>
//         <motion.a
// variants={fadeIn("up", 0.6)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0 }}
//           href="https://drive.google.com/file/d/1dYuLZ4Y0SOzxhcz3n76X4MWcmquQte1T/view?usp=drive_link"
//           download
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start  sm:self-center text-white hover:text-cyan ">
//             <CiLinkedin />
//           </button>
//         </motion.a>
//         <motion.a
// variants={fadeIn("up", 0.6)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0 }}
//           href="https://drive.google.com/file/d/1dYuLZ4Y0SOzxhcz3n76X4MWcmquQte1T/view?usp=drive_link"
//           download
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start  sm:self-center text-white hover:text-cyan ">
//             <FaGithub />
//           </button>
//         </motion.a>
//         <motion.a
// variants={fadeIn("up", 0.6)}
//     initial="hidden"
//   whileInView="show"
//    viewport={{ once: false, amount: 0 }}
//           href="https://drive.google.com/file/d/1dYuLZ4Y0SOzxhcz3n76X4MWcmquQte1T/view?usp=drive_link"
//           download
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start  sm:self-center text-white hover:text-cyan ">
//             <BsTwitterX />
//           </button>
//         </motion.a>{" "}
//       </div>
//     </div>
//   );
// };

// export default HeroText;

import React from "react";
import { RiArrowDownCircleLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varianys";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-6 justify-center text-center md:text-left w-full md:w-1/2">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-cyan uppercase text-lg md:text-2xl tracking-wider"
      >
        Full-Stack Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-orange font-bold font-special text-4xl md:text-6xl"
      >
        Bijay Sau
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-white text-base md:text-lg mt-2 leading-relaxed"
      >
        Hands-on experience building responsive full-stack apps using <br />
        React, Node.js, Express, and MongoDB.
      </motion.p>

      {/* Resume Button */}
      <motion.a
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        href="https://drive.google.com/file/d/1AhY2qyL1wYV2yjx8inittIcnXv6lpp58/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="self-center md:self-start"
      >
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center gap-2 hover:bg-orange transition-all duration-500 text-white hover:text-cyan">
          Resume <RiArrowDownCircleLine size={24} />
        </button>
      </motion.a>

      {/* Social Icons */}
      <div className="flex gap-4 mt-4 justify-center md:justify-start">
        <motion.a
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          href="https://www.linkedin.com/in/bijay-sau-026b97233/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-orange rounded-full p-3 hover:bg-orange transition-all duration-500 text-white hover:text-cyan">
            <CiLinkedin size={24} />
          </button>
        </motion.a>
        <motion.a
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          href="https://github.com/Bijaysau"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-orange rounded-full p-3 hover:bg-orange transition-all duration-500 text-white hover:text-cyan">
            <FaGithub size={24} />
          </button>
        </motion.a>
        <motion.a
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          href="https://x.com/BijaySau"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-orange rounded-full p-3 hover:bg-orange transition-all duration-500 text-white hover:text-cyan">
            <BsTwitterX size={24} />
          </button>
        </motion.a>
      </div>
    </div>
  );
};

export default HeroText;
