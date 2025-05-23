// import React from "react";
// import { PiHexagonBold } from "react-icons/pi";
// const HeroPic = () => {
//   return (
//     <div className="h-full flex items-center justify-center">
//       <img
//         src="../../public/images/HexaPic2.png"
//         alt="Bijay Sau"
//         className="max-h-[450px] w-auto"
//       />
//       <div className="absolute -z-10 flex justify-center items-center animate-pulse">
//         <PiHexagonBold className="md:h-[90%] sm:h-[120%] min-h-[550px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
//       </div>
//     </div>
//   );
// };

// export default HeroPic;

import React from "react";
import { PiHexagonBold } from "react-icons/pi";
import profileImg from "../../../public/images/HexaPic3.png"; // Adjust path if needed
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varianys";
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex justify-center items-center w-full md:w-1/2"
    >
      <img
        src={profileImg}
        alt="Bijay Sau"
        className="max-h-[450px] w-auto object-contain z-10"
      />
      <div className="absolute -z-0 animate-pulse">
        <PiHexagonBold className="text-cyan blur-md animate-[spin_20s_linear_infinite] text-[600px] max-w-full" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
