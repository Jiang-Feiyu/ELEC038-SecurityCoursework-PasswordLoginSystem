import React, { useState } from 'react';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';

const users = [
  { "username": "ELEC0138", "password": "Privacy and Security", "Hint": "Apple" },
  { "username": "USER1234", "password": "MyPassword123", "Hint": "Polar" },
  { "username": "JOHNDOE", "password": "qwertyuiop", "Hint": "UCL" }
];

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameSubmitted, setIsUsernameSubmitted] = useState(false);
  const [hint, setHint] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameSubmit = (event) => {
    event.preventDefault();
    const user = users.find((user) => user.username === username);

    if (!user) {
      alert('user not found');
    } else {
      setIsUsernameSubmitted(true);
      setHint(user.Hint);
    }
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    const user = users.find((user) => user.username === username);

    if (user.password !== password) {
      alert("Password is wrong");
    } else {
      navigate('/sucess');
    }
  };

  const handleBack = () => {
    navigate('/');
  }

  return (
    <form className="login-form" onSubmit={isUsernameSubmitted ? handleLoginFormSubmit : handleUsernameSubmit}>
      <div className="content-box">
        <h2>Login</h2>
        {!isUsernameSubmitted && (
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        )}
        {isUsernameSubmitted && (
          <div className="form-group">
            <div className="hint-group">
              <h2 className="hint-title">Hint</h2>
              <div className="hint-content">{hint}</div>
            </div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        )}
        <div className="btn-container">
          <button className="signup-btn" onClick={handleBack}>back
          </button>
          <button type="submit" className="login-btn">
            {isUsernameSubmitted ? 'Login' : 'Next'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;