import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../../styles/SearchFarmList.css";

export default function SearchFarmList(props) {
  const { farmList, onSelectFarm } = props;

  const shortenContent = (content) => {
    const maxLength = 150; 
    let trimmedString = content.substr(0, maxLength);
    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    );
    return trimmedString;
  };

  const displayFarm = () => {
    return farmList.map((farm) => (
      <CardActionArea
        key={farm.id}
        onClick={() => onSelectFarm(farm.id, "table")}
        data-id={farm.id}
        className="farm-table-item"
      >
        <CardMedia component="img" height="140" image={farm.imgUrl} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {farm.farmName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shortenContent(farm.description)}...
          </Typography>
        </CardContent>
      </CardActionArea>
    ));
  };
  return <Card sx={{ maxWidth: 630 }}>{displayFarm()}</Card>;
}
