import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import backgroundImage from './Background.jpeg';

function Home() {
  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content-box">
        <h2>Welcome to Login System</h2>
        <div className="button-group">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;