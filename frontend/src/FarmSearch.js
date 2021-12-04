import React, {useState} from "react";
import SearchFarmList from "./SearchFarmsList.js";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

export default function FarmSearch({listOfFarms}) {
    const [searchTerm, setSearchTerm] = useState("");

    const styles = {
        width: 300, //assign the width as your requirement
      };

    function handleSearchChange(e) {
        setSearchTerm(e.target.value);
    }

    return (
        <Container>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            >
                <Grid item xs={3}>
                    <TextField 
                        style={{ width: styles.width }}
                        onChange={handleSearchChange}
                        value={searchTerm}
                        label="Search"
                        variant="outlined" 
                    />
                </Grid>
            </Grid>
            <br />

            <SearchFarmList listOfFarms={listOfFarms} searchTerm={searchTerm} />
        </Container>
    )
}