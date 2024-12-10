import React, { useState } from "react";
import "./LoveLetter.css";

const LoveLetter = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageAnimation, setPageAnimation] = useState(""); // New state for page animations

  const handleToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
      onToggle(true); // Notify parent component that the envelope is open
    }
  };

  const closeLetter = () => {
    setIsOpen(false);
    setCurrentPage(0); // Reset to the first page (optional)
    onToggle(false); // Notify parent component that the envelope is closed
  };

  const letterPages = [
    `Dear Love, 
    You bring light into my darkest days and joy to my heart. Life feels 
    complete with you by my side. Thank you for being my everything.`,
    `Every moment with you is a memory I cherish forever. 
    Your smile is my sunshine; your presence is my peace. 
    Together, we create a world of love.`,
    `Forever yours, 
    ❤️`,
  ];

  const nextPage = () => {
    if (currentPage < letterPages.length - 1) {
      setPageAnimation("slide-out-left"); // Start slide-out animation
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1); // Change the page after animation
        setPageAnimation("slide-in-right"); // Start slide-in animation
      }, 300); // Match this timeout with your CSS animation duration
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setPageAnimation("slide-out-right"); // Start slide-out animation
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1); // Change the page after animation
        setPageAnimation("slide-in-left"); // Start slide-in animation
      }, 300); // Match this timeout with your CSS animation duration
    }
  };

  // Render falling petals
  const renderPetals = () => {
    const petals = [];
    for (let i = 0; i < 20; i++) {
      petals.push(
        <div
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 5}s`,
          }}
        />
      );
    }
    return petals;
  };

  return (
    <div className="love-letter-container">
      {renderPetals()}
      <div className={`envelope ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        <div className="ribbon"></div>
        <div className="ribbon-line"></div>
        <div className="ribbon-line-bottom"></div>
        <div className={`letter ${isOpen ? "visible" : ""}`}>
          <div className={`page-content ${pageAnimation}`}>
            <p>{letterPages[currentPage]}</p>
          </div>
          {isOpen && (
            <div className="pagination">
              <button onClick={prevPage} disabled={currentPage === 0}>
                Previous
              </button>
              {currentPage === letterPages.length - 1 ? (
                <button onClick={closeLetter}>Close</button>
              ) : (
                <button onClick={nextPage}>Next</button>
              )}
            </div>
          )}
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
