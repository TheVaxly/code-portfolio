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

const initialTabs = [
  { id: "home.jsx", name: "home.jsx", icon: <FaReact className="icon-react" /> },
  { id: "about.html", name: "about.html", icon: <FaHtml5 className="icon-html" /> },
  { id: "contact.css", name: "contact.css", icon: <FaCss3Alt className="icon-css" /> },
  { id: "projects.json", name: "projects.json", icon: <LuFileJson className="icon-y" /> },
  { id: "skills.js", name: "skills.js", icon: <FaJs className="icon-y" /> },
];

const contentMap = {
  "home.jsx": (openFile) => <Home openFile={openFile} />,
  "about.html": <About />,
  "contact.css": <Contact />,
  "projects.json": <Projects />,
  "settings": <Settings />,
  "skills.js": <Skills />,
};

const EditorContainer = ({ activeFile, setActiveFile }) => (
  <div className="editor-container">
    <div className="tabs">
      {initialTabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab ${activeFile === tab.id ? "active" : ""}`}
          onClick={() => setActiveFile(tab.id)}
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
