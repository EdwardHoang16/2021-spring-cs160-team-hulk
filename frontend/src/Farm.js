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

  function display() {
    var maxLength = 150; // maximum number of characters to extract

    //trim the string to the maximum length
    var trimmedString = details.description.substr(0, maxLength);

    //re-trim if we are in the middle of a word
    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    );

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleCardClick}>
          <CardMedia
            component="img"
            height="140"
            image={details.imgUrl}
            alt={details.farmName}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {details.farmName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {trimmedString}...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  return display();
}
