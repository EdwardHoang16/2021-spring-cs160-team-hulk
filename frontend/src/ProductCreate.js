import React, { useEffect, useState } from "react";
import { Grid, MenuItem, Select } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";

import "./styles/SearchFarmList.css";

export default function ProductCreate(props) {
  const [productName, setProductName] = React.useState(""); // 1
  const [imgUrl, setImgUrl] = React.useState(""); // 2
  const [price, setPrice] = React.useState(0.0);
  const [quantity, setQuantity] = React.useState(0);
  const [farmId, setFarmId] = React.useState("");
  const [farms, setFarms] = React.useState([]);

  useEffect(async () => {
    const email = localStorage.getItem("email");
    const result = await axios.get(`http://localhost:8080/api/farms?email=${email}`);
    setFarms(result.data);
    console.log(result.data);
    // setListOfFarms(result.data);
  }, []);

  // 1: productName
  const [errors, setErrors] = React.useState([]);

  const styles = {
    width: 600, //assign the width as your requirement
  };

  const handleChange = (value, type) => {
    let _errors = [];
    switch (type) {
      case "productName":
        _errors = errors.filter((id) => id !== 1);
        setErrors(_errors);
        setProductName(value);
        break;
      case "imgUrl":
        _errors = errors.filter((id) => id !== 2);
        setErrors(_errors);
        setImgUrl(value);
        break;
      case "price":
        _errors = errors.filter((id) => id !== 3);
        setErrors(_errors);
        setPrice(value);
        break;
      case "quantity":
        _errors = errors.filter((id) => id !== 3);
        setErrors(_errors);
        setQuantity(value);
        break;
      case "farmId":
        _errors = errors.filter((id) => id !== 3);
        setErrors(_errors);
        setFarmId(value);
        break;
      default:
        break;
    }
    // setValues({ ...values, [prop]: event.target.value });
    // console.log(prop);
  };

  const handleSubmit = () => {
    // const _errors = JSON.parse(JSON.stringify(errors));
    // if (!productName.length) {
    //     if (!_errors.includes(1)) {
    //         _errors.push(1);
    //         setErrors([1]);
    //     }
    // }

    // if (!logo.length) {
    //     if (!_errors.includes(2)) {
    //         _errors.push(2);
    //         setErrors([2]);
    //     }
    // }

    // call backend
    processData();
    setProductName("");
    setImgUrl("");
    setPrice(0.0);
    setQuantity(0);
    setFarmId("");
  };

  const processData = async () => {
    const product = {
      productName: productName,
      imgUrl: imgUrl,
      price: price,
      quantity: quantity,
    };

    // extract farm id

    const response = await axios.post(
      `http://localhost:8080/api/farms/${farmId}/products`,
      product
    );

    console.log(response);
  };

  const displaySelectOptions = () => {
    return farms.map((farm) => {
      return (
        <MenuItem key={farm.id} value={farm.id}>
          {farm.farmName}
        </MenuItem>
      );
    });
  };

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      display="flex"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <h3>Create a Product</h3>
      <Grid item xs={3}>
        <TextField
          style={{ width: styles.width }}
          required
          error={errors.includes(1)}
          onChange={(e) => handleChange(e.target.value, "productName")}
          id="outlined-basic"
          value={productName}
          label="Product Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          style={{ width: styles.width }}
          required
          error={errors.includes(2)}
          onChange={(e) => handleChange(e.target.value, "imgUrl")}
          fullWidth
          id="outlined-basic"
          label="Img URL"
          variant="outlined"
          value={imgUrl}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          style={{ width: styles.width }}
          required
          onChange={(e) => handleChange(e.target.value, "quantity")}
          type="number"
          fullWidth
          label="Quantity"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          value={quantity}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          style={{ width: styles.width }}
          value={price}
          required
          onChange={(e) => handleChange(e.target.value, "price")}
          type="number"
          fullWidth
          label="Price"
          inputProps={{ inputMode: "decimal", pattern: "[0-9]*" }}
        />
      </Grid>
      <Grid item xs={3}>
        <Select
          style={{ width: styles.width }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={farmId}
          onChange={(e) => handleChange(e.target.value, "farmId")}
        >
          {displaySelectOptions()}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <Button
          style={{ width: styles.width }}
          fullWidth
          className="button"
          variant="outlined"
          onClick={() => handleSubmit()}
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
}
