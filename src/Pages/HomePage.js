import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <section>
      <div className="box">
        <h2>
          <Link to="/land">
            <button>Click Me ! </button>
          </Link>
        </h2>
      </div>

      <div className="box box2">
        <h2>
          <span>Welcome Kids</span>
        </h2>
      </div>
    </section>
  );
};
