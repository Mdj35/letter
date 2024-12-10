import React, { useState } from "react";
import "./LoveLetter.css";

const LoveLetter = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    // Only allow toggling when not animating or navigating pages
    if (!isAnimating) {
      const newState = !isOpen;
      setIsOpen(newState);
      onToggle(newState); // Notify parent component of the change
    }
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
      if (!isOpen) setIsOpen(true); // Automatically open the letter if closed
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsAnimating(false);
      }, 500); // Duration of the animation
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      if (!isOpen) setIsOpen(true); // Automatically open the letter if closed
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsAnimating(false);
      }, 500); // Duration of the animation
    }
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
          <div className={`page-content ${isAnimating ? "fade" : ""}`}>
            <p>{letterPages[currentPage]}</p>
          </div>
          {isOpen && (
            <div className="pagination">
              <button onClick={prevPage} disabled={currentPage === 0}>
                Previous
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage === letterPages.length - 1}
              >
                Next
              </button>
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
