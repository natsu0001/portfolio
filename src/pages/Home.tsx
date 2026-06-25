import Navbar from "../components/layout/Navbar";

import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import EducationSection from "../components/sections/EducationSection";
import TechStackSection from "../components/sections/TechStackSection";
//import GallerySection from "../components/sections/GallerySection";
import AboutSection from "../components/sections/AboutSection";
//import ArchiveSection from "../components/sections/ArchiveSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/sections/Footer";

const Home = () => {
  return (
    <>
    
     <Navbar />

      <main>
        
        <HeroSection />

        <ProjectsSection />

        <ExperienceSection />

       

        <EducationSection />

       

        <TechStackSection />

      

        <AboutSection />

       

        <ContactSection />

        <Footer />
      </main>
    </>
  );
};

export default Home;