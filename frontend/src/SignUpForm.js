import React, {useState} from "react";
//import TextField from "@mui/material/TextField";
//import Button from "@mui/material/Button";
import "./SignUp.css";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  }

  return (
    <>
      <h3>Sign Up</h3>
      <p>Welcome to Organic Farms! Enter your email to get started.</p>

      <form onSubmit={handleFormSubmit} >
        <label htmlFor="email"><strong>Email: </strong></label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        <br />
        <br />

        <label htmlFor="email"><strong>Password: </strong></label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        <br />
        <br />

        <input type="submit" value="Sign Up" />
      </form>
    </>
  );
}
