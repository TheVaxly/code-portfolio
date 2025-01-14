import React from "react";
import "./../styles/Home.css";

const Home = ({ openFile}) => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm Marten Uiboupin, a web developer who loves building web apps and websites. Explore my portfolio to learn more about me and my projects.
        </p>
        <button className="cta-button" onClick={() => openFile("projects.jsx")}>View Projects</button>
        <button className="cta-button" onClick={() => openFile("contact.jsx")}>Contact Me</button>
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
