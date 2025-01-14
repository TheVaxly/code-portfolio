import React from "react";
import "./../styles/ActivityBar.css";
import { FaFolder, FaSearch, FaCodeBranch, FaCog } from 'react-icons/fa';

const ActivityBar = ({ setActiveFile, openSettingsTab }) => (
  <div className="activity-bar">
    <button title="Explorer" onClick={() => setActiveFile("home.jsx")}>
      <FaFolder />
    </button>
    <button title="Search" onClick={() => console.log('Search Clicked')}>
      <FaSearch />
    </button>
    <button title="Source Control" onClick={() => console.log('Source Control Clicked')}>
      <FaCodeBranch />
    </button>
    <button title="Settings" className="settings-button" onClick={openSettingsTab}>
      <FaCog />
    </button>
  </div>
);

export default ActivityBar;
