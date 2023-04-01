# ELEC0138 Security and Privacy
- Group 1: Login System 
- Student ID: 22216907 19013028 22038091
- Abstract: This is a completely self-designed **Password Login System** on the front-end and back-end. We simulated the scenes of user registration and login in real web pages. We **encrypt** the user information on the back-end and adopt **hint** method to prevent the **clone** website.

# Basic Function of Our Web Page
1.  Initial Page: There are two buttons: `login ` button and `sign up` button. You may need to click the sign up button if you have never registered before.
2.  Sign Up Page: This is the page for collecting your personal information and store the encrypted data into the local data base. You are asked to input your Email address, password and hint. The password should be at least 8 character and contains uppercase letters, lowercase letters, numbers from `0 `to `9` and special characters `!@#$%^&amp;*()`. 
</br>We will use regular expression to check the input information. If there is a mistake, we will tell you in the pop-up which part of the input is incorrect. After successfully registering, you will be redirected to the `Successfully login` page. Your data will also be encrypted and stored in the local database. In the future, if you log in, just click `login` button from the initial screen.
3. Login Page: You will be asked to enter the username and password in two separate pages. 
</br> After you enter the user name, we will match it in the database. If the match is successful, we will extract the `Hint` you registered and display it above the password input box. Otherwise, `user not found` will be alerted. `Hint` is one of the identifiers you sign up for, to prevent clone sites from forging the login screen to obtain your personal information. You do not need to enter it.
</br> When the password is Successfully matched, you will be displayed on the `Successfully login` page. Your password is encrypted and compared, this encryption process is completely random, we can't backtweet your password through ciphertext.

# Run our project
Since the Github doen't allow us to upload Node modules, you may need to create an enviroment and set up dependencies first. Here are some instructions(You need to install Node.js in advance, you may use `npm -v` to check the version of your npm):

1. download the Project folder to your PC and open it on your terminal:
`cd Project folder` 
2. download the Node Modules: `npm install`
3. run the project on port local host 3000: `npm start`

*To be noted: Running the API is required to run the front-end successfully.
