import React, { useState, useEffect } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState();

  //checks if a user has previously logged in.
  useEffect(() => {
    setIsLoggedIn(localStorage.key("isLoggedIn"));
  }, []);

  // logout the user
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    localStorage.clear();
  };

  // login the user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCredentials = { email: email, password: password };
    // send the email and password to the server
    const json = JSON.stringify({ email: email, password: password });
    console.log(userCredentials);
    const response = await axios
      .get(`http://localhost:8080/api/userCredentials/verifyCredentials/${email}/${password}`)
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // error.request is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    console.log(response);
    if (!response.data) {
      console.log("invalid");
      return;
    }
    // set the state of the user
    setIsLoggedIn(response.data);

    // store the user in localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("isLoggedIn", JSON.stringify(response.data));
    window.location.reload();
  };

  // if there's a user show the message below
  if (isLoggedIn) {
    return (
      <div>
        You are currently logged in.
        <button onClick={handleLogout}>Logout?</button>
      </div>
    );
  } else {
    // if there's no user, show the login form
    return (
      <>
        <h3>Log In</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"><strong>Email: </strong></label>
          <input
            type="text"
            value={email}
            placeholder="Enter your email address"
            onChange={({ target }) => setEmail(target.value)}
          />
          <br />
          <br />

          <label htmlFor="password"><strong>Password: </strong></label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <br />
          <br />

          <button type="submit">Login</button>
        </form>
      </>
    );
  }
};

export default SignUpForm;
//1) Add a link in sign up to send the user to the log in page.
//1) Figure out what the response return when the user logs in.
//2) If the response is successful, then do nothing else let the user know his credentials are incorrect
//3) If a user logged in, he wont ever have to log in again
