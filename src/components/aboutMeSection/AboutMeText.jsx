import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center ">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I’m Bijay Sau, a passionate Full Stack Developer specializing in the
        MERN stack. I excel at creating seamless user experiences and building
        robust, scalable applications that make an impact. With expertise in
        both front-end and back-end technologies, I blend creative design
        sensibilities with a commitment to clean, efficient code. Driven by
        continuous learning and adaptability, I embrace new technologies to
        craft innovative solutions that consistently exceed expectations.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start  sm:self-center text-white hover:text-cyan ">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
