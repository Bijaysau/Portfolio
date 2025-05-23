import React from "react";

// const AboutMelmage = () => {
//   return (
//     <div className="h-[500px] w-[300px] realtive">
//       <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
//         <img
//           src="../../public/images/about-me3.png"
//           alt="aboutme image"
//           className="h-full w-auto object-cover"
//         />
//       </div>
//       <div className="h-[500px] w-[250px] bg-orange absolute botton-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
//     </div>
//   );
// };

// export default AboutMelmage;

const AboutMelmage = () => {
  return (
    <div className="relative w-[300px] h-[500px] mx-auto">
      {/* Decorative background shape */}
      <div className="absolute bottom-[-30px] left-[-30px] w-[250px] h-[500px] bg-orange-500 rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10 shadow-lg"></div>

      {/* Image container with better scaling and styling */}
      <div className="absolute w-full h-full overflow-hidden rounded-[100px] shadow-xl border-4 border-white">
        <img
          src="/images/about-me3.png"
          alt="About me"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutMelmage;

// const AboutMelmage = () => {
//   return (
//     <div className="relative w-[300px] h-[500px] mx-auto perspective-[1000px]">
//       {/* Decorative 3D background shape */}
//       <div className="absolute bottom-[-30px] left-[-30px] w-[250px] h-[500px] bg-gradient-to-br from-orange-400 to-orange-600 rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10 shadow-2xl transform rotate-[-6deg]"></div>

//       {/* Image container with 3D pop-out effect */}
//       <div className="absolute w-full h-full overflow-hidden rounded-[100px] shadow-[0_15px_35px_rgba(0,0,0,0.3)] transform rotate-[4deg] scale-[1.05] border-[3px] border-white transition-transform duration-500 ease-in-out hover:rotate-0 hover:scale-110 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
//         <img
//           src="/images/about-me3.png"
//           alt="About me"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default AboutMelmage;
