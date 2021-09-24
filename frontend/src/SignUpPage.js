import React from "react";
import Grid from '@mui/material/Grid';
import SignUpForm from "./SignUpForm";

export default function SignUp() {
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        display="flex"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <SignUpForm />
            </Grid>
        </Grid>
    );
}