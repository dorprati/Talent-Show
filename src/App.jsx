import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddTalent from "./components/AddTalent";
import Talents from "./components/Talents";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
        <Link to="/" style={{ marginRight: "1rem", color: "#fff" }}>בית</Link>
        <Link to="/add" style={{ marginRight: "1rem", color: "#fff" }}>הוסף כישרון</Link>
        <Link to="/talents" style={{ marginRight: "1rem", color: "#fff" }}>כל הכישרונות</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTalent />} />
        <Route path="/talents" element={<Talents />} />
      </Routes>
    </Router>
  );
}

export default App;
