import React from "react";
import "./MovingCars.css";

import { useState } from "react";

export const MovingCars = () => {
  const [isNight, setIsNight] = useState(false);

  const toggleDayNight = () => {
    setIsNight((prev) => !prev);
  };

  return (
    <div className="game-container">
      {/* Title */}
      <h1 className="game-title">Moving Cars</h1>

      {/* Rectangle containing the scene */}
      <div className="rectangle">
        <div className={`scene ${isNight ? "night" : ""}`}>
          {/* Sun/Moon */}
          <div className="sun" onClick={toggleDayNight}>
            <span className="sun-text">Click Me</span>
          </div>

          {/* Background */}
          <div className="bg"></div>

          {/* Cars */}
          <img
            src="car1.png" // Replace with the actual car image path
            alt="Car 1"
            className="car1"
          />
          <img
            src="car2.png" // Replace with the actual car image path
            alt="Car 2"
            className="car2"
          />
        </div>
      </div>
    </div>
  );
};
