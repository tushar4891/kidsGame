import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShapeMatching } from "./Pages/Shape_Matching";
import { MovingCars } from "./Pages/MovingCars";
import { HomePage } from "./Pages/HomePage";
import { LandingPage } from "./Pages/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/shapeMatching" element={<ShapeMatching />} />
          <Route path="/movingCars" element={<MovingCars />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/land" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
