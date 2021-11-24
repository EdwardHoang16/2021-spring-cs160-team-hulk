import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";

export default function Farm({ details }) {
  let history = useHistory();

  function handleCardClick() {
    history.push(`/farms/${details.id}`);
  }

  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center">
      <Grid item xs={4}>
        <Card sx={{ maxWidth: 500, marginTop: 2 }}>
          <CardActionArea onClick={handleCardClick}>
            <CardMedia component="img" height="200" image={details.imgUrl} alt={details.farmName} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {details.farmName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {details.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
