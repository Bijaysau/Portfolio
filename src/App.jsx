// import "./App.css";
// import NavbarMain from "./components/navBarSection/NavbarMain";
// import HeroMain from "./components/heroSection/HeroMain";

// function App() {
//   return (
//     <main className="font-body">
//       <NavbarMain />
//       <HeroMain />

//     </main>
//   );
// }

// export default App;

import NavbarMain from "./components/navBarSection/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import Cursor3D from "./components/Cursor3D"; // <-- Add this
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ExpeinceMain from "./components/experinceSection/ExpeinceMain";
import ProjectsMain from "./components/projectSection/ProjectsMain";
import ContactMe from "./components/contactMeSection/ContactMe";
import FooterMain from "./components/footer/FooterMain";

function App() {
  return (
    <main className="font-body">
      {/* Add the cursor effect */}
      <Cursor3D />
      <NavbarMain />
      <HeroMain />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExpeinceMain />
      <ProjectsMain />

      <ContactMe />

      <FooterMain />
      <HelperSection />
    </main>
  );
}

export default App;
