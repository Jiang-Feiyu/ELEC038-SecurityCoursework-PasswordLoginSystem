import React from 'react';
import './LoginForm.css'; // 引入样式表

function LoginForm() {
  return (
    <form className="login-form">
      <h1>ELEC0138 Security and Privacy</h1>
      <h2>Group 1 Project</h2>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;