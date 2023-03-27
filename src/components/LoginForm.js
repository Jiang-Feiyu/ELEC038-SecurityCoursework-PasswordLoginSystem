import React, { useState } from 'react';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';

const users = [
  {"username": "ELEC0138", "password": "Privacy and Security"},
  {"username": "USER1234", "password": "MyPassword123"},
  {"username": "JOHNDOE", "password": "qwertyuiop"}
];

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find((user) => user.username === username);

    if (!user) {
      alert('user not found');
    } else if (user.password !== password) {
      alert("Password is wrong");
    } else {
      navigate('/sucess');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
      <Link to="/">
        <button>Back</button>
      </Link>
    </form>
  );
}

export default LoginForm;