import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Courses from "./components/Courses/Courses";
import Placements from "./components/placements/Placements";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/services" element={<Services />} />
      <Route path="/placements" element={<Placements />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/footer" element={<Footer />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
