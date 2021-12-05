import React from "react";
import Farm from "./Farm";
import Grid from "@mui/material/Grid";

export default function FarmsList({ listOfFarms }) {
  if (!listOfFarms) {
    return null;
  }

  const listOfDisplayedFarms = listOfFarms.map((farm) => {
    return (
      <Grid key={farm.id} item xs={4}>
        <Farm key={farm.id} details={farm} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={1} direction="row" display="flex" alignItems="center" justify="center">
      {listOfDisplayedFarms}
    </Grid>
  );
}
