import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Sucess from './components/Sucess';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>ELEC0138 Security and Privacy</h1>
        <h2>Group 1</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/sucess" element={<Sucess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;