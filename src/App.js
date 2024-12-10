import React, { useState, useRef, useEffect } from "react";
import LoveLetter from "./LoveLetter";
import "./App.css";
import Palagi from "./Palagi.mp3";


const App = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track envelope opening
  const audioRef = useRef(null); // Reference to the audio element

  const handleBackgroundChange = (status) => {
    setIsOpen(status);
    if (audioRef.current) {
      if (status) {
        audioRef.current.play(); // Play music when the envelope is open
      } else {
        audioRef.current.pause(); // Pause music when the envelope is closed
        audioRef.current.currentTime = 0; // Reset music to the start
      }
    }
  };

  return (
    <div className={`app ${isOpen ? "background-open" : ""}`}>
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src={Palagi} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <LoveLetter onToggle={handleBackgroundChange} />
    </div>
  );
};

export default App;
