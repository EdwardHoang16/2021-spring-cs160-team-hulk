import * as React from 'react';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { FilledInput } from '@mui/material';
import "./ProductCreate.css";
import InputAdornment from '@mui/material/InputAdornment';
import axios from "axios";

import './styles/SearchFarmList.css';

export default function ProductCreate(props) {
    const [productName, setProductName] = React.useState(''); // 1
    const [logo, setLogo] = React.useState(''); // 2
    const [amount, setAmount] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [weightRange, setWeightRange] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    // 1: productName
    const [errors, setErrors] = React.useState([]);

    const handleChange = (value, type) => {
        let _errors = [];
        switch (type) {
            case 'productName':
                _errors = errors.filter(id => id !== 1);
                setErrors(_errors);
                setProductName(value);
                break;
            case 'logo':
                _errors = errors.filter(id => id !== 2);
                setErrors(_errors);
                setLogo(value);
                break;
            case 'productName':
                _errors = errors.filter(id => id !== 1);
                setErrors(_errors);
                setProductName(value);
                break;
            default:
                break;
        }
        // setValues({ ...values, [prop]: event.target.value });
        // console.log(prop);
    };

    const handleSubmit = () => {
        const _errors = JSON.parse(JSON.stringify(errors));
        if (!productName.length) {
            if (!_errors.includes(1)) {
                _errors.push(1);
                setErrors([1]);
            }
        }

        if (!logo.length) {
            if (!_errors.includes(2)) {
                _errors.push(2);
                setErrors([2]);
            }
        }

        // call backend
        processData();
    }

    const processData = async () => {
        const product = { productName: productName, logo: logo };
        const response = await axios.post(
            "http://localhost:8080/api/userCredentials",
            product
        );

        console.log(response);
    }


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
                <TextField required error={errors.includes(1)} onChange={(e) => handleChange(e.target.value, 'productName')} fullWidth id="outlined-basic" value={productName} label="Product Name" variant="outlined" />
                <TextField required error={errors.includes(2)} onChange={(e) => handleChange(e.target.value, 'logo')} fullWidth id="outlined-basic" label="Logo" variant="outlined" />
                <TextField type="number" fullWidth label="Quantity" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                <FilledInput
                    fullWidth
                    id="filled-adornment-amount"
                    value={amount}
                    type="number"
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
                <Button fullWidth className="button" variant="outlined" onClick={() => handleSubmit()}>Create</Button>
            </Grid>
        </Grid>
    );
}