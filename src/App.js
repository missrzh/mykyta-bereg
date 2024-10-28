import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainComponent from './components/mainComponent.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:slug" element={<MainComponent />} />
        <Route path="/" element={<MainComponent />} />
      </Routes>
    </Router>

  );
}

export default App;
