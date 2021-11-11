import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { FilledInput } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import './styles/SearchFarmList.css';

export default function ProductCreate() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
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
                <h3>Create a Product</h3>
                <TextField fullWidth id="outlined-basic" label="Product Name" variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Logo" variant="outlined" />
                <TextField type="number" fullWidth label="Quantity" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                <FilledInput
                    fullWidth
                    id="filled-adornment-amount"
                    value={values.amount}
                    type="number"
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
                <Button fullWidth className="button" variant="outlined" >Create</Button>
            </Grid>
        </Grid>
    );
}