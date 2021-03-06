import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";
import LogInPage from "./LogInPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MapPage from "./components/map/MapPage";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import FarmCreate from "./FarmCreate";
import ProductCreate from "./ProductCreate";
import FarmDetail from "./FarmDetail";
import FarmSearch from "./FarmSearch";
import Account from "./Account";
import axios from "axios";

export default function App() {
  const [listOfFarms, setListOfFarms] = useState([]);
  const [listOfProducts, setListOfProducts] = useState([]);
  // const listOfFarms = [
  //   {
  //     id: 1,
  //     title: "Dill's Pickle Farm",
  //     inventory: [
  //       {
  //         title: "Pickles",
  //         price: "$2/pound",
  //         img: "https://images.unsplash.com/photo-1462536738427-0725f3eb98f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  //       },
  //     ],
  //     img: "https://images.unsplash.com/photo-1610602925036-1d81bb50065a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  //   },
  //   {
  //     id: 2,
  //     title: "Fresh Family Farms",
  //     inventory: [
  //       {
  //         title: "Tomatoes",
  //         price: "$1.30/pound",
  //         img: "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=830&q=80",
  //       },
  //     ],
  //     img: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1078&q=80",
  //   },
  //   {
  //     id: 3,
  //     title: "Bob's Honey",
  //     inventory: [
  //       {
  //         title: "Honey",
  //         price: "$5/jar",
  //         img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  //       },
  //     ],
  //     img: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  //   },
  //   {
  //     id: 4,
  //     title: "Golden Oaks Acre",
  //     inventory: [
  //       {
  //         title: "Carrots",
  //         price: "$2/pound",
  //         img: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=999&q=80",
  //       },
  //     ],
  //     img: "https://images.unsplash.com/photo-1585499193151-0f50d54c4e1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80",
  //   },
  // ];

  useEffect(async () => {
    const resultFromFarm = await axios.get("http://localhost:8080/api/farms"); // fetch farm
    const resultFromProduct = await axios.get("http://localhost:8080/api/farms/products"); // fetch product

    setListOfFarms(resultFromFarm.data);
    setListOfProducts(resultFromProduct.data);
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#008000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/">
              <HomePage listOfFarms={listOfFarms} />
            </Route>
            <Route exact path="/sign-up">
              <SignUpPage />
            </Route>
            <Route exact path="/login">
              <LogInPage />
            </Route>
            <Route exact path="/farms/create">
              <FarmCreate setListOfFarms={setListOfFarms} listOfFarms={listOfFarms} />
            </Route>
            <Route exact path="/products/create">
              <ProductCreate />
            </Route>
            <Route exact path="/find-farms">
              <MapPage />
            </Route>
            <Route exact path="/farms">
              <FarmSearch listOfFarms={listOfFarms} />
            </Route>
            <Route exact path="/farms/:id">
              <FarmDetail />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}
