import React from "react";
import {useParams} from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {listOfFarms} from "./mock-data";

export default function FarmDetail() {
    let params = useParams();
    let details = listOfFarms.find(farm => farm.id == params.id);

    if (!details) {
        return null;
    }

    return (
        <>
            <Card sx={{ width: 1 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={details.img}
                    alt={details.title}
                    />
            </Card>

            <Typography variant="h3" sx={{ margin: 1 }}>
                {details.title}
            </Typography>

            <Typography variant="h5" sx={{ margin: 1 }}>
                {details.address}
            </Typography>

            <Typography variant="body2" sx={{ margin: 1 }}>
                {details.description}
            </Typography>

            <Typography variant="h4" sx={{ margin: 1, marginTop: 2 }}>
                Featured Produce:
            </Typography>
        </>
    )
}