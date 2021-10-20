import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SearchFarmList() {

    const listOfFarms = [
        { id: 1, title: "Dill's Pickle Farm", img: "https://media.istockphoto.com/photos/whats-that-one-doing-picture-id904559406?b=1&k=20&m=904559406&s=170667a&w=0&h=GgoqMQ4cvsv7sN50dWudqGY5Y7-EUoliKxjDchcYyUM=" },
        { id: 2, title: "Fresh Family Farms", img: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1078&q=80" },
        { id: 3, title: "Bob's Honey", img: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" },
        { id: 4, title: "Golden Oaks Acre", img: "https://images.unsplash.com/photo-1585499193151-0f50d54c4e1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80" }
    ];

    const displayFram = () => {
        return (
            listOfFarms.map(farm => (

                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={farm.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {farm.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>

            ))
        );
    }
    return (
        <Card sx={{ maxWidth: 630 }}>

            {displayFram()}
        </Card>
    );
}