import React from "react";
import "./../styles/Projects.css";

import UnipalImg from "./../assets/unipal.png";
import PortfolioImg from "./../assets/portfolio.png";
import HumanBenchmarkImg from "./../assets/human-benchmark.png";
import VocoKaardidImg from "./../assets/voco-kaardid.png";
import Larry from "./../assets/Larry.png";

const projects = [
  {
    title: "Unipal",
    description: "Friend making service website developed with my 2 classmates.",
    link: "https://unipal.jurmoharak.ee/",
    image: UnipalImg, 
  },
  {
    title: "Portfolio",
    description: "My software development portfolio website.",
    link: "/",
    image: PortfolioImg, 
  },
  {
    title: "VOCO-Kaardid",
    description: "Card collecting website related to our school staff and members.",
    link: "https://voco-kaardid.arendusekoobas.ee/",
    image: VocoKaardidImg, 
  },
  {
    title: "Human Benchmark",
    description:
      "Clone of the Human Benchmark website.",
    link: "https://github.com/TheVaxly/human-benchmark",
    image: HumanBenchmarkImg, 
  },
  {
    title: "ChatBot Larry",
    description: "Discord bot with various minigames and features.",
    link: "https://github.com/TheVaxly/ChatBot-Larry-",
    image: Larry, 
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
