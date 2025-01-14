import React, { useEffect, useState } from "react";
import "./../styles/Skills.css";

const skillsData = {
  skills: [
    { name: "JavaScript", level: 70 },
    { name: "Python", level: 50 },
    { name: "CSS", level: 70 },
    { name: "HTML", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "React", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "SQL", level: 80 },
  ],
};

const ProgressBar = ({ level }) => {
  const [fillLevel, setFillLevel] = useState(0);

  useEffect(() => {
    const fillDuration = 100
    const increment = level / (fillDuration / 20);

    const interval = setInterval(() => {
      setFillLevel((prev) => {
        if (prev >= level) {
          clearInterval(interval);
          return level;
        }
        return Math.min(prev + increment, level);
      });
    }, 20);

    return () => clearInterval(interval);
  }, [level]);

  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${fillLevel}%` }} />
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-section">
        <ul>
          {skillsData.skills.map((skill, index) => (
            <li key={index}>
              <span>{skill.name}</span>
              <ProgressBar level={skill.level} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
