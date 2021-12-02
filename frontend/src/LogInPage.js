import React from "react";
import Grid from "@mui/material/Grid";
import LogInForm from "./LogInForm";

export default function LogInPage() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      display="flex"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <LogInForm />
      </Grid>
    </Grid>
  );
} 