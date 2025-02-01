import React, { useState, useEffect } from "react";
import "./../styles/Home.css";

const Home = ({ openFile }) => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Welcome to My Portfolio";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="animated-text">{displayedText}</h1>
        <p className="intro-text">
          I'm Marten Uiboupin, a <span className="highlight">web developer</span> who loves building web apps and websites. Explore my portfolio to learn more about me and my projects.
        </p>
        <div className="button-group">
          <button className="cta-button primary" onClick={() => openFile("projects.json")}>
            View Projects
          </button>
          <button className="cta-button secondary" onClick={() => openFile("contact.css")}>
            Contact me
          </button>
        </div>
      </div>
      <div className="background-shapes">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>
    </div>
  );
};

export default Home;
