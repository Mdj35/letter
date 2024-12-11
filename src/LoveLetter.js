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
    `Hi dae...I just want to greet you a Merry Christmas and a happy new year....`,
    `Unta ganahan kas akong mga gifts na gihatag saimo dae...`,
    `and thank you for being my inspiration this semester..`,
    `ikaw jd ang reason dae nganong batak kayko ug ganado ko mulihok sa mga lihokonon HAHAHAHAH...`,
    `and I just want to say sorry pd if naay times na sobra na akong pag act sa imoha...`,
    `and unta padayun lang gihapon ta this coming year...`,
    `and even though di pa pd ka ready I just want you to know pd nga naa rajd ko dri permi willing maghulat saimoha...`,
    `and i enjoy pd imong vacation sa Laguna dae...`,
    `that's all dae...once again to the girl of my dreams..`,
    `have a blessed Merry Christmas and a Happy New Year💖💖💖💖
`,
  ];


  const nextPage = () => {
    if (currentPage < letterPages.length - 1) {
      setPageAnimation("slide-out-left"); // Start slide-out animation
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1); // Change the page after animation
        setPageAnimation("bounce slide-in-right");
; // Start slide-in animation
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
