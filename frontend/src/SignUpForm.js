import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SignUp.css";

export default function SignUpForm() {
    return (
        <>
            <h3>Sign Up</h3>
            <p>Welcome to Organic Farms! Enter your email to get started.</p>
            <TextField fullWidth id="outlined-basic" label="email" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="password" variant="outlined" />
            <Button fullWidth className="button" variant="outlined" >Log In</Button>
        </>
    )
}


