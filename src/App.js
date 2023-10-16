import React from 'react';

import './App.css';
import Header from './component/Header';
import Services from './component/Services';
import Compus from './component/Compus';
import Footer from './component/Footer';

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
