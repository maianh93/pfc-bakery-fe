import React from "react";
import { Container, Box, Grid, FormControl, TextField, MenuItem, Icon } from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import ThumbSlider from "../../components/ThumbSlider/ThumbSlider";
import SimpleAccordion from "../../components/Accordion/Accordion";
import Card from "../../components/Card/Card";

import styles from "./Product.module.css"

const currencies = [
    {
        value: 'sizeS',
        label: 'Nhỏ',
    },
    {
        value: 'sizeM',
        label: 'Vừa',
    },
    {
        value: 'sizeL',
        label: 'To',
    },
];

const Product = () => {
    const [currency, setCurrency] = React.useState('sizeS');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <ThumbSlider />
                    </Grid>
                    <Grid item xs={5}>
                        <div className="product_detail">
                            <h1>RASPBERRY RIPPLE CAKE</h1>
                            <p>£55.00</p>
                            <p>8-layers of rippled raspberry and vanilla sponge with a fresh raspberry and buttercream filling and raspberry-rippled vanilla buttercream icing. Crammed with fresh raspberries and Winner of the Financial Times’ Best Birthday Cake taste test!</p>

                            <FormControl>
                                <p>Size</p>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch', maxWidth: '100%', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            value={currency}
                                            onChange={handleChange}

                                        >
                                            {currencies.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                </Box>
                            </FormControl>

                        </div>
                        <div className="quantity">
                            <p>Số Lượng</p>
                            <RemoveCircleOutlineOutlinedIcon />
                            <input type="number" />
                            <AddCircleOutlinedIcon />
                        </div>
                        <SimpleAccordion />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Product