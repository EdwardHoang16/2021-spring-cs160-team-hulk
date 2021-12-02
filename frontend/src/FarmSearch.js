import React, {useState} from "react";
import SearchFarmList from "./SearchFarmsList.js";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function FarmSearch({listOfFarms}) {
    const [searchTerm, setSearchTerm] = useState("");

    const styles = {
        width: 300, //assign the width as your requirement
      };

    function handleSearchChange(e) {
        setSearchTerm(e.target.value);
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
                    <TextField 
                        style={{ width: styles.width }}
                        onChange={handleSearchChange}
                        value={searchTerm}
                        label="Search"
                        variant="outlined" 
                    />
                </Grid>
            </Grid>
            <SearchFarmList listOfFarms={listOfFarms} searchTerm={searchTerm} />
        </>
    )
}