import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainComponent from './components/mainComponent.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mykyta-bereg/video/:videoId" element={<MainComponent />} />
        <Route path="/mykyta-bereg" element={<MainComponent />} />
      </Routes>
    </Router>

  );
}

export default App;
