import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import LinesPage from './pages/LinesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lines/:line" element={<LinesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
function App() {
  return (
      <div>
        <LinesPage />
      </div>
    );
}
*/
