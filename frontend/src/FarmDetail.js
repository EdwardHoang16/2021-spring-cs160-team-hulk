import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import ProductsList from "./ProductsList";

export default function FarmDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const result = await axios.get(`http://localhost:8080/api/farms/${id}`);
    setDetails(result.data);
  }, []);

  useEffect(async () => {
    const result = await axios.get(`http://localhost:8080/api/farms/${id}/products`);
    setProducts(result.data);
  }, []);

  if (!details) {
    return null;
  }

  return (
    <Container>
      <Card sx={{ width: 1 }}>
        <CardMedia component="img" height="250" image={details.imgUrl} alt={details.farmName} />
      </Card>

      <Typography variant="h3" sx={{ margin: 1 }}>
        {details.farmName}
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

      {products.length === 0 && (
        <Typography variant="h5" sx={{ margin: 1 }}>
          None right now, check back later.
        </Typography>
      )}
      <ProductsList products={products} />
    </Container>
  );
}
