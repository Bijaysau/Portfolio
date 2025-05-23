import React from "react";
import ExpeinceText from "./ExpeinceText";
import ExpeinceTop from "./ExpeinceTop";
import AllExpeince from "./AllExperince";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varianys";
const ExpeinceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        {" "}
        <ExpeinceText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        {" "}
        <ExpeinceTop />
      </motion.div>

      <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
      <AllExpeince />
    </div>
  );
};

export default ExpeinceMain;
