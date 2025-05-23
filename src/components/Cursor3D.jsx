// import { useEffect, useRef } from "react";

// const Cursor3D = () => {
//   const mainCursorRef = useRef(null);
//   const trailRef = useRef(null);

//   const mousePos = useRef({ x: 0, y: 0 });
//   const cursorPos = useRef({ x: 0, y: 0 });
//   const trailPos = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const updateMouse = (e) => {
//       mousePos.current = { x: e.clientX, y: e.clientY };
//     };

//     const animate = () => {
//       // Main cursor follows instantly
//       cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.2;
//       cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.2;

//       // Trail follows more slowly
//       trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.05;
//       trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.05;

//       if (mainCursorRef.current) {
//         mainCursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
//       }
//       if (trailRef.current) {
//         trailRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0)`;
//       }

//       requestAnimationFrame(animate);
//     };

//     window.addEventListener("mousemove", updateMouse);
//     animate();

//     return () => {
//       window.removeEventListener("mousemove", updateMouse);
//     };
//   }, []);

//   return (
//     <>
//       {/* Trail background effect */}
//       <div
//         ref={trailRef}
//         className="fixed w-24 h-24 rounded-full bg-indigo-500 opacity-20 blur-2xl pointer-events-none z-40 transition-transform duration-200"
//         style={{ transform: "translate3d(0,0,0)" }}
//       ></div>

//       {/* Main cursor */}
//       <div
//         ref={mainCursorRef}
//         className="fixed w-6 h-6 bg-white bg-opacity-10 backdrop-blur-sm border border-white/30 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
//         style={{
//           transform: "translate3d(0,0,0)",
//           boxShadow: "0 0 8px rgba(255,255,255,0.3)",
//         }}
//       ></div>
//     </>
//   );
// };

// export default Cursor3D;

import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const Cursor3D = () => {
  const mainCursorRef = useRef(null);
  const trailRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.2;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.2;

      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.05;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.05;

      if (mainCursorRef.current) {
        mainCursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("scroll", handleScroll);
    animate();

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Trail */}
      <div
        ref={trailRef}
        className="fixed w-24 h-24 rounded-full bg-indigo-500 opacity-20 blur-2xl pointer-events-none z-40 transition-transform duration-200"
        style={{ transform: "translate3d(0,0,0)" }}
      ></div>

      {/* Main Cursor */}
      <div
        ref={mainCursorRef}
        className="fixed w-6 h-6 bg-white bg-opacity-10 backdrop-blur-sm border border-white/30 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          transform: "translate3d(0,0,0)",
          boxShadow: "0 0 8px rgba(255,255,255,0.3)",
        }}
      ></div>

      {/* Scroll to Top Button */}
      {showArrow && (
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="fixed bottom-6 right-6 z-50 
               px-4 py-4 rounded-full text-xl font-bold text-white 
               border border-cyan flex items-center gap-1 
               bg-gradient-to-r from-cyan to-orange 
               hover:border-orange hover:scale-110 
               transition-all duration-500 hover:shadow-cyanShadow 
               animate-fadeInUp"
        >
          <FaArrowUp className="text-xl" />
        </Link>
      )}
    </>
  );
};

export default Cursor3D;
