import React, {useState} from "react";
import SearchFarmList from "./SearchFarmsList.js";
import Grid from '@mui/material/Grid';

export default function FarmSearch({listOfFarms}) {
    const [searchTerm, setSearchTerm] = useState("");

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
                    <label htmlFor="search"><strong>Search: </strong></label>
                    <input type="text" value={searchTerm} onChange={handleSearchChange} id="search" />
                </Grid>
            </Grid>
            <SearchFarmList listOfFarms={listOfFarms} searchTerm={searchTerm} />
        </>
    )
}