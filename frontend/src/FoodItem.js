import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function FoodItem({foodItem}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={foodItem.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {foodItem.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {foodItem.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}