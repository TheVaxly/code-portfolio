import React, { useState } from "react";
import "./../styles/Sidebar.css";
import { FaHtml5, FaReact, FaCss3, FaJs, FaChevronDown } from "react-icons/fa";
import { LuFileJson } from "react-icons/lu";

const files = [
  { displayName: "Home.jsx", actualName: "home.jsx", icon: <FaReact className="icon-react" /> },
  { displayName: "About.html", actualName: "about.html", icon: <FaHtml5 className="icon-html" /> },
  { displayName: "Contact.css", actualName: "contact.css", icon: <FaCss3 /> },
  { displayName: "Projects.json", actualName: "projects.json", icon: <LuFileJson className="icon-y" /> },
  { displayName: "Skills.js", actualName: "skills.js", icon: <FaJs className="icon-y" /> },
];

const Sidebar = ({ openFile, activeFile }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="sidebar">
      <h3 onClick={() => setIsOpen(!isOpen)}>
        <FaChevronDown className={`arrow-icon ${isOpen ? 'open' : ''}`} />
        PORTFOLIO
      </h3>
      <div className={`file-list ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          {files.map((file) => (
            <li 
              key={file.actualName} 
              onClick={() => openFile(file.actualName)}
              className={activeFile === file.actualName ? 'active' : ''}
            >
              <span className="icon">{file.icon}</span> {file.displayName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
