import * as React from "react";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import "./ProductCreate.css";
import axios from "axios";

import "./styles/SearchFarmList.css";

export default function ProductCreate(props) {
  const [productName, setProductName] = React.useState(""); // 1
  const [imgUrl, setImgUrl] = React.useState(""); // 2
  const [price, setPrice] = React.useState(0.0);
  const [quantity, setQuantity] = React.useState(0);

  // 1: productName
  const [errors, setErrors] = React.useState([]);

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
  };

  const processData = async () => {
    const product = {
      productName: productName,
      imgUrl: imgUrl,
      price: price,
      quantity: quantity,
    };

    // extract farm id
    const farmId = "06917567-5a47-435f-95ed-330fecfb38ac";

    const response = await axios.post(
      `http://localhost:8080/api/farms/${farmId}/products`,
      product
    );

    console.log(product);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      display="flex"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <h3>Create a Product</h3>
        <TextField
          required
          error={errors.includes(1)}
          onChange={(e) => handleChange(e.target.value, "productName")}
          fullWidth
          id="outlined-basic"
          value={productName}
          label="Product Name"
          variant="outlined"
        />
        <TextField
          required
          error={errors.includes(2)}
          onChange={(e) => handleChange(e.target.value, "imgUrl")}
          fullWidth
          id="outlined-basic"
          label="Img URL"
          variant="outlined"
        />
        <TextField
          required
          onChange={(e) => handleChange(e.target.value, "quantity")}
          type="number"
          fullWidth
          label="Quantity"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />
        <TextField
          value={price}
          required
          onChange={(e) => handleChange(e.target.value, "price")}
          type="number"
          fullWidth
          label="Price"
          inputProps={{ inputMode: "decimal", pattern: "[0-9]*" }}
        />
        <Button
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
