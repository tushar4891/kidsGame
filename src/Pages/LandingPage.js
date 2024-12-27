import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
      <nav className="menu-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      {/* <h1 className="heading">Choose a game</h1> */}
      <div className="main">
        <Link to="/shapeMatching">
          <div className="card">
            <div className="content">
              <h2> Shape Matching</h2>
              <p>Above 2 years</p>
              {/* <Link to="/shapeMatching">Click Me !</Link> */}
              <a href="#">Click Me !</a>
            </div>
            <img src="shape.jpg"></img>
          </div>
        </Link>

        <Link to="/movingCars">
          <div className="card">
            <div className="content">
              <h2> Moving Cars</h2>
              <p>Below 2 years</p>
              <Link to="/movingCars">Click Me !</Link>
              {/* <a href="#">Click Me !</a> */}
            </div>
            <img src="car1.png"></img>
          </div>
        </Link>
      </div>
    </div>
  );
};
