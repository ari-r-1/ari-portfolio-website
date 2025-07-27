import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import CoreCompetencies from "@/components/CoreCompetencies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Education />
      <Experience />
      <Skills />
      <Certificates />
      <CoreCompetencies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
