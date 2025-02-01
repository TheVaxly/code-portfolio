import React from "react";
import "./../styles/Projects.css";
import BuyMeACoffeeButton from "../components/BuyMeCoffeeButton";

import UnipalImg from "./../assets/unipal.png";
import HumanBenchmarkImg from "./../assets/human-benchmark.png";
import VocoKaardidImg from "./../assets/voco-kaardid.png";
import Larry from "./../assets/Larry.png";

const projects = [
  {
    title: "Unipal",
    description: "Friend making service website developed with my 2 classmates.",
    liveLink: "https://unipal.jurmoharak.ee/",
    sourceLink: "https://github.com/RaZeSloth/unicorn-project",
    image: UnipalImg,
    technologies: ["React + Vite", "MongoDB", "Express", "Bootstrap", "Typescript"] 
  },
  {
    title: "VOCO-Kaardid",
    description: "Card collecting website related to our school staff and members.",
    liveLink: "https://voco-kaardid.arendusekoobas.ee/",
    sourceLink: "https://github.com/RaZeSloth/voco-kaardid",
    image: VocoKaardidImg,
    technologies: ["React + Vite", "MongoDB  ", "Express", "Bootstrap", "Typescript"] 
  },
  {
    title: "Human Benchmark",
    description: "Clone of the Human Benchmark website.",
    liveLink: "https://benchmark.uiboupin.ee/",
    sourceLink: "https://github.com/TheVaxly/human-benchmark",
    image: HumanBenchmarkImg,
    technologies: ["HTML", "CSS", "JavaScript", "React + Vite"] 
  },
  {
    title: "ChatBot Larry",
    description: "Discord bot with various minigames and features.",
    sourceLink: "https://github.com/TheVaxly/ChatBot-Larry-",
    image: Larry,
    technologies: ["Python", "Discord.py", "SQLite"] 
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            style={{"--index": index}}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technology-tags">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className={`tech-tag ${tech.toLowerCase().replace('.', '-')}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  View Live
                </a>
              )}
              <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                View Source
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="support-section">
        <h2>Support My Work</h2>
        <BuyMeACoffeeButton />
      </div>
    </div>
  );
};

export default Projects;
