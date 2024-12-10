import React, { useState } from "react";
import "./LoveLetter.css";

const LoveLetter = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState); // Notify parent component of the change
  };

  return (
    <div className="love-letter-container">
      <div
        className={`envelope ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        <div className="ribbon"></div>
        <div className="ribbon-line"></div>
        <div className="ribbon-line-bottom"></div>
        <div className={`letter ${isOpen ? "visible" : ""}`}>
          <p>
            <strong>Dear Love,</strong>
            <br />
      
            You bring light into my darkest days and joy to my heart. Life feels
            complete with you by my side. Thank you for being my everything.
            <br />
            Forever yours,
            <br />
            <strong>❤️</strong>
          </p>
        </div>
      </div>
      {isOpen && (
        <div className="flowers-container">
          <div className="flower flower-1"></div>
          <div className="flower flower-2"></div>
          <div className="flower flower-3"></div>
        </div>
      )}
    </div>
  );
};

export default LoveLetter;
