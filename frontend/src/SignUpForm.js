import React, {useState} from "react";
import "./SignUp.css";
import { useHistory } from "react-router-dom";
import { Grid, Button, TextField } from "@mui/material";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = {
    width: 300, //assign the width as your requirement
  };

  let history = useHistory();

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    let tempEmail = email;
    tempEmail.replace('\0', '');
    tempEmail.replace(/\0/g, '');
    setEmail(tempEmail);

    let tempPassword = password;
    tempPassword.replace('\0', '');
    tempPassword.replace(/\0/g, '');
    setPassword(tempPassword);

    fetch("http://localhost:8080/api/userCredentials", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => console.log(data))

    history.push("/login");
  }

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
        <h2>Sign Up</h2>
        <p>Welcome to Organic Farms! Enter your email to get started.</p>
        <br />

        <TextField
          style={{ width: styles.width }}
          required
          onChange={handleEmailChange}
          id="outlined-basic"
          value={email}
          label="Email"
          variant="outlined"
        />
        <br />

        <TextField
          style={{ width: styles.width }}
          required
          onChange={handlePasswordChange}
          id="outlined-basic"
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
          onClick={handleFormSubmit}
        >
          Sign Up
        </Button>
      </Grid>
  );
}
