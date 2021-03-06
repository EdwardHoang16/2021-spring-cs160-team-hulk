import React from "react";
import FarmsList from "./FarmsList";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const styles = {
  root: {
    justifyContent: "center",
  },
};

const Heading = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
}));

export default function HomePage({ listOfFarms }) {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item elevation={0}>
              <Typography variant="h5">Pick your produce</Typography>
              <Typography variant="body2">Select a variety of produce grown locally</Typography>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item elevation={0}>
              <Typography variant="h5">Chat with farmers</Typography>
              <Typography variant="body2">Comment and ask farmers about their crops</Typography>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item elevation={0}>
              <Typography variant="h6">Free delivery for premium members</Typography>
              <Typography variant="body2">
                Premium members get free delivery for a small monthly fee
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />

      <Heading elevation={0}>
        <Typography variant="h5">Local produce delivered right to your door</Typography>
      </Heading>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Heading elevation={0}>
              <Button variant="contained">order now</Button>
            </Heading>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />

      <Heading elevation={0}>
        <Typography variant="h5">Browse farms</Typography>
      </Heading>
      <br />

      <FarmsList listOfFarms={listOfFarms} />
    </Container>
  );
}
