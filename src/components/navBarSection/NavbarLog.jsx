// import React from "react";

// const NavbarLog = () => {
//   return (
//     <div>
//       <h1 className="text-white text-2xl sm:hidden md:block">Bijay Sau</h1>
//       <h1 className="text-white font-special font-extrabold text-4xl sm:block md:hidden">
//         BS
//       </h1>
//     </div>
//   );
// };

// export default NavbarLog;

import React from "react";
import { Link } from "react-scroll";

const NavbarLog = () => {
  return (
    <Link
      to="home" // This should match the id of the top section
      smooth={true}
      duration={500}
      className="cursor-pointer"
    >
      <div>
        <h1 className="text-white text-2xl sm:hidden md:block cursor-none">
          Bijay Sau
        </h1>
        <h1 className="text-white font-special font-extrabold text-4xl sm:block md:hidden">
          BS
        </h1>
      </div>
    </Link>
  );
};

export default NavbarLog;
