import React from "react";
import Product from "./Product";
import Grid from "@mui/material/Grid";

export default function ProductsList({products}) {
    const listOfProducts = products.map(product => {
        return (
            <Grid
            item
            xs={3}>
                <Product product={product} />
            </Grid>
        )
    })

    return (
        <Grid
        container
        spacing={1}
        direction="row"
        display="flex"
        alignItems="center"
        justify="center"
        >
            {listOfProducts}
        </Grid>
    )
}