import React from "react";

import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
