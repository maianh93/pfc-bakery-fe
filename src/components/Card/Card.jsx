import { Grid, Container, Box } from '@mui/material';
import * as React from 'react';


const Card = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <div className='item'>
                    <img src="/image/main-menu/cake/raspberry-ripple-cake.webp" alt="" />
                    <p>RASPBERRY RIPPLE CAKE</p>
                    <p>from £55.00</p>
                </div>
            </Box>
        </Container>

    )
}

export default Card
