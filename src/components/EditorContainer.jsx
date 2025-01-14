import React from "react";
import "./../styles/EditorContainer.css";

import Home from "../content/Home.jsx";
import About from "../content/About.jsx";
import Contact from "../content/Contact.jsx";
import Projects from "../content/Projects.jsx";
import Settings from "../content/Settings";
import Skills from "../content/Skills.jsx";

import { FaHtml5, FaCss3Alt, FaReact, FaJs  } from "react-icons/fa";
import { LuFileJson } from "react-icons/lu";

const tabs = [
  { name: "home.jsx", icon: <FaReact /> },
  { name: "about.jsx", icon: <FaHtml5 /> },
  { name: "contact.jsx", icon: <FaCss3Alt /> },
  { name: "projects.jsx", icon: <LuFileJson /> },
  { name: "skills.jsx", icon: <FaJs /> },
];

const contentMap = {
  "home.jsx": (openFile) => <Home openFile={openFile} />,
  "about.jsx": <About />,
  "contact.jsx": <Contact />,
  "projects.jsx": <Projects />,
  "settings": <Settings />,
  "skills.jsx": <Skills />,
};

const EditorContainer = ({ activeFile, setActiveFile }) => (
  <div className="editor-container">
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`tab ${activeFile === tab.name ? "active" : ""}`}
          onClick={() => setActiveFile(tab.name)}
        >
          <span className="icon">{tab.icon}</span>
          {tab.name}
        </div>
      ))}
    </div>
    <div className="editor">
      {typeof contentMap[activeFile] === "function" ? contentMap[activeFile](setActiveFile) : contentMap[activeFile] || <p>File not found.</p>}
    </div>
  </div>
);

export default EditorContainer;
