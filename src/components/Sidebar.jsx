import React from "react";
import "./../styles/Sidebar.css";
import { FaHtml5, FaReact, FaCss3 } from "react-icons/fa";
import { LuFileJson } from "react-icons/lu";

const files = [
  { displayName: "Home.jsx", actualName: "home.jsx", icon: <FaReact /> },
  { displayName: "About.html", actualName: "about.jsx", icon: <FaHtml5 className="icon-html" /> },
  { displayName: "Contact.css", actualName: "contact.jsx", icon: <FaCss3 /> },
  { displayName: "Projects.json", actualName: "projects.jsx", icon: <LuFileJson className="icon-json" /> },
];

const Sidebar = ({ openFile }) => (
  <div className="sidebar">
    <h3>PORTFOLIO</h3>
    <ul>
      {files.map((file) => (
        <li key={file.actualName} onClick={() => openFile(file.actualName)}>
          <span className="icon">{file.icon}</span> {file.displayName}
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
