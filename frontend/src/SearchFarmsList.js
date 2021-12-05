import React from "react";
import Farm from "./Farm";
import Grid from "@mui/material/Grid";

export default function SearchFarmsList({ listOfFarms, searchTerm }) {
  const lowercasedSearchTerm = searchTerm.toLowerCase();

  const list = listOfFarms.map((farm) => {
    const lowercasedFarmName = farm.farmName.toLowerCase();

    if (lowercasedFarmName.includes(lowercasedSearchTerm)) {
      return (
        <Grid key={farm.id} item xs={4}>
          <Farm key={farm.id} details={farm} />
        </Grid>
      );
    }
    return null;
  });

  return (
    <Grid container spacing={1} direction="row" display="flex" alignItems="center" justify="center">
      {list}
    </Grid>
  );
}
