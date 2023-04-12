import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrorCount, setPasswordErrorCount] = useState(0);
  const [delay, setDelay] = useState(5);
  const [isUsernameSubmitted, setIsUsernameSubmitted] = useState(false);
  const [hint, setHint] = useState("");
  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem("users")) || [];

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
      alert("User not found");
    } else {
      setIsUsernameSubmitted(true);
      setHint(user.hint);
    }
  };

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    const user = users.find((user) => user.username === username);

    const data = {
      plain_password: password,
      password_hash: user.password,
    };

    try {
      const r = await fetch("http://localhost:5000/encryptions/test", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const rJson = await r.json();

      if (rJson.password_match) {
        navigate("/sucess");
      } else {
        alert("Invalid password.");
        setPasswordErrorCount(passwordErrorCount + 1);
      }
    } catch (e) {
      alert("Invalid password.");
      setPasswordErrorCount(passwordErrorCount + 1);
      console.log(e);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  const maxLoginAttemptReached = passwordErrorCount >= 5;

  useEffect(() => {
    let countdown;
    if (delay <= 0) {
      clearInterval(countdown);
      setDelay(5);
      setPasswordErrorCount(0);
    }

    if (maxLoginAttemptReached)
      countdown = setInterval(() => setDelay(delay - 1), 1000);

    return () => clearInterval(countdown);
  }, [maxLoginAttemptReached, delay]);

  return (
    <div className="login-form">
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
            {maxLoginAttemptReached && (
              <div style={{ color: "#ff5555" }}>
                Maximum login attempt reached! {delay}s
              </div>
            )}
          </div>
        )}
        <div className="btn-container">
          <button className="signup-btn" onClick={handleBack}>
            back
          </button>
          <button
            type="submit"
            className="login-btn"
            disabled={maxLoginAttemptReached}
            onClick={
              isUsernameSubmitted ? handleLoginFormSubmit : handleUsernameSubmit
            }
          >
            {isUsernameSubmitted ? "Login" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
