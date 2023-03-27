import React from 'react';
import { Link } from 'react-router-dom';

function Sucess() {
  return (
    <div>
      <h2>Login Sucess</h2>
      <div className="button-group">
        <Link to="/">
          <button>Log out</button>
        </Link>
        <button>Cancellation of accounts</button>
      </div>
    </div>
  );
}

export default Sucess;