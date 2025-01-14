import React from "react";
import "./../styles/StatusBar.css";
import { FaCodeBranch } from 'react-icons/fa';

const StatusBar = () => {
  const githubLink = "https://github.com/TheVaxly/code-portfolio";

  return (
    <div className="status-bar">
      <div className="main" style={{ cursor: "pointer" }}
          onClick={() => window.open(githubLink, '_blank')}>
        <span className="icon"><FaCodeBranch /></span>
        <span 
          className="main-text" >
          main
        </span>
      </div>
      <span className="error">0 Errors  0 Warnings</span>
    </div>
  );
};

export default StatusBar;
