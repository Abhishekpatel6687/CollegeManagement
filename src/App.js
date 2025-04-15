import React from 'react';

import './App.css';
import Header from './components/Header';
import Services from './components/Services';
import Compus from './components/Compus';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Services/>
    <Compus/>
    <Footer/>
    </div>
  );
}

export default App;
