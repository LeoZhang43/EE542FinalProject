import React, { useState, useEffect } from 'react';
import { FaWifi } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";
import "../style/style.css";

const StatusBar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(updateTime);
    };
  }, []);

  return (
    <div className="status-bar">
      <span className="status-time">{time}</span>
      <span className="status-icon"><FaWifi /></span> {/* Placeholder for Wi-Fi icon */}
      <span className="status-icon"><CiBatteryFull/></span> {/* Placeholder for Battery icon */}
    </div>
  );
};

export default StatusBar;
