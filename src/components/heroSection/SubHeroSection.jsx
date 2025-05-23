import React from "react";

const SubHeroSection = () => {
  return (
    <div className="w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 ">
      <p className="hover:text-white transition-colors cursor-default md:block sm:hidden">
        Problem Solver
      </p>
      <p className="hover:text-white transition-colors cursor-default md:block sm:hidden">
        Team Player
      </p>
      <p className="hover:text-white transition-colors cursor-default">
        Precision Focused
      </p>
    </div>
  );
};

export default SubHeroSection;
