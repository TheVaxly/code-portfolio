import React from "react";

const Settings = ({ toggleTheme }) => {
  return (
    <div>
      <h2>Theme Settings</h2>
      <button onClick={() => toggleTheme("dark")}>Dark Theme</button>
      <button onClick={() => toggleTheme("light")}>Light Theme</button>
    </div>
  );
};

export default Settings;
