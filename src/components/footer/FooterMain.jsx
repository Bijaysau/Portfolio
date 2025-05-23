// import React from "react";
// import { Link } from "react-scroll";
// const links = [
//   { link: "About Me", section: "about" },
//   { link: "Skills", section: "skills" },
//   { link: "Experience", section: "experience" },
//   { link: "Projects", section: "projects" },
//   { link: "Contact", section: "contact" },
// ];

// const FooterMain = () => {
//   return (
//     <div className="px-4">
//       <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
//       <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto">
//         <p className="text-3xl text-lightGrey">Bijay Sau</p>
//         <ul className="flex gap-4 text-lightGrey text-xl">
//           {links.map((item, index) => {
//             return (
//               <li key={index}>
//                 <Link
//                   to={item.section}
//                   smooth={true}
//                   spy={true}
//                   duration={500}
//                   offset={-130}
//                   className="hover:text-white transition-all duration-500 cursor-pointer"
//                 >
//                   {item.link}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//       <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
//         @2025 Bijay Sau | All Rights Reserved.
//       </p>
//     </div>
//   );
// };

// export default FooterMain;

import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <footer className="bg-dark px-4 py-10 mt-24 border-t border-lightGrey">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-3xl font-semibold text-lightGrey mb-6 md:mb-0 hover:text-white transition-all">
          Bijay Sau
        </h1>

        <ul className="flex flex-wrap gap-6 justify-center md:justify-end text-lightGrey text-lg">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                to={item.section}
                smooth={true}
                spy={true}
                duration={500}
                offset={-130}
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-center text-sm text-lightBrown mt-8">
        © 2025 Bijay Sau | All Rights Reserved.
      </p>
    </footer>
  );
};

export default FooterMain;
