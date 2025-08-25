import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddTalent from "./components/AddTalent";
import Talents from "./components/Talents";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <nav className="bg-gray-900 text-white sticky top-0 shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Left: Logo */}
          <h1 className="text-xl font-bold">🎭 Talent Showcase</h1>

          {/* Right: Hebrew Links (Desktop) */}
          <div className="hidden md:flex space-x-8 space-x-reverse">
            <Link to="/" className="hover:text-yellow-400">בית</Link>
            <Link to="/add" className="hover:text-yellow-400">הוסף כישרון</Link>
            <Link to="/talents" className="hover:text-yellow-400">כל הכישרונות</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800 flex flex-col px-4 py-2 space-y-4 text-right">
            <Link to="/" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>בית</Link>
            <Link to="/add" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>הוסף כישרון</Link>
            <Link to="/talents" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>כל הכישרונות</Link>
          </div>
        )}
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
