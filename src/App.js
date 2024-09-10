import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Editor from './Editor';
import Learn from './Learn';
import Navbar from './Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/learn" element={<Learn />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/" element={<Editor />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
