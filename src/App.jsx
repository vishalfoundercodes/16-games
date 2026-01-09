import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Auth/Login.jsx";
import Register from "./Auth/Signup.jsx";
import PyramidSlots from "./Pages/CustomGames/Pyramid/PyramidSlots.jsx";
import BonusHome from "./Pages/CustomGames/Bonus/BounsHome.jsx";
import GateOfOlympusHome from "./Pages/CustomGames/GateOfOlympus/GateOfOlympusHome.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout Wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/game/pyramid" element={<PyramidSlots />} />
          <Route path="/game/bonus" element={<BonusHome />} />
          <Route path="/game/goo" element={<GateOfOlympusHome />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
