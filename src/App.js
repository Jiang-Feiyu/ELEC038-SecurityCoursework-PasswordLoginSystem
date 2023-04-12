import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Sucess from './components/Sucess';
import './App.css';
import UCLLogo from './components/UCL_Logo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-background" />
          <div className="header-text">
            <h1>ELEC0138 Security and Privacy</h1>
          </div>
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/sucess" element={<Sucess />} />
          </Routes>
        </div>
        <footer className="App-footer">
          <img src={UCLLogo} alt="UCL Logo" className="footer-logo" />
          <div>
            <h5>Created by Group_1</h5>
            <h5>Members' Student ID:</h5>
            <h5>22216907 19013028 22038091</h5>
            <h5>University College London</h5>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;