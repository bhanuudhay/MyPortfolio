import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = ({ scrollToShowcase, scrollToExperience }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar" style={{ backgroundColor: "black" }}>
      <div className="inner">
        <a className="logo" href="#hero">
          Bhanu Udhay Singh
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                {name === "Projects" ? (
                  <button
                    onClick={scrollToShowcase}
                    style={{
                      background: "none",
                      border: "none",
                      color: "inherit",
                    }}
                  >
                    <span>{name}</span>
                    <span className="underline" />
                  </button>
                ) : name === "Experience" ? (
                  <button
                    onClick={scrollToExperience}
                    style={{
                      background: "none",
                      border: "none",
                      color: "inherit",
                    }}
                  >
                    <span>{name}</span>
                    <span className="underline" />
                  </button>
                ) : (
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact Me </span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
