import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { CardActionArea } from '@mui/material';
import './styles/SearchFarmList.css';

export default function FarmCreate() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            display="flex"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <h3>Create a Farm</h3>
                <TextField fullWidth id="outlined-basic" label="Farm Name" variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Logo" variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" />
                <Button fullWidth className="button" variant="outlined" >Create</Button>
            </Grid>
        </Grid>
    );
}