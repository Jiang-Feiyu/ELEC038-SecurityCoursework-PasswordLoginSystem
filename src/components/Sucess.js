import React from 'react';
import { Link } from 'react-router-dom';
import "./Sucess.css";
import backgroundImage from './Background.jpeg';

function Sucess() {
  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content-box">
          <h2 className="success-header">Login Success</h2>
          <div className="button-group">
            <Link to="/">
              <button className="logout-button">Log out</button>
            </Link>
        </div>
      </div>
    </div>

  );
}

export default Sucess;