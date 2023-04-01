Back-End API in Python

This branch is about the developed back-end API for encryption and validation of password. The main file to run is the app.py. It is important to install the Flask using 'pip install flask' and  CORS to run the API using 'pip install -r requirements.txt'. Using SHA256 and interfaced using flask, the API is implemented into the Platform front-end part using this following code snippet:

   const data = {
      plain_password: password,
    };

    try {
      const r = await fetch("http://localhost:5000/encryptions", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const rJson = await r.json();
      const encryptedPasssword = rJson.encrypted_password;

      // Store the hint, username and password to local variable
      const initialUsers = JSON.parse(localStorage.getItem("users")) || [];
      const newUser = {
        username: username,
        password: encryptedPasssword,
        hint: hint,
      };

      initialUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(initialUsers));
    } catch (error) {
      console.log(error);
    }

The data is then stored in the browsers local storage to be used for login validation. 
