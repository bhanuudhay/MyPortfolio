import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = React.forwardRef((props, ref) => {
  const sectionRef = ref || useRef(null);
  const project1 = useRef(null);
  const project2 = useRef(null);
  const project3 = useRef(null);
  const project4 = useRef(null);

  useGSAP(
    () => {
      const projects = [project1.current, project2.current, project3.current , project4.current];

      projects.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3 * index,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1}>
            <div className="image-wrapper">
              <a href="https://speedhive.netlify.app/">
                <img src="/images/project1.png" alt="Speed Hive" />
              </a>
            </div>
            <div className="text-content">
              <h2>Speed Hive</h2>
              <p className="text-white-50 md:text-xl">
                SpeedHive is a full-stack web app for testing, tracking, and
                visualizing internet speed with real-time results and historical
                insights.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2}>
              <div className="image-wrapper bg-[#0d0f1a]">
                <a href="https://linktrime.netlify.app/">
                  <img
                    src="/images/project2.png"
                    alt="Link Trim"
                    style={{ height: "220px", paddingTop: "20px" }}
                  />
                </a>
              </div>
              <h2>Link Trim</h2>
            </div>
            <div className="project" ref={project3}>
              <div className="image-wrapper bg-[#1a1a1a]">
                <a href="https://pageweivee.netlify.app/">
                  <img
                    src="/images/project3.png"
                    alt="Page Heive"
                    style={{ height: "210px", paddingTop: "20px" }}
                  />
                </a>
              </div>
              <h2>Page Heive</h2>
            </div>
            <div className="project" ref={project4} style ={{margin-right:"90px"}}>
              <div className="image-wrapper bg-[#1a1a1a]">
                <a href="https://ai-safety.netlify.app/">
                  <img
                    src="/images/project4.png"
                    alt="Ai - Dashboard"
                    style={{ height: "210px", paddingTop: "20px" }}
                  />
                </a>
              </div>
              <h2> AI Safety Incident Dashboard </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ShowcaseSection;
