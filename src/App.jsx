import React, { useState } from "react";
import Header from "./components/Header";
import ActivityBar from "./components/ActivityBar";
import Sidebar from "./components/Sidebar";
import EditorContainer from "./components/EditorContainer";
import StatusBar from "./components/StatusBar";
import "./App.css";

const App = () => {
  const [activeFile, setActiveFile] = useState("home.jsx");
  const [tabs, setTabs] = useState(["home.jsx"]);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const openFile = (fileName) => {
    if (!tabs.includes(fileName)) {
      setTabs([...tabs, fileName]);
    }
    setActiveFile(fileName);
  };

  const openSettingsTab = () => {
    const settingsFileName = "settings";
    if (!tabs.includes(settingsFileName)) {
      setTabs([...tabs, settingsFileName]);
    }
    setActiveFile(settingsFileName);
  };

  return (
    <div className={`app ${theme}-theme`}>
      <Header />
      <div className="app-body">
        <ActivityBar openFile={openFile} openSettingsTab={openSettingsTab} />
        <Sidebar openFile={openFile} />
        <EditorContainer 
          activeFile={activeFile} 
          tabs={tabs} 
          setActiveFile={setActiveFile} 
          toggleTheme={toggleTheme} 
        />
      </div>
      <StatusBar toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;
