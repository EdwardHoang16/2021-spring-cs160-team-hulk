import * as React from "react";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import "./styles/SearchFarmList.css";
import axios from "axios";

export default function FarmCreate() {
  const [farmName, setFarmName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imgUrl, setImgUrl] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [contact, setContact] = React.useState("");

  const styles = {
    width: 600, //assign the width as your requirement
  };

  const handleChange = (value, type) => {
    let _errors = [];
    switch (type) {
      case "farmName":
        setFarmName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "imgUrl":
        setImgUrl(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "contact":
        setContact(value);
        break;
      default:
        break;
    }
    // setValues({ ...values, [prop]: event.target.value });
    // console.log(prop);
  };

  const handleSubmit = () => {
    // call backend
    processData();
  };

  const processData = async () => {
    const farm = {
      farmName: farmName,
      description: description,
      imgUrl: imgUrl,
      address: address,
      contact: contact,
    };
    const email = localStorage.getItem("email");
    if (email) {
      await axios.post(`http://localhost:8080/api/farms/${email}`, farm);
    }
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
      <h3>Create a Farm</h3>
      <Grid item xs={3}>
        <TextField
          style={{ width: styles.width }}
          name="farmName"
          onChange={(e) => handleChange(e.target.value, "farmName")}
          fullWidth
          id="outlined-basic"
          label="Farm Name"
          variant="outlined"
          value={farmName}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          style={{ width: styles.width }}
          name="description"
          onChange={(e) => handleChange(e.target.value, "description")}
          id="standard-multiline-static"
          label="Description"
          multiline
          fullWidth
          rows={5}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          style={{ width: styles.width }}
          name="imgUrl"
          onChange={(e) => handleChange(e.target.value, "imgUrl")}
          fullWidth
          id="outlined-basic"
          label="Logo"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          style={{ width: styles.width }}
          name="address"
          onChange={(e) => handleChange(e.target.value, "address")}
          fullWidth
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          style={{ width: styles.width }}
          name="contact"
          onChange={(e) => handleChange(e.target.value, "contact")}
          fullWidth
          id="outlined-basic"
          label="Contact"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          style={{ width: styles.width }}
          onClick={() => handleSubmit()}
          fullWidth
          className="button"
          variant="outlined"
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
}
