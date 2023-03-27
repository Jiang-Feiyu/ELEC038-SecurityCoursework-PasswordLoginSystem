import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegister = () => {
        // check whether the user exists
        const existingUser = users.find((user) => user.username === username);
        if (existingUser) {
            alert('The username has already existed, please login your account');
            return;
        }

        // check whether the key meet the criteria
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Registration failed. Password format is incorrect.');
            return;
        }

        // add new user to users
        const newUser = { username, password };
        const newUsers = [...users, newUser];

        // add new users to users.json
        fetch('users.json')
            .then((response) => response.json())
            .then((data) => {
                const fileContent = JSON.stringify(newUsers);
                const blob = new Blob([fileContent], { type: 'application/json' });
                const file = new File([blob], 'users.json', { type: 'application/json' });
                const formData = new FormData();
                formData.append('file', file);

                fetch('http://localhost:3000/save', {
                    method: 'POST',
                    body: formData,
                }).then(() => {
                    alert('Registration successful!');
                    navigate('/login'); // redirect to login page
                });
            });
    };

    useEffect(() => {
        // acquire the data from json file
        fetch('users.json')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);

    const generateRandomPassword = () => {
        const specialChars = ['!', '@', '#', '¥', '%', '^', '&', '*', '(', ')'];
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const digits = '0123456789';
      
        // randomly generate a key length between 8 to 15
        const passwordLength = Math.floor(Math.random() * 8) + 8;
      
        // Add at least a special char, a upper and lower char and some numbers
        let password = '';
        password += specialChars[Math.floor(Math.random() * specialChars.length)];
        password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
        password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
        password += digits[Math.floor(Math.random() * digits.length)];
      
        // 随机添加剩余字符
        for (let i = 0; i < passwordLength - 4; i++) {
          const charType = Math.floor(Math.random() * 4); // 0: special char, 1: upper case, 2: lower case, 3: digit
          if (charType === 0) {
            password += specialChars[Math.floor(Math.random() * specialChars.length)];
          } else if (charType === 1) {
            password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
          } else if (charType === 2) {
            password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
          } else {
            password += digits[Math.floor(Math.random() * digits.length)];
          }
        }
      
        return password;
      };

    const [recommendedPassword, setRecommendedPassword] = useState(generateRandomPassword());

    const handleGenerateNewPassword = () => {
        setRecommendedPassword(generateRandomPassword());
    };

    return (
        <div>
            <h2>Username:</h2>
            <input type="text" placeholder="Username" onChange={handleUsernameChange} />
            <h2>Password: </h2>
            <h4>Requirements:</h4>
            <h5>1. At least 8 characters</h5>
            <h5>2. Contains uppercase letters, lowercase letters, and special characters</h5>
            <h5>3. Contains numbers from 0 to 9</h5>
            <h5> (special characters include: !@#$%^&*() )</h5>
            <input type="password" placeholder="Password" onChange={handlePasswordChange} />
            <div style={{ marginTop: '5px' }}>
                <h4>Suggested Password:</h4>
                <input type="text" value={recommendedPassword} readOnly className="no-border" />
                <button className="small-grey" onClick={handleGenerateNewPassword}>Change one</button>
            </div>
            <h1></h1>
            <button onClick={handleRegister}>Register</button>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    );
};

export default SignupForm;