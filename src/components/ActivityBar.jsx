import React from "react";
import "./../styles/ActivityBar.css";
import { FaFolder, FaSearch, FaCodeBranch, FaCog } from 'react-icons/fa';

const ActivityBar = ({ toggleSidebar, openSettingsTab, openFile }) => {
  const githubLink = "https://github.com/TheVaxly";

  return (
    <div className="activity-bar">
      <button 
        onClick={toggleSidebar}
        title="Explorer"
      >
        <FaFolder />
      </button>
      <button 
        title="Search" 
        onClick={() => openFile("contact.css")}
      >
        <FaSearch />
      </button>
      <button title="Source Control" onClick={() => window.open(githubLink, '_blank')}>
        <FaCodeBranch />
      </button>
      <button title="Settings" className="settings-button" onClick={openSettingsTab}>
        <FaCog />
      </button>
    </div>
  );
};

export default ActivityBar;