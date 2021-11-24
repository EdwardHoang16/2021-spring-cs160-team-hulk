import React, { useState, useEffect } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  //checks if a user has previously logged in.
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // logout the user
  const handleLogout = () => {
    setUser(null);
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  // login the user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCredentials = { email: username, password: password };
    // send the username and password to the server
    const json = JSON.stringify({ email: username, password: password });
    console.log(userCredentials);
    const response = await axios
      .get(`http://localhost:8080/api/userCredentials/verifyCredentials/${username}/${password}`)
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
    setUser(response.data);

    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(response.data));
  };

  // if there's a user show the message below
  if (user) {
    return (
      <div>
        {user.name} is loggged in
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  } else {
    // if there's no user, show the login form
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            value={username}
            placeholder="enter a username"
            onChange={({ target }) => setUsername(target.value)}
          />
          <div>
            <label htmlFor="password">password: </label>
            <input
              type="password"
              value={password}
              placeholder="enter a password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
};

export default SignUpForm;
//1) Add a link in sign up to send the user to the log in page.
//1) Figure out what the response return when the user logs in.
//2) If the response is successful, then do nothing else let the user know his credentials are incorrect
//3) If a user logged in, he wont ever have to log in again
