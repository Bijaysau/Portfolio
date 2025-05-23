// import React from "react";
// import HeroText from "./HeroText";
// import HeroPic from "./HeroPic";

// const HeroMain = () => {
//   return (
//     <div className="pt-40 pb-16">
//       <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-center items-center relative px-4 ">
//         <HeroText />
//         <HeroPic />
//       </div>
//     </div>
//   );
// };

// export default HeroMain;

import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGradiant from "./HeroGradiant";

const HeroMain = () => {
  return (
    <section id="home" className="pt-36 pb-16 ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-[1200px] mx-auto px-6 gap-10">
        <HeroText />
        <HeroPic />
        <HeroGradiant />
      </div>
    </section>
  );
};

export default HeroMain;
