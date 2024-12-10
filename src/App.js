import React, { useState } from "react";
import LoveLetter from "./LoveLetter";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track envelope opening

  const handleBackgroundChange = (status) => {
    setIsOpen(status);
  };

  return (
    <div className={`app ${isOpen ? "background-open" : ""}`}>
      <LoveLetter onToggle={handleBackgroundChange} />
    </div>
  );
};

export default App;
