// import React from "react";
// import { LuArrowDownRight } from "react-icons/lu";
// const NavbarBtn = () => {
//   return (
//     <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
//       Hire Me
//       <div className="sm:hidden md:block">
//         <LuArrowDownRight />
//       </div>
//     </button>
//   );
// };

// export default NavbarBtn;

import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

const links = [{ link: "Hire Me", section: "contact" }];

const NavbarBtn = () => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow"
          >
            {link.link}
            <span className="sm:hidden md:block">
              <LuArrowDownRight />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarBtn;
