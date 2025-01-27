import React, { useEffect, useState } from "react";
import "./../styles/Skills.css";

const skillsData = {
  "Frontend Development": [
    { name: "React", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "TypeScript", level: 75 },
    { name: "HTML", level: 85 },
    { name: "CSS", level: 70 },
  ],
  "Backend Development": [
    { name: "Node.js", level: 70 },
    { name: "Express.js", level: 85 },
    { name: "Python", level: 50 },
  ],
  "Databases": [
    { name: "MongoDB", level: 70 },
    { name: "SQL", level: 80 },
  ]
};

const ProgressBar = ({ level }) => {
  const [fillLevel, setFillLevel] = useState(0);

  useEffect(() => {
    const fillDuration = 100;
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
      <div className="progress-fill" style={{ width: `${fillLevel}%` }}>
        <span className="progress-label">{Math.round(fillLevel)}%</span>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>My Confidence in Skills</h1>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="skill-category">
          <h2>{category}</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                </div>
                <ProgressBar level={skill.level} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
