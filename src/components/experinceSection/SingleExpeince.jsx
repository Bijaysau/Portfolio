// import React from "react";

// const SingleExpeince = ({ experiences }) => {
//   return (
//     <div>
//       <p>{experiences.job}</p>
//       <p>{experiences.company}</p>
//       <p>{experiences.date}</p>
//       <ul>
//         {experiences.responsibilities.map((resp, index) => (
//           <li key={index}>{resp}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SingleExpeince;

// import React from "react";

// const SingleExperience = ({ experiences }) => {
//   if (!experiences) return null;

//   return (
//     <div className="md:h-[400px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4">
//       <p className="font-bold text-cyan">{experiences.job}</p>
//       <p className="text-orange">{experiences.company}</p>
//       <p className="text-lightGrey">{experiences.date}</p>
//       <ul className="list-disc mt-4 pl-4 text-white">
//         {Array.isArray(experiences.responsibilities) &&
//           experiences.responsibilities.map((resp, index) => (
//             <li key={index}>{resp}</li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default SingleExperience;

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/varianys";
const SingleExpeince = ({ experiences, isSingle }) => {
  if (!experiences) return null;

  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`border-2 border-orange border-dashed rounded-2xl p-4 ${
        isSingle ? "w-full min-h-[300px]" : "w-full md:w-[240px] md:h-[400px]"
      }`}
    >
      <p className="font-bold text-cyan">{experiences.job}</p>
      <p className="text-orange">{experiences.company}</p>
      <p className="text-lightGrey">{experiences.date}</p>
      <ul className="mt-4 pl-6 text-white space-y-2 list-disc">
        {Array.isArray(experiences.responsibilities) &&
          experiences.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
      </ul>
    </motion.div>
  );
};

export default SingleExpeince;
