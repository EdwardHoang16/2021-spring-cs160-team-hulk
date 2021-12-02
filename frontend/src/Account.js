import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Account() {
    const [isLoggedIn, setIsLoggedIn] = useState();

    let history = useHistory();

    useEffect(() => {
        setIsLoggedIn(localStorage.key("isLoggedIn"));
      }, []);

    function handleLogOut() {
        setIsLoggedIn(false);
        localStorage.clear();
        history.push("/login");
        window.location.reload();
    }

    return (
        <>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            >
                <Grid item xs={3}>
                    <Button variant="contained" onClick={handleLogOut}>Log Out</Button>
                </Grid>
            </Grid>
        </>
    )
}