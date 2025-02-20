import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ActivityBar from "./components/ActivityBar";
import Sidebar from "./components/Sidebar";
import EditorContainer from "./components/EditorContainer";
import StatusBar from "./components/StatusBar";
import "./App.css";

const App = () => {
  const [activeFile, setActiveFile] = useState(() => {
    return sessionStorage.getItem("activeFile") || "home.jsx";
  });

  const [tabs, setTabs] = useState(() => {
    const storedTabs = sessionStorage.getItem("tabs");
    return storedTabs ? JSON.parse(storedTabs) : ["home.jsx"];
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    sessionStorage.setItem("activeFile", activeFile);
    sessionStorage.setItem("tabs", JSON.stringify(tabs));
  }, [activeFile, tabs]);

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

  const toggleSidebar = () => {
    console.log('Toggling sidebar. Current state:', isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <ActivityBar
          openFile={openFile}
          openSettingsTab={openSettingsTab}
          setActiveFile={setActiveFile}
          toggleSidebar={toggleSidebar}
        />
        <Sidebar
          openFile={openFile}
          activeFile={activeFile}
          isSidebarOpen={isSidebarOpen}
        />
        <EditorContainer
          activeFile={activeFile}
          tabs={tabs}
          setActiveFile={setActiveFile}
          className={isSidebarOpen ? '' : 'expanded'}
        />
      </div>
      <StatusBar />
    </div>
  );
};

export default App;
