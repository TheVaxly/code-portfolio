import React from "react";
import "./../styles/StatusBar.css";

import { FaCodeBranch } from 'react-icons/fa';

const StatusBar = ({}) => (
  <div className="status-bar">
    <span className="icon"><FaCodeBranch /></span>
    <span className="main-text">main</span>
    <span className="error">0 Errors  0 Warnings</span>
  </div>
);

export default StatusBar;
