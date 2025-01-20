import React, { useState } from "react";
import "./../styles/StatusBar.css";
import { FaCodeBranch } from 'react-icons/fa';

const StatusBar = () => {
  const githubLink = "https://github.com/TheVaxly/code-portfolio";
  const [clickCount, setClickCount] = useState(0);

  const handleErrorClick = () => {
    setClickCount(prev => prev + 1);
  };

  const getErrorText = () => {
    return clickCount >= 69 ? "69 Errors  420 Warnings" : "0 Errors  0 Warnings";
  };

  return (
    <div className="status-bar">
      <div className="main" style={{ cursor: "pointer" }}
          onClick={() => window.open(githubLink, '_blank')}>
        <span className="icon"><FaCodeBranch /></span>
        <span className="main-text">main</span>
      </div>
      <span className="error" onClick={handleErrorClick} style={{ cursor: "pointer" }}>
        {getErrorText()}
      </span>
    </div>
  );
};

export default StatusBar;
