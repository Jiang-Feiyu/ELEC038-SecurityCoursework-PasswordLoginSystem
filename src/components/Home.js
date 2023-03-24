import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>ELEC0138 Security and Privacy</h1>
      <h2>Group 1 Project</h2>
      <h2>Welcome to Login System</h2>
      <div className="button-group">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default Home;