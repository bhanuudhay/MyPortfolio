import { useRef } from "react";
import Navbar from "./components/Navbar";
import TitleHeader from "./components/TitleHeader";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";

const App = () => {
  const experienceRef = useRef(null);
  const showcaseRef = useRef(null);

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShowcase = () => {
    showcaseRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div>
        <Navbar
          scrollToShowcase={scrollToShowcase}
          scrollToExperience={scrollToExperience}
        />
        <Hero />
        <ShowcaseSection ref={showcaseRef} />
        <TechStack />
        <br />
        <br />
        <Experience ref={experienceRef} />
        <br />
        <Certifications />
        <br />
        <br />
        <TitleHeader
          title="Why Work With Me"
          sub="🔍 Detail-focused. Quality at core"
        />
        <br />
        <br />
        <br />
        <br />
        <FeatureCards />
        <Contact />
        <br />
        <Footer />
      </div>
    </main>
  );
};

export default App;
