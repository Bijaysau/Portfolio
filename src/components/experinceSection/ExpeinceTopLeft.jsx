import React from "react";
import ExperinceInfo from "./ExperinceInfo";
const ExpeinceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex gap-4 justify-center items-center">
        <ExperinceInfo number="1" text="Years" />
        <p className="font-bold text-5xl text-lightBrown"></p>
        <ExperinceInfo number="10+" text="Websites" />
      </div>
      <p className="text-center text-white">
        Full-stack web developer with 1+ years of hands-on experience. Skilled
        in building dynamic, responsive web applications. Passionate about clean
        code, UI/UX, and performance optimization.
      </p>
    </div>
  );
};

export default ExpeinceTopLeft;
