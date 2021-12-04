import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Product({product}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={product.imgUrl}
                alt={product.productName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Quantity: {product.quantity}
                </Typography>
            </CardContent>
        </Card>
    )
}