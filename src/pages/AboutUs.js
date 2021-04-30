import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import AboutSection from "../components/AboutSection";
import AwardsSection from "../components/AwardsSection";
import ProjectsSection from "../components/ProjectsSection";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AboutSection />
      <AwardsSection />
      <ProjectsSection />
      <Footer />
    </>
  );
};

export default AboutUs;
