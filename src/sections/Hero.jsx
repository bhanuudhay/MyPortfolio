import React from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "../components/TitleHeader";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  // Function to scroll to the ShowcaseSection when the button is clicked
  const scrollToProjects = () => {
    const section = document.getElementById("work"); // ID of the ShowcaseSection
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden ">
      <div className="absolute top-0 left-0 z-10 ">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gp-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:pd-2 p-1 rounded-full bg-white-50 "
                        />
                        <span> {word.text} </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into real projects</h1>
              <h1>that deliver result</h1>
            </div>
            <p>
              Hi, I’m <b>Bhanu Udhay</b>, a <b>Full Stack Developer</b>{" "}
              passionate about building dynamic web applications.
              <br /> Constantly leveling up my skills in DSA and modern tech
              stacks.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
              onClick={scrollToProjects} // Trigger scroll to the ShowcaseSection
            />
          </div>
        </header>
        <figure>
          <div className="hero-3d-layout border-transparent border-2">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <TitleHeader
        title="From Concept to Creation"
        sub=" 🎯 My hands-on project experiences"
      />
    </section>
  );
};

export default Hero;
