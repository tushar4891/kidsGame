import React, { useEffect, useRef, useState } from "react";
import "./Shape_Matching.css";
import Confetti from "react-confetti";

export const ShapeMatching = () => {
  const shapes = ["circle", "square", "triangle", "inverted-triangle"];
  const [matchedShapes, setMatchedShapes] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  // const audio = new Audio("kids.mp3");
  const [celebration, setCelebration] = useState(false);
  const [title, setTitle] = useState("");
  const audioRef = useRef(new Audio("kids.mp3"));

  const handleDrop = (e, targetShape) => {
    const draggedShape = e.dataTransfer.getData("shape");
    const dropZone = e.target;
    if (draggedShape === targetShape) {
      setMatchedShapes([...matchedShapes, targetShape]); // Mark shape as matched
      triggerCelebration();
      if (!isMuted) {
        audioRef.current.play();
      }
    } else {
      dropZone.classList.add("shake");
      setTimeout(() => {
        dropZone.classList.remove("shake");
      }, 1000);
    }
  };

  const handleDragStart = (e, shape) => {
    e.dataTransfer.setData("shape", shape);
  };

  const triggerCelebration = () => {
    setCelebration(true);
    setTimeout(() => setCelebration(false), 3000); // Turn off the effect after 1.5 seconds
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (!isMuted) {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    const text = "Shape Matching Game";
    const spans = text
      .split("")
      .map((letter, i) => {
        const style = `animation-delay:${i * 0.1}s;`;
        return `<span style="${style}">${
          letter === " " ? "&nbsp;" : letter
        }</span>`;
      })
      .join("");
    setTitle(spans);
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset the audio to the beginning
    };
  }, []);

  return (
    <div className="game-wrapper">
      {/* Game Header */}
      <div className="header">
        <div className="progress-indicator">
          Score: {matchedShapes.length}/{shapes.length}
        </div>
        <h1
          className="game-title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <div className="sound-icon" onClick={toggleMute}>
          {isMuted ? "🔇" : "🔊"}
        </div>
      </div>

      {/* Large Rectangle */}
      <div className="large-rectangle">
        {/* Left Section */}
        <div className="left-section">
          {shapes.map((shape, index) => (
            <div
              key={index}
              className={`shape ${shape} ${
                matchedShapes.includes(shape) ? "invisible" : ""
              }`}
              draggable
              onDragStart={(e) => handleDragStart(e, shape)}
            ></div>
          ))}
        </div>

        {/* Right Section */}
        <div className="right-section">
          {shapes.map((shape, index) => (
            <div
              key={index}
              className={`drop-zone ${shape}`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, shape)}
            ></div>
          ))}
        </div>
      </div>

      {/* Celebration Effect */}
      {celebration && <Confetti />}
    </div>
  );
};
