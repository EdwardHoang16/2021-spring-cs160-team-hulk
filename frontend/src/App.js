import React from "react";
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";
import LogInForm from "./LogInForm";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FarmSearchLocations from "./FarmSearchLocations";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
    const listOfFarms = [
        { id: 1, title: "Dill's Pickle Farm", inventory: [{ title: "Pickles", price: "$2/pound", img: "https://images.unsplash.com/photo-1462536738427-0725f3eb98f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" }], img: "https://images.unsplash.com/photo-1610602925036-1d81bb50065a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" },
        { id: 2, title: "Fresh Family Farms", inventory: [{ title: "Tomatoes", price: "$1.30/pound", img: "https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=830&q=80" }], img: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1078&q=80" },
        { id: 3, title: "Bob's Honey", inventory: [{ title: "Honey", price: "$5/jar", img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" }], img: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" },
        { id: 4, title: "Golden Oaks Acre", inventory: [{ title: "Carrots", price: "$2/pound", img: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=999&q=80" }], img: "https://images.unsplash.com/photo-1585499193151-0f50d54c4e1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80" }
    ];

    const theme = createTheme({
        palette: {
            primary: {
                main: '#008000'
            }
        }
    })

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
                            <LogInForm />
                        </Route>
                        <Route exact path="/farms">
                            <FarmSearchLocations />
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        </ThemeProvider>
    );
}
