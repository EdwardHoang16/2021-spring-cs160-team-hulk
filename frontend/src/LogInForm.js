import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Grid, Button, TextField } from "@mui/material";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState();

  const styles = {
    width: 300, //assign the width as your requirement
  };

  let history = useHistory();

  //checks if a user has previously logged in.
  useEffect(() => {
    setIsLoggedIn(localStorage.key("isLoggedIn"));
  }, []);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  // logout the user
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    localStorage.clear();
    history.push("/login");
    window.location.reload();
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
      <Grid
      container
      spacing={3}
      direction="column"
      display="flex"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
      >
        You are currently logged in.
        <br />

        <Button
        onClick={handleLogout}
        style={{ width: styles.width }}
        className="button"
        variant="outlined"
        >
          Logout
        </Button>
      </Grid>
    );
  } else {
    // if there's no user, show the login form
    return (
      <Grid
      container
      spacing={3}
      direction="column"
      display="flex"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
      >
        <h2>Login</h2>
        <br />

        <TextField
          style={{ width: styles.width }}
          required
          onChange={handleEmailChange}
          id="email"
          value={email}
          label="Email"
          variant="outlined"
        />
        <br />

        <TextField
          style={{ width: styles.width }}
          required
          onChange={handlePasswordChange}
          id="password"
          value={password}
          type="password"
          label="Password"
          variant="outlined"
        />
        <br />

        <Button
          style={{ width: styles.width }}
          className="button"
          variant="outlined"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Grid>
    );
  }
};

export default LogInForm;
//1) Add a link in sign up to send the user to the log in page.
//1) Figure out what the response return when the user logs in.
//2) If the response is successful, then do nothing else let the user know his credentials are incorrect
//3) If a user logged in, he wont ever have to log in again
