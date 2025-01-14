import { useState } from "react";
import Game3 from "./pages/game3";
import Game4 from "./pages/game4";
import Game5 from "./pages/game5";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game3" element={<Game3 />} />
        <Route path="/game4" element={<Game4 />} />
        <Route path="/game5" element={<Game5 />} />
      </Routes>
    </Router>
  );
}

export default App;
