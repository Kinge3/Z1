import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
