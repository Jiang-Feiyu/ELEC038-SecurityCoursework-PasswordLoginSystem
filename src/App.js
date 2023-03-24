import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>ELEC0138 Security and Privacy</h1>
        <h2>Group 1</h2>
        <Home />
      </div>
    </Router>
  );
}

export default App;