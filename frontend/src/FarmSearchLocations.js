import React from 'react';
import SearchFarmList from './SearchFarmList';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Map from './Map';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function FarmSearchLocations() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Map />
                <Grid item xs={4}>
                    <Item>
                        <SearchFarmList />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
