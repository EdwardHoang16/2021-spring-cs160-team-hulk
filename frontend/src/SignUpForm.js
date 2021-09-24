import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SignUp.css";

export default function SignUpForm() {
    return (
        <>
            <h3>sign up</h3>
            <p>welcome to organic farms! enter your email to get started.</p>
            <TextField fullWidth id="outlined-basic" label="email" variant="outlined" />
            <Button fullWidth className="button" variant="outlined">Login with Phone</Button>
            <Button fullWidth className="button" variant="outlined">Login with Google</Button>
            <Button fullWidth className="button" variant="outlined">Login with Facebook</Button>
        </>
    )
}