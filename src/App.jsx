import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import Personage from "./pages/Personage";
import Comics from "./pages/Comics";
import PersoComics from "./components/PersoComics";
import Header from "./components/header";
import Hero from "./components/Hero";
import Home from "./pages/Home";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header search={search} setSearch={setSearch} />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Personage" element={<Personage search={search} />} />
        <Route path="/comics" element={<Comics search={search} />} />
        <Route path="/persoComics/:Id" element={<PersoComics />} />
      </Routes>
    </Router>
  );
}

export default App;
